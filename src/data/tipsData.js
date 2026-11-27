// Tổng hợp Bí kíp & Chiến thuật thi từ các Thủ khoa ĐGNL (Điểm 1000+)
// Tích hợp chiến thuật giải nhanh chuẩn V-ACT

export const EXAM_TIPS = [
  {
    id: 'tip-vnno1',
    category: '🧠 Tư duy Logic',
    source: 'V-ACT Master',
    title: 'Kỹ thuật Ma trận 2 Chiều giải quyết 12 câu Logic dưới 12 phút',
    author: 'Ban Chuyên Môn V-ACT',
    tags: ['Ma trận đối ứng', 'Quy tắc dấu +/-', 'Mệnh đề đảo'],
    content: `
Bí kíp độc quyền chuyên sâu để không bị "ngợp" trước các bài toán logic xếp chỗ dài ngoằng:
1. **Lập bảng đối ứng 2 chiều**: Cột là đối tượng cần gán (Thứ tự ghế 1..8, Phòng ban, Màu áo), Hàng là danh sách người (A, B, C, D, E, F...).
2. **Quy tắc dấu (+) và (-)**: Khi xác định chắc chắn A ngồi ghế 3, đánh dấu (+) vào ô (A, 3), lập tức gạch dấu (-) toàn bộ hàng A và cột 3.
3. **Nguyên tắc mệnh đề tương đương phản đảo**: Nếu dữ kiện cho "Nếu A tham gia thì B không tham gia" ($A \\implies \\neg B$), ta lập tức suy ra mệnh đề tương đương "Nếu B tham gia thì A chắc chắn không tham gia" ($B \\implies \\neg A$).
4. **Không nháp rời rạc bằng chữ**: Mọi suy luận đều điền trực tiếp vào ô của bảng ma trận, bạn sẽ thấy đáp án tự động lộ ra trong vòng 60 giây.
    `
  },
  {
    id: 'tip-cpen',
    category: '⏱️ Quản lý thời gian',
    source: 'CPEN - Thủ khoa ĐGNL ĐHQG-HCM',
    title: 'Chiến thuật chia chặng vàng 40 - 40 - 50 - 20 trong 150 phút thi',
    author: 'Thủ khoa CPEN (1080/1200)',
    tags: ['Phân bổ thời gian', 'IRT Scoring', 'Tô phiếu'],
    content: `
Trong phòng thi ĐGNL V-ACT, áp lực thời gian là kẻ thù lớn nhất (120 câu / 150 phút = 1 phút 15 giây/câu). Chiến thuật phân bổ khoa học của CPEN:
1. **0 - 40 phút đầu: Giải quyết trọn vẹn Tiếng Việt + Tiếng Anh (60 câu)**
   - Phần ngôn ngữ đọc hiểu không cần tính toán phức tạp. Đọc nhanh câu hỏi trước, quét ngược lên ngữ liệu, gạch từ khóa và chọn đáp án chắc chắn.
2. **40 - 80 phút tiếp theo: Xử lý Toán học (30 câu)**
   - Tận dụng tối đa máy tính Casio quét nghiệm và giải nhanh bài toán thực tế. Câu nào vượt quá 90 giây lập tức đánh dấu cờ để chuyển.
3. **80 - 130 phút: Dành trọn tâm trí cho Tư duy khoa học (30 câu)**
   - 12 câu Logic/Số liệu áp dụng bảng ma trận. 18 câu Khoa học bám sát dữ kiện tình huống trong đề, không bịa thêm kiến thức ngoài.
4. **20 phút cuối: Dò lại phiếu trắc nghiệm & "Khoanh bừa có căn cứ"**
   - Tuyệt đối không để trống bất kỳ câu nào trên phiếu trả lời! Vì bài thi V-ACT không trừ điểm câu sai.
    `
  },
  {
    id: 'tip-casio-580',
    category: '🔢 Kỹ năng Casio',
    source: 'Chuyên Đề Toán V-ACT',
    title: '5 Tính năng thần thánh trên Casio 580VNX cứu nguy môn Toán',
    author: 'Chuyên gia Casio Vted',
    tags: ['Menu 8 Table', 'Shift Solve', 'Vector Oxyz', 'Hệ 4 ẩn'],
    content: `
1. **Khảo sát hàm số bằng Menu 8 (Table)**: Tìm giá trị lớn nhất, nhỏ nhất, số nghiệm của phương trình $f(x) = 0$ bằng cách quan sát sự đổi dấu của $f(x)$. Thiết lập Step = (End - Start) / 29 để quét mịn toàn bộ miền xác định.
2. **Shift Solve với Start Value thông minh**: Thay vì để $x = 0$ mặc định, hãy gán $x$ bằng giá trị gần với các đáp án A, B, C, D để máy hội tụ nghiệm cực nhanh trong 1 giây.
3. **Chức năng Vector trong Oxyz (Menu 5)**: Bấm tích có hướng của 2 vectơ $\\vec{u} \\times \\vec{v}$ chỉ bằng Menu 5 để tìm vectơ pháp tuyến mặt phẳng mà không lo nhầm dấu tọa độ.
4. **Giải hệ 4 phương trình 4 ẩn (Menu 9-1-4)**: Cứu cánh đắc lực cho các bài toán cân bằng phản ứng oxi hóa khử phức tạp và bài toán mạch điện phân nhánh.
5. **Tính nhanh đạo hàm tại một điểm (SHIFT $\\frac{d}{dx}$)**: Kiểm tra hệ số góc tiếp tuyến hoặc tính nhanh tốc độ biến thiên $s'(t) = v(t)$.
    `
  },
  {
    id: 'tip-elimination',
    category: '🎯 Loại trừ & Khoanh bừa',
    source: 'Ban Cố Vấn Chuyên Môn V-ACT Hub',
    title: 'Nghệ thuật loại trừ đáp án nhiễu & Khoanh bừa khoa học chuẩn IRT',
    author: 'Hội đồng Khảo thí V-ACT',
    tags: ['Loại trừ cực đoan', 'Tương phản', 'Cân bằng xác suất'],
    content: `
Khi gặp một câu hỏi hoàn toàn bí hoặc không đủ thời gian giải chi tiết:
1. **Loại trừ các phương án mang tính cực đoan tuyệt đối**: Các đáp án chứa từ "luôn luôn", "tất cả", "chắc chắn 100%", "hoàn toàn không bao giờ" thường là đáp án nhiễu. Các phương án chứa từ ngữ mang tính tương đối như "thường", "có thể", "phần lớn", "trong điều kiện tiêu chuẩn" có xác suất đúng cao hơn 80%.
2. **Quy tắc cặp đáp án tương đồng hoặc đối lập 180 độ**: Nếu 2 đáp án mang nội dung trái ngược nhau hoàn toàn, hoặc chỉ khác nhau một dấu cộng/trừ hay một hệ số $\\pi$, 90% đáp án đúng sẽ là một trong hai đáp án đó. Lập tức loại 2 phương án còn lại để nâng cơ hội đoán trúng lên 50%.
3. **Thống kê phân bổ đáp án trên phiếu**: Trước khi khoanh những câu chưa làm ở 3 phút cuối, đếm nhanh xem trên phiếu A, B, C, D đáp án nào đang xuất hiện ít nhất, hãy chọn đồng loạt một chữ cái đó cho toàn bộ các câu còn lại để tối đa hóa kỳ vọng toán học.
    `
  },
  {
    id: 'tip-data-analysis',
    category: '📊 Phân tích số liệu',
    source: 'Ban Số Liệu V-ACT',
    title: 'Tuyệt chiêu xử lý Biểu đồ & Bảng số liệu mà không cần bấm máy tính cồng kềnh',
    author: 'Chuyên Gia Số Liệu V-ACT',
    tags: ['Tốc độ tăng trưởng', 'Ước lượng tỷ lệ', 'Làm tròn số'],
    content: `
1. **Kỹ thuật làm tròn số có kiểm soát**: Thay vì chia số lẻ như $1.458.230 / 3.921.400$, hãy làm tròn thành $1.46 / 3.92 \\approx 1.5 / 4.0 = 37.5\\%$. Đối chiếu với 4 đáp án có khoảng cách xa nhau, bạn sẽ chọn ngay đáp án đúng trong 5 giây.
2. **Phân biệt rạch ròi Tốc độ tăng trưởng (%) và Mức tăng tuyệt đối (Đơn vị thực tế)**:
   - "Tăng bao nhiêu phần trăm": $\\frac{\\text{Năm sau} - \\text{Năm trước}}{\\text{Năm trước}} \\times 100\\%$.
   - "Tăng bao nhiêu tỷ đồng/tấn": $\\text{Năm sau} - \\text{Năm trước}$.
   Đề thi V-ACT thường cài bẫy gài thí sinh lấy mức tăng tuyệt đối đi kết luận cho câu hỏi về tốc độ tăng trưởng!
3. **Nhìn trực tiếp độ dốc đường đồ thị**: Với biểu đồ đường, đoạn nào có độ dốc đứng nhất chính là giai đoạn có tốc độ tăng trưởng nhanh nhất, không cần tính toán từng năm.
    `
  },
  {
    id: 'tip-science-passage',
    category: '🔬 Suy luận Khoa học',
    source: 'CPEN - Ban Khoa Học Tự Nhiên',
    title: 'Nguyên tắc vàng: Toàn bộ đáp án nằm trọn trong Ngữ liệu đề bài',
    author: 'CPEN Science Team',
    tags: ['Đọc hiểu văn bản khoa học', 'Biến độc lập', 'Đối chứng'],
    content: `
1. **Đừng cố gắng dùng kiến thức học vẹt nâng cao**: Phần Tư duy khoa học V-ACT kiểm tra năng lực ĐỌC HIỂU và SUY LUẬN TÌNH HUỐNG. Người ra đề luôn cung cấp đầy đủ định nghĩa, công thức hoặc bảng số liệu thí nghiệm trong phần [NGỮ LIỆU CHUNG].
2. **Xác định ngay 3 yếu tố của thí nghiệm**:
   - Biến độc lập (Yếu tố nhà khoa học chủ động thay đổi: nhiệt độ, nồng độ, thời gian chiếu sáng).
   - Biến phụ thuộc (Kết quả đo lường: lượng khí thoát ra, tốc độ sinh trưởng).
   - Mẫu đối chứng (Mẫu không có tác động thí nghiệm để làm mốc so sánh).
3. **Quy tắc đối chiếu câu chữ**: Câu hỏi hỏi "Theo kết quả thí nghiệm..." thì chỉ chọn đáp án được hỗ trợ bởi số liệu trong bài, không tự ý suy diễn vượt quá dữ kiện được cung cấp.
    `
  }
];

// Danh sách Video bài giảng và Livestream giải đề V-ACT
export const RECOMMENDED_VIDEOS = [
  {
    id: 'v-vnno1-01',
    title: 'Giải chi tiết Đề thi thử V-ACT 2026/2027 Lần 1 (Full 120 câu chuẩn IRT)',
    channel: 'V-ACT Master',
    duration: '1:45:20',
    category: 'vnno1',
    videoUrl: 'https://www.youtube.com/results?search_query=vnno1+%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c+gi%E1%BA%A3i+%C4%91%E1%BB%81',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60',
    description: 'Video livestream chữa chi tiết từng câu trong Đề thi thử V-ACT Master lần 1, phân tích bẫy và kỹ năng quản lý thời gian.'
  },
  {
    id: 'v-vnno1-02',
    title: 'Tuyệt chiêu giải quyết 12 câu Tư duy Logic & Phân tích số liệu',
    channel: 'V-ACT Master',
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
    description: 'Chiến thuật giải quyết nhanh các câu ngữ pháp, biện pháp tu từ và kỹ năng đọc lướt tìm từ khóa trong ngữ liệu dài.'
  },
  {
    id: 'v-vnno1-03',
    title: 'Mẹo bấm máy tính Casio 580VNX xử lý bài toán thực tế & Xác suất',
    channel: 'V-ACT Master',
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
      'Làm bài test chẩn đoán ban đầu (Đề minh họa 2025 hoặc Đề V-ACT Master Lần 1).',
      'Nắm vững ma trận đề thi V-ACT (Ngôn ngữ 60 câu, Toán 30 câu, Tư duy KH 30 câu).',
      'Cài đặt thời gian biểu học tập mỗi ngày 1.5 - 2 tiếng.'
    ]
  },
  {
    stage: 'Chặng 2',
    title: 'Quét sạch Chuyên đề & Rèn Kỹ năng cốt lõi (V-ACT Master)',
    time: 'Tuần 3 - 6',
    goal: 'Không để mất điểm ở các câu hỏi mức độ Nhận biết và Thông hiểu.',
    tasks: [
      'Học cẩm nang 45 dạng bẫy Tiếng Việt của CPEN và ngữ pháp Tiếng Anh trọng tâm.',
      'Luyện kỹ thuật lập bảng ma trận đối ứng 2 chiều chuẩn V-ACT cho các câu hỏi Logic.',
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
      'Mỗi tuần giải từ 2 - 3 đề trong Tuyển tập 25 đề chuẩn hóa V-ACT.',
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
