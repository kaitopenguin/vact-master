// Sổ tay lý thuyết trọng tâm V-ACT chuẩn GDPT 2018 (ĐHQG TP.HCM)
export const THEORY_CATEGORIES = [
  { id: 'all', name: 'Tất cả chuyên đề' },
  { id: 'vietnamese', name: 'Tiếng Việt (300đ)' },
  { id: 'english', name: 'Tiếng Anh (300đ)' },
  { id: 'math', name: 'Toán học (300đ)' },
  { id: 'logic_data', name: 'Logic & Số liệu (12 câu)' },
  { id: 'science_reasoning', name: 'Suy luận KH (18 câu - Lý, Hóa, Sinh, Sử, Địa, GDKT&PL)' },
];

export const THEORY_ARTICLES = [
  {
    id: 'tv-01',
    category: 'vietnamese',
    title: 'Phân tích Lập luận & Cấu trúc Văn bản Tiếng Việt V-ACT',
    readTime: '7 phút',
    summary: 'Nhận diện luận điểm, luận cứ, thao tác lập luận (phân tích, so sánh, bác bỏ, bình luận) và cấu trúc đoạn văn (diễn dịch, quy nạp, tổng-phân-hợp).',
    content: `
### 1. Cấu trúc đoạn văn và phương thức lập luận trong đề V-ACT
Đề thi V-ACT đổi mới tập trung kiểm tra năng lực **Đọc hiểu, phân tích lập luận, cấu trúc văn bản và sử dụng ngôn ngữ** (30 câu – 300 điểm).

#### A. Các mô hình kết cấu đoạn văn thường gặp:
- **Diễn dịch**: Câu chủ đề (chứa luận điểm chính) nằm ở **đầu đoạn**, các câu sau triển khai luận cứ giải thích, chứng minh.
- **Quy nạp**: Các câu đầu nêu dẫn chứng, phân tích cụ thể, câu kết luận (chủ đề) nằm ở **cuối đoạn**.
- **Tổng – Phân – Hợp**: 
  - Câu đầu: Nêu nhận định chung.
  - Các câu giữa: Phân tích, mổ xẻ từng khía cạnh.
  - Câu cuối: Tổng hợp, nâng cao, rút ra bài học nhận thức.
- **Song hành**: Các câu có vai trò ngữ pháp và nội dung ngang hàng, không có câu chủ đề đơn lẻ mà chủ đề toát lên từ toàn đoạn.
- **Móc xích**: Câu sau lặp lại từ ngữ của câu trước để liên kết nối tiếp.

#### B. Nhận diện các thao tác lập luận:
1. **Giải thích**: Cắt nghĩa từ ngữ, khái niệm, thuật ngữ ("...là gì?", "...nghĩa là...").
2. **Chứng minh**: Dùng số liệu thực tế, dẫn chứng nhân vật lịch sử để khẳng định chân lý.
3. **Phân tích**: Chia nhỏ đối tượng thành các bộ phận để xem xét kỹ lưỡng quan hệ nhân - quả.
4. **So sánh**: Đặt đối tượng cạnh đối tượng khác để làm nổi bật nét tương đồng hoặc dị biệt.
5. **Bác bỏ**: Chỉ ra điểm sai lầm, phiến diện của một quan điểm đối lập bằng lập luận sắc bén.
6. **Bình luận**: Đánh giá đúng - sai, hay - dở, đề xuất giải pháp và bài học hành động.
    `
  },
  {
    id: 'tv-02',
    category: 'vietnamese',
    title: 'Lỗi Sai Sử Dụng Ngôn Ngữ & Phân Biệt Từ Hán Việt Dễ Nhầm',
    readTime: '6 phút',
    summary: 'Tổng hợp các cặp từ Hán Việt và các lỗi ngữ pháp kinh điển: sáp nhập vs sát nhập, yếu điểm vs khuyết điểm, cứu cánh vs cứu vớt...',
    content: `
### 1. Các cặp từ Hán Việt có tần suất xuất hiện 95% trong đề V-ACT:
- **Sáp nhập** (ĐÚNG - ghép vào, gộp lại) vs **Sát nhập** (SAI chính tả).
- **Yếu điểm** (Điểm mấu chốt, trọng yếu quan trọng) vs **Nhược điểm / Điểm yếu** (Chỗ còn thiếu sót).
  - *Ví dụ chuẩn*: "Vị trí địa lý này là một yếu điểm quân sự" (nghĩa là vị trí yết hầu chiến lược).
- **Cứu cánh** (Mục đích cuối cùng cao nhất) vs **Cứu trợ / Cứu giúp**.
  - *Ví dụ chuẩn*: "Tiền bạc chỉ là phương tiện, không phải là cứu cánh của cuộc sống."
- **Vô hình trung** (ĐÚNG - ngẫu nhiên mà tạo thành) vs **Vô hình chung** (SAI).
- **Tri thức** (Kiến thức hiểu biết) vs **Trí thức** (Tầng lớp người lao động trí óc).
- **Tham quan** (Đi ngắm nhìn tìm hiểu thực tế) vs **Thăm quan** (SAI chính tả).

### 2. Kỹ thuật phát hiện câu sai ngữ pháp tiếng Việt:
- **Câu thiếu chủ ngữ (CN)**: Khi trạng ngữ có giới từ "Qua...", "Bằng...", "Với..." làm mất chủ ngữ thật của câu:
  - *Sai*: "Qua bài thơ Tây Tiến đã khắc họa khí phách người lính."
  - *Sửa*: "Qua bài thơ Tây Tiến, Quang Dũng đã khắc họa khí phách người lính."
- **Câu sai logic quan hệ từ**: Dùng sai cặp từ nối "Tuy... nên...", "Vì... nhưng...".
    `
  },
  {
    id: 'en-01',
    category: 'english',
    title: 'Kỹ Năng Đọc Hiểu & Suy Luận Ngữ Cảnh Tiếng Anh (300 Điểm)',
    readTime: '8 phút',
    summary: 'Chiến thuật Skimming & Scanning trích xuất thông tin, xử lý câu hỏi suy luận (Inference Questions) và ngữ pháp trọng tâm.',
    content: `
### 1. Cấu trúc Hợp phần Tiếng Anh V-ACT (30 câu – 300 điểm)
Phần thi kiểm tra: Đọc hiểu văn bản học thuật, từ vựng chuyên ngành, ngữ pháp chuẩn xác và suy luận ngữ cảnh.

### 2. Kỹ thuật xử lý câu hỏi Suy luận (Inference Questions):
- Câu hỏi thường có dạng: *"It can be inferred from the passage that..."* hoặc *"Which of the following is implied...?"*
- **Quy tắc vàng**:
  - Không suy diễn vượt quá ngữ cảnh đoạn văn cung cấp.
  - Loại bỏ ngay các đáp án chứa từ mang tính tuyệt đối hóa: *always, never, completely, all, impossible*.
  - Ưu tiên các đáp án diễn đạt lại (Paraphrase) ý của bài bằng từ đồng nghĩa hoặc câu bị động/phủ định tương đương.

### 3. Ngữ pháp trọng điểm:
- **Đảo ngữ với phó từ phủ định**:
  - *Hardly/Scarcely + had + S + V3/ed + WHEN + S + V-ed*
  - *No sooner + had + S + V3/ed + THAN + S + V-ed*
  - *Not until + time/clause + Did + S + V-inf*
- **Mệnh đề quan hệ rút gọn**:
  - Chủ động -> *V-ing* (*The girl speaking to John is my sister*).
  - Bị động -> *V3/ed* (*The bridge constructed in 1990 is being repaired*).
    `
  },
  {
    id: 'math-01',
    category: 'math',
    title: 'Tư Duy Toán Học & Bài Toán Thực Tế Trong Đề V-ACT',
    readTime: '9 phút',
    summary: 'Khảo sát hàm số, bài toán tối ưu chi phí - lợi nhuận, tích phân ứng dụng chuyển động, hình học Oxyz và xác suất thống kê.',
    content: `
### 1. Đặc trưng Phần 2: Toán học (30 câu – 300 điểm)
Đề thi V-ACT theo GDPT 2018 chú trọng năng lực: **Tư duy toán học, lập luận logic, xử lý số liệu, đọc biểu đồ và vận dụng kiến thức phổ thông vào thực tế**.

### 2. Các dạng toán thực tế kinh điển:
1. **Bài toán tối ưu hóa (GTLN - GTNN)**:
   - Bài toán chi phí sản xuất, kích thước bể nước tối ưu kim loại, diện tích hình chữ nhật lớn nhất khi chu vi không đổi.
   - *Cách giải*: Thiết lập hàm số $f(x)$ theo 1 biến số thực tế, tính đạo hàm $f'(x) = 0$ hoặc dùng Menu 8 (Table) trên Casio 580VNX để quét nghiệm.
2. **Bài toán lãi suất & tăng trưởng tài chính**:
   - Lãi kép hàng năm: $A = P(1 + r)^n$.
   - Gửi góp đều đặn đầu mỗi tháng: $S_n = \frac{M(1 + r)}{r} \cdot [(1 + r)^n - 1]$.
3. **Ứng dụng tích phân vào chuyển động**:
   - Quãng đường $s(t) = \int v(t) dt$.
   - Vận tốc $v(t) = \int a(t) dt$.
4. **Xác suất và Thống kê biến cố đối**:
   - Khi gặp cụm từ "có ít nhất một...": Áp dụng ngay $P(A) = 1 - P(\bar{A})$.
    `
  },
  {
    id: 'logic-01',
    category: 'logic_data',
    title: 'Chuyên Đề Logic & Phân Tích Số Liệu (12 Câu – Phần 3)',
    readTime: '8 phút',
    summary: 'Phương pháp bảng ma trận (Matrix Table) suy luận thứ tự, logic mệnh đề phản đảo và công thức tăng trưởng biểu đồ.',
    content: `
### 1. Vai trò của phân môn Logic & Số liệu (12 câu trong Phần 3)
Kiểm tra khả năng: Đọc hiểu bảng số liệu, biểu đồ, suy luận quy luật và lập luận logic.

### 2. Phương pháp lập bảng ma trận kẻ ô (Grid Elimination):
- Dành cho các bài toán gán thuộc tính (Tên, Vị trí ngồi, Ngành nghề, Màu áo).
- Lập bảng 2 chiều: Dòng là tên đối tượng, Cột là các thuộc tính.
- Dựa vào giả thiết, đánh dấu "+" vào ô chắc chắn đúng, lập tức đánh dấu "-" cho tất cả các ô còn lại trên cùng hàng và cột đó.
- Dùng phương pháp phản chứng (thử trường hợp) nếu còn 2 khả năng.

### 3. Công thức số liệu cốt lõi:
- **Tốc độ tăng trưởng liên hoàn (%)**:
  $$\text{Tăng trưởng} = \frac{\text{Giá trị năm sau} - \text{Giá trị năm trước}}{\text{Giá trị năm trước}} \times 100\%$$
- **Tỷ trọng cơ cấu (%)**:
  $$\text{Tỷ trọng} = \frac{\text{Giá trị thành phần}}{\text{Tổng thể}} \times 100\%$$
    `
  },
  {
    id: 'sci-01',
    category: 'science_reasoning',
    title: 'Suy Luận Khoa Học Tình Huống: Lý, Hóa, Sinh, Sử, Địa, GDKT&PL (18 Câu)',
    readTime: '10 phút',
    summary: 'Chiến thuật đọc trích xuất dữ kiện từ các chùm câu hỏi tình huống, thực nghiệm khoa học tự nhiên và bối cảnh khoa học xã hội.',
    content: `
### 1. Bản chất 18 câu Suy luận Khoa học (Phần 3)
ĐHQG-HCM không yêu cầu học thuộc lòng toàn bộ SGK 6 môn mà cung cấp **ngữ liệu tình huống, đồ thị thí nghiệm, bảng dữ liệu thực nghiệm hoặc văn bản pháp luật** và yêu cầu thí sinh suy luận dựa trên nguyên lý khoa học.

### 2. Các phân môn trong chùm câu hỏi:
- **Vật lí**: Dao động điều hòa, sóng âm, quang học thực nghiệm, truyền tải điện năng, hạt nhân phóng xạ.
- **Hóa học**: Thí nghiệm chuẩn độ, pH dung dịch, hiện tượng ăn mòn kim loại trong đời sống, polymer và vật liệu mới.
- **Sinh học**: Di truyền học người, công nghệ ADN tái tổ hợp, cân bằng sinh thái và biến đổi khí hậu.
- **Lịch sử**: Quá trình hội nhập quốc tế của Việt Nam (ASEAN, WTO, LHQ), các mốc lịch sử bước ngoặt giải phóng dân tộc.
- **Địa lí**: Khí hậu gió mùa, xâm nhập mặn Đồng bằng sông Cửu Long, chuyển dịch cơ cấu kinh tế các vùng.
- **Giáo dục Kinh tế & Pháp luật (GDKT&PL)**: Quy luật cung - cầu trên thị trường, lạm phát, hợp đồng dân sự và quyền công dân.
    `
  }
];
