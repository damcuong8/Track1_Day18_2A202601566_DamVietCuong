# AI Support Log — Lê Quang Huy (2A202601821)

Ghi theo mục 10 của đề. Công cụ dùng: Claude (Claude Code), phiên làm việc ngày 18–19/08/2026.

> **Phần đánh giá cuối file là của người nộp.** Phần 1–3 là ghi chép việc đã xảy ra, kiểm lại
> được bằng lịch sử commit.

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

> **Ba mục dưới đây phải do Lê Quang Huy viết**, không phải AI. Đề yêu cầu AI Support Log là
> phần phản ánh của chính người nộp.

**4.1. Việc tôi tự làm, không dùng AI:**

……

*(gợi ý những thứ thuộc mục này: toàn bộ Day 17 — chọn case, chuỗi suy luận Solution → Change →
Actor → Situation → Pain, hai pain hypothesis cạnh tranh, thực hiện buổi phỏng vấn Phạm Duy
Hoàn; ở Day 18 — chạy buổi test với tester, quyết định giữ bốn option, chốt hướng hypothesis
gộp, và các quyết định phân công trong nhóm)*

**4.2. Chỗ tôi thấy AI hời hợt nhất, và tôi đã làm gì:**

……

**4.3. Nếu làm lại, tôi sẽ dùng AI khác đi ở chỗ nào:**

……
