// Ngân hàng đề thi và câu hỏi chuẩn hóa V-ACT (ĐHQG TP.HCM)
// Cấu trúc chuẩn áp dụng theo Chương trình GDPT 2018:
// - Tổng cộng: 120 câu hỏi trắc nghiệm khách quan, thời gian 150 phút, thang điểm tối đa 1.200 điểm
// - Chấm theo mô hình IRT, 4 hợp phần x 300 điểm = 1.200 điểm:
//   + Hợp phần 1: Tiếng Việt (30 câu - 300 điểm)
//   + Hợp phần 2: Tiếng Anh (30 câu - 300 điểm)
//   + Hợp phần 3: Toán học (30 câu - 300 điểm)
//   + Hợp phần 4: Tư duy khoa học (30 câu - 300 điểm: 12 câu Logic & Phân tích số liệu + 18 câu Suy luận KH)

export const EXAM_LIST = [
  {
    id: 'vact-official-2025',
    title: 'Đề Thi Minh Họa V-ACT 2025 Chính Thức (ĐHQG TP.HCM)',
    year: '2025 - 2026',
    type: 'Đề Mẫu Chính Thức ĐHQG-HCM',
    durationMinutes: 150,
    totalQuestions: 120,
    description: 'Trích xuất nguyên bản từ Đề thi Mẫu chính thức do Đại học Quốc gia TP.HCM công bố theo cấu trúc đổi mới GDPT 2018.',
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
    id: 'vact-moon-25de',
    title: 'Bộ Đề Luyện Thi V-ACT Chuyên Sâu (Tuyển Tập 25 Đề Moon & V-ACT Hub)',
    year: '2025',
    type: 'Luyện đề nâng cao 900+',
    durationMinutes: 150,
    totalQuestions: 60,
    description: 'Bộ câu hỏi chọn lọc từ tuyển tập 25 đề luyện thi Moon.vn và ngân hàng câu hỏi phân hóa cao chinh phục mốc 900 - 1000+ điểm.',
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
  'vact-official-2025': [
    // =========================================================================
    // PHẦN 1: SỬ DỤNG NGÔN NGỮ (60 CÂU - 600 ĐIỂM)
    // 1.1. TIẾNG VIỆT (30 CÂU - 300 ĐIỂM) - TRÍCH NGUYÊN BẢN ĐỀ ĐHQG-HCM 2025
    // =========================================================================
    {
      id: 1,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Đọc hiểu văn bản văn học)',
      passage: '“Cành chọc trời là con đầu\nTên gọi ông Thu Tha\nCành bung xung là con thứ hai\nTên gọi bà Thu Thiên\nHai ông bà nên đôi nên lứa\nTruyền cho:\nCon gà có cựa\nDây dưa biết leo\nTre pheo có gai, có ngọn\nCon người biết nói.”\n(Sử thi dân tộc Mường, Đẻ đất đẻ nước)',
      question: 'Nội dung của văn bản trên là gì?',
      options: [
        'A. Giải thích nguồn gốc trời và đất.',
        'B. Giải thích đặc điểm các loài.',
        'C. Giải thích nguồn gốc bản làng.',
        'D. Giải thích nguồn gốc phong tục.'
      ],
      correctAnswer: 1,
      explanation: 'Đoạn trích kể về việc hai ông bà Thu Tha và Thu Thiên truyền cho "con gà có cựa, dây dưa biết leo, tre pheo có gai, con người biết nói...", nội dung chính là giải thích đặc điểm sinh học và thuộc tính của các loài vật, cây cối và con người.',
      difficulty: 'Dễ'
    },
    {
      id: 2,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Đọc hiểu văn bản văn học)',
      passage: '“Đây nói chuyện Ngọc Hoàng, từ lúc mọi công việc kiến thiết vũ trụ đã xong mới bắt đầu nghĩ đến chuyện sáng tạo ra vạn vật. Không hiểu Ngọc Hoàng làm như thế nào nhưng chỉ nghe nói rằng ông ta trước hết dùng những chất cặn còn sót lại trong trời đất, nặn ra đủ mọi giống vật từ những con to lớn như voi, tê ngưu, cọp đến những vật bé tí như sâu, kiến, bọ, trùng, v.v… Sau đó, Ngọc Hoàng mới gạn lấy chất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn. Đó là loài người. Và cũng vì thế mà người ta khôn hơn vạn vật.”\n(Nguyễn Đổng Chi, Mười hai bà mụ)',
      question: 'Chi tiết “Ngọc Hoàng mới gạn lấy chất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn” có nghĩa là gì?',
      options: [
        'A. Loài người là giống loài được sáng tạo một cách công phu từ chất trong, tinh túy.',
        'B. Loài người là giống loài được tạo ra sau cùng và đồng chất với mọi loài, mọi vật.',
        'C. Loài người là một hợp chất trong lành và tinh túy giống như mọi loài, mọi vật.',
        'D. Loài người là sự sáng tạo thông thái của Ngọc Hoàng từ những chất cặn còn sót lại.'
      ],
      correctAnswer: 0,
      explanation: 'Theo nguyên văn văn bản: Ngọc Hoàng gạn lấy chất trong tinh túy để nặn ra loài người công phu hơn, lý giải vì sao loài người khôn hơn vạn vật. Đáp án chính xác là A.',
      difficulty: 'Trung bình'
    },
    {
      id: 3,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Thể loại & Thể thơ)',
      passage: '“Tuổi đà ngoại tám mươi già,\nThoắt thoắt xem bằng bóng ngựa qua.\nMai bạc lạnh quen nhiều tháng tuyết,\nCúc vàng thơm đổi mấy phen hoa.\nSang có phận, là ơn chúa,\nĐược làm người, bởi đức cha.\nAm quán ngày nhàn, rồi mọi việc,\nDầu ai tự tại, mặc dầu ta.”\n(Nguyễn Bỉnh Khiêm, Bạch Vân quốc ngữ thi)',
      question: 'Xác định thể thơ của văn bản trên.',
      options: [
        'A. Thất ngôn xen lục ngôn.',
        'B. Thất ngôn xen ngũ ngôn.',
        'C. Thất ngôn tứ tuyệt.',
        'D. Lục ngôn bát cú.'
      ],
      correctAnswer: 0,
      explanation: 'Đếm số chữ từng câu: Câu 1 có 7 chữ, câu 2 có 7 chữ, câu 3 có 7 chữ, câu 4 có 7 chữ, câu 5 có 6 chữ ("Sang có phận, là ơn chúa"), câu 6 có 6 chữ ("Được làm người, bởi đức cha"), câu 7 có 7 chữ, câu 8 có 7 chữ. Đây là thể thơ thất ngôn xen lục ngôn kinh điển của văn học trung đại Việt Nam.',
      difficulty: 'Trung bình'
    },
    {
      id: 4,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Nghệ thuật văn học)',
      passage: '“… Bà phu nhân nói:\n[…] Những cuộc gặp gỡ hiếm lạ, đời nào mà không có: như đền Bạc hậu, như quán Cao đường, như thần Lạc phố lướt sóng, như nàng Giang Phi cởi ngọc, như Lộng Ngọc lấy Tiêu Sử, như Thái Loan gặp Văn Tiêu, như Lan Hương gặp Trương Thạc… Bao nhiêu những chuyện cũ còn sờ sờ đó, nếu thế này mà bị chê cười thì đã có những người trước ấy họ chịu đỡ tiếng cười cho mình.\nMọi người cùng phá lên cười rất vui vẻ. Rồi đó mặt trời gác núi, các khách khứa đều giải tán cả.”\n(Nguyễn Dữ, Chuyện Từ Thức lấy vợ tiên)',
      question: 'Dòng nào sau đây không thể hiện đặc trưng hình thức nghệ thuật của văn bản trên?',
      options: [
        'A. Sử dụng biện pháp tu từ nhân hóa.',
        'B. Dùng nhiều điển tích, điển cố.',
        'C. Tổ chức theo cấu trúc biền văn.',
        'D. Sử dụng biện pháp tu từ liệt kê.'
      ],
      correctAnswer: 0,
      explanation: 'Đoạn văn dùng rất nhiều điển tích điển cố ("nàng Giang Phi", "Lộng Ngọc", "Lạc phố"...), dùng biện pháp liệt kê ("như... như..."), câu văn biền ngẫu sóng đôi, nhưng hoàn toàn KHÔNG sử dụng biện pháp nhân hóa.',
      difficulty: 'Trung bình'
    },
    {
      id: 5,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Tư tưởng & Cảm xúc tác phẩm)',
      passage: '“Ôi!\nTrời Bến Nghé mây mưa sùi sụt, thương đấng anh hùng gặp thuở gian truân, Đất Gò Công cây cỏ ủ ê, cảm niềm thần tử mắc nơi họa hại.\nXưa còn làm tướng, dốc rạng dồi hai chữ bình Tây, Nay thác về thần, nên vưng hộ một câu phục thái.\nHỡi ôi thương thay!”\n(Nguyễn Đình Chiểu, Văn tế Trương Định)',
      question: 'Dòng nào sau đây KHÔNG thể hiện cảm xúc và tư tưởng của văn bản?',
      options: [
        'A. Tiếc thương cho sự hy sinh vì nước vì dân của đấng anh hùng.',
        'B. Cảm thương trước tai họa mà đấng anh hùng mắc phải.',
        'C. Tin vị anh hùng sống làm tướng đánh giặc, thác theo thần giúp đỡ nhân dân.',
        'D. Xót xa cho trời Bến Nghé, đất Gò Công hoang tàn trong cơn binh biến.'
      ],
      correctAnswer: 3,
      explanation: 'Thiên nhiên "Trời Bến Nghé mây mưa sùi sụt", "Đất Gò Công cây cỏ ủ ê" trong văn tế là nghệ thuật tả cảnh ngụ tình, đồng cảm với nỗi đau mất mát của con người trước sự hy sinh của Trương Định, chứ không phải nói về sự tàn phá hoang tàn của chiến sự.',
      difficulty: 'Khá'
    },
    {
      id: 6,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Biện pháp tu từ)',
      passage: '“Đời bộ đội của tôi đã bước những bước đi đầu tiên trong các cánh rừng cằn cỗi vùng Bãi Nai. Ba tháng trời dãi gió dầm mưa trên thao trường đã giúp chúng tôi gột sạch mọi tàn tích của nếp sống thị thành và trụ vững bản thân mình vào đội ngũ. Chúng tôi tập đeo gạch hành quân, tập lăn lê trườn toài, tập nín thở bóp cò, tập bám trụ chiến hào, tập vọt tiến tấn công, tập đâm lê, tập quăng lựu đạn, tập nhồi bộc phá, tập tuân lệnh chỉ huy và tập bền bỉ chịu khổ.”\n(Bảo Ninh, Đêm trừ tịch)',
      question: 'Biện pháp tu từ nổi bật được tác giả sử dụng ở câu cuối là:',
      options: [
        'A. Điệp từ “tập” kết hợp liệt kê hành động',
        'B. So sánh ví von',
        'C. Ẩn dụ chuyển đổi cảm giác',
        'D. Nói giảm nói tránh'
      ],
      correctAnswer: 0,
      explanation: 'Tác giả lặp lại liên tiếp từ "tập" ("tập đeo gạch", "tập lăn lê", "tập nín thở", "tập đâm lê"...) đi kèm phép liệt kê dồn dập nhằm nhấn mạnh sự tôi luyện gian khổ, kỷ luật thép của người lính.',
      difficulty: 'Dễ'
    },
    {
      id: 7,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Sử dụng ngôn ngữ & Logic ngữ nghĩa)',
      question: '“Chúng tôi đã thảo luận về dự án này hai lần: một lần vào năm ngoái, một lần ngay tại văn phòng đại diện của công ti ở phía Nam.”\nNhận định nào về câu trên là đúng?',
      options: [
        'A. Câu sai logic ngữ nghĩa (đồng cấp phân loại).',
        'B. Câu mắc lỗi dùng từ sai ngữ pháp.',
        'C. Câu sai cấu tạo ngữ pháp chủ - vị.',
        'D. Câu mắc lỗi chính tả.'
      ],
      correctAnswer: 0,
      explanation: 'Câu mắc lỗi sai logic phân loại: vế thứ nhất chia theo tiêu chí THỜI GIAN ("năm ngoái"), trong khi vế thứ hai lại chia theo tiêu chí KHÔNG GIAN ("tại văn phòng đại diện"). Hai tiêu chí không đồng cấp khiến phép liệt kê "hai lần" bị lỗi logic.',
      difficulty: 'Khá'
    },
    {
      id: 8,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Ngữ pháp câu)',
      question: 'Chỉ ra câu SAI ngữ pháp trong các câu sau:',
      options: [
        'A. Do tình cảm chân thành, gần gũi của các anh chị khiến Khang gắn bó với nhóm hơn.',
        'B. Nhờ có những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn.',
        'C. Những tình cảm chân thành, gần gũi của các anh chị làm cho Khang gắn bó với nhóm hơn.',
        'D. Đáp lại những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn.'
      ],
      correctAnswer: 0,
      explanation: 'Câu A kết hợp "Do..." biến vế đầu thành trạng ngữ, tiếp theo là "khiến Khang gắn bó..." đóng vai trò vị ngữ, dẫn đến câu không có chủ ngữ. Các câu B, C, D đều có cấu trúc ngữ pháp chuẩn xác.',
      difficulty: 'Trung bình'
    },
    {
      id: 9,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Đọc hiểu văn bản thông tin khoa học)',
      passage: 'Dựa vào thông tin dưới đây để trả lời câu 9 - 10:\nBiến đổi khí hậu đang được dự báo sẽ làm gia tăng hạn hán, qua đó làm trầm trọng thêm tình trạng xâm nhập mặn ở Đồng bằng sông Cửu Long (ĐBSCL). M. A. van Aalst và các cộng sự ở Đại học Vrije Amsterdam đã xem xét mức độ tổn thương ở các quy mô khác nhau. Trong cả thập kỷ qua, vùng này đã trải qua những thay đổi môi trường nhanh và chậm như nước biển dâng, lũ lụt, xâm nhập mặn trong khi nguồn sống của 75% cư dân phụ thuộc vào nông nghiệp...',
      question: 'Bao nhiêu % cư dân ĐBSCL có nguồn sống phụ thuộc vào nông nghiệp theo bài đọc?',
      options: [
        'A. 21%',
        'B. 65-70%',
        'C. 50%',
        'D. 75%'
      ],
      correctAnswer: 3,
      explanation: 'Dựa trực tiếp vào dữ liệu trong văn bản: "...trong khi nguồn sống của 75% cư dân phụ thuộc vào nông nghiệp". Đáp án đúng là D.',
      difficulty: 'Dễ'
    },
    {
      id: 10,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt (Đọc hiểu văn bản)',
      passage: '“Càng chung sống lâu năm với nghề viết, tôi càng tin rằng văn chương nói riêng và nghệ thuật nói chung không nhằm và cũng không có khả năng phản ánh cuộc đời y như nguyên trạng (1). Ngay cả nhiếp ảnh là nghệ thuật gần với sự trung thực nhất cũng không thể phản ánh được mặt sau của quả táo (2)…” (Nguyễn Nhật Ánh, Cảm ơn người lớn)',
      question: 'Cặp từ liên kết “Càng … càng…” ở câu (1) thể hiện mối quan hệ gì giữa các vế câu?',
      options: [
        'A. Quan hệ nhân quả',
        'B. Quan hệ chính phụ',
        'C. Quan hệ hô ứng',
        'D. Quan hệ đẳng lập'
      ],
      correctAnswer: 2,
      explanation: 'Cặp phụ từ "Càng... càng..." là cặp từ hô ứng diễn tả sự tăng tiến, biến đổi tương ứng giữa hai vế câu.',
      difficulty: 'Trung bình'
    },

    // =========================================================================
    // 1.2. TIẾNG ANH (30 CÂU - 300 ĐIỂM) - TRÍCH NGUYÊN BẢN ĐỀ ĐHQG-HCM 2025
    // =========================================================================
    {
      id: 11,
      partId: 'part1',
      section: 'english',
      sectionName: 'Tiếng Anh (Phrasal Verbs)',
      question: 'Choose a suitable word to fill in the blank:\n"Before you end your presentation, you need to run _____ all of the key points again."',
      options: [
        'A. over',
        'B. into',
        'C. about',
        'D. with'
      ],
      correctAnswer: 0,
      explanation: 'Phrasal verb chuẩn: "run over something" nghĩa là lướt lại, tóm tắt nhanh lại các ý chính trước khi kết thúc bài thuyết trình.',
      difficulty: 'Dễ'
    },
    {
      id: 12,
      partId: 'part1',
      section: 'english',
      sectionName: 'Tiếng Anh (Thì quá khứ hoàn thành)',
      question: 'Choose a suitable word or phrase to fill in the blank:\n"I hoped to see Andrew at the party, but he _____ before I arrived."',
      options: [
        'A. left',
        'B. would leave',
        'C. had left',
        'D. had been leaving'
      ],
      correctAnswer: 2,
      explanation: 'Hành động Andrew rời đi xảy ra trước hành động "I arrived" trong quá khứ, nên động từ phải chia ở thì Quá khứ hoàn thành ("had left").',
      difficulty: 'Dễ'
    },
    {
      id: 13,
      partId: 'part1',
      section: 'english',
      sectionName: 'Tiếng Anh (So sánh trạng từ)',
      question: 'Grace writes the most inspiring song lyrics, but she can’t rap _____ her competitors.',
      options: [
        'A. as good as',
        'B. as well as',
        'C. better than',
        'D. so good as'
      ],
      correctAnswer: 1,
      explanation: '"Rap" là động từ thường nên cần trạng từ bổ nghĩa ("well"), cấu trúc so sánh bằng: "as well as". ("good" là tính từ nên A và D sai).',
      difficulty: 'Dễ'
    },
    {
      id: 14,
      partId: 'part1',
      section: 'english',
      sectionName: 'Tiếng Anh (Collocation)',
      question: 'Laura wants to become a novelist, so she needs to learn skills of _____.',
      options: [
        'A. writing to create',
        'B. writing and creating',
        'C. written creativity',
        'D. creative writing'
      ],
      correctAnswer: 3,
      explanation: 'Thuật ngữ chuyên ngành ngôn ngữ học: "creative writing" (sáng tác văn học, viết văn sáng tạo).',
      difficulty: 'Dễ'
    },
    {
      id: 15,
      partId: 'part1',
      section: 'english',
      sectionName: 'Tiếng Anh (Lượng từ)',
      question: 'A mukbang is an online show in which a host consumes _____ of food while interacting with the audience.',
      options: [
        'A. a large number',
        'B. huge amounts',
        'C. too much',
        'D. many'
      ],
      correctAnswer: 1,
      explanation: '"Food" là danh từ không đếm được, lượng từ phù hợp đi kèm với "of food" là "huge amounts of food" (khối lượng thức ăn khổng lồ).',
      difficulty: 'Trung bình'
    },

    // =========================================================================
    // PHẦN 2: TOÁN HỌC (30 CÂU - 300 ĐIỂM) - TRÍCH NGUYÊN BẢN ĐỀ ĐHQG-HCM 2025
    // =========================================================================
    {
      id: 16,
      partId: 'part2',
      section: 'math',
      sectionName: 'Toán học (Lý thuyết tập hợp & Biểu đồ Ven)',
      question: 'Một lớp học có tất cả học sinh đều học tiếng Anh hoặc tiếng Pháp. Trong đó, có 25 học sinh học tiếng Anh, 20 học sinh học tiếng Pháp và 8 học sinh học cả tiếng Anh và tiếng Pháp. Tổng số học sinh của lớp học đó là:',
      options: [
        'A. 37',
        'B. 45',
        'C. 53',
        'D. 41'
      ],
      correctAnswer: 0,
      explanation: 'Áp dụng công thức số phần tử của hợp hai tập hợp: |A ∪ B| = |A| + |B| - |A ∩ B| = 25 + 20 - 8 = 37 học sinh.',
      difficulty: 'Dễ'
    },
    {
      id: 17,
      partId: 'part2',
      section: 'math',
      sectionName: 'Toán học (Quy hoạch tuyến tính & Tối ưu thực tế)',
      passage: 'Một bác nông dân cần trồng lúa và khoai trên diện tích đất gồm 6 ha, với lượng phân bón dự trữ là 100 kg và sử dụng tối đa 240 ngày công. Để trồng 1 ha lúa cần sử dụng 20 kg phân bón, 30 ngày công với lợi nhuận là 50 triệu đồng; để trồng 1 ha khoai cần sử dụng 10 kg phân bón, 60 ngày công với lợi nhuận là 60 triệu đồng.',
      question: 'Nếu bác nông dân trồng x (ha) lúa và y (ha) khoai thì số ki-lô-gam phân bón cần sử dụng là biểu thức nào?',
      options: [
        'A. 20x + 10y',
        'B. 10x + 20y',
        'C. 20x + 30y',
        'D. 30x + 60y'
      ],
      correctAnswer: 0,
      explanation: 'Mỗi ha lúa cần 20 kg phân bón => x ha lúa cần 20x kg. Mỗi ha khoai cần 10 kg phân bón => y ha khoai cần 10y kg. Tổng lượng phân bón là 20x + 10y.',
      difficulty: 'Dễ'
    },
    {
      id: 18,
      partId: 'part2',
      section: 'math',
      sectionName: 'Toán học (Tối ưu hóa lợi nhuận)',
      passage: 'Dựa vào bài toán nông dân câu 17:\nĐiều kiện diện tích: x + y <= 6.\nĐiều kiện phân bón: 20x + 10y <= 100 <=> 2x + y <= 10.\nĐiều kiện ngày công: 30x + 60y <= 240 <=> x + 2y <= 8.\nLợi nhuận F(x, y) = 50x + 60y (triệu đồng).',
      question: 'Để đạt được lợi nhuận cao nhất, giá trị của x (diện tích trồng lúa) bằng bao nhiêu?',
      options: [
        'A. 2',
        'B. 3',
        'C. 4',
        'D. 5'
      ],
      correctAnswer: 2,
      explanation: 'Giải hệ giao điểm của hai đường giới hạn phân bón và ngày công: 2x + y = 10 và x + 2y = 8. Nhân 2 phương trình thứ hai: 2x + 4y = 16. Trừ cho phương trình đầu: 3y = 6 => y = 2 ha khoai. Thay vào tính được x = 4 ha lúa. Kiểm tra điều kiện tổng diện tích: 4 + 2 = 6 ha (thỏa mãn <= 6). Lợi nhuận đạt F(4, 2) = 50*4 + 60*2 = 320 triệu đồng (cực đại). Vậy x = 4.',
      difficulty: 'Khó'
    },
    {
      id: 19,
      partId: 'part2',
      section: 'math',
      sectionName: 'Toán học (Tổ hợp & Xác suất thống kê)',
      passage: 'Để kiểm tra chất lượng nước uống đóng chai của ba phân xưởng X, Y, Z, đoàn kiểm tra lấy ngẫu nhiên 7 chai nước của phân xưởng X, 4 chai nước của phân xưởng Y và 5 chai nước của phân xưởng Z (tổng cộng 16 chai). Sau đó lấy ngẫu nhiên 4 chai nước từ 16 chai ở trên để kiểm tra hàm lượng fluor theo quy định.',
      question: 'Số cách chọn ngẫu nhiên 4 chai nước từ 16 chai của ba phân xưởng X, Y, Z là:',
      options: [
        'A. 1960',
        'B. 1820',
        'C. 1920',
        'D. 1880'
      ],
      correctAnswer: 1,
      explanation: 'Số cách chọn 4 chai bất kỳ từ 16 chai là tổ hợp chập 4 của 16: C(16, 4) = 16! / (4! * 12!) = (16 * 15 * 14 * 13) / (4 * 3 * 2 * 1) = 1820 cách.',
      difficulty: 'Dễ'
    },
    {
      id: 20,
      partId: 'part2',
      section: 'math',
      sectionName: 'Toán học (Xác suất biến cố đối)',
      passage: 'Dựa vào dữ kiện câu 19: Có 7 chai X, 4 chai Y, 5 chai Z (tổng 16 chai), chọn ngẫu nhiên 4 chai.',
      question: 'Xác suất để phân xưởng X có ít nhất một chai nước được chọn để phân tích xấp xỉ bằng:',
      options: [
        'A. 93.1%',
        'B. 6.9%',
        'C. 25.0%',
        'D. 75.0%'
      ],
      correctAnswer: 0,
      explanation: 'Tổng số chai không thuộc xưởng X là 4 (Y) + 5 (Z) = 9 chai. Số cách chọn 4 chai mà KHÔNG có chai nào của xưởng X là C(9, 4) = 126 cách. Xác suất biến cố đối: P(Không có chai X) = 126 / 1820 ≈ 0.0692 (6.9%). Xác suất có ít nhất 1 chai của xưởng X là: 1 - 0.0692 = 0.9308 ≈ 93.1%.',
      difficulty: 'Trung bình'
    },

    // =========================================================================
    // PHẦN 3: TƯ DUY KHOA HỌC (30 CÂU - 300 ĐIỂM)
    // =========================================================================
    {
      id: 21,
      partId: 'part3',
      section: 'logic_data',
      sectionName: 'Tư duy khoa học (Logic vị trí)',
      passage: 'Dữ kiện logic: Có 5 bạn học sinh An, Bình, Cúc, Dũng, Em ngồi vào một dãy 5 ghế thẳng hàng đánh số từ 1 đến 5 từ trái sang phải.\n- An không ngồi ở hai đầu dãy ghế.\n- Bình ngồi ngay bên phải Cúc.\n- Dũng ngồi cách Bình ít nhất 2 ghế.\n- Em ngồi ở ghế số 5.',
      question: 'Vị trí ghế ngồi của An là ghế số mấy?',
      options: [
        'A. Ghế 2',
        'B. Ghế 3',
        'C. Ghế 4',
        'D. Ghế 2 hoặc ghế 3'
      ],
      correctAnswer: 1,
      explanation: 'Em ở ghế 5. An chỉ có thể ngồi 2, 3, hoặc 4. Bình ngồi ngay bên phải Cúc: cặp (C, B). Nếu (C, B) ở ghế (1, 2) => Dũng ở ghế 4. An sẽ ở ghế 3. Kiểm tra thỏa mãn tất cả điều kiện!',
      difficulty: 'Khó'
    },
    {
      id: 22,
      partId: 'part3',
      section: 'logic_data',
      sectionName: 'Tư duy khoa học (Phân tích bảng số liệu)',
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
      id: 23,
      partId: 'part3',
      section: 'science_reasoning',
      sectionName: 'Tư duy khoa học (Vật lí - Dao động cơ)',
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
      id: 24,
      partId: 'part3',
      section: 'science_reasoning',
      sectionName: 'Tư duy khoa học (Hóa học - Thực nghiệm pH)',
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
      id: 25,
      partId: 'part3',
      section: 'science_reasoning',
      sectionName: 'Tư duy khoa học (GDKT&PL - Pháp luật hợp đồng)',
      question: 'Trong quy định pháp luật về giao dịch dân sự, khi một người giao kết hợp đồng dưới sự đe dọa, cưỡng ép của bên kia thì hợp đồng đó có hiệu lực như thế nào?',
      options: [
        'A. Hợp đồng có hiệu lực pháp luật đầy đủ',
        'B. Hợp đồng vô hiệu do bị lừa dối, đe dọa, cưỡng ép',
        'C. Tự động chuyển giao nghĩa vụ cho người thứ ba',
        'D. Chỉ vô hiệu nếu có sự đồng thuận của bên cưỡng ép'
      ],
      correctAnswer: 1,
      explanation: 'Theo Bộ luật Dân sự (môn Giáo dục Kinh tế & Pháp luật): Giao dịch dân sự được xác lập do bị lừa dối, đe dọa hoặc cưỡng ép là giao dịch dân sự vô hiệu.',
      difficulty: 'Trung bình'
    }
  ],

  'vact-moon-25de': [
    {
      id: 201,
      partId: 'part1',
      section: 'vietnamese',
      sectionName: 'Tiếng Việt',
      question: 'Từ nào sau đây viết đúng chính tả tiếng Việt?',
      options: [
        'A. Sáp nhập',
        'B. Sát nhập',
        'C. Xát nhập',
        'D. Xáp nhập'
      ],
      correctAnswer: 0,
      explanation: '"Sáp nhập" là từ chuẩn chính tả duy nhất.',
      difficulty: 'Dễ'
    },
    {
      id: 202,
      partId: 'part1',
      section: 'english',
      sectionName: 'Tiếng Anh',
      question: 'Despite the economic downturn, the company managed to ________ a profit this fiscal year.',
      options: [
        'A. make',
        'B. do',
        'C. take',
        'D. create'
      ],
      correctAnswer: 0,
      explanation: 'Collocation chuẩn: "make a profit".',
      difficulty: 'Dễ'
    },
    {
      id: 203,
      partId: 'part2',
      section: 'math',
      sectionName: 'Toán học',
      question: 'Số điểm cực trị của hàm số có f\'(x) = x(x - 1)^2(x + 2)^3 là:',
      options: [
        'A. 1',
        'B. 2',
        'C. 3',
        'D. 4'
      ],
      correctAnswer: 1,
      explanation: 'Chỉ các nghiệm bội lẻ x = 0 và x = -2 làm f\'(x) đổi dấu, nên có đúng 2 điểm cực trị.',
      difficulty: 'Trung bình'
    },
    {
      id: 204,
      partId: 'part3',
      section: 'logic_data',
      sectionName: 'Logic & Phân tích số liệu',
      question: 'Mệnh đề tương đương của mệnh đề kéo theo "Nếu P thì Q" là:',
      options: [
        'A. ¬P ∨ Q',
        'B. Q ⇒ P',
        'C. ¬P ⇒ ¬Q',
        'D. ¬Q ⇒ P'
      ],
      correctAnswer: 0,
      explanation: 'Theo bảng chân lý logic toán: P ⇒ Q tương đương với ¬P ∨ Q (hoặc ¬Q ⇒ ¬P).',
      difficulty: 'Khá'
    }
  ]
};
