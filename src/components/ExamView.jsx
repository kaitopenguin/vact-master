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
  Cpu,
  Filter,
  ArrowRight,
  ListOrdered,
  X
} from 'lucide-react';
import { EXAM_LIST, QUESTIONS_DATA } from '../data/examData';
import confetti from 'canvas-confetti';

export default function ExamView({ onSaveMistake, savedMistakeIds = [], fontSize = 'normal' }) {
  const [selectedExamId, setSelectedExamId] = useState(null);
  const [examState, setExamState] = useState('list'); // 'list' | 'taking' | 'result'
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterSection, setFilterSection] = useState('all'); // 'all' or section id
  
  // Quiz running states
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionId]: optionIndex }
  const [flagged, setFlagged] = useState({}); // { [questionId]: boolean }
  const [timeLeft, setTimeLeft] = useState(150 * 60); // 150 mins
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState(false);

  // Filter exams by category
  let filteredExams = EXAM_LIST;
  if (filterCategory === 'official') {
    filteredExams = EXAM_LIST.filter(e => e.category === 'official');
  } else if (filterCategory === 'vnno1') {
    filteredExams = EXAM_LIST.filter(e => e.category === 'vnno1');
  } else if (filterCategory === 'moon') {
    filteredExams = EXAM_LIST.filter(e => e.category === 'moon');
  } else if (filterCategory === 'moon_1_10') {
    filteredExams = EXAM_LIST.filter(e => {
      const match = e.id.match(/vact-moon-de-(\d+)/);
      return match && parseInt(match[1]) <= 10;
    });
  } else if (filterCategory === 'moon_11_25') {
    filteredExams = EXAM_LIST.filter(e => {
      const match = e.id.match(/vact-moon-de-(\d+)/);
      return match && parseInt(match[1]) > 10;
    });
  }

  // Start exam
  const handleStartExam = (examId, sectionOnly = 'all') => {
    const rawQuestions = QUESTIONS_DATA[examId] || QUESTIONS_DATA['vact-official-2025'];
    let filtered = rawQuestions;
    if (sectionOnly !== 'all') {
      if (sectionOnly === 'science_all') {
        filtered = rawQuestions.filter(q => q.section === 'logic_data' || q.section === 'science_reasoning');
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
    const duration = sectionOnly === 'all' ? 150 * 60 : Math.max(15 * 60, filtered.length * 75);
    setTimeLeft(duration);
    setIsTimerRunning(true);
    setExamState('taking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    setIsMobilePaletteOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // Calculate 4 Official Sub-Scores
  const calculateOfficialScores = () => {
    const counts = {
      vietnamese: { total: 0, correct: 0, name: 'Hợp phần Tiếng Việt', max: 300 },
      english: { total: 0, correct: 0, name: 'Hợp phần Tiếng Anh', max: 300 },
      math: { total: 0, correct: 0, name: 'Hợp phần Toán học', max: 300 },
      science: { total: 0, correct: 0, name: 'Hợp phần Tư duy khoa học (Logic, Số liệu & KH)', max: 300 },
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

  // =========================================================================
  // VIEW 1: Exam List Dashboard
  // =========================================================================
  if (examState === 'list') {
    return (
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
        {/* Header Banner */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-black bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 mb-2.5 sm:mb-3 border border-blue-300 dark:border-blue-800">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            Cấu trúc bài thi V-ACT ĐHQG TP.HCM chuẩn GDPT 2018 (1.200 điểm)
          </div>
          <h1 className="text-xl sm:text-3xl md:text-4xl font-black vact-text-primary tracking-tight">
            Kho Đề Thi Thử V-ACT Trực Tuyến
          </h1>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-base vact-text-secondary max-w-4xl leading-relaxed">
            Hệ thống gồm <strong>120 câu hỏi trắc nghiệm</strong> làm trong <strong>150 phút</strong>, tính điểm chuẩn <strong>1.200 điểm (Mô hình IRT)</strong> chia làm 4 hợp phần x 300 điểm. Không trừ điểm câu sai.
          </p>
        </div>

        {/* Structure Overview Pills - 1 col on mobile, 3 cols on tablet/desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="p-3.5 sm:p-4 rounded-2xl vact-card border vact-border shadow-xs">
            <div className="text-[11px] sm:text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-0.5">
              Phần 1: Ngôn ngữ (600đ)
            </div>
            <div className="font-black text-xs sm:text-sm vact-text-primary">
              Tiếng Việt (300đ) • Tiếng Anh (300đ)
            </div>
            <div className="text-[11px] sm:text-xs vact-text-muted mt-1 leading-relaxed">
              60 câu trắc nghiệm đọc hiểu & sử dụng ngôn ngữ
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl vact-card border vact-border shadow-xs">
            <div className="text-[11px] sm:text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-0.5">
              Phần 2: Toán học (300đ)
            </div>
            <div className="font-black text-xs sm:text-sm vact-text-primary">
              Toán học & Tư duy định lượng
            </div>
            <div className="text-[11px] sm:text-xs vact-text-muted mt-1 leading-relaxed">
              30 câu giải tích, xác suất thống kê & bài toán thực tế
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl vact-card border vact-border shadow-xs">
            <div className="text-[11px] sm:text-xs font-black text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-0.5">
              Phần 3: Tư duy khoa học (300đ)
            </div>
            <div className="font-black text-xs sm:text-sm vact-text-primary">
              Logic / Số liệu (12 câu) • Khoa học (18 câu)
            </div>
            <div className="text-[11px] sm:text-xs vact-text-muted mt-1 leading-relaxed">
              Lập bảng ma trận & suy luận khoa học tình huống
            </div>
          </div>
        </div>

        {/* Category Filters Bar - Smooth touch scroll */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-3 mb-6 ios-scroll no-scrollbar -mx-1 px-1">
          <span className="text-[11px] sm:text-xs font-black vact-text-muted flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" /> Lọc:
          </span>
          {[
            { id: 'all', label: `Tất cả (${EXAM_LIST.length} đề)` },
            { id: 'vnno1', label: '⭐ Đề mới VnNO1' },
            { id: 'official', label: 'Đề mẫu ĐHQG-HCM' },
            { id: 'moon', label: 'Toàn bộ 25 đề Moon.vn' },
            { id: 'moon_1_10', label: 'Đề 01 - 10 (Nền tảng)' },
            { id: 'moon_11_25', label: 'Đề 11 - 25 (Phân hóa 950+)' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                filterCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-xs ring-2 ring-blue-400/40'
                  : 'vact-card vact-text-secondary hover:vact-text-primary border vact-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Exam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredExams.map((exam) => (
            <div 
              key={exam.id}
              className="vact-card rounded-2xl sm:rounded-3xl border vact-border p-4 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                  <span className="text-[10px] sm:text-[11px] font-black px-2.5 sm:px-3 py-1 rounded-full bg-blue-600 text-white shadow-xs">
                    {exam.type}
                  </span>
                  <span className="text-xs font-black vact-text-muted flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    {exam.durationMinutes}p • 1.200đ
                  </span>
                </div>

                <h3 className="text-base sm:text-xl font-black vact-text-primary mb-1.5 sm:mb-2 leading-snug">
                  {exam.title}
                </h3>
                
                <p className="text-xs sm:text-sm vact-text-secondary mb-4 sm:mb-5 leading-relaxed line-clamp-2">
                  {exam.description}
                </p>

                {/* Section breakdown table with high contrast */}
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 vact-card-subtle p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border vact-border">
                  {exam.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center text-xs py-0.5 sm:py-1 border-b vact-border last:border-b-0">
                      <span className="vact-text-primary font-bold text-[11px] sm:text-xs">{sec.name}</span>
                      <span className="font-black text-blue-600 dark:text-blue-400 text-[11px] sm:text-xs">{sec.score} ({sec.count} câu)</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons with 44px min height for iOS */}
              <div className="space-y-2.5 sm:space-y-3">
                <button
                  onClick={() => handleStartExam(exam.id, 'all')}
                  className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Bắt đầu thi thử toàn phần (150p)
                </button>

                <div>
                  <p className="text-[10px] sm:text-[11px] font-black vact-text-muted mb-1.5 sm:mb-2 text-center">Hoặc luyện nhanh từng hợp phần:</p>
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                    <button
                      onClick={() => handleStartExam(exam.id, 'vietnamese')}
                      className="min-h-[40px] py-1.5 px-2 rounded-xl vact-card hover:bg-blue-600 hover:text-white border vact-border vact-text-primary font-bold transition-all text-center shadow-xs cursor-pointer active:scale-[0.98]"
                    >
                      Tiếng Việt (300đ)
                    </button>
                    <button
                      onClick={() => handleStartExam(exam.id, 'english')}
                      className="min-h-[40px] py-1.5 px-2 rounded-xl vact-card hover:bg-blue-600 hover:text-white border vact-border vact-text-primary font-bold transition-all text-center shadow-xs cursor-pointer active:scale-[0.98]"
                    >
                      Tiếng Anh (300đ)
                    </button>
                    <button
                      onClick={() => handleStartExam(exam.id, 'math')}
                      className="min-h-[40px] py-1.5 px-2 rounded-xl vact-card hover:bg-blue-600 hover:text-white border vact-border vact-text-primary font-bold transition-all text-center shadow-xs cursor-pointer active:scale-[0.98]"
                    >
                      Toán học (300đ)
                    </button>
                    <button
                      onClick={() => handleStartExam(exam.id, 'science_all')}
                      className="min-h-[40px] py-1.5 px-2 rounded-xl vact-card hover:bg-blue-600 hover:text-white border vact-border vact-text-primary font-bold transition-all text-center shadow-xs cursor-pointer active:scale-[0.98]"
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

  // =========================================================================
  // VIEW 2: Exam In Progress (Fully Optimized for iPhone & Mobile!)
  // =========================================================================
  if (examState === 'taking' && currentQ) {
    const isFlagged = flagged[currentQ.id];

    return (
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-6">
        {/* Top Sticky Quiz Control Bar for iOS */}
        <div className="vact-card border vact-border rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 shadow-sm sticky top-14 sm:top-24 z-30">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 sm:gap-3">
              <span className="font-black vact-text-primary text-sm sm:text-lg">
                Câu {currentIndex + 1}/{totalQ}
              </span>
              <span className="text-[10px] sm:text-xs font-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 border border-blue-300 dark:border-blue-800 truncate max-w-[140px] sm:max-w-none">
                {currentQ.sectionName}
              </span>
            </div>

            {/* High-Contrast Timer (Yellow / Amber with black bold numbers) */}
            <div className="flex items-center gap-1.5 font-mono font-black text-sm sm:text-lg px-2.5 sm:px-4 py-1 rounded-xl bg-amber-400 text-slate-950 shadow-xs border border-amber-500 shrink-0">
              <Clock className="w-4 h-4 animate-pulse text-slate-950" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-2 mt-2 pt-2 border-t vact-border">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => toggleFlag(currentQ.id)}
                className={`flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  isFlagged 
                    ? 'bg-amber-400 text-slate-950 shadow-xs ring-2 ring-amber-300' 
                    : 'vact-card vact-text-secondary hover:vact-text-primary border vact-border'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-current' : ''}`} />
                <span className="hidden xs:inline">{isFlagged ? 'Đã gắn cờ' : 'Gắn cờ'}</span>
              </button>

              {/* Mobile Question Palette Opener */}
              <button
                onClick={() => setIsMobilePaletteOpen(true)}
                className="lg:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-black vact-card border vact-border vact-text-primary cursor-pointer"
              >
                <ListOrdered className="w-3.5 h-3.5 text-blue-600" />
                <span>Mục lục ({answeredCount}/{totalQ})</span>
              </button>
            </div>

            <button
              onClick={handleSubmitExam}
              className="flex items-center gap-1 px-3 sm:px-4 py-1.5 rounded-xl text-xs font-black bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white shadow-md shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Nộp bài</span>
            </button>
          </div>
        </div>

        {/* Main Question & Answer Container */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Stem & Options */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            <div className="vact-card border vact-border rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm">
              {/* [NGỮ LIỆU / ĐỀ BÀI CHUNG] - Đóng khung rõ ràng theo chuẩn khảo thí V-ACT */}
              {currentQ.passage && (
                <div className="mb-4 sm:mb-6 p-4 sm:p-5 rounded-2xl border-2 border-blue-500/40 bg-blue-50/30 dark:bg-blue-950/30 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                    <BookOpen className="w-4 h-4" />
                    <span>[NGỮ LIỆU / ĐỀ BÀI CHUNG]</span>
                  </div>
                  <div className="text-xs sm:text-base leading-relaxed whitespace-pre-line font-medium vact-text-primary">
                    {currentQ.passage}
                  </div>
                </div>
              )}

              {/* Question Text */}
              <h2 className="text-sm sm:text-lg font-black vact-text-primary leading-relaxed mb-4 sm:mb-6 whitespace-pre-line">
                {currentQ.question}
              </h2>

              {/* Options List */}
              <div className="space-y-2.5 sm:space-y-3">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = answers[currentQ.id] === optIdx;
                  return (
                    <div
                      key={optIdx}
                      onClick={() => handleSelectOption(currentQ.id, optIdx)}
                      className={`min-h-[50px] p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all cursor-pointer flex items-start gap-2.5 sm:gap-3 active:scale-[0.98] ${
                        isSelected 
                          ? 'border-2 border-blue-600 bg-blue-50/40 dark:bg-blue-950/40 shadow-xs' 
                          : 'vact-card border vact-border hover:border-blue-400'
                      }`}
                    >
                      <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl font-black text-xs flex items-center justify-center shrink-0 transition-all ${
                        isSelected 
                          ? 'bg-blue-600 text-white shadow-xs' 
                          : 'vact-card-subtle vact-text-secondary border vact-border'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                      <span className={`text-xs sm:text-base leading-relaxed font-bold ${
                        isSelected ? 'text-blue-700 dark:text-blue-300' : 'vact-text-primary'
                      }`}>
                        {option}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Question Switcher */}
            <div className="flex items-center justify-between gap-2">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-black text-xs vact-card border vact-border vact-text-primary disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs active:scale-[0.98]"
              >
                <ChevronLeft className="w-4 h-4" />
                Câu trước
              </button>

              <span className="text-[11px] sm:text-xs font-black vact-text-muted">
                {answeredCount}/{totalQ} câu
              </span>

              <button
                disabled={currentIndex === totalQ - 1}
                onClick={() => setCurrentIndex(prev => Math.min(totalQ - 1, prev + 1))}
                className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-black text-xs bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs active:scale-[0.98]"
              >
                Câu tiếp
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Question Matrix Palette (Desktop) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="vact-card border vact-border rounded-3xl p-5 shadow-sm sticky top-48">
              <h3 className="font-black text-xs uppercase tracking-wider vact-text-muted mb-3 flex items-center justify-between">
                <span>Mục lục câu hỏi</span>
                <span className="text-blue-600 font-bold">{answeredCount}/{totalQ}</span>
              </h3>

              <div className="grid grid-cols-5 gap-2 max-h-[500px] overflow-y-auto p-1 ios-scroll">
                {currentQuestions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAns = answers[q.id] !== undefined;
                  const isFlag = flagged[q.id];

                  let btnClass = 'vact-card-subtle vact-text-secondary border vact-border';
                  if (isAns) btnClass = 'bg-blue-600 text-white font-black shadow-xs';
                  if (isFlag) btnClass = 'bg-amber-400 text-slate-950 font-black ring-2 ring-amber-300';
                  if (isCurrent) btnClass += ' ring-2 ring-blue-500 font-black scale-105';

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${btnClass}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t vact-border space-y-2 text-[11px] font-bold vact-text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-md bg-blue-600"></div>
                  <span>Đã trả lời ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-md bg-amber-400 border border-amber-500"></div>
                  <span>Đã gắn cờ ({Object.keys(flagged).filter(k => flagged[k]).length})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-md vact-card-subtle border vact-border"></div>
                  <span>Chưa trả lời ({totalQ - answeredCount})</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Up Question Matrix Modal (iOS Sheet Style) */}
        {isMobilePaletteOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end">
            <div className="vact-card rounded-t-3xl border-t vact-border p-4 max-h-[80vh] flex flex-col pb-safe shadow-2xl animate-in slide-in-from-bottom duration-200">
              <div className="flex items-center justify-between pb-3 border-b vact-border mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-black vact-text-primary text-sm sm:text-base">Mục lục câu hỏi</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 font-bold">
                    {answeredCount}/{totalQ} đã làm
                  </span>
                </div>
                <button
                  onClick={() => setIsMobilePaletteOpen(false)}
                  className="w-8 h-8 rounded-full vact-card-subtle border vact-border flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4 vact-text-primary" />
                </button>
              </div>

              <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 overflow-y-auto p-1 flex-1 ios-scroll">
                {currentQuestions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAns = answers[q.id] !== undefined;
                  const isFlag = flagged[q.id];

                  let btnClass = 'vact-card-subtle vact-text-secondary border vact-border';
                  if (isAns) btnClass = 'bg-blue-600 text-white font-black shadow-xs';
                  if (isFlag) btnClass = 'bg-amber-400 text-slate-950 font-black ring-2 ring-amber-300';
                  if (isCurrent) btnClass += ' ring-2 ring-blue-500 font-black scale-105';

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setIsMobilePaletteOpen(false);
                      }}
                      className={`h-10 rounded-xl text-xs font-bold transition-all flex items-center justify-center cursor-pointer active:scale-95 ${btnClass}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 mt-2 border-t vact-border flex items-center justify-around text-[10px] font-bold vact-text-muted">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded bg-blue-600"></div>
                  <span>Đã làm</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded bg-amber-400 border border-amber-500"></div>
                  <span>Gắn cờ</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded vact-card-subtle border vact-border"></div>
                  <span>Chưa làm</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // VIEW 3: Result & Explanations Review
  // =========================================================================
  if (examState === 'result') {
    return (
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
        {/* Score Overview Card */}
        <div className="vact-card border vact-border rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-sm mb-6 sm:mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-black bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 mb-3 sm:mb-4 border border-blue-300 dark:border-blue-800">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            Kết Quả Chuẩn Hóa Theo Mô Hình IRT (Thang Điểm 1.200)
          </div>

          <h2 className="text-3xl sm:text-5xl font-black vact-text-primary tracking-tight mb-2">
            {totalCalculatedScore} <span className="text-lg sm:text-2xl vact-text-muted font-bold">/ 1.200đ</span>
          </h2>
          
          <p className="text-xs sm:text-base vact-text-secondary font-medium max-w-xl mx-auto mb-6 sm:mb-8">
            Bạn đã làm đúng <strong>{correctCount} / {totalQ}</strong> câu hỏi ({Math.round((correctCount / totalQ) * 100)}%).
            {totalCalculatedScore >= 900 ? ' Xuất sắc! Năng lực cạnh tranh vào các trường top đầu ĐHQG TP.HCM rất cao.' :
             totalCalculatedScore >= 750 ? ' Rất tốt! Đạt ngưỡng điểm chuẩn của đa số ngành xét tuyển V-ACT.' :
             ' Cần rèn luyện thêm các chuyên đề để bứt phá mục tiêu 800+ điểm.'}
          </p>

          {/* 4 Official Sub-Score Cards - 2 cols on mobile, 4 cols on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
            {Object.keys(officialScores).map(key => {
              const item = officialScores[key];
              return (
                <div key={key} className="p-3 sm:p-4 rounded-xl sm:rounded-2xl vact-card-subtle border vact-border text-left">
                  <div className="text-[10px] sm:text-xs font-black vact-text-muted mb-0.5 truncate">{item.name}</div>
                  <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">
                    {item.score} <span className="text-[10px] sm:text-xs font-bold vact-text-muted">/ 300đ</span>
                  </div>
                  <div className="mt-1 text-[10px] sm:text-xs font-bold vact-text-secondary">
                    Đúng {item.correct}/{item.total} ({item.percentage}%)
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <button
              onClick={() => handleStartExam(selectedExamId, filterSection)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-black text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer active:scale-[0.98]"
            >
              <RotateCcw className="w-4 h-4" />
              Làm lại đề thi này
            </button>

            <button
              onClick={() => setExamState('list')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-black text-xs sm:text-sm vact-card border vact-border vact-text-primary hover:border-blue-500 transition-all cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <Layers className="w-4 h-4" />
              Chọn đề thi khác
            </button>
          </div>
        </div>

        {/* Detailed Answers Review */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-lg sm:text-2xl font-black vact-text-primary">
            Chi Tiết Lời Giải & Phân Tích Từng Câu
          </h3>

          {currentQuestions.map((q, idx) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            const isSaved = savedMistakeIds.includes(q.id);

            return (
              <div 
                key={q.id}
                className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border vact-card shadow-sm ${
                  isCorrect ? 'border-emerald-500/30' : 'border-rose-500/30'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-black vact-text-primary text-sm sm:text-base">Câu {idx + 1}</span>
                    <span className="text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-full vact-card-subtle border vact-border vact-text-secondary truncate max-w-[150px] sm:max-w-none">
                      {q.sectionName}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {isCorrect ? (
                      <span className="flex items-center gap-1 text-[11px] sm:text-xs font-black text-emerald-600 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Đúng
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] sm:text-xs font-black text-rose-600 bg-rose-100 dark:bg-rose-950 px-2.5 py-1 rounded-full border border-rose-300 dark:border-rose-800">
                        <XCircle className="w-3.5 h-3.5" /> Sai
                      </span>
                    )}

                    {!isCorrect && (
                      <button
                        onClick={() => onSaveMistake(q)}
                        className={`flex items-center gap-1 text-[11px] sm:text-xs font-black px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                          isSaved 
                            ? 'bg-amber-400 text-slate-950 border-amber-500' 
                            : 'vact-card border vact-border vact-text-secondary hover:text-amber-600'
                        }`}
                        title="Lưu vào sổ tay câu sai"
                      >
                        {isSaved ? <BookmarkCheck className="w-3.5 h-3.5" /> : <Bookmark className="w-3.5 h-3.5" />}
                        <span className="hidden xs:inline">{isSaved ? 'Đã lưu' : 'Lưu sai'}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* [NGỮ LIỆU / ĐỀ BÀI CHUNG] Trong phần xem lại bài */}
                {q.passage && (
                  <div className="mb-3 sm:mb-4 p-4 rounded-2xl border-2 border-blue-500/30 bg-blue-50/20 dark:bg-blue-950/20 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-medium vact-text-primary">
                    <div className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>[NGỮ LIỆU / ĐỀ BÀI CHUNG]</span>
                    </div>
                    {q.passage}
                  </div>
                )}

                <h4 className="font-black text-xs sm:text-base vact-text-primary mb-3 sm:mb-4 whitespace-pre-line">
                  {q.question}
                </h4>

                {/* Options grid */}
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {q.options.map((opt, oIdx) => {
                    const isRight = oIdx === q.correctAnswer;
                    const isPicked = oIdx === userAns;

                    let optClass = 'vact-card-subtle border vact-border vact-text-secondary';
                    if (isRight) optClass = 'bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                    else if (isPicked && !isRight) optClass = 'bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-500 text-rose-800 dark:text-rose-200 font-bold';

                    return (
                      <div key={oIdx} className={`p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between ${optClass}`}>
                        <span>{opt}</span>
                        {isRight && <span className="text-[10px] sm:text-xs font-black text-emerald-600 dark:text-emerald-400">Đáp án đúng</span>}
                        {isPicked && !isRight && <span className="text-[10px] sm:text-xs font-black text-rose-600 dark:text-rose-400">Bạn đã chọn</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl vact-card-subtle border vact-border text-xs sm:text-sm leading-relaxed">
                  <div className="font-black text-blue-600 dark:text-blue-400 mb-1">Phương pháp & Giải thích:</div>
                  <div className="vact-text-primary font-medium">{q.explanation}</div>
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
