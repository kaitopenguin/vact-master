import React from 'react';
import { Compass, CheckCircle, Target, Calendar, Trophy, ArrowRight } from 'lucide-react';
import { STUDY_ROADMAP } from '../data/tipsData';

export default function RoadmapView({ onStartExam }) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-200 mb-3 border border-indigo-300 dark:border-indigo-800">
          <Compass className="w-4 h-4 text-indigo-600" />
          Kế hoạch 10 tuần chinh phục V-ACT
        </div>
        <h1 className="text-2xl sm:text-4xl font-black vact-text-primary tracking-tight">
          Lộ Trình Tự Học Từ Số 0 Lên 900+ Điểm
        </h1>
        <p className="mt-3 vact-text-secondary text-sm sm:text-base leading-relaxed font-medium">
          Chia nhỏ mục tiêu thành 4 chặng rõ ràng, giúp bạn không bị ngợp trước khối lượng kiến thức khổng lồ của 7 phân môn thi.
        </p>
      </div>

      {/* Roadmap Timeline */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:bg-[var(--border-strong)] before:-translate-x-1/2">
        {STUDY_ROADMAP.map((step, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={idx} 
              className={`relative flex flex-col md:flex-row items-start ${
                isEven ? 'md:flex-row-reverse' : ''
              } gap-6 md:gap-12`}
            >
              {/* Timeline Center Badge */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-blue-500/30 z-10 border-4 border-[var(--bg-page)]">
                {idx + 1}
              </div>

              {/* Card content */}
              <div className="ml-16 md:ml-0 md:w-1/2">
                <div className="vact-card rounded-3xl border vact-border p-6 sm:p-7 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {step.stage}
                    </span>
                    <span className="text-xs font-bold vact-text-muted flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      {step.time}
                    </span>
                  </div>

                  <h3 className="text-lg font-black vact-text-primary mb-2">
                    {step.title}
                  </h3>

                  <div className="text-xs font-black text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1.5 rounded-xl mb-4 flex items-center gap-1.5 border border-emerald-300 dark:border-emerald-800">
                    <Target className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Mục tiêu: {step.goal}</span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm vact-text-secondary font-medium">
                    {step.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Box */}
      <div className="mt-14 text-center vact-card rounded-3xl border vact-border p-8 shadow-sm">
        <Trophy className="w-12 h-12 text-amber-500 mx-auto mb-3" />
        <h3 className="text-xl sm:text-2xl font-black vact-text-primary mb-2">
          Bắt Đầu Ngay Với Bài Thi Đánh Giá Năng Lực Chuẩn 2025
        </h3>
        <p className="text-xs sm:text-sm vact-text-secondary max-w-xl mx-auto mb-6 leading-relaxed font-medium">
          Làm thử 1 bài thi hoàn chỉnh trong 150 phút để định vị điểm xuất phát hiện tại và phát hiện ngay những lỗ hổng kiến thức.
        </p>
        <button
          onClick={onStartExam}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
        >
          <span>Vào thi thử ngay</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
