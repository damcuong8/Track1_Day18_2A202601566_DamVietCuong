# Track 1 — Day 18 — Solution Test

## 1. Thông tin cá nhân và nhóm

| | |
|---|---|
| **Họ tên** | Lê Quang Huy |
| **MHV** | 2A202601821 |
| **Nhóm** | cuong |
| **Case** | **B — AI Notes: Personal Learning Notes** (tiếp nối Day 17, không đổi case) |
| **Option tôi chịu trách nhiệm** | **Option A — User tự làm (Don't Act)** |

**Thành viên nhóm:**

| Thành viên | MHV | Option phụ trách |
|---|---|---|
| Lê Quang Huy | 2A202601821 | **A** — User tự làm |
| Đàm Việt Cường | 2A202601566 | **B** — Cùng làm |
| Trần Đức Bảo | 2A202601472 | **C** — AI làm sẵn |
| Hoàng Minh Quân | 2A202601574 | **D** — Chỉ đúng chỗ |

> **Lệch so với đề:** đề giả định nhóm ba người và ba option. Nhóm này có **bốn** thành viên
> nên làm **bốn** option. Quân vắng buổi Day 17, vào Day 18 và nhận Option D.

---

## 2. Hypothesis Problem

Bản nhóm dùng trong Day 18:

> **Khi** ngồi ôn lại trước buổi học kế tiếp, **người học** khó biến các mẩu ghi chú, ảnh chụp
> và điểm đánh dấu chưa hiểu thành một thứ dùng lại được **vì** chúng nằm rải rác trên nhiều
> công cụ và phải tốn công tổng hợp thủ công mới dùng được, **dẫn đến** phải đọc lại tuần tự từ
> đầu hoặc đẩy sang công cụ ngoài, và không đo được mình đang hổng chỗ nào.

**Nối với observation Day 17 nào** — pattern duy nhất lặp qua **hai nguồn phỏng vấn độc lập**:
chỗ vướng nằm ở **khâu chuyển đổi**, không ở khâu ghi.

- Hoàn (Huy phỏng vấn): *"Thầy cô giảng nhanh quá thì mình sẽ là chụp ảnh lại... Mình không hiểu
  thì mình cứ gửi lên mình hỏi là cái này tại sao như này."* — phải đẩy sang công cụ ngoài mới dùng được.
- Mai (Cường phỏng vấn): *"Thực ra mình cảm thấy tốn thời gian nhất là mình sẽ lại phải từ cái
  file ghi chú đấy để tổng hợp ra..."* — chính user gọi tên khâu đắt nhất.

Situation *"trước buổi học kế tiếp"* lấy từ lời Hoàn: *"tối trước hôm đấy của hôm hôm sau học
môn đấy"* — đã sửa so với bản Day 17 vốn ghi *"sau buổi học"*.

**Điều còn chưa biết:**

- **Chưa nguồn nào cho hậu quả định lượng** — không giờ, không điểm, không lần hỏng việc nào.
- Rằng note rời rạc là thứ **cản** việc hiểu bài. Mẩu duy nhất nghe giống vậy bật ra **sau khi**
  interviewer đã nêu sẵn nguyên nhân, nên không dùng được.
- Hoàn bỏ bài **có chủ đích theo mục tiêu điểm** — cách giải thích thứ ba mà Day 17 không có.
  Nếu đa số người học như vậy thì cả hypothesis lẫn bốn option đều lệch.

Chi tiết: [01-evidence-huddle.md](01-evidence-huddle.md).

---

## 3. Solution Options và prototype

Trục phân biệt là **ai làm việc biến ghi chú thành thứ dùng lại được**. Cùng target user, cùng
situation, cùng task, cùng ba mẩu fixture.

| | Vai trò AI | Cơ chế | Người dùng làm gì |
|---|---|---|---|
| **A** (Huy) | **Don't Act** | Chỉ xếp ghi chú theo slide và tự lưu. Không sinh chữ nào | Chọn loại thẻ, gắn mẩu nguồn, **tự viết toàn bộ** |
| **D** (Quân) | **Ask on demand** | Im cho tới khi người dùng chỉ một mẩu, rồi sinh **đúng một** lời giải | Chỉ một mẩu, đọc, xin bản dễ hơn, hoặc đóng |
| **B** (Cường) | **Ask / Propose** | Soạn sẵn hai nhóm thẻ (giải thích + tự kiểm tra), mỗi thẻ ghi rõ nguồn | Duyệt / sửa / đổi / bỏ từng thẻ |
| **C** (Bảo) | **Act** | Soạn trọn gói ngay khi mở: 3 ý cốt lõi + 1 mục giải thích + 3 câu tự kiểm tra | Đọc, đổi mục tiêu, hoặc rollback |

**Link prototype** — chi tiết ở [prototype-link.md](prototype-link.md):

- **Bản chung bốn option, canned output:** [prototype/index.html](prototype/index.html) — dùng
  cho vòng so sánh, vì tái lập được giữa các tester.
- **Bộ gọi OpenAI API thật:** [proA](proA.html) · [proB](proB.html) · [proC](proC.html) · [proD](proD.html)
- **Bản đào sâu Option B của Cường:** [prototype-option-b.html](prototype-option-b.html)

Thiết kế: [three-option-design-sheet.md](three-option-design-sheet.md) ·
[02-three-solution-options.md](02-three-solution-options.md) ·
[03-human-ai-design-pass.md](03-human-ai-design-pass.md)

---

## 4. Đóng góp của tôi trong nhóm

**Option A — chịu trách nhiệm chính.** Thiết kế cơ chế Don't Act và dựng nó: khay ghi chú xếp
theo slide, ba khung mẫu (tóm tắt / giải thích / quiz), mốc tự lưu. Quyết định quan trọng nhất
của A là **thread không có bong bóng AI nào** — sự im lặng của máy chính là thông điệp, và đó là
thứ đem đi đo.

**Shared context và content fixture.** Dựng ngữ cảnh chung và ba mẩu fixture dùng cho cả bốn
option, để chênh lệch quan sát được là do role split chứ không do đổi nội dung.

**Micro-prototype chung.** Viết [prototype/index.html](prototype/index.html) — khung chat, bốn
option chuyển qua lại, **nhật ký hành vi tự ghi** kèm mốc giờ. Nhật ký này về sau là thứ phản
chứng được lời tester (xem mục 5). Sau đó viết thêm [assets/proD.js](assets/proD.js) +
[proD.html](proD.html) cho bộ prototype gọi API thật, vì bộ đó thiếu Option D.

**Human–AI decisions.** Viết [03-human-ai-design-pass.md](03-human-ai-design-pass.md) — bảng bốn
cột, bốn quyết định thiết kế. Chỗ đóng góp thật nằm ở phần *"AI sai thì user mất gì, có dễ phát
hiện không"*: chỉ ra Option C **không đạt Gate 3 trọn vẹn** — AI làm nhiều nhất trong khi sai
khó phát hiện nhất — và ghi thẳng chuyện đó thay vì đánh dấu cho đủ ô.

**Facilitation.** Viết [05-test-prep.md](05-test-prep.md) gồm câu context, outcome task, năm
observation focus, bảng xoay vòng thứ tự, và bản chạy tay. Chạy buổi test của mình
([prototype-feedback-note.md](prototype-feedback-note.md)).

**Tổng hợp feedback.** Đối chiếu feedback với nhật ký hành vi, viết
[06-test-record.md](06-test-record.md) và [group-feedback-synthesis.md](group-feedback-synthesis.md).

**Tích hợp bài của nhóm.** Review và gộp các pull request: nhận phần của Quân (Option D), và với
PR của Bảo thì **chỉ lấy phần UI** — PR đó xoá 21 file gồm toàn bộ tài liệu từng chặng, thư mục
`day17-inputs` và cả Option D, nên không nhận phần xoá.

---

## 5. Prototype Feedback

### Observation từ phiên tôi facilitate

Chi tiết: [prototype-feedback-note.md](prototype-feedback-note.md) · phân tích đầy đủ ở
[06-test-record.md](06-test-record.md).

- **Option A:** gõ ngay sau **3 giây**, không chờ AI. Rủi ro *"khung chat làm người ta mong máy
  trả lời"* **không xảy ra** với tester này.
- **Option C:** dừng **7 phút 36 giây** không thao tác nào — hơn nửa buổi test. Sau đó đổi mục
  tiêu rồi **rollback sau đúng 4 giây**.
- **Option D:** được mở nhiều nhất, **7 thao tác** — gấp hơn ba lần B và C cộng lại.
- **Option B:** bấm *Sửa* và *Đổi*. **Không bấm *Giữ* lần nào, không bấm *Bỏ* lần nào.**
- Mẩu *Ghi chú ngắn · Slide 7* — mẩu duy nhất mang tag *"AI không chắc"* — được quay lại ở cả ba
  option có thao tác. Mẩu *"chưa hiểu" Slide 11* chỉ mở **4 giây** rồi thôi.

**Chỗ lời nói và hành vi lệch nhau:** tester đề nghị rút Option B xuống hai nút *giữ* và *sửa*.
Nhật ký cho thấy hai nút thật sự được dùng là *sửa* và *đổi* — nút *giữ* **chưa bấm lần nào**.
Cắt giao diện theo lời nói sẽ giữ lại đúng cái nút không ai dùng.

### Feedback synthesis

Đầy đủ: [group-feedback-synthesis.md](group-feedback-synthesis.md).

**Hiện mới có hai Feedback Note** (Huy, Quân), chưa đủ ba như Gate 5 yêu cầu — Cường và Bảo chưa
chạy phiên nào.

Ba chỗ hai phiên trùng nhau:

1. Cả hai tester **chọn C và D, bỏ A và B**.
2. **Không ai bấm *Giữ* ở Option B** — không phiên nào chốt xong bộ thẻ.
3. **Badge nguồn và tag *"AI không chắc"* không được đọc.** Nếu đúng, Option C hiện **không có
   hàng rào nào đang hoạt động** — trái với chính lý do nhóm đặt hàng rào đó ở Chặng 3.

Chỗ hai phiên mâu thuẫn: một tester dồn chú ý vào mẩu *"chưa hiểu"*, tester kia gần như bỏ qua
nó — nhưng tester kia đã nắm sẵn nội dung mẩu đó, nên chưa đọc được gì từ chỗ này.

Cả hai tester đều **tự ghép C với D** thay vì chọn một option. Nguyên văn phiên của Huy:
*"option C cũng hay đấy, nhưng anh nghĩ kết hợp thêm với hướng mở rộng thêm hướng chọn mục để
mở giống option D thì hay hơn"*.

### Next Change

> **Bỏ bước duyệt từng thẻ ở Option B. Thay bằng: AI đưa cả bộ ở trạng thái đã nhận sẵn, người
> dùng chỉ can thiệp vào thẻ nào thấy sai.**

Chọn theo chỗ evidence chắc nhất — hai phiên đều không chốt được bộ thẻ nào, và cả hai đều ngả
về C và D, hai option **không bắt duyệt gì**. Chi phí duyệt là thứ đang bị từ chối, không phải
số lượng nút.

### Still Unproven

- Hypothesis Problem **chưa được kiểm chứng**. Hai phiên đo *interaction*, không đo *value*.
- **Chưa nguồn nào cho hậu quả định lượng.**
- Mẩu *"chưa hiểu"* có phải trọng tâm không — hai tester cho hai câu trả lời ngược nhau.
- Tag *"AI không chắc"* có tác dụng không — hai tín hiệu ngược nhau, chưa phân biệt được.
- Bộ prototype gọi API thật chưa được test với ai.

**Không tuyên bố** *"User đã xác nhận solution này đúng."*

---

## 6. AI Support Log

Đầy đủ: [ai-support-log.md](ai-support-log.md).

**Có dùng AI:** dựng cấu trúc repo và biên tập tài liệu; rà soát mechanism / role split của các
hướng trong Solution Parking Lot; tạo content fixture và canned AI output; viết code prototype
(bản chung bốn option, và `proD.js` cho bộ gọi API thật); soát câu dẫn dắt trong test prompt.

**Không dùng AI:** tạo quote / observation / feedback không tồn tại; viết lại evidence làm mất
ranh giới lời tester và diễn giải; chọn option thay tester hoặc thay nhóm; làm đẹp feedback tiêu cực.

**Sáu chỗ AI làm sai và đã sửa** — ghi cụ thể trong [ai-support-log.md](ai-support-log.md) mục 2.
Nặng nhất: AI đọc sai một mẩu evidence quan trọng, khẳng định bạn Hoàn *"đã đang làm Option #1"*,
trong khi transcript cho thấy câu đó ở thì điều kiện và do một câu hỏi xin giải pháp gợi ra —
hành vi thật là hỏi giải thích từng chỗ, tức Option #2. Chỉ phát hiện được khi đọc transcript
nguyên văn thay vì tin bản ghi tóm tắt.
