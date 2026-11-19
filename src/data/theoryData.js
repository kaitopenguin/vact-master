// Sổ tay lý thuyết & phương pháp giải chi tiết V-ACT (ĐHQG TP.HCM)
// Thiết kế theo cấu trúc sách đọc chuyên sâu, bám sát GDPT 2018

export const THEORY_CATEGORIES = [
  { id: 'all', name: 'Toàn bộ mục lục sách' },
  { id: 'vietnamese', name: 'Chương 1: Tiếng Việt (300đ)' },
  { id: 'english', name: 'Chương 2: Tiếng Anh (300đ)' },
  { id: 'math', name: 'Chương 3: Toán học & Casio (300đ)' },
  { id: 'logic', name: 'Chương 4: Tư duy Logic (12 câu)' },
  { id: 'data', name: 'Chương 5: Phân tích Số liệu' },
  { id: 'science', name: 'Chương 6: Suy luận Khoa học (18 câu)' },
  { id: 'strategy', name: 'Chương 7: Chiến thuật 1000+' },
];

export const THEORY_ARTICLES = [
  {
    id: 'tv-01',
    chapter: 'Chương 1',
    category: 'vietnamese',
    title: '1.1. Sổ Tay 6 Phong Cách Chức Năng Ngôn Ngữ & Cách Nhận Diện Trong 10 Giây',
    readTime: '8 phút',
    summary: 'Phân biệt chính xác 6 phong cách ngôn ngữ: Sinh hoạt, Nghệ thuật, Báo chí, Chính luận, Khoa học, Hành chính - công vụ.',
    sections: [
      {
        heading: 'Bảng Ma Trận Nhận Diện 6 Phong Cách Ngôn Ngữ',
        type: 'table',
        headers: ['Phong cách', 'Đặc trưng cốt lõi', 'Từ khóa nhận diện', 'Dấu hiệu loại trừ'],
        rows: [
          ['Sinh hoạt', 'Khẩu ngữ, cảm xúc tự nhiên, giàu tiếng lóng', 'Ơi, dạ, mày, tao, tiếng than, đối thoại', 'Không có tính quy chuẩn hay thuật ngữ'],
          ['Nghệ thuật', 'Hình tượng, thẩm mỹ, đa nghĩa, gợi cảm xúc', 'Thơ, truyện, hình ảnh so sánh, nhân hóa', 'Không chứa các điều khoản pháp lý'],
          ['Báo chí', 'Tính thời sự, thông tin nhanh, xác thực ngày giờ', 'Theo bản tin ngày..., phóng viên ghi nhận', 'Không dùng ngôn ngữ cảm tính chủ quan'],
          ['Chính luận', 'Lập luận chặt chẽ, thuyết phục tư tưởng chính trị', 'Tuyên ngôn, công lý, nhân quyền, độc lập', 'Không phải văn bản hành chính nhà nước'],
          ['Khoa học', 'Tính trừu tượng, logic, thuật ngữ chuyên ngành', 'Định lý, thí nghiệm, phân tử, đồ thị, tế bào', 'Tuyệt đối không có cảm xúc trữ tình'],
          ['Hành chính', 'Tính khuôn mẫu, pháp lý, mệnh lệnh nhà nước', 'Cộng hòa xã hội..., Quyết định số, Căn cứ...', 'Không được dùng từ ngữ bóng bẩy']
        ]
      },
      {
        heading: 'Mẹo Thủ Khoa: Phân Biệt Phong Cách Chính Luận và Báo Chí',
        type: 'callout',
        variant: 'tip',
        text: 'Nhiều thí sinh hay nhầm Chính luận và Báo chí. Hãy nhớ: Báo chí phục vụ mục đích THÔNG TIN (Ai làm gì, ở đâu, lúc nào). Chính luận phục vụ mục đích TƯ TƯỞNG & QUAN ĐIỂM (Kêu gọi, thuyết phục người đọc tin theo một lập trường chính trị - xã hội).'
      },
      {
        heading: 'Ví Dụ Trích Đoạn Đề Thi V-ACT Thật',
        type: 'example',
        text: 'Đoạn văn: "Ngày 15/4 vừa qua, tại TP.HCM, hội thảo khoa học về trí tuệ nhân tạo đã diễn ra với sự tham gia của 200 chuyên gia..."\n→ Đây là Phong cách BÁO CHÍ (Có mốc thời gian, địa điểm, con số sự kiện xác thực).'
      }
    ]
  },
  {
    id: 'tv-02',
    chapter: 'Chương 1',
    category: 'vietnamese',
    title: '1.2. Cẩm Nang 45 Cặp Từ Dễ Nhầm Lẫn & Các Dạng Bẫy Lỗi Câu V-ACT',
    readTime: '12 phút',
    summary: 'Hệ thống các cặp từ Hán Việt thường dùng sai nghĩa và các kiểu lỗi câu sai ngữ pháp chiếm 10-15 câu trong đề thi.',
    sections: [
      {
        heading: 'Danh Mục Các Cặp Từ Hán Việt Dễ Nhầm Nghĩa Nhất',
        type: 'table',
        headers: ['Từ ngữ', 'Nghĩa chính xác', 'Lỗi sai phổ biến cần tránh'],
        rows: [
          ['Cứu cánh', 'Mục đích cuối cùng cao nhất', 'Nhầm thành "cứu giúp / giải pháp cứu nguy"'],
          ['Yếu điểm', 'Điểm quan trọng mấu chốt nhất', 'Nhầm thành "nhược điểm / điểm yếu"'],
          ['Sáp nhập', 'Gộp nhiều đơn vị thành một', 'Viết sai chính tả thành "Sát nhập"'],
          ['Tham quan', 'Đi tận nơi để xem và học hỏi', 'Viết sai chính tả thành "Thăm quan"'],
          ['Vô hình trung', 'Vô tình làm nên một hệ quả', 'Nhầm thành "Vô hình chung"'],
          ['Đề huề', 'Đông vui, sum vầy hòa thuận', 'Dùng sai nghĩa thành "nhiều đồ đạc"'],
          ['Khuyết điểm', 'Chỗ sai sót, thiếu sót', 'Đúng nghĩa với điểm yếu (không dùng yếu điểm)']
        ]
      },
      {
        heading: '4 Dạng Lỗi Câu Ngữ Pháp Chắc Chắn Có Trong Đề Thi',
        type: 'callout',
        variant: 'warning',
        text: '1. Câu thiếu Chủ ngữ (Chỉ có Trạng ngữ và Vị ngữ): "Qua tác phẩm cho ta thấy..." (Sai vì "cho ta thấy" thiếu chủ ngữ; sửa lại: "Qua tác phẩm, tác giả cho ta thấy...").\n2. Câu sai Logic ngữ nghĩa: "Anh ấy vừa bị gãy chân vừa đi bộ đến trường."\n3. Câu dùng từ sai kết hợp: "Lòng tin sâu sắc" (Sai kết hợp từ; phải là "Niềm tin sâu sắc" hoặc "Lòng tin vững chắc").\n4. Câu mơ hồ về nghĩa: "Tôi nhìn thấy cô ấy chụp ảnh bằng máy ảnh mới." (Không rõ tôi chụp hay cô ấy chụp).'
      }
    ]
  },
  {
    id: 'ta-01',
    chapter: 'Chương 2',
    category: 'english',
    title: '2.1. 5 Chủ Điểm Ngữ Pháp Tiếng Anh Chiếm 80% Đề Thi V-ACT',
    readTime: '10 phút',
    summary: 'Nắm vững Hòa hợp Chủ - Vị, Mệnh đề quan hệ rút gọn, Câu điều kiện đảo ngữ và Cụm động từ/Giới từ trọng tâm.',
    sections: [
      {
        heading: '1. Hòa Hợp Chủ Ngữ và Động Từ (Subject-Verb Agreement)',
        type: 'text',
        content: 'Các quy tắc bẫy thường gặp:\n• A together with B / A along with B / A as well as B: Động từ chia theo A (chủ ngữ đầu tiên).\n• Either A or B / Neither A nor B / Not only A but also B: Động từ chia theo B (chủ ngữ gần nhất).\n• The number of + N (số nhiều) → Động từ chia số ÍT.\n• A number of + N (số nhiều) → Động từ chia số NHIỀU.'
      },
      {
        heading: '2. Kỹ Thuật Rút Gọn Mệnh Đề Quan Hệ (Reduced Relative Clauses)',
        type: 'table',
        headers: ['Trường hợp', 'Công thức chuyển đổi', 'Ví dụ thực chiến'],
        rows: [
          ['Chủ động (Active)', 'Bỏ who/which, V → V-ing', 'The man who lives next door → The man living next door'],
          ['Bị động (Passive)', 'Bỏ who/which + be, V → V3/ed', 'The book which was written by Nam → The book written by Nam'],
          ['Số thứ tự / The only / The first', 'Dùng to + V-inf', 'He is the first person who arrived → He is the first person to arrive']
        ]
      },
      {
        heading: '3. Công Thức Đảo Ngữ Cực Hay Gặp',
        type: 'callout',
        variant: 'formula',
        text: '• Not only + Trợ động từ + S + V, but S also + V...\n• Hardly / Scarcely + had + S + V3/ed + when + S + V-ed\n• No sooner + had + S + V3/ed + than + S + V-ed\n• Only by / Only when + Trợ động từ + S + V'
      }
    ]
  },
  {
    id: 'toan-01',
    chapter: 'Chương 3',
    category: 'math',
    title: '3.1. Phương Pháp Giải Bài Toán Thực Tế & Quy Hoạch Tuyến Tính',
    readTime: '11 phút',
    summary: 'Chiến thuật thiết lập hàm mục tiêu, dựng đa giác nghiệm và tìm giá trị lớn nhất/nhỏ nhất tại đỉnh trong đề thi V-ACT.',
    sections: [
      {
        heading: 'Nguyên Lý Vàng Về Miền Đa Giác Nghiệm',
        type: 'text',
        content: 'Bài toán quy hoạch tuyến tính thực tế (như chi phí sản xuất, năng suất lao động, lượng phân bón):\nCho hàm mục tiêu F(x, y) = ax + by.\nMiền nghiệm của hệ bất phương trình là một miền đa giác lồi A1A2...An.\n👉 ĐỊNH LÝ: Giá trị lớn nhất (hoặc nhỏ nhất) của hàm F(x, y) LUÔN LUÔN đạt được tại một trong các đỉnh Ai của miền đa giác nghiệm!'
      },
      {
        heading: 'Quy Trình 3 Bước Xử Lý Nhanh Trên Giấy Nháp',
        type: 'callout',
        variant: 'tip',
        text: '• Bước 1: Gọi ẩn x, y và lập hệ bất phương trình ràng buộc.\n• Bước 2: Tìm tọa độ giao điểm của các đường thẳng biên (các đỉnh của đa giác).\n• Bước 3: Thay trực tiếp tọa độ các đỉnh vào hàm F(x, y), giá trị nào lớn nhất chính là đáp án cần chọn! Tuyệt đối không cần vẽ hình quá cầu kỳ tốn thời gian.'
      },
      {
        heading: 'Bấm Máy Casio 580VNX: Giải Nhanh Bất Phương Trình & Bảng Bổ Trợ',
        type: 'table',
        headers: ['Chức năng', 'Thao tác Casio 580VNX', 'Ứng dụng trong bài thi'],
        rows: [
          ['Quét hàm số Table', 'MENU 8 → Nhập f(x) → Start/End/Step', 'Tìm Max/Min của bài toán thực tế trong 15s'],
          ['Giải hệ 3 ẩn', 'MENU 9 → 1 → 3', 'Tìm hệ số parabol hoặc tọa độ không gian'],
          ['Xác suất tổ hợp', 'SHIFT [÷] (nCr) hoặc SHIFT [x] (nPr)', 'Tính số cách chọn và biến cố xác suất']
        ]
      }
    ]
  },
  {
    id: 'logic-01',
    chapter: 'Chương 4',
    category: 'logic',
    title: '4.1. Tuyệt Kỹ Kẻ Bảng Ma Trận 2 Chiều Phá Đảo 12 Câu Logic (VnNO1 & CPEN)',
    readTime: '15 phút',
    summary: 'Phương pháp loại trừ biến độc lập, phân nhánh giả thiết và xử lý bài toán sắp xếp chỗ ngồi, phân công công việc.',
    sections: [
      {
        heading: '1. Cấu Trúc Bảng Ma Trận Đối Ứng (Elimination Grid)',
        type: 'text',
        content: 'Khi gặp đề bài cho 5-7 người (A, B, C, D, E, F) với các thuộc tính (Thứ tự phòng thi, Màu áo, Quê quán, Ngành học):\n• Não người không thể nhớ quá 4 điều kiện ràng buộc cùng lúc.\n• Giải pháp tối ưu: Vẽ ngay bảng lưới 2 chiều trên giấy nháp.\n  - Cột dọc: Biến cố định (Vị trí 1, 2, 3, 4, 5... hoặc Bàn tròn 1 đến 8).\n  - Hàng ngang: Các đối tượng cần xếp.\n• Đánh dấu dấu cộng (+) cho vị trí đúng, ngay lập tức gạch dấu trừ (-) cho toàn bộ hàng và cột của vị trí đó.'
      },
      {
        heading: '2. Nguyên Lý Mệnh Đề Kéo Theo & Phản Đảo (P ⟹ Q)',
        type: 'callout',
        variant: 'formula',
        text: '• Đề bài cho: "Nếu Lan đi học thì Nam cũng đi học" (P ⟹ Q).\n• Mệnh đề phản đảo LUÔN ĐÚNG: "Nếu Nam không đi học thì chắc chắn Lan không đi học" (không Q ⟹ không P).\n• Chú ý bẫy: Đề bài KHÔNG ĐỒNG NGHĨA với "Nếu Lan không đi thì Nam không đi" (Sai lầm phổ biến!).'
      },
      {
        heading: '3. Bài Toán Bàn Tròn 8 Ghế (Dạng Đề Thi V-ACT Mới 2025/2026)',
        type: 'example',
        text: 'Quy tắc đối diện bàn tròn chẵn (8 ghế):\n• Vị trí đối diện của ghế k là (k + 4) mod 8.\n• Ví dụ: Ghế 1 đối diện ghế 5, ghế 2 đối diện ghế 6, ghế 3 đối diện ghế 7, ghế 4 đối diện ghế 8.\n• Nếu đề bài cho "C và D luôn đối diện nhau", ta khóa ngay 1 cặp đối diện (1,5), (2,6), (3,7) hoặc (4,8) để thu hẹp không gian tìm kiếm!'
      }
    ]
  },
  {
    id: 'data-01',
    chapter: 'Chương 5',
    category: 'data',
    title: '5.1. Công Thức Phân Tích Số Liệu, Tốc Độ Tăng Trưởng & Đọc Biểu Đồ',
    readTime: '10 phút',
    summary: 'Công thức tăng trưởng định gốc vs liên hoàn, tính tỷ trọng cơ cấu và 5 bẫy đọc trục tung/trục hoành thường gặp.',
    sections: [
      {
        heading: 'Bộ 3 Công Thức Vàng Trong Phân Tích Biểu Đồ',
        type: 'table',
        headers: ['Chỉ tiêu', 'Công thức toán học', 'Ý nghĩa phân tích'],
        rows: [
          ['Tăng trưởng liên hoàn', '[(Năm sau - Năm trước) / Năm trước] × 100%', 'Tốc độ tăng so với năm liền kề trước đó'],
          ['Tăng trưởng định gốc', '[(Năm t - Năm gốc) / Năm gốc] × 100%', 'Tốc độ tăng so với năm khởi điểm'],
          ['Tỷ trọng cơ cấu (%)', '(Giá trị thành phần / Tổng số) × 100%', 'Xác định thành phần chiếm bao nhiêu % cơ cấu']
        ]
      },
      {
        heading: 'Cảnh Báo 3 Bẫy Nguy Hiểm Trên Biểu Đồ V-ACT',
        type: 'callout',
        variant: 'warning',
        text: '1. Bẫy trục tung không bắt đầu từ số 0: Khi trục tung bắt đầu từ 50, đồ thị trông dốc đứng như tăng gấp 10 lần nhưng thực tế chỉ tăng 5%!\n2. Bẫy hai trục tung khác đơn vị (Biểu đồ kết hợp Cột & Đường): Cột đo Sản lượng (triệu tấn - trục trái), Đường đo Tốc độ tăng trưởng (% - trục phải). Nhìn nhầm trục sẽ tính sai hoàn toàn!\n3. Bẫy số tuyệt đối vs số tương đối: Tỷ trọng (%) giảm không có nghĩa là giá trị tuyệt đối giảm (do tổng thể tăng trưởng mạnh hơn).'
      }
    ]
  },
  {
    id: 'science-01',
    chapter: 'Chương 6',
    category: 'science',
    title: '6.1. Phương Pháp Suy Luận Khoa Học Tình Huống: Lý, Hóa, Sinh, Sử, Địa, GDKT&PL',
    readTime: '14 phút',
    summary: 'Chiến thuật đọc văn bản thí nghiệm, phân tích biểu đồ biến động và nguyên tắc suy luận 100% dựa trên dữ kiện đề bài.',
    sections: [
      {
        heading: 'Bản Chất Đổi Mới Của Phân Môn Tư Duy Khoa Học GDPT 2018',
        type: 'text',
        content: 'Khác với kỳ thi tốt nghiệp THPT kiểm tra kiến thức ghi nhớ công thức, đề thi V-ACT ĐHQG-HCM kiểm tra NĂNG LỰC ĐỌC HIỂU DỮ KIỆN KHOA HỌC.\n👉 Toàn bộ giả thiết, phương trình phản ứng mới, đồ thị đo đạc và hiện tượng đều được CUNG CẤP TRỌN VẸN trong phần [NGỮ LIỆU / ĐỀ BÀI CHUNG] ở đầu câu hỏi.\nNhiệm vụ của thí sinh là đóng vai một nhà khoa học: quan sát dữ liệu, phân tích biến số (biến độc lập, biến phụ thuộc, nhóm đối chứng) và rút ra kết luận logic.'
      },
      {
        heading: '3 Bước Phân Tích Quy Trình Thí Nghiệm & Sơ Đồ Hóa Học/Sinh Học',
        type: 'callout',
        variant: 'tip',
        text: '• Bước 1: Xác định mục tiêu của quy trình (Ví dụ: Thu hồi đồng Cu từ rác thải điện tử, hay tách chiết hoạt chất Bacopa).\n• Bước 2: Chia quy trình thành các giai đoạn tuần tự (Giai đoạn 1: Hòa tan → Giai đoạn 2: Lọc kết tủa → Giai đoạn 3: Điện phân/Kết tinh).\n• Bước 3: So sánh nhóm đối chứng (Control group) và nhóm thí nghiệm (Experimental group) để xác định yếu tố tạo nên sự khác biệt.'
      }
    ]
  },
  {
    id: 'strategy-01',
    chapter: 'Chương 7',
    category: 'strategy',
    title: '7.1. Chiến Lược Quản Lý Thời Gian Vàng 40 - 40 - 50 - 20 Từ Thủ Khoa 1000+',
    readTime: '10 phút',
    summary: 'Lộ trình phân bổ 150 phút cho 120 câu hỏi: Giữ nhịp sinh học, khoanh bừa có xác suất và kiểm soát áp lực phòng thi.',
    sections: [
      {
        heading: 'Bảng Kế Hoạch 150 Phút Tối Ưu Từng Giây',
        type: 'table',
        headers: ['Khung giờ', 'Thời lượng', 'Mục tiêu số câu', 'Chiến thuật hành động'],
        rows: [
          ['Phút 0 - 40', '40 phút', 'Câu 1 - 60 (Ngôn ngữ)', 'Đọc nhanh, quyết đoán, câu nào phân vân đánh dấu cờ'],
          ['Phút 40 - 80', '40 phút', 'Câu 61 - 90 (Toán học)', 'Ưu tiên câu dễ, tận dụng Casio quét bảng Table'],
          ['Phút 80 - 130', '50 phút', 'Câu 91 - 120 (Tư duy KH)', 'Dành 20p cho 12 câu Logic, 30p cho 18 câu Suy luận KH'],
          ['Phút 130 - 150', '20 phút', 'Rà soát & Tô kín phiếu', 'Kiểm tra lệch dòng, áp dụng quy tắc loại trừ khoanh hết']
        ]
      },
      {
        heading: 'Quy Tắc Sống Còn: Tuyệt Đối Không Bỏ Trống Phiếu Trắc Nghiệm',
        type: 'callout',
        variant: 'warning',
        text: 'V-ACT chấm điểm theo mô hình IRT và KHÔNG TRỪ ĐIỂM câu sai. Do đó, vào 5 phút cuối cùng, nếu còn 5-10 câu chưa giải được, hãy loại trừ các phương án phi lý nhất rồi chọn đồng nhất 1 phương án có xác suất cao nhất. Mỗi câu trắc nghiệm đúng đem lại từ 8 - 15 điểm quý giá!'
      }
    ]
  }
];
