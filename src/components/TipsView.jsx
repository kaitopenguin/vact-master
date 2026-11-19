import React from 'react';
import { Lightbulb, Clock, CheckSquare, Sparkles, UserCheck, ShieldAlert } from 'lucide-react';
import { EXAM_TIPS } from '../data/tipsData';

export default function TipsView({ fontSize = 'normal' }) {
  const getIconForCategory = (cat) => {
    switch (cat) {
      case 'Quản lý thời gian': return Clock;
      case 'Kỹ năng Casio': return Sparkles;
      case 'Tâm lý phòng thi': return UserCheck;
      default: return CheckSquare;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 mb-3 border border-amber-300 dark:border-amber-800">
          <Lightbulb className="w-4 h-4 text-amber-600" />
          Kinh nghiệm thực chiến từ Thủ khoa 1000+
        </div>
        <h1 className="text-2xl sm:text-4xl font-black vact-text-primary tracking-tight">
          Bí Kíp, Mẹo Làm Bài & Chiến Thuật Phòng Thi
        </h1>
        <p className="mt-2 vact-text-secondary max-w-3xl text-sm sm:text-base leading-relaxed">
          Những đúc kết quý giá giúp bạn tối ưu từng phút làm bài và tăng từ 100 - 200 điểm thi ĐGNL V-ACT.
        </p>
      </div>

      {/* Grid of Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXAM_TIPS.map((tip) => {
          const IconComponent = getIconForCategory(tip.category);
          return (
            <div
              key={tip.id}
              className="vact-card rounded-3xl border vact-border p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-black px-3 py-1 rounded-xl bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 border border-blue-300 dark:border-blue-800">
                    <IconComponent className="w-3.5 h-3.5 text-blue-600" />
                    {tip.category}
                  </span>
                  <span className="text-xs font-bold vact-text-muted">
                    {tip.author}
                  </span>
                </div>

                <h3 className="text-lg font-black vact-text-primary mb-3 leading-snug">
                  {tip.title}
                </h3>

                <div className="text-xs sm:text-sm vact-text-secondary leading-relaxed whitespace-pre-line font-medium space-y-2">
                  {tip.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Golden Rules Box */}
      <div className="mt-10 p-6 sm:p-8 rounded-3xl vact-card-subtle border vact-border shadow-sm">
        <h3 className="text-base sm:text-lg font-black text-amber-600 dark:text-amber-400 flex items-center gap-2 mb-3">
          <ShieldAlert className="w-5 h-5 text-amber-500" />
          3 Điều Tối Kỵ Không Được Quên Trong Phòng Thi V-ACT
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm vact-text-primary list-disc list-inside leading-relaxed font-bold">
          <li><strong>Không bao giờ bỏ trống bất kỳ câu nào:</strong> V-ACT không trừ điểm khi trả lời sai. Khi hết giờ, hãy tô hết toàn bộ các câu còn lại.</li>
          <li><strong>Không bị sa lầy quá 2.5 phút cho 1 câu toán/logic:</strong> Nếu sau 90 giây chưa tìm ra hướng giải, hãy khoanh tròn vào đề và chuyển ngay sang câu tiếp theo.</li>
          <li><strong>Tô đáp án trực tiếp vào phiếu trả lời trắc nghiệm:</strong> Tránh thói quen làm hết trên đề rồi 15 phút cuối mới tô, rủi ro lệch dòng rất cao!</li>
        </ul>
      </div>
    </div>
  );
}
