// Sổ tay lý thuyết trọng tâm V-ACT chuẩn GDPT 2018 (ĐHQG TP.HCM)
// Tham khảo và tổng hợp tinh hoa từ các nguồn uy tín hàng đầu: CPEN và VnNO1

export const THEORY_CATEGORIES = [
  { id: 'all', name: 'Tất cả chuyên đề' },
  { id: 'vietnamese', name: 'Tiếng Việt (300đ)' },
  { id: 'english', name: 'Tiếng Anh (300đ)' },
  { id: 'math', name: 'Toán học (300đ)' },
  { id: 'logic_data', name: 'Logic & Số liệu (12 câu)' },
  { id: 'science_reasoning', name: 'Suy luận KH (18 câu)' },
  { id: 'cpen_vnno1', name: 'Bí kíp CPEN & VnNO1' },
];

export const THEORY_ARTICLES = [
  {
    id: 'vnno1-01',
    category: 'cpen_vnno1',
    title: 'Phương Pháp Bảng Ma Trận 2 Chiều Phá Đảo 12 Câu Logic (Biên soạn: VnNO1)',
    readTime: '10 phút',
    summary: 'Kỹ thuật kẻ bảng ma trận đối ứng 2 chiều của VnNO1 giúp triệt tiêu bẫy suy luận vị trí, phân nhóm đối tượng và giải quyết 12 câu Logic/Số liệu dưới 12 phút.',
    content: `
### 1. Bản chất phân môn Logic trong đề V-ACT theo VnNO1
Phần thi Logic của ĐHQG-HCM không yêu cầu giải toán cao cấp mà kiểm tra năng lực **tư duy suy luận có điều kiện**. Thí sinh thường bị rối vì não bộ không thể lưu trữ cùng lúc 5-7 điều kiện ràng buộc.

### 2. Kỹ thuật Kẻ Bảng Ma Trận Đối Ứng (VnNO1 Elimination Matrix):
- **Bước 1: Xác định biến cố định và biến động**:
  - Biến cố định: Thứ tự (1, 2, 3, 4, 5) hoặc Thứ trong tuần (T2, T3, T4, T5, T6, T7, CN).
  - Biến động: Tên người (M, N, P, Q, R) hoặc Ngành nghề/Màu áo.
- **Bước 2: Điền dấu khẳng định (+) và phủ định (-)**:
  - Khi một điều kiện khẳng định (ví dụ "P đạt giải nhì"), đánh dấu "+" vào ô tương ứng.
  - Ngay lập tức gạch "-" toàn bộ hàng ngang và cột dọc của ô đó (luật loại trừ 1-1).
- **Bước 3: Xử lý mệnh đề kéo theo ($P \\implies Q$)**:
  - Nhớ nguyên lý phản đảo: Nếu $P \\implies Q$ thì $\\text{không } Q \\implies \\text{không } P$.
  - Mệnh đề "A hoặc B" có nghĩa là nếu không A thì chắc chắn phải là B.
- **Bước 4: Chiến thuật giả sử phân nhánh**:
  - Nếu còn 2 trường hợp chưa chốt, giả sử trường hợp 1, nếu dẫn tới mâu thuẫn giả thiết thì khẳng định trường hợp 2 là đúng.
    `
  },
  {
    id: 'cpen-01',
    category: 'cpen_vnno1',
    title: 'Cẩm Nang 45 Dạng Bẫy Ngôn Ngữ & Ngữ Liệu Dài V-ACT (Biên soạn: CPEN)',
    readTime: '9 phút',
    summary: 'Hệ thống bẫy từ ngữ Hán Việt, lỗi sai cấu trúc ngữ pháp và kỹ thuật đọc lướt định vị từ khóa trong các đoạn văn dài của CPEN.',
    content: `
### 1. Bí kíp đọc hiểu ngữ liệu dài từ Thủ khoa CPEN
Các văn bản đọc hiểu của ĐHQG-HCM thường dài từ 400 - 800 từ (trích từ các báo cáo khoa học, bài phê bình văn học hoặc văn bản kinh tế).
- **Quy tắc "Đọc câu hỏi trước - đọc ngữ liệu sau"**:
  - Đọc lướt 5 câu hỏi để bôi đen/gạch chân từ khóa (keywords) định vị vị trí dữ kiện.
  - Phân loại câu hỏi: Câu hỏi tìm chi tiết trực tiếp trong bài (Scanning) vs Câu hỏi suy luận tư tưởng/ý nghĩa nhan đề (Skimming).
- **Cảnh giác với các từ chỉ mức độ tuyệt đối trong 4 phương án trắc nghiệm**:
  - Các phương án chứa từ: "tất cả", "luôn luôn", "duy nhất", "hoàn toàn không" thường là phương án SAI (nhiễu).
  - Các phương án mang tính tương đối: "có thể", "chủ yếu", "một phần", "góp phần" thường là phương án ĐÚNG.

### 2. Các cặp từ Hán Việt và lỗi dùng từ CPEN tổng hợp:
- **Cứu cánh**: Nghĩa là "Mục đích cuối cùng", không phải là "sự cứu giúp".
- **Yếu điểm**: Nghĩa là "Điểm quan trọng mấu chốt", phân biệt với "Nhược điểm" (điểm yếu).
- **Sáp nhập**: Đúng chính tả (không viết "Sát nhập").
- **Tham quan**: Đi xem để học hỏi (không viết "Thăm quan").
- **Vô hình trung**: Vô tình mà tạo nên (không viết "Vô hình chung").
    `
  },
  {
    id: 'vnno1-02',
    category: 'math',
    title: 'Chiến Thuật Xử Lý Bài Toán Tối Ưu Thực Tế & Biểu Đồ (Biên soạn: VnNO1)',
    readTime: '8 phút',
    summary: 'Phương pháp thiết lập hàm số tối ưu chi phí, bài toán quy hoạch lúa - khoai, diện tích lớn nhất và công thức tăng trưởng kinh tế.',
    content: `
### 1. Bài toán Quy hoạch tuyến tính thực tế (Kinh điển trong đề V-ACT):
Ví dụ bài toán nông dân trồng lúa - khoai:
- Gọi $x, y$ lần lượt là số ha lúa và khoai cần trồng.
- Lập hệ bất phương trình ràng buộc:
  $$\\begin{cases} x + y \\le S_{\\text{tổng}} \\\\ a_1 x + b_1 y \\le \\text{Vật tư} \\\\ a_2 x + b_2 y \\le \\text{Công nhật} \\\\ x \\ge 0, y \\ge 0 \\end{cases}$$
- Vẽ miền đa giác nghiệm trên giấy nháp.
- Hàm lợi nhuận $F(x, y) = c_1 x + c_2 y$ **luôn đạt giá trị lớn nhất tại một trong các đỉnh của miền đa giác nghiệm**.
- Thay tọa độ các đỉnh vào để tìm ngay giá trị lớn nhất mà không cần giải dài dòng!

### 2. Công thức phân tích biểu đồ & Tốc độ tăng trưởng:
- **Tốc độ tăng trưởng liên hoàn (%)**:
  $$\\text{Tăng trưởng} = \\frac{\\text{Năm sau} - \\text{Năm trước}}{\\text{Năm trước}} \\times 100\\%$$
- **Tỷ trọng cơ cấu (%)**:
  $$\\text{Tỷ trọng} = \\frac{\\text{Thành phần}}{\\text{Tổng thể}} \\times 100\\%$$
    `
  },
  {
    id: 'cpen-02',
    category: 'cpen_vnno1',
    title: 'Chiến Lược Quản Lý Thời Gian "40 - 40 - 50 - 20" Phòng Thi (Biên soạn: CPEN)',
    readTime: '7 phút',
    summary: 'Phân bổ 150 phút làm 120 câu hỏi một cách khoa học: 40p Ngôn ngữ, 40p Toán học, 50p Khoa học & 20p rà soát tô phiếu.',
    content: `
### 1. Ma trận thời gian 150 phút chuẩn CPEN:
- **Giai đoạn 1 (0 - 40 phút): Giải quyết trọn vẹn 60 câu Ngôn ngữ (30 Tiếng Việt + 30 Tiếng Anh)**:
  - Trung bình 40 giây / câu. Câu nào dài hoặc phân vân gạch chân đánh dấu cờ, không dừng lại quá 60 giây.
- **Giai đoạn 2 (40 - 80 phút): Xử lý 30 câu Toán học**:
  - Dùng Casio 580 quét nghiệm Table (Menu 8), thử đáp án đối với các câu giải tích/tích phân.
- **Giai đoạn 3 (80 - 130 phút): Xử lý 30 câu Tư duy khoa học**:
  - 12 câu Logic/Số liệu: Kẻ bảng ma trận loại trừ theo phương pháp VnNO1.
  - 18 câu Suy luận khoa học: Bám sát dữ kiện tình huống trong bài.
- **Giai đoạn 4 (130 - 150 phút): 20 phút về đích & rà soát**:
  - Xử lý các câu gắn cờ.
  - **Tô kín 100% phiếu trắc nghiệm**, không bao giờ để trống vì V-ACT không trừ điểm câu sai!
    `
  },
  {
    id: 'tv-01',
    category: 'vietnamese',
    title: 'Phân tích Lập luận & Cấu trúc Văn bản Tiếng Việt V-ACT',
    readTime: '7 phút',
    summary: 'Nhận diện luận điểm, luận cứ, thao tác lập luận và cấu trúc đoạn văn (diễn dịch, quy nạp, tổng-phân-hợp).',
    content: `
### 1. Cấu trúc đoạn văn và phương thức lập luận trong đề V-ACT
Đề thi V-ACT đổi mới tập trung kiểm tra năng lực Đọc hiểu, phân tích lập luận, cấu trúc văn bản và sử dụng ngôn ngữ (30 câu – 300 điểm).

#### A. Các mô hình kết cấu đoạn văn thường gặp:
- **Diễn dịch**: Câu chủ đề (chứa luận điểm chính) nằm ở đầu đoạn.
- **Quy nạp**: Các câu đầu nêu dẫn chứng, câu kết luận nằm ở cuối đoạn.
- **Tổng – Phân – Hợp**: Câu đầu nêu nhận định chung, các câu giữa phân tích chi tiết, câu cuối tổng hợp nâng cao.
    `
  },
  {
    id: 'eng-01',
    category: 'english',
    title: 'Cấu Trúc Ngữ Pháp & Dạng Bài Tìm Lỗi Sai Tiếng Anh V-ACT',
    readTime: '8 phút',
    summary: 'Chiến thuật ăn trọn điểm 30 câu Tiếng Anh: Sự hòa hợp chủ - vị, mệnh đề quan hệ rút gọn, đảo ngữ và liên từ suy luận.',
    content: `
### 1. Đặc trưng Phần 1.2: Tiếng Anh (30 câu – 300 điểm)
Gồm các dạng: Từ vựng ngữ cảnh, Ngữ pháp, Xác định lỗi sai và Đọc hiểu suy luận.
    `
  }
];
