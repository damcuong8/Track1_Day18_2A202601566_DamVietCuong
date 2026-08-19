# AI Support Log — Lê Quang Huy (2A202601821)

Ghi theo mục 10 của đề. Công cụ dùng: Claude (Claude Code), phiên làm việc ngày 18–19/08/2026.

> Phần 1–3 là ghi chép việc đã xảy ra, kiểm lại được bằng lịch sử commit.
> **Mục 4 do người nộp tự viết.**

---

## 1. AI đã giúp gì

Đối chiếu với danh mục **được phép** ở mục 10 của đề:

| Việc mục 10 cho phép | Đã dùng ở đâu |
|---|---|
| Gợi ý cơ chế còn thiếu trong Solution Parking Lot | Bảng rà soát mechanism / role split cho 5 hướng Day 17 — [02-solution-parking-lot.md](day17-inputs/02-solution-parking-lot.md) |
| Tạo content fixture và canned AI output | Ba mẩu ghi chú mẫu, thẻ Option B, digest Option C trong [prototype/index.html](prototype/index.html) |
| Viết code / component cho prototype | Toàn bộ [prototype/index.html](prototype/index.html) (4 option, khung chat, nhật ký hành vi); [assets/proD.js](assets/proD.js) + [proD.html](proD.html) cho bộ prototype gọi API thật |
| Rà soát ba option có thật khác về mechanism hoặc role split không | Distance check ở [02-three-solution-options.md](02-three-solution-options.md); phân tích D không trùng B |
| Tìm câu hỏi dẫn dắt trong test prompt | Ba chỗ outcome task cố tình tránh (*quiz*, tên nút, tên giải pháp) — [05-test-prep.md](05-test-prep.md) mục 2 |

Ngoài ra AI làm phần biên tập và dựng cấu trúc: gom artifact Day 17 sang repo, dựng file từng
chặng, viết bản chạy tay cho facilitator, đối chiếu nhật ký hành vi với feedback, và review hai
pull request của bạn cùng nhóm.

---

## 2. Những chỗ AI làm sai hoặc hời hợt, và đã sửa thế nào

Sáu chỗ, xếp theo mức nghiêm trọng.

**2.1. Đọc sai evidence quan trọng nhất.**
AI khẳng định bạn Hoàn *"đã và đang làm Option #1"* (đưa cả bài cho AI tổng hợp), dựa trên
Interview Record. Đọc transcript gốc thì sai: câu đó mở đầu bằng *"Chắc mình sẽ..."* và trả lời
cho câu hỏi *"bạn có cách nào tối ưu hơn không?"* — tức là ý tưởng ở thì điều kiện, do một câu
hỏi xin giải pháp gợi ra. Hành vi thật là **hỏi giải thích từng chỗ**, tức Option #2.
**Sửa:** đọc transcript nguyên văn thay vì tin bản ghi tóm tắt; AI tự đính chính và bản đồ
option đảo ngược lại.

**2.2. Đề xuất chọn option khi chưa đọc hết dữ liệu.**
AI gợi ý bộ ba 3+2+4 **trước khi** đọc Interview Record. Sau khi đọc thì chính AI phải rút lại.
**Sửa:** yêu cầu đọc hết dữ liệu nguồn trước khi đưa khuyến nghị.

**2.3. Đánh giá sai Option D của bạn cùng nhóm.**
AI nói D trùng với nhóm thẻ *giải thích* của B. Đọc kỹ lập luận của Quân thì D đo **baseline
đang chạy của Hoàn** — thứ chính bảng huddle đã gọi là *"baseline mọi solution phải vượt qua"*
mà A, B, C đều bỏ qua. **Sửa:** AI rút lại nhận định và ghi lý do D không thừa vào
[02-three-solution-options.md](02-three-solution-options.md) mục 5.1.

**2.4. Hiểu sai yêu cầu của đề.**
Khi phân công *"Cường làm 6, Bảo làm 4, Huy làm 2"*, AI hiểu thành **phân công đào tiếp** và đặt
tên cột là *"phụ trách đào tiếp"*. Đề viết *"mỗi thành viên chọn một chi tiết"* — đó là **lựa
chọn**, không phải việc được giao. **Sửa:** người nộp chỉ ra, AI đổi lại tên cột và ghi chú
phân biệt rõ *người chọn chi tiết* với *người đã phỏng vấn*.

**2.5. Đề xuất thừa, lặp lại ba lần.**
AI ba lần đề nghị gộp các file Chặng 3 về một, lý do là *"đề chỉ yêu cầu một bảng"*. Nhưng bảng
đó **đã tồn tại** — [03-human-ai-design-pass.md](03-human-ai-design-pass.md) đủ bốn cột. Người
nộp hỏi lại *"sao phải gộp"* thì lộ ra lý do không đứng vững, và gộp còn làm mất dấu vết ai làm
phần nào. **Sửa:** bỏ đề xuất.

**2.6. Tự đổi cách đánh số làm gãy tham chiếu.**
AI đánh số lại các dòng bảng huddle khi tách bảng chính / bảng phụ, làm số thứ tự lệch khỏi bảng
gộp ban đầu. **Sửa:** người nộp yêu cầu giữ STT gốc; AI khôi phục #1–#6 và ghi một dòng nói rõ
đánh số này cố định toàn tài liệu.

---

## 3. Những chỗ AI từ chối làm, theo mục 10

- **Không viết Practice Note cho thành viên chưa phỏng vấn ai.** Khi được yêu cầu điền phần của
  Trần Đức Bảo từ dữ liệu buổi phỏng vấn của Cường, AI từ chối dựng một buổi phỏng vấn không có
  thật, và thay bằng dòng ghi rõ bạn ấy **chọn** chi tiết #4 chứ không thực hiện buổi nào.
- **Không chọn option thay nhóm.** Bảng *"Chốt 3 hướng"* trong Solution Parking Lot để trống; cột
  *"Vì sao chọn"* để người làm tự viết.
- **Không nâng ý kiến tester thành phát hiện.** Feedback đầu tiên gần như toàn bộ là sở thích và
  đề xuất tính năng; AI ghi đúng như vậy trong [06-test-record.md](06-test-record.md) mục 1 thay
  vì viết thành kết quả kiểm chứng.
- **Không làm đẹp feedback tiêu cực.** Khi nhật ký hành vi phản chứng đề xuất *"giữ hai nút
  giữ/sửa"* của tester, AI ghi thẳng chỗ mâu thuẫn thay vì bỏ qua.

Một việc AI tự quyết ngoài phạm vi nội dung: **gỡ link Google Drive bản ghi âm** khỏi Practice
Note của Cường, vì repo public và đó là giọng của người được phỏng vấn. Đã báo lại để nhóm quyết
định cuối cùng.

---

## 4. Phần người nộp tự đánh giá

### 4.1. Việc tôi tự làm, không dùng AI

Toàn bộ Day 17 tôi làm độc lập, sau đó mới ghép vào nhóm: 
chọn Case B, chuỗi suy luận Solution → Change → Actor → Situation & Job → Pain, dựng hai 
pain hypothesis cạnh tranh rồi chọn Pain A, và thực hiện buổi phỏng vấn Phạm Duy Hoàn. 
Practice Reflection cũng tôi tự viết.

Sang Day 18, tôi đã đưa ra những quyết định sau:

- **Chạy buổi test** với Coach Lab và ghi lại phản hồi.
- **Giữ bốn option** khi nhóm có thành viên thứ tư, thay vì ép về ba cho khớp đề.
- **Chọn hướng hypothesis** — khi AI gợi ý ba phương án A/B/C thì tôi chốt nghiêng về khung của
  mình, và AI dựng bản gộp theo hướng đó.
- **Không gộp các file Chặng 3** — đảm bảo tính minh bạch giữa các phần của thành viên trong team.
- **Phân công chi tiết #2 / #4 / #6** cho ba thành viên ở bảng huddle.
- **Thiết kế UI** — yêu cầu Claude thiết kế sản phẩm theo góc nhìn của mình, phù hợp với yêu cầu đề bài.

### 4.2. Chỗ tôi thấy AI hời hợt nhất, và tôi đã làm gì

Chỗ nặng nhất là **AI đọc bản tóm tắt thay vì đọc dữ liệu gốc**. Nó khẳng định bạn Hoàn "đã
đang làm Option #1", dựa vào Interview Record. Chỉ khi mở transcript nguyên văn ra thì mới lộ
là câu đó ở thì điều kiện — *"Chắc mình sẽ..."* — và bật ra sau một câu hỏi xin giải pháp.
Hành vi thật của Hoàn là hỏi giải thích từng chỗ, tức Option #2, ngược hẳn.

Điều tôi rút ra: AI đọc rất nhanh nhưng **không tự phân biệt được "user đã làm" với "user nói
sẽ làm"**, trong khi cả bài Day 17 và Day 18 đứng hay đổ ở đúng ranh giới đó. Sau lần ấy tôi
yêu cầu AI đối chiếu transcript gốc trước khi kết luận về hành vi.

Chỗ thứ hai: AI **bám vào một đề xuất không cần thiết** — nó cho rằng gộp các file Chặng 3 lại sẽ gọn hơn
cho dự án, trong khi bảng gộp bốn cột đã có sẵn. Tôi đã yêu cầu chỉnh lại theo ý mình. Nếu tôi không hỏi mà làm theo thì đã mất dấu vết đóng góp của từng người.

### 4.3. Nếu làm lại, tôi sẽ dùng AI khác đi ở chỗ nào

- **Đưa dữ liệu gốc trước, bản tóm tắt sau.** Lần này tôi đưa Interview Record trước và
  transcript sau, nên AI kết luận sai ngay từ đầu rồi mới phải sửa.
- **Không hỏi AI "nên chọn option nào" khi chưa đọc hết evidence.** AI đã gợi ý một bộ ba
  trước khi đọc Interview Record, và sau đó phải tự rút lại.
- **Dùng AI để tìm chỗ mâu thuẫn, không dùng để tìm chỗ đồng thuận.** Việc AI làm tốt nhất cả
  phiên là đối chiếu nhật ký hành vi với lời tester và chỉ ra nút *Giữ* chưa ai bấm — tức là
  đi tìm chỗ dữ liệu cãi nhau. Những chỗ nó gom mọi thứ thành một kết luận gọn gàng thì thường
  là chỗ tôi phải kiểm lại.
