import React, { useState } from 'react';
import { BookmarkCheck, Trash2, RotateCcw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

export default function MistakeView({ mistakes, onRemoveMistake, onClearAllMistakes }) {
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'quiz'
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  if (mistakes.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <BookmarkCheck className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Sổ tay câu sai trống!
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
          Khi làm bài thi thử, hãy bấm "Lưu vào sổ tay" ở những câu bạn làm sai hoặc phân vân để gom lại ôn tập tại đây.
        </p>
      </div>
    );
  }

  const handleSelectQuizOption = (qId, optionIdx) => {
    setQuizAnswers(prev => ({
      ...prev,
      [qId]: optionIdx
    }));
    setShowExplanation(prev => ({
      ...prev,
      [qId]: true
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <span>Sổ Tay Câu Sai & Hay Nhầm</span>
            <span className="text-sm px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold">
              {mistakes.length} câu
            </span>
          </h1>
          <p className="mt-1 text-slate-600 dark:text-slate-400 text-sm">
            Học từ chính sai lầm là cách nhanh nhất để nâng điểm số. Làm lại cho đến khi thuộc lòng!
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab(activeTab === 'list' ? 'quiz' : 'list')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {activeTab === 'list' ? 'Làm lại các câu này' : 'Xem dạng danh sách'}
          </button>

          <button
            onClick={() => {
              if (window.confirm('Bạn có chắc muốn xóa toàn bộ câu trong sổ tay?')) {
                onClearAllMistakes();
              }
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
            title="Xóa tất cả câu đã lưu"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* List Mode */}
      <div className="space-y-6">
        {mistakes.map((q, idx) => {
          const userPick = quizAnswers[q.id];
          const isAnswered = userPick !== undefined;
          const isCorrect = userPick === q.correctAnswer;
          const isExplVisible = activeTab === 'list' || showExplanation[q.id];

          return (
            <div
              key={q.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    Câu {idx + 1}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {q.sectionName}
                  </span>
                </div>

                <button
                  onClick={() => onRemoveMistake(q.id)}
                  className="text-xs text-slate-400 hover:text-rose-600 flex items-center gap-1 transition-colors"
                  title="Xóa câu này khỏi sổ tay"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Đã nắm vững</span>
                </button>
              </div>

              {q.passage && (
                <div className="mb-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-serif whitespace-pre-line border border-slate-200/60 dark:border-slate-700/60">
                  {q.passage}
                </div>
              )}

              <p className="font-semibold text-slate-900 dark:text-white text-base mb-4 whitespace-pre-line">
                {q.question}
              </p>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {q.options.map((opt, oIdx) => {
                  let optStyle = 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300';
                  
                  if (activeTab === 'list') {
                    if (oIdx === q.correctAnswer) {
                      optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                    }
                  } else {
                    if (isAnswered) {
                      if (oIdx === q.correctAnswer) {
                        optStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold';
                      } else if (userPick === oIdx) {
                        optStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-semibold';
                      }
                    }
                  }

                  return (
                    <div
                      key={oIdx}
                      onClick={() => activeTab === 'quiz' && !isAnswered && handleSelectQuizOption(q.id, oIdx)}
                      className={`p-3 rounded-xl border text-sm flex items-center justify-between ${optStyle} ${
                        activeTab === 'quiz' && !isAnswered ? 'cursor-pointer hover:border-blue-400' : ''
                      }`}
                    >
                      <span>{opt}</span>
                      {activeTab === 'list' && oIdx === q.correctAnswer && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {activeTab === 'quiz' && isAnswered && oIdx === q.correctAnswer && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {activeTab === 'quiz' && isAnswered && userPick === oIdx && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              {isExplVisible && (
                <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 text-sm">
                  <div className="font-bold text-blue-900 dark:text-blue-200 mb-1 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Lời giải chi tiết:
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
