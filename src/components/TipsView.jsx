import React, { useState } from 'react';
import { 
  Lightbulb, 
  Clock, 
  Sparkles, 
  ShieldAlert, 
  Target, 
  BarChart3,
  Microscope,
  Copy,
  Check,
  Search
} from 'lucide-react';
import { EXAM_TIPS } from '../data/tipsData';

export default function TipsView({ fontSize = 'normal' }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const categories = [
    { id: 'all', label: 'Tất cả bí kíp' },
    { id: '⏱️ Quản lý thời gian', label: '⏱️ Thời gian' },
    { id: '🔢 Kỹ năng Casio', label: '🔢 Kỹ năng Toán học' },
    { id: '🧠 Tư duy Logic', label: '🧠 Tư duy Logic' },
    { id: '📊 Phân tích số liệu', label: '📊 Phân tích Số liệu' },
    { id: '🔬 Suy luận Khoa học', label: '🔬 Khoa học' },
    { id: '🎯 Loại trừ & Khoanh bừa', label: '🎯 Loại trừ & Khoanh bừa' },
  ];

  const filteredTips = EXAM_TIPS.filter(tip => {
    const matchesCat = selectedCategory === 'all' || tip.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = tip.title.toLowerCase().includes(q) ||
                          tip.content.toLowerCase().includes(q) ||
                          tip.source.toLowerCase().includes(q) ||
                          (tip.tags && tip.tags.some(t => t.toLowerCase().includes(q)));
    return matchesCat && matchesSearch;
  });

  const getCategoryMeta = (cat) => {
    if (cat.includes('Logic')) {
      return { icon: Target, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' };
    }
    if (cat.includes('Thời gian') || cat.includes('thời gian')) {
      return { icon: Clock, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800' };
    }
    if (cat.includes('Casio') || cat.includes('Toán')) {
      return { icon: Target, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' };
    }
    if (cat.includes('Số liệu') || cat.includes('số liệu')) {
      return { icon: BarChart3, color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800' };
    }
    if (cat.includes('Khoa học')) {
      return { icon: Microscope, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950 dark:text-purple-300 border-purple-200 dark:border-purple-800' };
    }
    return { icon: Sparkles, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800' };
  };

  const handleCopy = (tip) => {
    navigator.clipboard.writeText(`${tip.title}\n\n${tip.content}`);
    setCopiedId(tip.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8 border-b vact-border pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 mb-3 border border-amber-300 dark:border-amber-800">
          <Lightbulb className="w-4 h-4 text-amber-600" />
          Kinh Nghiệm Thực Chiến Từ Thủ Khoa 1000+ V-ACT
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-4xl font-black vact-text-primary tracking-tight">
              Cẩm Nang Bí Kíp, Mẹo Giải Nhanh & Phản Xạ Phòng Thi
            </h1>
            <p className="mt-2 vact-text-secondary max-w-3xl text-xs sm:text-base leading-relaxed font-medium">
              Đúc kết những chiến thuật sống còn giúp thí sinh tối ưu hóa từng giây làm bài, nhận diện bẫy, loại trừ phương án sai và bứt phá 900+ điểm V-ACT.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between mb-6">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 ios-scroll no-scrollbar -mx-1 px-1">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-xs ring-2 ring-amber-400/40'
                  : 'vact-card border vact-border vact-text-secondary hover:vact-text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 vact-text-muted" />
          <input
            type="text"
            placeholder="Tìm theo chủ đề, mẹo, công thức..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm vact-card border vact-border vact-text-primary placeholder:vact-text-muted focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold"
          />
        </div>
      </div>

      {/* Grid of Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10">
        {filteredTips.map((tip) => {
          const meta = getCategoryMeta(tip.category);
          const Icon = meta.icon;

          // Format clean content lines without raw markdown
          const cleanLines = tip.content
            .trim()
            .split('\n')
            .filter(l => l.trim().length > 0)
            .map(l => l.replace(/^\d+\.\s*/, '').replace(/^[-*]\s*/, '').replace(/\*\*/g, '').replace(/###\s*/, ''));

          const isCasioTip = tip.category.includes('Casio');

          return (
            <div
              key={tip.id}
              className="vact-card rounded-3xl border vact-border p-5 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-xl border ${meta.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                    {tip.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold vact-text-muted">
                      {tip.source}
                    </span>
                    <button
                      onClick={() => handleCopy(tip)}
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
                      title="Sao chép mẹo này"
                    >
                      {copiedId === tip.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <h3 className="text-base sm:text-xl font-black vact-text-primary mb-3 leading-snug">
                  {tip.title}
                </h3>

                {/* Tags */}
                {tip.tags && (
                  <div className="flex items-center gap-1.5 flex-wrap mb-4">
                    {tip.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold px-2 py-0.5 rounded-md vact-card-subtle border vact-border vact-text-muted">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="space-y-2.5">
                  {cleanLines.map((line, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm vact-text-secondary leading-relaxed font-medium">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredTips.length === 0 && (
        <div className="p-12 text-center vact-card rounded-3xl border vact-border mb-10">
          <Lightbulb className="w-8 h-8 text-amber-500 mx-auto mb-2 opacity-50" />
          <p className="text-sm font-black vact-text-primary">Không tìm thấy bí kíp phù hợp với từ khóa.</p>
          <p className="text-xs vact-text-muted mt-1">Thử chọn danh mục "Tất cả bí kíp" hoặc tìm từ khóa khác.</p>
        </div>
      )}

      {/* Golden Rules Box */}
      <div className="p-6 sm:p-8 rounded-3xl vact-card-subtle border-2 border-amber-500/40 shadow-xs">
        <h3 className="text-base sm:text-lg font-black text-amber-700 dark:text-amber-400 flex items-center gap-2 mb-4">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
          <span>3 Nguyên Tắc Sống Còn Không Được Phép Quên Trong Phòng Thi V-ACT</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl vact-card border vact-border space-y-1.5">
            <div className="text-xs font-black text-rose-600 dark:text-rose-400">1. Không bao giờ bỏ trống</div>
            <p className="text-xs vact-text-secondary font-medium leading-relaxed">
              V-ACT chấm theo mô hình IRT và không trừ điểm câu sai. Khi còn 3 phút cuối, hãy tô kín 100% phiếu trả lời.
            </p>
          </div>

          <div className="p-4 rounded-2xl vact-card border vact-border space-y-1.5">
            <div className="text-xs font-black text-amber-600 dark:text-amber-400">2. Quy tắc 90 giây</div>
            <p className="text-xs vact-text-secondary font-medium leading-relaxed">
              Nếu sau 90 giây chưa tìm ra hướng giải một câu toán/logic, lập tức đánh dấu cờ và chuyển câu khác, không để sa lầy.
            </p>
          </div>

          <div className="p-4 rounded-2xl vact-card border vact-border space-y-1.5">
            <div className="text-xs font-black text-emerald-600 dark:text-emerald-400">3. Tô phiếu trực tiếp</div>
            <p className="text-xs vact-text-secondary font-medium leading-relaxed">
              Làm xong nhóm câu nào tô ngay vào phiếu trắc nghiệm, tránh thói quen dồn đến 15 phút cuối dễ bị lệch dòng hàng loạt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
