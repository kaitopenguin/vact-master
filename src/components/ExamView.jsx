import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Flag, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  Bookmark, 
  BookmarkCheck,
  BarChart2, 
  HelpCircle,
  Play,
  Layers,
  BookOpen,
  Compass,
  Cpu
} from 'lucide-react';
import { EXAM_LIST, QUESTIONS_DATA } from '../data/examData';
import confetti from 'canvas-confetti';

export default function ExamView({ onSaveMistake, savedMistakeIds = [] }) {
  const [selectedExamId, setSelectedExamId] = useState(null);
  const [examState, setExamState] = useState('list'); // 'list' | 'taking' | 'result'
  const [filterSection, setFilterSection] = useState('all'); // 'all' or section id
  
  // Quiz running states
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionId]: optionIndex }
  const [flagged, setFlagged] = useState({}); // { [questionId]: boolean }
  const [timeLeft, setTimeLeft] = useState(150 * 60); // 150 mins
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Start exam
  const handleStartExam = (examId, sectionOnly = 'all') => {
    const rawQuestions = QUESTIONS_DATA[examId] || QUESTIONS_DATA['vact-mock-2025'];
    let filtered = rawQuestions;
    if (sectionOnly !== 'all') {
      if (sectionOnly === 'part3_all') {
        filtered = rawQuestions.filter(q => q.partId === 'part3');
      } else {
        filtered = rawQuestions.filter(q => q.section === sectionOnly);
      }
    }
    
    setSelectedExamId(examId);
    setFilterSection(sectionOnly);
    setCurrentQuestions(filtered);
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});
    
    // Duration: 150m for full, or proportional time for practice
    const duration = sectionOnly === 'all' ? 150 * 60 : Math.max(15 * 60, filtered.length * 90);
    setTimeLeft(duration);
    setIsTimerRunning(true);
    setExamState('taking');
  };

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  // Format time hh:mm:ss
  const formatTime = (secs) => {
    const hours = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    if (hours > 0) {
      return `${hours}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSelectOption = (qId, optionIdx) => {
    setAnswers(prev => ({
      ...prev,
      [qId]: optionIdx
    }));
  };

  const toggleFlag = (qId) => {
    setFlagged(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const handleSubmitExam = () => {
    setIsTimerRunning(false);
    setExamState('result');
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  // Current question & counts
  const currentQ = currentQuestions[currentIndex];
  const totalQ = currentQuestions.length;
  const answeredCount = Object.keys(answers).length;

  let correctCount = 0;
  currentQuestions.forEach(q => {
    if (answers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  // Calculate 4 Official Sub-Scores (each 300 max score, total 1.200 points):
  // 1. Tiếng Việt (300 điểm)
  // 2. Tiếng Anh (300 điểm)
  // 3. Toán học (300 điểm)
  // 4. Tư duy khoa học (300 điểm: gồm Logic & Số liệu + Suy luận khoa học)
  const calculateOfficialScores = () => {
    const counts = {
      vietnamese: { total: 0, correct: 0, name: 'Hợp phần Tiếng Việt', max: 300 },
      english: { total: 0, correct: 0, name: 'Hợp phần Tiếng Anh', max: 300 },
      math: { total: 0, correct: 0, name: 'Hợp phần Toán học', max: 300 },
      science: { total: 0, correct: 0, name: 'Hợp phần Tư duy khoa học (Logic, Số liệu & Khoa học)', max: 300 },
    };

    currentQuestions.forEach(q => {
      let bucket = 'science';
      if (q.section === 'vietnamese') bucket = 'vietnamese';
      else if (q.section === 'english') bucket = 'english';
      else if (q.section === 'math') bucket = 'math';

      counts[bucket].total++;
      if (answers[q.id] === q.correctAnswer) {
        counts[bucket].correct++;
      }
    });

    let totalCalculatedScore = 0;
    const scores = {};

    Object.keys(counts).forEach(k => {
      const item = counts[k];
      const score = item.total > 0 ? Math.round((item.correct / item.total) * item.max) : 0;
      scores[k] = {
        ...item,
        score,
        percentage: item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0
      };
      totalCalculatedScore += score;
    });

    return { scores, totalCalculatedScore };
  };

  const { scores: officialScores, totalCalculatedScore } = calculateOfficialScores();

  // RENDER 1: Exam Selection List
  if (examState === 'list') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header & Structure Banner */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 mb-3">
            <Award className="w-3.5 h-3.5" />
            Cấu trúc bài thi V-ACT ĐHQG TP.HCM chuẩn GDPT 2018
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Kỳ Thi Đánh Giá Năng Lực V-ACT (ĐHQG TP.HCM)
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-4xl text-sm sm:text-base leading-relaxed">
            Bài thi chuẩn gồm <strong>120 câu hỏi trắc nghiệm khách quan</strong> làm trong <strong>150 phút</strong>, thang điểm tối đa <strong>1.200 điểm</strong> (chấm theo mô hình IRT, chia làm <strong>4 hợp phần x 300 điểm</strong>, không trừ điểm câu sai).
          </p>
        </div>

        {/* Official 3 Parts Breakdown Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase mb-1">
              <BookOpen className="w-4 h-4" /> Phần 1: Ngôn ngữ (600đ)
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">60 câu • 2 hợp phần</div>
            <div className="text-xs text-slate-500 mt-1">
              • Tiếng Việt (30 câu – 300đ)<br/>
              • Tiếng Anh (30 câu – 300đ)
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase mb-1">
              <Compass className="w-4 h-4" /> Phần 2: Toán học (300đ)
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">30 câu – 300 điểm</div>
            <div className="text-xs text-slate-500 mt-1">
              Tư duy toán học, logic, xử lý số liệu, đọc biểu đồ và bài toán thực tế.
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 text-purple-600 font-bold text-xs uppercase mb-1">
              <Cpu className="w-4 h-4" /> Phần 3: Tư duy KH (300đ)
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">30 câu – 300 điểm</div>
            <div className="text-xs text-slate-500 mt-1">
              • Logic & phân tích số liệu (12 câu)<br/>
              • Suy luận khoa học: Lý, Hóa, Sinh, Sử, Địa, GDKT&PL (18 câu)
            </div>
          </div>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXAM_LIST.map((exam) => (
            <div 
              key={exam.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                    {exam.type}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {exam.durationMinutes} phút • 1.200 điểm
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {exam.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                  {exam.description}
                </p>

                {/* Structure breakdown */}
                <div className="space-y-3 mb-6 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                  {exam.parts.map((p, pIdx) => (
                    <div key={pIdx} className="space-y-1">
                      <div className="font-bold text-xs text-slate-800 dark:text-slate-200">
                        {p.partName}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-500 dark:text-slate-400 pl-2">
                        {p.subsections.map((sub, sIdx) => (
                          <div key={sIdx} className="flex justify-between items-center py-0.5">
                            <span>{sub.name}</span>
                            <span className="font-semibold text-blue-600 dark:text-blue-400">{sub.maxScore}đ ({sub.count} câu)</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleStartExam(exam.id, 'all')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Bắt đầu thi thử toàn phần (Chuẩn 150 phút)
                </button>

                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 text-center">Hoặc luyện tập riêng theo hợp phần 300 điểm:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <button
                      onClick={() => handleStartExam(exam.id, 'vietnamese')}
                      className="py-2 px-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-blue-600 font-semibold transition-colors text-center"
                    >
                      Tiếng Việt (300đ)
                    </button>
                    <button
                      onClick={() => handleStartExam(exam.id, 'english')}
                      className="py-2 px-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-blue-600 font-semibold transition-colors text-center"
                    >
                      Tiếng Anh (300đ)
                    </button>
                    <button
                      onClick={() => handleStartExam(exam.id, 'math')}
                      className="py-2 px-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-blue-600 font-semibold transition-colors text-center"
                    >
                      Toán học (300đ)
                    </button>
                    <button
                      onClick={() => handleStartExam(exam.id, 'part3_all')}
                      className="py-2 px-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-700 dark:text-slate-300 hover:text-blue-600 font-semibold transition-colors text-center"
                    >
                      Tư duy KH (300đ)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // RENDER 2: Exam In Progress
  if (examState === 'taking' && currentQ) {
    const isFlagged = flagged[currentQ.id];

    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Top Control Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-6 shadow-sm flex flex-wrap items-center justify-between gap-4 sticky top-20 z-30">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-900 dark:text-white text-base">
              Câu {currentIndex + 1} / {totalQ}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
              {currentQ.sectionName}
            </span>
          </div>

          {/* Timer Display */}
          <div className="flex items-center gap-2 font-mono font-bold text-lg px-4 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
            <Clock className="w-5 h-5 animate-pulse" />
            <span>{formatTime(timeLeft)}</span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleFlag(currentQ.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isFlagged 
                  ? 'bg-amber-500 text-white shadow-sm' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-amber-100 dark:hover:bg-amber-950 hover:text-amber-600'
              }`}
            >
              <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current' : ''}`} />
              {isFlagged ? 'Đã đánh dấu' : 'Đánh dấu xem lại'}
            </button>

            <button
              onClick={() => {
                if (window.confirm(`Bạn đã hoàn thành ${answeredCount}/${totalQ} câu. Bạn có chắc chắn muốn nộp bài?`)) {
                  handleSubmitExam();
                }
              }}
              className="px-4 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
            >
              Nộp bài
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question area (Left 3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              {/* Passage if present */}
              {currentQ.passage && (
                <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-serif whitespace-pre-line">
                  {currentQ.passage}
                </div>
              )}

              {/* Question text */}
              <div className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed mb-6 whitespace-pre-line">
                {currentQ.question}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt, oIdx) => {
                  const isSelected = answers[currentQ.id] === oIdx;
                  return (
                    <label
                      key={oIdx}
                      onClick={() => handleSelectOption(currentQ.id, oIdx)}
                      className={`flex items-start gap-3 p-4 rounded-xl border text-sm sm:text-base font-medium cursor-pointer transition-all ${
                        isSelected 
                          ? 'border-blue-600 bg-blue-50/80 text-blue-900 dark:border-blue-500 dark:bg-blue-950/50 dark:text-blue-100 shadow-sm' 
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name={`question-${currentQ.id}`} 
                        checked={isSelected}
                        onChange={() => {}}
                        className="mt-1 w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                      />
                      <span className="leading-relaxed">{opt}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Câu trước
              </button>

              <button
                disabled={currentIndex === totalQ - 1}
                onClick={() => setCurrentIndex(prev => Math.min(totalQ - 1, prev + 1))}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold text-sm text-white shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Câu tiếp theo
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Question Grid Sidebar (Right 1 col) */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm sticky top-28">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-center justify-between">
                <span>Mục lục câu hỏi</span>
                <span className="text-xs font-normal text-slate-500">
                  {answeredCount}/{totalQ} đã làm
                </span>
              </h3>

              {/* Legend */}
              <div className="flex items-center gap-3 text-xs mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span>
                  Đã làm
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                  Cờ
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700 inline-block"></span>
                  Chưa
                </div>
              </div>

              {/* Number Buttons Grid */}
              <div className="grid grid-cols-5 gap-2 max-h-[360px] overflow-y-auto pr-1">
                {currentQuestions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isDone = answers[q.id] !== undefined;
                  const isFl = flagged[q.id];

                  let btnStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
                  if (isDone) btnStyle = 'bg-blue-600 text-white font-bold';
                  if (isFl) btnStyle = 'bg-amber-500 text-white font-bold ring-2 ring-amber-300';
                  if (isCurrent) btnStyle += ' ring-2 ring-blue-400 ring-offset-2 dark:ring-offset-slate-900';

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-full aspect-square rounded-lg text-xs font-semibold flex items-center justify-center transition-all ${btnStyle}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RENDER 3: Exam Results View (Official IRT 1200 scale)
  if (examState === 'result') {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Score Overview Card */}
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 rounded-3xl p-8 text-white shadow-xl mb-8 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-white/20 backdrop-blur-md mb-3 inline-block">
                Kết quả thi chuẩn hóa V-ACT (Mô hình IRT)
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {totalCalculatedScore >= 900 ? 'Xuất sắc! Đạt mục tiêu 900+ (Đỗ NV1)' : totalCalculatedScore >= 750 ? 'Khá tốt! Đạt mốc an toàn 750+' : 'Cần nỗ lực thêm để bứt phá!'}
              </h2>
              <p className="mt-1 text-blue-100 text-sm">
                Đúng {correctCount}/{totalQ} câu • Tỷ lệ chính xác toàn bài: {Math.round((correctCount / totalQ) * 100)}%
              </p>
            </div>

            <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 min-w-[200px] text-center">
              <span className="text-xs text-blue-200 uppercase font-semibold">Tổng điểm V-ACT</span>
              <span className="text-4xl sm:text-5xl font-black mt-1 text-white tracking-tight">
                {totalCalculatedScore}
              </span>
              <span className="text-xs text-blue-200 mt-1">Thang điểm chuẩn 1.200</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20 flex flex-wrap gap-3">
            <button
              onClick={() => handleStartExam(selectedExamId, filterSection)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-sm shadow-md hover:bg-blue-50 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Làm lại bài thi này
            </button>
            <button
              onClick={() => setExamState('list')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm transition-colors"
            >
              Chọn đề khác
            </button>
          </div>
        </div>

        {/* 4 Official Subsections Breakdown (Each 300 Max Points) */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm mb-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-blue-600" />
            Chi tiết 4 Hợp Phần Thi (Mỗi hợp phần 300 điểm = 1.200 điểm)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(officialScores).map(([key, item]) => (
              <div key={key} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-sm text-slate-800 dark:text-slate-200">{item.name}</span>
                  <span className="font-bold text-sm text-blue-600 dark:text-blue-400">
                    {item.score} / {item.max} điểm
                  </span>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mb-2">
                  <span>Đúng {item.correct}/{item.total} câu</span>
                  <span>{item.percentage}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      item.percentage >= 80 ? 'bg-emerald-500' : item.percentage >= 60 ? 'bg-blue-500' : item.percentage >= 40 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Review of All Questions */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Chi tiết lời giải và đáp án từng câu
          </h3>

          {currentQuestions.map((q, idx) => {
            const userChoice = answers[q.id];
            const isCorrect = userChoice === q.correctAnswer;
            const isSaved = savedMistakeIds.includes(q.id);

            return (
              <div 
                key={q.id}
                className={`bg-white dark:bg-slate-900 rounded-2xl border p-6 transition-all shadow-sm ${
                  isCorrect 
                    ? 'border-emerald-200 dark:border-emerald-900/60' 
                    : 'border-rose-200 dark:border-rose-900/60'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      Câu {idx + 1}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {q.sectionName}
                    </span>
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" /> Chính xác
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs font-bold text-rose-600 dark:text-rose-400">
                        <XCircle className="w-4 h-4" /> Chưa đúng
                      </span>
                    )}
                  </div>

                  {/* Bookmark mistake button */}
                  <button
                    onClick={() => onSaveMistake(q)}
                    className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors ${
                      isSaved 
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-amber-600'
                    }`}
                  >
                    {isSaved ? <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" /> : <Bookmark className="w-3.5 h-3.5" />}
                    {isSaved ? 'Đã lưu sổ tay' : 'Lưu vào sổ tay'}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {q.options.map((opt, oIdx) => {
                    const isUserPick = userChoice === oIdx;
                    const isRightAnswer = q.correctAnswer === oIdx;

                    let optClass = 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300';
                    if (isRightAnswer) {
                      optClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                    } else if (isUserPick && !isRightAnswer) {
                      optClass = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-semibold ring-1 ring-rose-500';
                    }

                    return (
                      <div key={oIdx} className={`p-3 rounded-xl border text-sm flex items-center justify-between ${optClass}`}>
                        <span>{opt}</span>
                        {isRightAnswer && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                        {isUserPick && !isRightAnswer && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                      </div>
                    );
                  })}
                </div>

                {/* Detailed explanation */}
                <div className="p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/40 text-sm">
                  <div className="font-bold text-blue-900 dark:text-blue-200 mb-1 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Giải thích chi tiết:
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
