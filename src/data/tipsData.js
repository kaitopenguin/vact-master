// Tổng hợp Bí kíp & Chiến thuật thi từ các Thủ khoa ĐGNL (Điểm 1000+)
export const EXAM_TIPS = [
  {
    id: 'tip-1',
    category: 'Quản lý thời gian',
    title: 'Chiến thuật thời gian 40-40-50-20 trong 150 phút thi',
    author: 'Thủ khoa ĐGNL ĐHQG-HCM 1080/1200',
    content: `
Trong phòng thi ĐGNL, áp lực thời gian là kẻ thù lớn nhất (120 câu / 150 phút = 1 phút 15 giây/câu). Chiến thuật chia chặng vàng:
1. **0 - 40 phút đầu: Giải quyết trọn vẹn Tiếng Việt + Tiếng Anh (60 câu)**
   - Phần ngôn ngữ đọc hiểu không cần tính toán phức tạp. Đọc nhanh, gạch từ khóa, chọn ngay đáp án chắc chắn. Đánh dấu câu phân vân để dò sau.
2. **40 - 80 phút tiếp theo: Xử lý Tư duy Logic & Phân tích số liệu + Khoa học lý thuyết**
   - Các câu hỏi biểu đồ và logic dạng bài quen thuộc, áp dụng phương pháp lập bảng ma trận.
3. **80 - 130 phút: Dành trọn tâm trí cho Toán học & các bài Suy luận sâu**
   - Đòi hỏi đặt bút nháp và bấm máy Casio. Làm từ câu cơ bản đến câu nâng cao.
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
    author: 'Kênh Ôn thi ĐGNL Vted',
    content: `
1. **Khảo sát hàm số bằng Menu 8 (Table)**: Tìm giá trị lớn nhất, nhỏ nhất, số nghiệm của phương trình $f(x) = 0$ bằng cách quan sát sự đổi dấu của $f(x)$.
2. **Shift Solve với Start Value thông minh**: Thay vì để $x = 0$, hãy gán $x$ bằng giá trị gần với các đáp án A, B, C, D để máy hội tụ nghiệm nhanh chóng.
3. **Chức năng Vector trong Oxyz**: Bấm tích có hướng của 2 vectơ chỉ bằng Menu 5 để tìm vectơ pháp tuyến mặt phẳng trong 5 giây.
4. **Tính xác suất với nCr / nPr**: Bấm tổ hợp, chỉnh hợp, xác suất siêu tốc.
    `
  },
  {
    id: 'tip-4',
    category: 'Tâm lý phòng thi',
    title: 'Chuẩn bị trước 24h & Bí quyết giữ bình tĩnh trong phòng thi',
    author: 'Cộng đồng Thủ khoa ĐGNL',
    content: `
- Đêm trước ngày thi: Đi ngủ trước 22h30, không nên thức khuya cày đề vì sẽ làm não bộ phản xạ chậm trong 150 phút căng thẳng sáng hôm sau.
- Vật dụng bắt buộc: CCCD/Hộ chiếu, Giấy báo dự thi, 3 bút chì 2B (gọt sẵn, chuốt đầu vừa phải để tô nhanh), 1 cục tẩy chất lượng cao (gôm sạch không lem), 2 máy tính Casio được phép mang vào phòng thi, đồng hồ đeo tay cơ (không dùng smartwatch điện tử).
- Chiến thuật tô phiếu: Tô trực tiếp sau khi hoàn thành từng trang (5-10 câu), không nên đợi đến cuối giờ mới tô hàng loạt vì rất dễ tô lệch dòng!
    `
  }
];

// Danh sách Video bài giảng và Livestream giải đề uy tín trên Youtube
export const RECOMMENDED_VIDEOS = [
  {
    id: 'v-01',
    title: 'Phương pháp giải nhanh Tư duy Logic ĐGNL ĐHQG TP.HCM',
    channel: 'Thầy Quốc Duy - ĐGNL Master',
    duration: '45:20',
    category: 'logic',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder/embed reference
    videoUrl: 'https://www.youtube.com/results?search_query=%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c+%C4%91hqg+tphcm+t%C6%B0+duy+logic',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60',
    description: 'Chuyên đề quét sạch dạng bài logic sắp xếp thứ tự, ma trận bài toán và mẹo loại trừ đáp án siêu tốc.'
  },
  {
    id: 'v-02',
    title: 'Bí kíp trọn vẹn điểm phần Phân tích Số liệu & Biểu đồ',
    channel: 'Tôi Tự Học - Luyện thi ĐGNL',
    duration: '38:15',
    category: 'data',
    youtubeId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/results?search_query=%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c+ph%C3%A2n+t%C3%ADch+s%E1%BB%91+li%E1%BB%87u',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60',
    description: 'Hướng dẫn đọc biểu đồ cột kép, biểu đồ miền, biểu đồ tròn và các công thức tăng trưởng then chốt.'
  },
  {
    id: 'v-03',
    title: 'Tổng ôn Tiếng Việt ĐGNL V-ACT - Không lo mất điểm oan',
    channel: 'Hocmai.vn ĐGNL',
    duration: '52:10',
    category: 'vietnamese',
    youtubeId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/results?search_query=%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c+ti%E1%BA%BFng+vi%E1%BB%87t',
    thumbnail: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60',
    description: 'Chữa các câu hỏi bẫy từ Hán Việt, lỗi sai ngữ pháp câu, phong cách văn bản và đọc hiểu.'
  },
  {
    id: 'v-04',
    title: 'Chiến thuật Casio 580VNX & Giải toán thực tế ĐGNL',
    channel: 'Thầy Đặng Thành Nam (Vted)',
    duration: '60:00',
    category: 'math',
    youtubeId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/results?search_query=%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c+to%C3%A1n+th%E1%BA%A7y+%C4%91%E1%BA%B7ng+th%C3%A0nh+nam',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=60',
    description: 'Các dạng bài toán tối ưu thực tế, lãi kép ngân hàng, xác suất và phương pháp bấm máy Casio tốc độ.'
  },
  {
    id: 'v-05',
    title: 'Giải chi tiết Đề thi ĐGNL ĐHQG TP.HCM Đợt 1',
    channel: 'BTEC FPT & Marathon Education',
    duration: '1:15:30',
    category: 'all',
    youtubeId: 'dQw4w9WgXcQ',
    videoUrl: 'https://www.youtube.com/results?search_query=gi%E1%BA%A3i+%C4%91%E1%BB%81+%C4%91%C3%A1nh+gi%C3%A1+n%C4%83ng+l%E1%BB%B1c+%C4%91hqg+tphcm',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=60',
    description: 'Livestream phân tích ma trận đề thi thực tế, phân loại câu hỏi dễ kiếm điểm và câu hỏi phân loại 900+.'
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
      'Làm bài test chẩn đoán ban đầu để xác định điểm mạnh / điểm yếu.',
      'Nắm vững ma trận đề thi V-ACT (Ngôn ngữ 60 câu, Toán 30 câu, Tư duy KH 30 câu).',
      'Cài đặt thời gian biểu học tập mỗi ngày 1.5 - 2 tiếng.'
    ]
  },
  {
    stage: 'Chặng 2',
    title: 'Quét sạch Chuyên đề & Rèn Kỹ năng cốt lõi',
    time: 'Tuần 3 - 6',
    goal: 'Không để mất điểm ở các câu hỏi mức độ Nhận biết và Thông hiểu.',
    tasks: [
      'Ôn tập từ Hán Việt, lỗi sai câu tiếng Việt và ngữ pháp Tiếng Anh trọng tâm.',
      'Luyện kỹ thuật lập bảng ma trận cho các câu hỏi Logic suy luận.',
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
      'Mỗi tuần giải từ 2 - 3 đề thi chuẩn 120 câu có bấm giờ nghiêm túc 150 phút.',
      'Ghi chép toàn bộ câu sai vào "Sổ tay lỗi sai" (Mistake Book).',
      'Rèn kỹ năng tô phiếu trắc nghiệm không bị lệch dòng.'
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
