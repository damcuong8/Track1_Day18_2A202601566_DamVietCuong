# Group Feedback Synthesis — Nhóm cuong

**Case B** — AI Notes: Personal Learning Notes
**Thành viên:** Lê Quang Huy (2A202601821), Đàm Việt Cường (2A202601566),
Trần Đức Bảo (2A202601472), Hoàng Minh Quân (2A202601574)

---

## 1. Ba Feedback Note

| Feedback Note | Facilitate | Tester | Prototype đã dùng | Option có sẵn |
|---|---|---|---|---|
| [prototype-feedback-note.md](prototype-feedback-note.md) | Lê Quang Huy | anh Coach Lab (chưa hỏi tên) — HS/SV, ngoài nhóm | Bản chung canned | A, B, C, D |
| [06-prototype-feedback-hoangminhquan.md](06-prototype-feedback-hoangminhquan.md) | Hoàng Minh Quân | Một bạn cùng lớp, ngoài nhóm | Bản chung canned | A, B, C, D |
| [06-prototype-feedback-tranducbao.md](06-prototype-feedback-tranducbao.md) | Trần Đức Bảo | Đức (bàn bên cạnh), ngoài nhóm | Bộ gọi API thật | **A, B, C — chưa có D** |

Đủ **ba** Feedback Note từ ba tester ngoài nhóm. Cường chưa chạy phiên nào.

> **Hai phiên đầu và phiên thứ ba chạy trên hai prototype khác nhau.** Hai phiên đầu dùng bản
> chung canned có đủ bốn option. Phiên của Bảo chạy trên bộ gọi API thật, **trước khi Option D
> được thêm vào bộ đó** — nên tester của Bảo **không được xem Option D**. Mọi so sánh "ai chọn
> option nào" phải tính tới chuyện này.

### 1.1. Hai dòng trong bảng đối chiếu của Bảo không khớp nhật ký

Bảng "Đối chiếu ba lượt feedback" trong [file của Bảo](06-prototype-feedback-tranducbao.md) có
cột *"Feedback 2 (khảo sát: Huy)"*. Hai ô trong cột đó ngược với dữ liệu phiên của Huy:

| Ô | Bảo ghi | Nhật ký hành vi phiên Huy |
|---|---|---|
| Option được chọn | **B** | **C và D** — nguyên văn: *"option C cũng hay đấy, nhưng anh nghĩ kết hợp thêm... giống option D thì hay hơn"* |
| Cách lấy lại control | *"Chỉ góp ý bằng lời, không dùng nút sửa/rollback nào"* | Có bấm thật: **rollback** ở C lúc 10:21:31, **sửa** thẻ ở B lúc 10:22:41, **đổi thẻ** lúc 10:22:45 |

Dòng *"Breakdown chính"* cũng ghi một nội dung (*"muốn 1 file chung gom ghi chú đã hỏi"*) không
có trong biên bản phiên của Huy.

**Cách xử lý:** giữ nguyên văn bảng của Bảo trong file của bạn ấy, nhưng phần tổng hợp dưới đây
**dùng nhật ký hành vi làm chuẩn** cho phiên của Huy. Nhóm cần hỏi lại Bảo xem cột đó lấy từ
đâu — có thể là một buổi khác chưa được ghi biên bản, hoặc điền từ trí nhớ.

---

## 2. Pattern — chỗ ba phiên trùng nhau

**P1 — Cả ba tester đều đòi "hỏi đúng chỗ đang vướng", và không ai được gợi ý điều đó.**

Đây là pattern mạnh nhất, vì ba người nói ra ba cách khác nhau nhưng cùng một hình dạng:

> **Đức** (phiên Bảo, *chưa từng thấy Option D*): *"nên thêm nút "?" để khi ấn vào hình ảnh thì
> có thể hỏi đáp luôn tại đó thay vì chụp ảnh như hiện tại"*

> **Coach Lab** (phiên Huy): *"option C cũng hay đấy, nhưng anh nghĩ kết hợp thêm với hướng mở
> rộng thêm hướng chọn mục để mở giống option D thì hay hơn"*

> **Tester của Quân:** *"D bấm đúng chỗ chưa hiểu là xong, nhanh"* — và hành vi khớp: sang D là
> bấm ngay mẩu Slide 11.

Đức mô tả **đúng cơ chế của Option D** mà chưa hề nhìn thấy nó. Hai người kia thì thấy D và
chọn nó. Ba nguồn độc lập, ba cách diễn đạt, một cơ chế.

**P2 — Không ai hoàn thành vòng duyệt thẻ ở Option B.**
Phiên Quân: *"không Giữ/Sửa/Bỏ"*. Phiên Huy: bấm *Sửa* và *Đổi* nhưng **không bấm *Giữ* lần
nào**. Phiên Bảo: tester chọn B nhưng phần "cách lấy lại control" chỉ ghi *"đưa ra gợi ý"* —
không có thao tác duyệt nào được ghi lại. **Không phiên nào chốt xong một bộ thẻ.**

**P3 — Tín hiệu evidence gần như không được dùng tới.**
Phiên Quân ghi rõ *"không dừng ở badge Dựa vào Slide… hay AI không chắc"*. Phiên Huy không đo
trực tiếp được. Phiên Bảo ghi *"Được đọc"* nhưng không kèm chi tiết nào, nên chưa đối chứng được.

> P3 đánh thẳng vào [Chặng 3](03-human-ai-design-pass.md) mục 2.2: nhóm đặt trích dẫn nguồn làm
> hàng rào duy nhất cho Option C, vì AI sai ở C khó phát hiện nhất. Hai trên ba phiên chưa cho
> thấy hàng rào đó được đọc.

---

## 3. Khác nhau giữa ba phiên

**K1 — Option được chọn không so sánh trực tiếp được.**
Coach Lab và tester của Quân chọn **C + D**. Đức chọn **B** — nhưng Đức **không có D để chọn**.
Và điều Đức mô tả muốn thêm vào chính là D. Nên "2 chọn C+D, 1 chọn B" là con số **không đọc
được như nó trông**.

**K2 — Option A: một người gõ ngay, một người không gõ gì.**
Phiên Huy: gõ sau **3 giây**, không chờ AI. Phiên Quân: *"Mở ra thấy 3 mẩu và ô trống. Không gõ.
Hỏi máy trả lời khi nào rồi chuyển."* Đúng rủi ro nhóm lo khi chuyển sang khung chat, xảy ra với
một người và không xảy ra với người kia.

**K3 — Đường phục hồi của C: một người dùng, hai người không.**
Phiên Huy: đổi mục tiêu rồi **rollback sau 4 giây**. Phiên Quân: không rollback, không đổi mục
tiêu. Phiên Bảo: không ghi nhận thao tác phục hồi nào.

**K4 — Mẩu nào được quan tâm.**
Phiên Huy: mẩu *Ghi chú ngắn · Slide 7* được quay lại ở cả ba option; mẩu *"chưa hiểu" Slide 11*
chỉ mở 4 giây. Phiên Quân: ngược lại, cả buổi chỉ chọn Slide 11. Nhưng tester phiên Huy đã nắm
sẵn nội dung mẩu đó, nên chỗ này chưa đọc được gì.

## 4. Next Change

Chốt theo pattern chắc nhất — **P1**, ba nguồn độc lập cùng đòi một cơ chế:

> **Cho hỏi ngay tại chỗ đang vướng — bấm hoặc rê vào đúng vùng trên nội dung là được giải
> thích luôn — thay vì phải khoanh vùng hay chụp trước.** Áp dụng cho cả Option B và C.

Vì sao là thay đổi này:

- **Ba nguồn độc lập, ba cách nói, một cơ chế.** Đức đề xuất nó mà chưa từng thấy Option D;
  hai tester kia thấy D và chọn D. Đây là chỗ duy nhất trong cả ba phiên có ba nguồn trùng nhau.
- **Nó là cơ chế của Option D**, tức nhóm không phải phát minh gì mới — chỉ đưa cách tương tác
  của D vào B và C, và bỏ bước khoanh vùng thủ công.
- Đức nói thẳng thao tác hiện tại **chậm**: *"tính năng hỏi đáp đang hơi chậm"*.

**Thay đổi thứ hai, mức nhỏ hơn:** bỏ bước duyệt từng thẻ ở Option B. Ba phiên không phiên nào
chốt xong bộ thẻ (P2), và tester của Đức chọn B chính vì *"không bị làm phiền khi đã hiểu bài"* —
tức là muốn ít can thiệp hơn, không phải nhiều nút hơn.

**Không** cắt Option B xuống hai nút *giữ / sửa* như tester phiên Huy đề nghị: nhật ký cho thấy
nút *giữ* là nút **chưa ai bấm lần nào**, nên cắt theo lời nói sẽ giữ lại đúng cái nút không ai dùng.

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
- **Option D trên bộ API thật chưa ai thử** — Next Change lại đang dựng trên cơ chế của D.
- **Con số "2 chọn C+D, 1 chọn B" không đọc được như nó trông**: Đức không có D để chọn.
- **Cả hai tester đều đã biết sẵn nội dung bài học dùng làm fixture** (anh Coach Lab, và một
  bạn cùng lớp). Chưa ai gặp ba mẩu ghi chú đó ở trạng thái thật sự chưa hiểu, nên phản ứng
  với mẩu đánh dấu *"chưa hiểu"* chưa đo được đúng.

---

## 6. Việc phải làm trước khi nộp

- [ ] **Hỏi lại Bảo** cột *"Feedback 2 (khảo sát: Huy)"* trong bảng đối chiếu lấy từ đâu — hai
      ô trong đó ngược với nhật ký hành vi phiên của Huy. Xem mục 1.1.
- [ ] Cường chưa chạy phiên nào. Đề tối thiểu cần ba note và nhóm đã đủ ba, nhưng nhóm bốn
      người thì Cường vẫn còn thiếu phần của mình.
- [ ] Chạy lại một phiên trên **bộ API thật đã có Option D** — cả ba phiên hiện tại đều chưa ai
      thử D trên bộ đó, mà Next Change lại đang dựng trên cơ chế của D.
