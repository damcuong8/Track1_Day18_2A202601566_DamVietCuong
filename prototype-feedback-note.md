# Prototype Feedback Note — Lê Quang Huy

**Người facilitate:** Lê Quang Huy — 2A202601821
**Nhóm:** cuong · **Case B** — AI Notes: Personal Learning Notes
**Prototype:** [prototype/index.html](prototype/index.html) — bản chung bốn option
**Ngày:** ……  *(cần điền)*

**Tester:** ……  *(cần điền)*
**Ngoài nhóm:** ……  *(cần điền — Gate 5 yêu cầu tester ngoài nhóm)*
**Có context liên quan:** ……  *(cần điền — câu hỏi context có hỏi không, trả lời sao)*
**Thứ tự mở option:** D → C → A → B, sau đó đảo qua lại nhiều lần
**Thời lượng:** 10:09:38 → 10:22:57 — 13 phút 19 giây

> Ba ô trống ở trên là dữ liệu chỉ người facilitate mới có. Nhật ký hành vi không ghi được.

---

## Observation

| Observation | Note |
|---|---|
| **First action** | **A:** mở ra là **gõ ngay sau 3 giây**, không chờ máy nói.<br>**D:** 13 giây rồi chọn mẩu đầu tiên.<br>**B, C:** không có thao tác nào trong lượt mở đầu — bốn phút đầu buổi chỉ đảo option, 10 lần chuyển, không làm gì. |
| **Chỗ dừng, do dự hoặc hiểu sai** | **C: dừng 7 phút 36 giây** (10:13:51 → 10:21:27) không thao tác nào — khối thời gian dài nhất buổi, hơn nửa buổi test. Nhật ký không phân biệt được đang đọc kỹ, đang nói chuyện, hay đang bí. *(người facilitate cần bổ sung)* |
| **Evidence được đọc hay bỏ qua** | Không đo trực tiếp được — nhật ký chỉ ghi thao tác có bấm, không ghi cuộn hay rê chuột. **Dấu hiệu gián tiếp:** mẩu *Ghi chú ngắn · Slide 7* — mẩu duy nhất mang tag đỏ *"AI không chắc"* — là mẩu được quay lại ở **cả ba option có thao tác**: gắn vào thẻ ở A, thẻ bị sửa và bị đổi ở B, và là mẩu duy nhất được xin *"giải thích dễ hơn"* ở D. Trong khi mẩu *Ảnh chụp + Chưa hiểu · Slide 11* chỉ mở **4 giây** rồi thôi. |
| **Cách tester sửa hoặc lấy lại control** | **B:** bấm *Sửa* rồi *Đổi thẻ khác* — **không** bấm *Giữ*, **không** bấm *Bỏ*.<br>**C:** đổi mục tiêu sang "Ôn nhanh 5 phút", rồi **rollback sau đúng 4 giây**.<br>**D:** xin *giải thích dễ hơn* → *đóng, về ba mẩu* → chọn lại mẩu khác.<br>**A:** gửi một thẻ nhưng **0 mẩu gắn kèm**; gắn nguồn cho thẻ kế rồi bỏ dở. |
| **Option được chọn** | **C và D** — tester đề nghị gộp hai cái |
| **Lý do và trade-off** | *(người facilitate cần bổ sung — hiện chỉ có phần tester đề xuất, chưa có câu trả lời "đổi lại mất gì")* |
| **Evidence chống lại kỳ vọng của nhóm** | **Ba chỗ.** (1) Tester nói giữ hai nút *giữ / sửa* ở B, nhưng hành vi cho thấy hai nút thật sự dùng là *sửa / đổi* — nút *giữ* **chưa bấm lần nào**. (2) Nhóm lo khung chat làm tester ngồi chờ AI ở Option A — **không xảy ra**, gõ ngay sau 3 giây. (3) Mẩu *"chưa hiểu"* — thứ cả Hypothesis Problem xoay quanh — gần như bị bỏ qua, trong khi mẩu ghi chú ngắn mới là chỗ tester quay lại nhiều nhất. |

**Tester nói / đề xuất** *(thuật lại, chưa phải nguyên văn — cần bổ sung ít nhất một câu nguyên văn)*:

- Nếu làm theo B thì giảm giao diện xuống còn **hai nút**: *giữ thẻ* hoặc *sửa thẻ*.
- Thích hơn một phương án **gộp C với D**.
- Cơ chế mong muốn: sau khi AI tổng hợp, **AI tự xác định chỗ nào chưa logic hoặc thiếu thông
  tin**, **hỏi lại người dùng**, rồi liệt kê thành từng mục; bấm vào một mục thì AI **giải
  thích tường minh** phần đó.

---

## Nhật ký thao tác

Nguyên văn, xuất bằng nút *Copy nhật ký*. Bản đầy đủ kèm phân tích ở
[06-test-record.md](06-test-record.md).

```
10:13:51	[C]	chuyển sang option C
10:21:27	[C]	đổi mục tiêu sang "Ôn nhanh 5 phút"
10:21:31	[C]	rollback — bỏ bản AI soạn, quay về ghi chú thô
10:22:04	[D]	chọn mẩu Highlight · Slide 3
10:22:06	[D]	chọn mẩu Ghi chú ngắn · Slide 7
10:22:09	[D]	chọn mẩu Ảnh chụp + Chưa hiểu · Slide 11 — chỗ đánh dấu chưa hiểu
10:22:16	[A]	bắt đầu gõ nội dung cho thẻ tóm tắt
10:22:26	[A]	gửi thẻ tóm tắt vào sổ — 0 mẩu gắn kèm
10:22:41	[B]	sửa tay thẻ tự kiểm tra, nguồn Ghi chú ngắn · Slide 7
10:22:45	[B]	bấm đổi thẻ khác, nguồn Ghi chú ngắn · Slide 7
10:22:52	[D]	xin bản giải thích dễ hơn cho Ghi chú ngắn · Slide 7
10:22:54	[D]	đóng lời giải — Ghi chú ngắn · Slide 7, quay về ba mẩu thô
```

---

## Kết luận được phép

> Với Hypothesis Problem này, chúng tôi đã thử bốn cách giải. Tester đã dành hơn nửa buổi trên
> Option C, thao tác nhiều nhất trên Option D, rollback ở C sau 4 giây, gõ ngay ở A mà không
> chờ AI, và quay lại mẩu Slide 7 ở cả ba option có thao tác trong khi gần như bỏ qua mẩu đánh
> dấu "chưa hiểu". Vì vậy iteration tiếp theo chúng tôi sẽ chạy lại Option B với thời lượng đủ
> để tester duyệt hết thẻ trước khi kết luận nút nào thừa, và hỏi vì sao mẩu "chưa hiểu" lại là
> mẩu ít được mở nhất.

**Không viết:** *User đã xác nhận solution này đúng.*

---

## Giới hạn của phiên này

- Chưa ghi được danh tính tester và **chưa xác nhận tester ngoài nhóm** — Gate 5 yêu cầu điều này.
- Phần *tester nói* là thuật lại, **chưa có câu nguyên văn nào**.
- Bốn phút đầu và bảy phút rưỡi trên C không có thao tác nào được ghi, nên phần lớn thời lượng
  buổi test **không có dữ liệu hành vi**.
- Không hỏi được câu trade-off cuối buổi.
