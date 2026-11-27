import React, { useState } from 'react';
import { BookOpen, Download, ExternalLink, FileText, CheckCircle, Search, Eye, KeyRound, Sparkles, Award } from 'lucide-react';

export const BOOKS_DATA = [
  {
    id: 'book-de4',
    title: 'Đề Thực Chiến V-ACT Số 01 Chuẩn ĐHQG-HCM (Có Đáp Án & Lời Giải)',
    author: 'Ban Chuyên Môn V-ACT Master',
    year: '2025 - 2026',
    format: 'Chuẩn V-ACT 120 câu / 150 phút (1.200đ)',
    fileSize: '2.9 MB',
    pages: '46 trang',
    downloadUrl: '/books/DA ĐỀ TIÊN ĐOÁN VACT SỐ 4.pdf',
    badge: '⭐ Đề Tiên Đoán Mới Nhất',
    badgeColor: 'bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200 border border-rose-300 dark:border-rose-800',
    description: 'Bản gốc Đề Tiên Đoán V-ACT Số 4 đầy đủ 120 câu hỏi trắc nghiệm, kèm lời giải chi tiết từng bước cho từng phân môn bám sát GDPT 2018.',
    highlights: [
      '120 câu trắc nghiệm chuẩn cấu trúc ĐHQG TP.HCM',
      'Đầy đủ ngữ liệu đọc hiểu và bảng ma trận logic',
      'Lời giải phân tích từng phương án đúng / sai'
    ]
  },
  {
    id: 'book-200-tv',
    title: 'Tuyển Tập 200 Câu Tiếng Việt ĐGNL V-ACT (Kèm Đáp Án & Lời Giải Chi Tiết)',
    author: 'Ban Chuyên Môn V-ACT Master',
    year: '2025 - 2026',
    format: 'Ngân hàng 200 câu trắc nghiệm ngôn ngữ',
    fileSize: '3.2 MB',
    pages: '65 trang',
    downloadUrl: '/books/DA 200 CÂU TIẾNG VIỆT ĐGNL V-ACT.pdf',
    badge: '🔥 Ngân Hàng 200 Câu',
    badgeColor: 'bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 border border-blue-300 dark:border-blue-800',
    description: 'Tuyển tập 200 câu hỏi Tiếng Việt phân hóa cao: phép tu từ, phong cách chức năng, nghĩa từ ngữ cảnh và các trích đoạn văn học hiện đại.',
    highlights: [
      '200 câu trắc nghiệm chuyên sâu Tiếng Việt',
      'Kèm các ngữ liệu đọc hiểu đa dạng phong cách',
      'Có lời giải và mẹo phân biệt từ đồng nghĩa / lỗi câu'
    ]
  },
  {
    id: 'book-200-ta',
    title: 'Tuyển Tập 200 Câu Tiếng Anh ĐGNL V-ACT (Kèm Đáp Án & Phân Tích Ngữ Pháp)',
    author: 'Ban Chuyên Môn V-ACT Master',
    year: '2025 - 2026',
    format: 'Ngân hàng 200 câu đọc hiểu & ngữ pháp',
    fileSize: '5.6 MB',
    pages: '38 trang',
    downloadUrl: '/books/DA 200 CÂU TIẾNG ANH ĐGNL V-ACT.pdf',
    badge: '🔥 Ngân Hàng 200 Câu',
    badgeColor: 'bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-200 border border-indigo-300 dark:border-indigo-800',
    description: 'Hệ thống 200 câu hỏi Tiếng Anh bám sát định dạng V-ACT: ngữ cảnh giao tiếp, mệnh đề quan hệ rút gọn, liên từ và bài đọc khoa học xã hội.',
    highlights: [
      '200 câu hỏi Tiếng Anh chọn lọc chuẩn đề thi',
      'Bài đọc suy luận đa chủ đề khoa học tự nhiên & xã hội',
      'Giải thích chi tiết cấu trúc ngữ pháp và từ vựng mở rộng'
    ]
  },
  {
    id: 'book-200-toan',
    title: 'Tuyển Tập 200 Câu Toán Học & Tư Duy Định Lượng (Kèm Lời Giải Chi Tiết)',
    author: 'Ban Chuyên Môn V-ACT Master',
    year: '2025 - 2026',
    format: 'Ngân hàng 200 câu Toán thực tế & giải tích',
    fileSize: '4.0 MB',
    pages: '73 trang',
    downloadUrl: '/books/DA 200 CÂU TOÁN HỌC ĐGNL V-ACT.pdf',
    badge: '🔥 Ngân Hàng 200 Câu',
    badgeColor: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800',
    description: '200 câu Toán học định lượng bao gồm giải tích, tối ưu kinh tế, xác suất có điều kiện và hình học không gian Oxyz chuẩn GDPT 2018.',
    highlights: [
      'Bài toán ứng dụng thực tiễn kinh tế - đời sống',
      'Kỹ năng tính toán giải nhanh và tối ưu thời gian',
      'Lời giải tự luận chặt chẽ kết hợp phương pháp trắc nghiệm nhanh'
    ]
  },
  {
    id: 'book-200-tdkh',
    title: 'Tuyển Tập 200 Câu Tư Duy Khoa Học: Logic, Số Liệu & Tình Huống KHTN - KHXH',
    author: 'Ban Chuyên Môn V-ACT Master',
    year: '2025 - 2026',
    format: 'Ngân hàng 200 câu Logic & Khoa học',
    fileSize: '5.2 MB',
    pages: '90 trang',
    downloadUrl: '/books/DA 200 CÂU TƯ DUY KHOA HỌC ĐGNL V-ACT.pdf',
    badge: '🔥 Ngân Hàng 200 Câu',
    badgeColor: 'bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-200 border border-purple-300 dark:border-purple-800',
    description: 'Kho bài tập tư duy khoa học cốt lõi: phương pháp lập bảng ma trận vị trí, phân tích bảng số liệu/biểu đồ và suy luận thí nghiệm Lý - Hóa - Sinh - Sử - Địa.',
    highlights: [
      'Chùm câu hỏi logic vị trí bàn tròn, xếp hàng, lịch trình',
      'Biểu đồ kết hợp cột - đường, cơ cấu tăng trưởng',
      'Suy luận hiện tượng khoa học thực nghiệm có đầy đủ ngữ liệu'
    ]
  },
  {
    id: 'book-01',
    title: 'Đề Thi Minh Họa V-ACT 2025 Chính Thức (ĐHQG TP.HCM)',
    author: 'Đại học Quốc gia TP.HCM',
    year: '2025 - 2026',
    format: 'Chuẩn GDPT 2018 (120 câu / 150 phút)',
    fileSize: '1.4 MB',
    pages: '16 trang',
    driveUrl: 'https://drive.google.com/file/d/1Z8R6oSiFfrARrRy1t8q89MYi0uiFxng4/view',
    embedUrl: 'https://drive.google.com/file/d/1Z8R6oSiFfrARrRy1t8q89MYi0uiFxng4/preview',
    badge: 'Chính thức từ ĐHQG-HCM',
    badgeColor: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800',
    description: 'Đề thi mẫu chính thức công bố bởi ĐHQG TP.HCM, quy định cấu trúc mới nhất: 3 Phần thi, 4 hợp phần x 300 điểm = 1.200 điểm theo mô hình IRT.',
    highlights: [
      'Đầy đủ 120 câu hỏi trắc nghiệm nguyên bản',
      'Có phần đọc hiểu Ngôn ngữ, Toán học ứng dụng thực tế',
      'Các câu hỏi Logic ma trận và Suy luận khoa học tình huống'
    ]
  },
  {
    id: 'book-02',
    title: '25 Đề Luyện Thi V-ACT 2025 Chuyên Sâu',
    author: 'Ngân Hàng Đề Chuẩn Hóa V-ACT',
    year: '2025',
    format: 'Bộ sách luyện đề toàn diện',
    fileSize: '96.5 MB',
    pages: '616 trang',
    driveUrl: 'https://drive.google.com/file/d/1xUbhkdrBPPZDNZbIOPXbm0Z0fqStQIoe/view',
    embedUrl: 'https://drive.google.com/file/d/1xUbhkdrBPPZDNZbIOPXbm0Z0fqStQIoe/preview',
    badge: 'Bộ đề chuẩn hóa tuyển chọn',
    badgeColor: 'bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 border border-blue-300 dark:border-blue-800',
    description: 'Tuyển tập 25 đề thi thử bám sát định dạng V-ACT với lời giải phân tích chi tiết từng câu hỏi, giúp thí sinh làm quen với mọi dạng bẫy.',
    highlights: [
      '25 đề thi chuẩn hóa phân hóa cao',
      'Lời giải chi tiết từng bước cho từng môn',
      'Rèn luyện phản xạ giải nhanh và quản lý thời gian'
    ]
  },
  {
    id: 'book-03',
    title: 'Tuyển Tập 25 Đề Luyện Thi Đánh Giá Năng Lực V-ACT (V-ACT Hub)',
    author: 'Cộng đồng Thủ khoa V-ACT Hub',
    year: '2025',
    format: 'Tuyển tập đề rèn luyện',
    fileSize: '96.6 MB',
    pages: '614 trang',
    driveUrl: 'https://drive.google.com/file/d/15l3JDJveBZ7_1TJxUwClFXiiVmjIctMd/view',
    embedUrl: 'https://drive.google.com/file/d/15l3JDJveBZ7_1TJxUwClFXiiVmjIctMd/preview',
    badge: 'Tuyển tập chuyên sâu',
    badgeColor: 'bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-200 border border-purple-300 dark:border-purple-800',
    description: 'Bộ sưu tập 25 đề luyện thi mở rộng kiến thức, tăng cường khả năng tư duy định lượng, đọc hiểu dữ liệu và suy luận khoa học.',
    highlights: [
      'Đa dạng các ngữ liệu đọc hiểu thực tiễn',
      'Hệ thống bài tập Logic và biểu đồ phong phú',
      'Tài liệu ôn luyện đắc lực cho mục tiêu 900+ điểm'
    ]
  }
];

export default function BooksView({ onStartPracticeOfficial }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [previewBook, setPreviewBook] = useState(null);

  const filteredBooks = BOOKS_DATA.filter(b => 
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header Banner */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 mb-3 border border-blue-300 dark:border-blue-800">
          <BookOpen className="w-4 h-4 text-blue-600" />
          Kho Sách & Tài Liệu PDF ĐHQG-HCM 100% Miễn Phí
        </div>
        <h1 className="text-3xl sm:text-4xl font-black vact-text-primary tracking-tight">
          Sách & Bộ Đề Thi Gốc V-ACT 2025 - 2027
        </h1>
        <p className="mt-2 text-sm sm:text-base vact-text-secondary max-w-3xl leading-relaxed">
          Toàn bộ tài liệu PDF chính thống từ ĐHQG TP.HCM, tuyển tập bộ 200 câu 4 phân môn có đáp án và các bộ đề thực chiến chuẩn hóa. Bạn có thể xem trực tiếp hoặc tải về máy hoàn toàn miễn phí.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative mb-8">
        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm kiếm theo tên đề, sách, chuyên đề (ĐHQG, Toán, Tiếng Việt, Tư duy Khoa học...)"
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl vact-card border vact-border vact-text-primary placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 text-sm font-medium shadow-xs"
        />
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="vact-card rounded-3xl border vact-border p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-[11px] font-black px-3 py-1 rounded-full ${book.badgeColor}`}>
                  {book.badge}
                </span>
                <span className="text-xs font-bold vact-text-muted">
                  {book.fileSize} • {book.pages}
                </span>
              </div>

              <h3 className="text-lg font-black vact-text-primary mb-2 leading-snug">
                {book.title}
              </h3>

              <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-3">
                Nguồn: {book.author} ({book.year})
              </p>

              <p className="text-xs sm:text-sm vact-text-secondary mb-4 leading-relaxed line-clamp-3">
                {book.description}
              </p>

              {book.password && (
                <div className="mb-4 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 flex items-center gap-2 text-xs font-black text-amber-800 dark:text-amber-200">
                  <KeyRound className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{book.password}</span>
                </div>
              )}

              <div className="space-y-1.5 mb-6">
                {book.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs vact-text-muted">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2 pt-4 border-t vact-border">
              {book.embedUrl ? (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPreviewBook(book)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs vact-card border vact-border hover:bg-slate-100 dark:hover:bg-slate-800 vact-text-primary transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-600" />
                    Đọc trực tiếp
                  </button>
                  <a
                    href={book.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Tải về máy
                  </a>
                </div>
              ) : (
                <a
                  href={book.downloadUrl}
                  download
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Tải sách PDF ({book.fileSize})
                </a>
              )}

              {book.id === 'book-01' && onStartPracticeOfficial && (
                <button
                  onClick={onStartPracticeOfficial}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-black text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  Luyện thi bấm giờ 150p trên Web
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* In-app PDF Viewer Modal */}
      {previewBook && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6">
          <div className="vact-card rounded-3xl border vact-border w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b vact-border">
              <div className="flex items-center gap-3 truncate">
                <FileText className="w-5 h-5 text-blue-600 shrink-0" />
                <h3 className="font-black vact-text-primary text-sm sm:text-base truncate">
                  {previewBook.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={previewBook.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl vact-card border vact-border text-xs font-bold vact-text-primary hover:text-blue-600 flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Mở Drive</span>
                </a>
                <button
                  onClick={() => setPreviewBook(null)}
                  className="w-8 h-8 rounded-xl vact-card border vact-border flex items-center justify-center vact-text-primary hover:bg-rose-50 hover:text-rose-600 cursor-pointer text-sm font-bold"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="flex-1 bg-slate-900 relative">
              <iframe
                src={previewBook.embedUrl}
                title={previewBook.title}
                className="w-full h-full border-0"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
