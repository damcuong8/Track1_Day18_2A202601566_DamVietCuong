# Chặng 3 — Human–AI Design Pass

**Nhóm:** cuong
**Thành viên:** Lê Quang Huy (2A202601821), Đàm Việt Cường (2A202601566), Trần Đức Bảo (2A202601472), Hoàng Minh Quân (2A202601574)
**Case B** — AI Notes: Personal Learning Notes

Nối tiếp [Chặng 2 — Các Solution Options](02-three-solution-options.md).
Mọi thứ mô tả dưới đây đã dựng thật trong [prototype](prototype/index.html), không phải mô tả trên giấy.

---

## 1. Critical interaction — chỗ duy nhất đem đi test

Đề dặn chỉ review critical interaction cần test, không thiết kế cả product. Mỗi option có
đúng **một khoảnh khắc** quyết định, và đó là chỗ các option thật sự khác nhau:

| Option | Critical moment | Vì sao chính chỗ này |
|---|---|---|
| **A** | Mẩu ghi chú đầu tiên vừa rơi vào khung, và user đối diện ô trống phải tự gõ | Đây là chỗ user hoặc bỏ công làm, hoặc bỏ dở. Không có AI đỡ. |
| **B** | Thẻ AI đề xuất hiện ra, user phải quyết duyệt / sửa / loại | Đây là chỗ quyền quyết định chuyển tay giữa người và máy. |
| **C** | User mở trang và bản tóm tắt **đã nằm sẵn ở đó** | AI đã hành động xong trước khi user kịp yêu cầu. Rủi ro áp đặt cao nhất. |
| **D** | User nhìn ba mẩu và phải **tự chỉ một mẩu**, hoặc ngồi chờ máy soạn cả gói | Đây là chỗ D đo baseline của Hoàn: AI im cho đến khi được gọi. |

Ngoài các khoảnh khắc này, prototype không thêm màn hình nào cho từng tiêu chí.
Cột D viết đầy đủ ở [03-human-ai-design-hoangminhquan.md](03-human-ai-design-hoangminhquan.md).

---

## 2. Bốn quyết định thiết kế

### 2.1. Expectation — trước khi AI hoạt động, user có hiểu AI sắp làm gì không

| Option | User biết trước điều gì | Nói bằng cái gì trong giao diện |
|---|---|---|
| **A** | AI **sẽ không viết chữ nào**. Nó chỉ xếp ghi chú theo slide và tự lưu. | Nhãn *"AI không sinh nội dung"* ngay cạnh tiêu đề; câu mô tả dưới tiêu đề; placeholder ô nhập ghi *"bạn tự gõ, hệ thống không gợi ý"*. |
| **B** | AI **sẽ đề xuất** hai nhóm thẻ, và mỗi thẻ ghi rõ lấy từ mẩu nào. | Câu mở đầu nói trước khi user chạm vào thẻ nào. Trigger là popup hỏi *"Xem ngay?"* — user đồng ý rồi AI mới hiện thẻ. |
| **C** | AI **đã soạn xong 100%** ngay khi mở trang. | Câu *"Tạo tự động ngay khi bạn mở trang ôn bài."* |
| **D** | AI **sẽ không viết** cho đến khi user chỉ một mẩu. Không bộ ôn, không quiz. | Câu mở *trước* khi AI viết: *"Mình im cho đến lúc đó."* Subtitle: *"Im cho đến khi bạn chỉ một mẩu"* |

> **Chỗ yếu đã biết ở C.** Câu giải thích expectation đến **sau** khi AI làm xong. User đọc
> nó lúc bản tóm tắt đã nằm trên màn hình rồi. Đây là hệ quả tất yếu của Act pattern chứ
> không phải lỗi cài đặt — và chính là một trong những thứ buổi test cần đo.

**Capability và limit phải nói rõ:** nội dung AI sinh ra chỉ dựa trên **ba mẩu ghi chú của
chính user**, không lấy thêm từ đâu khác. AI không biết user đã hiểu tới đâu, không chấm
được bài, và không đảm bảo bao phủ hết nội dung buổi học.

### 2.2. Role and Agency

| Option | User làm | AI làm | Pattern tại critical moment |
|---|---|---|---|
| **A** | Toàn bộ phần nội dung: chọn nguồn, viết tóm tắt, viết giải thích, viết câu hỏi và đáp án | Xếp khay theo slide; tự lưu | **Don't Act** |
| **B** | Đọc bản thảo, quyết giữ / sửa / đổi / loại từng thẻ | Soạn bản thảo thẻ kèm trích dẫn nguồn | **Ask / Propose** |
| **C** | Đọc, đổi mục tiêu, hoặc rollback | Soạn trọn gói: 3 ý cốt lõi + 1 mục giải thích + 3 câu tự kiểm tra | **Act** |
| **D** | Chỉ một mẩu, đọc, xin dễ hơn, hoặc đóng | Im; khi được chỉ thì giải thích đúng mẩu đó | **Ask on demand** |

**Nếu AI sai thì user mất gì, và có dễ phát hiện không** — đây là câu quyết định Gate 3:

| Option | AI sai kiểu gì | User mất gì | Dễ phát hiện không |
|---|---|---|---|
| **A** | Không sai được về nội dung, vì AI không sinh nội dung. Rủi ro còn lại: xếp sót hoặc lưu hỏng một mẩu | Một mẩu ghi chú | **Rất dễ.** Khay hiện đủ ba mẩu; thiếu là thấy ngay |
| **B** | Một thẻ sai nội dung hoặc lệch trọng tâm | Vài giây đọc, một lần bấm *Loại* | **Dễ.** Mỗi thẻ có badge nguồn, mẩu gốc nằm ngay đầu trang để đối chiếu. Sai bị chặn **trước khi** vào bộ ôn tập |
| **C** | Bản tóm tắt sai hoặc bỏ sót ý | **Học nhầm kiến thức sai** | **Khó nhất.** User chưa nắm bài thì không có cơ sở nào để biết bản tóm tắt sai. Sai thường chỉ lộ ra lúc thi |
| **D** | Một lời giải thích lệch | Vài giây đọc, một lần bấm *Đóng* | **Dễ.** Mẩu gốc nằm ngay trên lời giải |

**Kết luận về agency:** mức can thiệp của AI ở A và B tương xứng với hậu quả khi sai. Ở C
thì không — AI làm nhiều nhất trong khi sai lại khó phát hiện nhất. Đó là lý do C **bắt
buộc** phải có trích dẫn nguồn ở từng mục và một nút rollback; hai thứ đó giảm rủi ro chứ
không xoá được nó. Nhóm giữ C nguyên trạng để **đo** đúng cái rủi ro này, không phải vì tin
nó an toàn.

### 2.3. Evidence and Uncertainty

| Option | User thấy AI dựa vào gì | Khi AI không chắc thì hiện ra sao |
|---|---|---|
| **A** | Chip nguồn user tự gắn vào từng khung; mốc *"tự lưu lúc hh:mm:ss"* | Không có — AI không suy luận nên không có gì để không chắc |
| **B** | Mỗi thẻ có badge *"Dựa vào &lt;tên slide&gt;"*; thẻ user sửa có tag *"bạn đã sửa"* | Thẻ suy ra từ mẩu quá ngắn mang tag đỏ *"AI không chắc — mẩu gốc quá ngắn, nên đối chiếu lại"* |
| **C** | Cả 7 mục đều có trích dẫn: 3 ý cốt lõi, 1 mục giải thích, 3 câu tự kiểm tra | Mục suy ra từ mẩu ngắn nhất mang tag *"AI không chắc — mẩu gốc quá ngắn"* |
| **D** | Mẩu gốc nằm trên lời giải; badge *"Dựa vào &lt;slide&gt;"* | Slide 7 mang tag đỏ *"AI không chắc"*; xin dễ hơn thì có tag *"bạn xin bản dễ hơn"* |

Tag *không chắc* gắn vào đúng mục suy ra từ mẩu Slide 7 — mẩu ngắn nhất trong ba mẩu. Tín
hiệu này bám vào **độ dày của dữ liệu đầu vào**, thứ user tự kiểm được, chứ không phải một
con số phần trăm không ai truy ra được từ đâu.

### 2.4. Control and Recovery

| Option | Preview | Edit | Reject / Stop | Undo |
|---|---|---|---|---|
| **A** | Không cần — chưa có gì được sinh ra | Sửa tự do mọi ô | — | Gỡ chip nguồn bằng nút × |
| **B** | Thẻ hiện ra ở dạng bản thảo, chưa vào bộ ôn tập | Nút *Sửa*; nút *Đổi thẻ khác* | Nút *Loại* trên từng thẻ | Nút *Hoàn tác* sau khi đã duyệt hoặc loại |
| **C** | Không có preview — bản tóm tắt là trạng thái mặc định | Đổi mục tiêu (hiểu sâu / đủ qua bài / ôn nhanh) | *Rollback về ghi chú thô* | Nút *Tạo lại bản tóm tắt* sau khi rollback |
| **D** | Không cần — AI chưa viết gì | *Giải thích dễ hơn* | *Đóng, về ba mẩu* | Chọn mẩu khác bất cứ lúc nào |

**Sau khi AI sai, user quay về task ban đầu bằng đường nào:**

- **A** — không phát sinh, vì AI không sinh nội dung.
- **B** — bấm *Loại* trên thẻ hỏng. Các thẻ còn lại không bị ảnh hưởng, user đi tiếp không mất gì.
- **C** — bấm *Rollback về ghi chú thô*. Màn hình quay về đúng ba mẩu ghi chú gốc, tức là
  đưa user về trạng thái xuất phát của Option A. Đây là đường về task ban đầu, và nó là
  đường **một bấm**, không hỏi lại, không phải đi qua menu.
- **D** — bấm *Đóng, về ba mẩu*. Lời giải bị gỡ, khay ba mẩu hiện lại. Một bấm.

---

## 3. Human–AI Decision Table

| Human–AI decision | Option A (Huy) | Option B (Cường) | Option C (Bảo) | Option D (Quân) |
|---|---|---|---|---|
| **User làm gì? AI làm gì?** | User viết 100% nội dung vào ba khung mẫu. AI xếp ghi chú theo slide và tự lưu, không sinh chữ nào. | User duyệt / sửa / đổi / loại từng thẻ. AI soạn bản thảo hai nhóm thẻ kèm trích dẫn nguồn. | User đọc, đổi mục tiêu, hoặc rollback. AI soạn trọn gói 3 ý cốt lõi + 1 mục giải thích + 3 câu tự kiểm tra. | User chỉ một mẩu, đọc, xin dễ hơn, hoặc đóng. AI im cho đến khi được chỉ; rồi giải thích đúng mẩu đó. |
| **AI Act / Ask / Don't Act? Vì sao?** | **Don't Act.** Hypothesis nói chỗ vướng là chi phí chuyển đổi — A kiểm tra xem chỉ gỡ ma sát công cụ, không gỡ ma sát tư duy, thì có đủ không. | **Ask.** Sai một thẻ là chuyện có thật, nhưng phát hiện được ngay nhờ badge nguồn. Chặn trước khi vào bộ ôn tập là đủ, không cần cấm AI sinh. | **Act.** Đổi lấy tốc độ tối đa: 0 thao tác là có bài ôn. Cái giá là AI sai khó phát hiện nhất — nhóm giữ nguyên để đo, không phải vì cho rằng an toàn. | **Ask on demand.** Đo baseline của Hoàn: giải thích từng chỗ khi user gọi. Không Act vì đó là C. Không Don't Act vì A bắt user tự viết. |
| **User hiểu capability/limit bằng gì?** | Nhãn *"AI không sinh nội dung"* cạnh tiêu đề; placeholder *"bạn tự gõ, hệ thống không gợi ý"*. | Câu mở đầu nói rõ AI soạn hai nhóm thẻ **từ ghi chú của bạn**, hiện trước khi user chạm vào thẻ nào; trigger là popup hỏi *"Xem ngay?"*. | Câu *"Tạo tự động ngay khi bạn mở trang."* **Đến sau khi AI đã làm xong** — điểm yếu cố hữu của Act pattern, và là thứ cần đo. | Câu mở *trước* khi AI viết: không bộ ôn, không quiz, im cho đến khi được chỉ. |
| **Evidence / uncertainty thể hiện thế nào?** | Chip nguồn do user tự gắn; mốc *tự lưu lúc hh:mm:ss*. Không có uncertainty vì không có suy luận. | Badge *"Dựa vào &lt;slide&gt;"* trên từng thẻ; tag *"bạn đã sửa"*; tag đỏ *"AI không chắc — mẩu gốc quá ngắn"* trên thẻ suy từ mẩu mỏng. | Trích dẫn nguồn ở cả 7 mục; tag *"AI không chắc"* trên mục suy từ mẩu mỏng nhất. | Mẩu gốc nằm trên lời giải; badge nguồn; tag *"AI không chắc"* trên Slide 7. |
| **User kiểm soát và recovery thế nào?** | Gỡ chip nguồn bằng ×; sửa mọi ô tự do. Không phát sinh nhu cầu recovery. | *Sửa* / *Đổi thẻ khác* / *Loại* trên từng thẻ, cộng *Hoàn tác* sau khi đã quyết. Loại một thẻ không ảnh hưởng thẻ khác. | *Rollback về ghi chú thô* một bấm, đưa màn hình về đúng ba mẩu gốc; đổi mục tiêu; *Tạo lại bản tóm tắt* để quay lui. | Chọn mẩu khác; *Giải thích dễ hơn*; *Đóng, về ba mẩu* một bấm. |

---

## 4. Feedback and data check

Prototype hiện chạy trên content fixture, không có dữ liệu thật của ai. Phần dưới là quyết
định thiết kế cho bản thật, ghi ra trước để buổi test hỏi đúng chỗ.

**Feedback ảnh hưởng tới đâu.** Việc user duyệt hay loại thẻ ở Option B, đổi mục tiêu ở
Option C, và chọn / đóng một mẩu ở Option D, **chỉ có tác dụng trong phiên hiện tại**. Hệ thống không ghi nhớ sang lần sau và
không dùng nó để huấn luyện gì.

Lý do: chưa nguồn phỏng vấn nào cho thấy người học muốn hệ thống nhớ lựa chọn của họ. Cho
nhớ trong khi chưa có evidence là tự thêm một cơ chế mà nếu nhớ sai thì user rất khó gỡ —
và cái sai đó lại không hiện ra ở đâu cả. Khi nào có evidence thì mở, không làm ngược lại.

**Dữ liệu nào được dùng.** Đúng ba thứ: mẩu highlight, ghi chú ngắn, và ảnh chụp slide user
đánh dấu chưa hiểu — tất cả do chính user tạo trong bài học đó. Không đọc lịch sử học, không
đọc bài khác, không đối chiếu với người học khác.

**Điểm nhạy cảm chưa xử lý:** ảnh chụp slide là **nội dung bài giảng của giảng viên**, không
phải của người học. Bản thật cần quyết định ai được xử lý ảnh đó và lưu bao lâu. Chưa có
câu trả lời; ghi ra đây để không lờ đi.

**Cách rút quyền.** Ở Option C, *Rollback về ghi chú thô* vừa là recovery vừa là đường rút
quyền — bấm xong thì bản AI soạn bị gỡ khỏi màn hình. Bản thật cần thêm một bước xoá hẳn
bản đã sinh, chứ không chỉ ẩn đi. Prototype chưa có bước đó.

---

## 5. Tự kiểm — GATE 3: Human control

- [x] **Mỗi option nói rõ user và AI làm gì.** Ba dòng đầu bảng Decision Table, và trong
      prototype thì mỗi option đều có nhãn vai trò AI hiện ngay cạnh tiêu đề.
- [x] **Agency phù hợp với hậu quả khi sai** — với A và B. **Với C thì không**, và nhóm ghi
      thẳng chuyện đó ở mục 2.2 thay vì đánh dấu cho đủ ô: AI làm nhiều nhất trong khi sai
      khó phát hiện nhất. C được giữ nguyên để đo rủi ro đó, và nó có trích dẫn từng mục
      cộng rollback một bấm làm hàng rào.
- [x] **Mỗi option có ít nhất một đường kiểm soát hoặc phục hồi.** A: gỡ chip nguồn, sửa tự
      do. B: sửa / đổi / loại / hoàn tác. C: rollback một bấm về ghi chú gốc. D: đóng về ba
      mẩu; chọn mẩu khác; xin bản dễ hơn.

**Chưa qua được, ghi rõ:**

- Expectation ở Option C đến sau khi AI đã hành động. Không sửa được bằng chữ nghĩa — sửa
  triệt để thì C thành B, mà thế là mất mất option.
- Prototype chưa có bước **xoá hẳn** dữ liệu AI đã sinh, mới có bước ẩn đi.
- Chưa chạy buổi test nào với tester thật, nên toàn bộ phần trên là **quyết định thiết kế**,
  chưa phải kết quả kiểm chứng. Chưa có dòng *"Tester đã làm…"* nào.
