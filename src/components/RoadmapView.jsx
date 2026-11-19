import React from 'react';
import { Compass, CheckCircle, Target, Calendar, Trophy, ArrowRight } from 'lucide-react';
import { STUDY_ROADMAP } from '../data/tipsData';

export default function RoadmapView({ onStartExam }) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 mb-3">
          <Compass className="w-3.5 h-3.5" />
          Kế hoạch 10 tuần chinh phục V-ACT
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Lộ Trình Tự Học Từ Số 0 Lên 900+ Điểm
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Chia nhỏ mục tiêu thành 4 chặng rõ ràng, giúp bạn không bị ngợp trước khối lượng kiến thức khổng lồ của 7 phân môn thi.
        </p>
      </div>

      {/* Roadmap Timeline */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 before:-translate-x-1/2">
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
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-lg shadow-blue-500/30 z-10 border-4 border-slate-50 dark:border-slate-950">
                {idx + 1}
              </div>

              {/* Card content */}
              <div className="ml-16 md:ml-0 md:w-1/2">
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {step.stage}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {step.time}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-lg mb-4 flex items-center gap-1.5">
                    <Target className="w-4 h-4 shrink-0" />
                    <span>Mục tiêu: {step.goal}</span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {step.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
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

      {/* Call to action */}
      <div className="mt-14 p-8 rounded-3xl bg-blue-600 text-white text-center shadow-xl shadow-blue-600/20">
        <Trophy className="w-12 h-12 mx-auto mb-3 text-amber-300" />
        <h3 className="text-2xl font-extrabold tracking-tight mb-2">
          Sẵn sàng bắt đầu Chặng 1 ngay hôm nay?
        </h3>
        <p className="text-blue-100 text-sm max-w-lg mx-auto mb-6">
          Làm ngay bài thi thử đầu tiên để chẩn đoán chính xác mức điểm hiện tại và xác định phần môn cần củng cố gấp.
        </p>
        <button
          onClick={onStartExam}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-bold text-sm shadow-md hover:bg-blue-50 transition-colors"
        >
          Làm bài thi chẩn đoán (150 phút)
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
