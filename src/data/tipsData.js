// Tổng hợp Bí kíp & Chiến thuật thi từ các Thủ khoa ĐGNL (Điểm 1000+)
// Tích hợp tinh hoa từ các nguồn uy tín: CPEN và VnNO1

export const EXAM_TIPS = [
  {
    id: 'tip-vnno1',
    category: 'Phương pháp VnNO1',
    title: 'Kỹ thuật Ma trận 2 Chiều giải quyết 12 câu Logic dưới 12 phút',
    author: 'VnNO1 - Luyện thi ĐGNL',
    content: `
Bí kíp độc quyền từ VnNO1 để không bị "ngợp" trước các bài toán logic dài ngoằng:
1. **Lập bảng đối ứng 2 chiều**: Cột là đối tượng cần gán (Thứ tự, Phòng ban, Màu sắc), Hàng là danh sách đối tượng (Người, Môn học).
2. **Quy tắc dấu (+) và (-)**: Xác định chắc chắn đúng thì đánh (+), lập tức gạch (-) toàn bộ hàng và cột tương ứng.
3. **Nguyên tắc phản đảo**: Nếu điều kiện nói "Nếu A tham gia thì B không tham gia" ($A \\implies \\text{không } B$), thì suy ra "Nếu B tham gia thì A chắc chắn không tham gia" ($B \\implies \\text{không } A$).
4. **Không nháp rời rạc**: Mọi suy luận đều điền trực tiếp vào ô của bảng ma trận, bạn sẽ thấy đáp án lộ ra trong vòng 60 giây.
    `
  },
  {
    id: 'tip-cpen',
    category: 'Chiến thuật CPEN',
    title: 'Chiến thuật chia chặng vàng 40 - 40 - 50 - 20 trong 150 phút thi',
    author: 'CPEN - Thủ khoa ĐGNL ĐHQG-HCM',
    content: `
Trong phòng thi ĐGNL V-ACT, áp lực thời gian là kẻ thù lớn nhất (120 câu / 150 phút = 1 phút 15 giây/câu). Chiến thuật phân bổ khoa học của CPEN:
1. **0 - 40 phút đầu: Giải quyết trọn vẹn Tiếng Việt + Tiếng Anh (60 câu)**
   - Phần ngôn ngữ đọc hiểu không cần tính toán phức tạp. Đọc nhanh, gạch từ khóa, chọn ngay đáp án chắc chắn. Đánh dấu câu phân vân để dò sau.
2. **40 - 80 phút tiếp theo: Xử lý Toán học (30 câu)**
   - Sử dụng máy tính Casio quét nghiệm và giải nhanh bài toán thực tế.
3. **80 - 130 phút: Dành trọn tâm trí cho Tư duy khoa học (30 câu)**
   - 12 câu Logic/Số liệu áp dụng bảng ma trận. 18 câu Khoa học bám sát dữ kiện tình huống.
4. **20 phút cuối: Dò lại phiếu trắc nghiệm & "Khoanh bừa có căn cứ"**
   - Tuyệt đối không để trống bất kỳ câu nào trên phiếu trả lời! Vì bài thi không trừ điểm câu sai.
    `
  },
  {
    id: 'tip-2',
    category: 'Mẹo làm bài trắc nghiệm',
    title: 'Nghệ thuật loại trừ đáp án nhiễu & Khoanh bừa khoa học',
    author: 'Ban Cố Vấn Chuyên Môn V-ACT Hub',
    content: `
Khi gặp một câu hỏi hoàn toàn bí hoặc không kịp giải:
- **Loại trừ các phương án cực đoan**: Các đáp án chứa từ "luôn luôn", "tất cả", "chắc chắn", "hoàn toàn không bao giờ" thường là đáp án sai (nhiễu). Các phương án chứa từ mang tính tương đối như "thường", "có thể", "phần lớn" có xác suất đúng cao hơn nhiều.
- **Quy tắc đáp án tương đồng/đối lập**: Nếu 2 đáp án mang nội dung trái ngược nhau 180 độ, 90% đáp án đúng sẽ rơi vào một trong hai đáp án đó.
- **Thống kê phân bổ đáp án**: Trước khi khoanh các câu chưa làm, đếm nhanh xem trên phiếu A, B, C, D đáp án nào đang xuất hiện ít nhất, hãy chọn đồng loạt chữ cái đó cho các câu còn lại để tối đa hóa điểm kỳ vọng.
    `
  },
  {
    id: 'tip-3',
    category: 'Kỹ năng Casio',
    title: '5 Tính năng thần thánh trên Casio 580VNX cứu điểm môn Toán',
    author: 'Thầy Đặng Thành Nam (Vted) & VnNO1',
    content: `
1. **Khảo sát hàm số bằng Menu 8 (Table)**: Tìm giá trị lớn nhất, nhỏ nhất, số nghiệm của phương trình $f(x) = 0$ bằng cách quan sát sự đổi dấu của $f(x)$.
2. **Shift Solve với Start Value thông minh**: Thay vì để $x = 0$, hãy gán $x$ bằng giá trị gần với các đáp án A, B, C, D để máy hội tụ nghiệm nhanh chóng.
3. **Chức năng Vector trong Oxyz**: Bấm tích có hướng của 2 vectơ chỉ bằng Menu 5 để tìm vectơ pháp tuyến mặt phẳng trong 5 giây.
4. **Tính xác suất với nCr / nPr**: Bấm tổ hợp, chỉnh hợp, xác suất siêu tốc.
    `
  }
];

// Danh sách Video bài giảng và Livestream giải đề uy tín (đặc biệt từ CPEN & VnNO1)
export const RECOMMENDED_VIDEOS = [
  {
    id: 'v-vnno1-01',
    title: 'VnNO1 - Giải chi tiết Đề thi thử V-ACT 2026/2027 Lần 1 (Full 120 câu chuẩn IRT)',
    channel: 'VnNO1 - Luyện thi ĐGNL',
    duration: '1:45:20',
    category: 'vnno1',
    videoUrl: 'https://www.youtube.com/results?search_query=vnno1+%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c+gi%E1%BA%A3i+%C4%91%E1%BB%81',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60',
    description: 'Video livestream chữa chi tiết từng câu trong Đề thi thử VnNO1 lần 1, phân tích bẫy và kỹ năng quản lý thời gian.'
  },
  {
    id: 'v-vnno1-02',
    title: 'VnNO1 - Tuyệt chiêu giải quyết 12 câu Tư duy Logic & Phân tích số liệu',
    channel: 'VnNO1 - Luyện thi ĐGNL',
    duration: '58:30',
    category: 'logic',
    videoUrl: 'https://www.youtube.com/results?search_query=vnno1+logic+%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60',
    description: 'Chuyên đề kỹ thuật lập bảng ma trận hai chiều, loại trừ nhanh và đọc biểu đồ tăng trưởng không cần tính nhẩm.'
  },
  {
    id: 'v-cpen-01',
    title: 'CPEN - Phân tích Ma trận Đề thi ĐGNL ĐHQG TP.HCM 2025/2026 Chuẩn GDPT 2018',
    channel: 'CPEN - Luyện thi ĐGNL ĐHQG-HCM',
    duration: '1:12:15',
    category: 'cpen',
    videoUrl: 'https://www.youtube.com/results?search_query=cpen+%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c+%C4%91hqg+tphcm',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60',
    description: 'Thủ khoa CPEN mổ xẻ cấu trúc 1.200 điểm, chiến thuật 40-40-50-20 và lộ trình bứt phá 900+ điểm.'
  },
  {
    id: 'v-cpen-02',
    title: 'CPEN - Bí kíp trọn vẹn điểm phần Tiếng Việt & Ngữ liệu khoa học',
    channel: 'CPEN - Luyện thi ĐGNL ĐHQG-HCM',
    duration: '48:10',
    category: 'vietnamese',
    videoUrl: 'https://www.youtube.com/results?search_query=cpen+ti%E1%BA%BFng+vi%E1%BB%87t+%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c',
    thumbnail: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60',
    description: 'Tổng hợp 45 dạng bẫy Hán Việt, lỗi sai cấu trúc câu và phương pháp đọc quét từ khóa trong các đoạn văn dài.'
  },
  {
    id: 'v-vnno1-03',
    title: 'VnNO1 - Mẹo bấm máy tính Casio 580VNX xử lý bài toán thực tế & Xác suất',
    channel: 'VnNO1 - Luyện thi ĐGNL',
    duration: '42:50',
    category: 'math',
    videoUrl: 'https://www.youtube.com/results?search_query=vnno1+casio+%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=60',
    description: 'Kỹ năng Table Menu 8 quét nghiệm, tìm min max hàm số thực tế và tính nhanh tổ hợp xác suất.'
  }
];

// Lộ trình ôn thi 4 chặng từ số 0 đến 900+
export const STUDY_ROADMAP = [
  {
    stage: 'Chặng 1',
    title: 'Khảo sát Năng lực & Nắm vững Cấu trúc',
    time: 'Tuần 1 - 2',
    goal: 'Hiểu rõ đề thi, làm quen với 120 câu hỏi và phương pháp tính điểm IRT.',
    tasks: [
      'Làm bài test chẩn đoán ban đầu (Đề minh họa 2025 hoặc Đề VnNO1 Lần 1).',
      'Nắm vững ma trận đề thi V-ACT (Ngôn ngữ 60 câu, Toán 30 câu, Tư duy KH 30 câu).',
      'Cài đặt thời gian biểu học tập mỗi ngày 1.5 - 2 tiếng.'
    ]
  },
  {
    stage: 'Chặng 2',
    title: 'Quét sạch Chuyên đề & Rèn Kỹ năng cốt lõi (CPEN & VnNO1)',
    time: 'Tuần 3 - 6',
    goal: 'Không để mất điểm ở các câu hỏi mức độ Nhận biết và Thông hiểu.',
    tasks: [
      'Học cẩm nang 45 dạng bẫy Tiếng Việt của CPEN và ngữ pháp Tiếng Anh trọng tâm.',
      'Luyện kỹ thuật lập bảng ma trận đối ứng 2 chiều của VnNO1 cho các câu hỏi Logic.',
      'Nắm vững các công thức số liệu biểu đồ (tốc độ tăng trưởng, tỷ trọng cơ cấu).',
      'Thành thạo các chức năng Table, Solve, Vector trên Casio 580VNX.'
    ]
  },
  {
    stage: 'Chặng 3',
    title: 'Luyện Đề Bấm Giờ Thực Chiến (150 phút)',
    time: 'Tuần 7 - 10',
    goal: 'Rèn luyện áp lực thời gian, tốc độ làm bài và sự tập trung cao độ.',
    tasks: [
      'Mỗi tuần giải từ 2 - 3 đề trong Tuyển tập 25 đề Moon.vn và bộ đề VnNO1.',
      'Ghi chép toàn bộ câu sai vào "Sổ tay lỗi sai" (Mistake Book).',
      'Rèn kỹ năng tô phiếu trắc nghiệm không bị lệch dòng theo chiến thuật 40-40-50-20.'
    ]
  },
  {
    stage: 'Chặng 4',
    title: 'Tối ưu Hóa Điểm số & Về đích (Mục tiêu 900 - 1000+)',
    time: '2 Tuần cuối trước ngày thi',
    goal: 'Giữ vững tâm lý, ôn lại sổ tay sai lầm và duy trì phong độ đỉnh cao.',
    tasks: [
      'Xem lại toàn bộ các câu sai trong Sổ tay câu sai trên web app.',
      'Tập trung vào các câu hỏi phân loại cao (Toán thực tế, Logic nâng cao).',
      'Điều chỉnh nhịp sinh học, ngủ sớm và giữ tâm lý tự tin bước vào phòng thi.'
    ]
  }
];
