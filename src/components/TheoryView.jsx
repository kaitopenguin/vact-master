import React, { useState } from 'react';
import { 
  Search, 
  BookOpen, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  Lightbulb, 
  AlertTriangle, 
  Calculator, 
  CheckCircle2, 
  Bookmark,
  Share2,
  BookmarkCheck,
  Compass
} from 'lucide-react';
import { THEORY_CATEGORIES, THEORY_ARTICLES } from '../data/theoryData';

export default function TheoryView({ fontSize = 'normal' }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticleId, setSelectedArticleId] = useState(THEORY_ARTICLES[0].id);

  const filteredArticles = THEORY_ARTICLES.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedArticle = THEORY_ARTICLES.find(a => a.id === selectedArticleId) || THEORY_ARTICLES[0];
  const currentIndex = THEORY_ARTICLES.findIndex(a => a.id === selectedArticle.id);

  const handlePrevArticle = () => {
    if (currentIndex > 0) {
      setSelectedArticleId(THEORY_ARTICLES[currentIndex - 1].id);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleNextArticle = () => {
    if (currentIndex < THEORY_ARTICLES.length - 1) {
      setSelectedArticleId(THEORY_ARTICLES[currentIndex + 1].id);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
      {/* Book Cover Header */}
      <div className="mb-6 sm:mb-8 border-b vact-border pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 mb-3 border border-blue-300 dark:border-blue-800">
          <BookOpen className="w-4 h-4 text-blue-600" />
          Sách Giáo Trình & Sổ Tay Phương Pháp V-ACT Chuẩn 2025/2026
        </div>
        <h1 className="text-2xl sm:text-4xl font-black vact-text-primary tracking-tight">
          Kho Lý Thuyết & Cẩm Nang Giải Nhanh ĐHQG-HCM
        </h1>
        <p className="mt-2 vact-text-secondary max-w-4xl text-xs sm:text-base leading-relaxed">
          Được trình bày theo giao diện sách chuyên khảo chống mỏi mắt: bảng ma trận đối ứng, bẫy ngôn ngữ, công thức quy hoạch thực tế, mẹo Casio và suy luận khoa học.
        </p>
      </div>

      {/* Chapter Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between mb-6">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 ios-scroll no-scrollbar -mx-1 px-1">
          {THEORY_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-xs ring-2 ring-blue-400/40'
                  : 'vact-card border vact-border vact-text-secondary hover:vact-text-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 vact-text-muted" />
          <input
            type="text"
            placeholder="Tìm theo chủ đề, bẫy, công thức..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm vact-card border vact-border vact-text-primary placeholder:vact-text-muted focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
          />
        </div>
      </div>

      {/* Book Reading Layout: Table of Contents (Left) + Book Page Reader (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Book Table of Contents (Mục lục sách) */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="text-xs font-black uppercase tracking-wider vact-text-muted px-1 flex items-center justify-between">
            <span>Mục lục các bài học</span>
            <span>{filteredArticles.length} bài</span>
          </div>

          <div className="space-y-2 max-h-[750px] overflow-y-auto pr-1 ios-scroll">
            {filteredArticles.map((article, idx) => {
              const isSelected = selectedArticle.id === article.id;
              return (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticleId(article.id)}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-2 border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 shadow-xs'
                      : 'vact-card border vact-border hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-black mb-1">
                    <span className="text-blue-600 dark:text-blue-400">
                      {article.chapter}
                    </span>
                    <span className="vact-text-muted flex items-center gap-1 font-bold">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-black vact-text-primary text-xs sm:text-sm mb-1 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs vact-text-muted line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Book Page Reader (Trang Sách Đọc Chuyên Nghiệp) */}
        <div className="lg:col-span-8">
          <article className="vact-card rounded-3xl border vact-border p-5 sm:p-10 shadow-sm relative">
            {/* Book Page Header Banner */}
            <div className="border-b vact-border pb-5 mb-6">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-black px-3 py-1 rounded-full bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 border border-blue-300 dark:border-blue-800">
                  {selectedArticle.chapter} • {selectedArticle.readTime} đọc
                </span>
                <span className="text-xs font-bold vact-text-muted">
                  Bài {currentIndex + 1} / {THEORY_ARTICLES.length}
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-black vact-text-primary leading-snug tracking-tight">
                {selectedArticle.title}
              </h2>
            </div>

            {/* Book Body Sections */}
            <div className="space-y-6">
              {selectedArticle.sections.map((sec, sIdx) => {
                if (sec.type === 'text') {
                  return (
                    <div key={sIdx} className="space-y-2">
                      {sec.heading && (
                        <h3 className="text-base sm:text-lg font-black vact-text-primary flex items-center gap-2">
                          <span className="w-1.5 h-4 bg-blue-600 rounded-full inline-block"></span>
                          {sec.heading}
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
                          <span className="w-1.5 h-4 bg-indigo-600 rounded-full inline-block"></span>
                          {sec.heading}
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
                  const isTip = sec.variant === 'tip';

                  let calloutStyle = 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-100';
                  let icon = <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />;

                  if (isWarning) {
                    calloutStyle = 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-100';
                    icon = <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />;
                  } else if (isFormula) {
                    calloutStyle = 'bg-blue-50/80 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800 text-blue-950 dark:text-blue-100';
                    icon = <Calculator className="w-5 h-5 text-blue-600 shrink-0" />;
                  }

                  return (
                    <div key={sIdx} className={`p-4 sm:p-5 rounded-2xl border-2 ${calloutStyle} space-y-1.5`}>
                      <div className="flex items-center gap-2 font-black text-xs sm:text-sm">
                        {icon}
                        <span>{sec.heading}</span>
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

            {/* Book Pagination Footer (Trang trước / Trang tiếp theo) */}
            <div className="mt-8 pt-6 border-t vact-border flex items-center justify-between gap-3">
              <button
                disabled={currentIndex === 0}
                onClick={handlePrevArticle}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-black text-xs vact-card border vact-border vact-text-primary disabled:opacity-40 disabled:cursor-not-allowed hover:border-blue-500 cursor-pointer transition-all active:scale-95 shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Bài trước</span>
              </button>

              <span className="text-xs font-bold vact-text-muted hidden sm:inline">
                Trang {currentIndex + 1} / {THEORY_ARTICLES.length}
              </span>

              <button
                disabled={currentIndex === THEORY_ARTICLES.length - 1}
                onClick={handleNextArticle}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-black text-xs bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all active:scale-95 shadow-xs"
              >
                <span>Bài tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
