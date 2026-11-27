import React, { useState, useEffect, useMemo } from 'react';
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
  X,
  TrendingUp,
  Target,
  GraduationCap,
  AlertTriangle,
  Zap,
  Sparkles,
  Shuffle
} from 'lucide-react';
import { EXAM_LIST, QUESTIONS_DATA } from '../data/examData';
import { KSCL_BANK_DATA } from '../data/ksclBankData';
import confetti from 'canvas-confetti';
import MathRenderer from './MathRenderer';
import { calculateVactIrtScore } from '../utils/vactIrtScoring';
import { generateRandomExam } from '../utils/randomExamGenerator';
import { 
  HelloKittyBow, 
  HelloKittyAvatar, 
  HelloKittyCardHeader, 
  StrawberrySticker, 
  CuteOptionBadge 
} from './HelloKittyDecor';
import { 
  playSwitchSound,
  playCreamySwitch, 
  playBubblePop, 
  playKittySparkle, 
  playKittyFanfare 
} from '../utils/creamyAudio';

/**
 * Isolated Question Card Component (Memoized to prevent per-second timer re-renders)
 */
const QuestionCard = React.memo(function QuestionCard({
  currentQ,
  currentIndex,
  totalQ,
  selectedOption,
  theme,
  slideDirection,
  touchHandlers,
  onSelectOption
}) {
  return (
    <div 
      {...touchHandlers}
      className={`vact-card border vact-border rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-sm transition-transform duration-200 ease-out transform-gpu-smooth select-none ${
        slideDirection === 'left' 
          ? '-translate-x-3 opacity-90' 
          : slideDirection === 'right' 
            ? 'translate-x-3 opacity-90' 
            : 'translate-x-0 opacity-100'
      }`}
      style={{ touchAction: 'pan-y' }}
    >
      {/* Question Header with Hello Kitty decoration */}
      <div className="flex items-center justify-between mb-3.5 pb-2 border-b vact-border">
        <div className="flex items-center gap-2">
          {theme === 'hello-kitty' && (
            <HelloKittyBow size={22} className="inline-block animate-bounce-subtle" />
          )}
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Câu hỏi {currentIndex + 1} / {totalQ}
          </span>
        </div>
        {theme === 'hello-kitty' && (
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#5c3845] bg-[#FDF0F3] px-3 py-1 rounded-full border border-[#F6BBC4]">
            <StrawberrySticker size={15} />
            <span>Tự tin lên nhé bé! ✨</span>
          </div>
        )}
      </div>

      {/* [NGỮ LIỆU / ĐỀ BÀI CHUNG] - Đóng khung rõ ràng theo chuẩn khảo thí V-ACT */}
      {currentQ.passage && (
        <div className="mb-4 sm:mb-6 p-4 sm:p-5 rounded-2xl border-2 border-blue-500/40 bg-blue-50/30 dark:bg-blue-950/30 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>[NGỮ LIỆU / ĐỀ BÀI CHUNG]</span>
          </div>
          <div className="text-sm sm:text-base leading-relaxed sm:leading-loose font-medium vact-text-primary">
            <MathRenderer content={currentQ.passage} />
          </div>
        </div>
      )}

      {/* Question Text */}
      <div className="text-base sm:text-lg font-black vact-text-primary leading-snug sm:leading-relaxed mb-4 sm:mb-6">
        <MathRenderer content={currentQ.question} />
      </div>

      {/* Options List with 48px min touch target */}
      <div className="space-y-3 sm:space-y-3.5">
        {currentQ.options.map((option, optIdx) => {
          const isSelected = selectedOption === optIdx;
          return (
            <div
              key={optIdx}
              onClick={() => onSelectOption(currentQ.id, optIdx)}
              className={`min-h-[48px] p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all cursor-pointer flex items-start gap-2.5 sm:gap-3 active:scale-[0.98] touch-manipulation ${
                isSelected 
                  ? 'border-2 border-blue-600 bg-blue-50/40 dark:bg-blue-950/40 shadow-xs' 
                  : 'vact-card border vact-border hover:border-blue-400'
              }`}
            >
              {theme === 'hello-kitty' ? (
                <CuteOptionBadge letter={String.fromCharCode(65 + optIdx)} isSelected={isSelected} />
              ) : (
                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl font-black text-xs flex items-center justify-center shrink-0 transition-all ${
                  isSelected 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'vact-card-subtle vact-text-secondary border vact-border'
                }`}>
                  {String.fromCharCode(65 + optIdx)}
                </div>
              )}
              <div className={`text-sm sm:text-base leading-snug sm:leading-relaxed font-semibold flex-1 ${
                isSelected ? 'text-blue-700 dark:text-blue-300' : 'vact-text-primary'
              }`}>
                <MathRenderer content={typeof option === 'string' ? option.replace(/^[A-D]\.\s*/, '') : option} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default function ExamView({ onSaveMistake, savedMistakeIds = [], fontSize = 'normal', theme = 'light' }) {
  const [selectedExamId, setSelectedExamId] = useState(null);
  const selectedExam = useMemo(() => EXAM_LIST.find(e => e.id === selectedExamId), [selectedExamId]);
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
  } else if (filterCategory === 'latest') {
    filteredExams = EXAM_LIST.filter(e => e.category === 'latest' || e.category === 'empire' || e.category === 'vnno1');
  } else if (filterCategory === 'bank') {
    filteredExams = EXAM_LIST.filter(e => e.category === 'bank');
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

  // Touch swipe states for silky-smooth mobile gesture transitions
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0, time: 0 });
  const [slideDirection, setSlideDirection] = useState('none');

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY, time: Date.now() });
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.time) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStart.x;
    const dy = touch.clientY - touchStart.y;
    const dt = Date.now() - touchStart.time;

    // Detect intentional horizontal swipe: |dx| > 45px, |dx| > |dy| * 1.3, within 500ms
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3 && dt < 500) {
      if (dx < 0 && currentIndex < currentQuestions.length - 1) {
        // Swipe Left -> Next Question
        setSlideDirection('left');
        requestAnimationFrame(() => {
          playSwitchSound(1.0);
          setCurrentIndex(prev => Math.min(currentQuestions.length - 1, prev + 1));
          setTimeout(() => setSlideDirection('none'), 180);
        });
      } else if (dx > 0 && currentIndex > 0) {
        // Swipe Right -> Previous Question
        setSlideDirection('right');
        requestAnimationFrame(() => {
          playSwitchSound(1.0);
          setCurrentIndex(prev => Math.max(0, prev - 1));
          setTimeout(() => setSlideDirection('none'), 180);
        });
      }
    }
    setTouchStart({ x: 0, y: 0, time: 0 });
  };

  const handleStartRandomExam = (sectionOnly = 'all') => {
    playKittySparkle();
    const combinedBank = { ...QUESTIONS_DATA, ...KSCL_BANK_DATA };
    const generated = generateRandomExam(combinedBank, { sectionOnly });
    setSelectedExamId(generated.id);
    setFilterSection(sectionOnly);
    setCurrentQuestions(generated.questions);
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});

    const duration = sectionOnly === 'all' ? 150 * 60 : 40 * 60;
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
    playBubblePop(optionIdx + 1);
    setAnswers(prev => ({
      ...prev,
      [qId]: optionIdx
    }));
  };

  const toggleFlag = (qId) => {
    playKittySparkle();
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
    playKittyFanfare();
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: theme === 'hello-kitty' ? ['#F62E70', '#F98EAA', '#F6BBC4', '#FACCD7', '#FFD54F', '#FFFFFF'] : undefined
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

  // Calculate Authentic V-ACT IRT Score & Diagnostics
  const irtResult = useMemo(() => {
    if (!currentQuestions || currentQuestions.length === 0) return null;
    return calculateVactIrtScore(currentQuestions, answers);
  }, [currentQuestions, answers]);

  const totalCalculatedScore = irtResult ? irtResult.finalIrtScore : 0;
  const officialScores = irtResult ? irtResult.subScores : {
    vietnamese: { name: 'Sử dụng Tiếng Việt', score: 0, correct: 0, total: 30, percentage: 0 },
    english: { name: 'Sử dụng Tiếng Anh', score: 0, correct: 0, total: 30, percentage: 0 },
    math: { name: 'Toán học & Định lượng', score: 0, correct: 0, total: 30, percentage: 0 },
    science: { name: 'Tư duy khoa học & Logic', score: 0, correct: 0, total: 30, percentage: 0 }
  };

  const targetSchoolsList = useMemo(() => {
    const score = totalCalculatedScore || 0;
    return [
      { school: 'Trường ĐH Bách Khoa (HCMUT)', code: 'QSB', benchmark: '850 - 980đ', status: score >= 880 ? 'Rất cao' : score >= 800 ? 'Khả quan' : score >= 700 ? 'Cạnh tranh' : 'Cần nỗ lực', chance: Math.min(99, Math.max(12, Math.round((score / 980) * 100))) },
      { school: 'Trường ĐH Khoa học Tự nhiên (HCMUS)', code: 'QST', benchmark: '780 - 920đ', status: score >= 800 ? 'Rất cao' : score >= 720 ? 'Khả quan' : score >= 650 ? 'Cạnh tranh' : 'Cần nỗ lực', chance: Math.min(99, Math.max(15, Math.round((score / 920) * 100))) },
      { school: 'Trường ĐH Công nghệ Thông tin (UIT)', code: 'QSC', benchmark: '820 - 950đ', status: score >= 850 ? 'Rất cao' : score >= 760 ? 'Khả quan' : score >= 680 ? 'Cạnh tranh' : 'Cần nỗ lực', chance: Math.min(99, Math.max(14, Math.round((score / 950) * 100))) },
      { school: 'Trường ĐH Kinh tế - Luật (UEL)', code: 'QSK', benchmark: '800 - 930đ', status: score >= 820 ? 'Rất cao' : score >= 740 ? 'Khả quan' : score >= 670 ? 'Cạnh tranh' : 'Cần nỗ lực', chance: Math.min(99, Math.max(16, Math.round((score / 930) * 100))) },
      { school: 'Trường ĐH KHXH & Nhân văn (USSH)', code: 'QSX', benchmark: '720 - 860đ', status: score >= 750 ? 'Rất cao' : score >= 680 ? 'Khả quan' : score >= 600 ? 'Cạnh tranh' : 'Cần nỗ lực', chance: Math.min(99, Math.max(20, Math.round((score / 860) * 100))) },
      { school: 'Trường ĐH Quốc Tế (IU)', code: 'QSI', benchmark: '700 - 840đ', status: score >= 720 ? 'Rất cao' : score >= 650 ? 'Khả quan' : score >= 580 ? 'Cạnh tranh' : 'Cần nỗ lực', chance: Math.min(99, Math.max(22, Math.round((score / 840) * 100))) }
    ];
  }, [totalCalculatedScore]);

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

        {/* Dynamic Random Exam Generator Card (Cluster-Preserving Algorithm) */}
        <div className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-2 border-blue-500/40 bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-purple-50/40 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-purple-950/30 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black bg-blue-600 text-white shadow-2xs">
                <Shuffle className="w-3 h-3 animate-spin" />
                Ngân Hàng 4.080 Câu Hỏi • Trộn Chuẩn Khảo Thí V-ACT
              </div>
              <h2 className="text-base sm:text-xl font-black vact-text-primary">
                Tạo Đề Thi Ngẫu Nhiên (Bảo Toàn Trọn Vẹn Cụm Ngữ Liệu)
              </h2>
              <p className="text-xs sm:text-sm vact-text-secondary max-w-2xl leading-relaxed">
                Hệ thống tự động bốc ngẫu nhiên câu hỏi theo đúng tỷ lệ 4 phần (30 câu/phần). Các câu hỏi thuộc cùng một bài đọc, bảng số liệu hoặc đồ thị dùng chung được giữ nguyên khối, không bị xé lẻ hay xáo trộn thứ tự logic.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto shrink-0">
              <button
                onClick={() => handleStartRandomExam('all')}
                className="min-h-[44px] flex items-center justify-center gap-2 px-5 py-3 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] text-white shadow-md shadow-blue-500/25 transition-all cursor-pointer touch-manipulation"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Tạo Đề 120 Câu (150p)</span>
              </button>
            </div>
          </div>

          {/* Quick Sub-test practice buttons with >=44px tap target */}
          <div className="mt-3 pt-3 border-t vact-border/60 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-black vact-text-muted">Hoặc tạo ngẫu nhiên 30 câu theo hợp phần:</span>
            <button
              onClick={() => handleStartRandomExam('vietnamese')}
              className="min-h-[44px] px-3 py-1.5 rounded-xl vact-card border vact-border hover:border-blue-400 vact-text-primary text-xs font-bold transition-all cursor-pointer touch-manipulation active:scale-[0.98]"
            >
              Tiếng Việt (30 câu)
            </button>
            <button
              onClick={() => handleStartRandomExam('english')}
              className="min-h-[44px] px-3 py-1.5 rounded-xl vact-card border vact-border hover:border-blue-400 vact-text-primary text-xs font-bold transition-all cursor-pointer touch-manipulation active:scale-[0.98]"
            >
              Tiếng Anh (30 câu)
            </button>
            <button
              onClick={() => handleStartRandomExam('math')}
              className="min-h-[44px] px-3 py-1.5 rounded-xl vact-card border vact-border hover:border-blue-400 vact-text-primary text-xs font-bold transition-all cursor-pointer touch-manipulation active:scale-[0.98]"
            >
              Toán học (30 câu)
            </button>
            <button
              onClick={() => handleStartRandomExam('science_all')}
              className="min-h-[44px] px-3 py-1.5 rounded-xl vact-card border vact-border hover:border-blue-400 vact-text-primary text-xs font-bold transition-all cursor-pointer touch-manipulation active:scale-[0.98]"
            >
              Tư duy KH (30 câu)
            </button>
          </div>
        </div>

        {/* Category Filters Bar - Smooth touch scroll */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-3 mb-6 ios-scroll no-scrollbar -mx-1 px-1">
          <span className="text-[11px] sm:text-xs font-black vact-text-muted flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" /> Lọc:
          </span>
          {[
            { id: 'all', label: `Tất cả (${EXAM_LIST.length} đề)` },
            { id: 'latest', label: '⭐ Đề Mới (Empire & VnNO1)' },
            { id: 'bank', label: '🔥 Tuyển Chọn Bộ 200 Đề' },
            { id: 'official', label: 'Đề Mẫu ĐHQG-HCM' },
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

                <h3 className="text-base sm:text-xl font-black vact-text-primary mb-1.5 sm:mb-2 leading-snug flex items-center gap-1.5">
                  {theme === 'hello-kitty' && <HelloKittyBow size={20} className="inline-block shrink-0" />}
                  <span>{exam.title}</span>
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
                  {theme === 'hello-kitty' ? (
                    <>
                      <HelloKittyBow size={18} color="#fff" centerColor="#FACCD7" />
                      <span>Bắt đầu làm bài cùng bé yêu (150p) 💖</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>Bắt đầu thi thử toàn phần (150p)</span>
                    </>
                  )}
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
        {/* Hello Kitty Cute Study Header Banner */}
        {theme === 'hello-kitty' && (
          <HelloKittyCardHeader 
            title={selectedExam?.title || 'BÀI THI CHUẨN HÓA V-ACT'} 
            subtitle="Chúc bé yêu làm bài thật tốt! Tự tin 950+ nha 💖" 
          />
        )}

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
          {/* Question Stem & Options (Memoized for silky-smooth performance & 0 timer re-renders) */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-6">
            <QuestionCard
              currentQ={currentQ}
              currentIndex={currentIndex}
              totalQ={totalQ}
              selectedOption={answers[currentQ.id]}
              theme={theme}
              slideDirection={slideDirection}
              touchHandlers={{
                onTouchStart: handleTouchStart,
                onTouchEnd: handleTouchEnd
              }}
              onSelectOption={handleSelectOption}
            />

            {/* Bottom Question Switcher */}
            <div className="flex items-center justify-between gap-2">
              <button
                disabled={currentIndex === 0}
                onClick={() => {
                  playSwitchSound(1.0);
                  setCurrentIndex(prev => Math.max(0, prev - 1));
                }}
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
                onClick={() => {
                  playSwitchSound(1.0);
                  setCurrentIndex(prev => Math.min(totalQ - 1, prev + 1));
                }}
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
                <span className="flex items-center gap-1.5">
                  {theme === 'hello-kitty' && <HelloKittyBow size={16} />}
                  Mục lục câu hỏi
                </span>
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
                      onClick={() => {
                        playSwitchSound(1.0);
                        setCurrentIndex(idx);
                      }}
                      className={`h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${btnClass}`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t vact-border space-y-2 text-[11px] font-bold vact-text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-md bg-blue-600 flex items-center justify-center text-[9px] text-white">
                    {theme === 'hello-kitty' ? '💖' : ''}
                  </div>
                  <span>Đã trả lời ({answeredCount})</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-md bg-amber-400 border border-amber-500 flex items-center justify-center text-[9px]">
                    {theme === 'hello-kitty' ? '🎀' : ''}
                  </div>
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
                        playSwitchSound(1.0);
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
        {/* Hello Kitty Sweet Girlfriend Celebration Card */}
        {theme === 'hello-kitty' && (
          <div className="mb-6 p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-[#FDF0F3] via-[#FBFDFB] to-[#FDF0F3] border-2 border-[#F6BBC4] shadow-md text-center relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-2.5">
              <HelloKittyAvatar size={52} className="animate-bounce-subtle" />
              <div className="text-center sm:text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F62E70] bg-[#FACCD7] px-3 py-0.5 rounded-full border border-[#F98EAA] inline-flex items-center gap-1 shadow-2xs">
                  💖 Dành Tặng Riêng Cho Bé Yêu 🎀
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#331b24] mt-1">
                  Bé yêu đã hoàn thành bài thi xuất sắc quá! 🎉
                </h3>
              </div>
              <HelloKittyBow size={36} className="hidden sm:inline-block" />
            </div>
            <p className="text-xs sm:text-sm text-[#5c3845] font-medium max-w-xl mx-auto leading-relaxed">
              Dù điểm số thế nào thì trong mắt anh, bé luôn là cô gái chăm chỉ, thông minh và tuyệt vời nhất trần đời! 
              Nghỉ ngơi chút xíu rồi cùng đi ăn món ngon bé thích nhé! 🌸✨
            </p>
          </div>
        )}

        {/* IRT Psychometric Result Dashboard */}
        <div className="vact-card border vact-border rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-sm mb-6 sm:mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-black bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 mb-3 sm:mb-4 border border-blue-300 dark:border-blue-800">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
            Báo Cáo Năng Lực Chuẩn Hóa IRT (3-Parameter Logistic Model) • Thang Điểm 1.200
          </div>

          <h2 className="text-3xl sm:text-6xl font-black vact-text-primary tracking-tight mb-3 flex items-center justify-center gap-2">
            {theme === 'hello-kitty' && <HelloKittyBow size={32} className="hidden sm:inline-block" />}
            <span>{totalCalculatedScore}</span>
            <span className="text-lg sm:text-2xl vact-text-muted font-bold">/ 1.200đ</span>
          </h2>

          {/* IRT Psychometric Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-indigo-100 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-200 border border-indigo-300 dark:border-indigo-800">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              {irtResult ? `Top ${Math.max(1, 100 - Math.round(irtResult.percentileRank))}% Toàn Quốc` : 'Top 15% Toàn Quốc'}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-purple-100 text-purple-900 dark:bg-purple-950 dark:text-purple-200 border border-purple-300 dark:border-purple-800">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              Năng lực tiềm ẩn θ = {irtResult?.theta !== undefined ? (irtResult.theta > 0 ? '+' : '') + irtResult.theta : '0.00'}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800">
              <Target className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              {irtResult?.admissionProspect?.tier || 'Năng lực Tốt'}
            </span>
          </div>
          
          <p className="text-xs sm:text-base vact-text-secondary font-medium max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Bạn đã làm đúng <strong>{correctCount} / {totalQ}</strong> câu hỏi ({Math.round((correctCount / totalQ) * 100)}%).
            {totalCalculatedScore >= 950 ? ' Xuất sắc đỉnh cao! Điểm số thuộc nhóm Top 2% thí sinh có thực lực cao nhất, sẵn sàng cạnh tranh vào các ngành tinh hoa và học bổng ĐHQG TP.HCM.' :
             totalCalculatedScore >= 850 ? ' Rất tốt! Năng lực vượt trội đạt ngưỡng an toàn trúng tuyển các ngành Khoa học Máy tính, AI, Kinh tế đối ngoại, Y Dược.' :
             totalCalculatedScore >= 700 ? ' Khá tốt! Đạt ngưỡng điểm chuẩn của đa số các chương trình đào tạo chuẩn tại ĐHQG TP.HCM. Cần trau dồi thêm câu phân hóa để vươn tới 850+.' :
             ' Cần rèn luyện thêm kỹ năng xử lý câu hỏi tư duy logic và toán thực tế để bứt phá mục tiêu điểm số.'}
          </p>

          {/* 4 Official Sub-Score Cards - 2 cols on mobile, 4 cols on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
            {Object.keys(officialScores).map(key => {
              const item = officialScores[key];
              return (
                <div key={key} className="p-3 sm:p-4 rounded-xl sm:rounded-2xl vact-card-subtle border vact-border text-left flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] sm:text-xs font-black vact-text-muted mb-0.5 truncate">{item.name}</div>
                    <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-400">
                      {item.score} <span className="text-[10px] sm:text-xs font-bold vact-text-muted">/ 300đ</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mb-1.5">
                      <div 
                        className="bg-blue-600 dark:bg-blue-400 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${Math.min(100, Math.round((item.score / 300) * 100))}%` }}
                      />
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold vact-text-secondary flex justify-between">
                      <span>Đúng {item.correct}/{item.total}</span>
                      <span>{item.percentage}%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4 Cognitive Taxonomy Levels */}
          {irtResult?.cognitiveStats && (
            <div className="mb-6 sm:mb-8 text-left border-t border-b vact-border py-5">
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider vact-text-muted mb-3 flex items-center gap-1.5">
                <BarChart2 className="w-4 h-4 text-blue-600" />
                Phân Tích 4 Cấp Độ Tư Duy Khảo Thí (Cognitive Taxonomy)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {Object.keys(irtResult.cognitiveStats).map(cogKey => {
                  const cog = irtResult.cognitiveStats[cogKey];
                  const pct = cog.total > 0 ? Math.round((cog.correct / cog.total) * 100) : 0;
                  return (
                    <div key={cogKey} className="p-3 rounded-xl vact-card-subtle border vact-border">
                      <div className="text-[11px] font-black vact-text-primary mb-1 truncate">{cog.name}</div>
                      <div className="text-lg font-black text-blue-600 dark:text-blue-400 mb-1">{pct}%</div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mb-1">
                        <div 
                          className={`h-full rounded-full ${
                            pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-blue-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <div className="text-[10px] font-bold vact-text-muted">Đúng {cog.correct}/{cog.total} câu</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Strategic Performance Insights: Missed Easy vs Mastered Hard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 text-left">
            {/* Missed Easy Questions */}
            <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-black text-xs sm:text-sm mb-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                Cảnh Báo Mất Điểm Đáng Tiếc ({irtResult?.missedEasyQuestions?.length || 0} câu)
              </div>
              <p className="text-[11px] sm:text-xs text-amber-800 dark:text-amber-300 font-medium leading-relaxed">
                {irtResult?.missedEasyQuestions && irtResult.missedEasyQuestions.length > 0 ? (
                  <>
                    Bạn đã để mất điểm ở các câu hỏi mức độ Nhận biết/Thông hiểu nền tảng: {
                      irtResult.missedEasyQuestions.slice(0, 5).map(m => `Câu ${m.num} (${m.section})`).join(', ')
                    }{irtResult.missedEasyQuestions.length > 5 ? '...' : ''}. Hãy xem lại kỹ năng làm bài để tránh sai ngu!
                  </>
                ) : (
                  'Xuất sắc! Bạn không để mất điểm ở bất kỳ câu hỏi nhận biết cơ bản nào.'
                )}
              </p>
            </div>

            {/* Mastered Hard Questions */}
            <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-300 dark:border-indigo-800">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-black text-xs sm:text-sm mb-2">
                <Zap className="w-4 h-4 shrink-0" />
                Thế Mạnh Phân Hóa Đỉnh Cao ({irtResult?.masteredHardQuestions?.length || 0} câu)
              </div>
              <p className="text-[11px] sm:text-xs text-indigo-800 dark:text-indigo-300 font-medium leading-relaxed">
                {irtResult?.masteredHardQuestions && irtResult.masteredHardQuestions.length > 0 ? (
                  <>
                    Đạt đẳng cấp phân loại cao ở các câu vận dụng cao: {
                      irtResult.masteredHardQuestions.slice(0, 5).map(m => `Câu ${m.num}`).join(', ')
                    }{irtResult.masteredHardQuestions.length > 5 ? '...' : ''}. Đây là chìa khóa then chốt giúp bạn bứt phá vào nhóm dẫn đầu.
                  </>
                ) : (
                  'Rèn luyện thêm các dạng bài toán thực tế và logic ma trận nâng cao để nâng điểm phân hóa 900+.'
                )}
              </p>
            </div>
          </div>

          {/* University Admission Prospects for VNU-HCM */}
          <div className="mb-6 sm:mb-8 text-left">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider vact-text-muted mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              Dự Báo Cơ Hội Trúng Tuyển Các Trường Thành Viên ĐHQG TP.HCM
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
              {targetSchoolsList.map((adm, aIdx) => (
                <div key={aIdx} className="p-3.5 rounded-2xl vact-card-subtle border vact-border flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-black text-xs sm:text-sm vact-text-primary">{adm.school}</span>
                      <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                        {adm.code}
                      </span>
                    </div>
                    <div className="text-[11px] vact-text-muted font-medium mb-2">
                      Điểm chuẩn tham chiếu: <strong className="vact-text-secondary">{adm.benchmark}</strong>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t vact-border">
                    <span className="text-[11px] font-bold vact-text-secondary">Khả năng:</span>
                    <span className={`text-[11px] font-black px-2 py-0.5 rounded-full ${
                      adm.status === 'Rất cao' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
                      adm.status === 'Khả quan' ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' :
                      adm.status === 'Cạnh tranh' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' :
                      'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400'
                    }`}>
                      {adm.status} ({adm.chance}%)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2">
            <button
              onClick={() => handleStartExam(selectedExamId, filterSection)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer active:scale-[0.98]"
            >
              <RotateCcw className="w-4 h-4" />
              Làm lại đề thi này
            </button>

            <button
              onClick={() => setExamState('list')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm vact-card border vact-border vact-text-primary hover:border-blue-500 transition-all cursor-pointer shadow-xs active:scale-[0.98]"
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
                  <div className="mb-3 sm:mb-4 p-4 rounded-2xl border-2 border-blue-500/30 bg-blue-50/20 dark:bg-blue-950/20 text-sm sm:text-base leading-relaxed sm:leading-loose font-medium vact-text-primary">
                    <div className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>[NGỮ LIỆU / ĐỀ BÀI CHUNG]</span>
                    </div>
                    <MathRenderer content={q.passage} />
                  </div>
                )}

                <div className="font-black text-base sm:text-lg vact-text-primary mb-3 sm:mb-4 leading-snug sm:leading-relaxed">
                  <MathRenderer content={q.question} />
                </div>

                {/* Options grid */}
                <div className="space-y-2.5 sm:space-y-3 mb-3 sm:mb-4">
                  {q.options.map((opt, oIdx) => {
                    const isRight = oIdx === q.correctAnswer;
                    const isPicked = oIdx === userAns;

                    let optClass = 'vact-card-subtle border vact-border vact-text-secondary';
                    if (isRight) optClass = 'bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                    else if (isPicked && !isRight) optClass = 'bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-500 text-rose-800 dark:text-rose-200 font-bold';

                    return (
                      <div key={oIdx} className={`p-3 sm:p-3.5 rounded-xl border text-sm sm:text-base flex items-center justify-between gap-2.5 ${optClass}`}>
                        <div className="flex-1 font-semibold leading-snug sm:leading-relaxed">
                          <MathRenderer content={typeof opt === 'string' ? opt.replace(/^[A-D]\.\s*/, '') : opt} />
                        </div>
                        {isRight && <span className="text-[10px] sm:text-xs font-black text-emerald-600 dark:text-emerald-400 shrink-0">Đáp án đúng</span>}
                        {isPicked && !isRight && <span className="text-[10px] sm:text-xs font-black text-rose-600 dark:text-rose-400 shrink-0">Bạn đã chọn</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl vact-card-subtle border vact-border text-xs sm:text-sm leading-relaxed">
                  <div className="font-black text-blue-600 dark:text-blue-400 mb-1">Phương pháp & Giải thích:</div>
                  <div className="vact-text-primary font-medium">
                    <MathRenderer content={q.explanation} />
                  </div>
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
