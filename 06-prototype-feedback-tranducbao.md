# Prototype Feedback Note — Trần Đức Bảo

**Người facilitate:** Trần Đức Bảo — 2A202601472
**Nhóm:** cuong · **Case B** — AI Notes: Personal Learning Notes
**Option phụ trách:** Option C

> **Phần "Mẫu ghi quan sát" và "AI Support Log" giữ nguyên văn bản Bảo gửi.**
> **Phần "Đối chiếu ba lượt feedback" đã được sửa** ở cột Feedback 2, vì bản gửi ban đầu ghi
> khác với nhật ký hành vi phiên của Huy. Bảng "Đã sửa gì" liệt kê đúng từng ô đã đổi và căn cứ,
> để Bảo đối chiếu lại và báo nếu có buổi nào mình chưa biết.

**Prototype đã dùng:** bộ gọi API thật ([proA](proA.html) / [proB](proB.html) / [proC](proC.html)),
chạy **trước khi** Option D được thêm vào bộ này. Tester không được xem Option D.

---

## Mẫu ghi quan sát khi test

**Tester/context:** Đức (Bàn bên cạnh) - Nhờ test và cho xin feedback về sản phẩm

| Observation | Note |
|---|---|
| First action | User tự chụp ảnh và test các tính năng hỏi đáp có nối api realtime của nhóm |
| Chỗ dừng, do dự hoặc hiểu sai | User muốn cải thiện tính năng chụp ảnh bằng cách có trạng thái hỏi được bật thì di chuột vào các ô thắc mắc thì sẽ có context trả lời luôn |
| Evidence được đọc hay bỏ qua | Được đọc |
| Cách tester sửa hoặc lấy lại control | Đưa ra gợi í |
| Option được chọn | B |
| Lý do và trade-off | Vì B có thể kiểm soát luồng AI hoạt động một cách chủ động không bị làm phiền khi đã hiểu bài |
| Evidence chống lại kỳ vọng của nhóm | Nhóm nghĩ việc chụp ảnh sẽ giúp tăng tốc độ hỏi bài nhưng câu hỏi của user đã cho thấy việc chụp ảnh sẽ cho thời gian lâu hơn chế độ hỏi đáp và hover chuột đến |

**Câu tester nói** (ghi ở [feedback.md](feedback.md)):

> "tính năng hỏi đáp đang hơi chậm và bên cạnh đó nên thêm nút "?" để khi ấn vào hình ảnh thì
> có thể hỏi đáp luôn tại đó thay vì chụp ảnh như hiện tại"

---

## Đối chiếu ba lượt feedback

> **Bảng này đã được sửa lại ở cột "Feedback 2".** Bản Bảo gửi ban đầu ghi cột đó khác với
> nhật ký hành vi phiên Huy đã ghi được. Danh sách đúng những chỗ đã đổi nằm ở mục
> "Đã sửa gì" ngay dưới bảng — Bảo xem lại và báo nếu có buổi khác mình chưa biết.

| Nội dung | Feedback 1 — Đức (facilitate: Bảo) | Feedback 2 — anh Coach Lab (facilitate: Huy) | Feedback 3 (facilitate: Cường) | Pattern hoặc khác biệt |
|---|---|---|---|---|
| **Prototype đã dùng** | Bộ API thật — **A, B, C, chưa có D** | Bản chung canned — **A, B, C, D** | *(chưa có Feedback Note)* | Hai phiên chạy hai bản khác nhau, và Đức **không được xem Option D** |
| **First action** | Tự chụp ảnh, test hỏi đáp realtime | Bốn phút đầu chỉ đảo option 10 lần, không thao tác. Vào Option A thì **gõ ngay sau 3 giây**, không chờ AI | *(chưa có)* | Cả hai đều chủ động thao tác ngay, không ai ngồi chờ AI mở lời |
| **Breakdown chính** | Muốn hover để hỏi luôn thay vì phải chụp | Dừng **7 phút 36 giây** trên Option C không thao tác gì — hơn nửa buổi test | *(chưa có)* | Cả hai đều vướng ở **chi phí để hỏi được đúng chỗ**: Đức thấy chụp ảnh chậm, Coach Lab đọc lâu ở bản AI soạn sẵn |
| **Cách lấy lại control** | Chỉ góp ý bằng lời, không dùng nút sửa/rollback nào | **Có dùng thật:** rollback ở C lúc 10:21:31 (4 giây sau khi đổi mục tiêu), sửa thẻ ở B lúc 10:22:41, đổi thẻ lúc 10:22:45. **Không bấm *Giữ* lần nào, không bấm *Bỏ* lần nào** | *(chưa có)* | Khác nhau: một người chỉ nói miệng, một người bấm thật. Nhưng **không ai chốt xong bộ thẻ ở Option B** |
| **Option được chọn** | **B** | **C + D** — tự đề nghị ghép hai cái | *(chưa có)* | Không so sánh trực tiếp được: Đức **không có D để chọn**, và thứ Đức mô tả muốn thêm chính là cơ chế của D |
| **Trade-off** | Chọn B để chủ động kiểm soát, không bị AI làm phiền khi đã hiểu bài | **Chưa hỏi được.** Chỉ nói *"thì hay hơn"*, không nói đổi lại mất gì | *(chưa có)* | Mới một trên hai phiên lấy được trade-off |
| **Evidence chống lại kỳ vọng nhóm** | Nhóm nghĩ chụp ảnh giúp hỏi nhanh hơn, nhưng Đức cho thấy chụp ảnh **lâu hơn** hover/hỏi trực tiếp | Nhóm lo khung chat làm tester ngồi chờ AI ở Option A — **không xảy ra**, gõ ngay sau 3 giây | *(chưa có)* | Cả hai kỳ vọng bị bác đều là kỳ vọng về **tốc độ và độ chủ động**, không phải về nội dung |

### Đã sửa gì so với bản Bảo gửi

| Ô | Bản gửi ban đầu | Sửa thành | Căn cứ |
|---|---|---|---|
| FB2 · First action | *"Thực hiện thao tác hỏi đáp với AI"* | Đảo option 4 phút; vào A gõ sau 3 giây | Nhật ký, [prototype-feedback-note.md](prototype-feedback-note.md) |
| FB2 · Breakdown | *"Muốn 1 file chung gom ghi chú đã hỏi, AI tổng hợp phân tích phần hỏi nhiều nhất"* | Dừng 7'36" trên Option C | Nội dung cũ không có trong biên bản phiên Huy |
| FB2 · Lấy lại control | *"Chỉ góp ý bằng lời, không dùng nút sửa/rollback nào"* | Có bấm rollback, sửa, đổi thẻ — kèm mốc giờ | Nhật ký ghi rõ ba thao tác |
| FB2 · Option được chọn | **B** | **C + D** | Nguyên văn tester: *"option C cũng hay đấy, nhưng anh nghĩ kết hợp thêm... giống option D thì hay hơn"* |
| FB2 · Trade-off | *"Chỉ muốn nhờ AI khi thực sự thấy khó hiểu…"* | Chưa hỏi được | Không có câu trade-off nào trong biên bản |
| FB3 · cả cột | Có nội dung | *(chưa có Feedback Note)* | Cường chưa nộp note nào vào repo — chưa đối chứng được |
| Thêm hàng | — | *Prototype đã dùng* | Hai phiên chạy hai bản khác nhau, phải nói rõ |

> **Cường:** nếu bạn có chạy phiên thật thì viết Feedback Note rồi mình điền lại cột 3. Hiện
> để trống chứ không bỏ, vì có thể buổi đó có thật mà chưa kịp ghi.

---

## Next Change

> **Cho hỏi ngay tại chỗ đang vướng** — bấm hoặc rê vào đúng vùng trên nội dung là được giải
> thích luôn, thay vì phải khoanh vùng hay chụp ảnh trước. Áp dụng cho cả Option B và C.

Đây là bản Bảo đề xuất, và nhóm giữ nguyên — xem [group-feedback-synthesis.md](group-feedback-synthesis.md) mục 4.

**Evidence dẫn tới quyết định này — mạnh hơn bản ban đầu tưởng.**

Bản gửi ban đầu kết luận *"ba người chỉ ra ba việc khác nhau, không lặp lại thành một pain point
chung"*. Đọc lại với dữ liệu đã sửa thì ngược lại: **ba nguồn độc lập cùng đòi một cơ chế.**

> **Đức** — *chưa từng nhìn thấy Option D*: *"nên thêm nút "?" để khi ấn vào hình ảnh thì có thể
> hỏi đáp luôn tại đó thay vì chụp ảnh như hiện tại"*

> **anh Coach Lab** (phiên Huy): *"option C cũng hay đấy, nhưng anh nghĩ kết hợp thêm với hướng
> mở rộng thêm hướng chọn mục để mở giống option D thì hay hơn"*

> **Tester của Quân:** *"D bấm đúng chỗ chưa hiểu là xong, nhanh"* — và hành vi khớp: sang D là
> bấm ngay mẩu đánh dấu chưa hiểu.

Ba người, ba cách nói, một cơ chế — và đó chính là **Option D**. Đức mạnh nhất trong ba, vì mô
tả đúng cơ chế của D mà chưa hề được xem nó.

## Still Unproven

- **Chưa ai thử Option D trên bộ API thật** — Next Change lại dựng trên cơ chế của D.
- **Con số "2 chọn B, 1 chọn C" không dùng được**: Đức không có D để chọn, và thứ Đức muốn là D.
- **Chưa biết bấm/rê trên ảnh có thật sự tốt hơn không**, hay chỉ đổi sang một kiểu khó chịu khác.
- **Tính năng popup 10 giây ở Option B** — dù một người độc lập đề xuất trùng ý — vẫn chưa ai
  thật sự trải nghiệm lúc nó bật lên.
- **Hai đề xuất còn lại chưa quyết**: gom ghi chú vào một chỗ kèm phân tích hỏi nhiều nhất; để
  AI tự nhận biết chỗ khúc mắc ở Option B.
- **Chưa nguồn nào cho hậu quả định lượng** — không giờ, không điểm, không lần hỏng việc nào.

---

## AI Support Log — Trần Đức Bảo

> Đây là AI Support Log **của Bảo**, giữ lại đây để không thất lạc. Log của người nộp repo này
> nằm ở [ai-support-log.md](ai-support-log.md).

**AI đã giúp tôi ở đâu?**
- Giúp định hướng hướng đi cho bài làm, giúp tôi viết những bằng chứng hay giả thuyết dài làm định hướng cho tôi nghiên cứu và phần tích user, hỗ trợ design làm ui cho giao diện demo

**AI sai, hời hợt hoặc làm các options giống nhau ở đâu?**
- Làm chưa đúng những thông tin yêu cầu và bị trùng lặp các option về suy luận logic, AI vẫn chưa thể phân tích dược hypothesis problem chính xác, phân tích logic các solution chưa được chi tiết

**Tôi đã tự sửa hoặc quyết định lại điều gì?**
- Tự sửa logic của các đoạn chat, tự suy luân những hành vi có thể xảy ra từ envidence và nghiên cứu suy ra được, bên cạnh đó quyết định model call api, quyết định cấu trúc file nộp và xác định sự thật cho AI thực hiện
