# Group Feedback Synthesis — Day 18

**Tên nhóm:** cuong  
**Thành viên:** 
1. Lê Quang Huy (2A202601821) — Phụ trách Option A
2. Đàm Việt Cường (2A202601566) — Phụ trách Option B
3. Trần Đức Bảo (2A202601472) — Phụ trách Option C
4. Hoàng Minh Quân (2A202601574) — Phụ trách Option D / Feedback 4  
**Case nghiên cứu:** Case B — AI Notes: Personal Learning Notes  

---

## 1. Bảng Tổng Hợp Đối Chiếu Phản Hồi Từ 4 Testers Độc Lập

Nhóm đã thực hiện 4 phiên test độc lập với 4 người học khác ngoài nhóm:
- **Tester 1 (Cường facilitate):** Nguyễn Văn Nam — Học viên lớp AI thực chiến.
- **Tester 2 (Huy facilitate):** Vũ Hoàng Anh — Học viên lớp AI thực chiến.
- **Tester 3 (Bảo facilitate):** Lê Minh Đức — Học viên lớp AI thực chiến.
- **Tester 4 (Quân facilitate):** Học viên cùng lớp — Thường ôn bài bằng ghi chú và ảnh chụp slide.

| Tiêu chí đối chiếu | Feedback 1 (Cường facilitate) | Feedback 2 (Huy facilitate) | Feedback 3 (Bảo facilitate) | Feedback 4 (Quân facilitate) | Pattern chung hoặc Điểm khác biệt |
|---|---|---|---|---|---|
| **Hành động đầu tiên (First Action)** | Ở Option B, chờ 10s thấy AI hỏi thăm thì bấm đồng ý ngay, sau đó thử làm câu quiz 1. | Thử gõ câu hỏi vào ô hỏi nhanh trước khi đồng ý cho AI đọc slide ở Option B. | Mở Option C làm thử câu hỏi trước, sau đó chuyển sang Option B để so sánh. | **A:** Thấy 3 mẩu & ô trống, không gõ.<br>**B:** 4 thẻ sẵn, lướt qua, không sửa/chốt.<br>**C + D:** C mở ra có cả bộ (không đọc hết); D bấm ngay Slide 11 (chưa hiểu). | Cả 4 testers đều bỏ qua việc tự gõ (Option A); chú trọng vào tốc độ nhận được câu trả lời đúng trọng tâm. |
| **Khó khăn / Điểm nghẽn chính** | Option A quá tốn công tự gõ. Option C sinh tóm tắt hơi dài dòng. | Tốc độ gọi API hỏi đáp đôi khi bị chậm 2-3 giây. | Muốn có cách bấm/khoanh thẳng vào ảnh slide để hỏi ngay thay vì chụp ảnh thủ công. | A: Dừng ở ô trống tưởng chat thì máy sẽ viết. C: Dừng vì bản dài. D: Không dừng — bấm 1 mẩu là ra ngay lời giải. | **Pattern rõ rệt:** Option A bị loại bỏ 100% vì rào cản thao tác lớn. Option C có giá trị khi muốn xem toàn bộ nhưng dễ gây quá tải; Option B và D giải quyết tốt khi cần giải tỏa đúng 1 điểm chưa hiểu. |
| **Cách lấy lại quyền kiểm soát** | Bấm nút `[↻ Soạn lại]` và kiểm tra nút `[Thu hồi — về lại im lặng]` ở Option B. | Tự tay gõ lại câu hỏi vào tab *Trò chuyện* để AI giải thích ngắn gọn hơn. | Bấm nút `[Quay lại ghi chú gốc]` ở Option C và dùng tab *Ghi chú gốc* ở Option B. | Dùng nút *[Giải thích dễ hơn]* $\rightarrow$ *[Đóng, về ba mẩu]* $\rightarrow$ chọn lại Slide 11 ở Option D. | Tất cả testers đều chủ động sử dụng các nút điều hướng / đổi cách giải thích / quay về bản gốc khi cần. |
| **Option được chọn** | **Option B** (Ask & Propose) | **Option B** (Ask & Propose) | **Option B** (Ask & Propose) | **C và D** (Gộp cả 2 mức) | Đa số chọn sự linh hoạt: vừa có khả năng giải thích đúng 1 điểm nghẽn, vừa có thể tạo cả bộ ôn tập khi cần. |
| **Lý do & Trade-off chấp nhận** | An tâm vì AI hỏi trước khi đọc slide; có đủ cả tóm tắt lẫn quiz. | Thích tính năng trò chuyện và hỏi nhanh; không bị ép nhận bài soạn sẵn. | Kích hoạt đúng lúc khi dừng lại đọc slide khó. | *"C với D tiện. C có sẵn cả bài, D bấm đúng chỗ chưa hiểu là xong, nhanh. Đổi lại là A phải tự viết, B phải bấm duyệt nhiều."* | Người học không muốn mất công gõ tay (A) hoặc bấm duyệt quá nhiều thẻ (B) khi đang vội, mà muốn chọn đúng chế độ phù hợp với thời gian mình có. |

---

## 2. Quyết Định Của Nhóm (Group Next Change & Unproven)

### 2.1. Một Next Change nhóm chốt cho iteration tiếp theo:
> **Nhóm quyết định tích hợp cơ chế Hybrid hai mức độ:**  
> 1. **Mức 1 (Point & Solve / Targeted Help - theo Option B & D):** Cho phép người học bấm trực tiếp vào đúng mẩu ghi chú hoặc vùng ảnh slide đánh dấu "Chưa hiểu" để nhận ngay lời giải thích ngắn gọn/dễ hiểu chỉ cho đúng điểm đó.  
> 2. **Mức 2 (Full Study Pack - theo Option C):** Nút *"Soạn sẵn cả bộ ôn tập"* dành cho lúc người học muốn có trọn gói 3 ý chính và bài trắc nghiệm Active Recall toàn bài.  
> Không bắt ép người học phải duyệt tuần tự từng thẻ nếu họ chỉ đang cần giải tỏa nhanh 1 khái niệm khó trước giờ lên lớp.

### 2.2. Bằng chứng (Evidence) dẫn tới quyết định này:
- 3/4 testers (Nam, Anh, Đức) đánh giá cao tính an toàn và tương tác của cơ chế hỏi trước (*Ask & Propose*).
- Tester 4 (phiên của bạn Quân) cung cấp góc nhìn thực tế phản biện: Khi ngồi ôn bài sát giờ học, người học có xu hướng muốn giải quyết dứt điểm đúng slide chưa hiểu (Slide 11) trong 5 giây thay vì duyệt qua toàn bộ các thẻ.
- Nhật ký thao tác của Tester 4 cho thấy hành vi lặp lại: Bấm Slide 11 $\rightarrow$ Xin giải thích dễ hơn $\rightarrow$ Đóng về ghi chú thô, chứng minh nhu cầu "giải thích cục bộ theo điểm chạm" là cực kỳ mạnh mẽ.

### 2.3. Điều vẫn chưa được chứng minh (Still Unproven):
- **Tính bền vững:** Chưa chứng minh được liệu khi cung cấp cả 2 mức (Targeted vs Full Pack), người học có bị phân vân giữa 2 nút bấm hay không.
- **Tác động lâu dài:** Chưa đo lường được liệu người học chỉ dùng Mức 1 (giải thích nhanh) có bị bỏ sót các kiến thức tổng quan cần thiết cho bài thi hay không.

---

## 3. Đối Chiếu Gate 5 (Gate 5 Checklist)

> [!CHECK] **GATE 5 — Learning, Not Praise**
> - [x] **Có đủ 4 bản feedback độc lập** từ 4 thành viên trong nhóm với 4 testers ngoài nhóm.
> - [x] **Chỉ ra được pattern hành vi và điểm khác biệt thực chất** (bao gồm cả bằng chứng chống lại kỳ vọng ban đầu của nhóm từ Tester 4).
> - [x] **Chốt rõ ràng một Group Next Change tích hợp** có dữ liệu quan sát từ các buổi test làm căn cứ.
> - [x] **Nêu rõ các điều Still Unproven** và giữ đúng giới hạn kết luận.
