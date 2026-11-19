import React, { useState } from 'react';
import { 
  Lightbulb, 
  Clock, 
  CheckSquare, 
  Sparkles, 
  UserCheck, 
  ShieldAlert, 
  Target, 
  Calculator, 
  CheckCircle2, 
  Award,
  Zap,
  Bookmark
} from 'lucide-react';
import { EXAM_TIPS } from '../data/tipsData';

export default function TipsView({ fontSize = 'normal' }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả bí kíp' },
    { id: 'time', label: '⏱️ Quản lý thời gian' },
    { id: 'casio', label: '🔢 Kỹ năng Casio' },
    { id: 'logic', label: '🧠 Tư duy Logic' },
    { id: 'elimination', label: '🎯 Loại trừ & Khoanh bừa' },
  ];

  const getCategoryMeta = (cat) => {
    if (cat.includes('VnNO1') || cat.includes('Logic')) {
      return { icon: Target, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' };
    }
    if (cat.includes('CPEN') || cat.includes('thời gian')) {
      return { icon: Clock, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800' };
    }
    if (cat.includes('Casio')) {
      return { icon: Calculator, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' };
    }
    return { icon: Sparkles, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800' };
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8 border-b vact-border pb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 mb-3 border border-amber-300 dark:border-amber-800">
          <Lightbulb className="w-4 h-4 text-amber-600" />
          Kinh Nghiệm Thực Chiến Từ Thủ Khoa 1000+ (CPEN & VnNO1)
        </div>
        <h1 className="text-2xl sm:text-4xl font-black vact-text-primary tracking-tight">
          Cẩm Nang Bí Kíp, Mẹo Bấm Máy & Phản Xạ Phòng Thi
        </h1>
        <p className="mt-2 vact-text-secondary max-w-3xl text-xs sm:text-base leading-relaxed font-medium">
          Đúc kết những chiến thuật sống còn giúp thí sinh tối ưu hóa từng giây làm bài, loại trừ 3 phương án nhiễu và bứt phá từ 100 - 200 điểm thi V-ACT ĐHQG-HCM.
        </p>
      </div>

      {/* Grid of Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10">
        {EXAM_TIPS.map((tip) => {
          const meta = getCategoryMeta(tip.category);
          const Icon = meta.icon;

          // Format clean content lines without raw markdown
          const cleanLines = tip.content
            .trim()
            .split('\n')
            .filter(l => l.trim().length > 0)
            .map(l => l.replace(/^\d+\.\s*/, '').replace(/^[-*]\s*/, '').replace(/\*\*/g, '').replace(/###\s*/, ''));

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
                  <span className="text-[11px] font-bold vact-text-muted">
                    {tip.author}
                  </span>
                </div>

                <h3 className="text-base sm:text-xl font-black vact-text-primary mb-4 leading-snug">
                  {tip.title}
                </h3>

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
