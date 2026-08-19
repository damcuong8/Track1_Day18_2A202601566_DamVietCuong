# Chặng 4 — Micro-Prototype

**Nhóm:** cuong
**Thành viên:** Lê Quang Huy (2A202601821), Đàm Việt Cường (2A202601566), Trần Đức Bảo (2A202601472), Hoàng Minh Quân (2A202601574)
**Case B** — AI Notes: Personal Learning Notes

Dựng theo [Chặng 2](02-three-solution-options.md) và [Chặng 3](03-human-ai-design-pass.md).

---

## 1. Hiện có mấy bản prototype

| Bản | Phụ trách | Phủ option nào | File |
|---|---|---|---|
| Bản chung bốn option | Lê Quang Huy (khung), Hoàng Minh Quân (D) | A, B, C, D — chuyển qua lại bằng nút | [prototype/index.html](prototype/index.html) |
| Bản riêng Option B | Đàm Việt Cường | Chỉ B, có thêm màn luyện tập trắc nghiệm thật | [prototype-option-b.html](prototype-option-b.html) |
| Option C | Trần Đức Bảo | Chưa có bản riêng; C nằm trong bản chung | — |
| Option D | Hoàng Minh Quân | D nằm trong bản chung; file Chặng 3 riêng | [03-human-ai-design-hoangminhquan.md](03-human-ai-design-hoangminhquan.md) |

**Quyết định cho buổi test:** chạy trên **bản chung**, vì đề yêu cầu tester làm cùng một task
trên cùng một ngữ cảnh ở các option. File riêng thì mỗi lần chuyển option là đổi luôn
cả bố cục lẫn cách trình bày, chênh lệch quan sát được sẽ lẫn giữa *role split* và *khác
giao diện*.

Bản Option B của Cường vẫn dùng, nhưng dùng **sau** — như một bản đào sâu riêng cho B, chạy
khi đã xong vòng so sánh A/B/C/D. Màn luyện tập trắc nghiệm của bản đó là thứ bản chung
không có.

---

## 2. Cấu trúc màn hình bản chung

Giao diện dạng **khung chat**: thread ở giữa, khung soạn ở dưới, nhật ký hành vi bên phải.

### 2.1. Common context header

Cùng một ngữ cảnh cho A / B / C / D, không đổi khi chuyển option:

> Tối trước buổi học kế tiếp. Bạn mở lại bài *Finding & Validating Pain Points*. Hệ thống đã
> lưu sẵn ba dấu vết từ lúc bạn học.

Ba mẩu fixture, giữ nguyên ở cả A/B/C/D:

| # | Loại | Nội dung |
|---|---|---|
| 1 | Highlight · Slide 3 | Problem Hypothesis: Khi [situation], [user] gặp khó khăn [job] vì [barrier], dẫn đến [consequence]. |
| 2 | Ghi chú ngắn · Slide 7 | Ba phản xạ: Deflect, Anchor, Dig khi gặp lời khen hoặc đòi hỏi tính năng. |
| 3 | Ảnh chụp + Chưa hiểu · Slide 11 | Phân biệt Pain (khó khăn lúc làm job) và Consequence (hậu quả nếu không giải quyết). |

### 2.2. Option switcher & annotation banner

Bốn nút A / B / C / D ngay trên khung chat. Banner phía trên hiện tên option, người phụ trách,
vai trò AI, và **mục tiêu quan sát của option đó**.

> Banner này dành cho facilitator. **Che lại khi tester ngồi vào** — nó nói thẳng ra điều
> đang cần đo, đọc được là hỏng buổi test.

### 2.3. Critical interaction zone

Mỗi option chỉ dựng đúng một khoảnh khắc quyết định, không thêm màn hình cho từng tiêu chí:

| Option | Trong thread | Ở khung soạn |
|---|---|---|
| **A** | Sổ ghi chú gửi **một** tin xếp lại ba mẩu, rồi im. **Không có bong bóng AI nào.** Thẻ tester gửi hiện thành bong bóng của chính họ | Chọn loại thẻ (tóm tắt / giải thích / quiz), gắn mẩu nguồn, tự gõ, *Gửi vào sổ*. Mốc *tự lưu lúc hh:mm:ss* |
| **B** | AI gửi lời mở đầu, rồi bốn thẻ bản thảo — mỗi thẻ là một bong bóng có nút *Giữ / Sửa / Đổi / Bỏ*. Tester bấm thì thao tác trả lời lại thành bong bóng của họ | Đếm số thẻ chưa duyệt; nút *Chốt bộ ôn tập* mở khoá khi duyệt hết |
| **C** | AI đăng **cả bản ôn tập trong một tin ngay khi mở**: 3 ý cốt lõi + 1 mục giải thích + 3 câu tự kiểm tra | Chip đổi mục tiêu (hiểu sâu / đủ qua bài / ôn nhanh); nút *Bỏ bản này, cho mình ghi chú thô*; nút *Bắt đầu ôn* |
| **D** | AI nói *im cho đến khi bạn chỉ một mẩu*, rồi hiện ba mẩu bấm được. **Không quiz, không digest.** Chỉ khi tester bấm một mẩu mới có một lời giải + mẩu gốc | Chip chọn mẩu; *Giải thích dễ hơn*; *Đóng, về ba mẩu* |

### 2.4. Result / decision state & reset path

- **A** — thẻ đã gửi nằm lại trong thread; mốc tự lưu cập nhật mỗi lần gõ.
- **B** — sau khi chốt, AI gửi tin tổng kết: giữ mấy thẻ giải thích, mấy thẻ tự kiểm tra.
- **C** — bấm *Bắt đầu ôn* thì trạng thái chốt theo mục tiêu đang chọn; bấm rollback thì
  thread quay về đúng ba mẩu ghi chú gốc, và có nút *Soạn lại giúp mình* để quay lui.
- **D** — lời giải một mẩu nằm trong thread; *Đóng, về ba mẩu* đưa khay ba mẩu thô hiện lại.
- **Reset** — nút *Reset ngữ cảnh* xoá sạch state cả bốn option và nhật ký, đưa về A. Dùng
  giữa hai tester.

---

## 3. Nhật ký hành vi

Cột phải ghi lại tester **đã làm gì**, kèm mốc thời gian và option đang mở. Ví dụ một dòng thật:

```
12:38:27  [A]  gắn Ảnh chụp + Chưa hiểu · Slide 11 vào thẻ đang soạn
12:38:44  [A]  bắt đầu gõ nội dung cho thẻ quiz
12:39:02  [B]  bỏ thẻ giải thích: "Vì sao Problem Hypothesis phải c…"
12:40:15  [C]  rollback — bỏ bản AI soạn, quay về ghi chú thô
12:41:02  [D]  chọn mẩu Ảnh chụp + Chưa hiểu · Slide 11 — chỗ đánh dấu chưa hiểu
```

Nút *Copy nhật ký* xuất ra dạng tab-separated để dán thẳng vào biên bản test.

Nhật ký **chỉ ghi thao tác, không ghi ý kiến**. Đây là quyết định có chủ đích: kết luận cuối
bài chỉ được ở dạng *"Tester đã làm…"*, nên công cụ ghi chép cũng không được tạo ra thứ dữ
liệu dẫn nhóm sang *"tester nói thích cái này"*.

---

## 4. Dữ liệu trong prototype

Ba mẩu ghi chú và toàn bộ nội dung AI là **content fixture và canned output viết sẵn**, đúng
phạm vi mục 10 của đề cho phép. Không gọi model thật, không có dữ liệu người dùng thật, không
gọi mạng. Một file HTML mở thẳng bằng trình duyệt.

Trạng thái chỉ nằm trong bộ nhớ trang: tải lại trang là mất. Cố ý — để không có dữ liệu buổi
test nào bị giữ lại ngoài nhật ký người ghi chép chủ động copy ra.

---

## 5. Những thứ prototype cố tình không làm

- **Không có màn đăng nhập, cài đặt, hay điều hướng.** Chỉ dựng critical interaction.
- **Không có màn luyện tập trắc nghiệm ở bản chung.** Đó là bước sau khoảnh khắc quyết định.
  Ai cần thì chạy [bản Option B của Cường](prototype-option-b.html).
- **Không có bước xoá hẳn dữ liệu AI đã sinh**, mới có bước ẩn đi bằng rollback. Đã ghi ở
  [Chặng 3](03-human-ai-design-pass.md) mục 4.

---

## 6. Việc còn mở

- Bảo chưa có bản riêng cho Option C; C hiện chỉ tồn tại trong bản chung.
- Chặng 3 đang nằm rải bốn file ([bản chung](03-human-ai-design-pass.md),
  [bản của Cường](03-human-ai-design-damvietcuong.md), [bản của Bảo](chang3_C.md),
  [bản của Quân](03-human-ai-design-hoangminhquan.md)) — cần gộp về một.
- Hai ý trong bản của Bảo chưa nhập vào bản chung: nhãn *"câu hỏi tự sinh, chưa qua duyệt"*
  tách phần AI sinh mới khỏi phần trích nguyên văn, và auto-save bản gốc **trước khi** AI xử
  lý — cái sau nối thẳng vào evidence #6 (Mai mất file vì quên Ctrl+S).
- Chưa chạy buổi test nào. Chưa có dòng *"Tester đã làm…"* nào.
