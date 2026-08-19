# Chặng 6 — Biên bản test

**Nhóm:** cuong
**Người ghi:** Lê Quang Huy (2A202601821)
**Case B** — AI Notes: Personal Learning Notes

Chạy trên [prototype chung bốn option](prototype/index.html), theo
[Chặng 5 — Chuẩn bị test](05-test-prep.md).

---

## 1. Cảnh báo về chất lượng dữ liệu — đọc trước khi dùng file này

File này có **hai loại dữ liệu**, và chúng không ngang giá trị nhau:

| Loại | Nguồn | Độ tin |
|---|---|---|
| **Tester nói gì** (mục 3) | Người ghi thuật lại, chưa phải nguyên văn | Thấp — là ý kiến và đề xuất tính năng |
| **Tester làm gì** (mục 4) | Nhật ký prototype tự ghi, nguyên văn ở phụ lục | Cao — là thao tác đã xảy ra, có mốc giờ |

Ba điều phải nhớ:

1. **Phần tester nói gần như toàn bộ là ý kiến.** Câu *"họ prefer hơn"* là phát biểu sở thích;
   theo giới hạn của đề nó **không** đỡ được value claim nào.
2. **Tester đang thiết kế giải pháp hộ nhóm.** Đoạn *"AI phải tự define chỗ chưa logic..."* là
   đề xuất tính năng — đáng ghi lại như **tín hiệu về chỗ đang thiếu**, không phải bản đặc tả
   để đi làm.
3. **Có chỗ hai loại dữ liệu mâu thuẫn nhau.** Xem mục 4.2. Chỗ nào lệch thì **lấy hành vi**.

Vẫn còn một mảng trống công cụ không bắt được: nhật ký chỉ ghi thao tác có bấm, không ghi cuộn
trang hay thời gian nhìn. Nên *evidence read / ignored* — một trong năm observation focus —
phải do người ngồi cạnh nhớ lại. Xem mục 7.

---

## 2. Thông tin buổi test

| Mục | Nội dung |
|---|---|
| Tester | anh Coach Lab — **chưa kịp hỏi tên**. Ngoài nhóm, là HS/SV nên đúng chân dung target user |
| Ngày | 19/08/2026 |
| Có context liên quan | Có — cũng là sinh viên, vẫn đang đi học và ôn bài |
| Thứ tự mở option | D → C → A → B, sau đó đảo qua lại nhiều lần |
| Tổng thời lượng | 10:09:38 → 10:22:57 — **13 phút 19 giây** |
| Nhật ký hành vi | **Có.** Nguyên văn ở [phụ lục](#phụ-lục--nhật-ký-hành-vi-nguyên-văn) |

---

## 3. Tester nói gì

> Ghi theo lời người ghi thuật lại. **Chưa phải nguyên văn tester** — chỗ nào nhớ được nguyên
> văn thì bổ sung sau và đánh dấu rõ.

| # | Tester nói / đề xuất | Về option nào | Dạng gì |
|---|---|---|---|
| T1 | Nếu làm theo B thì giảm giao diện xuống còn **hai nút**: *giữ thẻ* hoặc *sửa thẻ* | B | Đề xuất thay đổi giao diện |
| T2 | Thích hơn một phương án **gộp C với D** | C, D | Phát biểu sở thích |
| T3 | Cơ chế mong muốn: sau khi AI tổng hợp, **AI tự xác định chỗ nào chưa logic hoặc thiếu thông tin**, **hỏi lại người dùng**, rồi **liệt kê thành từng mục**; người dùng bấm vào một mục thì AI **giải thích tường minh** phần đó | C + D | Đề xuất cơ chế |

---

## 4. Tester đã làm gì — đọc từ nhật ký

Đây là phần **quan sát được**, khác hẳn mục 3.

### 4.1. Phân bổ thao tác

| Option | Số lần mở | Số thao tác thật (không tính chuyển option) | Thao tác nào |
|---|---|---|---|
| A | 2 | 3 | gõ nội dung, gửi thẻ, gắn nguồn |
| B | 3 | 2 | sửa tay thẻ, đổi thẻ khác |
| C | 5 | 2 | đổi mục tiêu, rollback |
| **D** | **5** | **7** | chọn mẩu ×5, xin bản dễ hơn, đóng lời giải |

**D được mở nhiều nhất và có nhiều thao tác nhất** — gấp hơn ba lần B và C cộng lại.

### 4.2. T1 bị chính nhật ký phản chứng

Tester nói giữ lại hai nút *giữ thẻ* và *sửa thẻ*. Nhật ký cho thấy ở Option B tester bấm:

| Nút | Có bấm không |
|---|---|
| Sửa | **Có** — 10:22:41 |
| Đổi thẻ khác | **Có** — 10:22:45 |
| Giữ thẻ | **Không lần nào** |
| Bỏ thẻ | **Không lần nào** |

Tức là hai nút tester **thật sự dùng** là *Sửa* và *Đổi*, còn *Giữ* — một trong hai nút tester
đề nghị giữ lại — **chưa được bấm lần nào**.

> Đây là chỗ ý kiến và hành vi lệch nhau, và theo đúng nguyên tắc của bài thì **hành vi đáng
> tin hơn**. T1 chưa dùng được làm căn cứ cắt giao diện. Cần một buổi nữa để biết tester bỏ
> qua *Giữ* vì không cần, hay vì chưa duyệt xong thẻ nào thì đã chuyển option.

Lưu ý giới hạn: tester chỉ ở Option B tổng cộng khoảng **15 giây** trong lượt có thao tác
(10:22:32 → 10:22:47). Có thể tester chưa kịp dùng hết các nút chứ không phải không cần.

### 4.3. Bảy phút rưỡi im lặng trên Option C

Từ **10:13:51 đến 10:21:27** không có thao tác nào được ghi, trong khi tester đang ở Option C.
**7 phút 36 giây** — khối thời gian dài nhất cả buổi, chiếm hơn nửa buổi test.

Nhật ký không phân biệt được *đang đọc kỹ*, *đang nói chuyện với facilitator*, hay *đang bí*.
**Người ngồi cạnh phải nhớ lại và điền vào đây** — đây là dữ liệu quan trọng nhất buổi mà
công cụ không bắt được.

### 4.4. Đổi mục tiêu rồi rollback sau 4 giây

```
10:21:27  [C]  đổi mục tiêu sang "Ôn nhanh 5 phút"
10:21:31  [C]  rollback — bỏ bản AI soạn, quay về ghi chú thô
```

Bốn giây. Thử một nút kiểm soát, rồi bỏ luôn cả bản AI soạn.

Diễn giải của nhóm: đường phục hồi của Option C **được dùng thật**, không phải nút trang trí —
đây là câu hỏi nhóm đã đặt ở [Chặng 5](05-test-prep.md) mục 3. Nhưng nó được dùng ngay sau khi
thử tuỳ chỉnh, nên chưa rõ tester rollback vì *bản rút gọn không đạt* hay vì *muốn xem ghi chú
thô trông thế nào*.

### 4.5. First action — hai option máy im

| Option | Từ lúc mở đến thao tác đầu | Làm gì đầu tiên |
|---|---|---|
| **A** | **3 giây** | Gõ thẳng nội dung. **Không chờ máy nói** |
| **D** | 13 giây | Chọn mẩu đầu tiên |

Ở Option A, tester **tự gõ ngay**, không ngồi chờ AI. Rủi ro nhóm lo ở [Chặng 5](05-test-prep.md)
mục 3 — *khung chat làm người ta mong máy trả lời* — **không xảy ra với tester này**.

### 4.6. Slide 7 là điểm nóng, Slide 11 gần như bị bỏ qua

Mẩu **Ghi chú ngắn · Slide 7** xuất hiện ở cả ba option có thao tác:

- A — mẩu duy nhất được gắn vào thẻ (10:22:29)
- B — thẻ bị sửa tay và bị đổi đều thuộc nguồn Slide 7 (10:22:41, 10:22:45)
- D — được chọn hai lần, và là mẩu duy nhất tester **xin bản giải thích dễ hơn** (10:22:52)

Slide 7 **chính là mẩu mang tag đỏ *"AI không chắc — mẩu gốc quá ngắn"*** trong prototype.

Trong khi đó **Ảnh chụp + Chưa hiểu · Slide 11** — mẩu được đánh dấu *chưa hiểu*, thứ cả
Hypothesis Problem xoay quanh — chỉ được chọn **một lần duy nhất**, giữ 4 giây (10:22:09), rồi
không quay lại.

> **Hai cách đọc, chưa phân biệt được:** hoặc tester **có** để ý tag *"AI không chắc"* và dồn
> sự chú ý vào đúng chỗ hệ thống báo yếu — nếu vậy tín hiệu uncertainty đang hoạt động; hoặc
> Slide 7 đơn giản là mẩu khó nhất về nội dung, chẳng liên quan gì tới tag. **Phải hỏi tester
> mới biết**, nhật ký không trả lời được.
>
> Nếu là cách đọc thứ hai thì có một chuyện đáng lo: mẩu *chưa hiểu* bị bỏ qua gần như hoàn
> toàn, trong khi hypothesis đang đặt nó ở trung tâm.

### 4.7. Bốn phút đầu chỉ đảo option, không làm gì

Từ 10:09:38 đến 10:13:51 có **10 lần chuyển option** và **không một thao tác nào khác**.
Tester đảo qua đảo lại D↔C↔A↔B để xem trước, chưa bắt tay làm.

Diễn giải: có thể tester muốn nhìn hết bốn phương án rồi mới chọn chỗ để làm — hợp lý khi
được giao bốn thứ cùng lúc. Nhưng nó cũng nghĩa là **task chưa đủ sức kéo tester vào việc**
trong bốn phút đầu.

Cần chú ý cho buổi sau: cho tester chạy **hết một option rồi mới mở option kế tiếp**, thay vì
để cả bốn nút mở sẵn ngay từ đầu.

---

## 5. Nếu nhóm dựng phương án gộp — rủi ro phải xử lý trước

> Chưa dựng. Ghi ra đây để nếu iteration sau làm thì không bỏ sót.

T3 bóc ra thì gồm ba mảnh:

| Mảnh | Đã có ở đâu chưa | Nhận xét |
|---|---|---|
| AI tổng hợp trước, cả gói | **Có** — chính là Option C | Không mới |
| Bấm vào một mục thì được giải thích riêng mục đó | **Có** — chính là Option D | Không mới |
| **AI tự khai báo chỗ nó chưa chắc, rồi hỏi ngược lại người dùng** | **Chưa có ở option nào** | **Đây mới là phần mới** |

Mảnh thứ ba đánh trúng điểm yếu nhóm đã tự ghi ở [Chặng 3](03-human-ai-design-pass.md) mục 2.2:
ở Option C, *AI làm nhiều nhất trong khi sai lại khó phát hiện nhất*.

Hiện prototype mới có tín hiệu **bị động** — tag đỏ *"AI không chắc"*. Tester đang đòi tín hiệu
**chủ động**: AI nói ra chỗ nó thiếu và hỏi lại. Và mục 4.6 cho thấy tag bị động **có thể** đã
có tác dụng rồi, chỉ là chưa chứng minh được.

**Rủi ro chính: AI không biết cái nó không biết.** Nếu AI chỉ đánh dấu được những chỗ nó tự
nhận ra là thiếu, thì mọi chỗ **không** bị đánh dấu sẽ mặc nhiên được người học tin là đúng.
Tín hiệu này có thể làm chỗ sai nguy hiểm nhất — chỗ AI sai mà không biết mình sai — trở nên
**khó phát hiện hơn** trước.

Cần thử: giới hạn phần AI tự đánh dấu vào thứ kiểm được máy móc — *"mẩu ghi chú gốc chỉ có một
dòng"*, *"mục này không có mẩu nào đỡ"* — thay vì để AI tự đánh giá *"chỗ này chưa logic"*.

**Rủi ro thứ hai: hỏi ngược lại là thêm việc.** Pattern Act ở Option C được chọn để bỏ hết thao
tác. Chèn một vòng hỏi đáp vào giữa là kéo nó về gần Option B. Phải đo xem người học chịu trả
lời mấy câu trước khi bỏ ngang.

## 6. Kết luận

> **Với Hypothesis Problem này, chúng tôi đã thử bốn cách giải. Tester đã dành hơn nửa buổi
> trên Option C, thao tác nhiều nhất trên Option D, đổi mục tiêu ở C rồi rollback sau 4 giây,
> tự gõ ngay ở Option A mà không chờ AI, và quay lại mẩu Slide 7 ở cả ba option có thao tác
> trong khi gần như bỏ qua mẩu đánh dấu "chưa hiểu". Tester nói muốn rút Option B xuống hai
> nút giữ/sửa, nhưng nhật ký cho thấy hai nút thật sự được dùng là sửa và đổi, còn nút giữ
> chưa bấm lần nào. Vì vậy iteration tiếp theo chúng tôi sẽ chạy lại Option B với thời lượng
> đủ để tester duyệt hết bốn thẻ trước khi kết luận nút nào thừa, hỏi tester vì sao Slide 7
> được quay lại nhiều lần còn mẩu "chưa hiểu" thì không, và dựng thử tín hiệu "AI tự khai báo
> chỗ chưa chắc" giới hạn trong những thứ kiểm được máy móc.**

Nhóm **không** kết luận *"User đã xác nhận solution này đúng."*

Lý do: một tester, một buổi 13 phút, phần lớn thời gian không có thao tác nào được ghi, và
mẩu feedback rõ ràng nhất (T1) đã bị chính nhật ký hành vi phản chứng một nửa.

---

## 7. Còn thiếu — làm trước khi nộp

- [ ] Điền tên tester, ngày, và **có context liên quan hay không** (mục 2).
- [ ] **Bảy phút rưỡi im lặng trên Option C** (mục 4.3) — người ngồi cạnh nhớ lại: tester đang
      đọc, đang nói chuyện, hay đang bí? Đây là dữ liệu quan trọng nhất mà công cụ không bắt được.
- [ ] Hỏi tester: có để ý tag *"AI không chắc"* trên Slide 7 không, hay quay lại Slide 7 vì lý
      do khác (mục 4.6).
- [ ] Hỏi tester: vì sao mẩu *"chưa hiểu"* — Slide 11 — chỉ mở 4 giây rồi thôi.
- [ ] Chép nguyên văn ít nhất một câu tester tự nói ra. Hiện chưa có câu nào.
- [ ] Ghi ba câu trả lời cuối buổi (chọn option nào, mất gì, không dùng cái nào).

---

## Phụ lục — nhật ký hành vi nguyên văn

Xuất từ prototype bằng nút *Copy nhật ký*. Không sửa, không sắp xếp lại.

```
10:09:38	[D]	chuyển sang option D
10:09:46	[C]	chuyển sang option C
10:09:48	[A]	chuyển sang option A
10:09:53	[B]	chuyển sang option B
10:10:45	[C]	chuyển sang option C
10:10:46	[D]	chuyển sang option D
10:10:48	[C]	chuyển sang option C
10:11:00	[D]	chuyển sang option D
10:13:40	[B]	chuyển sang option B
10:13:51	[C]	chuyển sang option C
10:21:27	[C]	đổi mục tiêu sang "Ôn nhanh 5 phút"
10:21:31	[C]	rollback — bỏ bản AI soạn, quay về ghi chú thô
10:21:51	[D]	chuyển sang option D
10:22:04	[D]	chọn mẩu Highlight · Slide 3
10:22:06	[D]	chọn mẩu Ghi chú ngắn · Slide 7
10:22:09	[D]	chọn mẩu Ảnh chụp + Chưa hiểu · Slide 11 — chỗ đánh dấu chưa hiểu
10:22:13	[A]	chuyển sang option A
10:22:16	[A]	bắt đầu gõ nội dung cho thẻ tóm tắt
10:22:26	[A]	gửi thẻ tóm tắt vào sổ — 0 mẩu gắn kèm
10:22:29	[A]	gắn Ghi chú ngắn · Slide 7 vào thẻ đang soạn
10:22:32	[B]	chuyển sang option B
10:22:41	[B]	sửa tay thẻ tự kiểm tra, nguồn Ghi chú ngắn · Slide 7
10:22:45	[B]	bấm đổi thẻ khác, nguồn Ghi chú ngắn · Slide 7
10:22:47	[D]	chuyển sang option D
10:22:49	[D]	chọn mẩu Highlight · Slide 3
10:22:52	[D]	chọn mẩu Ghi chú ngắn · Slide 7
10:22:52	[D]	xin bản giải thích dễ hơn cho Ghi chú ngắn · Slide 7
10:22:54	[D]	đóng lời giải — Ghi chú ngắn · Slide 7, quay về ba mẩu thô
10:22:55	[D]	chọn mẩu Highlight · Slide 3
10:22:57	[C]	chuyển sang option C
```

**Giới hạn của nhật ký này:** chỉ ghi thao tác có bấm. Không ghi cuộn trang, không ghi rê
chuột, không ghi thời gian nhìn. Nên *"đọc evidence hay bỏ qua"* — một trong năm observation
focus — **không đo được bằng file này**, phải dựa vào người ngồi cạnh.
