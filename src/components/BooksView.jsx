import React, { useState } from 'react';
import { BookOpen, Download, ExternalLink, FileText, CheckCircle, Search, Eye } from 'lucide-react';

export const BOOKS_DATA = [
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
    title: '25 Đề Luyện Thi V-ACT 2025 Chuyên Sâu (Moon.vn)',
    author: 'Hệ thống Giáo dục Moon.vn',
    year: '2025',
    format: 'Bộ sách luyện đề toàn diện',
    fileSize: '96.5 MB',
    pages: 'Hơn 400 trang',
    driveUrl: 'https://drive.google.com/file/d/1xUbhkdrBPPZDNZbIOPXbm0Z0fqStQIoe/view',
    embedUrl: 'https://drive.google.com/file/d/1xUbhkdrBPPZDNZbIOPXbm0Z0fqStQIoe/preview',
    badge: 'Bộ đề Moon.vn tuyển chọn',
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
    title: 'Tuyển Tập 25 Đề Luyện Thi Đánh Giá Năng Lực V-ACT',
    author: 'Cộng đồng Thủ khoa V-ACT Hub',
    year: '2025',
    format: 'Tuyển tập đề rèn luyện',
    fileSize: '96.6 MB',
    pages: 'Hơn 400 trang',
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
  const [selectedBookForPreview, setSelectedBookForPreview] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 mb-3 border border-blue-200 dark:border-blue-800">
          <BookOpen className="w-4 h-4 text-blue-600" />
          Kho Tài Liệu & Tuyển Tập Bộ Đề PDF Gốc
        </div>
        <h1 className="text-2xl sm:text-4xl font-black vact-text-primary tracking-tight">
          Tủ Sách & Bộ Đề Luyện Thi V-ACT (Drive Tải Về & Đọc Online)
        </h1>
        <p className="mt-2 vact-text-secondary max-w-3xl text-sm sm:text-base leading-relaxed">
          Tải về miễn phí hoặc đọc trực tiếp trọn vẹn 3 bộ tài liệu luyện thi V-ACT lớn nhất: Đề minh họa 2025 ĐHQG-HCM và 2 Tuyển tập 25 đề thi chuyên sâu.
        </p>
      </div>

      {/* Book Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {BOOKS_DATA.map((book) => (
          <div
            key={book.id}
            className="vact-card rounded-3xl border p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${book.badgeColor}`}>
                  {book.badge}
                </span>
                <span className="text-xs font-bold vact-text-muted flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                  {book.fileSize}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold vact-text-primary mb-2 leading-snug">
                {book.title}
              </h3>

              <div className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-3">
                {book.author} • {book.year}
              </div>

              <p className="text-xs sm:text-sm vact-text-secondary mb-4 leading-relaxed line-clamp-2">
                {book.description}
              </p>

              <div className="space-y-1.5 mb-6 text-xs vact-text-secondary vact-card-subtle p-3.5 rounded-2xl border">
                {book.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button
                onClick={() => setSelectedBookForPreview(book)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                Đọc trực tiếp trên Web
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={book.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold vact-card-subtle border vact-text-secondary hover:vact-text-primary transition-colors text-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Mở Google Drive
                </a>

                {book.id === 'book-01' ? (
                  <button
                    onClick={onStartPracticeOfficial}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors cursor-pointer text-center"
                  >
                    Làm bài thi thử
                  </button>
                ) : (
                  <a
                    href={book.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold vact-card-subtle border vact-text-secondary hover:vact-text-primary transition-colors text-center"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Tải về máy
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded PDF Viewer Modal */}
      {selectedBookForPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="vact-card rounded-3xl border w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b vact-border vact-card-subtle">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-sm sm:text-base vact-text-primary truncate max-w-md sm:max-w-xl">
                  {selectedBookForPreview.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedBookForPreview.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Mở tab mới
                </a>
                <button
                  onClick={() => setSelectedBookForPreview(null)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold vact-card border vact-text-secondary hover:vact-text-primary"
                >
                  Đóng
                </button>
              </div>
            </div>

            {/* Iframe preview */}
            <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950">
              <iframe
                src={selectedBookForPreview.embedUrl}
                title={selectedBookForPreview.title}
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
