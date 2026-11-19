// ĐẠI THƯ VIỆN SÁCH GIÁO TRÌNH & CHUYÊN KHẢO V-ACT (ĐHQG TP.HCM)
// Thiết kế 5 cuốn sách hoàn chỉnh cho từng phân môn chuẩn GDPT 2018

export const THEORY_BOOKS = [
  {
    id: 'book-tv',
    title: 'Sách 1: Giáo Trình Chuyên Khảo Tiếng Việt ĐGNL',
    subtitle: 'Ngữ Pháp, Phong Cách Chức Năng, Nghệ Thuật Tu Từ & Kỹ Năng Đọc Hiểu Văn Bản',
    badge: '30 Câu • 300 Điểm',
    badgeColor: 'bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200 border-rose-300 dark:border-rose-800',
    iconColor: 'text-rose-600',
    totalChapters: 5,
    chapters: [
      {
        id: 'tv-c1',
        number: 'Chương 1',
        title: 'Bản Đồ 6 Phong Cách Ngôn Ngữ & Kỹ Thuật Định Vị Trong 10 Giây',
        readTime: '12 phút',
        summary: 'Nhận diện nhanh Sinh hoạt, Báo chí, Chính luận, Nghệ thuật, Khoa học, Hành chính công vụ.',
        sections: [
          {
            type: 'text',
            heading: '1. Bản chất phân loại phong cách chức năng trong đề thi V-ACT',
            content: 'Đề thi ĐHQG-HCM luôn có từ 2 đến 4 câu hỏi yêu cầu xác định phong cách chức năng ngôn ngữ của một ngữ liệu trích đoạn. Sai lầm phổ biến của thí sinh là đọc từ đầu đến cuối một cách thụ động. Phương pháp chuẩn là quét nhanh "Dấu hiệu từ khóa hạt nhân" và "Mục đích giao tiếp chính".'
          },
          {
            type: 'table',
            heading: 'Bảng Ma Trận So Sánh 6 Phong Cách Chức Năng',
            headers: ['Phong cách', 'Mục đích cốt lõi', 'Từ khóa nhận diện hạt nhân', 'Ngữ cảnh xuất hiện'],
            rows: [
              ['Sinh hoạt', 'Trao đổi tâm tư, tình cảm cá nhân hàng ngày', 'Từ hô gọi (ơi, dạ, à), đại từ thân mật (mày, tao, anh, em), câu tỉnh lược', 'Nhật ký, thư từ cá nhân, hội thoại đời sống'],
              ['Báo chí', 'Cung cấp thông tin thời sự mới nhất, xác thực', 'Địa danh, mốc thời gian cụ thể, tên phóng viên, "theo bản tin", số liệu thực tế', 'Bản tin, bài phóng sự, xã luận báo chí'],
              ['Chính luận', 'Bày tỏ quan điểm tư tưởng chính trị, thuyết phục lập trường', 'Lý lẽ đanh thép, nhân quyền, độc lập, công lý, nghĩa vụ, chủ quyền', 'Tuyên ngôn, diễn văn, bài bình luận chính trị'],
              ['Nghệ thuật', 'Gợi cảm xúc thẩm mỹ, hình tượng hóa thế giới', 'Hình ảnh ẩn dụ, hoán dụ, nhịp điệu, câu từ trau chuốt, đa nghĩa', 'Thơ ca, truyện ngắn, tiểu thuyết, kịch kịch bản'],
              ['Khoa học', 'Truyền tải tri thức khách quan, tính trừu tượng & logic', 'Thuật ngữ chuyên ngành, định lý, công thức, số liệu thực nghiệm, phi cảm xúc', 'Giáo trình, báo cáo nghiên cứu, luận văn'],
              ['Hành chính', 'Thể hiện ý chí pháp lý và mệnh lệnh nhà nước', 'Quốc hiệu, tiêu ngữ, "Căn cứ vào...", "Quyết định ban hành...", điều khoản', 'Văn bản luật, công văn, nghị định, biên bản']
            ]
          },
          {
            type: 'callout',
            variant: 'tip',
            heading: 'Mẹo Phân Biệt "Chính Luận" và "Báo Chí" (Bẫy kinh điển)',
            text: '• BÁO CHÍ nhằm mục đích THÔNG BÁO SỰ THẬT (Chuyện gì xảy ra, ai làm, ở đâu, lúc nào).\n• CHÍNH LUẬN nhằm mục đích THUYẾT PHỤC TƯ TƯỞNG (Kêu gọi người đọc tin và làm theo một quan điểm, lập trường chính trị - xã hội).'
          }
        ]
      },
      {
        id: 'tv-c2',
        number: 'Chương 2',
        title: 'Cẩm Nang 45 Cặp Từ Dễ Nhầm Lẫn & Các Dạng Bẫy Lỗi Câu V-ACT',
        readTime: '15 phút',
        summary: 'Tra cứu nghĩa gốc các từ Hán Việt và 4 dạng lỗi câu chắc chắn xuất hiện trong đề thi.',
        sections: [
          {
            type: 'table',
            heading: 'Bảng Tra Cứu Từ Hán Việt Dễ Nhầm Nghĩa Nhất',
            headers: ['Từ ngữ', 'Nghĩa chính xác trong từ điển', 'Lỗi sai phổ biến của thí sinh'],
            rows: [
              ['Cứu cánh', 'Mục đích cuối cùng cao nhất cần đạt tới', 'Nhầm thành "sự cứu giúp / giải pháp cứu nguy"'],
              ['Yếu điểm', 'Điểm quan trọng cốt tử, mấu chốt nhất', 'Nhầm thành "nhược điểm / điểm yếu"'],
              ['Sáp nhập', 'Gộp nhiều đơn vị hành chính/tổ chức làm một', 'Viết sai chính tả thành "Sát nhập"'],
              ['Tham quan', 'Đi tận nơi để quan sát và học tập', 'Viết sai chính tả thành "Thăm quan"'],
              ['Vô hình trung', 'Tuy không có chủ ý nhưng lại tạo ra kết quả đó', 'Dùng sai thành "Vô hình chung"'],
              ['Đề huề', 'Đông vui, sum họp gia đình hòa thuận', 'Dùng sai nghĩa thành "nhiều đồ đạc cồng kềnh"'],
              ['Bạt mạng', 'Coi thường tính mạng, liều lĩnh mù quáng', 'Viết sai thành "Bạt mạng" theo nghĩa nhanh chóng'],
              ['Phong thanh', 'Nghe tin đồn thoáng qua, chưa xác thực', 'Nhầm với "phong phanh" (mặc áo phong phanh)']
            ]
          },
          {
            type: 'callout',
            variant: 'warning',
            heading: '4 Kiểu Lỗi Sai Ngữ Pháp & Logic Câu Phổ Biến',
            text: '1. Câu thiếu Chủ ngữ: "Qua tác phẩm Lão Hạc cho ta thấy tấm lòng lương thiện." → Sai vì "cho ta thấy" không có ai thực hiện; Sửa lại: "Qua tác phẩm Lão Hạc, Nam Cao cho ta thấy..."\n2. Câu sai Logic ngữ nghĩa: "Em rất thích đọc sách vì sách có màu xanh rất đẹp." (Mối quan hệ nguyên nhân - kết quả phi lý).\n3. Câu dùng từ sai kết hợp: "Lòng tin sâu sắc" → Phải là "Niềm tin sâu sắc" hoặc "Lòng tin vững chắc".\n4. Câu mơ hồ về chủ thể hành động: "Tôi nhìn thấy anh ấy chụp ảnh bằng máy ảnh mới."'
          }
        ]
      },
      {
        id: 'tv-c3',
        number: 'Chương 3',
        title: 'Hệ Thống Biện Pháp Tu Từ & Nghệ Thuật Diễn Đạt',
        readTime: '14 phút',
        summary: 'Nắm vững Ẩn dụ, Hoán dụ, Điệp từ, Chêm xen, Đảo ngữ, Liệt kê và Phép liên kết văn bản.',
        sections: [
          {
            type: 'table',
            heading: 'Phân Biệt Ẩn Dụ (Tương đồng) và Hoán Dụ (Gần gũi)',
            headers: ['Biện pháp', 'Bản chất cơ học', 'Ví dụ tiêu biểu', 'Mẹo nhận diện'],
            rows: [
              ['Ẩn dụ (So sánh ngầm)', 'Dựa trên nét TƯƠNG ĐỒNG (giống nhau về hình thức, phẩm chất, cảm giác)', '"Người Cha mái tóc bạc" (Bác Hồ giống người Cha ở tình yêu thương)', 'Có thể chuyển thành câu so sánh: "A như B"'],
              ['Hoán dụ (Chuyển nghĩa)', 'Dựa trên nét TƯƠNG CẬN (gần gũi, đi liền với nhau trong thực tế)', '"Áo chàm đưa buổi phân ly" (Áo chàm chỉ người dân Việt Bắc)', 'Không thể chuyển thành so sánh; lấy vật mang chỉ người mang']
            ]
          },
          {
            type: 'callout',
            variant: 'tip',
            heading: 'Các Phép Liên Kết Câu Trong Đoạn Văn',
            text: '• Phép Lặp: Lặp lại từ ngữ ở câu sau để duy trì chủ đề.\n• Phép Thế: Dùng đại từ (nó, họ, điều này, người ấy) để thay thế cho từ ở câu trước.\n• Phép Nối: Dùng quan hệ từ (tuy nhiên, bởi vậy, hơn nữa, mặt khác).\n• Phép Liên Tưởng (Đồng nghĩa/Trái nghĩa): Dùng các từ cùng trường từ vựng (ví dụ: bút, mực, trang giấy, lớp học).'
          }
        ]
      },
      {
        id: 'tv-c4',
        number: 'Chương 4',
        title: 'Kỹ Năng Đọc Hiểu Văn Bản Văn Học & Thơ Trữ Tình',
        readTime: '16 phút',
        summary: 'Phương pháp phân tích cảm hứng chủ đạo, giọng điệu thơ trung đại và tâm lý nhân vật văn xuôi.',
        sections: [
          {
            type: 'text',
            heading: 'Nguyên tắc xác định Cảm hứng chủ đạo',
            content: 'Cảm hứng chủ đạo là trạng thái cảm xúc nồng nàn, sâu sắc nhất bao trùm toàn bộ thi phẩm (như nỗi buồn ly biệt, niềm tự hào dân tộc, sự ngợi ca tình mẫu tử, hay nỗi niềm chiêm nghiệm nhân sinh lẽ đời). Khi trả lời câu hỏi cảm hứng chủ đạo, hãy tìm những câu thơ kết bài hoặc các từ ngữ chỉ trạng thái tâm lý được lặp lại.'
          },
          {
            type: 'callout',
            variant: 'example',
            heading: 'Ví dụ phân tích thơ Nguyễn Bỉnh Khiêm (Đề ĐGNL thực tế)',
            text: '"Khôn ngoan mới biết thăng rồi giáng / Dại dột nào hay tiếu có dài..."\n→ Giọng điệu chủ đạo: Triết lý sâu sắc, bình thản chiêm nghiệm lẽ được - mất, thăng - trầm của cuộc đời, thể hiện phong cách thanh cao, ẩn dật.'
          }
        ]
      },
      {
        id: 'tv-c5',
        number: 'Chương 5',
        title: 'Đọc Hiểu Văn Bản Thông Tin, Khoa Học & Báo Chí Dài',
        readTime: '15 phút',
        summary: 'Chiến thuật định vị dữ kiện, phân biệt sự kiện khách quan vs ý kiến chủ quan của tác giả.',
        sections: [
          {
            type: 'text',
            heading: 'Quy trình 3 bước đọc ngữ liệu dài 800 từ không bị ngợp',
            content: '1. Đọc lướt 5 câu hỏi trước để khoanh vùng từ khóa (Keywords).\n2. Quét nhanh đoạn văn để định vị vị trí xuất hiện của từ khóa (Scanning).\n3. Đọc kỹ 2 câu liền trước và liền sau từ khóa để trích xuất câu trả lời chính xác, loại trừ các phương án thêm thắt ý kiến ngoài văn bản.'
          }
        ]
      }
    ]
  },
  {
    id: 'book-ta',
    title: 'Sách 2: Cẩm Nang Toàn Diện Tiếng Anh V-ACT',
    subtitle: 'Ngữ Pháp Học Thuật, Rút Gọn Mệnh Đề, Đảo Ngữ & Kỹ Thuật Đọc Hiểu Khoa Học',
    badge: '30 Câu • 300 Điểm',
    badgeColor: 'bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-200 border-indigo-300 dark:border-indigo-800',
    iconColor: 'text-indigo-600',
    totalChapters: 4,
    chapters: [
      {
        id: 'ta-c1',
        number: 'Chương 1',
        title: '5 Trụ Cột Ngữ Pháp Tiếng Anh Chiếm 80% Đề Thi V-ACT',
        readTime: '14 phút',
        summary: 'Hòa hợp Chủ - Vị, Mệnh đề quan hệ rút gọn, Câu điều kiện đảo ngữ và Thể bị động đặc biệt.',
        sections: [
          {
            type: 'table',
            heading: '1. Hòa Hợp Chủ Ngữ - Động Từ (Subject-Verb Agreement)',
            headers: ['Cấu trúc chủ ngữ', 'Quy tắc chia động từ', 'Ví dụ'],
            rows: [
              ['S1 along with / as well as / together with + S2', 'Chia theo S1', 'The professor, along with his assistants, IS conducting research.'],
              ['Either S1 or S2 / Neither S1 nor S2', 'Chia theo S2 (chủ ngữ gần nhất)', 'Neither the teacher nor the students WERE in the lab.'],
              ['The number of + Danh từ số nhiều', 'Chia số ÍT', 'The number of applicants HAS increased significantly.'],
              ['A number of + Danh từ số nhiều', 'Chia số NHIỀU', 'A number of species ARE facing extinction.']
            ]
          },
          {
            type: 'table',
            heading: '2. Mệnh Đề Quan Hệ Rút Gọn (Reduced Relative Clauses)',
            headers: ['Dạng câu gốc', 'Cách rút gọn', 'Ví dụ'],
            rows: [
              ['Mệnh đề chủ động', 'Bỏ đại từ quan hệ, đưa V về V-ing', 'The man who lives next door → The man LIVING next door'],
              ['Mệnh đề bị động', 'Bỏ đại từ quan hệ & be, đưa V về V3/ed', 'The report which was written by Jane → The report WRITTEN by Jane'],
              ['Có the first/last/only/so sánh nhất', 'Dùng to-V (hoặc to be V3/ed)', 'Neil Armstrong was the first man TO SET foot on the Moon.']
            ]
          },
          {
            type: 'callout',
            variant: 'formula',
            heading: '3. Công Thức Đảo Ngữ Thường Gặp Nhất',
            text: '• Not only + Trợ động từ + S + V, but S also + V...\n• Hardly / Scarcely + had + S + V3/ed + when + S + V-ed\n• No sooner + had + S + V3/ed + than + S + V-ed\n• Only after / Only when + S + V, + Trợ động từ + S + V'
          }
        ]
      },
      {
        id: 'ta-c2',
        number: 'Chương 2',
        title: 'Tuyển Tập Collocations, Cụm Động Từ & Giới Từ Bẫy',
        readTime: '12 phút',
        summary: 'Ghi nhớ các cụm từ đi liền nhau không thể dịch nghĩa cơ học và giới từ chuyên biệt.',
        sections: [
          {
            type: 'table',
            heading: 'Bảng Các Collocations Học Thuật Trọng Tâm',
            headers: ['Cụm từ tiếng Anh', 'Ý nghĩa tiếng Việt', 'Bẫy thường gặp'],
            rows: [
              ['Conduct / Carry out research', 'Tiến hành nghiên cứu', 'Không dùng "make research" hay "do research"'],
              ['Make a decision', 'Đưa ra quyết định', 'Không dùng "take a decision" trong chuẩn văn bản'],
              ['Pay attention to', 'Chú ý đến điều gì', 'Nhầm giới từ "with" hoặc "for"'],
              ['Draw a conclusion', 'Rút ra kết luận', 'Không dùng "write a conclusion"'],
              ['Take responsibility for', 'Chịu trách nhiệm về', 'Nhầm sang giới từ "with"']
            ]
          }
        ]
      },
      {
        id: 'ta-c3',
        number: 'Chương 3',
        title: 'Kỹ Năng Đọc Hiểu Học Thuật: Skimming, Scanning & Inference',
        readTime: '15 phút',
        summary: 'Cách xử lý bài đọc khoa học tự nhiên và khoa học xã hội dài từ 400 - 600 từ.',
        sections: [
          {
            type: 'text',
            heading: 'Phân biệt 3 cấp độ câu hỏi đọc hiểu',
            content: '• Cấp độ 1 (Literal detail): Câu hỏi trực tiếp, thông tin nằm ngay trên mặt chữ (Dùng Scanning từ khóa).\n• Cấp độ 2 (Vocabulary in context): Từ ngữ được hiểu theo ngữ cảnh bài đọc, không suy diễn theo nghĩa phổ thông ngoài đời.\n• Cấp độ 3 (Inference / Implication): Đọc giữa các dòng chữ (Reading between the lines) để suy ra thái độ tác giả.'
          }
        ]
      },
      {
        id: 'ta-c4',
        number: 'Chương 4',
        title: 'Phương Pháp Dạng Bài Tìm Lỗi Sai & Biến Đổi Câu',
        readTime: '11 phút',
        summary: 'Quy tắc rà soát 4 vị trí gạch chân A, B, C, D trong đề thi V-ACT.',
        sections: [
          {
            type: 'callout',
            variant: 'tip',
            heading: 'Checklist 4 bước bắt lỗi câu tiếng Anh',
            text: '1. Kiểm tra thì của động từ và sự hòa hợp chủ - vị.\n2. Kiểm tra từ loại (Tính từ vs Trạng từ: Sau linking verbs dùng tính từ, bổ nghĩa động từ dùng trạng từ).\n3. Kiểm tra cấu trúc song hành (Parallel structure: A, B, and C phải cùng từ loại).\n4. Kiểm tra đại từ quan hệ (who, whom, which, whose, that).'
          }
        ]
      }
    ]
  },
  {
    id: 'book-toan',
    title: 'Sách 3: Đại Tuyển Tập Toán Học & Tư Duy Định Lượng',
    subtitle: 'Giải Tích, Bài Toán Thực Tế, Quy Hoạch Tuyến Tính, Xác Suất & Casio 580VNX',
    badge: '30 Câu • 300 Điểm',
    badgeColor: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800',
    iconColor: 'text-emerald-600',
    totalChapters: 5,
    chapters: [
      {
        id: 'toan-c1',
        number: 'Chương 1',
        title: 'Bài Toán Tối Ưu Thực Tế & Quy Hoạch Tuyến Tính',
        readTime: '16 phút',
        summary: 'Phương pháp miền đa giác lồi, hàm mục tiêu F(x, y) và mô hình hóa bài toán kinh tế.',
        sections: [
          {
            type: 'text',
            heading: 'Định lý Cực trị trên Miền Đa Giác Lồi',
            content: 'Đối với bài toán tối ưu thực tế (Ví dụ: Một xưởng may sản xuất áo và quần để đạt lợi nhuận cực đại với nguồn vải và công nhân hữu hạn):\nCho hàm mục tiêu F(x, y) = ax + by. Miền nghiệm của hệ bất phương trình là một miền đa giác lồi D có các đỉnh là A1, A2, ..., An.\n👉 ĐỊNH LÝ CỐT LÕI: Giá trị lớn nhất hoặc nhỏ nhất của hàm F(x, y) trên miền D LUÔN LUÔN đạt được tại một trong các đỉnh Ai của đa giác!'
          },
          {
            type: 'callout',
            variant: 'formula',
            heading: 'Quy Trình 3 Bước Giải Nhanh Không Cần Vẽ Đồ Thị Chi Tiết',
            text: '• Bước 1: Thiết lập hệ bất phương trình bậc nhất hai ẩn từ đề bài.\n• Bước 2: Tìm tọa độ các đỉnh của miền nghiệm bằng cách giải hệ phương trình từng cặp đường thẳng biên (Bấm Casio MENU 9 → 1 → 2).\n• Bước 3: Thay trực tiếp tọa độ các đỉnh vào F(x, y), so sánh và kết luận ngay!'
          }
        ]
      },
      {
        id: 'toan-c2',
        number: 'Chương 2',
        title: 'Hàm Số, Cực Trị & Ứng Dụng Đạo Hàm Trong Chuyển Động',
        readTime: '14 phút',
        summary: 'Ý nghĩa vật lý của đạo hàm (vận tốc, gia tốc), khảo sát cực trị và giải phương trình thực nghiệm.',
        sections: [
          {
            type: 'table',
            heading: 'Ý Nghĩa Vật Lý & Kinh Tế Của Đạo Hàm',
            headers: ['Đại lượng hàm số', 'Đạo hàm bậc một f\'(t)', 'Đạo hàm bậc hai f\'\'(t)'],
            rows: [
              ['Quãng đường chuyển động s(t)', 'Vận tốc tức thời v(t) = s\'(t)', 'Gia tốc tức thời a(t) = v\'(t) = s\'\'(t)'],
              ['Hàm tổng chi phí C(x)', 'Chi phí biên (Marginal Cost) C\'(x)', 'Tốc độ tăng chi phí'],
              ['Hàm tổng doanh thu R(x)', 'Doanh thu biên R\'(x)', 'Tối ưu hóa lợi nhuận P(x) = R(x) - C(x)']
            ]
          }
        ]
      },
      {
        id: 'toan-c3',
        number: 'Chương 3',
        title: 'Xác Suất Thống Kê & Biến Cố Có Điều Kiện',
        readTime: '15 phút',
        summary: 'Tổ hợp nCr, chỉnh hợp nPr, công thức Bayes và phân tích xác suất bài toán y tế - kinh doanh.',
        sections: [
          {
            type: 'callout',
            variant: 'formula',
            heading: 'Bộ 3 Công Thức Xác Suất Cốt Tử',
            text: '• Quy tắc biến cố đối: P(A) = 1 - P(A đối) (Đặc biệt hiệu quả khi gặp cụm từ "có ít nhất một...")\n• Xác suất có điều kiện: P(A|B) = P(A ∩ B) / P(B)\n• Công thức xác suất toàn phần: P(A) = P(B1).P(A|B1) + P(B2).P(A|B2)'
          }
        ]
      },
      {
        id: 'toan-c4',
        number: 'Chương 4',
        title: 'Hình Học Không Gian & Phương Pháp Tọa Độ Hóa Oxyz',
        readTime: '14 phút',
        summary: 'Gắn hệ trục tọa độ giải quyết bài toán góc và khoảng cách phức tạp trong 60 giây.',
        sections: [
          {
            type: 'text',
            heading: 'Kỹ thuật gắn hệ trục tọa độ Oxyz chuẩn',
            content: 'Khi gặp khối chóp hoặc lăng trụ có 3 cạnh vuông góc đôi một (hoặc có đường cao thẳng đứng):\n• Đặt gốc O tại chân đường vuông góc.\n• Trục Oz trùng với đường cao.\n• Trục Ox và Oy trùng với 2 cạnh vuông góc ở đáy.\n• Tọa độ hóa tất cả các đỉnh và dùng công thức tích có hướng vectơ để tìm góc và khoảng cách.'
          }
        ]
      },
      {
        id: 'toan-c5',
        number: 'Chương 5',
        title: 'Cẩm Nang Bấm Máy Tính Casio fx-580VN X Trong 30 Giây',
        readTime: '18 phút',
        summary: 'Bí kíp sử dụng các chế độ Table (Menu 8), Solver (Menu 9), Vector (Menu 5), Inequality (Menu B).',
        sections: [
          {
            type: 'table',
            heading: 'Bảng Phím Tắt Casio fx-580VN X Thực Chiến',
            headers: ['Chế độ', 'Phím tắt trên máy', 'Ứng dụng trong bài thi V-ACT', 'Ví dụ'],
            rows: [
              ['Quét Table', 'MENU 8', 'Tìm Max/Min hàm số, tìm số nghiệm nguyên của phương trình', 'f(x) = x^3 - 3x^2 + 2 trên [0; 3]'],
              ['Giải Phương trình / Hệ', 'MENU 9', 'Hệ 2, 3, 4 ẩn; Phương trình bậc 2, 3, 4', 'Hệ phương trình cân bằng chất hoặc giải tọa độ'],
              ['Bất phương trình', 'MENU B', 'Giải bất phương trình đa thức bậc 2, 3, 4', 'Tìm tập xác định logarit'],
              ['Vectơ không gian', 'MENU 5', 'Tích có hướng [u, v] tìm VTPT mặt phẳng', 'Tọa độ Oxyz'],
              ['Tổ hợp / Chỉnh hợp', 'SHIFT [÷] (nCr) hoặc SHIFT [x] (nPr)', 'Tính số cách chọn và xác suất biến cố', 'Chọn 3 người từ 10 người: 10 C 3']
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'book-logic',
    title: 'Sách 4: Giáo Trình Tư Duy Logic & Phân Tích Số Liệu',
    subtitle: 'Bảng Ma Trận Loại Trừ, Mệnh Đề Chân Lý, Bài Toán Bàn Tròn & Phân Tích Biểu Đồ',
    badge: '12 Câu • 120 Điểm',
    badgeColor: 'bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-200 border-purple-300 dark:border-purple-800',
    iconColor: 'text-purple-600',
    totalChapters: 4,
    chapters: [
      {
        id: 'logic-c1',
        number: 'Chương 1',
        title: 'Phương Pháp Bảng Ma Trận Đối Ứng 2 Chiều (Matrix Elimination)',
        readTime: '15 phút',
        summary: 'Kỹ thuật kẻ bảng lưới loại trừ giải quyết bài toán sắp xếp chỗ ngồi, phân công công việc.',
        sections: [
          {
            type: 'text',
            heading: 'Bản chất phương pháp ma trận đối ứng',
            content: 'Khi bài toán cho 5 - 7 người (A, B, C, D, E, F) với nhiều đặc tính (Thứ tự phòng thi, Màu áo, Quê quán):\n• Bước 1: Vẽ bảng lưới 2 chiều. Hàng ngang là đối tượng (A, B, C...), Cột dọc là thứ tự/vị trí (1, 2, 3...).\n• Bước 2: Điền dấu (+) cho vị trí chắc chắn đúng. Lập tức gạch (-) toàn bộ hàng và cột của vị trí đó (Quy tắc loại trừ 1-1).\n• Bước 3: Quan sát các ô còn lại, ô nào chỉ còn 1 khả năng duy nhất thì đó chính là kết quả!'
          },
          {
            type: 'callout',
            variant: 'formula',
            heading: 'Nguyên Lý Mệnh Đề Kéo Theo & Phản Đảo',
            text: '• Mệnh đề thuận: "Nếu P thì Q" (P ⟹ Q).\n• Mệnh đề phản đảo LUÔN ĐÚNG: "Nếu không Q thì chắc chắn không P" (không Q ⟹ không P).\n• Chú ý bẫy: Đề bài KHÔNG ĐỒNG NGHĨA với "Nếu không P thì không Q"!'
          }
        ]
      },
      {
        id: 'logic-c2',
        number: 'Chương 2',
        title: 'Bài Toán Logic Bàn Tròn & Vòng Tròn Khép Kín',
        readTime: '14 phút',
        summary: 'Quy tắc đối diện (k + 4 mod 8), quy tắc kẹp giữa và chia nhóm bàn tròn.',
        sections: [
          {
            type: 'table',
            heading: 'Quy Tắc Đối Diện Trong Bàn Tròn 8 Ghế',
            headers: ['Vị trí ghế', 'Vị trí ghế đối diện trực diện', 'Khoảng cách ghế cùng chiều'],
            rows: [
              ['Ghế 1', 'Ghế 5', 'Cách nhau 3 ghế trống ở mỗi bên'],
              ['Ghế 2', 'Ghế 6', 'Cách nhau 3 ghế trống ở mỗi bên'],
              ['Ghế 3', 'Ghế 7', 'Cách nhau 3 ghế trống ở mỗi bên'],
              ['Ghế 4', 'Ghế 8', 'Cách nhau 3 ghế trống ở mỗi bên']
            ]
          }
        ]
      },
      {
        id: 'logic-c3',
        number: 'Chương 3',
        title: 'Phương Pháp Đọc & Phân Tích Biểu Đồ Kết Hợp',
        readTime: '12 phút',
        summary: 'Kỹ thuật đọc biểu đồ Cột - Đường, biểu đồ miền, tháp dân số và ma trận bảng số liệu.',
        sections: [
          {
            type: 'callout',
            variant: 'warning',
            heading: '3 Cạm Bẫy Đọc Biểu Đồ Thường Gặp Nhất',
            text: '1. Bẫy hai trục tung khác đơn vị: Trục trái đo Sản lượng (triệu tấn), Trục phải đo Tốc độ tăng trưởng (%). Tuyệt đối không nhìn nhầm đường dóng!\n2. Bẫy trục tung không bắt đầu từ số 0 (Zero baseline truncation): Tạo cảm giác phóng đại tốc độ tăng.\n3. Bẫy số liệu tích lũy: Phân biệt giá trị từng năm vs giá trị lũy kế cộng dồn.'
          }
        ]
      },
      {
        id: 'logic-c4',
        number: 'Chương 4',
        title: 'Bộ Công Thức Vàng Tính Toán Số Liệu Kinh Tế - Xã Hội',
        readTime: '10 phút',
        summary: 'Tốc độ tăng trưởng liên hoàn, tăng trưởng định gốc, tỷ trọng cơ cấu và phương pháp bù trừ.',
        sections: [
          {
            type: 'table',
            heading: 'Bộ 3 Công Thức Cốt Tử',
            headers: ['Chỉ tiêu', 'Công thức tính', 'Mục đích sử dụng'],
            rows: [
              ['Tăng trưởng liên hoàn (%)', '[(Năm sau - Năm trước) / Năm trước] × 100%', 'Tốc độ tăng so với năm liền kề'],
              ['Tăng trưởng định gốc (%)', '[(Năm t - Năm gốc) / Năm gốc] × 100%', 'Tốc độ tăng so với năm cơ sở ban đầu'],
              ['Tỷ trọng cơ cấu (%)', '(Giá trị thành phần / Tổng thể) × 100%', 'Xác định thành phần chiếm bao nhiêu phần trăm']
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'book-science',
    title: 'Sách 5: Cẩm Nang Suy Luận Khoa Học Tình Huống',
    subtitle: 'Lý - Hóa - Sinh - Sử - Địa - GDKT&PL Chuẩn Đổi Mới GDPT 2018',
    badge: '18 Câu • 180 Điểm',
    badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border-amber-300 dark:border-amber-800',
    iconColor: 'text-amber-600',
    totalChapters: 4,
    chapters: [
      {
        id: 'sci-c1',
        number: 'Chương 1',
        title: 'Bản Chất Đổi Mới Của Phân Môn Suy Luận Khoa Học',
        readTime: '12 phút',
        summary: 'Nguyên tắc trích xuất dữ kiện 100% từ văn bản đề bài, không học thuộc lòng kiến thức cũ.',
        sections: [
          {
            type: 'text',
            heading: 'Triết lý khảo thí của Đại học Quốc gia TP.HCM',
            content: 'Từ năm 2025 theo chương trình GDPT 2018, phần Tư duy khoa học KHÔNG kiểm tra việc học vẹt công thức. Toàn bộ thông tin, bảng đo đạc, phương trình hóa học và giả thiết thí nghiệm đều được CUNG CẤP TRỌN VẸN trong khung [NGỮ LIỆU / ĐỀ BÀI CHUNG] ở đầu mỗi chùm câu hỏi. Thí sinh chỉ cần vận dụng tư duy suy luận logic, so sánh đối chứng và phân tích biến số để tìm ra đáp án đúng.'
          }
        ]
      },
      {
        id: 'sci-c2',
        number: 'Chương 2',
        title: 'Phân Tích Quy Trình Thí Nghiệm Vật Lý & Công Nghệ Hóa Học',
        readTime: '15 phút',
        summary: 'Các quy trình thu hồi kim loại, xử lý nước thải, điện phân và phản ứng tổng hợp hữu cơ.',
        sections: [
          {
            type: 'callout',
            variant: 'tip',
            heading: '3 Bước Đọc Quy Trình Công Nghệ Hóa Học / Vật Lý',
            text: '• Bước 1: Xác định mục tiêu của quy trình (Ví dụ: Thu hồi đồng Cu từ bảng mạch in điện tử).\n• Bước 2: Chia quy trình thành các giai đoạn độc lập (Giai đoạn 1: Hòa tan axit → Giai đoạn 2: Lọc kết tủa → Giai đoạn 3: Điện phân/Kết tinh).\n• Bước 3: Tìm câu trả lời cho từng câu hỏi con bằng cách đối chiếu trực tiếp vào đoạn văn của giai đoạn tương ứng.'
          }
        ]
      },
      {
        id: 'sci-c3',
        number: 'Chương 3',
        title: 'Suy Luận Quy Luật Di Truyền Y Sinh & Cân Bằng Sinh Thái',
        readTime: '14 phút',
        summary: 'Cơ chế enzym, phiên mã dịch mã, công nghệ gen và phân tích chuỗi thức ăn sinh thái.',
        sections: [
          {
            type: 'text',
            heading: 'Phân tích biến số trong thí nghiệm sinh học',
            content: 'Trong mọi bài toán sinh học thực nghiệm, luôn chú ý: Biến độc lập (Yếu tố nhà khoa học chủ động thay đổi như nhiệt độ, nồng độ enzym), Biến phụ thuộc (Kết quả đo được như tốc độ phản ứng), và Nhóm đối chứng (Mẫu chuẩn không có tác nhân thay đổi để làm thước đo so sánh).'
          }
        ]
      },
      {
        id: 'sci-c4',
        number: 'Chương 4',
        title: 'Phân Tích Tư Liệu Lịch Sử, Địa Lý & Tình Huống GDKT&PL',
        readTime: '14 phút',
        summary: 'Văn kiện lịch sử, biểu đồ khí hậu tự nhiên và tình huống pháp luật hợp đồng lao động.',
        sections: [
          {
            type: 'callout',
            variant: 'warning',
            heading: 'Lưu Ý Khi Làm Bài Tình Huống Pháp Luật & Kinh Tế',
            text: '• Bám sát quy định pháp lý được trích dẫn trong ngữ liệu đề bài.\n• Phân biệt rõ các quyền: Quyền khiếu nại (bảo vệ quyền lợi của chính mình) vs Quyền tố cáo (báo cáo hành vi vi phạm pháp luật gây thiệt hại cho nhà nước/người khác).\n• Nguyên tắc hợp đồng lao động: Tự nguyện, bình đẳng, không trái pháp luật và thỏa ước lao động tập thể.'
          }
        ]
      }
    ]
  }
];
