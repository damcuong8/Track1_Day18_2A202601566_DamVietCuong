# Prototype Feedback Note — Trần Đức Bảo

**Người facilitate:** Trần Đức Bảo — 2A202601472
**Nhóm:** cuong · **Case B** — AI Notes: Personal Learning Notes
**Option phụ trách:** Option C

> Nội dung dưới đây **giữ nguyên văn** bản Bảo gửi, không biên tập.
> Phần đối chiếu ba lượt feedback của Bảo có hai dòng lệch với nhật ký hành vi phiên của Huy —
> xem [group-feedback-synthesis.md](group-feedback-synthesis.md) mục 1.1.

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

## Đối chiếu ba lượt feedback — bản của Bảo

> Giữ nguyên văn. **Hai dòng trong bảng này lệch với nhật ký hành vi phiên của Huy** — đối
> chiếu ở [group-feedback-synthesis.md](group-feedback-synthesis.md) mục 1.1 trước khi dùng.

| Nội dung | Feedback 1 (Đức, khảo sát: Bảo) | Feedback 2 (khảo sát: Huy) | Feedback 3 (khảo sát: Cường) | Pattern hoặc khác biệt |
|---|---|---|---|---|
| First action | Tự chụp ảnh, test hỏi đáp realtime | Thực hiện thao tác hỏi đáp với AI | Kiểm tra xem AI có hoạt động đúng như nhóm nói | |
| Breakdown chính | Muốn hover để hỏi luôn thay vì phải chụp | Muốn 1 file chung gom ghi chú đã hỏi, AI tổng hợp phân tích phần hỏi nhiều nhất | Muốn Option B tự nhận biết chỗ đang khúc mắc, chủ động hỏi có cần giúp không | Ba người chỉ ra ba việc khác nhau — không lặp lại thành một pain point chung, nhưng cả ba đều xoay quanh việc muốn AI chủ động và "hiểu" đúng chỗ mình đang cần hơn |
| Cách lấy lại control | Chỉ góp ý bằng lời, không dùng nút sửa/rollback nào | Chỉ góp ý bằng lời, không dùng nút sửa/rollback nào | Chỉ góp ý bằng lời, không dùng nút sửa/rollback nào | Cả ba đều giống nhau — chưa ai thật sự bấm nút sửa/rollback trong lúc test, chỉ nói miệng góp ý |
| Option được chọn | B | B | C | 2/3 chọn B, 1 chọn C — B đang nhỉnh hơn nhưng mẫu còn quá nhỏ để kết luận |
| Trade-off | Chọn B để chủ động kiểm soát, không bị AI làm phiền khi đã hiểu bài | Chỉ muốn nhờ AI khi thực sự thấy khó hiểu, tự học được thì không cần AI xen vào | Chấp nhận đánh đổi sự tiện dụng để lấy sự chắc chắn | Hai người chọn B đều vì muốn tự chủ, chỉ gọi AI khi cần — khớp với lý do "kiểm soát" của Đức. Người chọn C lại đánh đổi ngược, ưu tiên chắc chắn hơn tiện dụng — đáng chú ý vì hơi lệch với cách nhóm mô tả trade-off của C (README đang ghi C là "nhanh nhất, đổi lại có thể sai/áp đặt", tức nghiêng về tiện dụng hơn chắc chắn) — nên hỏi lại Cường xem có ghi nhầm ý không |

**Một Next Change nhóm chốt:** Việc nhóm quyết định làm tiếp theo là cho hỏi AI ngay trên vùng ảnh bằng cách bấm hoặc rê chuột vào, thay vì cứ phải khoanh vùng trước như bây giờ. Đây là thay đổi cụ thể và dễ bắt tay vào làm nhất trong ba thứ đang có, áp dụng cho cả Option B và C.

**Evidence nào dẫn tới quyết định này:** Ba lượt hỏi đều là người thật nhưng mỗi người chỉ ra một điểm khác nhau. Đức nói thẳng thao tác hỏi đáp hiện tại hơi chậm, muốn có cách hỏi ngay trên ảnh thay vì phải chụp trước. Người Huy khảo sát nói *"muốn có 1 file chung để tổng hợp ghi chú mà họ đã hỏi để họ có thể hệ thống lại các vấn đề và mẫu AI tổng hợp ghi chú đó sẽ phân tích về phần họ hỏi nhiều nhất"*. Còn người Cường khảo sát nói *"mong muốn có một dấu hiệu nhận biết ở phần B để có thể AI nhận biết rằng mình đang khúc mắc chỗ nào và có thể hỏi mình xem có cần nó trợ giúp hay không"* — đáng chú ý là câu này khớp gần như y hệt tính năng AI tự bật popup hỏi thăm sau 10 giây mà nhóm đã làm sẵn ở Option B, chỉ khác là người này chưa hề dùng thử tính năng đó mà tự đề xuất độc lập. Nhóm chọn làm trước cái đầu tiên (hỏi trực tiếp trên ảnh) vì nó rõ ràng và làm được ngay, hai cái còn lại cần bàn thêm.

**Still Unproven sau ba feedback:** Ba người không lặp lại cùng một vấn đề, nên chưa thể coi đây là một pain point đã được xác nhận qua nhiều nguồn độc lập — vẫn là ba tín hiệu rời rạc, mỗi người một hướng. Hai đề xuất còn lại (gom ghi chú vào một chỗ kèm phân tích hỏi nhiều nhất, và để AI tự nhận biết chỗ khúc mắc ở Option B) chưa được nhóm quyết định có làm tiếp hay không. Cũng chưa ai kiểm tra xem đổi sang bấm/hover trên ảnh có thực sự tốt hơn hay lại gây khó chịu kiểu khác, và tính năng popup 10 giây ở Option B — dù vừa được một người độc lập đề xuất trùng ý — vẫn chưa ai thật sự trải nghiệm để biết cảm giác lúc nó bật lên có ổn không.

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
