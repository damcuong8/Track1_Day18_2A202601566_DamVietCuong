# Group Feedback Synthesis — Nhóm cuong

**Case B** — AI Notes: Personal Learning Notes
**Thành viên:** Lê Quang Huy (2A202601821), Đàm Việt Cường (2A202601566),
Trần Đức Bảo (2A202601472), Hoàng Minh Quân (2A202601574)

---

## 1. Trạng thái dữ liệu — đọc trước

Đề yêu cầu **ba Feedback Note từ ba tester ngoài nhóm**. Hiện có:

| Feedback Note | Người facilitate | Tester | Trạng thái |
|---|---|---|---|
| [prototype-feedback-note.md](prototype-feedback-note.md) | Lê Quang Huy | anh Coach Lab (chưa hỏi tên) — ngoài nhóm, **không phải target user** | **Có** — đủ nhật ký hành vi; thiếu câu nguyên văn. Vì tester là coach nên phiên này dùng cho interaction breakdown, **không rút value claim** |
| [06-prototype-feedback-hoangminhquan.md](06-prototype-feedback-hoangminhquan.md) | Hoàng Minh Quân | Một bạn cùng lớp, xác nhận **ngoài nhóm** | **Có** — đủ năm observation focus, có quote nguyên văn |
| — | Đàm Việt Cường | — | **Chưa có** |
| — | Trần Đức Bảo | — | **Chưa có** |

Ngoài ra [feedback.md](feedback.md) có **một dòng** của bạn Đức về bộ prototype gọi API thật.
Đó là một mẩu góp ý, **không phải Feedback Note** — không có observation, không có nhật ký,
không rõ ai facilitate.

> **Vì vậy phần tổng hợp dưới đây dựng trên hai phiên, chưa phải ba.** Mọi pattern nêu ra chỉ
> là *trùng nhau giữa hai nguồn*, chưa đủ để gọi là pattern của nhóm. Đây là chỗ lệch so với
> Gate 5, không phải chỗ đã xong.

---

## 2. Pattern — trùng nhau giữa hai phiên

Ba chỗ hai tester độc lập làm giống nhau:

**P1 — Cả hai chọn C và D, bỏ A và B.**
Tester của Quân nói thẳng: *"C với D tiện. C có sẵn cả bài, D bấm đúng chỗ chưa hiểu là xong,
nhanh. A phải tự viết, B phải bấm nhiều."* Tester của Huy cũng đề nghị gộp C với D. Và hành vi
khớp lời nói: ở phiên của Huy, D là option **được mở nhiều nhất và có nhiều thao tác nhất** —
7 thao tác, gấp hơn ba lần B và C cộng lại.

**P2 — Không ai duyệt thẻ ở Option B.**
Phiên Quân: *"không Giữ/Sửa/Bỏ"*. Phiên Huy: bấm *Sửa* và *Đổi*, **không** bấm *Giữ*, **không**
bấm *Bỏ*. Hai phiên, không phiên nào có một lần bấm *Giữ* — tức là **không ai chốt xong bộ thẻ
nào ở B**.

**P3 — Badge nguồn và tag "AI không chắc" không được đọc.**
Phiên Quân ghi rõ: *"B và C: không dừng ở badge Dựa vào Slide… hay AI không chắc"*. Phiên Huy
không đo trực tiếp được, nhưng cũng không có dấu hiệu nào cho thấy tester nhắc tới chúng.

> P3 đánh thẳng vào [Chặng 3](03-human-ai-design-pass.md) mục 2.2. Nhóm đã tự ghi rằng Option C
> **bắt buộc** phải có trích dẫn nguồn làm hàng rào, vì AI sai ở C khó phát hiện nhất. Nếu
> không ai đọc hàng rào đó thì Option C hiện **không có hàng rào nào đang hoạt động**.

---

## 3. Khác nhau giữa hai phiên

**K1 — Option A: một người gõ ngay, một người không gõ gì.**
Phiên Huy: gõ sau **3 giây**, không chờ AI. Phiên Quân: *"Mở ra thấy 3 mẩu và ô trống. Không
gõ. Hỏi máy trả lời khi nào rồi chuyển."*

Đúng rủi ro nhóm đã lo khi chuyển sang khung chat — *chat làm người ta mong máy trả lời*. Nó
xảy ra với một người và không xảy ra với người kia. Chưa đủ để kết luận, nhưng đủ để **không
được bỏ qua**.

**K2 — Đường phục hồi của C: một người dùng, một người không.**
Phiên Huy: đổi mục tiêu rồi **rollback sau 4 giây**. Phiên Quân: *"không rollback, không đổi
mục tiêu"*.

**K3 — Mẩu nào được quan tâm.**
Phiên Huy: mẩu *Ghi chú ngắn · Slide 7* được quay lại ở cả ba option; mẩu *"chưa hiểu" Slide 11*
chỉ mở 4 giây. Phiên Quân: **ngược lại** — sang D là *"bấm ngay Slide 11 (chưa hiểu)"*, và cả
buổi chỉ chọn Slide 11.

> K3 là chỗ hai phiên mâu thuẫn nhau rõ nhất, và nó chạm vào lõi hypothesis. Một người dồn chú
> ý vào mẩu *chưa hiểu*, một người gần như bỏ qua nó. Chưa biết vì sao.

---

## 4. Next Change

Một thay đổi cho vòng sau, chọn theo chỗ evidence chắc nhất — P2, hai phiên đều không chốt
được bộ thẻ nào ở B:

> **Bỏ bước duyệt từng thẻ ở Option B. Thay bằng: AI đưa cả bộ ở trạng thái đã nhận sẵn, người
> dùng chỉ can thiệp vào thẻ nào thấy sai.**

Vì sao là thay đổi này chứ không phải cái khác:

- **Không** cắt xuống hai nút *giữ / sửa* như tester của Huy đề nghị. Đề nghị đó bị chính nhật
  ký phản chứng: nút *giữ* là nút **chưa ai bấm lần nào**. Cắt theo lời nói sẽ giữ lại đúng cái
  nút không ai dùng.
- Hai phiên đều không hoàn thành vòng duyệt ở B, và cả hai đều ngả về C và D — hai option
  **không bắt duyệt gì cả**. Chi phí duyệt là thứ đang bị từ chối, không phải số lượng nút.
- Thay đổi này kéo B lại gần C, nên phải giữ khoảng cách bằng chỗ khác: B vẫn hiện thẻ ở dạng
  bản thảo có nguồn, C vẫn ra bản gộp không tách thẻ.

**Thay đổi thứ hai, mức nhỏ hơn:** làm tín hiệu *"AI không chắc"* khó bỏ qua hơn — hiện nó là
một nhãn nhỏ và P3 cho thấy không ai đọc. Chưa quyết làm cách nào; đây là chỗ đề xuất *"AI tự
nêu chỗ nó thiếu rồi hỏi lại"* của tester phiên Huy đáng được thử, kèm rủi ro đã ghi ở
[06-test-record.md](06-test-record.md) mục 5: **AI không biết cái nó không biết**.

---

## 5. Still Unproven

- **Hypothesis Problem chưa được kiểm chứng.** Hai phiên đo *interaction*, không đo *value*.
  Không tester nào cho biết việc này thật sự tiết kiệm được gì.
- **Chưa nguồn nào cho hậu quả định lượng** — không giờ, không điểm, không lần hỏng việc nào.
  Thiếu từ Day 17 tới giờ.
- **Mẩu "chưa hiểu" có phải trọng tâm không.** K3 cho hai câu trả lời ngược nhau từ hai người.
- **Vì sao Option A cho hai kết quả trái ngược** (K1) — do tester, do thứ tự chạy, hay do khung chat.
- **Tag "AI không chắc" có tác dụng không.** P3 nói không ai đọc; nhưng phiên Huy lại cho thấy
  mẩu mang tag đó là mẩu được quay lại nhiều nhất. Hai tín hiệu ngược nhau, chưa phân biệt được
  là do tag hay do nội dung mẩu đó khó.
- **Bộ prototype gọi API thật** ([proA](proA.html)–[proD](proD.html)) chưa được test với ai.
- **Chưa có phiên nào với đúng target user.** Tester của Huy là coach, tester của Quân là bạn
  cùng lớp có ôn bài bằng ghi chú — mới một trên hai phiên đúng chân dung người học trong
  Hypothesis Problem.

---

## 6. Việc phải làm trước khi nộp

- [ ] **Cường và Bảo chạy phiên test và viết Feedback Note.** Thiếu hai note; Gate 5 yêu cầu ba.
- [ ] Bổ sung ít nhất một câu nguyên văn tester ở phiên của Huy.
- [ ] Viết lại mục 2 và 3 của file này sau khi có đủ ba note — hiện đang dựng trên hai.
