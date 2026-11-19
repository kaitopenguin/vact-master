import React, { useState } from 'react';
import { BookOpen, Download, ExternalLink, FileText, CheckCircle, Search, Eye, KeyRound, Sparkles } from 'lucide-react';

export const BOOKS_DATA = [
  {
    id: 'book-vnno1-01',
    title: 'Đề Thi Thử V-ACT VnNO1 2026/2027 Lần 1 (Kèm Đáp Án & Hướng Dẫn Giải Chi Tiết)',
    author: 'Trung tâm & Kênh Luyện thi VnNO1',
    year: '2026 - 2027',
    format: 'Chuẩn V-ACT 120 câu / 150 phút',
    fileSize: '3.8 MB',
    pages: '20 trang',
    downloadUrl: '/books/VNno1_2027_Thi_thu_lan_1_Ans.pdf',
    password: 'Pass mở file: X7v#mK2$pL',
    badge: 'Đề VnNO1 Lần 1 Mới Nhất',
    badgeColor: 'bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200 border border-rose-300 dark:border-rose-800',
    description: 'Bộ đề thi thử thực chiến độc quyền từ VnNO1 cập nhật ngày 18/11/2026, chuẩn ma trận 1.200 điểm có bảng đáp án tham khảo và hướng dẫn tư duy.',
    highlights: [
      '120 câu hỏi trắc nghiệm chất lượng cao từ VnNO1',
      'Đầy đủ bảng đáp án chính xác 100%',
      'Tập trung các bẫy Logic và bài toán thực tế hay gặp'
    ]
  },
  {
    id: 'book-vnno1-02',
    title: 'Đề Thi Thử V-ACT VnNO1 2026/2027 Lần 2 (Đề Thi Thực Chiến)',
    author: 'Trung tâm & Kênh Luyện thi VnNO1',
    year: '2026 - 2027',
    format: 'Chuẩn V-ACT 120 câu / 150 phút',
    fileSize: '3.3 MB',
    pages: '18 trang',
    downloadUrl: '/books/VNno1_2027_Thi_thu_lan_2_Nokey.pdf',
    password: 'Pass mở file: X7v#mK2$pL',
    badge: 'Đề VnNO1 Lần 2 Mới Nhất',
    badgeColor: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border border-amber-300 dark:border-amber-800',
    description: 'Đề thi thử lần 2 của VnNO1 dành cho thí sinh tự bấm giờ 150 phút rèn luyện bản lĩnh phòng thi và tốc độ giải quyết bài thi.',
    highlights: [
      'Rèn luyện áp lực thời gian thực tế 150 phút',
      'Đa dạng các ngữ liệu mới lạ bám sát GDPT 2018',
      'Công cụ kiểm tra năng lực khách quan nhất'
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
    title: '25 Đề Luyện Thi V-ACT 2025 Chuyên Sâu (Moon.vn)',
    author: 'Hệ thống Giáo dục Moon.vn',
    year: '2025',
    format: 'Bộ sách luyện đề toàn diện',
    fileSize: '96.5 MB',
    pages: '616 trang',
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
  const [selectedBookForPreview, setSelectedBookForPreview] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 mb-3 border border-blue-300 dark:border-blue-800">
          <BookOpen className="w-4 h-4 text-blue-600" />
          Kho Tài Liệu & Tuyển Tập Bộ Đề PDF Gốc
        </div>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-black vact-text-primary tracking-tight">
          Tủ Sách & Bộ Đề Luyện Thi V-ACT (VnNO1, Moon.vn & ĐHQG)
        </h1>
        <p className="mt-2 vact-text-secondary max-w-3xl text-xs sm:text-base leading-relaxed">
          Tải về miễn phí hoặc đọc trực tiếp trọn vẹn 5 bộ tài liệu luyện thi V-ACT lớn nhất: Bộ đề thi thử VnNO1 2026/2027 có đáp án, Đề minh họa ĐHQG-HCM và 2 Tuyển tập 25 đề chuyên sâu.
        </p>
      </div>

      {/* Book Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
        {BOOKS_DATA.map((book) => (
          <div
            key={book.id}
            className="vact-card rounded-2xl sm:rounded-3xl border vact-border p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-[10px] sm:text-[11px] font-black px-2.5 py-1 rounded-full ${book.badgeColor}`}>
                  {book.badge}
                </span>
                <span className="text-xs font-black vact-text-muted flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-blue-500" />
                  {book.fileSize}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-black vact-text-primary mb-2 leading-snug">
                {book.title}
              </h3>

              <div className="flex items-center gap-3 text-xs vact-text-muted font-bold mb-3">
                <span>{book.author}</span>
                <span>•</span>
                <span>{book.pages}</span>
              </div>

              {book.password && (
                <div className="mb-3 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs font-black text-amber-800 dark:text-amber-300 flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{book.password}</span>
                </div>
              )}

              <p className="text-xs sm:text-sm vact-text-secondary mb-4 leading-relaxed line-clamp-3">
                {book.description}
              </p>

              <div className="space-y-1.5 mb-6 vact-card-subtle p-3 rounded-xl border vact-border">
                {book.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs vact-text-primary font-bold">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              {book.downloadUrl ? (
                <a
                  href={book.downloadUrl}
                  download
                  className="w-full min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm bg-rose-600 hover:bg-rose-700 text-white shadow-xs transition-all active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" />
                  <span>Tải File PDF Gốc Về Máy</span>
                </a>
              ) : (
                <a
                  href={book.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-black text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-all active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" />
                  <span>Mở & Tải Trên Google Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={onStartPracticeOfficial}
                className="w-full min-h-[40px] flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-black text-xs vact-card-subtle hover:bg-blue-600 hover:text-white border vact-border vact-text-primary transition-all active:scale-[0.98]"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Thi thử trực tuyến bộ đề này</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
