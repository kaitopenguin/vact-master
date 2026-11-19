import React from 'react';
import { Lightbulb, Clock, CheckSquare, Sparkles, UserCheck, ShieldAlert } from 'lucide-react';
import { EXAM_TIPS } from '../data/tipsData';

export default function TipsView() {
  const getIconForCategory = (cat) => {
    switch (cat) {
      case 'Quản lý thời gian': return Clock;
      case 'Kỹ năng Casio': return Sparkles;
      case 'Tâm lý phòng thi': return UserCheck;
      default: return CheckSquare;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 mb-3">
          <Lightbulb className="w-3.5 h-3.5" />
          Kinh nghiệm thực chiến từ Thủ khoa 1000+
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Bí Kíp, Mẹo Làm Bài & Chiến Thuật Phòng Thi
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Những đúc kết quý giá giúp bạn tối ưu từng phút làm bài và tăng từ 100 - 200 điểm thi ĐGNL.
        </p>
      </div>

      {/* Grid of Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXAM_TIPS.map((tip) => {
          const IconComponent = getIconForCategory(tip.category);
          return (
            <div
              key={tip.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    <IconComponent className="w-3.5 h-3.5" />
                    {tip.category}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {tip.author}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 leading-snug">
                  {tip.title}
                </h3>

                <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                  {tip.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Golden Rules Box */}
      <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 border border-amber-200 dark:border-amber-900/40">
        <h3 className="text-base sm:text-lg font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          3 Điều Tối Kỵ Không Được Quên Trong Phòng Thi V-ACT
        </h3>
        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-disc list-inside leading-relaxed">
          <li><strong>Không bao giờ để trống bất kỳ câu nào:</strong> Bài thi ĐGNL ĐHQG TP.HCM không trừ điểm khi trả lời sai. Hãy khoanh 100% tất cả 120 ô!</li>
          <li><strong>Không sa đà vào 1 câu toán/logic quá 3 phút:</strong> Nếu sau 2 phút chưa thấy hướng giải, lập tức đánh dấu cờ và chuyển sang câu tiếp theo.</li>
          <li><strong>Tô phiếu trắc nghiệm theo từng trang:</strong> Đừng dồn 120 câu đến cuối giờ mới tô, nguy cơ tô lệch dòng hoặc hết giờ khi chưa kịp tô là cực kỳ cao.</li>
        </ul>
      </div>
    </div>
  );
}
