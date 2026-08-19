# Micro-Prototype — Day 18

Lê Quang Huy — 2A202601821. Case B — AI Notes.
Dựng theo [Chặng 2 — Các Solution Options](../02-three-solution-options.md).

Mở [index.html](index.html) bằng trình duyệt. Một file, không cần cài gì, không gọi mạng.

## Bốn option

Trục phân biệt là **ai làm việc biến ghi chú thành thứ dùng lại được**.

| | Option A | Option B | Option C | Option D |
|---|---|---|---|---|
| Phụ trách | **Lê Quang Huy**<br>2A202601821 | Đàm Việt Cường<br>2A202601566 | Trần Đức Bảo<br>2A202601472 | **Hoàng Minh Quân**<br>2A202601574 |
| Vai trò AI | Không hành động | Ask / Propose | Act | Ask on demand |
| AI làm gì | Xếp ghi chú theo slide, tự lưu chống mất file. Không sinh chữ nào. | Soạn sẵn hai nhóm thẻ, mỗi thẻ ghi rõ nguồn slide | Soạn sẵn 100%: 3 ý cốt lõi + 1 mục giải thích + 3 câu tự kiểm tra | Im. Khi user chỉ một mẩu thì giải thích đúng mẩu đó |
| User làm gì | Chọn loại thẻ, gắn mẩu nguồn, tự gõ rồi gửi vào sổ | Duyệt / sửa / đổi / bỏ từng thẻ ngay trong thread | Đọc luôn, đổi mục tiêu bằng chip, hoặc rollback | Chỉ một mẩu, xin dễ hơn, hoặc đóng về ba mẩu |
| Trigger | User chủ động soạn; thread không có bong bóng AI nào | Popup đề xuất sau khi học xong | Tự bật khi mở trang ôn bài | User bấm một mẩu — không tự chạy |
| Đường lùi | Gỡ nguồn, sửa tự do | Hoàn tác từng thẻ | Rollback về ghi chú thô | Đóng lời giải, về ba mẩu thô |

Giao diện dựng theo dạng **khung chat**. Thread bên trái, khung soạn ở dưới, nhật ký hành vi bên phải.

**Option A — phần của Huy** — thread **không có một bong bóng AI nào**. Mở lên, sổ ghi chú
gửi một tin xếp lại ba mẩu bạn đã lưu, rồi im. Tester chọn loại thẻ (tóm tắt / giải thích /
quiz), gắn mẩu nguồn, tự gõ, bấm *Gửi vào sổ* — thẻ hiện thành bong bóng của chính tester.
Máy chỉ xếp và tự lưu; mốc *tự lưu lúc hh:mm:ss* ở khung soạn là toàn bộ phần máy đóng góp.

> **Rủi ro đã biết của khung chat.** Chat làm người ta mong AI trả lời. Ở Option A thì đó là
> rủi ro thật — tester có thể ngồi chờ máy nói. Prototype cố ý để sự im lặng đó lộ ra, và
> facilitator cần ghi lại nếu tester chờ, vì đó chính là dữ liệu về Don't Act.

**Option B** có hai nhóm thẻ tách riêng — *giải thích* và *tự kiểm tra* — vì hai nguồn
phỏng vấn cho ra hai nhu cầu khác nhau: Hoàn muốn được giải thích, Mai muốn tự kiểm tra.
Tách nhóm để quan sát tester ngả về bên nào.

**Option C** có ô *tùy chỉnh theo mục tiêu* (hiểu sâu / đủ qua bài / ôn nhanh 5 phút). Ô này
đến từ evidence #3: Hoàn cắt bớt việc học theo mục tiêu điểm.

**Option D — phần của Quân** — thread có câu AI nói *im cho đến khi bạn chỉ một mẩu*, rồi
ba mẩu bấm được. Tester chỉ một mẩu thì mới có lời giải, kèm mẩu gốc để đối chiếu. Không
quiz, không digest. Nút *Giải thích dễ hơn* và *Đóng, về ba mẩu*. Đo xem tester có tự chỉ
vào Slide 11 (chưa hiểu) hay ngồi chờ máy làm cả gói — đúng baseline của Hoàn.

## Những thứ giữ nguyên ở cả bốn

Ngữ cảnh, ba mẩu ghi chú fixture, và task của tester — để chênh lệch quan sát được là do
**role split**, không do đổi nội dung.

Task giao cho tester: *"Dùng phương án đang mở để biến các mẩu ghi chú và điểm chưa hiểu
thành một tài liệu hoặc công cụ ôn tập, giúp bạn tự tin trước buổi học tiếp theo."*

Câu này cố ý **không** nói "quiz". Hypothesis đã chốt đặt lõi ở *thứ dùng lại được*; nói
"quiz" là mớm sẵn đáp án, mà chỉ một nguồn (Mai) nhắc tới quiz.

## Nhật ký hành vi

Cột phải ghi tester **đã làm gì**, kèm mốc thời gian và option: kéo mẩu nào vào khung nào,
duyệt hay loại thẻ nào, đổi mục tiêu, bấm rollback. Bấm *Copy nhật ký* để dán vào biên bản.

Nó chỉ ghi thao tác, không ghi ý kiến — để kết luận bám được vào *"Tester đã làm…"* chứ
không trượt sang *"tester nói thích cái này"*.

*Reset về ngữ cảnh ban đầu* xoá sạch state và nhật ký cho tester tiếp theo.

## Dữ liệu trong prototype

Ba mẩu ghi chú và toàn bộ nội dung AI là **content fixture và canned output viết sẵn** —
mục 10 của đề cho phép. Không gọi model thật, không có dữ liệu người dùng thật.

## Còn thiếu

- Chưa chạy buổi test nào với tester thật. Chưa có dòng *"Tester đã làm…"* nào.
- Bảng "Chốt 3 hướng" trong [Solution Parking Lot](../day17-inputs/02-solution-parking-lot.md) vẫn trống.
