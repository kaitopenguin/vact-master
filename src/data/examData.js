// Ngân hàng đề thi và câu hỏi chuẩn hóa V-ACT (ĐHQG TP.HCM)
// Cấu trúc chuẩn áp dụng theo Chương trình GDPT 2018:
// - Tổng cộng: 120 câu hỏi trắc nghiệm khách quan, thời gian 150 phút, thang điểm tối đa 1.200 điểm
// - Chấm theo mô hình IRT, 4 hợp phần x 300 điểm = 1.200 điểm:
//   + Hợp phần 1: Tiếng Việt (30 câu - 300 điểm)
//   + Hợp phần 2: Tiếng Anh (30 câu - 300 điểm)
//   + Hợp phần 3: Toán học (30 câu - 300 điểm)
//   + Hợp phần 4: Tư duy khoa học (30 câu - 300 điểm: 12 câu Logic & Phân tích số liệu + 18 câu Suy luận KH gồm Lý, Hóa, Sinh, Sử, Địa, GDKT&PL)

export const EXAM_LIST = [
  {
    id: 'vact-mock-2025',
    title: 'Đề thi thử V-ACT 2025/2026 (Chuẩn GDPT 2018 - 1200 điểm)',
    year: '2025 - 2026',
    type: 'Chuẩn GDPT 2018',
    durationMinutes: 150,
    totalQuestions: 120, // Chuẩn 120 câu
    description: 'Bám sát 100% cấu trúc chính thức ĐHQG-HCM: 3 Phần thi, 4 hợp phần (mỗi hợp phần 300 điểm, tổng 1.200 điểm theo mô hình IRT).',
    parts: [
      {
        partId: 'part1',
        partName: 'Phần 1: Sử dụng ngôn ngữ (60 câu – 600 điểm)',
        subsections: [
          { id: 'vietnamese', name: 'Tiếng Việt', count: 30, maxScore: 300, desc: 'Đọc hiểu, phân tích lập luận, cấu trúc văn bản và sử dụng ngôn ngữ' },
          { id: 'english', name: 'Tiếng Anh', count: 30, maxScore: 300, desc: 'Đọc hiểu, từ vựng, ngữ pháp, suy luận ngữ cảnh' }
        ]
      },
      {
        partId: 'part2',
        partName: 'Phần 2: Toán học (30 câu – 300 điểm)',
        subsections: [
          { id: 'math', name: 'Toán học', count: 30, maxScore: 300, desc: 'Tư duy toán học, lập luận logic, xử lý số liệu, đọc biểu đồ và vận dụng thực tế' }
        ]
      },
      {
        partId: 'part3',
        partName: 'Phần 3: Tư duy khoa học (30 câu – 300 điểm)',
        subsections: [
          { id: 'logic_data', name: 'Logic & Phân tích số liệu', count: 12, maxScore: 120, desc: 'Đọc hiểu bảng số liệu, biểu đồ, suy luận quy luật và lập luận logic' },
          { id: 'science_reasoning', name: 'Suy luận khoa học', count: 18, maxScore: 180, desc: 'Chùm câu hỏi tình huống, thí nghiệm: Vật lí, Hóa học, Sinh học, Địa lí, Lịch sử, GDKT&PL' }
        ]
      }
    ]
  },
  {
    id: 'vact-real-2024-dot1',
    title: 'Đề thi ĐGNL ĐHQG-HCM 2024 (Đợt 1 - Tái hiện chuẩn hóa)',
    year: '2024',
    type: 'Đề thi chính thức',
    durationMinutes: 150,
    totalQuestions: 60,
    description: 'Đề thi đợt 1 năm 2024 với các dạng câu hỏi bẫy logic, phân tích dữ liệu và tích hợp đa môn.',
    parts: [
      {
        partId: 'part1',
        partName: 'Phần 1: Sử dụng ngôn ngữ',
        subsections: [
          { id: 'vietnamese', name: 'Tiếng Việt', count: 15, maxScore: 300 },
          { id: 'english', name: 'Tiếng Anh', count: 15, maxScore: 300 }
        ]
      },
      {
        partId: 'part2',
        partName: 'Phần 2: Toán học',
        subsections: [
          { id: 'math', name: 'Toán học', count: 15, maxScore: 300 }
        ]
      },
      {
        partId: 'part3',
        partName: 'Phần 3: Tư duy khoa học',
        subsections: [
          { id: 'logic_data', name: 'Logic & Phân tích số liệu', count: 6, maxScore: 120 },
          { id: 'science_reasoning', name: 'Suy luận khoa học', count: 9, maxScore: 180 }
        ]
      }
    ]
  }
];

export const QUESTIONS_DATA = {
  'vact-mock-2025': [
    // =========================================================================
    // PHẦN 1: SỬ DỤNG NGÔN NGỮ (60 CÂU - 600 ĐIỂM)
    // HỢP PHẦN 1A: TIẾNG VIỆT (30 CÂU - 300 ĐIỂM)
    // Đọc hiểu, phân tích lập luận, cấu trúc văn bản và sử dụng ngôn ngữ
    // =========================================================================
    {
      id: 1,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Ngôn ngữ)',
      question: 'Từ nào dưới đây viết đúng chính tả tiếng Việt?',
      options: [
        'A. Sáp nhập',
        'B. Sát nhập',
        'C. Xát nhập',
        'D. Xáp nhập'
      ],
      correctAnswer: 0,
      explanation: 'Từ viết đúng chính tả là "Sáp nhập" (trong đó "sáp" có nghĩa là ghép vào; "nhập" là vào trong). Nhiều người hay nhầm thành "sát nhập" do phát âm.',
      difficulty: 'Dễ'
    },
    {
      id: 2,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Ngôn ngữ)',
      question: 'Trong các câu sau, câu nào mắc lỗi dùng từ do nhầm lẫn nghĩa của từ Hán Việt?',
      options: [
        'A. Thất bại là mẹ của thành công.',
        'B. Tiếng Anh là một điểm yếu của anh ấy cần phải cải thiện.',
        'C. Anh ấy có rất nhiều yếu điểm khiến mọi người nể phục.',
        'D. Cần nhìn nhận thẳng thắn vào các khuyết điểm còn tồn đọng.'
      ],
      correctAnswer: 2,
      explanation: 'Câu C dùng sai từ "yếu điểm". "Yếu điểm" nghĩa là "điểm quan trọng, mấu chốt" (yếu nhân, yếu huyệt), không phải là "điểm yếu/nhược điểm".',
      difficulty: 'Trung bình'
    },
    {
      id: 3,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Ngôn ngữ)',
      question: 'Xác định biện pháp tu từ nổi bật trong hai câu thơ sau:\n"Bàn tay mẹ chắn bão giông\nCho con giấc ngủ ấm nồng sớm mai."',
      options: [
        'A. So sánh và điệp từ',
        'B. Hoán dụ (lấy bộ phận để chỉ toàn thể)',
        'C. Nhân hóa',
        'D. Chơi chữ'
      ],
      correctAnswer: 1,
      explanation: '"Bàn tay mẹ" là hình ảnh hoán dụ (lấy bộ phận để chỉ toàn thể người mẹ, tượng trưng cho tình thương yêu chở che của mẹ).',
      difficulty: 'Dễ'
    },
    {
      id: 4,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Ngôn ngữ)',
      question: 'Câu nào sau đây mắc lỗi sai cấu trúc ngữ pháp (câu thiếu chủ ngữ)?',
      options: [
        'A. Qua tác phẩm "Tắt đèn" của Ngô Tất Tố đã cho ta thấy nỗi khổ cực của người nông dân.',
        'B. Tác phẩm "Tắt đèn" của Ngô Tất Tố đã cho ta thấy nỗi khổ cực của người nông dân.',
        'C. Qua tác phẩm "Tắt đèn", Ngô Tất Tố đã cho ta thấy nỗi khổ cực của người nông dân.',
        'D. Đọc "Tắt đèn" của Ngô Tất Tố, chúng ta càng thấu hiểu người nông dân.'
      ],
      correctAnswer: 0,
      explanation: 'Câu A dùng giới từ "Qua" ở đầu biến toàn bộ vế đầu thành trạng ngữ, theo sau là vị ngữ "đã cho ta thấy...", khiến câu không có chủ ngữ.',
      difficulty: 'Trung bình'
    },
    {
      id: 5,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Ngôn ngữ)',
      question: 'Phong cách chức năng ngôn ngữ của một bản tin dự báo thời tiết trên đài truyền hình là gì?',
      options: [
        'A. Phong cách ngôn ngữ sinh hoạt',
        'B. Phong cách ngôn ngữ nghệ thuật',
        'C. Phong cách ngôn ngữ báo chí',
        'D. Phong cách ngôn ngữ chính luận'
      ],
      correctAnswer: 2,
      explanation: 'Bản tin dự báo thời tiết thuộc phương tiện thông tin đại chúng, mang tính thời sự, chính xác và số liệu định lượng, thuộc phong cách ngôn ngữ báo chí.',
      difficulty: 'Dễ'
    },
    {
      id: 6,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Đọc hiểu & Phân tích lập luận)',
      passage: 'Đọc đoạn trích sau và trả lời câu hỏi 6 - 8:\n"Trí tuệ nhân tạo (AI) đang tái định hình cách thức con người học tập và làm việc. Tuy nhiên, AI không thể thay thế năng lực tư duy phản biện, sự đồng cảm và khả năng sáng tạo độc bản của con người. Một xã hội tương lai không cần những cỗ máy sinh học làm việc rập khuôn, mà cần những cá nhân biết làm chủ công nghệ, sở hữu tư duy đạo đức và tinh thần thích ứng linh hoạt."',
      question: 'Luận điểm chính của đoạn trích trên là gì?',
      options: [
        'A. Trí tuệ nhân tạo sẽ sớm thay thế hoàn toàn nguồn lao động con người.',
        'B. Khẳng định vai trò độc tôn không thể thay thế của tư duy nhân bản, đạo đức và sự sáng tạo trước làn sóng AI.',
        'C. Phê phán những ai chậm thích ứng với các công cụ tự động hóa.',
        'D. Khuyên mọi người nên dừng phát triển công nghệ trí tuệ nhân tạo.'
      ],
      correctAnswer: 1,
      explanation: 'Đoạn trích nhấn mạnh: AI phát triển mạnh mẽ nhưng không thể thay thế phẩm chất đạo đức, tư duy phản biện và sự sáng tạo của con người.',
      difficulty: 'Trung bình'
    },
    {
      id: 7,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Đọc hiểu & Phân tích lập luận)',
      passage: 'Dựa vào đoạn trích câu 6: "Một xã hội tương lai không cần những cỗ máy sinh học làm việc rập khuôn..."',
      question: 'Cụm từ "những cỗ máy sinh học" trong ngữ cảnh này được dùng để chỉ đối tượng nào?',
      options: [
        'A. Các robot hình người chế tạo từ vật liệu sinh học mới.',
        'B. Những con người làm việc một cách máy móc, thiếu tư duy sáng tạo và cảm xúc.',
        'C. Hệ sinh thái vi sinh vật nhân tạo trong phòng thí nghiệm.',
        'D. Máy tính lượng tử mô phỏng não bộ người.'
      ],
      correctAnswer: 1,
      explanation: 'Tác giả dùng ẩn dụ "cỗ máy sinh học" để chỉ những con người làm việc rập khuôn, thiếu tư duy phản biện và khả năng sáng tạo.',
      difficulty: 'Trung bình'
    },
    {
      id: 8,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Đọc hiểu & Phân tích lập luận)',
      passage: 'Dựa vào đoạn trích câu 6.',
      question: 'Thao tác lập luận chính được tác giả sử dụng trong đoạn văn là:',
      options: [
        'A. Phân tích và bình luận',
        'B. Chứng minh thực nghiệm',
        'C. Bác bỏ hoàn toàn',
        'D. Kể chuyện tự sự'
      ],
      correctAnswer: 0,
      explanation: 'Tác giả nêu hiện tượng (AI phát triển), phân tích khía cạnh hạn chế của AI và bình luận về yêu cầu đối với con người trong kỷ nguyên mới.',
      difficulty: 'Trung bình'
    },
    {
      id: 9,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Ngôn ngữ)',
      question: 'Thành ngữ nào sau đây đồng nghĩa với "Đứng núi này trông núi nọ"?',
      options: [
        'A. Đẽo cày giữa đường',
        'B. Bắt cá hai tay',
        'C. Đủng đỉnh như trâu cày',
        'D. Khôn nhà dại chợ'
      ],
      correctAnswer: 1,
      explanation: '"Đứng núi này trông núi nọ" chỉ sự không yên tâm với hoàn cảnh hiện tại, luôn ham muốn cái khác; tương đồng với tâm lý tham lam "Bắt cá hai tay".',
      difficulty: 'Khá'
    },
    {
      id: 10,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Ngôn ngữ)',
      question: 'Từ "tinh tế" trong cụm "quan sát tinh tế" giữ vai trò ngữ pháp là gì?',
      options: [
        'A. Định ngữ bổ nghĩa cho danh từ',
        'B. Bổ ngữ chỉ cách thức cho động từ quan sát',
        'C. Vị ngữ chính của câu',
        'D. Khởi ngữ'
      ],
      correctAnswer: 1,
      explanation: '"Quan sát" là động từ, từ "tinh tế" đứng sau bổ sung ý nghĩa cách thức/tính chất cho động từ đó, nên đóng vai trò bổ ngữ.',
      difficulty: 'Khá'
    },

    // =========================================================================
    // HỢP PHẦN 1B: TIẾNG ANH (30 CÂU - 300 ĐIỂM)
    // Đọc hiểu, từ vựng, ngữ pháp, suy luận ngữ cảnh
    // =========================================================================
    {
      id: 11,
      partId: 'part1',
      section: 'english',
      sectionName: 'Tiếng Anh (Từ vựng & Ngữ cảnh)',
      question: 'Choose the word that best completes the sentence:\n"Despite the economic downturn, the company managed to ________ a profit this fiscal year."',
      options: [
        'A. make',
        'B. do',
        'C. take',
        'D. create'
      ],
      correctAnswer: 0,
      explanation: 'Collocation chuẩn trong tiếng Anh: "make a profit" (sinh lời, tạo ra lợi nhuận). Không dùng "do a profit".',
      difficulty: 'Dễ'
    },
    {
      id: 12,
      partId: 'part1',
      section: 'english',
      sectionName: 'Tiếng Anh (Ngữ pháp)',
      question: 'Identify the underlined part that needs correction:\n"Neither the teacher nor the students was (A) aware of (B) the changes (C) in the examination schedule (D)."',
      options: [
        'A. was',
        'B. aware of',
        'C. changes',
        'D. schedule'
      ],
      correctAnswer: 0,
      explanation: 'Quy tắc hòa hợp chủ vị với "Neither... nor...": Động từ chia theo danh từ đứng gần nhất. "the students" là số nhiều, nên động từ phải là "were" chứ không phải "was".',
      difficulty: 'Trung bình'
    },
    {
      id: 13,
      partId: 'part1',
      section: 'english',
      sectionName: 'Tiếng Anh (Từ vựng)',
      question: 'Choose the word OPPOSITE in meaning to the underlined word:\n"The university provides a comprehensive curriculum that covers both theory and practical applications."',
      options: [
        'A. complete',
        'B. thorough',
        'C. restricted',
        'D. extensive'
      ],
      correctAnswer: 2,
      explanation: '"Comprehensive" nghĩa là toàn diện, bao quát. Từ trái nghĩa là "restricted" (bị giới hạn, hạn chế).',
      difficulty: 'Trung bình'
    },
    {
      id: 14,
      partId: 'part1',
      section: 'english',
      sectionName: 'Tiếng Anh (Cấu trúc đảo ngữ)',
      question: 'Rewrite the following conditional sentence using Inversion:\n"If he had taken the doctor\'s advice, he would have recovered by now."',
      options: [
        'A. Had he taken the doctor\'s advice, he would have recovered by now.',
        'B. Should he take the doctor\'s advice, he would recover.',
        'C. Were he to take the doctor\'s advice, he would recover.',
        'D. Did he take the doctor\'s advice, he would have recovered.'
      ],
      correctAnswer: 0,
      explanation: 'Đảo ngữ câu điều kiện loại 3: "Had + S + V3/ed, S + would have + V3/ed". Do đó đáp án đúng là A.',
      difficulty: 'Khá'
    },
    {
      id: 15,
      partId: 'part1',
      section: 'english',
      sectionName: 'Tiếng Anh (Đọc hiểu văn bản khoa học)',
      passage: 'Read the text and answer question 15:\n"Renewable energy sources such as solar and wind power are experiencing exponential growth globally. Advances in battery storage technologies have resolved previous concerns regarding grid instability during periods of low sunlight or minimal wind."',
      question: 'According to the passage, what has solved the issue of power grid instability?',
      options: [
        'A. Increased reliance on fossil fuels',
        'B. Technological improvements in battery storage',
        'C. Building more transmission lines',
        'D. Limiting industrial power consumption'
      ],
      correctAnswer: 1,
      explanation: 'Dựa vào câu: "Advances in battery storage technologies have resolved previous concerns regarding grid instability...", đáp án là B (Cải tiến công nghệ lưu trữ pin).',
      difficulty: 'Dễ'
    },

    // =========================================================================
    // PHẦN 2: TOÁN HỌC (30 CÂU - 300 ĐIỂM)
    // Tư duy toán học, lập luận logic, xử lý số liệu, đọc biểu đồ và vận dụng thực tế
    // =========================================================================
    {
      id: 16,
      partId: 'part2',
      section: 'math',
      sectionName: 'Toán học (Giải tích & Cực trị)',
      question: 'Cho hàm số f(x) có đạo hàm f\'(x) = x(x - 1)^2(x + 2)^3. Số điểm cực trị của hàm số f(x) là bao nhiêu?',
      options: [
        'A. 1',
        'B. 2',
        'C. 3',
        'D. 4'
      ],
      correctAnswer: 1,
      explanation: 'Điểm cực trị là điểm mà f\'(x) đổi dấu. x = 1 là nghiệm bội chẵn (bậc 2) nên f\'(x) không đổi dấu. Nghiệm x = 0 (bội 1) và x = -2 (bội 3 lẻ) làm f\'(x) đổi dấu. Vậy có đúng 2 điểm cực trị.',
      difficulty: 'Trung bình'
    },
    {
      id: 17,
      partId: 'part2',
      section: 'math',
      sectionName: 'Toán học (Toán ứng dụng thực tế)',
      question: 'Một người gửi tiết kiệm 100 triệu đồng vào ngân hàng với lãi suất 6%/năm theo hình thức lãi kép hàng năm. Hỏi sau ít nhất bao nhiêu năm người đó nhận được số tiền cả gốc lẫn lãi vượt quá 150 triệu đồng?',
      options: [
        'A. 6 năm',
        'B. 7 năm',
        'C. 8 năm',
        'D. 9 năm'
      ],
      correctAnswer: 1,
      explanation: 'Công thức lãi kép: A = P(1 + r)^n. 100 * (1 + 0.06)^n > 150 <=> 1.06^n > 1.5 <=> n > log_{1.06}(1.5) ≈ 6.958 năm. Vì n nguyên nên cần ít nhất 7 năm.',
      difficulty: 'Trung bình'
    },
    {
      id: 18,
      partId: 'part2',
      section: 'math',
      sectionName: 'Toán học (Hình học không gian Oxyz)',
      question: 'Trong không gian Oxyz, khoảng cách từ điểm M(1; 2; -3) đến mặt phẳng (P): 2x - 2y + z + 8 = 0 bằng:',
      options: [
        'A. 1',
        'B. 2',
        'C. 3',
        'D. 4'
      ],
      correctAnswer: 0,
      explanation: 'd(M, (P)) = |2(1) - 2(2) + 1(-3) + 8| / sqrt(2^2 + (-2)^2 + 1^2) = |3| / 3 = 1.',
      difficulty: 'Dễ'
    },
    {
      id: 19,
      partId: 'part2',
      section: 'math',
      sectionName: 'Toán học (Xác suất & Thống kê)',
      question: 'Một hộp chứa 5 viên bi đỏ và 4 viên bi xanh. Lấy ngẫu nhiên đồng thời 3 viên bi. Xác suất để trong 3 viên bi lấy ra có ít nhất 1 viên bi màu đỏ là:',
      options: [
        'A. 1/21',
        'B. 20/21',
        'C. 5/14',
        'D. 17/42'
      ],
      correctAnswer: 1,
      explanation: 'Tổng số bi là 9. Không gian mẫu C(9, 3) = 84. Biến cố đối A: "Cả 3 viên đều màu xanh" có số cách chọn là C(4, 3) = 4. P(A) = 4/84 = 1/21. Xác suất có ít nhất 1 bi đỏ là: 1 - 1/21 = 20/21.',
      difficulty: 'Trung bình'
    },
    {
      id: 20,
      partId: 'part2',
      section: 'math',
      sectionName: 'Toán học (Tích phân ứng dụng)',
      question: 'Tích phân I = ∫_0^1 (2x + 1)e^x dx có giá trị bằng:',
      options: [
        'A. e + 1',
        'B. 2e - 1',
        'C. e - 1',
        'D. 2e + 1'
      ],
      correctAnswer: 0,
      explanation: 'Dùng từng phần: u = 2x + 1 => du = 2dx; dv = e^x dx => v = e^x. I = [(2x + 1)e^x]_0^1 - ∫_0^1 2e^x dx = (3e - 1) - 2(e - 1) = e + 1.',
      difficulty: 'Trung bình'
    },

    // =========================================================================
    // PHẦN 3: TƯ DUY KHOA HỌC (30 CÂU - 300 ĐIỂM)
    // HỢP PHẦN 3A: LOGIC & PHÂN TÍCH SỐ LIỆU (12 CÂU)
    // Đọc hiểu bảng số liệu, biểu đồ, suy luận quy luật và lập luận logic
    // =========================================================================
    {
      id: 21,
      partId: 'part3',
      section: 'logic_data',
      sectionName: 'Tư duy khoa học (Logic vị trí)',
      passage: 'Dữ kiện logic cho câu 21-22:\nCó 5 bạn học sinh An, Bình, Cúc, Dũng, Em ngồi vào một dãy 5 ghế thẳng hàng đánh số từ 1 đến 5 từ trái sang phải.\n- An không ngồi ở hai đầu dãy ghế.\n- Bình ngồi ngay bên phải Cúc.\n- Dũng ngồi cách Bình ít nhất 2 ghế.\n- Em ngồi ở ghế số 5.',
      question: 'Vị trí ghế ngồi của An là ghế số mấy?',
      options: [
        'A. Ghế 2',
        'B. Ghế 3',
        'C. Ghế 4',
        'D. Ghế 2 hoặc ghế 3'
      ],
      correctAnswer: 1,
      explanation: 'Em ở ghế 5. An chỉ có thể ngồi 2, 3, hoặc 4. Bình ngồi ngay bên phải Cúc: cặp (C, B). Nếu (C, B) ở ghế (1, 2) => Dũng phải cách Bình ít nhất 2 ghế => Dũng ở ghế 4. An sẽ ở ghế 3. Kiểm tra: Cúc (1), Bình (2), An (3), Dũng (4), Em (5). Thỏa mãn tất cả điều kiện!',
      difficulty: 'Khó'
    },
    {
      id: 22,
      partId: 'part3',
      section: 'logic_data',
      sectionName: 'Tư duy khoa học (Logic vị trí)',
      passage: 'Dựa vào dữ kiện ở câu 21.',
      question: 'Nếu đổi chỗ Dũng và An cho nhau, điều kiện nào sau đây bị vi phạm?',
      options: [
        'A. Dũng ngồi cách Bình ít nhất 2 ghế.',
        'B. An không ngồi ở hai đầu dãy ghế.',
        'C. Bình ngồi ngay bên phải Cúc.',
        'D. Không có điều kiện nào bị vi phạm.'
      ],
      correctAnswer: 0,
      explanation: 'Nếu đổi Dũng sang ghế 3 và An sang ghế 4, Dũng ở ghế 3, Bình ở ghế 2 => khoảng cách |3 - 2| = 1 ghế, vi phạm điều kiện "Dũng cách Bình ít nhất 2 ghế".',
      difficulty: 'Khó'
    },
    {
      id: 23,
      partId: 'part3',
      section: 'logic_data',
      sectionName: 'Tư duy khoa học (Phân tích số liệu biểu đồ)',
      passage: 'Bảng số liệu doanh thu của một công ty công nghệ trong giai đoạn 2021 - 2024 (Đơn vị: Tỷ VNĐ):\n- Năm 2021: 120\n- Năm 2022: 150\n- Năm 2023: 180\n- Năm 2024: 225',
      question: 'Tốc độ tăng trưởng doanh thu của năm 2024 so với năm 2023 là bao nhiêu phần trăm?',
      options: [
        'A. 20%',
        'B. 25%',
        'C. 30%',
        'D. 45%'
      ],
      correctAnswer: 1,
      explanation: 'Tốc độ tăng trưởng = ((225 - 180) / 180) * 100% = (45 / 180) * 100% = 25%.',
      difficulty: 'Dễ'
    },
    {
      id: 24,
      partId: 'part3',
      section: 'logic_data',
      sectionName: 'Tư duy khoa học (Phân tích số liệu biểu đồ)',
      passage: 'Dựa vào bảng số liệu câu 23.',
      question: 'Năm nào có tốc độ tăng trưởng doanh thu so với năm liền trước cao nhất?',
      options: [
        'A. Năm 2022',
        'B. Năm 2023',
        'C. Năm 2024',
        'D. Cả năm 2022 và năm 2024 bằng nhau'
      ],
      correctAnswer: 3,
      explanation: 'Tăng trưởng 2022 so với 2021: (150 - 120)/120 = 25%. Tăng trưởng 2023 so với 2022: (180 - 150)/150 = 20%. Tăng trưởng 2024 so với 2023: (225 - 180)/180 = 25%. Vậy cả năm 2022 và 2024 đều đạt mức cao nhất 25%.',
      difficulty: 'Trung bình'
    },

    // =========================================================================
    // HỢP PHẦN 3B: SUY LUẬN KHOA HỌC (18 CÂU)
    // Các chùm câu hỏi tình huống, thí nghiệm: Vật lí, Hóa học, Sinh học, Địa lí, Lịch sử, GDKT&PL
    // =========================================================================
    {
      id: 25,
      partId: 'part3',
      section: 'science_reasoning',
      sectionName: 'Tư duy khoa học (Vật lí - Thí nghiệm)',
      passage: 'Trong một thí nghiệm về dao động cơ học của con lắc lò xo nằm ngang có độ cứng k = 100 N/m và vật nặng m = 100g (lấy pi^2 ≈ 10).',
      question: 'Chu kỳ dao động T của con lắc trên xấp xỉ bằng:',
      options: [
        'A. 0.2 s',
        'B. 0.5 s',
        'C. 1.0 s',
        'D. 2.0 s'
      ],
      correctAnswer: 0,
      explanation: 'T = 2*pi*sqrt(m/k) = 2*pi*sqrt(0.1 / 100) = 2*pi / (10*sqrt(10)) ≈ 2*pi / (10*pi) = 0.2 s.',
      difficulty: 'Dễ'
    },
    {
      id: 26,
      partId: 'part3',
      section: 'science_reasoning',
      sectionName: 'Tư duy khoa học (Hóa học - Thực nghiệm)',
      question: 'Dung dịch nào sau đây làm đổi màu quỳ tím sang màu đỏ?',
      options: [
        'A. Dung dịch NaOH',
        'B. Dung dịch NaCl',
        'C. Dung dịch CH3COOH (axit axetic)',
        'D. Dung dịch Ba(OH)2'
      ],
      correctAnswer: 2,
      explanation: 'CH3COOH là axit, phân li ra ion H+ làm dung dịch có pH < 7, làm giấy quỳ tím chuyển sang màu đỏ.',
      difficulty: 'Dễ'
    },
    {
      id: 27,
      partId: 'part3',
      section: 'science_reasoning',
      sectionName: 'Tư duy khoa học (Sinh học - Di truyền công nghệ)',
      question: 'Trong kỹ thuật di truyền tái tổ hợp ADN, hai loại enzim cắt và enzim nối được sử dụng lần lượt là:',
      options: [
        'A. ADN-polimeraza và ARN-polimeraza',
        'B. Restrictaza (enzim cắt) và Ligaza (enzim nối)',
        'C. Amilaza và Proteaza',
        'D. Helidaza và Ligaza'
      ],
      correctAnswer: 1,
      explanation: 'Enzim giới hạn Restrictaza cắt ADN tại vị trí nhận biết đặc hiệu, còn Ligaza nối các đoạn ADN lại với nhau.',
      difficulty: 'Trung bình'
    },
    {
      id: 28,
      partId: 'part3',
      section: 'science_reasoning',
      sectionName: 'Tư duy khoa học (Lịch sử - Xã hội)',
      passage: 'Thông tin lịch sử: Hiệp hội các quốc gia Đông Nam Á (ASEAN) được thành lập vào ngày 8/8/1967 tại Băng Cốc (Thái Lan) với 5 nước thành viên sáng lập.',
      question: 'Việt Nam chính thức gia nhập ASEAN vào năm nào và là thành viên thứ mấy?',
      options: [
        'A. Năm 1995, thành viên thứ 7',
        'B. Năm 1997, thành viên thứ 8',
        'C. Năm 1999, thành viên thứ 10',
        'D. Năm 1990, thành viên thứ 6'
      ],
      correctAnswer: 0,
      explanation: 'Việt Nam chính thức gia nhập ASEAN vào ngày 28/7/1995 tại Hội nghị Ngoại trưởng ASEAN lần thứ 28 tại Brunei, trở thành thành viên thứ 7.',
      difficulty: 'Trung bình'
    },
    {
      id: 29,
      partId: 'part3',
      section: 'science_reasoning',
      sectionName: 'Tư duy khoa học (Địa lí - Tự nhiên Việt Nam)',
      question: 'Gió mùa mùa hạ hoạt động ở nước ta chủ yếu thổi theo hướng nào và đem lại tính chất thời tiết gì?',
      options: [
        'A. Hướng Đông Bắc, lạnh khô',
        'B. Hướng Tây Nam, nóng ẩm mưa nhiều',
        'C. Hướng Đông Nam, lạnh ẩm',
        'D. Hướng Bắc, khô hạn quanh năm'
      ],
      correctAnswer: 1,
      explanation: 'Gió mùa mùa hạ ở Việt Nam thổi theo hướng Tây Nam mang theo lượng ẩm dồi dào gây mưa lớn cho Nam Bộ, Tây Nguyên và cả nước.',
      difficulty: 'Dễ'
    },
    {
      id: 30,
      partId: 'part3',
      section: 'science_reasoning',
      sectionName: 'Tư duy khoa học (GDKT&PL - Pháp luật & Logic)',
      question: 'Trong quy định pháp luật về giao dịch dân sự, khi một người giao kết hợp đồng dưới sự đe dọa, cưỡng ép của bên kia thì hợp đồng đó có hiệu lực như thế nào?',
      options: [
        'A. Hợp đồng có hiệu lực pháp luật đầy đủ',
        'B. Hợp đồng vô hiệu do bị lừa dối, đe dọa, cưỡng ép',
        'C. Tự động chuyển giao nghĩa vụ cho người thứ ba',
        'D. Chỉ vô hiệu nếu có sự đồng thuận của bên cưỡng ép'
      ],
      correctAnswer: 1,
      explanation: 'Theo Bộ luật Dân sự (nội dung môn Giáo dục Kinh tế & Pháp luật): Giao dịch dân sự được xác lập do bị lừa dối, đe dọa hoặc cưỡng ép là giao dịch dân sự vô hiệu.',
      difficulty: 'Trung bình'
    }
  ]
};
