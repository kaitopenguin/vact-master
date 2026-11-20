import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  Lightbulb, 
  AlertTriangle, 
  CheckCircle2, 
  Bookmark,
  Compass,
  Layers,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Flame
} from 'lucide-react';
import { THEORY_BOOKS } from '../data/theoryBooksData';

export default function TheoryView({ fontSize = 'normal' }) {
  const [selectedBookId, setSelectedBookId] = useState(THEORY_BOOKS[0].id);
  const [selectedChapterId, setSelectedChapterId] = useState(THEORY_BOOKS[0].chapters[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  // Current active book
  const currentBook = THEORY_BOOKS.find(b => b.id === selectedBookId) || THEORY_BOOKS[0];

  // Chapters filtered by search query
  const filteredChapters = currentBook.chapters.filter(ch => {
    const q = searchQuery.toLowerCase();
    return ch.title.toLowerCase().includes(q) || 
           ch.summary.toLowerCase().includes(q) ||
           ch.number.toLowerCase().includes(q);
  });

  // Current active chapter
  const currentChapter = currentBook.chapters.find(ch => ch.id === selectedChapterId) || currentBook.chapters[0];
  const currentChapterIndex = currentBook.chapters.findIndex(ch => ch.id === currentChapter.id);

  // Switch book and reset chapter
  const handleSelectBook = (bookId) => {
    setSelectedBookId(bookId);
    const book = THEORY_BOOKS.find(b => b.id === bookId);
    if (book && book.chapters.length > 0) {
      setSelectedChapterId(book.chapters[0].id);
    }
  };

  const handlePrevChapter = () => {
    if (currentChapterIndex > 0) {
      setSelectedChapterId(currentBook.chapters[currentChapterIndex - 1].id);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  const handleNextChapter = () => {
    if (currentChapterIndex < currentBook.chapters.length - 1) {
      setSelectedChapterId(currentBook.chapters[currentChapterIndex + 1].id);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
      {/* Header Banner */}
      <div className="mb-6 sm:mb-8 border-b vact-border pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 mb-3 border border-blue-300 dark:border-blue-800">
          <BookOpen className="w-4 h-4 text-blue-600" />
          5 Đại Sách Chuyên Khảo Phân Môn V-ACT Chuẩn GDPT 2018 (2025 - 2027)
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-4xl font-black vact-text-primary tracking-tight">
              Kho Sách Giáo Trình & Lý Thuyết ĐHQG-HCM
            </h1>
            <p className="mt-2 vact-text-secondary max-w-4xl text-xs sm:text-base leading-relaxed">
              Mỗi phân môn được biên soạn thành một cuốn sách chuyên khảo độc lập: phân loại tỉ mỉ theo cấu trúc 120 câu, ma trận bẫy ngôn ngữ, thuật toán giải nhanh và tư duy suy luận khoa học.
            </p>
          </div>
        </div>
      </div>

      {/* Book Shelf Switcher: 5 Đại Sách */}
      <div className="mb-8">
        <div className="text-xs font-black uppercase tracking-wider vact-text-muted mb-3 flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-500" />
          <span>Chọn Tủ Sách Chuyên Môn (5 Cuốn)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {THEORY_BOOKS.map((book, idx) => {
            const isSelected = book.id === selectedBookId;
            return (
              <div
                key={book.id}
                onClick={() => handleSelectBook(book.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-2 border-blue-600 bg-blue-50/60 dark:bg-blue-950/50 shadow-md ring-2 ring-blue-500/20'
                    : 'vact-card border vact-border hover:border-blue-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${book.badgeColor}`}>
                      {book.badge}
                    </span>
                    <span className="text-[11px] font-black vact-text-muted">
                      {book.chapters.length} chương
                    </span>
                  </div>

                  <h3 className="font-black text-xs sm:text-sm vact-text-primary leading-snug line-clamp-2">
                    {book.title}
                  </h3>

                  <p className="mt-1.5 text-[11px] vact-text-muted line-clamp-2 leading-relaxed">
                    {book.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t vact-border flex items-center justify-between text-[11px] font-bold">
                  <span className={isSelected ? 'text-blue-600 dark:text-blue-400 font-black' : 'vact-text-muted'}>
                    {isSelected ? 'Đang đọc 📖' : 'Mở đọc →'}
                  </span>
                  <BookOpen className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-600' : 'vact-text-muted'}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reading Workspace: Chapter Navigator (Left) + E-Book Reader Page (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Chapters Table of Contents */}
        <div className="lg:col-span-4 space-y-3">
          {/* Chapter Search within active book */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 vact-text-muted" />
            <input
              type="text"
              placeholder={`Tìm trong ${currentBook.title}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm vact-card border vact-border vact-text-primary placeholder:vact-text-muted focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
            />
          </div>

          <div className="text-xs font-black uppercase tracking-wider vact-text-muted px-1 flex items-center justify-between">
            <span>Mục lục chương</span>
            <span>{filteredChapters.length} / {currentBook.chapters.length} bài</span>
          </div>

          {/* Chapter Cards List */}
          <div className="space-y-2 max-h-[750px] overflow-y-auto pr-1 ios-scroll">
            {filteredChapters.map((ch, idx) => {
              const isSelected = ch.id === currentChapter.id;
              return (
                <div
                  key={ch.id}
                  onClick={() => {
                    setSelectedChapterId(ch.id);
                    window.scrollTo({ top: 220, behavior: 'smooth' });
                  }}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-2 border-blue-600 bg-blue-50/70 dark:bg-blue-950/60 shadow-xs'
                      : 'vact-card border vact-border hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-black mb-1">
                    <span className="text-blue-600 dark:text-blue-400">
                      {ch.number}
                    </span>
                    <span className="vact-text-muted flex items-center gap-1 font-bold">
                      <Clock className="w-3 h-3" />
                      {ch.readTime}
                    </span>
                  </div>

                  <h4 className="font-black vact-text-primary text-xs sm:text-sm mb-1 leading-snug">
                    {ch.title}
                  </h4>

                  <p className="text-[11px] sm:text-xs vact-text-muted line-clamp-2 leading-relaxed">
                    {ch.summary}
                  </p>
                </div>
              );
            })}

            {filteredChapters.length === 0 && (
              <div className="p-6 text-center vact-card rounded-2xl border vact-border">
                <p className="text-xs vact-text-muted font-bold">Không tìm thấy chương khớp từ khóa.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Authentic Book Page Reader */}
        <div className="lg:col-span-8">
          <article className="vact-card rounded-3xl border vact-border p-5 sm:p-10 shadow-sm relative">
            {/* Book & Chapter Header */}
            <div className="border-b vact-border pb-5 mb-6">
              <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 border border-blue-300 dark:border-blue-800">
                  {currentBook.title.split(':')[0]} • {currentChapter.number}
                </span>
                <span className="text-xs font-bold vact-text-muted">
                  Thời lượng đọc: {currentChapter.readTime}
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-black vact-text-primary leading-snug tracking-tight">
                {currentChapter.title}
              </h2>

              <p className="mt-2 text-xs sm:text-sm vact-text-secondary leading-relaxed font-medium">
                {currentChapter.summary}
              </p>
            </div>

            {/* Chapter Body Sections */}
            <div className="space-y-6">
              {currentChapter.sections.map((sec, sIdx) => {
                if (sec.type === 'text') {
                  return (
                    <div key={sIdx} className="space-y-2">
                      {sec.heading && (
                        <h3 className="text-base sm:text-lg font-black vact-text-primary flex items-center gap-2">
                          <span className="w-1.5 h-4 bg-blue-600 rounded-full inline-block shrink-0"></span>
                          <span>{sec.heading}</span>
                        </h3>
                      )}
                      <p className="vact-text-secondary text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium">
                        {sec.content}
                      </p>
                    </div>
                  );
                }

                if (sec.type === 'table') {
                  return (
                    <div key={sIdx} className="space-y-2.5 my-4">
                      {sec.heading && (
                        <h3 className="text-base sm:text-lg font-black vact-text-primary flex items-center gap-2">
                          <span className="w-1.5 h-4 bg-indigo-600 rounded-full inline-block shrink-0"></span>
                          <span>{sec.heading}</span>
                        </h3>
                      )}
                      <div className="overflow-x-auto rounded-2xl border vact-border shadow-xs">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="vact-card-subtle border-b vact-border">
                              {sec.headers.map((h, hIdx) => (
                                <th key={hIdx} className="p-3 sm:p-3.5 font-black vact-text-primary whitespace-nowrap">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {sec.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="border-b vact-border last:border-b-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="p-3 sm:p-3.5 vact-text-secondary font-medium leading-relaxed">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                }

                if (sec.type === 'callout') {
                  const isWarning = sec.variant === 'warning';
                  const isFormula = sec.variant === 'formula';
                  const isCasio = sec.variant === 'casio';

                  let calloutStyle = 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-100';
                  let icon = <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />;

                  if (isWarning) {
                    calloutStyle = 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-100';
                    icon = <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />;
                  } else if (isFormula) {
                    calloutStyle = 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800 text-blue-950 dark:text-blue-100';
                    icon = <Compass className="w-5 h-5 text-blue-600 shrink-0" />;
                  } else if (isCasio) {
                    calloutStyle = 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-800 text-indigo-950 dark:text-indigo-100';
                    icon = <Compass className="w-5 h-5 text-indigo-600 shrink-0" />;
                  }

                  return (
                    <div key={sIdx} className={`p-4 sm:p-5 rounded-2xl border-2 ${calloutStyle} space-y-2`}>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 font-black text-xs sm:text-sm">
                          {icon}
                          <span>{sec.heading}</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium pl-7">
                        {sec.text}
                      </p>
                    </div>
                  );
                }

                if (sec.type === 'example') {
                  return (
                    <div key={sIdx} className="p-4 sm:p-5 rounded-2xl vact-card-subtle border-2 border-emerald-500/40 space-y-1.5">
                      <div className="flex items-center gap-2 font-black text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{sec.heading}</span>
                      </div>
                      <p className="vact-text-primary text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium pl-6">
                        {sec.text}
                      </p>
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* Book Pagination Footer (Chương trước / Chương tiếp theo) */}
            <div className="mt-8 pt-6 border-t vact-border flex items-center justify-between gap-3">
              <button
                disabled={currentChapterIndex === 0}
                onClick={handlePrevChapter}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-black text-xs vact-card border vact-border vact-text-primary disabled:opacity-40 disabled:cursor-not-allowed hover:border-blue-500 cursor-pointer transition-all active:scale-95 shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Chương trước</span>
              </button>

              <span className="text-xs font-bold vact-text-muted hidden sm:inline">
                Chương {currentChapterIndex + 1} / {currentBook.chapters.length} ({currentBook.title.split(':')[0]})
              </span>

              <button
                disabled={currentChapterIndex === currentBook.chapters.length - 1}
                onClick={handleNextChapter}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-black text-xs bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all active:scale-95 shadow-xs"
              >
                <span>Chương tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
