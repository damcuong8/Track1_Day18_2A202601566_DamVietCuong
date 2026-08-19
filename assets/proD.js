/* ==========================================================================
   proD.js — Option D: AI IM CHO ĐẾN KHI BẠN CHỈ VÀO MỘT CHỖ
             (Hoàng Minh Quân phụ trách)

   Khác ba option kia ở chỗ AI không làm gì trước:
     - Option A: người dùng tự viết hết.
     - Option B: AI đề xuất sẵn cả bộ thẻ, người dùng duyệt.
     - Option C: AI soạn xong 100% ngay khi mở trang.
     - Option D: AI **im**. Chỉ khi người dùng khoanh đúng một chỗ trên slide
       thì mới sinh **một** lời giải cho đúng chỗ đó. Không bộ ôn, không quiz.

   Pattern: Ask on demand — người gọi, máy trả đúng phạm vi được chỉ.

   Tín hiệu uncertainty: nếu vùng khoanh không trúng thành phần nào rõ ràng
   trên slide, lời giải mang nhãn "AI không chắc" để người học đối chiếu lại.

   Tab "Ghi chú gốc" và "Tổng hợp" dùng chung module notesview.js như B và C.
   ========================================================================== */
(function () {
  'use strict';

  var pick = null;          // {rect, parts} — chỗ người dùng vừa chỉ
  var data = null;          // {explain, quote}
  var easy = false;         // đang xem bản dễ hơn
  var busy = false, err = null;
  var tab = 'd';            // 'd' | 'chat' | 'notes' | 'sum'
  var chat = null, notesView = null;
  var app, head, tabs, body, foot;

  Core.init({
    option: 'D',
    brand: '#0f766e',
    title: 'Option D — Chỉ đúng chỗ bạn hỏi',
    subtitle: 'Hoàng Minh Quân phụ trách · AI im cho đến khi bạn chỉ vào một chỗ',
    hint: 'Khoanh một chỗ trên slide. Mình chỉ giải thích đúng chỗ đó — không soạn bộ ôn, không làm quiz.',
    onSlide: function (slide, a) { app = a; shell(); draw(); },
    onKey: function () { draw(); }
  });

  /* ---------- chỉ chỗ ---------- */
  function askSpot() {
    if (!app.slide.img) return;
    app.capture(function (rect) {
      pick = { rect: rect, parts: Core.describeRect(app.slide, rect) };
      data = null; easy = false;
      fetchExplain();
    }, false, { label: 'Giải thích chỗ này' });
  }

  function fetchExplain() {
    if (!window.AI || !AI.on()) { draw(); return; }
    busy = true; err = null; draw();

    var where = pick.parts.length
      ? 'Người học đang chỉ vào phần sau của slide: ' + pick.parts.join('; ') + '.'
      : 'Người học khoanh một vùng trên slide nhưng vùng đó không trùng rõ với thành phần nào.';

    AI.call({
      maxTokens: 4000,
      schema: {
        type: 'object',
        properties: {
          explain: { type: 'string' },
          quote: { type: 'string' }
        },
        required: ['explain', 'quote'],
        additionalProperties: false
      },
      system:
        'Bạn là trợ giảng cho sinh viên Việt Nam. Trả lời hoàn toàn bằng tiếng Việt. ' +
        'Chỉ dùng thông tin có trong nội dung slide được đưa, không bịa thêm. ' +
        'Người học chỉ hỏi về ĐÚNG MỘT CHỖ trên slide — chỉ giải thích chỗ đó, ' +
        'KHÔNG tóm tắt cả slide, KHÔNG ra câu hỏi ôn tập, KHÔNG liệt kê ý chính. ' +
        (easy
          ? '"explain": giải thích lại thật dễ hiểu, 2–3 câu ngắn, dùng từ đời thường, tránh thuật ngữ. '
          : '"explain": giải thích 3–4 câu, đủ để hiểu chỗ đó là gì và vì sao nó ở đây. ') +
        '"quote": trích đúng cụm chữ xuất hiện trên slide mà lời giải bám vào, để người học đối chiếu.',
      user: where + '\n\nNội dung slide:\n' + app.slide.content
    }).then(function (out) {
      busy = false; data = out; draw();
    }).catch(function (e) {
      busy = false; err = e.message; draw();
    });
  }

  function askEasier() { easy = true; data = null; fetchExplain(); }

  function closeExplain() {
    pick = null; data = null; easy = false; err = null;
    app.captureOff();
    draw();
  }

  /* ---------- khung panel ---------- */
  function shell() {
    app.dock.innerHTML = '';
    head = Core.el('div', 'dock-head',
      '<h2>Hỏi đúng một chỗ</h2>' +
      '<div class="lead">Mình không soạn bộ ôn và không làm quiz. Mình im cho đến khi bạn chỉ vào.</div>');
    tabs = Core.el('div', 'tabs');
    body = Core.el('div', 'dock-body');
    foot = Core.el('div', 'dock-foot');
    app.dock.append(head, tabs, body, foot);

    [['d', 'Chỗ đang hỏi'], ['chat', 'Trò chuyện'],
    ['notes', 'Ghi chú gốc'], ['sum', 'Tổng hợp']].forEach(function (t) {
      var b = Core.el('button', '', t[1]);
      b.dataset.tab = t[0];
      b.onclick = function () {
        if (tab === t[0]) return;
        tab = t[0];
        if (tab !== 'chat' && chat) chat.unmount();
        if (tab !== 'd') app.captureOff();
        draw();
      };
      tabs.appendChild(b);
    });
    if (!notesView) notesView = NotesView.create(app);
  }

  Notes.onChange(function () {
    if (app && (tab === 'notes' || tab === 'sum')) draw();
  });

  function draw() {
    if (!app || !body) return;
    body.innerHTML = '';
    foot.innerHTML = '';
    [].forEach.call(tabs.children, function (b) {
      b.classList.toggle('on', b.dataset.tab === tab);
    });

    if (!app.slide.img) {
      body.appendChild(Core.el('div', 'notice slate',
        'Trang slide này chưa có nội dung. Quay lại <b>Slide 5</b>.'));
      return;
    }
    if (tab === 'chat') return drawChat();
    if (tab === 'notes') { app.captureOff(); return notesView.mountRaw(body, foot); }
    if (tab === 'sum') { app.captureOff(); return notesView.mountSummary(body, foot); }

    if (!window.AI || !AI.on()) {
      body.appendChild(AI.offNotice(
        'AI chưa được kết nối nên chưa giải thích được.', function () { draw(); }));
      return;
    }
    if (busy) { body.appendChild(AI.loading('Đang giải thích đúng chỗ bạn chỉ...')); return; }
    if (err) {
      body.appendChild(Core.el('div', 'notice amber', '⚠️ ' + esc(err)));
      var again = Core.el('button', 'btn sm', 'Thử lại');
      again.onclick = fetchExplain;
      body.appendChild(again);
      return;
    }
    if (!pick) return drawIdle();
    if (data) return drawExplain();
  }

  /* ---------- trạng thái im, chưa ai chỉ ---------- */
  function drawIdle() {
    body.appendChild(Core.el('div', 'notice slate',
      '🤫 <b>Mình chưa soạn gì cả.</b> Khác với các phương án kia, mình không tự tổng hợp ' +
      'trước. Bạn khoanh chỗ nào đang vướng thì mình giải thích đúng chỗ đó.'));

    var go = Core.el('button', 'btn pri', '🖍 Chỉ một chỗ trên slide');
    go.onclick = askSpot;
    body.appendChild(go);

    body.appendChild(Core.el('div', 'muted',
      'Không có bộ ôn tập, không có câu hỏi tự kiểm tra. Chỉ một lời giải cho một chỗ.'));
  }

  /* ---------- lời giải cho đúng chỗ đã chỉ ---------- */
  function drawExplain() {
    var unsure = !pick.parts.length;

    /* mẩu gốc đặt ngay trên lời giải, để đối chiếu không phải tin suông */
    body.appendChild(Core.el('div', 'seclabel',
      'Chỗ bạn đang hỏi' + (pick.parts.length
        ? ' <span class="count">' + pick.parts.length + ' thành phần</span>' : '')));
    body.appendChild(Core.el('div', 'quote',
      pick.parts.length ? pick.parts.join(' · ') : 'Vùng khoanh trên slide'));

    var c = Core.el('div', 'card',
      '<h3>Giải thích' + (easy ? ' (bản dễ hơn)' : '') +
      ' <span class="aitag">AI VIẾT</span></h3>' +
      '<div class="tx">' + esc(data.explain).replace(/\n/g, '<br>') + '</div>');
    c.appendChild(Core.el('div', 'quote', '“' + esc(data.quote) + '” — chữ trên slide'));
    if (unsure) {
      c.appendChild(Core.el('div', 'notice amber',
        '⚠️ <b>AI không chắc</b> — vùng bạn khoanh không trùng rõ với thành phần nào ' +
        'trên slide, nên lời giải này có thể lệch. Đối chiếu lại với slide trước khi tin.'));
    }
    body.appendChild(c);

    if (!easy) {
      var e = Core.el('button', 'btn sm', '🙂 Giải thích dễ hơn');
      e.onclick = askEasier;
      foot.appendChild(e);
    }
    var again = Core.el('button', 'btn sm', '🖍 Chỉ chỗ khác');
    again.onclick = function () { closeExplain(); askSpot(); };
    foot.appendChild(again);

    var x = Core.el('button', 'btn sm ghost', '✕ Đóng, về slide');
    x.onclick = closeExplain;
    foot.appendChild(x);
  }

  function drawChat() {
    if (!chat) chat = Chat.create(app, { context: app.slide.content });
    chat.mount(body, foot);
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c];
    });
  }
})();
