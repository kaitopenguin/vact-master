import React, { useState } from 'react';
import { BookmarkCheck, Trash2, RotateCcw, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import MathRenderer from './MathRenderer';

export default function MistakeView({ mistakes, onRemoveMistake, onClearAllMistakes }) {
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'quiz'
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState({});

  if (mistakes.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-300 dark:border-emerald-800">
          <BookmarkCheck className="w-8 h-8" />
        </div>
        <h2 className="text-xl sm:text-2xl font-black vact-text-primary mb-2">
          Sổ tay câu sai trống!
        </h2>
        <p className="vact-text-muted text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          Khi làm bài thi thử, hãy bấm "Lưu câu sai" ở những câu bạn làm sai hoặc phân vân để gom lại ôn tập tại đây.
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
    <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="text-xl sm:text-3xl font-black vact-text-primary tracking-tight flex items-center gap-2">
            <span>Sổ Tay Câu Sai & Hay Nhầm</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200 font-bold border border-rose-300 dark:border-rose-800">
              {mistakes.length} câu
            </span>
          </h1>
          <p className="mt-1 vact-text-secondary text-xs sm:text-sm leading-relaxed">
            Học từ chính sai lầm là cách nhanh nhất để nâng điểm số. Làm lại cho đến khi thuộc lòng!
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab(activeTab === 'list' ? 'quiz' : 'list')}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors cursor-pointer active:scale-95"
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
            className="p-2.5 rounded-xl vact-card border vact-border vact-text-muted hover:text-rose-600 transition-colors cursor-pointer active:scale-95"
            title="Xóa tất cả câu đã lưu"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* List Mode */}
      <div className="space-y-4 sm:space-y-6">
        {mistakes.map((q, idx) => {
          const userPick = quizAnswers[q.id];
          const isAnswered = userPick !== undefined;
          const isCorrect = userPick === q.correctAnswer;
          const isExplVisible = activeTab === 'list' || showExplanation[q.id];

          return (
            <div
              key={q.id}
              className="vact-card rounded-2xl sm:rounded-3xl border vact-border p-4 sm:p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-black vact-text-primary text-sm sm:text-base">
                    Câu {idx + 1}
                  </span>
                  <span className="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full vact-card-subtle border vact-border vact-text-secondary">
                    {q.sectionName}
                  </span>
                </div>

                <button
                  onClick={() => onRemoveMistake(q.id)}
                  className="text-xs font-bold vact-text-muted hover:text-rose-600 flex items-center gap-1 transition-colors cursor-pointer"
                  title="Xóa câu này khỏi sổ tay"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Đã nắm vững</span>
                </button>
              </div>

              {q.passage && (
                <div className="mb-3 sm:mb-4 p-3.5 rounded-xl vact-card-subtle border vact-border text-xs sm:text-sm vact-text-primary font-medium leading-relaxed">
                  <MathRenderer content={q.passage} />
                </div>
              )}

              <div className="font-black vact-text-primary text-sm sm:text-base mb-4">
                <MathRenderer content={q.question} />
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {q.options.map((opt, oIdx) => {
                  let optStyle = 'vact-card-subtle border vact-border vact-text-secondary';
                  
                  if (activeTab === 'list') {
                    if (oIdx === q.correctAnswer) {
                      optStyle = 'border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 font-black';
                    }
                  } else {
                    if (isAnswered) {
                      if (oIdx === q.correctAnswer) {
                        optStyle = 'border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 font-black';
                      } else if (userPick === oIdx) {
                        optStyle = 'border-2 border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-200 font-black';
                      }
                    }
                  }

                  return (
                    <div
                      key={oIdx}
                      onClick={() => activeTab === 'quiz' && !isAnswered && handleSelectQuizOption(q.id, oIdx)}
                      className={`min-h-[44px] p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-2 ${optStyle} ${
                        activeTab === 'quiz' && !isAnswered ? 'cursor-pointer hover:border-blue-400 active:scale-98' : ''
                      }`}
                    >
                      <div className="flex-1">
                        <MathRenderer content={typeof opt === 'string' ? opt.replace(/^[A-D]\.\s*/, '') : opt} />
                      </div>
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
                <div className="p-3.5 sm:p-4 rounded-xl vact-card-subtle border vact-border text-xs sm:text-sm leading-relaxed">
                  <div className="font-black text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Lời giải chi tiết:
                  </div>
                  <div className="vact-text-primary font-medium">
                    <MathRenderer content={q.explanation} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
