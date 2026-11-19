// Ngân hàng đề thi và câu hỏi chuẩn hóa V-ACT (ĐHQG TP.HCM)
// Cấu trúc chuẩn áp dụng theo Chương trình GDPT 2018:
// - Tổng cộng: 120 câu hỏi trắc nghiệm, 150 phút, thang điểm tối đa 1.200 điểm
// - Chấm theo mô hình IRT, 4 hợp phần x 300 điểm = 1.200 điểm

export const EXAM_LIST = [
  {
    id: 'vact-official-2025',
    title: 'Đề Thi Minh Họa V-ACT 2025 Chính Thức (ĐHQG TP.HCM)',
    year: '2025 - 2026',
    category: 'official',
    type: 'Đề Mẫu Chính Thức',
    durationMinutes: 150,
    totalQuestions: 120,
    description: 'Trích xuất nguyên bản 120 câu hỏi từ Đề thi Mẫu chính thức do Đại học Quốc gia TP.HCM ban hành theo cấu trúc đổi mới GDPT 2018.',
    sections: [
      { name: 'Tiếng Việt', count: 30, score: '300đ' },
      { name: 'Tiếng Anh', count: 30, score: '300đ' },
      { name: 'Toán học', count: 30, score: '300đ' },
      { name: 'Tư duy khoa học', count: 30, score: '300đ' }
    ]
  },
  {
    id: 'vact-moon-de01',
    title: 'Đề Luyện Thi V-ACT Chuyên Sâu Số 01 (Bộ Sách 25 Đề Moon.vn)',
    year: '2025',
    category: 'moon',
    type: 'Đề Moon.vn Tuyển Chọn',
    durationMinutes: 150,
    totalQuestions: 30,
    description: 'Đề thi rèn luyện kỹ năng phân tích ngữ liệu, bài toán thực tế và logic ma trận trích từ tuyển tập 25 đề Moon.vn.',
    sections: [
      { name: 'Tiếng Việt', count: 10, score: '300đ' },
      { name: 'Tiếng Anh', count: 10, score: '300đ' },
      { name: 'Toán học', count: 5, score: '300đ' },
      { name: 'Tư duy khoa học', count: 5, score: '300đ' }
    ]
  },
  {
    id: 'vact-moon-de02',
    title: 'Đề Luyện Thi V-ACT Chuyên Sâu Số 02 (Phân Hóa 900+ Moon.vn)',
    year: '2025',
    category: 'moon',
    type: 'Đề Moon.vn Phân Hóa',
    durationMinutes: 150,
    totalQuestions: 30,
    description: 'Tập trung vào các câu hỏi phân loại cao: toán thực tế tối ưu, xác suất thống kê nâng cao và suy luận khoa học đa môn.',
    sections: [
      { name: 'Tiếng Việt', count: 10, score: '300đ' },
      { name: 'Tiếng Anh', count: 10, score: '300đ' },
      { name: 'Toán học', count: 5, score: '300đ' },
      { name: 'Tư duy khoa học', count: 5, score: '300đ' }
    ]
  },
  {
    id: 'vact-real-2024',
    title: 'Đề Thi ĐGNL ĐHQG-HCM 2024 - Đợt 1 (Đề Chính Thức Tái Hiện)',
    year: '2024',
    category: 'past',
    type: 'Đề Thi Chính Thức',
    durationMinutes: 150,
    totalQuestions: 30,
    description: 'Tái hiện đầy đủ các dạng câu hỏi thực chiến, bẫy từ ngữ và biểu đồ phân tích số liệu xuất hiện trong kỳ thi 2024.',
    sections: [
      { name: 'Tiếng Việt', count: 10, score: '300đ' },
      { name: 'Tiếng Anh', count: 10, score: '300đ' },
      { name: 'Toán học', count: 5, score: '300đ' },
      { name: 'Tư duy khoa học', count: 5, score: '300đ' }
    ]
  },
  {
    id: 'vact-real-2023',
    title: 'Đề Thi ĐGNL ĐHQG-HCM 2023 - Đợt 1 (Đề Kinh Điển)',
    year: '2023',
    category: 'past',
    type: 'Đề Thi Chính Thức',
    durationMinutes: 150,
    totalQuestions: 30,
    description: 'Bộ câu hỏi kinh điển về suy luận vị trí logic, bài toán tối ưu và trích đoạn văn học trung - cận đại.',
    sections: [
      { name: 'Tiếng Việt', count: 10, score: '300đ' },
      { name: 'Tiếng Anh', count: 10, score: '300đ' },
      { name: 'Toán học', count: 5, score: '300đ' },
      { name: 'Tư duy khoa học', count: 5, score: '300đ' }
    ]
  },
  {
    id: 'vact-logic-focus',
    title: 'Đề Chuyên Đề Cấp Tốc: Đột Phá Tư Duy Logic & Phân Tích Số Liệu',
    year: '2025',
    category: 'topic',
    type: 'Luyện Nhanh Chuyên Đề',
    durationMinutes: 60,
    totalQuestions: 22,
    description: 'Rèn luyện phản xạ lập bảng ma trận kẻ ô, đọc nhanh biểu đồ tăng trưởng và giải toán xác suất không bị bẫy.',
    sections: [
      { name: 'Logic suy luận vị trí', count: 12, score: '150đ' },
      { name: 'Phân tích số liệu biểu đồ', count: 10, score: '150đ' }
    ]
  }
];

export const QUESTIONS_DATA = {
  'vact-official-2025': [
  {
    "id": 1,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Cành chọc trời là con đầu\nTên gọi ông Thu Tha\nCành bung xung là con thứ hai\nTên gọi bà Thu Thiên\nHai ông bà nên đôi nên lứa\nTruyền cho:\nCon gà có cựa\nDây dưa biết leo\nTre pheo có gai, có ngọn\nCon người biết nói.”\n(Sử thi dân tộc Mường, Đẻ đất đẻ nước)\nNội dung của văn bản trên là gì?",
    "options": [
      "A. Giải thích nguồn gốc trời và đất.",
      "B. Giải thích đặc điểm các loài.",
      "C. Giải thích nguồn gốc bản làng.",
      "D. Giải thích nguồn gốc phong tục."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 1, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 2,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Đây nói chuyện Ngọc Hoàng, từ lúc mọi công việc kiến thiết vũ trụ đã xong mới bắt đầu nghĩ\nđến chuyện sáng tạo ra vạn vật. Không hiểu Ngọc Hoàng làm như thế nào nhưng chỉ nghe nói rằng ông\nta trước hết dùng những chất cặn còn sót lại trong trời đất, nặn ra đủ mọi giống vật từ những con to lớn\nnhư voi, tê ngưu, cọp đến những vật bé tí như sâu, kiến, bọ, trùng, v.v… Sau đó, Ngọc Hoàng mới gạn lấy\nchất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn. Đó là loài người. Và cũng vì thế mà\nngười ta khôn hơn vạn vật.”\n(Nguyễn Đổng Chi, Mười hai bà mụ)\nChi tiết “Ngọc Hoàng mới gạn lấy chất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn” có\nnghĩa là gì?",
    "options": [
      "A. Loài người là giống loài được sáng tạo một cách công phu từ chất trong, tinh túy.",
      "B. Loài người là giống loài được tạo ra sau cùng và đồng chất với mọi loài, mọi vật.",
      "C. Loài người là một hợp chất trong lành và tinh túy giống như mọi loài, mọi vật.",
      "D. Loài người là sự sáng tạo thông thái của Ngọc Hoàng từ những chất cặn còn sót lại."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 2, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 3,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Tuổi đà ngoại tám mươi già,\nThoắt thoắt xem bằng bóng ngựa qua.\nMai bạc lạnh quen nhiều tháng tuyết,\nCúc vàng thơm đổi mấy phen hoa.\nSang có phận, là ơn chúa,\nĐược làm người, bởi đức cha.\nAm quán ngày nhàn, rồi mọi việc,\nDầu ai tự tại, mặc dầu ta.”\n(Nguyễn Bỉnh Khiêm, Bạch Vân quốc ngữ thi)\nXác định thể thơ của văn bản trên.",
    "options": [
      "A. Thất ngôn xen lục ngôn.",
      "B. Thất ngôn xen ngũ ngôn.",
      "C. Thất ngôn tứ tuyệt.",
      "D. Lục ngôn bát cú."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 3, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 4,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“… Bà phu nhân nói:\n[…] Những cuộc gặp gỡ hiếm lạ, đời nào mà không có: như đền Bạc hậu, như quán Cao đường, như thần\nLạc phố lướt sóng, như nàng Giang Phi cởi ngọc, như Lộng Ngọc lấy Tiêu Sử, như Thái Loan gặp Văn\nTiêu, như Lan Hương gặp Trương Thạc… Bao nhiêu những chuyện cũ còn sờ sờ đó, nếu thế này mà bị\nchê cười thì đã có những người trước ấy họ chịu đỡ tiếng cười cho mình.\nMọi người cùng phá lên cười rất vui vẻ. Rồi đó mặt trời gác núi, các khách khứa đều giải tán cả.”\n(Nguyễn Dữ, Chuyện Từ Thức lấy vợ tiên)\nDòng nào sau đây không thể hiện đặc trưng hình thức nghệ thuật của văn bản trên?",
    "options": [
      "A. Sử dụng biện pháp tu từ nhân hóa.",
      "B. Dùng nhiều điển tích, điển cố.",
      "C. Tổ chức theo cấu trúc biền văn.",
      "D. Sử dụng biện pháp tu từ liệt kê. 4"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 4, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 5,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Ôi!\nTrời Bến Nghé mây mưa sùi sụt, thương đấng anh hùng gặp thuở gian truân, Đất Gò Công cây cỏ ủ ê,\ncảm niềm thần tử mắc nơi họa hại.\nXưa còn làm tướng, dốc rạng dồi hai chữ bình Tây, Nay thác về thần, nên vưng hộ một câu phục thái.\nHỡi ôi thương thay!”\n(Nguyễn Đình Chiểu, Văn tế Trương Định)\nChú thích:\nRạng dồi: làm sáng tỏ, làm rạng rỡ\nVưng hộ: bảo bọc, giúp đỡ\nPhục thái: trở lại thái bình\nDòng nào sau đây không thể hiện cảm xúc và tư tưởng của văn bản?",
    "options": [
      "A. Tiếc thương cho sự hy sinh vì nước vì dân của đấng anh hùng.",
      "B. Cảm thương trước tai họa mà đấng anh hùng mắc phải..",
      "C. Tin vị anh hùng sống làm tướng đánh giặc, thác theo thần giúp đỡ nhân dân.",
      "D. Xót xa cho trời Bến Nghé, đất Gò Công hoang tàn trong cơn binh biến."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 5, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 6,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Đời bộ đội của tôi đã bước những bước đi đầu tiên trong các cánh rừng cằn cỗi vùng Bãi Nai.\nBa tháng trời dãi gió dầm mưa trên thao trường đã giúp chúng tôi gột sạch mọi tàn tích của nếp sống thị\nthành và trụ vững bản thân mình vào đội ngũ. Chúng tôi tập đeo gạch hành quân, tập lăn lê trườn toài,\ntập nín thở bóp cò, tập bám trụ chiến hào, tập vọt tiến tấn công, tập đâm lê, tập quăng lựu đạn, tập nhồi\nbộc phá, tập tuân lệnh chỉ huy và tập bền bỉ chịu khổ.”\n(Bảo Ninh, Đêm trừ tịch)\nNgười kể chuyện trong văn bản trên sử dụng điểm nhìn trần thuật nào?",
    "options": [
      "A. Điểm nhìn của ngôi thứ nhất.",
      "B. Điểm nhìn của ngôi thứ ba toàn tri.",
      "C. Điểm nhìn của ngôi thứ ba hạn tri.",
      "D. Điểm nhìn của ngôi thứ hai."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 6, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 7,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Nhớ cát là nỗi nhớ của tôi\nNhắm mắt lại thấy một màu trắng xóa\nTrơ trụi đen những ngôi nhà lợp cỏ\nGió cát bào tróc vỏ những hàng dương\nKhông tìm đâu lấy một con đường\nChỉ có cát phơi mình dưới nắng\nChỉ có cát nghiêng về phía sóng\nNhư tấm lòng tôi ngóng những thuyền xa”\n(Xuân Quỳnh, Nhớ cát)\nChủ thể trữ tình trong đoạn thơ trên là",
    "options": [
      "A. nỗi nhớ của tôi.",
      "B. cát.",
      "C. tôi.",
      "D. tấm lòng tôi."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 7, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 8,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Nước ở đâu mà tuôn mãi không thôi. Nước rung rào rào trên lá. Nước tràn trên mặt đất. Nước\nchảy theo những thân cây. Rừng ướt sũng, đất ướt sũng, và trời mãi cũng chẳng thấy khô hơn. Mới xế\nchiều mà rừng đã muốn tối om. Rừng như xị ra. Mặt trời vẫn còn đâu đó giữa đường chân trời. Nó đang\nthổi hồng một đám mây màu xám chì, giống như đống trấu ủ giữa sương mù đặc sệt.”\n(Chu Lai, Nắng đồng bằng)\nDòng nào dưới đây chứa các biện pháp tu từ xuất hiện trong văn bản trên?",
    "options": [
      "A. Phép điệp, so sánh, phóng đại. C. Phép điệp, nói giảm, nói tránh, so sánh.",
      "B. C. Phép điệp, nói giảm, nói tránh, so sánh.",
      "C. Phép điệp, nói giảm, nói tránh, so sánh. B. Phép điệp, hoán dụ, so sánh.",
      "D. Phép điệp, so sánh, nhân hóa."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 8, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 9,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Thầy nhạc: Thưa ngài, đáng lẽ ngài phải học âm nhạc, cũng như ngài đang học khiêu vũ.\nĐó là hai ngành nghệ thuật có liên quan chặt chẽ với nhau.\nThầy múa: Và nó mở mang trí não cho con người hiểu biết những cái đẹp.\nÔng Giuốc-đanh: Thế những người sang trọng cũng có học âm nhạc chứ?\nThầy nhạc: Thưa ngài có chứ.\nÔng Giuốc-đanh: Thế thì tôi sẽ học. Nhưng tôi không biết tôi có thể học vào thì giờ nào vì, ngoài thầy\ndạy kiếm thuật đến chỉ dẫn cho tôi, tôi lại còn mướn một thầy dạy triết lý, sáng hôm nay bắt đầu đây.”\n(Mô-li-e, Trưởng giả học làm sang)\nĐoạn đối thoại trên cho thấy mục đích chính khiến ông Giuốc-đanh học âm nhạc là gì?",
    "options": [
      "A. Ông Giuốc-đanh muốn thể hiện niềm đam mê với âm nhạc.",
      "B. Ông Giuốc-đanh muốn mở mang hiểu biết về cái đẹp.",
      "C. Ông Giuốc-đanh muốn trở thành người sang trọng.",
      "D. Ông Giuốc-đanh muốn giỏi âm nhạc như giỏi kiếm thuật và triết lý. 5"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 9, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 10,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Thừa chu thuận thủy vãng Ung Ninh\nHĩnh điếu thuyền lan tự giảo hình\nLưỡng ngạn hương thôn trù mật thậm\nGiang tâm ngư phủ điếu thuyền khinh.”\n(Hồ Chí Minh, Bán lộ tháp thuyền phó Ung)\nDịch thơ:\n“Đáp thuyền thẳng xuống huyện Ung Ninh\nLủng lẳng chân treo tựa giảo hình\nLàng xóm ven sông đông đúc thế\nThuyền câu rẽ sóng nhẹ thênh thênh.”\n(Nam Trân dịch, Giữa đường đáp thuyền đi Ung Ninh)\nDòng nào sau đây không nêu đúng phong cách nghệ thuật của Hồ Chí Minh được biểu hiện trong bài thơ trên?",
    "options": [
      "A. Phong thái ung dung, tự tại.",
      "B. Tinh thần lạc quan, yêu đời.",
      "C. Tính chất bi tráng, hào hùng.",
      "D. Màu sắc cổ điển kết hợp hiện đại."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 10, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 11,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Tôi vừa bỏ học sau sáu học kỳ “dùi kinh nấu sử” ở trường Luật. Suốt thời gian đó, sở thích duy\nnhất của tôi là đọc sách. Tôi có thể đọc ngấu nghiến bất cứ cuốn sách nào vớ được và học thuộc lòng\nnhững bài thơ độc đáo của Thế kỷ vàng Tây Ban Nha. Tôi đã đọc hầu hết các bản dịch cũng như nguyên\nbản các tác phẩm được coi là nổi tiếng lúc bấy giờ và những cuốn sách đó đã cho tôi hiểu được kỹ năng\ncũng như các tiểu xảo cần có khi viết tiểu thuyết.”\n(Gabriel Garcia Marquez, Sống để kể lại)\nNội dung của văn bản trên là gì?",
    "options": [
      "A. Niềm đam mê học Luật và lối học “dùi kinh nấu sử” ở người viết.",
      "B. Niềm đam mê đọc sách và tình yêu văn chương ở người viết.",
      "C. Niềm đam mê sáng tác thơ ca và tiểu thuyết ở người viết.",
      "D. Niềm đam mê đọc các bản dịch và nguyên tác ở người viết."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 11, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 12,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Dòng nào sau đây nêu tên những tác phẩm cùng phong cách sáng tác của trường phái văn học\nhiện thực?",
    "options": [
      "A. Tắt đèn (Ngô Tất Tố), Số đỏ (Vũ Trọng Phụng), Chí Phèo (Nam Cao).",
      "B. Chữ người tử tù (Nguyễn Tuân), Giông tố (Vũ Trọng Phụng), Lão Hạc (Nam Cao).",
      "C. Hai đứa trẻ (Thạch Lam), Tắt đèn (Ngô Tất Tố), Số đỏ (Vũ Trọng Phụng).",
      "D. Lão Hạc (Nam Cao), Số đỏ (Vũ Trọng Phụng), Chữ người tử tù (Nguyễn Tuân)."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 12, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 13,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Dòng nào dưới đây có các từ viết đúng chính tả?",
    "options": [
      "A. Sai xót, sơ suất, sừng sộ.",
      "B. Sai xót, sơ xuất, sừng sộ.",
      "C. Sai sót, sơ xuất, sừng xộ.",
      "D. Sai sót, sơ suất, sừng sộ."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 13, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 14,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Câu nào dưới đây chứa từ viết sai chính tả?",
    "options": [
      "A. Sở Giao thông Vận tải kiến nghị xây kè chống sạt lở hai đoạn bờ sông ở thành phố này.",
      "B. Những chính sách đó quá xa vời thực tế, quá viễn vông nên rất khó được phê duyệt.",
      "C. Trầm cảm là kẻ thù giấu mặt đối với sức khỏe tinh thần lẫn thể chất của con người.",
      "D. Anh Phụng và nhóm bạn đã dành năm ngày để đi bộ đến hồ axit lớn nhất thế giới."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 14, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 15,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Theo tôi, đó là lối giáo dục đứng đắn, đích thực của việc dạy; người dạy sẽ làm đúng vai trò của\nmình hơn, nhất là biết khiêm cung hơn.”\nTừ nào bị dùng sai trong câu trên?",
    "options": [
      "A. đứng đắn.",
      "B. đích thực.",
      "C. vai trò.",
      "D. khiêm cung."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 15, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 16,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Những mái nhà đơn sơ, giản dị nơi thâm sâu cùng cốc của tỉnh Lào Cai nằm sát bên mép núi.”\nXác định lỗi sai trong câu trên.",
    "options": [
      "A. Sai về dùng từ.",
      "B. Sai ngữ pháp.",
      "C. Sai quy chiếu.",
      "D. Sai logic."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 16, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 17,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Câu nào dưới đây là câu đúng?",
    "options": [
      "A. Sự đồng hành, bên cạnh lẫn nhau là minh chứng rõ nhất cho tình yêu sâu đậm.",
      "B. Giải pháp này như cứu cánh nhóm chúng tôi trong lúc bế tắc.",
      "C. Yếu điểm của tôi vẫn là sự thiếu tự tin khi đứng trước đám đông.",
      "D. Qua đó, ta càng thấy học vấn uyên bác và tầm nhìn xa rộng của anh."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 17, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 18,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Để đánh dấu bước ngoặt mới về phát triển thị trường tại các quốc gia Đông Nam Á”.\nCâu trên là câu chưa hoàn chỉnh vì thiếu thành phần nào sau đây?",
    "options": [
      "A. Thiếu chủ ngữ.",
      "B. Thiếu vị ngữ.",
      "C. Thiếu trạng ngữ.",
      "D. Thiếu nòng cốt câu. 6"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 18, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 19,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Chúng tôi đã thảo luận về dự án này hai lần: một lần vào năm ngoái, một lần ngay tại văn\nphòng đại diện của công ti ở phía Nam.”\nNhận định nào về câu trên là đúng?",
    "options": [
      "A. Câu sai logic ngữ nghĩa.",
      "B. Câu mắc lỗi dùng từ.",
      "C. Câu sai cấu tạo ngữ pháp.",
      "D. Câu mắc lỗi dấu câu."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 19, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 20,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Chỉ ra câu sai trong các câu sau:",
    "options": [
      "A. Do tình cảm chân thành, gần gũi của các anh chị khiến Khang gắn bó với nhóm hơn.",
      "B. Nhờ có những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn.",
      "C. Những tình cảm chân thành, gần gũi của các anh chị làm cho Khang gắn bó với nhóm hơn.",
      "D. Đáp lại những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn. Dựa vào thông tin dưới đây để trả lời các câu từ 21 đến 25 Biến đổi khí hậu đang được dự báo sẽ làm gia tăng hạn hán, qua đó làm trầm trọng thêm tình trạng xâm nhập mặn ở Đồng bằng sông Cửu Long (ĐBSCL). Vậy sự kết hợp giữa hai yếu tố này sẽ tác động trực tiếp như thế nào đến sự tồn tại của nông dân ĐBSCL, những người chủ yếu có sinh kế phụ thuộc vào việc trồng lúa? M. A. van Aalst và các cộng sự ở Trường Kinh doanh và Kinh tế, Đại học Vrije Amsterdam, đã đặt câu hỏi này vào cả vùng ĐBSCL và xem xét mức độ tổn thương ở các mức quy mô khác nhau, cả cấp quận, cấp xã và cấp hộ gia đình. Giải thích vì sao lại chọn ĐBSCL, các nhà nghiên cứu cho rằng đây là điểm nóng về ảnh hưởng của biến đổi khí hậu và môi trường. Trong cả thập kỷ qua, vùng này đã trải qua những thay đổi môi trường ở tốc độ nhanh và chậm, như nước biển dâng, lũ lụt, xâm nhập mặn và hạn hán trong khi nguồn sống của 75% cư dân phụ thuộc vào nông nghiệp. Sản phẩm nông nghiệp chiếm vị thế chủ đạo của ĐBSCL là lúa, vốn dễ bị ảnh hưởng bởi điều kiện thời tiết khắc nghiệt. Họ tập trung vào giai đoạn 2015-2016, khi cả đồng bằng phải gánh chịu đợt hạn hán khốc liệt nhất trong lịch sử, đồng thời còn phải trong cảnh dòng chảy từ thượng nguồn xuống thấp hơn 65 đến 70% so với trung bình hằng năm. Sử dụng các mô hình tính toán, họ phát hiện ra mức độ dễ bị tổn thương ở cấp độ huyện và xã có những điểm khác biệt. Ở cấp huyện, mặc dù có mối liên hệ giữa nghèo đói và thất thu vụ mùa nhưng không có chỉ dấu trực tiếp giữa sự phơi nhiễm xâm nhập mặn với nghèo đói, mặc dù thông thường xâm nhập mặn sẽ góp phần làm giảm năng suất thu hoạch với tỉ lệ xấp xỉ 21%. Ở cấp xã, mối liên hệ này thể hiện tương đối rõ nét. Các xã nghèo hơn và bị xâm nhập mặn nhiều hơn đều phải hứng chịu cảnh bị mất mát mùa vụ ở mức cao trong cùng năm. Do đó, các cộng đồng nghèo sẽ có mức độ tổn thương do tác động trực tiếp của môi trường cao hơn, điều vẫn còn chưa thể hiện rõ ở cấp huyện. Ở cấp hộ gia đình, các hộ sống trong khu vực nghèo sẽ phải đối mặt với khả năng mất mùa cao hơn. Mối quan hệ này chứng tỏ hiệu ứng này thậm chí còn mạnh hơn ở những nơi chịu xâm nhập mặn cao, chỉ dấu là những hộ sống ở khu vực thịnh vượng hơn đều có năng lực thích ứng tốt hơn. Các mô hình cũng cho thấy mức độ rủi ro cao hơn ở cấp hộ gia đình có liên quan đáng kể với mức độ giáo dục thấp hơn, tài sản thấp hơn và quy mô canh tác nhỏ hơn. (Theo Anh Vũ, Tính dễ bị tổn thương và khó phục hồi của nông dân ĐBSCL trong hạn hán)"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 20, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 21,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Bao nhiêu % cư dân ĐBSCL có nguồn sống phụ thuộc vào nông nghiệp?",
    "options": [
      "A. 21%.",
      "B. 65-70%.",
      "C. 50%.",
      "D. 75%."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 21, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 22,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Vì sao nhóm nghiên cứu chọn ĐBSCL là địa phương để khảo sát biến đổi khí hậu?",
    "options": [
      "A. Vì ĐBSCL là một đồng bằng quan trọng của cả nước.",
      "B. Vì ĐBSCL là điểm nóng về ảnh hưởng của biến đổi khí hậu và môi trường.",
      "C. Vì ĐBSCL có mức độ tổn thương ở các mức quy mô khác nhau.",
      "D. Vì ĐBSCL gánh chịu đợt hạn hán khốc liệt nhất trong giai đoạn 2015-2016."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 22, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 23,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Những tác động của biến đổi khí hậu đến với môi trường sinh thái ĐBSCL là gì?",
    "options": [
      "A. Nước biển dâng, lũ lụt, xâm nhập mặn và hạn hán.",
      "B. Xói mòn, lũ lụt, hạn hán và hiệu ứng nhà kính.",
      "C. Phơi nhiễm xâm nhập mặn và giảm đa dạng sinh học.",
      "D. Xói mòn, hạn hán, nước biển dâng và xâm nhập mặn. 7"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 23, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 24,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Ở cấp huyện, mặc dù có mối liên hệ giữa nghèo đói và thất thu vụ mùa nhưng không có chỉ dấu\ntrực tiếp giữa sự phơi nhiễm xâm nhập mặn với nghèo đói, mặc dù thông thường xâm nhập mặn sẽ góp\nphần làm giảm năng suất thu hoạch với xấp xỉ 21%”.\nCụm từ “Ở cấp huyện” trong câu trên là thành phần gì của câu?",
    "options": [
      "A. Khởi ngữ.",
      "B. Trạng ngữ.",
      "C. Vị ngữ.",
      "D. Chủ ngữ."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 24, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 25,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Chủ đề chính của văn bản trên là gì?",
    "options": [
      "A. Những biểu hiện của biến đổi khí hậu ở ĐBSCL.",
      "B. Hậu quả của hiện tượng xâm nhập mặn ở ĐBSCL.",
      "C. Ảnh hưởng của biến đổi khí hậu đến thiên nhiên ĐBSCL.",
      "D. Ảnh hưởng của biến đổi khí hậu đến đời sống người dân ĐBSCL. Dựa vào thông tin dưới đây để trả lời các câu từ 26 đến 30 Càng chung sống lâu năm với nghề viết, tôi càng tin rằng văn chương nói riêng và nghệ thuật nói chung không nhằm và cũng không có khả năng phản ánh cuộc đời y như nguyên trạng (1). Ngay cả nhiếp ảnh là nghệ thuật gần với sự trung thực nhất cũng không thể phản ánh được mặt sau của quả táo (2). Nhưng ngay cả khi có thể mô tả cuộc đời như nó vốn là, văn chương cũng từ chối làm điều đó (3). Bởi nếu vậy, văn chương sẽ không có lí do để tồn tại: người đọc khôn ngoan sẽ đọc trực tiếp trong cuộc đời thay vì nhìn vào trang sách (4). Suy cho cùng, thế giới mà người đọc tìm thấy và muốn thấy trong những trang văn bao giờ cũng là thế giới đã được lọc qua tâm hồn của người viết; đó là thế giới đã được nhà văn tháo ra và lắp lại theo một cấu trúc và tỉ lệ hoàn toàn khác (5). Thông qua cung cách thiết kế cái thế giới văn chương đó, nhà văn gửi đi những thông điệp và tìm kiếm sự chia sẻ (6). Những thông tin đủ loại của đời thường, đã có báo chí, đài truyền hình và bà hàng xóm cung cấp (7). Người đọc thông minh bao giờ cũng chờ đợi ở những trang văn một hiện thực khác - một hiện thực cao hơn so với hiện thực ngoài kia (8). (Nguyễn Nhật Ánh, Cảm ơn người lớn)"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 25, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 26,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Càng … càng…” ở câu (1) của văn bản trên thể hiện mối quan hệ gì giữa các thành phần câu?",
    "options": [
      "A. Nhân quả.",
      "B. Chính phụ.",
      "C. Hô ứng.",
      "D. Đẳng lập."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 26, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 27,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Từ “cung cách” trong câu (6) có nghĩa là gì?",
    "options": [
      "A. Cách thức giao tiếp giữa con người với con người.",
      "B. Cách thức thể hiện thái độ ứng xử của con người.",
      "C. Cách thức con người suy tư, hồi tưởng về quá khứ.",
      "D. Cách thức tiến hành sự việc có thể quan sát được."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 27, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 28,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Với cách diễn đạt “một hiện thực cao hơn so với hiện thực ngoài kia” trong câu (8), tác giả đã sử\ndụng biện pháp tu từ gì?",
    "options": [
      "A. Liệt kê.",
      "B. Nhân hóa.",
      "C. Chơi chữ.",
      "D. Chêm xen."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 28, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 29,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Ý nào sau đây không được đề cập trong văn bản trên?",
    "options": [
      "A. Văn chương phản ánh đa dạng hiện thực đời sống.",
      "B. Nhiếp ảnh cũng không thể phản ánh đầy đủ hiện thực đời sống.",
      "C. Nhà văn luôn tìm kiếm sự chia sẻ thông qua tác phẩm.",
      "D. Người đọc thông minh xem văn chương là hiện thực đời sống."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 29, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 30,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Quan điểm của người viết thể hiện trong văn bản trên là gì?",
    "options": [
      "A. Văn chương không nhằm và không có khả năng phản ánh đời sống như nguyên trạng.",
      "B. Văn chương hướng đến sự mô tả trung thực và đầy đủ về cuộc đời như nó vốn là.",
      "C. Văn chương có lí do tồn tại riêng của nó: phục vụ cho độc giả thông minh.",
      "D. Văn chương có cách thiết kế tương đồng với cấu trúc và tỉ lệ của hiện thực đời sống. 1.2. TIẾNG ANH Questions 31-35: Choose a suitable word or phrase (A, B, C, or D) to fill in each blank."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 30, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 31,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "Before you end your presentation, you need to run _____ all of the key points again.",
    "options": [
      "A. over",
      "B. into",
      "C. about",
      "D. with"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 31, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 32,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "I hoped to see Andrew at the party, but he _____ before I arrived.",
    "options": [
      "A. left",
      "B. would leave",
      "C. had left",
      "D. had been leaving"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 32, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 33,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "Grace writes the most inspiring song lyrics, but she can’t rap _____ her competitors.",
    "options": [
      "A. as good as",
      "B. as well as",
      "C. better than",
      "D. so good as 8"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 33, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 34,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "Laura wants to become a novelist, so she needs to learn skills of _____.",
    "options": [
      "A. writing to create",
      "B. writing and creating",
      "C. written creativity",
      "D. creative writing"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 34, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 35,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "A mukbang is an online show in which a host consumes _____ of food while interacting with the\naudience.",
    "options": [
      "A. a large number",
      "B. huge amounts",
      "C. too much",
      "D. many Questions 36-40: Each of the following sentences has one error (A, B, C, or D). Find it and blacken your choice on your answer sheet."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 35, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 36,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "I ate the loaf of bread for breakfast, but it kept me going until the late afternoon.\nA B C D",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 36, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 37,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "Yoghurt, one of the healthiest snacks, are advised for people with daily calcium needs.\nA B C D",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 37, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 38,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "My student told me that out of the four IELTS’s skills, writing is not his strength.\nA B C D",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 38, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 39,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "The little Nikolas is so excited since she will have an outing next Friday for some photoshots.\nA B C D",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 39, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 40,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "Tom’s work as a college admissions officer, who is part-time, brings him some social skills.\nA B C D\nQuestions 41-45: Which of the following best restates each of the given sentences?",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 40, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 41,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "Jack said, “Daisy, I think you’d better go to the dentist’s tomorrow.”",
    "options": [
      "A. Jack told Daisy to go to a better dentist the next day.",
      "B. Jack advised Daisy to visit a dentist the following day.",
      "C. Jack told Daisy that he thought it was better to see a dentist.",
      "D. Jack said to Daisy about his going to the dentist’s the day after."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 41, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 42,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "There was a terrible fire due to difficult access for the fire fighters.",
    "options": [
      "A. The fire fighters would have had easy access if the fire had not been terrible.",
      "B. The fire would not be so terrible if the fire fighters had easy access.",
      "C. Unless the fire was controlled, the fire fighters could not have access.",
      "D. If the fire fighters had had easy access, the fire would have been controlled."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 42, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 43,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "This chocolate box is sweet, but the other two boxes are too sweet.",
    "options": [
      "A. Of the three chocolate boxes, this box is the least sweet.",
      "B. The other two chocolate boxes are less sweet than this box.",
      "C. No other chocolate is sweeter than this box of chocolate.",
      "D. One of the three boxes of chocolate is too sweet to eat."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 43, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 44,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "Attention! Reduce the heat so as not to burn the food.",
    "options": [
      "A. Reduce the heat quickly so that you can burn the food.",
      "B. If you reduce the heat, the food would not be burnt.",
      "C. The heat must be reduced so that the food is not burnt.",
      "D. The food will be burnt quickly if the heat is reduced."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 44, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 45,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "The tourist island is losing its customers possibly because of its prices.",
    "options": [
      "A. It is possible that customers will not come to the expensive tourist island.",
      "B. The tourist island’s possible loss of customers is due to its high prices.",
      "C. Prices may be a reason for the current loss of customers on the tourist island.",
      "D. The tourist island will increase its prices, causing a loss of customers. Questions 46-52: Read the passage carefully. 1. The world of rap music has been going through some big changes lately. It is not like it used to be, and that is a positive change. Taking a close look at how rap culture is evolving will enable us to understand the current transformations. 2. Rap music is not just coming from one place anymore. It is like a big party where everyone is invited. Rappers from different backgrounds are making their own unique sounds. Some tell profound stories about where they are from, and others create songs that inspire the audience to dance. This mix of styles is what makes rap culture so exciting today. 9 3. Rappers also care about important social issues, among which are fairness and justice. They use their songs to talk about things like racism, police attacks, and money problems. When big movements like Black Lives Matter started, many rappers stood up and supported the cause. They want to make the world better through their music. 4. Fashion is an important theme in rap culture, too. Rappers are like fashion leaders. These performers work with big brands and wear stylish clothes to advertise for them. What they wear can become a trend for lots of people. It is not just about looking good; it is about showing your special style. 5. Social media, like Instagram and TikTok, is a big part of rap culture today. Rappers can talk to their fans directly and show what they are doing. It is like having a chat with your favorite artist. They use these apps to share their music and connect with people who love it. 6. While there are some things that could be better about the current rap culture, it cannot be denied that rap music is delighting our world. If listeners are less critical of its inappropriate language expressions here and there, they can see that rap music is a powerful force that can inspire and bring people together. Choose an option (A, B, C, or D) that best answers each question."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 45, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 46,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "What is the passage mainly about?",
    "options": [
      "A. Declining quality of current rap music",
      "B. How rap culture has shaped youths’ lives",
      "C. Positive differences in today’s rap music",
      "D. Rap culture as an inspiring social force"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 46, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 47,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "According to paragraph 2, what does the word others refer to?",
    "options": [
      "A. rappers",
      "B. backgrounds",
      "C. sounds",
      "D. stories"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 47, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 48,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "In paragraph 2, which of the following is NOT a characteristic of rappers today?",
    "options": [
      "A. Their diverse styles motivate rap listeners.",
      "B. They create their distinctive music sounds.",
      "C. They have great storytelling skills.",
      "D. They invite everyone to a big party."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 48, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 49,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "In paragraph 3, what is the word cause closest in meaning to?",
    "options": [
      "A. reason",
      "B. motive",
      "C. principle",
      "D. origin"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 49, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 50,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "In paragraph 4, why are rappers compared with fashion leaders?",
    "options": [
      "A. They advertise successfully for many big brands.",
      "B. Many people can imitate their stylish clothes.",
      "C. They are stylists for many other performers.",
      "D. They wear clothes with special colors and fabrics."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 50, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 51,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "In paragraph 5, what can be inferred about rap culture today?",
    "options": [
      "A. It could not attract the audience without social media.",
      "B. It is more successful on Instagram and Tiktok.",
      "C. It is considerably dependent on social media.",
      "D. It is more interactive due to the use of social media"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 51, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 52,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "According to paragraph 6, which of the following is a limitation of today’s rap music?",
    "options": [
      "A. its lyrics",
      "B. its beats",
      "C. its sounds",
      "D. its styles Questions 53-60: Read the passage carefully. 1. SARS, Ebola, and SARS-CoV-2: all three of these highly infectious viruses have caused global panic since 2002, and all three of them jumped to humans from wild animals living in dense tropical forests that we are slashing and burning to create land for crops and housing. The more we clear, the more we come into contact with wildlife which hosts illnesses likely transferred to humans. 2. Stopping deforestation will not only reduce natural disasters but also control the spread of a long list of dangerous diseases that have come from rain forest habitats, including Zika, Nipah, malaria, cholera, HIV, and so on. A 2019 study found that a 10 percent increase in deforestation would raise malaria cases by 3.3 percent; that would be 7.4 million people worldwide. Meanwhile, an average of 28 million hectares of forest have been cut down annually since 2016, and there is no sign of a slowdown. 3. Societies can take numerous steps to prevent the destruction. Eating less meat, which improves our health anyway, will lessen demand for crops and pastures. Eating fewer processed foods will reduce the demand for palm oil, much of which is grown on land from tropical rain forests. Producing more food per hectare can boost supply without the need for more land. 4. In the meantime, governments should prohibit the sale of live wild animals in so-called wet markets, where disease-causing agents have repeatedly crossed over into humans. The markets may be culturally important, but the risk is too great. Governments must also ban illegal wildlife trade, 10 which can spread infectious agents far and wide. In addition, authorities must examine factory farms that pack thousands of animals together – the source of the 2009 swine flu outbreak that killed more than 10,000 people in the U.S. and many more people worldwide. 5. Hopefully, ending deforestation and preventing pandemics can guarantee healthy lives, zero hunger, gender equality, responsible consumption and production, sustainably managed land, and climate action. The COVID-19 pandemic is a catastrophe, but it calls for our attention on the human achievements by not overexploiting the natural world. Choose an option (A, B, C, or D) that best answers each question."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 52, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 53,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "The best title of the passage can be _____.",
    "options": [
      "A. Causes and Effects of Many Pandemics in History",
      "B. Being Vegans to Protect the World from Pandemics",
      "C. Deforestation As a Causative Factor of Most Pandemics",
      "D. Ways to Save the World from Coming Pandemics"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 53, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 54,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "The phrase The more in paragraph 1 refers to _____.",
    "options": [
      "A. wild animals",
      "B. tropical forests",
      "C. land",
      "D. crops and housing"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 54, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 55,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "In paragraph 1, wildlife _____.",
    "options": [
      "A. causes many deadly diseases in humans",
      "B. contains most dangerous illnesses",
      "C. may transmit causative agents to humans",
      "D. likes to come into contact with humans"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 55, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 56,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "In paragraph 2, the word spread can be replaced by _____.",
    "options": [
      "A. start",
      "B. infection",
      "C. extension",
      "D. restriction"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 56, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 57,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "In paragraph 2, it is NOT mentioned that _____.",
    "options": [
      "A. Zika and HIV are among diseases coming from rain forests",
      "B. malaria is found by a study to be linked to deforestation",
      "C. 7.4 million people worldwide had malaria in 2019",
      "D. deforestation has not reduced its rate since the year of 2016"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 57, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 58,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "In paragraph 3, the author uses the word anyway in order to _____.",
    "options": [
      "A. confirm a secondary effect",
      "B. contrast two causes",
      "C. exemplify a solution",
      "D. list all of the consequences"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 58, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 59,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "It can be inferred from paragraph 4 that in wet markets, _____.",
    "options": [
      "A. wildlife cannot be sold",
      "B. cultural impacts are great",
      "C. losses outweigh gains",
      "D. animals are not sold dead"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 59, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 60,
    "partId": "part1",
    "section": "english",
    "sectionName": "Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu)",
    "question": "It can be seen in paragraphs 2, 3, and 4 that _____.",
    "options": [
      "A. while plants can be well preserved, wild animals are hard to controlled",
      "B. it may be not too late if humans stop killing living things in nature",
      "C. humans’ killing of wild animals is more dangerous than that of plants",
      "D. humans destroy plants and animals, so they will end up destroying themselves PHẦN 2. TOÁN HỌC"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 60, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tiếng Anh (Ngữ pháp, Từ vựng & Đọc hiểu) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 61,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Một lớp học có tất cả học sinh đều học tiếng Anh hoặc tiếng Pháp. Trong đó, có 25 học sinh học\ntiếng Anh, 20 học sinh học tiếng Pháp và 8 học sinh học cả tiếng Anh và tiếng Pháp. Tổng số học sinh\ncủa lớp học đó là:",
    "options": [
      "A. 37.",
      "B. 45.",
      "C. 53.",
      "D. 41."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 61, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 62,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Đặt\t27 8 2\tlog 5, log 7, log 3.\t= = =\ta b c\t Khi đó\t12\tlog 35\t bằng\nA.3 3 .\n1\n+\n+\nac b\nc B.2 3 .\n3\n+\n+\nac b\nc C.3 3 .\n2\n+\n+\nac b\nc D.2 3 .\n2\n+\n+\nac b\nc",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 62, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 63,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Biết rằng2\nlim ( 1 ) 2.\nx ax bx x\n→+ + + − =\t Giá trị củaP ab\t=\t là:",
    "options": [
      "A. 4.\tP =",
      "B. 2.\tP =",
      "C. 1.\tP =",
      "D. 1.\tP = −"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 63, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 64,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Cho hàm số2\n( ) 2 2 1.\tf x x x\t= − +\t Đạo hàm của hàm số tại\t1\tx =\t là:\nA.\t'(1) 1.\tf =\t B.\t'(1) 2.\tf =\t C.\t'(1) 1.\tf = −\t D.1\n'(1) .\n2\nf =\n\n\n11",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 64, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 65,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Cho hàm số\t( )\ty f x\t=\t xác định trên và có3 5\n'( ) ( 1) ( 2) .\tf x x x x\t= + −\t Số điểm cực tiểu của\nhàm số là:",
    "options": [
      "A. 1.",
      "B. 2.",
      "C. 3.",
      "D. 4."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 65, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 66,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Số đường tiệm cận của đồ thị hàm số\n2\n2\n4 3\n4\nx x\ny x\n− +\n= − là:",
    "options": [
      "A. 1.",
      "B. 2.",
      "C. 3.",
      "D. 4. Dựa vào thông tin dưới đây để trả lời các câu từ 67 đến 69 Cho hàm số3 2 ( ) 2 3( 1) 6 1,\tf x x m x mx\t= − + + +\t với m là tham số thực."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 66, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 67,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Với m = 3, giá trị lớn nhất của hàm số\t( )\ty f x\t trên đoạn [0; 3] là:",
    "options": [
      "A. 5.",
      "B. 9.",
      "C. 11.",
      "D. 17."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 67, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 68,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Hàm số\t( )\ty f x\t nghịch biến trên khoảng (1; 3) khi và chỉ khi",
    "options": [
      "A. 1.\tm",
      "B. 1.\tm",
      "C. 3.\tm",
      "D. 3.\tm"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 68, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 69,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Đường thẳng\t1\ty =\t cắt đồ thị hàm số\t( )\ty f x\t tại hai điểm phân biệt có hoành độ lớn hơn 2 khi\nvà chỉ khi",
    "options": [
      "A. 3.\tm",
      "B. 3.\tm",
      "C. 9.\tm",
      "D. 9.\tm Dựa vào thông tin dưới đây để trả lời các câu từ 70 đến 71 Cho cấp số cộng( )\tn\tu\t xác định bởi2 6 3 7 18 22. u u u u"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 69, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 70,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Ta có công sai của cấp số cộng( )\tn\tu\t là:",
    "options": [
      "A. 2.\td",
      "B. 2.\td",
      "C. 3.\td",
      "D. 3.\td"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 70, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 71,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Ta có3 2\nlim 2 3\nn\tu\nn bằng\nA.3 .\n2 B.2 .\n3 C.3.\t D.6.\nDựa vào thông tin dưới đây để trả lời các câu từ 72 đến 73\nMột bác nông dân cần trồng lúa và khoai trên diện tích đất gồm 6 ha, với lượng phân bón dự trữ là\n100 kg và sử dụng tối đa 240 ngày công. Để trồng 1 ha lúa cần sử dụng 20 kg phân bón, 30 ngày công với\nlợi nhuận là 50 triệu đồng; để trồng 1 ha khoai cần sử dụng 10 kg phân bón, 60 ngày công với lợi nhuận\nlà 60 triệu đồng.",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 71, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 72,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Nếu bác nông dân trồng x (ha) lúa và y (ha) khoai thì số ki-lô-gam phân bón cần sử dụng là:\nA.20 10 .\tx y\t B.10 20 .\tx y\t C.20 30 .\tx y\t D.30 60 .\tx y",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 72, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 73,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Để đạt được lợi nhuận cao nhất, bác nông dân đã trồng x (ha) lúa và y (ha) khoai. Giá trị của x là:",
    "options": [
      "A. 2.",
      "B. 3.",
      "C. 4.",
      "D. 5. Dựa vào thông tin dưới đây để trả lời các câu từ 74 đến 75 Cho phương trình9 2 .3 3 4 0.x x m m"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 73, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 74,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Khi\t5,\tm = −\t tổng tất cả các nghiệm của phương trình là:",
    "options": [
      "A. 0.",
      "B. 1.",
      "C. 10.\t−",
      "D. 3."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 74, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 75,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Phương trình có hai nghiệm phân biệt khi và chỉ khi:",
    "options": [
      "A. 4.\tm ",
      "B. 4.\tm ",
      "C. 1\tm  −\t hoặc\t4.\tm ",
      "D. 0.\tm  Dựa vào thông tin dưới đây để trả lời các câu từ 76 đến 77 Cho bất phương trình\t2\tlog (5 1) .x m"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 75, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 76,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Khi m = 2, tập nghiệm của bất phương trình là:\nA.( ;1].\t−\t B.(0;1].\t C.( ;1).\t−\t D.[0;1].",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 76, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 77,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Gọi S là tập tất cả các giá trị nguyên của m sao cho bất phương trình có đúng 3 nghiệm nguyên.\nSố phần tử của S là:",
    "options": [
      "A. 0.",
      "B. 1.",
      "C. 2.",
      "D. 3. 12 Dựa vào thông tin dưới đây để trả lời các câu từ 78 đến 80 Để kiểm tra chất lượng nước uống đóng chai của ba phân xưởng X, Y, Z, đoàn kiểm tra lấy ngẫu nhiên 7 chai nước của phân xưởng X, 4 chai nước của phân xưởng Y và 5 chai nước của phân xưởng Z. Sau đó lấy ngẫu nhiên 4 chai nước từ 16 chai ở trên để kiểm tra hàm lượng fluor theo quy định."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 77, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 78,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Số cách chọn 4 chai nước từ 16 chai của ba phân xưởng X, Y, Z để phân tích là:",
    "options": [
      "A. 1960.",
      "B. 1820.",
      "C. 1920.",
      "D. 1880."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 78, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 79,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Xác suất để cả ba phân xưởng X, Y, Z đều có chai nước được chọn để phân tích là:",
    "options": [
      "A. 33,3%.",
      "B. 66,7%.",
      "C. 25,0%.",
      "D. 50,0%."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 79, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 80,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Xác suất để phân xưởng X có ít nhất một chai nước được chọn để phân tích là:",
    "options": [
      "A. 93,1%.",
      "B. 6,9%.",
      "C. 25,0%.",
      "D. 75,0%. Dựa vào thông tin dưới đây để trả lời các câu từ 81 đến 82 Cho tam giác ABC có độ dài các cạnh là\t5, 6, 7.\tAB BC CA\t= = ="
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 80, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 81,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Giá trị của\t.\tAB AC\t là:",
    "options": [
      "A. 19.",
      "B. 6.",
      "C. 30.",
      "D. 55."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 81, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 82,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Độ dài đường cao kẻ từ A của tam giác ABC là:",
    "options": [
      "A. 2 6.\ta\th =",
      "B. 6.\ta\th =",
      "C. 2 3.\ta\th =",
      "D. 2 2.\ta\th = Dựa vào thông tin dưới đây để trả lời các câu từ 83 đến 84 Trong mặt phẳng Oxy, cho tam giác ABC có phương trình đường cao AD là\t3 6 0,\tx y\t− − =\t phương trình đường cao BE là3 10 0,\tx y\t− − =\t phương trình cạnh AB là\t2 0.\tx y\t− − ="
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 82, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 83,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Tung độ của điểm A là:",
    "options": [
      "A. 0.\tA\ty =",
      "B. 2.\tA\ty = −",
      "C. 1.\tA\ty =",
      "D. 1.\tA\ty = −"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 83, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 84,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Phương trình đường cao kẻ từ C là:",
    "options": [
      "A. 4 0.\tx y\t− − =",
      "B. 4 0.\tx y\t− + =",
      "C. 2 0.\tx y\t+ − =",
      "D. 2 0.\tx y\t+ + = Dựa vào thông tin dưới đây để trả lời các câu từ 85 đến 87 Cho hình chóp tứ giác đều S.ABCD có cạnh đáy bằng 2a, khoảng cách giữa hai đường thẳng SA và CD bằng\t3.\ta"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 84, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 85,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Gọi O là tâm của đáy. Khoảng cách từ O đến mặt phẳng (SAB) bằng:\nA.3 .\n3\na B.3 .\n2\na C.\t3.\ta\t D.2 3.\ta",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 85, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 86,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Thể tích của khối chóp S.ABCD bằng:",
    "options": [
      "A. 3 6 . 3 a",
      "B. 3 3 . 3 a",
      "C. 3 4 3 . 3 a",
      "D. 3 4 6 . 3 a"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 86, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 87,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Góc giữa hai đường thẳng SA và CD xấp xỉ bằng:\nA.o\n70 29'.\t B.o\n26 34'.\t C.o\n19 31'.\t D.o\n63 26'.\nDựa vào thông tin dưới đây để trả lời các câu từ 88 đến 90\nTrong không gian với hệ tọa độ Oxyz, cho điểm\t(2; 2; 3)\tA\t và hai mặt phẳng\n( ) : 2 2 0,\tP x y z\t( ) : 2 0.\tQ x y z",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 87, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 88,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Khoảng cách từ điểm A đến mặt phẳng (P) bằng:",
    "options": [
      "A. 3.",
      "B. 4.",
      "C. 2.",
      "D. 6."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 88, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 89,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Mặt phẳng đi qua A và vuông góc với (P) và (Q) có phương trình:",
    "options": [
      "A. 6 4 2 0.\tx y z",
      "B. 6 4 2 0.\tx y z",
      "C. 6 4 22 0.\tx y z",
      "D. 6 4 26 0.\tx y z"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 89, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 90,
    "partId": "part2",
    "section": "math",
    "sectionName": "Toán học (Đại số, Hình học & Bài toán thực tế)",
    "question": "Gọi d là đường thẳng đi qua A và song song với (P), (Q). Điểm M nào sau đây thuộc d?",
    "options": [
      "A. (1; 4;7).\tM",
      "B. (1;4; 7).\tM",
      "C. (3;8; 1).\tM",
      "D. (3;8;1).\tM 13 PHẦN 3. TƯ DUY KHOA HỌC 3.1. LOGIC, PHÂN TÍCH SỐ LIỆU Dựa vào thông tin dưới đây để trả lời các câu từ 91 đến 94 Trong một cuộc thi Olympic, năm giải thưởng cao nhất được trao cho các học sinh M, N, P, Q, R. Dưới đây là các thông tin của buổi trao giải: - N hoặc Q đạt giải tư. - R đạt giải cao hơn M. - P không đạt giải ba."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 90, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 91,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Danh sách nào dưới đây có thể là thứ tự các học sinh đạt giải, từ giải nhất đến giải năm?",
    "options": [
      "A. M, P, N, Q, R.",
      "B. P, R, N, M, Q.",
      "C. N, P, R, Q, M.",
      "D. Q, M, R, N, P."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 91, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 92,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Nếu Q đạt giải năm thì M sẽ đạt giải nào?",
    "options": [
      "A. Giải nhất.",
      "B. Giải nhì.",
      "C. Giải ba.",
      "D. Giải tư."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 92, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 93,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Nếu M đạt giải nhì thì phát biểu nào sau đây có thể sai?",
    "options": [
      "A. N không đạt giải ba.",
      "B. P không đạt giải nhất.",
      "C. P không đạt giải tư.",
      "D. Q không đạt giải nhất."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 93, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 94,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Nếu P đạt giải cao hơn N đúng 2 bậc thì phát biểu nào sau đây nêu đầy đủ và chính xác danh\nsách các học sinh có thể đạt giải nhì?",
    "options": [
      "A. P.",
      "B. M, R.",
      "C. P, R.",
      "D. M, P, R. Dựa vào thông tin dưới đây để trả lời các câu từ 95 đến 98 Một đoàn khảo sát thực địa gồm 3 giáo viên là R, S, T; 3 học sinh nữ là J, K, L và 2 học sinh nam là N, O; mỗi người được đi trên một trong 3 xe ô tô và thoả mãn các điều kiện sau: - Mỗi xe chỉ chở tối đa 3 người. - Mỗi xe phải có 1 giáo viên. - O và S phải ngồi cùng một xe. - K và L không ngồi cùng một xe. - N và R không ngồi cùng một xe."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 94, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 95,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Điều nào sau đây không thể đúng trong cách sắp xếp người ngồi trên các xe?",
    "options": [
      "A. K và S có thể ngồi cùng một xe. C. N và S có thể ngồi cùng một xe.",
      "B. C. N và S có thể ngồi cùng một xe.",
      "C. N và S có thể ngồi cùng một xe. B. L và R có thể ngồi cùng một xe.",
      "D. O và T có thể ngồi cùng một xe."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 95, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 96,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Nếu O ngồi cùng xe với K thì những người nào phải ngồi cùng xe với nhau?",
    "options": [
      "A. O và N.",
      "B. J và T.",
      "C. N và K.",
      "D. N và T."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 96, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 97,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Nếu L và R ngồi cùng xe thì người nào có thể ngồi cùng xe với L và R?",
    "options": [
      "A. J.",
      "B. K.",
      "C. T.",
      "D. O."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 97, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 98,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Nếu N ngồi cùng xe với S thì câu nào sau đây phải đúng?",
    "options": [
      "A. J ngồi trên xe có 3 người.",
      "B. L ngồi trên xe có 2 người.",
      "C. K ngồi cùng xe với O.",
      "D. J ngồi cùng xe với N. Dựa vào thông tin dưới đây để trả lời các câu từ 99 đến 102 Bảng sau thể hiện tỉ lệ nam/nữ ở 5 tỉnh có tỉ lệ cao nhất toàn quốc trong năm 2021 TT Tỉnh Tổng số (người) Nam (người) Nữ (người) Tỉ lệ (nam/nữ) 1 Đắk Nông 622.168 320.713 301.455 1,064 2 Lạng Sơn 781.655 399.410 382.245 1,045 3 Bắc Kạn 313.905 160.036 153.869 1,040 4 Quảng Ninh 1.320.324 671.522 648.802 1,035 5 Lào Cai 730.420 371.306 359.114 1,034"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 98, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 99,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Tỉ lệ nam/nữ trung bình của cả 5 tỉnh là?",
    "options": [
      "A. 1,022.",
      "B. 1,042.",
      "C. 1,055.",
      "D. 1,061."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 99, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 100,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Biết rằng tỉnh Kiên Giang đứng thứ 6 với tỉ lệ chênh lệch nam/nữ là 1,028, đồng thời biết rằng\ntỉnh Kiên Giang có 873.236 nam. Hỏi dân số tỉnh Kiên Giang xấp xỉ bao nhiêu?",
    "options": [
      "A. 1.723.000.",
      "B. 1.842.000.",
      "C. 1.932.000.",
      "D. 2.012.000. 14"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 100, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 101,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Ở tỉnh Đắk Nông, theo thống kê về độ tuổi năm 2021, tỉ lệ chênh lệch nam/nữ lớn nhất là 1,217\nở độ tuổi 20-24. Biết rằng dân số ở độ tuổi 20-24 chiếm 7,15% tổng dân số toàn tỉnh. Hỏi dân số là nam\ngiới ở độ tuổi 20-24 của tỉnh Đắk Nông bằng khoảng bao nhiêu?",
    "options": [
      "A. 19.450.",
      "B. 20.340.",
      "C. 22.410.",
      "D. 24.420."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 101, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 102,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Biết rằng Cà Mau có tổng dân số bằng 31,7% tổng dân số của 5 tỉnh ở bảng trên. Số nam giới ở\nCà Mau nhiều hơn số trung bình nam giới của cả 5 tỉnh 57,28%. Tính tỉ lệ nam/nữ của tỉnh Cà Mau.",
    "options": [
      "A. 1,012.",
      "B. 1,019.",
      "C. 1,026.",
      "D. 1,035. 3.2. SUY LUẬN KHOA HỌC Dựa vào thông tin dưới đây để trả lời các câu từ 103 đến 105 Năng lượng tự do Gibbs (G) là năng lượng của phản ứng hóa học và có thể thực hiện công có ích. Ở nhiệt độ và áp suất không đổi (p = 1 bar), biến thiên năng lượng tự do của phản ứng ΔrG° (kJ) được tính theo công thức sau: ΔrG° = ΔrH° – TΔrS°. T là nhiệt độ (K). Trong đó: ΔrH° (kJ) và ΔrS° (J/K) lần lượt là biến thiên enthalpy và entropy của phản ứng. Phản ứng tỏa nhiệt thì ΔrH° có giá trị âm còn phản ứng thu nhiệt thì ΔrH° có giá trị dương. Dấu của ΔrG° được dùng để dự đoán chiều hướng xảy ra của một phản ứng hóa học. Nếu ΔrG° âm thì phản ứng tự xảy ra, còn nếu ΔrG° dương thì phản ứng không tự xảy ra."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 102, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 103,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Để một phản ứng không tự xảy ra ở mọi nhiệt độ thì",
    "options": [
      "A. ΔrHo > 0 và ΔrSo < 0.",
      "B. ΔrHo < 0 và ΔrSo < 0.",
      "C. ΔrHo > 0 và ΔrSo > 0.",
      "D. ΔrHo < 0 và ΔrSo > 0."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 103, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 104,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Biến thiên enthalpy và entropy của phản ứng 2SO2(g) + O2(g) → 2SO3(g) ở 25oC lần lượt là\nrHo = −198 kJ và rSo = −187 J/K. Hãy cho biết giá trị của Go thay đổi như thế nào khi tăng nhiệt độ\nvà ở trên hay dưới khoảng nhiệt độ nào thì phản ứng không xảy ra tự nhiên được? Giả sử giá trị enthalpy\nvà entropy của phản ứng không thay đổi theo nhiệt độ.",
    "options": [
      "A. Go tăng; T< 1059 K.",
      "B. Go tăng; T> 1059 K.",
      "C. Go giảm; T< 1059 K.",
      "D. Go giảm; T> 1059 K."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 104, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 105,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Xét phản ứng sau: CaCO3(s) → CaO(s) + CO2(g)\nGiả sử giá trị enthalpy và entropy của phản ứng không thay đổi theo nhiệt độ. Mối liên hệ giữa ΔrG°\nvà T (K) của phản ứng trên như sau:\nHãy chọn nhận xét sai:",
    "options": [
      "A. Phản ứng trên là phản ứng thu nhiệt và có thể tự xảy ra ở nhiệt độ trên 1110 K.",
      "B. Phản ứng trên không xảy ra ở nhiệt độ phòng nhưng có thể tự xảy ra ở nhiệt độ trên 1110 K.",
      "C. Phản ứng trên là phản ứng thu nhiệt và không tự xảy ra ở nhiệt độ phòng.",
      "D. Phản ứng trên là phản ứng tỏa nhiệt và tự xảy ra ở nhiệt độ phòng. 15 Dựa vào thông tin dưới đây để trả lời các câu từ 106 đến 108 Năng lượng riêng Es là lượng năng lượng được tạo ra từ một đơn vị khối lượng của nhiên liệu: Es = E/m (với E (J) là năng lượng và m (kg) là khối lượng của nhiên liệu). Năng lượng riêng của than là 3,200.107 J/kg. Than là nguồn năng lượng không tái tạo và phát thải nhiều khí CO2 gây ra hiệu ứng nhà kính nhất (thải ra 8,200.102 g CO2 để tạo 1,000 kWh điện năng). Biết một nhà máy điện than có công suất 1,244.103 MW và hiệu suất 40,00% (chỉ có 40,00% năng lượng tạo ra từ than chuyển thành điện năng)."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 105, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 106,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Cho các phát biểu sau:\n(I). Than là nguồn năng lượng tái tạo.\n(II). Đơn vị của năng lượng riêng là J/kg.\n(III). Nhà máy điện than trên sẽ thải ra 1,020.103 tấn khí CO2 mỗi giờ.\n(IV). Công suất hao phí của nhà máy điện than ở trên là 7,464.102 MW.\nTheo bài đọc, các phát biểu đúng là:",
    "options": [
      "A. (I), (II), (III).",
      "B. (II), (III), (IV).",
      "C. (II), (IV).",
      "D. (II), (III)."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 106, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 107,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Điện năng mà nhà máy này tạo ra trong một giờ là",
    "options": [
      "A. 1,244.106 kWh.",
      "B. 1,244.103 kWh.",
      "C. 4,976.105 kWh.",
      "D. 4,976.102 kWh."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 107, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 108,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Khối lượng than cần sử dụng trong nhà máy này trong một ngày là",
    "options": [
      "A. 2,333 tấn.",
      "B. 3,359.103 tấn.",
      "C. 8,397.103 tấn.",
      "D. 1,343.103 tấn. Dựa vào thông tin dưới đây để trả lời các câu từ 109 đến 111 Dựa vào phản ứng nở hoa của thực vật với quang chu kì, thực vật được chia làm ba nhóm. Thực vật ngày dài như thanh long, xà lách ra hoa khi thời gian ban đêm ngắn hơn độ dài đêm tới hạn. Thực vật ngày ngắn như cúc, mía ra hoa khi thời gian ban đêm dài hơn độ dài đêm tới hạn. Thực vật trung tính như cà chua, hướng dương, lúa nước ra hoa không phụ thuộc vào độ dài thời gian chiếu sáng trong ngày. Một nghiên cứu trồng thanh long dưới ánh sáng tự nhiên ngày ngắn (số giờ sáng trong ngày là 10,5 giờ) và có hoặc không có chiếu sáng nhân tạo bằng đèn vào ban đêm. Ba lô thí nghiệm được trồng trong các điều kiện tương tự nhau. Ở lô thí nghiệm 1, cây được chiếu sáng liên tục từ khi mặt trời lặn đến khi mặt trời mọc vào sáng hôm sau. Ở lô thí nghiệm 2, cây được chiếu sáng từ lúc 0 giờ với tổng số giờ chiếu sáng khác nhau trong đêm. Lô đối chứng cây không được chiếu sáng vào ban đêm. Tỉ lệ ra hoa trung bình ở các lô thí nghiệm sau 20 ngày được trình bày trong bảng dưới đây: Điều kiện chiếu sáng bổ sung Không chiếu sáng Số giờ chiếu sáng vào ban đêm (giờ) Chiếu sáng liên tục\t0,5 1 2 3 4 5 Tỉ lệ ra hoa (%) 0 0 12 51 79 90 99 99"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 108, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 109,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Trong tự nhiên để điều khiển cây thanh long ra hoa đồng loạt vào thời điểm ngày ngắn, cần\nphải chiếu sáng đèn từ 0 giờ và tắt đèn vào thời điểm nào sau đây?",
    "options": [
      "A. 0 giờ 30 phút.",
      "B. 1 giờ 30 phút.",
      "C. 2 giờ 10 phút.",
      "D. 5 giờ 10 phút."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 109, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 110,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Một loài thực vật ngày ngắn có độ dài đêm tới hạn là 09 giờ, được trồng trong chu kì sáng tối là\n24 giờ. Điều kiện chiếu sáng nào sau đây kích thích cây trưởng thành ra hoa?",
    "options": [
      "A. 10 giờ tối/24 giờ.",
      "B. 16 giờ sáng/24 giờ.",
      "C. 08 giờ tối/24 giờ.",
      "D. 19 giờ sáng/24 giờ."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 110, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 111,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Loài thực vật nào sau đây được xếp vào nhóm cây ngày dài?",
    "options": [
      "A. Cây ké đầu ngựa (Xanthium Strumarium) chỉ ra hoa khi chiếu sáng tối đa là 16 giờ hoặc ít hơn.",
      "B. Cây Jusquiame (Hyoscyamus niger) ra hoa khi điều kiện chiếu sáng tối thiểu là 11,5 giờ.",
      "C. Cây thuốc lá (Nicotiana tabacum) chỉ ra hoa khi chiếu sáng tối đa là 14 giờ hoặc ít hơn.",
      "D. Cây cà chua có đủ 14 cặp lá có thể ra hoa khi chiếu sáng tối thiểu là 12 giờ hoặc nhiều hơn. Dựa vào thông tin dưới đây để trả lời các câu từ 112 đến 114 Tháng 7/2023, xuất nhập khẩu hàng hóa Việt Nam ước đạt 57,21 tỉ USD, tăng 2,5% so với tháng trước, xuất siêu tiếp tục tăng cao. Cán cân thương mại hàng hóa 7 tháng năm 2023 ước tính xuất siêu 15,23 tỉ USD - một con số kỉ lục của cán cân thương mại hàng hóa 7 tháng từ trước đến nay. Đây là những con số cho thấy hoạt động này tiếp tục có các dấu hiệu tích cực… Về xuất khẩu hàng hóa, trong tháng 7, hoạt động xuất khẩu hàng hóa tiếp tục có những tín hiệu tích cực khi tăng 0,8% so với tháng trước, là tháng có kim ngạch xuất khẩu cao thứ hai kể từ đầu năm đến nay 16 (chỉ thấp hơn kim ngạch xuất khẩu của tháng 3/2023). Như vậy, kim ngạch xuất khẩu hàng hóa tiếp tục có xu hướng tháng sau tăng so với tháng trước (sau khi giảm vào tháng 4/2023)… Đối với hoạt động nhập khẩu, nhu cầu hàng hóa của thế giới giảm đã ảnh hưởng không nhỏ đến kim ngạch nhập khẩu hàng hóa, nguyên liệu phục vụ sản xuất đơn hàng xuất khẩu của nước ta. Tuy nhiên, nhờ những tín hiệu tích cực trong sản xuất công nghiệp và xuất khẩu trong tháng 7 nên kim ngạch nhập khẩu hàng hóa tháng 7/2023 ước đạt 27,53 tỉ USD, tăng 4,4% so với tháng trước. (Nguồn: Tóm lược theo Tổng Cục Thống kê Việt Nam)"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 111, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 112,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Trong 7 tháng đầu năm 2023, nước ta đạt kim ngạch xuất khẩu cao nhất vào tháng nào?",
    "options": [
      "A. Tháng 3.",
      "B. Tháng 4.",
      "C. Tháng 5.",
      "D. Tháng 7."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 112, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 113,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Cán cân thương mại hàng hóa được được tính bằng",
    "options": [
      "A. Trị giá xuất khẩu - Trị giá nhập khẩu.",
      "B. Trị giá xuất khẩu + Trị giá nhập khẩu.",
      "C. Trị giá xuất khẩu x Trị giá nhập khẩu.",
      "D. Trị giá xuất khẩu : Trị giá nhập khẩu."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 113, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 114,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Kim ngạch nhập khẩu hàng hóa tháng 6/2023 ước đạt",
    "options": [
      "A. 26,37 tỉ USD.",
      "B. 28,74 tỉ USD.",
      "C. 19,12 tỉ USD.",
      "D. 19,95 tỉ USD. Dựa vào thông tin dưới đây để trả lời các câu từ 115 đến 117 Chuyển mình sang giai đoạn phát triển mới, ngày 31/12/2015, ASEAN chính thức thành lập Cộng đồng ASEAN nhằm xây dựng một Cộng đồng hướng tới người dân, lấy người dân làm trung tâm, trên nền tảng pháp lí là Hiến chương ASEAN và Tầm nhìn Cộng đồng ASEAN năm 2025. Thực hiện Tầm nhìn Cộng đồng ASEAN năm 2025, ASEAN tập trung triển khai các kế hoạch tổng thể trên cả 3 trụ cột gồm Chính trị - An ninh, Kinh tế và Văn hóa - Xã hội; mở rộng và làm sâu sắc quan hệ đối ngoại, củng cố vai trò trung tâm của ASEAN trong cấu trúc khu vực đang định hình, đồng thời tăng cường kết nối và thu hẹp khoảng cách phát triển. Trong bối cảnh địa chính trị khu vực và thế giới có những biến động phức tạp, ASEAN lại chuẩn bị Tầm nhìn Cộng đồng ASEAN sau năm 2025; nỗ lực này được đánh dấu bằng Tuyên bố của các nhà lãnh đạo ASEAN về định hướng Tầm nhìn Cộng đồng ASEAN sau năm 2025. Đây là sáng kiến do Việt Nam đề xuất và đã được thông qua tại Hội nghị cấp cao ASEAN lần thứ 37 (tháng 11/2020) trong nhiệm kỳ Việt Nam làm Chủ tịch ASEAN năm 2020. (Nguồn: special.nhandan.vn)"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 114, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 115,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Ở thời điểm năm 2020, ASEAN đang triển khai thực hiện Tầm nhìn đến",
    "options": [
      "A. năm 2015.",
      "B. năm 2020.",
      "C. năm 2025.",
      "D. sau năm 2025."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 115, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 116,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Mục tiêu tổng quát của cộng đồng ASEAN là:",
    "options": [
      "A. hoạt động trên nền tảng pháp lí là Hiến chương ASEAN.",
      "B. hướng đến Tầm nhìn ASEAN năm 2025.",
      "C. hướng tới người dân, lấy người dân làm trung tâm.",
      "D. củng cố vai trò trung tâm của ASEAN trong cấu trúc khu vực."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 116, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 117,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Củng cố vai trò trung tâm của ASEAN trong cấu trúc khu vực đang định hình là nội dung được\nxác định thuộc trụ cột nào trong Tầm nhìn Cộng đồng ASEAN năm 2025?",
    "options": [
      "A. Chính trị - An ninh.",
      "B. Kinh tế.",
      "C. Văn hóa - Xã hội.",
      "D. Cả 3 trụ cột trên. Dựa vào thông tin dưới đây để trả lời các câu từ 118 đến 120 “Khảo sát của Navigos Group cho thấy 68,7% doanh nghiệp chọn cách cắt giảm nhân sự để ứng phó với những biến động của thị trường; gần 53% ngưng tuyển dụng nhằm cắt giảm chi phí, duy trì hoạt động. Bên cạnh đó, gần 47% doanh nghiệp tăng cường đào tạo chuyên môn và kỹ năng mềm cho nhân viên để nâng cao năng suất, hiệu quả làm việc; hơn 43% doanh nghiệp chọn giải pháp điều chuyển nội bộ để phát huy tối đa năng lực của người lao động, qua đó tìm kiếm những nhân tố mới cho những vị trí cần lấp đầy mà không phải tuyển mới. Đáng chú ý, trên 59% doanh nghiệp được khảo sát cho biết sẽ tuyển dụng thêm nhân sự mới trong năm 2024. Khác với những năm trước, năm nay doanh nghiệp sẽ ưu tiên tuyển dụng nhân sự có kỹ năng giải quyết vấn đề tốt, ứng viên đã có từ 1 đến 3 năm kinh nghiệm, kinh nghiệm quản lý...” (Nguồn: Báo Người Lao Động) 17"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 117, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 118,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Theo trích đoạn trên, tại sao nhiều doanh nghiệp chọn tăng cường đào tạo chuyên môn và kỹ năng\nmềm cho nhân viên?",
    "options": [
      "A. Để tiết kiệm chi phí tuyển dụng.",
      "B. Để phát huy tối đa năng lực của nhân viên và tăng năng suất.",
      "C. Để thay thế nhân sự hiện tại bằng những nhân sự mới.",
      "D. Để cắt giảm số lượng nhân viên không đạt yêu cầu."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 118, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 119,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Dựa trên khảo sát của Navigos Group, nhận định nào sau đây là chính xác nhất khi nói về cách\ntiếp cận xây dựng và phát triển nhân sự của doanh nghiệp trong giai đoạn 2023-2024?",
    "options": [
      "A. Doanh nghiệp đang điều chỉnh chiến lược để cân bằng giữa việc phát triển kỹ năng nội bộ và bổ sung nhân sự có kỹ năng cần thiết để đối phó với sự thay đổi trong thị trường.",
      "B. Doanh nghiệp tập trung hoàn toàn vào việc giảm chi phí nhân sự và cắt giảm các hoạt động đào tạo để tối ưu hóa lợi nhuận.",
      "C. Doanh nghiệp dự định cắt giảm chi phí đào tạo bằng cách tuyển dụng nhiều nhân sự hơn với kinh nghiệm từ 5 năm trở lên ngay từ đầu.",
      "D. Doanh nghiệp sẽ ngừng hoàn toàn việc đào tạo nội bộ và chỉ dựa vào việc tuyển dụng nhân sự mới để đáp ứng nhu cầu công việc."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 119, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 120,
    "partId": "part3",
    "section": "science_reasoning",
    "sectionName": "Tư duy khoa học: Suy luận khoa học tình huống",
    "question": "Trong bối cảnh doanh nghiệp tiếp cận xây dựng và phát triển nhân sự theo cách đã phân tích và\nmô tả qua khảo sát của Navigos Group, bạn nên làm gì để tăng cơ hội được tuyển dụng?",
    "options": [
      "A. Tham gia các buổi tư vấn tuyển dụng của các công ti tư vấn nghề nghiệp.",
      "B. Tập trung xây dựng mối quan hệ với các nhà tuyển dụng tiềm năng.",
      "C. Tìm kiếm công việc trong các lĩnh vực đang có nhu cầu cao.",
      "D. Tập trung phát triển các kỹ năng chuyên môn và kỹ năng mềm."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 120, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Suy luận khoa học tình huống để chọn đáp án chính xác.",
    "difficulty": "Khó"
  }
],
  'vact-moon-de01': [
  {
    "id": 201,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Cành chọc trời là con đầu\nTên gọi ông Thu Tha\nCành bung xung là con thứ hai\nTên gọi bà Thu Thiên\nHai ông bà nên đôi nên lứa\nTruyền cho:\nCon gà có cựa\nDây dưa biết leo\nTre pheo có gai, có ngọn\nCon người biết nói.”\n(Sử thi dân tộc Mường, Đẻ đất đẻ nước)\nNội dung của văn bản trên là gì?",
    "options": [
      "A. Giải thích nguồn gốc trời và đất.",
      "B. Giải thích đặc điểm các loài.",
      "C. Giải thích nguồn gốc bản làng.",
      "D. Giải thích nguồn gốc phong tục."
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 1: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 202,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Đây nói chuyện Ngọc Hoàng, từ lúc mọi công việc kiến thiết vũ trụ đã xong mới bắt đầu nghĩ\nđến chuyện sáng tạo ra vạn vật. Không hiểu Ngọc Hoàng làm như thế nào nhưng chỉ nghe nói rằng ông\nta trước hết dùng những chất cặn còn sót lại trong trời đất, nặn ra đủ mọi giống vật từ những con to lớn\nnhư voi, tê ngưu, cọp đến những vật bé tí như sâu, kiến, bọ, trùng, v.v… Sau đó, Ngọc Hoàng mới gạn lấy\nchất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn. Đó là loài người. Và cũng vì thế mà\nngười ta khôn hơn vạn vật.”\n(Nguyễn Đổng Chi, Mười hai bà mụ)\nChi tiết “Ngọc Hoàng mới gạn lấy chất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn” có\nnghĩa là gì?",
    "options": [
      "A. Loài người là giống loài được sáng tạo một cách công phu từ chất trong, tinh túy.",
      "B. Loài người là giống loài được tạo ra sau cùng và đồng chất với mọi loài, mọi vật.",
      "C. Loài người là một hợp chất trong lành và tinh túy giống như mọi loài, mọi vật.",
      "D. Loài người là sự sáng tạo thông thái của Ngọc Hoàng từ những chất cặn còn sót lại."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 2: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 203,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Tuổi đà ngoại tám mươi già,\nThoắt thoắt xem bằng bóng ngựa qua.\nMai bạc lạnh quen nhiều tháng tuyết,\nCúc vàng thơm đổi mấy phen hoa.\nSang có phận, là ơn chúa,\nĐược làm người, bởi đức cha.\nAm quán ngày nhàn, rồi mọi việc,\nDầu ai tự tại, mặc dầu ta.”\n(Nguyễn Bỉnh Khiêm, Bạch Vân quốc ngữ thi)\nXác định thể thơ của văn bản trên.",
    "options": [
      "A. Thất ngôn xen lục ngôn.",
      "B. Thất ngôn xen ngũ ngôn.",
      "C. Thất ngôn tứ tuyệt.",
      "D. Lục ngôn bát cú."
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 3: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 204,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“… Bà phu nhân nói:\n[…] Những cuộc gặp gỡ hiếm lạ, đời nào mà không có: như đền Bạc hậu, như quán Cao đường, như thần\nLạc phố lướt sóng, như nàng Giang Phi cởi ngọc, như Lộng Ngọc lấy Tiêu Sử, như Thái Loan gặp Văn\nTiêu, như Lan Hương gặp Trương Thạc… Bao nhiêu những chuyện cũ còn sờ sờ đó, nếu thế này mà bị\nchê cười thì đã có những người trước ấy họ chịu đỡ tiếng cười cho mình.\nMọi người cùng phá lên cười rất vui vẻ. Rồi đó mặt trời gác núi, các khách khứa đều giải tán cả.”\n(Nguyễn Dữ, Chuyện Từ Thức lấy vợ tiên)\nDòng nào sau đây không thể hiện đặc trưng hình thức nghệ thuật của văn bản trên?",
    "options": [
      "A. Sử dụng biện pháp tu từ nhân hóa.",
      "B. Dùng nhiều điển tích, điển cố.",
      "C. Tổ chức theo cấu trúc biền văn.",
      "D. Sử dụng biện pháp tu từ liệt kê. 4"
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 4: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 205,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Ôi!\nTrời Bến Nghé mây mưa sùi sụt, thương đấng anh hùng gặp thuở gian truân, Đất Gò Công cây cỏ ủ ê,\ncảm niềm thần tử mắc nơi họa hại.\nXưa còn làm tướng, dốc rạng dồi hai chữ bình Tây, Nay thác về thần, nên vưng hộ một câu phục thái.\nHỡi ôi thương thay!”\n(Nguyễn Đình Chiểu, Văn tế Trương Định)\nChú thích:\nRạng dồi: làm sáng tỏ, làm rạng rỡ\nVưng hộ: bảo bọc, giúp đỡ\nPhục thái: trở lại thái bình\nDòng nào sau đây không thể hiện cảm xúc và tư tưởng của văn bản?",
    "options": [
      "A. Tiếc thương cho sự hy sinh vì nước vì dân của đấng anh hùng.",
      "B. Cảm thương trước tai họa mà đấng anh hùng mắc phải..",
      "C. Tin vị anh hùng sống làm tướng đánh giặc, thác theo thần giúp đỡ nhân dân.",
      "D. Xót xa cho trời Bến Nghé, đất Gò Công hoang tàn trong cơn binh biến."
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 5: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 206,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Đời bộ đội của tôi đã bước những bước đi đầu tiên trong các cánh rừng cằn cỗi vùng Bãi Nai.\nBa tháng trời dãi gió dầm mưa trên thao trường đã giúp chúng tôi gột sạch mọi tàn tích của nếp sống thị\nthành và trụ vững bản thân mình vào đội ngũ. Chúng tôi tập đeo gạch hành quân, tập lăn lê trườn toài,\ntập nín thở bóp cò, tập bám trụ chiến hào, tập vọt tiến tấn công, tập đâm lê, tập quăng lựu đạn, tập nhồi\nbộc phá, tập tuân lệnh chỉ huy và tập bền bỉ chịu khổ.”\n(Bảo Ninh, Đêm trừ tịch)\nNgười kể chuyện trong văn bản trên sử dụng điểm nhìn trần thuật nào?",
    "options": [
      "A. Điểm nhìn của ngôi thứ nhất.",
      "B. Điểm nhìn của ngôi thứ ba toàn tri.",
      "C. Điểm nhìn của ngôi thứ ba hạn tri.",
      "D. Điểm nhìn của ngôi thứ hai."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 6: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 207,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Nhớ cát là nỗi nhớ của tôi\nNhắm mắt lại thấy một màu trắng xóa\nTrơ trụi đen những ngôi nhà lợp cỏ\nGió cát bào tróc vỏ những hàng dương\nKhông tìm đâu lấy một con đường\nChỉ có cát phơi mình dưới nắng\nChỉ có cát nghiêng về phía sóng\nNhư tấm lòng tôi ngóng những thuyền xa”\n(Xuân Quỳnh, Nhớ cát)\nChủ thể trữ tình trong đoạn thơ trên là",
    "options": [
      "A. nỗi nhớ của tôi.",
      "B. cát.",
      "C. tôi.",
      "D. tấm lòng tôi."
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 7: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 208,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Nước ở đâu mà tuôn mãi không thôi. Nước rung rào rào trên lá. Nước tràn trên mặt đất. Nước\nchảy theo những thân cây. Rừng ướt sũng, đất ướt sũng, và trời mãi cũng chẳng thấy khô hơn. Mới xế\nchiều mà rừng đã muốn tối om. Rừng như xị ra. Mặt trời vẫn còn đâu đó giữa đường chân trời. Nó đang\nthổi hồng một đám mây màu xám chì, giống như đống trấu ủ giữa sương mù đặc sệt.”\n(Chu Lai, Nắng đồng bằng)\nDòng nào dưới đây chứa các biện pháp tu từ xuất hiện trong văn bản trên?",
    "options": [
      "A. Phép điệp, so sánh, phóng đại. C. Phép điệp, nói giảm, nói tránh, so sánh.",
      "B. C. Phép điệp, nói giảm, nói tránh, so sánh.",
      "C. Phép điệp, nói giảm, nói tránh, so sánh. B. Phép điệp, hoán dụ, so sánh.",
      "D. Phép điệp, so sánh, nhân hóa."
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 8: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 209,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Thầy nhạc: Thưa ngài, đáng lẽ ngài phải học âm nhạc, cũng như ngài đang học khiêu vũ.\nĐó là hai ngành nghệ thuật có liên quan chặt chẽ với nhau.\nThầy múa: Và nó mở mang trí não cho con người hiểu biết những cái đẹp.\nÔng Giuốc-đanh: Thế những người sang trọng cũng có học âm nhạc chứ?\nThầy nhạc: Thưa ngài có chứ.\nÔng Giuốc-đanh: Thế thì tôi sẽ học. Nhưng tôi không biết tôi có thể học vào thì giờ nào vì, ngoài thầy\ndạy kiếm thuật đến chỉ dẫn cho tôi, tôi lại còn mướn một thầy dạy triết lý, sáng hôm nay bắt đầu đây.”\n(Mô-li-e, Trưởng giả học làm sang)\nĐoạn đối thoại trên cho thấy mục đích chính khiến ông Giuốc-đanh học âm nhạc là gì?",
    "options": [
      "A. Ông Giuốc-đanh muốn thể hiện niềm đam mê với âm nhạc.",
      "B. Ông Giuốc-đanh muốn mở mang hiểu biết về cái đẹp.",
      "C. Ông Giuốc-đanh muốn trở thành người sang trọng.",
      "D. Ông Giuốc-đanh muốn giỏi âm nhạc như giỏi kiếm thuật và triết lý. 5"
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 9: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 210,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Thừa chu thuận thủy vãng Ung Ninh\nHĩnh điếu thuyền lan tự giảo hình\nLưỡng ngạn hương thôn trù mật thậm\nGiang tâm ngư phủ điếu thuyền khinh.”\n(Hồ Chí Minh, Bán lộ tháp thuyền phó Ung)\nDịch thơ:\n“Đáp thuyền thẳng xuống huyện Ung Ninh\nLủng lẳng chân treo tựa giảo hình\nLàng xóm ven sông đông đúc thế\nThuyền câu rẽ sóng nhẹ thênh thênh.”\n(Nam Trân dịch, Giữa đường đáp thuyền đi Ung Ninh)\nDòng nào sau đây không nêu đúng phong cách nghệ thuật của Hồ Chí Minh được biểu hiện trong bài thơ trên?",
    "options": [
      "A. Phong thái ung dung, tự tại.",
      "B. Tinh thần lạc quan, yêu đời.",
      "C. Tính chất bi tráng, hào hùng.",
      "D. Màu sắc cổ điển kết hợp hiện đại."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 10: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 211,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Tôi vừa bỏ học sau sáu học kỳ “dùi kinh nấu sử” ở trường Luật. Suốt thời gian đó, sở thích duy\nnhất của tôi là đọc sách. Tôi có thể đọc ngấu nghiến bất cứ cuốn sách nào vớ được và học thuộc lòng\nnhững bài thơ độc đáo của Thế kỷ vàng Tây Ban Nha. Tôi đã đọc hầu hết các bản dịch cũng như nguyên\nbản các tác phẩm được coi là nổi tiếng lúc bấy giờ và những cuốn sách đó đã cho tôi hiểu được kỹ năng\ncũng như các tiểu xảo cần có khi viết tiểu thuyết.”\n(Gabriel Garcia Marquez, Sống để kể lại)\nNội dung của văn bản trên là gì?",
    "options": [
      "A. Niềm đam mê học Luật và lối học “dùi kinh nấu sử” ở người viết.",
      "B. Niềm đam mê đọc sách và tình yêu văn chương ở người viết.",
      "C. Niềm đam mê sáng tác thơ ca và tiểu thuyết ở người viết.",
      "D. Niềm đam mê đọc các bản dịch và nguyên tác ở người viết."
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 11: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 212,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Dòng nào sau đây nêu tên những tác phẩm cùng phong cách sáng tác của trường phái văn học\nhiện thực?",
    "options": [
      "A. Tắt đèn (Ngô Tất Tố), Số đỏ (Vũ Trọng Phụng), Chí Phèo (Nam Cao).",
      "B. Chữ người tử tù (Nguyễn Tuân), Giông tố (Vũ Trọng Phụng), Lão Hạc (Nam Cao).",
      "C. Hai đứa trẻ (Thạch Lam), Tắt đèn (Ngô Tất Tố), Số đỏ (Vũ Trọng Phụng).",
      "D. Lão Hạc (Nam Cao), Số đỏ (Vũ Trọng Phụng), Chữ người tử tù (Nguyễn Tuân)."
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 12: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 213,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Dòng nào dưới đây có các từ viết đúng chính tả?",
    "options": [
      "A. Sai xót, sơ suất, sừng sộ.",
      "B. Sai xót, sơ xuất, sừng sộ.",
      "C. Sai sót, sơ xuất, sừng xộ.",
      "D. Sai sót, sơ suất, sừng sộ."
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 13: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 214,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Câu nào dưới đây chứa từ viết sai chính tả?",
    "options": [
      "A. Sở Giao thông Vận tải kiến nghị xây kè chống sạt lở hai đoạn bờ sông ở thành phố này.",
      "B. Những chính sách đó quá xa vời thực tế, quá viễn vông nên rất khó được phê duyệt.",
      "C. Trầm cảm là kẻ thù giấu mặt đối với sức khỏe tinh thần lẫn thể chất của con người.",
      "D. Anh Phụng và nhóm bạn đã dành năm ngày để đi bộ đến hồ axit lớn nhất thế giới."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 14: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 215,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Theo tôi, đó là lối giáo dục đứng đắn, đích thực của việc dạy; người dạy sẽ làm đúng vai trò của\nmình hơn, nhất là biết khiêm cung hơn.”\nTừ nào bị dùng sai trong câu trên?",
    "options": [
      "A. đứng đắn.",
      "B. đích thực.",
      "C. vai trò.",
      "D. khiêm cung."
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 15: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 216,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Những mái nhà đơn sơ, giản dị nơi thâm sâu cùng cốc của tỉnh Lào Cai nằm sát bên mép núi.”\nXác định lỗi sai trong câu trên.",
    "options": [
      "A. Sai về dùng từ.",
      "B. Sai ngữ pháp.",
      "C. Sai quy chiếu.",
      "D. Sai logic."
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 16: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 217,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Câu nào dưới đây là câu đúng?",
    "options": [
      "A. Sự đồng hành, bên cạnh lẫn nhau là minh chứng rõ nhất cho tình yêu sâu đậm.",
      "B. Giải pháp này như cứu cánh nhóm chúng tôi trong lúc bế tắc.",
      "C. Yếu điểm của tôi vẫn là sự thiếu tự tin khi đứng trước đám đông.",
      "D. Qua đó, ta càng thấy học vấn uyên bác và tầm nhìn xa rộng của anh."
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 17: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 218,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Để đánh dấu bước ngoặt mới về phát triển thị trường tại các quốc gia Đông Nam Á”.\nCâu trên là câu chưa hoàn chỉnh vì thiếu thành phần nào sau đây?",
    "options": [
      "A. Thiếu chủ ngữ.",
      "B. Thiếu vị ngữ.",
      "C. Thiếu trạng ngữ.",
      "D. Thiếu nòng cốt câu. 6"
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 18: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 219,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Chúng tôi đã thảo luận về dự án này hai lần: một lần vào năm ngoái, một lần ngay tại văn\nphòng đại diện của công ti ở phía Nam.”\nNhận định nào về câu trên là đúng?",
    "options": [
      "A. Câu sai logic ngữ nghĩa.",
      "B. Câu mắc lỗi dùng từ.",
      "C. Câu sai cấu tạo ngữ pháp.",
      "D. Câu mắc lỗi dấu câu."
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 19: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 220,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Chỉ ra câu sai trong các câu sau:",
    "options": [
      "A. Do tình cảm chân thành, gần gũi của các anh chị khiến Khang gắn bó với nhóm hơn.",
      "B. Nhờ có những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn.",
      "C. Những tình cảm chân thành, gần gũi của các anh chị làm cho Khang gắn bó với nhóm hơn.",
      "D. Đáp lại những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn. Dựa vào thông tin dưới đây để trả lời các câu từ 21 đến 25 Biến đổi khí hậu đang được dự báo sẽ làm gia tăng hạn hán, qua đó làm trầm trọng thêm tình trạng xâm nhập mặn ở Đồng bằng sông Cửu Long (ĐBSCL). Vậy sự kết hợp giữa hai yếu tố này sẽ tác động trực tiếp như thế nào đến sự tồn tại của nông dân ĐBSCL, những người chủ yếu có sinh kế phụ thuộc vào việc trồng lúa? M. A. van Aalst và các cộng sự ở Trường Kinh doanh và Kinh tế, Đại học Vrije Amsterdam, đã đặt câu hỏi này vào cả vùng ĐBSCL và xem xét mức độ tổn thương ở các mức quy mô khác nhau, cả cấp quận, cấp xã và cấp hộ gia đình. Giải thích vì sao lại chọn ĐBSCL, các nhà nghiên cứu cho rằng đây là điểm nóng về ảnh hưởng của biến đổi khí hậu và môi trường. Trong cả thập kỷ qua, vùng này đã trải qua những thay đổi môi trường ở tốc độ nhanh và chậm, như nước biển dâng, lũ lụt, xâm nhập mặn và hạn hán trong khi nguồn sống của 75% cư dân phụ thuộc vào nông nghiệp. Sản phẩm nông nghiệp chiếm vị thế chủ đạo của ĐBSCL là lúa, vốn dễ bị ảnh hưởng bởi điều kiện thời tiết khắc nghiệt. Họ tập trung vào giai đoạn 2015-2016, khi cả đồng bằng phải gánh chịu đợt hạn hán khốc liệt nhất trong lịch sử, đồng thời còn phải trong cảnh dòng chảy từ thượng nguồn xuống thấp hơn 65 đến 70% so với trung bình hằng năm. Sử dụng các mô hình tính toán, họ phát hiện ra mức độ dễ bị tổn thương ở cấp độ huyện và xã có những điểm khác biệt. Ở cấp huyện, mặc dù có mối liên hệ giữa nghèo đói và thất thu vụ mùa nhưng không có chỉ dấu trực tiếp giữa sự phơi nhiễm xâm nhập mặn với nghèo đói, mặc dù thông thường xâm nhập mặn sẽ góp phần làm giảm năng suất thu hoạch với tỉ lệ xấp xỉ 21%. Ở cấp xã, mối liên hệ này thể hiện tương đối rõ nét. Các xã nghèo hơn và bị xâm nhập mặn nhiều hơn đều phải hứng chịu cảnh bị mất mát mùa vụ ở mức cao trong cùng năm. Do đó, các cộng đồng nghèo sẽ có mức độ tổn thương do tác động trực tiếp của môi trường cao hơn, điều vẫn còn chưa thể hiện rõ ở cấp huyện. Ở cấp hộ gia đình, các hộ sống trong khu vực nghèo sẽ phải đối mặt với khả năng mất mùa cao hơn. Mối quan hệ này chứng tỏ hiệu ứng này thậm chí còn mạnh hơn ở những nơi chịu xâm nhập mặn cao, chỉ dấu là những hộ sống ở khu vực thịnh vượng hơn đều có năng lực thích ứng tốt hơn. Các mô hình cũng cho thấy mức độ rủi ro cao hơn ở cấp hộ gia đình có liên quan đáng kể với mức độ giáo dục thấp hơn, tài sản thấp hơn và quy mô canh tác nhỏ hơn. (Theo Anh Vũ, Tính dễ bị tổn thương và khó phục hồi của nông dân ĐBSCL trong hạn hán)"
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 20: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 221,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Bao nhiêu % cư dân ĐBSCL có nguồn sống phụ thuộc vào nông nghiệp?",
    "options": [
      "A. 21%.",
      "B. 65-70%.",
      "C. 50%.",
      "D. 75%."
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 21: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 222,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Vì sao nhóm nghiên cứu chọn ĐBSCL là địa phương để khảo sát biến đổi khí hậu?",
    "options": [
      "A. Vì ĐBSCL là một đồng bằng quan trọng của cả nước.",
      "B. Vì ĐBSCL là điểm nóng về ảnh hưởng của biến đổi khí hậu và môi trường.",
      "C. Vì ĐBSCL có mức độ tổn thương ở các mức quy mô khác nhau.",
      "D. Vì ĐBSCL gánh chịu đợt hạn hán khốc liệt nhất trong giai đoạn 2015-2016."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 22: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 223,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Những tác động của biến đổi khí hậu đến với môi trường sinh thái ĐBSCL là gì?",
    "options": [
      "A. Nước biển dâng, lũ lụt, xâm nhập mặn và hạn hán.",
      "B. Xói mòn, lũ lụt, hạn hán và hiệu ứng nhà kính.",
      "C. Phơi nhiễm xâm nhập mặn và giảm đa dạng sinh học.",
      "D. Xói mòn, hạn hán, nước biển dâng và xâm nhập mặn. 7"
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 23: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 224,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Ở cấp huyện, mặc dù có mối liên hệ giữa nghèo đói và thất thu vụ mùa nhưng không có chỉ dấu\ntrực tiếp giữa sự phơi nhiễm xâm nhập mặn với nghèo đói, mặc dù thông thường xâm nhập mặn sẽ góp\nphần làm giảm năng suất thu hoạch với xấp xỉ 21%”.\nCụm từ “Ở cấp huyện” trong câu trên là thành phần gì của câu?",
    "options": [
      "A. Khởi ngữ.",
      "B. Trạng ngữ.",
      "C. Vị ngữ.",
      "D. Chủ ngữ."
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 24: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 225,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Chủ đề chính của văn bản trên là gì?",
    "options": [
      "A. Những biểu hiện của biến đổi khí hậu ở ĐBSCL.",
      "B. Hậu quả của hiện tượng xâm nhập mặn ở ĐBSCL.",
      "C. Ảnh hưởng của biến đổi khí hậu đến thiên nhiên ĐBSCL.",
      "D. Ảnh hưởng của biến đổi khí hậu đến đời sống người dân ĐBSCL. Dựa vào thông tin dưới đây để trả lời các câu từ 26 đến 30 Càng chung sống lâu năm với nghề viết, tôi càng tin rằng văn chương nói riêng và nghệ thuật nói chung không nhằm và cũng không có khả năng phản ánh cuộc đời y như nguyên trạng (1). Ngay cả nhiếp ảnh là nghệ thuật gần với sự trung thực nhất cũng không thể phản ánh được mặt sau của quả táo (2). Nhưng ngay cả khi có thể mô tả cuộc đời như nó vốn là, văn chương cũng từ chối làm điều đó (3). Bởi nếu vậy, văn chương sẽ không có lí do để tồn tại: người đọc khôn ngoan sẽ đọc trực tiếp trong cuộc đời thay vì nhìn vào trang sách (4). Suy cho cùng, thế giới mà người đọc tìm thấy và muốn thấy trong những trang văn bao giờ cũng là thế giới đã được lọc qua tâm hồn của người viết; đó là thế giới đã được nhà văn tháo ra và lắp lại theo một cấu trúc và tỉ lệ hoàn toàn khác (5). Thông qua cung cách thiết kế cái thế giới văn chương đó, nhà văn gửi đi những thông điệp và tìm kiếm sự chia sẻ (6). Những thông tin đủ loại của đời thường, đã có báo chí, đài truyền hình và bà hàng xóm cung cấp (7). Người đọc thông minh bao giờ cũng chờ đợi ở những trang văn một hiện thực khác - một hiện thực cao hơn so với hiện thực ngoài kia (8). (Nguyễn Nhật Ánh, Cảm ơn người lớn)"
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 25: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 226,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Càng … càng…” ở câu (1) của văn bản trên thể hiện mối quan hệ gì giữa các thành phần câu?",
    "options": [
      "A. Nhân quả.",
      "B. Chính phụ.",
      "C. Hô ứng.",
      "D. Đẳng lập."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 26: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 227,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Từ “cung cách” trong câu (6) có nghĩa là gì?",
    "options": [
      "A. Cách thức giao tiếp giữa con người với con người.",
      "B. Cách thức thể hiện thái độ ứng xử của con người.",
      "C. Cách thức con người suy tư, hồi tưởng về quá khứ.",
      "D. Cách thức tiến hành sự việc có thể quan sát được."
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 27: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 228,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Với cách diễn đạt “một hiện thực cao hơn so với hiện thực ngoài kia” trong câu (8), tác giả đã sử\ndụng biện pháp tu từ gì?",
    "options": [
      "A. Liệt kê.",
      "B. Nhân hóa.",
      "C. Chơi chữ.",
      "D. Chêm xen."
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 28: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 229,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Ý nào sau đây không được đề cập trong văn bản trên?",
    "options": [
      "A. Văn chương phản ánh đa dạng hiện thực đời sống.",
      "B. Nhiếp ảnh cũng không thể phản ánh đầy đủ hiện thực đời sống.",
      "C. Nhà văn luôn tìm kiếm sự chia sẻ thông qua tác phẩm.",
      "D. Người đọc thông minh xem văn chương là hiện thực đời sống."
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 29: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 230,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Quan điểm của người viết thể hiện trong văn bản trên là gì?",
    "options": [
      "A. Văn chương không nhằm và không có khả năng phản ánh đời sống như nguyên trạng.",
      "B. Văn chương hướng đến sự mô tả trung thực và đầy đủ về cuộc đời như nó vốn là.",
      "C. Văn chương có lí do tồn tại riêng của nó: phục vụ cho độc giả thông minh.",
      "D. Văn chương có cách thiết kế tương đồng với cấu trúc và tỉ lệ của hiện thực đời sống. 1.2. TIẾNG ANH Questions 31-35: Choose a suitable word or phrase (A, B, C, or D) to fill in each blank."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 01] Phân tích phương pháp giải chi tiết câu 30: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  }
],
  'vact-moon-de02': [
  {
    "id": 301,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Cành chọc trời là con đầu\nTên gọi ông Thu Tha\nCành bung xung là con thứ hai\nTên gọi bà Thu Thiên\nHai ông bà nên đôi nên lứa\nTruyền cho:\nCon gà có cựa\nDây dưa biết leo\nTre pheo có gai, có ngọn\nCon người biết nói.”\n(Sử thi dân tộc Mường, Đẻ đất đẻ nước)\nNội dung của văn bản trên là gì?",
    "options": [
      "A. Giải thích nguồn gốc trời và đất.",
      "B. Giải thích đặc điểm các loài.",
      "C. Giải thích nguồn gốc bản làng.",
      "D. Giải thích nguồn gốc phong tục."
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 1: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 302,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Đây nói chuyện Ngọc Hoàng, từ lúc mọi công việc kiến thiết vũ trụ đã xong mới bắt đầu nghĩ\nđến chuyện sáng tạo ra vạn vật. Không hiểu Ngọc Hoàng làm như thế nào nhưng chỉ nghe nói rằng ông\nta trước hết dùng những chất cặn còn sót lại trong trời đất, nặn ra đủ mọi giống vật từ những con to lớn\nnhư voi, tê ngưu, cọp đến những vật bé tí như sâu, kiến, bọ, trùng, v.v… Sau đó, Ngọc Hoàng mới gạn lấy\nchất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn. Đó là loài người. Và cũng vì thế mà\nngười ta khôn hơn vạn vật.”\n(Nguyễn Đổng Chi, Mười hai bà mụ)\nChi tiết “Ngọc Hoàng mới gạn lấy chất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn” có\nnghĩa là gì?",
    "options": [
      "A. Loài người là giống loài được sáng tạo một cách công phu từ chất trong, tinh túy.",
      "B. Loài người là giống loài được tạo ra sau cùng và đồng chất với mọi loài, mọi vật.",
      "C. Loài người là một hợp chất trong lành và tinh túy giống như mọi loài, mọi vật.",
      "D. Loài người là sự sáng tạo thông thái của Ngọc Hoàng từ những chất cặn còn sót lại."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 2: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 303,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Tuổi đà ngoại tám mươi già,\nThoắt thoắt xem bằng bóng ngựa qua.\nMai bạc lạnh quen nhiều tháng tuyết,\nCúc vàng thơm đổi mấy phen hoa.\nSang có phận, là ơn chúa,\nĐược làm người, bởi đức cha.\nAm quán ngày nhàn, rồi mọi việc,\nDầu ai tự tại, mặc dầu ta.”\n(Nguyễn Bỉnh Khiêm, Bạch Vân quốc ngữ thi)\nXác định thể thơ của văn bản trên.",
    "options": [
      "A. Thất ngôn xen lục ngôn.",
      "B. Thất ngôn xen ngũ ngôn.",
      "C. Thất ngôn tứ tuyệt.",
      "D. Lục ngôn bát cú."
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 3: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 304,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“… Bà phu nhân nói:\n[…] Những cuộc gặp gỡ hiếm lạ, đời nào mà không có: như đền Bạc hậu, như quán Cao đường, như thần\nLạc phố lướt sóng, như nàng Giang Phi cởi ngọc, như Lộng Ngọc lấy Tiêu Sử, như Thái Loan gặp Văn\nTiêu, như Lan Hương gặp Trương Thạc… Bao nhiêu những chuyện cũ còn sờ sờ đó, nếu thế này mà bị\nchê cười thì đã có những người trước ấy họ chịu đỡ tiếng cười cho mình.\nMọi người cùng phá lên cười rất vui vẻ. Rồi đó mặt trời gác núi, các khách khứa đều giải tán cả.”\n(Nguyễn Dữ, Chuyện Từ Thức lấy vợ tiên)\nDòng nào sau đây không thể hiện đặc trưng hình thức nghệ thuật của văn bản trên?",
    "options": [
      "A. Sử dụng biện pháp tu từ nhân hóa.",
      "B. Dùng nhiều điển tích, điển cố.",
      "C. Tổ chức theo cấu trúc biền văn.",
      "D. Sử dụng biện pháp tu từ liệt kê. 4"
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 4: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 305,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Ôi!\nTrời Bến Nghé mây mưa sùi sụt, thương đấng anh hùng gặp thuở gian truân, Đất Gò Công cây cỏ ủ ê,\ncảm niềm thần tử mắc nơi họa hại.\nXưa còn làm tướng, dốc rạng dồi hai chữ bình Tây, Nay thác về thần, nên vưng hộ một câu phục thái.\nHỡi ôi thương thay!”\n(Nguyễn Đình Chiểu, Văn tế Trương Định)\nChú thích:\nRạng dồi: làm sáng tỏ, làm rạng rỡ\nVưng hộ: bảo bọc, giúp đỡ\nPhục thái: trở lại thái bình\nDòng nào sau đây không thể hiện cảm xúc và tư tưởng của văn bản?",
    "options": [
      "A. Tiếc thương cho sự hy sinh vì nước vì dân của đấng anh hùng.",
      "B. Cảm thương trước tai họa mà đấng anh hùng mắc phải..",
      "C. Tin vị anh hùng sống làm tướng đánh giặc, thác theo thần giúp đỡ nhân dân.",
      "D. Xót xa cho trời Bến Nghé, đất Gò Công hoang tàn trong cơn binh biến."
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 5: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 306,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Đời bộ đội của tôi đã bước những bước đi đầu tiên trong các cánh rừng cằn cỗi vùng Bãi Nai.\nBa tháng trời dãi gió dầm mưa trên thao trường đã giúp chúng tôi gột sạch mọi tàn tích của nếp sống thị\nthành và trụ vững bản thân mình vào đội ngũ. Chúng tôi tập đeo gạch hành quân, tập lăn lê trườn toài,\ntập nín thở bóp cò, tập bám trụ chiến hào, tập vọt tiến tấn công, tập đâm lê, tập quăng lựu đạn, tập nhồi\nbộc phá, tập tuân lệnh chỉ huy và tập bền bỉ chịu khổ.”\n(Bảo Ninh, Đêm trừ tịch)\nNgười kể chuyện trong văn bản trên sử dụng điểm nhìn trần thuật nào?",
    "options": [
      "A. Điểm nhìn của ngôi thứ nhất.",
      "B. Điểm nhìn của ngôi thứ ba toàn tri.",
      "C. Điểm nhìn của ngôi thứ ba hạn tri.",
      "D. Điểm nhìn của ngôi thứ hai."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 6: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 307,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Nhớ cát là nỗi nhớ của tôi\nNhắm mắt lại thấy một màu trắng xóa\nTrơ trụi đen những ngôi nhà lợp cỏ\nGió cát bào tróc vỏ những hàng dương\nKhông tìm đâu lấy một con đường\nChỉ có cát phơi mình dưới nắng\nChỉ có cát nghiêng về phía sóng\nNhư tấm lòng tôi ngóng những thuyền xa”\n(Xuân Quỳnh, Nhớ cát)\nChủ thể trữ tình trong đoạn thơ trên là",
    "options": [
      "A. nỗi nhớ của tôi.",
      "B. cát.",
      "C. tôi.",
      "D. tấm lòng tôi."
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 7: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 308,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Nước ở đâu mà tuôn mãi không thôi. Nước rung rào rào trên lá. Nước tràn trên mặt đất. Nước\nchảy theo những thân cây. Rừng ướt sũng, đất ướt sũng, và trời mãi cũng chẳng thấy khô hơn. Mới xế\nchiều mà rừng đã muốn tối om. Rừng như xị ra. Mặt trời vẫn còn đâu đó giữa đường chân trời. Nó đang\nthổi hồng một đám mây màu xám chì, giống như đống trấu ủ giữa sương mù đặc sệt.”\n(Chu Lai, Nắng đồng bằng)\nDòng nào dưới đây chứa các biện pháp tu từ xuất hiện trong văn bản trên?",
    "options": [
      "A. Phép điệp, so sánh, phóng đại. C. Phép điệp, nói giảm, nói tránh, so sánh.",
      "B. C. Phép điệp, nói giảm, nói tránh, so sánh.",
      "C. Phép điệp, nói giảm, nói tránh, so sánh. B. Phép điệp, hoán dụ, so sánh.",
      "D. Phép điệp, so sánh, nhân hóa."
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 8: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 309,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Thầy nhạc: Thưa ngài, đáng lẽ ngài phải học âm nhạc, cũng như ngài đang học khiêu vũ.\nĐó là hai ngành nghệ thuật có liên quan chặt chẽ với nhau.\nThầy múa: Và nó mở mang trí não cho con người hiểu biết những cái đẹp.\nÔng Giuốc-đanh: Thế những người sang trọng cũng có học âm nhạc chứ?\nThầy nhạc: Thưa ngài có chứ.\nÔng Giuốc-đanh: Thế thì tôi sẽ học. Nhưng tôi không biết tôi có thể học vào thì giờ nào vì, ngoài thầy\ndạy kiếm thuật đến chỉ dẫn cho tôi, tôi lại còn mướn một thầy dạy triết lý, sáng hôm nay bắt đầu đây.”\n(Mô-li-e, Trưởng giả học làm sang)\nĐoạn đối thoại trên cho thấy mục đích chính khiến ông Giuốc-đanh học âm nhạc là gì?",
    "options": [
      "A. Ông Giuốc-đanh muốn thể hiện niềm đam mê với âm nhạc.",
      "B. Ông Giuốc-đanh muốn mở mang hiểu biết về cái đẹp.",
      "C. Ông Giuốc-đanh muốn trở thành người sang trọng.",
      "D. Ông Giuốc-đanh muốn giỏi âm nhạc như giỏi kiếm thuật và triết lý. 5"
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 9: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 310,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Thừa chu thuận thủy vãng Ung Ninh\nHĩnh điếu thuyền lan tự giảo hình\nLưỡng ngạn hương thôn trù mật thậm\nGiang tâm ngư phủ điếu thuyền khinh.”\n(Hồ Chí Minh, Bán lộ tháp thuyền phó Ung)\nDịch thơ:\n“Đáp thuyền thẳng xuống huyện Ung Ninh\nLủng lẳng chân treo tựa giảo hình\nLàng xóm ven sông đông đúc thế\nThuyền câu rẽ sóng nhẹ thênh thênh.”\n(Nam Trân dịch, Giữa đường đáp thuyền đi Ung Ninh)\nDòng nào sau đây không nêu đúng phong cách nghệ thuật của Hồ Chí Minh được biểu hiện trong bài thơ trên?",
    "options": [
      "A. Phong thái ung dung, tự tại.",
      "B. Tinh thần lạc quan, yêu đời.",
      "C. Tính chất bi tráng, hào hùng.",
      "D. Màu sắc cổ điển kết hợp hiện đại."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 10: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 311,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Tôi vừa bỏ học sau sáu học kỳ “dùi kinh nấu sử” ở trường Luật. Suốt thời gian đó, sở thích duy\nnhất của tôi là đọc sách. Tôi có thể đọc ngấu nghiến bất cứ cuốn sách nào vớ được và học thuộc lòng\nnhững bài thơ độc đáo của Thế kỷ vàng Tây Ban Nha. Tôi đã đọc hầu hết các bản dịch cũng như nguyên\nbản các tác phẩm được coi là nổi tiếng lúc bấy giờ và những cuốn sách đó đã cho tôi hiểu được kỹ năng\ncũng như các tiểu xảo cần có khi viết tiểu thuyết.”\n(Gabriel Garcia Marquez, Sống để kể lại)\nNội dung của văn bản trên là gì?",
    "options": [
      "A. Niềm đam mê học Luật và lối học “dùi kinh nấu sử” ở người viết.",
      "B. Niềm đam mê đọc sách và tình yêu văn chương ở người viết.",
      "C. Niềm đam mê sáng tác thơ ca và tiểu thuyết ở người viết.",
      "D. Niềm đam mê đọc các bản dịch và nguyên tác ở người viết."
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 11: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 312,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Dòng nào sau đây nêu tên những tác phẩm cùng phong cách sáng tác của trường phái văn học\nhiện thực?",
    "options": [
      "A. Tắt đèn (Ngô Tất Tố), Số đỏ (Vũ Trọng Phụng), Chí Phèo (Nam Cao).",
      "B. Chữ người tử tù (Nguyễn Tuân), Giông tố (Vũ Trọng Phụng), Lão Hạc (Nam Cao).",
      "C. Hai đứa trẻ (Thạch Lam), Tắt đèn (Ngô Tất Tố), Số đỏ (Vũ Trọng Phụng).",
      "D. Lão Hạc (Nam Cao), Số đỏ (Vũ Trọng Phụng), Chữ người tử tù (Nguyễn Tuân)."
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 12: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 313,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Dòng nào dưới đây có các từ viết đúng chính tả?",
    "options": [
      "A. Sai xót, sơ suất, sừng sộ.",
      "B. Sai xót, sơ xuất, sừng sộ.",
      "C. Sai sót, sơ xuất, sừng xộ.",
      "D. Sai sót, sơ suất, sừng sộ."
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 13: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 314,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Câu nào dưới đây chứa từ viết sai chính tả?",
    "options": [
      "A. Sở Giao thông Vận tải kiến nghị xây kè chống sạt lở hai đoạn bờ sông ở thành phố này.",
      "B. Những chính sách đó quá xa vời thực tế, quá viễn vông nên rất khó được phê duyệt.",
      "C. Trầm cảm là kẻ thù giấu mặt đối với sức khỏe tinh thần lẫn thể chất của con người.",
      "D. Anh Phụng và nhóm bạn đã dành năm ngày để đi bộ đến hồ axit lớn nhất thế giới."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 14: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 315,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Theo tôi, đó là lối giáo dục đứng đắn, đích thực của việc dạy; người dạy sẽ làm đúng vai trò của\nmình hơn, nhất là biết khiêm cung hơn.”\nTừ nào bị dùng sai trong câu trên?",
    "options": [
      "A. đứng đắn.",
      "B. đích thực.",
      "C. vai trò.",
      "D. khiêm cung."
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 15: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 316,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Những mái nhà đơn sơ, giản dị nơi thâm sâu cùng cốc của tỉnh Lào Cai nằm sát bên mép núi.”\nXác định lỗi sai trong câu trên.",
    "options": [
      "A. Sai về dùng từ.",
      "B. Sai ngữ pháp.",
      "C. Sai quy chiếu.",
      "D. Sai logic."
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 16: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 317,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Câu nào dưới đây là câu đúng?",
    "options": [
      "A. Sự đồng hành, bên cạnh lẫn nhau là minh chứng rõ nhất cho tình yêu sâu đậm.",
      "B. Giải pháp này như cứu cánh nhóm chúng tôi trong lúc bế tắc.",
      "C. Yếu điểm của tôi vẫn là sự thiếu tự tin khi đứng trước đám đông.",
      "D. Qua đó, ta càng thấy học vấn uyên bác và tầm nhìn xa rộng của anh."
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 17: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 318,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Để đánh dấu bước ngoặt mới về phát triển thị trường tại các quốc gia Đông Nam Á”.\nCâu trên là câu chưa hoàn chỉnh vì thiếu thành phần nào sau đây?",
    "options": [
      "A. Thiếu chủ ngữ.",
      "B. Thiếu vị ngữ.",
      "C. Thiếu trạng ngữ.",
      "D. Thiếu nòng cốt câu. 6"
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 18: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 319,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Chúng tôi đã thảo luận về dự án này hai lần: một lần vào năm ngoái, một lần ngay tại văn\nphòng đại diện của công ti ở phía Nam.”\nNhận định nào về câu trên là đúng?",
    "options": [
      "A. Câu sai logic ngữ nghĩa.",
      "B. Câu mắc lỗi dùng từ.",
      "C. Câu sai cấu tạo ngữ pháp.",
      "D. Câu mắc lỗi dấu câu."
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 19: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 320,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Chỉ ra câu sai trong các câu sau:",
    "options": [
      "A. Do tình cảm chân thành, gần gũi của các anh chị khiến Khang gắn bó với nhóm hơn.",
      "B. Nhờ có những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn.",
      "C. Những tình cảm chân thành, gần gũi của các anh chị làm cho Khang gắn bó với nhóm hơn.",
      "D. Đáp lại những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn. Dựa vào thông tin dưới đây để trả lời các câu từ 21 đến 25 Biến đổi khí hậu đang được dự báo sẽ làm gia tăng hạn hán, qua đó làm trầm trọng thêm tình trạng xâm nhập mặn ở Đồng bằng sông Cửu Long (ĐBSCL). Vậy sự kết hợp giữa hai yếu tố này sẽ tác động trực tiếp như thế nào đến sự tồn tại của nông dân ĐBSCL, những người chủ yếu có sinh kế phụ thuộc vào việc trồng lúa? M. A. van Aalst và các cộng sự ở Trường Kinh doanh và Kinh tế, Đại học Vrije Amsterdam, đã đặt câu hỏi này vào cả vùng ĐBSCL và xem xét mức độ tổn thương ở các mức quy mô khác nhau, cả cấp quận, cấp xã và cấp hộ gia đình. Giải thích vì sao lại chọn ĐBSCL, các nhà nghiên cứu cho rằng đây là điểm nóng về ảnh hưởng của biến đổi khí hậu và môi trường. Trong cả thập kỷ qua, vùng này đã trải qua những thay đổi môi trường ở tốc độ nhanh và chậm, như nước biển dâng, lũ lụt, xâm nhập mặn và hạn hán trong khi nguồn sống của 75% cư dân phụ thuộc vào nông nghiệp. Sản phẩm nông nghiệp chiếm vị thế chủ đạo của ĐBSCL là lúa, vốn dễ bị ảnh hưởng bởi điều kiện thời tiết khắc nghiệt. Họ tập trung vào giai đoạn 2015-2016, khi cả đồng bằng phải gánh chịu đợt hạn hán khốc liệt nhất trong lịch sử, đồng thời còn phải trong cảnh dòng chảy từ thượng nguồn xuống thấp hơn 65 đến 70% so với trung bình hằng năm. Sử dụng các mô hình tính toán, họ phát hiện ra mức độ dễ bị tổn thương ở cấp độ huyện và xã có những điểm khác biệt. Ở cấp huyện, mặc dù có mối liên hệ giữa nghèo đói và thất thu vụ mùa nhưng không có chỉ dấu trực tiếp giữa sự phơi nhiễm xâm nhập mặn với nghèo đói, mặc dù thông thường xâm nhập mặn sẽ góp phần làm giảm năng suất thu hoạch với tỉ lệ xấp xỉ 21%. Ở cấp xã, mối liên hệ này thể hiện tương đối rõ nét. Các xã nghèo hơn và bị xâm nhập mặn nhiều hơn đều phải hứng chịu cảnh bị mất mát mùa vụ ở mức cao trong cùng năm. Do đó, các cộng đồng nghèo sẽ có mức độ tổn thương do tác động trực tiếp của môi trường cao hơn, điều vẫn còn chưa thể hiện rõ ở cấp huyện. Ở cấp hộ gia đình, các hộ sống trong khu vực nghèo sẽ phải đối mặt với khả năng mất mùa cao hơn. Mối quan hệ này chứng tỏ hiệu ứng này thậm chí còn mạnh hơn ở những nơi chịu xâm nhập mặn cao, chỉ dấu là những hộ sống ở khu vực thịnh vượng hơn đều có năng lực thích ứng tốt hơn. Các mô hình cũng cho thấy mức độ rủi ro cao hơn ở cấp hộ gia đình có liên quan đáng kể với mức độ giáo dục thấp hơn, tài sản thấp hơn và quy mô canh tác nhỏ hơn. (Theo Anh Vũ, Tính dễ bị tổn thương và khó phục hồi của nông dân ĐBSCL trong hạn hán)"
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 20: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 321,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Bao nhiêu % cư dân ĐBSCL có nguồn sống phụ thuộc vào nông nghiệp?",
    "options": [
      "A. 21%.",
      "B. 65-70%.",
      "C. 50%.",
      "D. 75%."
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 21: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 322,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Vì sao nhóm nghiên cứu chọn ĐBSCL là địa phương để khảo sát biến đổi khí hậu?",
    "options": [
      "A. Vì ĐBSCL là một đồng bằng quan trọng của cả nước.",
      "B. Vì ĐBSCL là điểm nóng về ảnh hưởng của biến đổi khí hậu và môi trường.",
      "C. Vì ĐBSCL có mức độ tổn thương ở các mức quy mô khác nhau.",
      "D. Vì ĐBSCL gánh chịu đợt hạn hán khốc liệt nhất trong giai đoạn 2015-2016."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 22: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 323,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Những tác động của biến đổi khí hậu đến với môi trường sinh thái ĐBSCL là gì?",
    "options": [
      "A. Nước biển dâng, lũ lụt, xâm nhập mặn và hạn hán.",
      "B. Xói mòn, lũ lụt, hạn hán và hiệu ứng nhà kính.",
      "C. Phơi nhiễm xâm nhập mặn và giảm đa dạng sinh học.",
      "D. Xói mòn, hạn hán, nước biển dâng và xâm nhập mặn. 7"
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 23: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 324,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Ở cấp huyện, mặc dù có mối liên hệ giữa nghèo đói và thất thu vụ mùa nhưng không có chỉ dấu\ntrực tiếp giữa sự phơi nhiễm xâm nhập mặn với nghèo đói, mặc dù thông thường xâm nhập mặn sẽ góp\nphần làm giảm năng suất thu hoạch với xấp xỉ 21%”.\nCụm từ “Ở cấp huyện” trong câu trên là thành phần gì của câu?",
    "options": [
      "A. Khởi ngữ.",
      "B. Trạng ngữ.",
      "C. Vị ngữ.",
      "D. Chủ ngữ."
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 24: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 325,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Chủ đề chính của văn bản trên là gì?",
    "options": [
      "A. Những biểu hiện của biến đổi khí hậu ở ĐBSCL.",
      "B. Hậu quả của hiện tượng xâm nhập mặn ở ĐBSCL.",
      "C. Ảnh hưởng của biến đổi khí hậu đến thiên nhiên ĐBSCL.",
      "D. Ảnh hưởng của biến đổi khí hậu đến đời sống người dân ĐBSCL. Dựa vào thông tin dưới đây để trả lời các câu từ 26 đến 30 Càng chung sống lâu năm với nghề viết, tôi càng tin rằng văn chương nói riêng và nghệ thuật nói chung không nhằm và cũng không có khả năng phản ánh cuộc đời y như nguyên trạng (1). Ngay cả nhiếp ảnh là nghệ thuật gần với sự trung thực nhất cũng không thể phản ánh được mặt sau của quả táo (2). Nhưng ngay cả khi có thể mô tả cuộc đời như nó vốn là, văn chương cũng từ chối làm điều đó (3). Bởi nếu vậy, văn chương sẽ không có lí do để tồn tại: người đọc khôn ngoan sẽ đọc trực tiếp trong cuộc đời thay vì nhìn vào trang sách (4). Suy cho cùng, thế giới mà người đọc tìm thấy và muốn thấy trong những trang văn bao giờ cũng là thế giới đã được lọc qua tâm hồn của người viết; đó là thế giới đã được nhà văn tháo ra và lắp lại theo một cấu trúc và tỉ lệ hoàn toàn khác (5). Thông qua cung cách thiết kế cái thế giới văn chương đó, nhà văn gửi đi những thông điệp và tìm kiếm sự chia sẻ (6). Những thông tin đủ loại của đời thường, đã có báo chí, đài truyền hình và bà hàng xóm cung cấp (7). Người đọc thông minh bao giờ cũng chờ đợi ở những trang văn một hiện thực khác - một hiện thực cao hơn so với hiện thực ngoài kia (8). (Nguyễn Nhật Ánh, Cảm ơn người lớn)"
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 25: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 326,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Càng … càng…” ở câu (1) của văn bản trên thể hiện mối quan hệ gì giữa các thành phần câu?",
    "options": [
      "A. Nhân quả.",
      "B. Chính phụ.",
      "C. Hô ứng.",
      "D. Đẳng lập."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 26: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 327,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Từ “cung cách” trong câu (6) có nghĩa là gì?",
    "options": [
      "A. Cách thức giao tiếp giữa con người với con người.",
      "B. Cách thức thể hiện thái độ ứng xử của con người.",
      "C. Cách thức con người suy tư, hồi tưởng về quá khứ.",
      "D. Cách thức tiến hành sự việc có thể quan sát được."
    ],
    "correctAnswer": 1,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 27: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 328,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Với cách diễn đạt “một hiện thực cao hơn so với hiện thực ngoài kia” trong câu (8), tác giả đã sử\ndụng biện pháp tu từ gì?",
    "options": [
      "A. Liệt kê.",
      "B. Nhân hóa.",
      "C. Chơi chữ.",
      "D. Chêm xen."
    ],
    "correctAnswer": 0,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 28: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 329,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Ý nào sau đây không được đề cập trong văn bản trên?",
    "options": [
      "A. Văn chương phản ánh đa dạng hiện thực đời sống.",
      "B. Nhiếp ảnh cũng không thể phản ánh đầy đủ hiện thực đời sống.",
      "C. Nhà văn luôn tìm kiếm sự chia sẻ thông qua tác phẩm.",
      "D. Người đọc thông minh xem văn chương là hiện thực đời sống."
    ],
    "correctAnswer": 3,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 29: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 330,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Quan điểm của người viết thể hiện trong văn bản trên là gì?",
    "options": [
      "A. Văn chương không nhằm và không có khả năng phản ánh đời sống như nguyên trạng.",
      "B. Văn chương hướng đến sự mô tả trung thực và đầy đủ về cuộc đời như nó vốn là.",
      "C. Văn chương có lí do tồn tại riêng của nó: phục vụ cho độc giả thông minh.",
      "D. Văn chương có cách thiết kế tương đồng với cấu trúc và tỉ lệ của hiện thực đời sống. 1.2. TIẾNG ANH Questions 31-35: Choose a suitable word or phrase (A, B, C, or D) to fill in each blank."
    ],
    "correctAnswer": 2,
    "explanation": "[Bộ Đề Moon.vn 02] Phân tích phương pháp giải chi tiết câu 30: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  }
],
  'vact-real-2024': [
  {
    "id": 401,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Cành chọc trời là con đầu\nTên gọi ông Thu Tha\nCành bung xung là con thứ hai\nTên gọi bà Thu Thiên\nHai ông bà nên đôi nên lứa\nTruyền cho:\nCon gà có cựa\nDây dưa biết leo\nTre pheo có gai, có ngọn\nCon người biết nói.”\n(Sử thi dân tộc Mường, Đẻ đất đẻ nước)\nNội dung của văn bản trên là gì?",
    "options": [
      "A. Giải thích nguồn gốc trời và đất.",
      "B. Giải thích đặc điểm các loài.",
      "C. Giải thích nguồn gốc bản làng.",
      "D. Giải thích nguồn gốc phong tục."
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 1: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 402,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Đây nói chuyện Ngọc Hoàng, từ lúc mọi công việc kiến thiết vũ trụ đã xong mới bắt đầu nghĩ\nđến chuyện sáng tạo ra vạn vật. Không hiểu Ngọc Hoàng làm như thế nào nhưng chỉ nghe nói rằng ông\nta trước hết dùng những chất cặn còn sót lại trong trời đất, nặn ra đủ mọi giống vật từ những con to lớn\nnhư voi, tê ngưu, cọp đến những vật bé tí như sâu, kiến, bọ, trùng, v.v… Sau đó, Ngọc Hoàng mới gạn lấy\nchất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn. Đó là loài người. Và cũng vì thế mà\nngười ta khôn hơn vạn vật.”\n(Nguyễn Đổng Chi, Mười hai bà mụ)\nChi tiết “Ngọc Hoàng mới gạn lấy chất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn” có\nnghĩa là gì?",
    "options": [
      "A. Loài người là giống loài được sáng tạo một cách công phu từ chất trong, tinh túy.",
      "B. Loài người là giống loài được tạo ra sau cùng và đồng chất với mọi loài, mọi vật.",
      "C. Loài người là một hợp chất trong lành và tinh túy giống như mọi loài, mọi vật.",
      "D. Loài người là sự sáng tạo thông thái của Ngọc Hoàng từ những chất cặn còn sót lại."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 2: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 403,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Tuổi đà ngoại tám mươi già,\nThoắt thoắt xem bằng bóng ngựa qua.\nMai bạc lạnh quen nhiều tháng tuyết,\nCúc vàng thơm đổi mấy phen hoa.\nSang có phận, là ơn chúa,\nĐược làm người, bởi đức cha.\nAm quán ngày nhàn, rồi mọi việc,\nDầu ai tự tại, mặc dầu ta.”\n(Nguyễn Bỉnh Khiêm, Bạch Vân quốc ngữ thi)\nXác định thể thơ của văn bản trên.",
    "options": [
      "A. Thất ngôn xen lục ngôn.",
      "B. Thất ngôn xen ngũ ngôn.",
      "C. Thất ngôn tứ tuyệt.",
      "D. Lục ngôn bát cú."
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 3: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 404,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“… Bà phu nhân nói:\n[…] Những cuộc gặp gỡ hiếm lạ, đời nào mà không có: như đền Bạc hậu, như quán Cao đường, như thần\nLạc phố lướt sóng, như nàng Giang Phi cởi ngọc, như Lộng Ngọc lấy Tiêu Sử, như Thái Loan gặp Văn\nTiêu, như Lan Hương gặp Trương Thạc… Bao nhiêu những chuyện cũ còn sờ sờ đó, nếu thế này mà bị\nchê cười thì đã có những người trước ấy họ chịu đỡ tiếng cười cho mình.\nMọi người cùng phá lên cười rất vui vẻ. Rồi đó mặt trời gác núi, các khách khứa đều giải tán cả.”\n(Nguyễn Dữ, Chuyện Từ Thức lấy vợ tiên)\nDòng nào sau đây không thể hiện đặc trưng hình thức nghệ thuật của văn bản trên?",
    "options": [
      "A. Sử dụng biện pháp tu từ nhân hóa.",
      "B. Dùng nhiều điển tích, điển cố.",
      "C. Tổ chức theo cấu trúc biền văn.",
      "D. Sử dụng biện pháp tu từ liệt kê. 4"
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 4: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 405,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Ôi!\nTrời Bến Nghé mây mưa sùi sụt, thương đấng anh hùng gặp thuở gian truân, Đất Gò Công cây cỏ ủ ê,\ncảm niềm thần tử mắc nơi họa hại.\nXưa còn làm tướng, dốc rạng dồi hai chữ bình Tây, Nay thác về thần, nên vưng hộ một câu phục thái.\nHỡi ôi thương thay!”\n(Nguyễn Đình Chiểu, Văn tế Trương Định)\nChú thích:\nRạng dồi: làm sáng tỏ, làm rạng rỡ\nVưng hộ: bảo bọc, giúp đỡ\nPhục thái: trở lại thái bình\nDòng nào sau đây không thể hiện cảm xúc và tư tưởng của văn bản?",
    "options": [
      "A. Tiếc thương cho sự hy sinh vì nước vì dân của đấng anh hùng.",
      "B. Cảm thương trước tai họa mà đấng anh hùng mắc phải..",
      "C. Tin vị anh hùng sống làm tướng đánh giặc, thác theo thần giúp đỡ nhân dân.",
      "D. Xót xa cho trời Bến Nghé, đất Gò Công hoang tàn trong cơn binh biến."
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 5: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 406,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Đời bộ đội của tôi đã bước những bước đi đầu tiên trong các cánh rừng cằn cỗi vùng Bãi Nai.\nBa tháng trời dãi gió dầm mưa trên thao trường đã giúp chúng tôi gột sạch mọi tàn tích của nếp sống thị\nthành và trụ vững bản thân mình vào đội ngũ. Chúng tôi tập đeo gạch hành quân, tập lăn lê trườn toài,\ntập nín thở bóp cò, tập bám trụ chiến hào, tập vọt tiến tấn công, tập đâm lê, tập quăng lựu đạn, tập nhồi\nbộc phá, tập tuân lệnh chỉ huy và tập bền bỉ chịu khổ.”\n(Bảo Ninh, Đêm trừ tịch)\nNgười kể chuyện trong văn bản trên sử dụng điểm nhìn trần thuật nào?",
    "options": [
      "A. Điểm nhìn của ngôi thứ nhất.",
      "B. Điểm nhìn của ngôi thứ ba toàn tri.",
      "C. Điểm nhìn của ngôi thứ ba hạn tri.",
      "D. Điểm nhìn của ngôi thứ hai."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 6: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 407,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Nhớ cát là nỗi nhớ của tôi\nNhắm mắt lại thấy một màu trắng xóa\nTrơ trụi đen những ngôi nhà lợp cỏ\nGió cát bào tróc vỏ những hàng dương\nKhông tìm đâu lấy một con đường\nChỉ có cát phơi mình dưới nắng\nChỉ có cát nghiêng về phía sóng\nNhư tấm lòng tôi ngóng những thuyền xa”\n(Xuân Quỳnh, Nhớ cát)\nChủ thể trữ tình trong đoạn thơ trên là",
    "options": [
      "A. nỗi nhớ của tôi.",
      "B. cát.",
      "C. tôi.",
      "D. tấm lòng tôi."
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 7: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 408,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Nước ở đâu mà tuôn mãi không thôi. Nước rung rào rào trên lá. Nước tràn trên mặt đất. Nước\nchảy theo những thân cây. Rừng ướt sũng, đất ướt sũng, và trời mãi cũng chẳng thấy khô hơn. Mới xế\nchiều mà rừng đã muốn tối om. Rừng như xị ra. Mặt trời vẫn còn đâu đó giữa đường chân trời. Nó đang\nthổi hồng một đám mây màu xám chì, giống như đống trấu ủ giữa sương mù đặc sệt.”\n(Chu Lai, Nắng đồng bằng)\nDòng nào dưới đây chứa các biện pháp tu từ xuất hiện trong văn bản trên?",
    "options": [
      "A. Phép điệp, so sánh, phóng đại. C. Phép điệp, nói giảm, nói tránh, so sánh.",
      "B. C. Phép điệp, nói giảm, nói tránh, so sánh.",
      "C. Phép điệp, nói giảm, nói tránh, so sánh. B. Phép điệp, hoán dụ, so sánh.",
      "D. Phép điệp, so sánh, nhân hóa."
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 8: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 409,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Thầy nhạc: Thưa ngài, đáng lẽ ngài phải học âm nhạc, cũng như ngài đang học khiêu vũ.\nĐó là hai ngành nghệ thuật có liên quan chặt chẽ với nhau.\nThầy múa: Và nó mở mang trí não cho con người hiểu biết những cái đẹp.\nÔng Giuốc-đanh: Thế những người sang trọng cũng có học âm nhạc chứ?\nThầy nhạc: Thưa ngài có chứ.\nÔng Giuốc-đanh: Thế thì tôi sẽ học. Nhưng tôi không biết tôi có thể học vào thì giờ nào vì, ngoài thầy\ndạy kiếm thuật đến chỉ dẫn cho tôi, tôi lại còn mướn một thầy dạy triết lý, sáng hôm nay bắt đầu đây.”\n(Mô-li-e, Trưởng giả học làm sang)\nĐoạn đối thoại trên cho thấy mục đích chính khiến ông Giuốc-đanh học âm nhạc là gì?",
    "options": [
      "A. Ông Giuốc-đanh muốn thể hiện niềm đam mê với âm nhạc.",
      "B. Ông Giuốc-đanh muốn mở mang hiểu biết về cái đẹp.",
      "C. Ông Giuốc-đanh muốn trở thành người sang trọng.",
      "D. Ông Giuốc-đanh muốn giỏi âm nhạc như giỏi kiếm thuật và triết lý. 5"
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 9: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 410,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Thừa chu thuận thủy vãng Ung Ninh\nHĩnh điếu thuyền lan tự giảo hình\nLưỡng ngạn hương thôn trù mật thậm\nGiang tâm ngư phủ điếu thuyền khinh.”\n(Hồ Chí Minh, Bán lộ tháp thuyền phó Ung)\nDịch thơ:\n“Đáp thuyền thẳng xuống huyện Ung Ninh\nLủng lẳng chân treo tựa giảo hình\nLàng xóm ven sông đông đúc thế\nThuyền câu rẽ sóng nhẹ thênh thênh.”\n(Nam Trân dịch, Giữa đường đáp thuyền đi Ung Ninh)\nDòng nào sau đây không nêu đúng phong cách nghệ thuật của Hồ Chí Minh được biểu hiện trong bài thơ trên?",
    "options": [
      "A. Phong thái ung dung, tự tại.",
      "B. Tinh thần lạc quan, yêu đời.",
      "C. Tính chất bi tráng, hào hùng.",
      "D. Màu sắc cổ điển kết hợp hiện đại."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 10: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 411,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Tôi vừa bỏ học sau sáu học kỳ “dùi kinh nấu sử” ở trường Luật. Suốt thời gian đó, sở thích duy\nnhất của tôi là đọc sách. Tôi có thể đọc ngấu nghiến bất cứ cuốn sách nào vớ được và học thuộc lòng\nnhững bài thơ độc đáo của Thế kỷ vàng Tây Ban Nha. Tôi đã đọc hầu hết các bản dịch cũng như nguyên\nbản các tác phẩm được coi là nổi tiếng lúc bấy giờ và những cuốn sách đó đã cho tôi hiểu được kỹ năng\ncũng như các tiểu xảo cần có khi viết tiểu thuyết.”\n(Gabriel Garcia Marquez, Sống để kể lại)\nNội dung của văn bản trên là gì?",
    "options": [
      "A. Niềm đam mê học Luật và lối học “dùi kinh nấu sử” ở người viết.",
      "B. Niềm đam mê đọc sách và tình yêu văn chương ở người viết.",
      "C. Niềm đam mê sáng tác thơ ca và tiểu thuyết ở người viết.",
      "D. Niềm đam mê đọc các bản dịch và nguyên tác ở người viết."
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 11: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 412,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Dòng nào sau đây nêu tên những tác phẩm cùng phong cách sáng tác của trường phái văn học\nhiện thực?",
    "options": [
      "A. Tắt đèn (Ngô Tất Tố), Số đỏ (Vũ Trọng Phụng), Chí Phèo (Nam Cao).",
      "B. Chữ người tử tù (Nguyễn Tuân), Giông tố (Vũ Trọng Phụng), Lão Hạc (Nam Cao).",
      "C. Hai đứa trẻ (Thạch Lam), Tắt đèn (Ngô Tất Tố), Số đỏ (Vũ Trọng Phụng).",
      "D. Lão Hạc (Nam Cao), Số đỏ (Vũ Trọng Phụng), Chữ người tử tù (Nguyễn Tuân)."
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 12: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 413,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Dòng nào dưới đây có các từ viết đúng chính tả?",
    "options": [
      "A. Sai xót, sơ suất, sừng sộ.",
      "B. Sai xót, sơ xuất, sừng sộ.",
      "C. Sai sót, sơ xuất, sừng xộ.",
      "D. Sai sót, sơ suất, sừng sộ."
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 13: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 414,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Câu nào dưới đây chứa từ viết sai chính tả?",
    "options": [
      "A. Sở Giao thông Vận tải kiến nghị xây kè chống sạt lở hai đoạn bờ sông ở thành phố này.",
      "B. Những chính sách đó quá xa vời thực tế, quá viễn vông nên rất khó được phê duyệt.",
      "C. Trầm cảm là kẻ thù giấu mặt đối với sức khỏe tinh thần lẫn thể chất của con người.",
      "D. Anh Phụng và nhóm bạn đã dành năm ngày để đi bộ đến hồ axit lớn nhất thế giới."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 14: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 415,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Theo tôi, đó là lối giáo dục đứng đắn, đích thực của việc dạy; người dạy sẽ làm đúng vai trò của\nmình hơn, nhất là biết khiêm cung hơn.”\nTừ nào bị dùng sai trong câu trên?",
    "options": [
      "A. đứng đắn.",
      "B. đích thực.",
      "C. vai trò.",
      "D. khiêm cung."
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 15: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 416,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Những mái nhà đơn sơ, giản dị nơi thâm sâu cùng cốc của tỉnh Lào Cai nằm sát bên mép núi.”\nXác định lỗi sai trong câu trên.",
    "options": [
      "A. Sai về dùng từ.",
      "B. Sai ngữ pháp.",
      "C. Sai quy chiếu.",
      "D. Sai logic."
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 16: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 417,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Câu nào dưới đây là câu đúng?",
    "options": [
      "A. Sự đồng hành, bên cạnh lẫn nhau là minh chứng rõ nhất cho tình yêu sâu đậm.",
      "B. Giải pháp này như cứu cánh nhóm chúng tôi trong lúc bế tắc.",
      "C. Yếu điểm của tôi vẫn là sự thiếu tự tin khi đứng trước đám đông.",
      "D. Qua đó, ta càng thấy học vấn uyên bác và tầm nhìn xa rộng của anh."
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 17: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 418,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Để đánh dấu bước ngoặt mới về phát triển thị trường tại các quốc gia Đông Nam Á”.\nCâu trên là câu chưa hoàn chỉnh vì thiếu thành phần nào sau đây?",
    "options": [
      "A. Thiếu chủ ngữ.",
      "B. Thiếu vị ngữ.",
      "C. Thiếu trạng ngữ.",
      "D. Thiếu nòng cốt câu. 6"
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 18: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 419,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Chúng tôi đã thảo luận về dự án này hai lần: một lần vào năm ngoái, một lần ngay tại văn\nphòng đại diện của công ti ở phía Nam.”\nNhận định nào về câu trên là đúng?",
    "options": [
      "A. Câu sai logic ngữ nghĩa.",
      "B. Câu mắc lỗi dùng từ.",
      "C. Câu sai cấu tạo ngữ pháp.",
      "D. Câu mắc lỗi dấu câu."
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 19: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 420,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Chỉ ra câu sai trong các câu sau:",
    "options": [
      "A. Do tình cảm chân thành, gần gũi của các anh chị khiến Khang gắn bó với nhóm hơn.",
      "B. Nhờ có những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn.",
      "C. Những tình cảm chân thành, gần gũi của các anh chị làm cho Khang gắn bó với nhóm hơn.",
      "D. Đáp lại những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn. Dựa vào thông tin dưới đây để trả lời các câu từ 21 đến 25 Biến đổi khí hậu đang được dự báo sẽ làm gia tăng hạn hán, qua đó làm trầm trọng thêm tình trạng xâm nhập mặn ở Đồng bằng sông Cửu Long (ĐBSCL). Vậy sự kết hợp giữa hai yếu tố này sẽ tác động trực tiếp như thế nào đến sự tồn tại của nông dân ĐBSCL, những người chủ yếu có sinh kế phụ thuộc vào việc trồng lúa? M. A. van Aalst và các cộng sự ở Trường Kinh doanh và Kinh tế, Đại học Vrije Amsterdam, đã đặt câu hỏi này vào cả vùng ĐBSCL và xem xét mức độ tổn thương ở các mức quy mô khác nhau, cả cấp quận, cấp xã và cấp hộ gia đình. Giải thích vì sao lại chọn ĐBSCL, các nhà nghiên cứu cho rằng đây là điểm nóng về ảnh hưởng của biến đổi khí hậu và môi trường. Trong cả thập kỷ qua, vùng này đã trải qua những thay đổi môi trường ở tốc độ nhanh và chậm, như nước biển dâng, lũ lụt, xâm nhập mặn và hạn hán trong khi nguồn sống của 75% cư dân phụ thuộc vào nông nghiệp. Sản phẩm nông nghiệp chiếm vị thế chủ đạo của ĐBSCL là lúa, vốn dễ bị ảnh hưởng bởi điều kiện thời tiết khắc nghiệt. Họ tập trung vào giai đoạn 2015-2016, khi cả đồng bằng phải gánh chịu đợt hạn hán khốc liệt nhất trong lịch sử, đồng thời còn phải trong cảnh dòng chảy từ thượng nguồn xuống thấp hơn 65 đến 70% so với trung bình hằng năm. Sử dụng các mô hình tính toán, họ phát hiện ra mức độ dễ bị tổn thương ở cấp độ huyện và xã có những điểm khác biệt. Ở cấp huyện, mặc dù có mối liên hệ giữa nghèo đói và thất thu vụ mùa nhưng không có chỉ dấu trực tiếp giữa sự phơi nhiễm xâm nhập mặn với nghèo đói, mặc dù thông thường xâm nhập mặn sẽ góp phần làm giảm năng suất thu hoạch với tỉ lệ xấp xỉ 21%. Ở cấp xã, mối liên hệ này thể hiện tương đối rõ nét. Các xã nghèo hơn và bị xâm nhập mặn nhiều hơn đều phải hứng chịu cảnh bị mất mát mùa vụ ở mức cao trong cùng năm. Do đó, các cộng đồng nghèo sẽ có mức độ tổn thương do tác động trực tiếp của môi trường cao hơn, điều vẫn còn chưa thể hiện rõ ở cấp huyện. Ở cấp hộ gia đình, các hộ sống trong khu vực nghèo sẽ phải đối mặt với khả năng mất mùa cao hơn. Mối quan hệ này chứng tỏ hiệu ứng này thậm chí còn mạnh hơn ở những nơi chịu xâm nhập mặn cao, chỉ dấu là những hộ sống ở khu vực thịnh vượng hơn đều có năng lực thích ứng tốt hơn. Các mô hình cũng cho thấy mức độ rủi ro cao hơn ở cấp hộ gia đình có liên quan đáng kể với mức độ giáo dục thấp hơn, tài sản thấp hơn và quy mô canh tác nhỏ hơn. (Theo Anh Vũ, Tính dễ bị tổn thương và khó phục hồi của nông dân ĐBSCL trong hạn hán)"
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 20: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 421,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Bao nhiêu % cư dân ĐBSCL có nguồn sống phụ thuộc vào nông nghiệp?",
    "options": [
      "A. 21%.",
      "B. 65-70%.",
      "C. 50%.",
      "D. 75%."
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 21: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 422,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Vì sao nhóm nghiên cứu chọn ĐBSCL là địa phương để khảo sát biến đổi khí hậu?",
    "options": [
      "A. Vì ĐBSCL là một đồng bằng quan trọng của cả nước.",
      "B. Vì ĐBSCL là điểm nóng về ảnh hưởng của biến đổi khí hậu và môi trường.",
      "C. Vì ĐBSCL có mức độ tổn thương ở các mức quy mô khác nhau.",
      "D. Vì ĐBSCL gánh chịu đợt hạn hán khốc liệt nhất trong giai đoạn 2015-2016."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 22: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 423,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Những tác động của biến đổi khí hậu đến với môi trường sinh thái ĐBSCL là gì?",
    "options": [
      "A. Nước biển dâng, lũ lụt, xâm nhập mặn và hạn hán.",
      "B. Xói mòn, lũ lụt, hạn hán và hiệu ứng nhà kính.",
      "C. Phơi nhiễm xâm nhập mặn và giảm đa dạng sinh học.",
      "D. Xói mòn, hạn hán, nước biển dâng và xâm nhập mặn. 7"
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 23: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 424,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Ở cấp huyện, mặc dù có mối liên hệ giữa nghèo đói và thất thu vụ mùa nhưng không có chỉ dấu\ntrực tiếp giữa sự phơi nhiễm xâm nhập mặn với nghèo đói, mặc dù thông thường xâm nhập mặn sẽ góp\nphần làm giảm năng suất thu hoạch với xấp xỉ 21%”.\nCụm từ “Ở cấp huyện” trong câu trên là thành phần gì của câu?",
    "options": [
      "A. Khởi ngữ.",
      "B. Trạng ngữ.",
      "C. Vị ngữ.",
      "D. Chủ ngữ."
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 24: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 425,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Chủ đề chính của văn bản trên là gì?",
    "options": [
      "A. Những biểu hiện của biến đổi khí hậu ở ĐBSCL.",
      "B. Hậu quả của hiện tượng xâm nhập mặn ở ĐBSCL.",
      "C. Ảnh hưởng của biến đổi khí hậu đến thiên nhiên ĐBSCL.",
      "D. Ảnh hưởng của biến đổi khí hậu đến đời sống người dân ĐBSCL. Dựa vào thông tin dưới đây để trả lời các câu từ 26 đến 30 Càng chung sống lâu năm với nghề viết, tôi càng tin rằng văn chương nói riêng và nghệ thuật nói chung không nhằm và cũng không có khả năng phản ánh cuộc đời y như nguyên trạng (1). Ngay cả nhiếp ảnh là nghệ thuật gần với sự trung thực nhất cũng không thể phản ánh được mặt sau của quả táo (2). Nhưng ngay cả khi có thể mô tả cuộc đời như nó vốn là, văn chương cũng từ chối làm điều đó (3). Bởi nếu vậy, văn chương sẽ không có lí do để tồn tại: người đọc khôn ngoan sẽ đọc trực tiếp trong cuộc đời thay vì nhìn vào trang sách (4). Suy cho cùng, thế giới mà người đọc tìm thấy và muốn thấy trong những trang văn bao giờ cũng là thế giới đã được lọc qua tâm hồn của người viết; đó là thế giới đã được nhà văn tháo ra và lắp lại theo một cấu trúc và tỉ lệ hoàn toàn khác (5). Thông qua cung cách thiết kế cái thế giới văn chương đó, nhà văn gửi đi những thông điệp và tìm kiếm sự chia sẻ (6). Những thông tin đủ loại của đời thường, đã có báo chí, đài truyền hình và bà hàng xóm cung cấp (7). Người đọc thông minh bao giờ cũng chờ đợi ở những trang văn một hiện thực khác - một hiện thực cao hơn so với hiện thực ngoài kia (8). (Nguyễn Nhật Ánh, Cảm ơn người lớn)"
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 25: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 426,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Càng … càng…” ở câu (1) của văn bản trên thể hiện mối quan hệ gì giữa các thành phần câu?",
    "options": [
      "A. Nhân quả.",
      "B. Chính phụ.",
      "C. Hô ứng.",
      "D. Đẳng lập."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 26: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 427,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Từ “cung cách” trong câu (6) có nghĩa là gì?",
    "options": [
      "A. Cách thức giao tiếp giữa con người với con người.",
      "B. Cách thức thể hiện thái độ ứng xử của con người.",
      "C. Cách thức con người suy tư, hồi tưởng về quá khứ.",
      "D. Cách thức tiến hành sự việc có thể quan sát được."
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 27: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 428,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Với cách diễn đạt “một hiện thực cao hơn so với hiện thực ngoài kia” trong câu (8), tác giả đã sử\ndụng biện pháp tu từ gì?",
    "options": [
      "A. Liệt kê.",
      "B. Nhân hóa.",
      "C. Chơi chữ.",
      "D. Chêm xen."
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 28: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 429,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Ý nào sau đây không được đề cập trong văn bản trên?",
    "options": [
      "A. Văn chương phản ánh đa dạng hiện thực đời sống.",
      "B. Nhiếp ảnh cũng không thể phản ánh đầy đủ hiện thực đời sống.",
      "C. Nhà văn luôn tìm kiếm sự chia sẻ thông qua tác phẩm.",
      "D. Người đọc thông minh xem văn chương là hiện thực đời sống."
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 29: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 430,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Quan điểm của người viết thể hiện trong văn bản trên là gì?",
    "options": [
      "A. Văn chương không nhằm và không có khả năng phản ánh đời sống như nguyên trạng.",
      "B. Văn chương hướng đến sự mô tả trung thực và đầy đủ về cuộc đời như nó vốn là.",
      "C. Văn chương có lí do tồn tại riêng của nó: phục vụ cho độc giả thông minh.",
      "D. Văn chương có cách thiết kế tương đồng với cấu trúc và tỉ lệ của hiện thực đời sống. 1.2. TIẾNG ANH Questions 31-35: Choose a suitable word or phrase (A, B, C, or D) to fill in each blank."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2024] Phân tích phương pháp giải chi tiết câu 30: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  }
],
  'vact-real-2023': [
  {
    "id": 501,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Cành chọc trời là con đầu\nTên gọi ông Thu Tha\nCành bung xung là con thứ hai\nTên gọi bà Thu Thiên\nHai ông bà nên đôi nên lứa\nTruyền cho:\nCon gà có cựa\nDây dưa biết leo\nTre pheo có gai, có ngọn\nCon người biết nói.”\n(Sử thi dân tộc Mường, Đẻ đất đẻ nước)\nNội dung của văn bản trên là gì?",
    "options": [
      "A. Giải thích nguồn gốc trời và đất.",
      "B. Giải thích đặc điểm các loài.",
      "C. Giải thích nguồn gốc bản làng.",
      "D. Giải thích nguồn gốc phong tục."
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 1: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 502,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Đây nói chuyện Ngọc Hoàng, từ lúc mọi công việc kiến thiết vũ trụ đã xong mới bắt đầu nghĩ\nđến chuyện sáng tạo ra vạn vật. Không hiểu Ngọc Hoàng làm như thế nào nhưng chỉ nghe nói rằng ông\nta trước hết dùng những chất cặn còn sót lại trong trời đất, nặn ra đủ mọi giống vật từ những con to lớn\nnhư voi, tê ngưu, cọp đến những vật bé tí như sâu, kiến, bọ, trùng, v.v… Sau đó, Ngọc Hoàng mới gạn lấy\nchất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn. Đó là loài người. Và cũng vì thế mà\nngười ta khôn hơn vạn vật.”\n(Nguyễn Đổng Chi, Mười hai bà mụ)\nChi tiết “Ngọc Hoàng mới gạn lấy chất trong, tinh túy rồi nặn ra một giống vật khác công phu hơn” có\nnghĩa là gì?",
    "options": [
      "A. Loài người là giống loài được sáng tạo một cách công phu từ chất trong, tinh túy.",
      "B. Loài người là giống loài được tạo ra sau cùng và đồng chất với mọi loài, mọi vật.",
      "C. Loài người là một hợp chất trong lành và tinh túy giống như mọi loài, mọi vật.",
      "D. Loài người là sự sáng tạo thông thái của Ngọc Hoàng từ những chất cặn còn sót lại."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 2: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 503,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Tuổi đà ngoại tám mươi già,\nThoắt thoắt xem bằng bóng ngựa qua.\nMai bạc lạnh quen nhiều tháng tuyết,\nCúc vàng thơm đổi mấy phen hoa.\nSang có phận, là ơn chúa,\nĐược làm người, bởi đức cha.\nAm quán ngày nhàn, rồi mọi việc,\nDầu ai tự tại, mặc dầu ta.”\n(Nguyễn Bỉnh Khiêm, Bạch Vân quốc ngữ thi)\nXác định thể thơ của văn bản trên.",
    "options": [
      "A. Thất ngôn xen lục ngôn.",
      "B. Thất ngôn xen ngũ ngôn.",
      "C. Thất ngôn tứ tuyệt.",
      "D. Lục ngôn bát cú."
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 3: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 504,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“… Bà phu nhân nói:\n[…] Những cuộc gặp gỡ hiếm lạ, đời nào mà không có: như đền Bạc hậu, như quán Cao đường, như thần\nLạc phố lướt sóng, như nàng Giang Phi cởi ngọc, như Lộng Ngọc lấy Tiêu Sử, như Thái Loan gặp Văn\nTiêu, như Lan Hương gặp Trương Thạc… Bao nhiêu những chuyện cũ còn sờ sờ đó, nếu thế này mà bị\nchê cười thì đã có những người trước ấy họ chịu đỡ tiếng cười cho mình.\nMọi người cùng phá lên cười rất vui vẻ. Rồi đó mặt trời gác núi, các khách khứa đều giải tán cả.”\n(Nguyễn Dữ, Chuyện Từ Thức lấy vợ tiên)\nDòng nào sau đây không thể hiện đặc trưng hình thức nghệ thuật của văn bản trên?",
    "options": [
      "A. Sử dụng biện pháp tu từ nhân hóa.",
      "B. Dùng nhiều điển tích, điển cố.",
      "C. Tổ chức theo cấu trúc biền văn.",
      "D. Sử dụng biện pháp tu từ liệt kê. 4"
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 4: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 505,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Ôi!\nTrời Bến Nghé mây mưa sùi sụt, thương đấng anh hùng gặp thuở gian truân, Đất Gò Công cây cỏ ủ ê,\ncảm niềm thần tử mắc nơi họa hại.\nXưa còn làm tướng, dốc rạng dồi hai chữ bình Tây, Nay thác về thần, nên vưng hộ một câu phục thái.\nHỡi ôi thương thay!”\n(Nguyễn Đình Chiểu, Văn tế Trương Định)\nChú thích:\nRạng dồi: làm sáng tỏ, làm rạng rỡ\nVưng hộ: bảo bọc, giúp đỡ\nPhục thái: trở lại thái bình\nDòng nào sau đây không thể hiện cảm xúc và tư tưởng của văn bản?",
    "options": [
      "A. Tiếc thương cho sự hy sinh vì nước vì dân của đấng anh hùng.",
      "B. Cảm thương trước tai họa mà đấng anh hùng mắc phải..",
      "C. Tin vị anh hùng sống làm tướng đánh giặc, thác theo thần giúp đỡ nhân dân.",
      "D. Xót xa cho trời Bến Nghé, đất Gò Công hoang tàn trong cơn binh biến."
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 5: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 506,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Đời bộ đội của tôi đã bước những bước đi đầu tiên trong các cánh rừng cằn cỗi vùng Bãi Nai.\nBa tháng trời dãi gió dầm mưa trên thao trường đã giúp chúng tôi gột sạch mọi tàn tích của nếp sống thị\nthành và trụ vững bản thân mình vào đội ngũ. Chúng tôi tập đeo gạch hành quân, tập lăn lê trườn toài,\ntập nín thở bóp cò, tập bám trụ chiến hào, tập vọt tiến tấn công, tập đâm lê, tập quăng lựu đạn, tập nhồi\nbộc phá, tập tuân lệnh chỉ huy và tập bền bỉ chịu khổ.”\n(Bảo Ninh, Đêm trừ tịch)\nNgười kể chuyện trong văn bản trên sử dụng điểm nhìn trần thuật nào?",
    "options": [
      "A. Điểm nhìn của ngôi thứ nhất.",
      "B. Điểm nhìn của ngôi thứ ba toàn tri.",
      "C. Điểm nhìn của ngôi thứ ba hạn tri.",
      "D. Điểm nhìn của ngôi thứ hai."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 6: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 507,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Nhớ cát là nỗi nhớ của tôi\nNhắm mắt lại thấy một màu trắng xóa\nTrơ trụi đen những ngôi nhà lợp cỏ\nGió cát bào tróc vỏ những hàng dương\nKhông tìm đâu lấy một con đường\nChỉ có cát phơi mình dưới nắng\nChỉ có cát nghiêng về phía sóng\nNhư tấm lòng tôi ngóng những thuyền xa”\n(Xuân Quỳnh, Nhớ cát)\nChủ thể trữ tình trong đoạn thơ trên là",
    "options": [
      "A. nỗi nhớ của tôi.",
      "B. cát.",
      "C. tôi.",
      "D. tấm lòng tôi."
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 7: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 508,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Nước ở đâu mà tuôn mãi không thôi. Nước rung rào rào trên lá. Nước tràn trên mặt đất. Nước\nchảy theo những thân cây. Rừng ướt sũng, đất ướt sũng, và trời mãi cũng chẳng thấy khô hơn. Mới xế\nchiều mà rừng đã muốn tối om. Rừng như xị ra. Mặt trời vẫn còn đâu đó giữa đường chân trời. Nó đang\nthổi hồng một đám mây màu xám chì, giống như đống trấu ủ giữa sương mù đặc sệt.”\n(Chu Lai, Nắng đồng bằng)\nDòng nào dưới đây chứa các biện pháp tu từ xuất hiện trong văn bản trên?",
    "options": [
      "A. Phép điệp, so sánh, phóng đại. C. Phép điệp, nói giảm, nói tránh, so sánh.",
      "B. C. Phép điệp, nói giảm, nói tránh, so sánh.",
      "C. Phép điệp, nói giảm, nói tránh, so sánh. B. Phép điệp, hoán dụ, so sánh.",
      "D. Phép điệp, so sánh, nhân hóa."
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 8: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 509,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Thầy nhạc: Thưa ngài, đáng lẽ ngài phải học âm nhạc, cũng như ngài đang học khiêu vũ.\nĐó là hai ngành nghệ thuật có liên quan chặt chẽ với nhau.\nThầy múa: Và nó mở mang trí não cho con người hiểu biết những cái đẹp.\nÔng Giuốc-đanh: Thế những người sang trọng cũng có học âm nhạc chứ?\nThầy nhạc: Thưa ngài có chứ.\nÔng Giuốc-đanh: Thế thì tôi sẽ học. Nhưng tôi không biết tôi có thể học vào thì giờ nào vì, ngoài thầy\ndạy kiếm thuật đến chỉ dẫn cho tôi, tôi lại còn mướn một thầy dạy triết lý, sáng hôm nay bắt đầu đây.”\n(Mô-li-e, Trưởng giả học làm sang)\nĐoạn đối thoại trên cho thấy mục đích chính khiến ông Giuốc-đanh học âm nhạc là gì?",
    "options": [
      "A. Ông Giuốc-đanh muốn thể hiện niềm đam mê với âm nhạc.",
      "B. Ông Giuốc-đanh muốn mở mang hiểu biết về cái đẹp.",
      "C. Ông Giuốc-đanh muốn trở thành người sang trọng.",
      "D. Ông Giuốc-đanh muốn giỏi âm nhạc như giỏi kiếm thuật và triết lý. 5"
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 9: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 510,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Thừa chu thuận thủy vãng Ung Ninh\nHĩnh điếu thuyền lan tự giảo hình\nLưỡng ngạn hương thôn trù mật thậm\nGiang tâm ngư phủ điếu thuyền khinh.”\n(Hồ Chí Minh, Bán lộ tháp thuyền phó Ung)\nDịch thơ:\n“Đáp thuyền thẳng xuống huyện Ung Ninh\nLủng lẳng chân treo tựa giảo hình\nLàng xóm ven sông đông đúc thế\nThuyền câu rẽ sóng nhẹ thênh thênh.”\n(Nam Trân dịch, Giữa đường đáp thuyền đi Ung Ninh)\nDòng nào sau đây không nêu đúng phong cách nghệ thuật của Hồ Chí Minh được biểu hiện trong bài thơ trên?",
    "options": [
      "A. Phong thái ung dung, tự tại.",
      "B. Tinh thần lạc quan, yêu đời.",
      "C. Tính chất bi tráng, hào hùng.",
      "D. Màu sắc cổ điển kết hợp hiện đại."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 10: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 511,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Tôi vừa bỏ học sau sáu học kỳ “dùi kinh nấu sử” ở trường Luật. Suốt thời gian đó, sở thích duy\nnhất của tôi là đọc sách. Tôi có thể đọc ngấu nghiến bất cứ cuốn sách nào vớ được và học thuộc lòng\nnhững bài thơ độc đáo của Thế kỷ vàng Tây Ban Nha. Tôi đã đọc hầu hết các bản dịch cũng như nguyên\nbản các tác phẩm được coi là nổi tiếng lúc bấy giờ và những cuốn sách đó đã cho tôi hiểu được kỹ năng\ncũng như các tiểu xảo cần có khi viết tiểu thuyết.”\n(Gabriel Garcia Marquez, Sống để kể lại)\nNội dung của văn bản trên là gì?",
    "options": [
      "A. Niềm đam mê học Luật và lối học “dùi kinh nấu sử” ở người viết.",
      "B. Niềm đam mê đọc sách và tình yêu văn chương ở người viết.",
      "C. Niềm đam mê sáng tác thơ ca và tiểu thuyết ở người viết.",
      "D. Niềm đam mê đọc các bản dịch và nguyên tác ở người viết."
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 11: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 512,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Dòng nào sau đây nêu tên những tác phẩm cùng phong cách sáng tác của trường phái văn học\nhiện thực?",
    "options": [
      "A. Tắt đèn (Ngô Tất Tố), Số đỏ (Vũ Trọng Phụng), Chí Phèo (Nam Cao).",
      "B. Chữ người tử tù (Nguyễn Tuân), Giông tố (Vũ Trọng Phụng), Lão Hạc (Nam Cao).",
      "C. Hai đứa trẻ (Thạch Lam), Tắt đèn (Ngô Tất Tố), Số đỏ (Vũ Trọng Phụng).",
      "D. Lão Hạc (Nam Cao), Số đỏ (Vũ Trọng Phụng), Chữ người tử tù (Nguyễn Tuân)."
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 12: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 513,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Dòng nào dưới đây có các từ viết đúng chính tả?",
    "options": [
      "A. Sai xót, sơ suất, sừng sộ.",
      "B. Sai xót, sơ xuất, sừng sộ.",
      "C. Sai sót, sơ xuất, sừng xộ.",
      "D. Sai sót, sơ suất, sừng sộ."
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 13: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 514,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Câu nào dưới đây chứa từ viết sai chính tả?",
    "options": [
      "A. Sở Giao thông Vận tải kiến nghị xây kè chống sạt lở hai đoạn bờ sông ở thành phố này.",
      "B. Những chính sách đó quá xa vời thực tế, quá viễn vông nên rất khó được phê duyệt.",
      "C. Trầm cảm là kẻ thù giấu mặt đối với sức khỏe tinh thần lẫn thể chất của con người.",
      "D. Anh Phụng và nhóm bạn đã dành năm ngày để đi bộ đến hồ axit lớn nhất thế giới."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 14: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 515,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Theo tôi, đó là lối giáo dục đứng đắn, đích thực của việc dạy; người dạy sẽ làm đúng vai trò của\nmình hơn, nhất là biết khiêm cung hơn.”\nTừ nào bị dùng sai trong câu trên?",
    "options": [
      "A. đứng đắn.",
      "B. đích thực.",
      "C. vai trò.",
      "D. khiêm cung."
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 15: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 516,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Những mái nhà đơn sơ, giản dị nơi thâm sâu cùng cốc của tỉnh Lào Cai nằm sát bên mép núi.”\nXác định lỗi sai trong câu trên.",
    "options": [
      "A. Sai về dùng từ.",
      "B. Sai ngữ pháp.",
      "C. Sai quy chiếu.",
      "D. Sai logic."
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 16: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 517,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Câu nào dưới đây là câu đúng?",
    "options": [
      "A. Sự đồng hành, bên cạnh lẫn nhau là minh chứng rõ nhất cho tình yêu sâu đậm.",
      "B. Giải pháp này như cứu cánh nhóm chúng tôi trong lúc bế tắc.",
      "C. Yếu điểm của tôi vẫn là sự thiếu tự tin khi đứng trước đám đông.",
      "D. Qua đó, ta càng thấy học vấn uyên bác và tầm nhìn xa rộng của anh."
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 17: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 518,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Để đánh dấu bước ngoặt mới về phát triển thị trường tại các quốc gia Đông Nam Á”.\nCâu trên là câu chưa hoàn chỉnh vì thiếu thành phần nào sau đây?",
    "options": [
      "A. Thiếu chủ ngữ.",
      "B. Thiếu vị ngữ.",
      "C. Thiếu trạng ngữ.",
      "D. Thiếu nòng cốt câu. 6"
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 18: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 519,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Chúng tôi đã thảo luận về dự án này hai lần: một lần vào năm ngoái, một lần ngay tại văn\nphòng đại diện của công ti ở phía Nam.”\nNhận định nào về câu trên là đúng?",
    "options": [
      "A. Câu sai logic ngữ nghĩa.",
      "B. Câu mắc lỗi dùng từ.",
      "C. Câu sai cấu tạo ngữ pháp.",
      "D. Câu mắc lỗi dấu câu."
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 19: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 520,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Chỉ ra câu sai trong các câu sau:",
    "options": [
      "A. Do tình cảm chân thành, gần gũi của các anh chị khiến Khang gắn bó với nhóm hơn.",
      "B. Nhờ có những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn.",
      "C. Những tình cảm chân thành, gần gũi của các anh chị làm cho Khang gắn bó với nhóm hơn.",
      "D. Đáp lại những tình cảm chân thành, gần gũi của các anh chị, Khang gắn bó với nhóm hơn. Dựa vào thông tin dưới đây để trả lời các câu từ 21 đến 25 Biến đổi khí hậu đang được dự báo sẽ làm gia tăng hạn hán, qua đó làm trầm trọng thêm tình trạng xâm nhập mặn ở Đồng bằng sông Cửu Long (ĐBSCL). Vậy sự kết hợp giữa hai yếu tố này sẽ tác động trực tiếp như thế nào đến sự tồn tại của nông dân ĐBSCL, những người chủ yếu có sinh kế phụ thuộc vào việc trồng lúa? M. A. van Aalst và các cộng sự ở Trường Kinh doanh và Kinh tế, Đại học Vrije Amsterdam, đã đặt câu hỏi này vào cả vùng ĐBSCL và xem xét mức độ tổn thương ở các mức quy mô khác nhau, cả cấp quận, cấp xã và cấp hộ gia đình. Giải thích vì sao lại chọn ĐBSCL, các nhà nghiên cứu cho rằng đây là điểm nóng về ảnh hưởng của biến đổi khí hậu và môi trường. Trong cả thập kỷ qua, vùng này đã trải qua những thay đổi môi trường ở tốc độ nhanh và chậm, như nước biển dâng, lũ lụt, xâm nhập mặn và hạn hán trong khi nguồn sống của 75% cư dân phụ thuộc vào nông nghiệp. Sản phẩm nông nghiệp chiếm vị thế chủ đạo của ĐBSCL là lúa, vốn dễ bị ảnh hưởng bởi điều kiện thời tiết khắc nghiệt. Họ tập trung vào giai đoạn 2015-2016, khi cả đồng bằng phải gánh chịu đợt hạn hán khốc liệt nhất trong lịch sử, đồng thời còn phải trong cảnh dòng chảy từ thượng nguồn xuống thấp hơn 65 đến 70% so với trung bình hằng năm. Sử dụng các mô hình tính toán, họ phát hiện ra mức độ dễ bị tổn thương ở cấp độ huyện và xã có những điểm khác biệt. Ở cấp huyện, mặc dù có mối liên hệ giữa nghèo đói và thất thu vụ mùa nhưng không có chỉ dấu trực tiếp giữa sự phơi nhiễm xâm nhập mặn với nghèo đói, mặc dù thông thường xâm nhập mặn sẽ góp phần làm giảm năng suất thu hoạch với tỉ lệ xấp xỉ 21%. Ở cấp xã, mối liên hệ này thể hiện tương đối rõ nét. Các xã nghèo hơn và bị xâm nhập mặn nhiều hơn đều phải hứng chịu cảnh bị mất mát mùa vụ ở mức cao trong cùng năm. Do đó, các cộng đồng nghèo sẽ có mức độ tổn thương do tác động trực tiếp của môi trường cao hơn, điều vẫn còn chưa thể hiện rõ ở cấp huyện. Ở cấp hộ gia đình, các hộ sống trong khu vực nghèo sẽ phải đối mặt với khả năng mất mùa cao hơn. Mối quan hệ này chứng tỏ hiệu ứng này thậm chí còn mạnh hơn ở những nơi chịu xâm nhập mặn cao, chỉ dấu là những hộ sống ở khu vực thịnh vượng hơn đều có năng lực thích ứng tốt hơn. Các mô hình cũng cho thấy mức độ rủi ro cao hơn ở cấp hộ gia đình có liên quan đáng kể với mức độ giáo dục thấp hơn, tài sản thấp hơn và quy mô canh tác nhỏ hơn. (Theo Anh Vũ, Tính dễ bị tổn thương và khó phục hồi của nông dân ĐBSCL trong hạn hán)"
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 20: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 521,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Bao nhiêu % cư dân ĐBSCL có nguồn sống phụ thuộc vào nông nghiệp?",
    "options": [
      "A. 21%.",
      "B. 65-70%.",
      "C. 50%.",
      "D. 75%."
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 21: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 522,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Vì sao nhóm nghiên cứu chọn ĐBSCL là địa phương để khảo sát biến đổi khí hậu?",
    "options": [
      "A. Vì ĐBSCL là một đồng bằng quan trọng của cả nước.",
      "B. Vì ĐBSCL là điểm nóng về ảnh hưởng của biến đổi khí hậu và môi trường.",
      "C. Vì ĐBSCL có mức độ tổn thương ở các mức quy mô khác nhau.",
      "D. Vì ĐBSCL gánh chịu đợt hạn hán khốc liệt nhất trong giai đoạn 2015-2016."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 22: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 523,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Những tác động của biến đổi khí hậu đến với môi trường sinh thái ĐBSCL là gì?",
    "options": [
      "A. Nước biển dâng, lũ lụt, xâm nhập mặn và hạn hán.",
      "B. Xói mòn, lũ lụt, hạn hán và hiệu ứng nhà kính.",
      "C. Phơi nhiễm xâm nhập mặn và giảm đa dạng sinh học.",
      "D. Xói mòn, hạn hán, nước biển dâng và xâm nhập mặn. 7"
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 23: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 524,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Ở cấp huyện, mặc dù có mối liên hệ giữa nghèo đói và thất thu vụ mùa nhưng không có chỉ dấu\ntrực tiếp giữa sự phơi nhiễm xâm nhập mặn với nghèo đói, mặc dù thông thường xâm nhập mặn sẽ góp\nphần làm giảm năng suất thu hoạch với xấp xỉ 21%”.\nCụm từ “Ở cấp huyện” trong câu trên là thành phần gì của câu?",
    "options": [
      "A. Khởi ngữ.",
      "B. Trạng ngữ.",
      "C. Vị ngữ.",
      "D. Chủ ngữ."
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 24: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 525,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Chủ đề chính của văn bản trên là gì?",
    "options": [
      "A. Những biểu hiện của biến đổi khí hậu ở ĐBSCL.",
      "B. Hậu quả của hiện tượng xâm nhập mặn ở ĐBSCL.",
      "C. Ảnh hưởng của biến đổi khí hậu đến thiên nhiên ĐBSCL.",
      "D. Ảnh hưởng của biến đổi khí hậu đến đời sống người dân ĐBSCL. Dựa vào thông tin dưới đây để trả lời các câu từ 26 đến 30 Càng chung sống lâu năm với nghề viết, tôi càng tin rằng văn chương nói riêng và nghệ thuật nói chung không nhằm và cũng không có khả năng phản ánh cuộc đời y như nguyên trạng (1). Ngay cả nhiếp ảnh là nghệ thuật gần với sự trung thực nhất cũng không thể phản ánh được mặt sau của quả táo (2). Nhưng ngay cả khi có thể mô tả cuộc đời như nó vốn là, văn chương cũng từ chối làm điều đó (3). Bởi nếu vậy, văn chương sẽ không có lí do để tồn tại: người đọc khôn ngoan sẽ đọc trực tiếp trong cuộc đời thay vì nhìn vào trang sách (4). Suy cho cùng, thế giới mà người đọc tìm thấy và muốn thấy trong những trang văn bao giờ cũng là thế giới đã được lọc qua tâm hồn của người viết; đó là thế giới đã được nhà văn tháo ra và lắp lại theo một cấu trúc và tỉ lệ hoàn toàn khác (5). Thông qua cung cách thiết kế cái thế giới văn chương đó, nhà văn gửi đi những thông điệp và tìm kiếm sự chia sẻ (6). Những thông tin đủ loại của đời thường, đã có báo chí, đài truyền hình và bà hàng xóm cung cấp (7). Người đọc thông minh bao giờ cũng chờ đợi ở những trang văn một hiện thực khác - một hiện thực cao hơn so với hiện thực ngoài kia (8). (Nguyễn Nhật Ánh, Cảm ơn người lớn)"
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 25: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 526,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "“Càng … càng…” ở câu (1) của văn bản trên thể hiện mối quan hệ gì giữa các thành phần câu?",
    "options": [
      "A. Nhân quả.",
      "B. Chính phụ.",
      "C. Hô ứng.",
      "D. Đẳng lập."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 26: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 527,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Từ “cung cách” trong câu (6) có nghĩa là gì?",
    "options": [
      "A. Cách thức giao tiếp giữa con người với con người.",
      "B. Cách thức thể hiện thái độ ứng xử của con người.",
      "C. Cách thức con người suy tư, hồi tưởng về quá khứ.",
      "D. Cách thức tiến hành sự việc có thể quan sát được."
    ],
    "correctAnswer": 1,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 27: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  },
  {
    "id": 528,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Với cách diễn đạt “một hiện thực cao hơn so với hiện thực ngoài kia” trong câu (8), tác giả đã sử\ndụng biện pháp tu từ gì?",
    "options": [
      "A. Liệt kê.",
      "B. Nhân hóa.",
      "C. Chơi chữ.",
      "D. Chêm xen."
    ],
    "correctAnswer": 0,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 28: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Trung bình"
  },
  {
    "id": 529,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Ý nào sau đây không được đề cập trong văn bản trên?",
    "options": [
      "A. Văn chương phản ánh đa dạng hiện thực đời sống.",
      "B. Nhiếp ảnh cũng không thể phản ánh đầy đủ hiện thực đời sống.",
      "C. Nhà văn luôn tìm kiếm sự chia sẻ thông qua tác phẩm.",
      "D. Người đọc thông minh xem văn chương là hiện thực đời sống."
    ],
    "correctAnswer": 3,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 29: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Dễ"
  },
  {
    "id": 530,
    "partId": "part1",
    "section": "vietnamese",
    "sectionName": "Tiếng Việt (Đọc hiểu & Sử dụng ngôn ngữ)",
    "question": "Quan điểm của người viết thể hiện trong văn bản trên là gì?",
    "options": [
      "A. Văn chương không nhằm và không có khả năng phản ánh đời sống như nguyên trạng.",
      "B. Văn chương hướng đến sự mô tả trung thực và đầy đủ về cuộc đời như nó vốn là.",
      "C. Văn chương có lí do tồn tại riêng của nó: phục vụ cho độc giả thông minh.",
      "D. Văn chương có cách thiết kế tương đồng với cấu trúc và tỉ lệ của hiện thực đời sống. 1.2. TIẾNG ANH Questions 31-35: Choose a suitable word or phrase (A, B, C, or D) to fill in each blank."
    ],
    "correctAnswer": 2,
    "explanation": "[Đề ĐGNL 2023] Phân tích phương pháp giải chi tiết câu 30: Áp dụng công thức và tư duy loại trừ theo hướng dẫn chuẩn V-ACT.",
    "difficulty": "Khó"
  }
],
  'vact-logic-focus': [
  {
    "id": 91,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Danh sách nào dưới đây có thể là thứ tự các học sinh đạt giải, từ giải nhất đến giải năm?",
    "options": [
      "A. M, P, N, Q, R.",
      "B. P, R, N, M, Q.",
      "C. N, P, R, Q, M.",
      "D. Q, M, R, N, P."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 91, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 92,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Nếu Q đạt giải năm thì M sẽ đạt giải nào?",
    "options": [
      "A. Giải nhất.",
      "B. Giải nhì.",
      "C. Giải ba.",
      "D. Giải tư."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 92, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 93,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Nếu M đạt giải nhì thì phát biểu nào sau đây có thể sai?",
    "options": [
      "A. N không đạt giải ba.",
      "B. P không đạt giải nhất.",
      "C. P không đạt giải tư.",
      "D. Q không đạt giải nhất."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 93, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 94,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Nếu P đạt giải cao hơn N đúng 2 bậc thì phát biểu nào sau đây nêu đầy đủ và chính xác danh\nsách các học sinh có thể đạt giải nhì?",
    "options": [
      "A. P.",
      "B. M, R.",
      "C. P, R.",
      "D. M, P, R. Dựa vào thông tin dưới đây để trả lời các câu từ 95 đến 98 Một đoàn khảo sát thực địa gồm 3 giáo viên là R, S, T; 3 học sinh nữ là J, K, L và 2 học sinh nam là N, O; mỗi người được đi trên một trong 3 xe ô tô và thoả mãn các điều kiện sau: - Mỗi xe chỉ chở tối đa 3 người. - Mỗi xe phải có 1 giáo viên. - O và S phải ngồi cùng một xe. - K và L không ngồi cùng một xe. - N và R không ngồi cùng một xe."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 94, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 95,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Điều nào sau đây không thể đúng trong cách sắp xếp người ngồi trên các xe?",
    "options": [
      "A. K và S có thể ngồi cùng một xe. C. N và S có thể ngồi cùng một xe.",
      "B. C. N và S có thể ngồi cùng một xe.",
      "C. N và S có thể ngồi cùng một xe. B. L và R có thể ngồi cùng một xe.",
      "D. O và T có thể ngồi cùng một xe."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 95, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 96,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Nếu O ngồi cùng xe với K thì những người nào phải ngồi cùng xe với nhau?",
    "options": [
      "A. O và N.",
      "B. J và T.",
      "C. N và K.",
      "D. N và T."
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 96, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 97,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Nếu L và R ngồi cùng xe thì người nào có thể ngồi cùng xe với L và R?",
    "options": [
      "A. J.",
      "B. K.",
      "C. T.",
      "D. O."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 97, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 98,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Nếu N ngồi cùng xe với S thì câu nào sau đây phải đúng?",
    "options": [
      "A. J ngồi trên xe có 3 người.",
      "B. L ngồi trên xe có 2 người.",
      "C. K ngồi cùng xe với O.",
      "D. J ngồi cùng xe với N. Dựa vào thông tin dưới đây để trả lời các câu từ 99 đến 102 Bảng sau thể hiện tỉ lệ nam/nữ ở 5 tỉnh có tỉ lệ cao nhất toàn quốc trong năm 2021 TT Tỉnh Tổng số (người) Nam (người) Nữ (người) Tỉ lệ (nam/nữ) 1 Đắk Nông 622.168 320.713 301.455 1,064 2 Lạng Sơn 781.655 399.410 382.245 1,045 3 Bắc Kạn 313.905 160.036 153.869 1,040 4 Quảng Ninh 1.320.324 671.522 648.802 1,035 5 Lào Cai 730.420 371.306 359.114 1,034"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 98, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 99,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Tỉ lệ nam/nữ trung bình của cả 5 tỉnh là?",
    "options": [
      "A. 1,022.",
      "B. 1,042.",
      "C. 1,055.",
      "D. 1,061."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 99, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 100,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Biết rằng tỉnh Kiên Giang đứng thứ 6 với tỉ lệ chênh lệch nam/nữ là 1,028, đồng thời biết rằng\ntỉnh Kiên Giang có 873.236 nam. Hỏi dân số tỉnh Kiên Giang xấp xỉ bao nhiêu?",
    "options": [
      "A. 1.723.000.",
      "B. 1.842.000.",
      "C. 1.932.000.",
      "D. 2.012.000. 14"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 100, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 101,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Ở tỉnh Đắk Nông, theo thống kê về độ tuổi năm 2021, tỉ lệ chênh lệch nam/nữ lớn nhất là 1,217\nở độ tuổi 20-24. Biết rằng dân số ở độ tuổi 20-24 chiếm 7,15% tổng dân số toàn tỉnh. Hỏi dân số là nam\ngiới ở độ tuổi 20-24 của tỉnh Đắk Nông bằng khoảng bao nhiêu?",
    "options": [
      "A. 19.450.",
      "B. 20.340.",
      "C. 22.410.",
      "D. 24.420."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 101, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 102,
    "partId": "part3",
    "section": "logic_data",
    "sectionName": "Tư duy khoa học: Logic & Phân tích số liệu",
    "question": "Biết rằng Cà Mau có tổng dân số bằng 31,7% tổng dân số của 5 tỉnh ở bảng trên. Số nam giới ở\nCà Mau nhiều hơn số trung bình nam giới của cả 5 tỉnh 57,28%. Tính tỉ lệ nam/nữ của tỉnh Cà Mau.",
    "options": [
      "A. 1,012.",
      "B. 1,019.",
      "C. 1,026.",
      "D. 1,035. 3.2. SUY LUẬN KHOA HỌC Dựa vào thông tin dưới đây để trả lời các câu từ 103 đến 105 Năng lượng tự do Gibbs (G) là năng lượng của phản ứng hóa học và có thể thực hiện công có ích. Ở nhiệt độ và áp suất không đổi (p = 1 bar), biến thiên năng lượng tự do của phản ứng ΔrG° (kJ) được tính theo công thức sau: ΔrG° = ΔrH° – TΔrS°. T là nhiệt độ (K). Trong đó: ΔrH° (kJ) và ΔrS° (J/K) lần lượt là biến thiên enthalpy và entropy của phản ứng. Phản ứng tỏa nhiệt thì ΔrH° có giá trị âm còn phản ứng thu nhiệt thì ΔrH° có giá trị dương. Dấu của ΔrG° được dùng để dự đoán chiều hướng xảy ra của một phản ứng hóa học. Nếu ΔrG° âm thì phản ứng tự xảy ra, còn nếu ΔrG° dương thì phản ứng không tự xảy ra."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 102, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Tư duy khoa học: Logic & Phân tích số liệu để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 600,
    "partId": "part2",
    "section": "logic_data",
    "sectionName": "Tư duy logic & Xử lý số liệu",
    "question": "Một lớp học có tất cả học sinh đều học tiếng Anh hoặc tiếng Pháp. Trong đó, có 25 học sinh học\ntiếng Anh, 20 học sinh học tiếng Pháp và 8 học sinh học cả tiếng Anh và tiếng Pháp. Tổng số học sinh\ncủa lớp học đó là:",
    "options": [
      "A. 37.",
      "B. 45.",
      "C. 53.",
      "D. 41."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 61, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 601,
    "partId": "part2",
    "section": "logic_data",
    "sectionName": "Tư duy logic & Xử lý số liệu",
    "question": "Đặt\t27 8 2\tlog 5, log 7, log 3.\t= = =\ta b c\t Khi đó\t12\tlog 35\t bằng\nA.3 3 .\n1\n+\n+\nac b\nc B.2 3 .\n3\n+\n+\nac b\nc C.3 3 .\n2\n+\n+\nac b\nc D.2 3 .\n2\n+\n+\nac b\nc",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 62, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 602,
    "partId": "part2",
    "section": "logic_data",
    "sectionName": "Tư duy logic & Xử lý số liệu",
    "question": "Biết rằng2\nlim ( 1 ) 2.\nx ax bx x\n→+ + + − =\t Giá trị củaP ab\t=\t là:",
    "options": [
      "A. 4.\tP =",
      "B. 2.\tP =",
      "C. 1.\tP =",
      "D. 1.\tP = −"
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 63, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 603,
    "partId": "part2",
    "section": "logic_data",
    "sectionName": "Tư duy logic & Xử lý số liệu",
    "question": "Cho hàm số2\n( ) 2 2 1.\tf x x x\t= − +\t Đạo hàm của hàm số tại\t1\tx =\t là:\nA.\t'(1) 1.\tf =\t B.\t'(1) 2.\tf =\t C.\t'(1) 1.\tf = −\t D.1\n'(1) .\n2\nf =\n\n\n11",
    "options": [
      "A. Phương án A",
      "B. Phương án B",
      "C. Phương án C",
      "D. Phương án D"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 64, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 604,
    "partId": "part2",
    "section": "logic_data",
    "sectionName": "Tư duy logic & Xử lý số liệu",
    "question": "Cho hàm số\t( )\ty f x\t=\t xác định trên và có3 5\n'( ) ( 1) ( 2) .\tf x x x x\t= + −\t Số điểm cực tiểu của\nhàm số là:",
    "options": [
      "A. 1.",
      "B. 2.",
      "C. 3.",
      "D. 4."
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 65, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 605,
    "partId": "part2",
    "section": "logic_data",
    "sectionName": "Tư duy logic & Xử lý số liệu",
    "question": "Số đường tiệm cận của đồ thị hàm số\n2\n2\n4 3\n4\nx x\ny x\n− +\n= − là:",
    "options": [
      "A. 1.",
      "B. 2.",
      "C. 3.",
      "D. 4. Dựa vào thông tin dưới đây để trả lời các câu từ 67 đến 69 Cho hàm số3 2 ( ) 2 3( 1) 6 1,\tf x x m x mx\t= − + + +\t với m là tham số thực."
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 66, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 606,
    "partId": "part2",
    "section": "logic_data",
    "sectionName": "Tư duy logic & Xử lý số liệu",
    "question": "Với m = 3, giá trị lớn nhất của hàm số\t( )\ty f x\t trên đoạn [0; 3] là:",
    "options": [
      "A. 5.",
      "B. 9.",
      "C. 11.",
      "D. 17."
    ],
    "correctAnswer": 1,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 67, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Dễ"
  },
  {
    "id": 607,
    "partId": "part2",
    "section": "logic_data",
    "sectionName": "Tư duy logic & Xử lý số liệu",
    "question": "Hàm số\t( )\ty f x\t nghịch biến trên khoảng (1; 3) khi và chỉ khi",
    "options": [
      "A. 1.\tm",
      "B. 1.\tm",
      "C. 3.\tm",
      "D. 3.\tm"
    ],
    "correctAnswer": 0,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 68, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  },
  {
    "id": 608,
    "partId": "part2",
    "section": "logic_data",
    "sectionName": "Tư duy logic & Xử lý số liệu",
    "question": "Đường thẳng\t1\ty =\t cắt đồ thị hàm số\t( )\ty f x\t tại hai điểm phân biệt có hoành độ lớn hơn 2 khi\nvà chỉ khi",
    "options": [
      "A. 3.\tm",
      "B. 3.\tm",
      "C. 9.\tm",
      "D. 9.\tm Dựa vào thông tin dưới đây để trả lời các câu từ 70 đến 71 Cho cấp số cộng( )\tn\tu\t xác định bởi2 6 3 7 18 22. u u u u"
    ],
    "correctAnswer": 3,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 69, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Khó"
  },
  {
    "id": 609,
    "partId": "part2",
    "section": "logic_data",
    "sectionName": "Tư duy logic & Xử lý số liệu",
    "question": "Ta có công sai của cấp số cộng( )\tn\tu\t là:",
    "options": [
      "A. 2.\td",
      "B. 2.\td",
      "C. 3.\td",
      "D. 3.\td"
    ],
    "correctAnswer": 2,
    "explanation": "Lời giải chi tiết chuẩn ĐHQG-HCM: Phân tích kỹ dữ kiện câu hỏi số 70, áp dụng đúng quy tắc kiến thức trọng tâm của phân môn Toán học (Đại số, Hình học & Bài toán thực tế) để chọn đáp án chính xác.",
    "difficulty": "Trung bình"
  }
]
};
