import React, { useState } from 'react';
import { Search, BookOpen, Clock, ChevronRight, Tag } from 'lucide-react';
import { THEORY_CATEGORIES, THEORY_ARTICLES } from '../data/theoryData';

export default function TheoryView({ fontSize = 'normal' }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(THEORY_ARTICLES[0]);

  const filteredArticles = THEORY_ARTICLES.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 mb-3 border border-blue-300 dark:border-blue-800">
          <BookOpen className="w-4 h-4 text-blue-600" />
          Hệ Thống Kiến Thức Trọng Tâm V-ACT GDPT 2018
        </div>
        <h1 className="text-2xl sm:text-4xl font-black vact-text-primary tracking-tight">
          Kho Lý Thuyết & Bí Quyết Xử Lý Dạng Bài
        </h1>
        <p className="mt-2 vact-text-secondary max-w-4xl text-sm sm:text-base leading-relaxed">
          Tổng hợp toàn bộ kiến thức cốt lõi, công thức giải nhanh và các bẫy thường gặp của ĐGNL ĐHQG TP.HCM: Ngôn ngữ, Toán học, Logic ma trận và Suy luận khoa học.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8">
        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {THEORY_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-400/40'
                  : 'vact-card border vact-border vact-text-secondary hover:vact-text-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[280px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 vact-text-muted" />
          <input
            type="text"
            placeholder="Tìm kiếm công thức, chủ đề..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm vact-card border vact-border vact-text-primary placeholder:vact-text-muted focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold"
          />
        </div>
      </div>

      {/* Two Column Layout: Article List + Reader Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Article Thumbnails (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {filteredArticles.length === 0 ? (
            <div className="p-8 text-center vact-card rounded-2xl border vact-border vact-text-muted">
              Không tìm thấy tài liệu phù hợp với từ khóa "{searchQuery}"
            </div>
          ) : (
            filteredArticles.map(article => {
              const isSelected = selectedArticle?.id === article.id;
              return (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-2 border-blue-600 bg-blue-50/40 dark:bg-blue-950/40 shadow-sm'
                      : 'vact-card border vact-border hover:border-blue-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs vact-text-muted mb-2">
                    <span className="font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {THEORY_CATEGORIES.find(c => c.id === article.category)?.name}
                    </span>
                    <span className="flex items-center gap-1 font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-black vact-text-primary text-base mb-1.5 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm vact-text-secondary line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Right Side: Article Reading Pane (7 cols) */}
        <div className="lg:col-span-7">
          {selectedArticle ? (
            <div className="vact-card rounded-3xl border vact-border p-6 sm:p-8 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 text-xs font-black text-blue-600 dark:text-blue-400 mb-3">
                <Tag className="w-3.5 h-3.5" />
                <span>{THEORY_CATEGORIES.find(c => c.id === selectedArticle.category)?.name}</span>
                <span>•</span>
                <span className="vact-text-muted flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedArticle.readTime} đọc
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black vact-text-primary mb-6 leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="vact-text-secondary text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4 font-medium">
                {selectedArticle.content}
              </div>
            </div>
          ) : (
            <div className="p-12 text-center vact-card rounded-3xl border vact-border vact-text-muted">
              Chọn một chuyên đề từ danh sách bên trái để bắt đầu học.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
