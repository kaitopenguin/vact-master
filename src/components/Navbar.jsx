import React from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Lightbulb, 
  PlayCircle, 
  Compass, 
  BookmarkCheck, 
  Moon, 
  Sun,
  Coffee,
  ShieldCheck,
  Library
} from 'lucide-react';

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  theme, 
  setTheme, 
  fontSize, 
  setFontSize, 
  mistakeCount, 
  onOpenSecurity 
}) {
  const navItems = [
    { id: 'exam', label: 'Thi thử V-ACT', icon: GraduationCap },
    { id: 'books', label: 'Tủ Sách & Đề PDF', icon: Library, badge: '3 Bộ đề' },
    { id: 'theory', label: 'Kho Lý thuyết', icon: BookOpen },
    { id: 'tips', label: 'Bí kíp & Tips', icon: Lightbulb },
    { id: 'videos', label: 'Video Bài giảng', icon: PlayCircle },
    { id: 'roadmap', label: 'Lộ trình 900+', icon: Compass },
    { 
      id: 'mistakes', 
      label: 'Sổ tay câu sai', 
      icon: BookmarkCheck,
      badge: mistakeCount > 0 ? mistakeCount : null
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 vact-nav border-b vact-border shadow-xs pt-safe">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          {/* Top Header Row: Logo & Accessibility Controls */}
          <div className="flex items-center justify-between py-2 sm:py-2.5 gap-2 border-b vact-border">
            {/* Brand Logo */}
            <div 
              onClick={() => setCurrentTab('exam')} 
              className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none shrink-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                V
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-black text-sm sm:text-lg vact-text-primary tracking-tight">
                    V-ACT <span className="text-blue-600">Master</span>
                  </span>
                  <span className="text-[10px] font-black px-1.5 py-0.2 rounded-full bg-emerald-600 text-white hidden xs:inline-block">
                    Free
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] vact-text-muted font-medium hidden md:block">
                  Luyện thi ĐGNL ĐHQG TP.HCM • Chuẩn GDPT 2018
                </p>
              </div>
            </div>

            {/* Right Accessibility Suite: Clean, Touch-Friendly 44px targets for iOS */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Font Size Scaler */}
              <div className="flex items-center p-0.5 sm:p-1 rounded-xl vact-card-subtle text-xs font-bold gap-0.5 sm:gap-1 border vact-border" title="Chỉnh cỡ chữ chống mỏi mắt cho người cận">
                <span className="text-[10px] uppercase tracking-wider px-1 vact-text-muted hidden lg:inline">Cỡ:</span>
                <button
                  onClick={() => setFontSize('normal')}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all font-bold cursor-pointer ${
                    fontSize === 'normal' 
                      ? 'bg-blue-600 text-white shadow-xs' 
                      : 'vact-text-secondary hover:vact-text-primary'
                  }`}
                  title="Cỡ chữ chuẩn 16px"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all font-bold cursor-pointer ${
                    fontSize === 'large' 
                      ? 'bg-blue-600 text-white shadow-xs' 
                      : 'vact-text-secondary hover:vact-text-primary'
                  }`}
                  title="Cỡ chữ lớn 18px (Dễ đọc)"
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize('xlarge')}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all font-bold cursor-pointer ${
                    fontSize === 'xlarge' 
                      ? 'bg-blue-600 text-white shadow-xs' 
                      : 'vact-text-secondary hover:vact-text-primary'
                  }`}
                  title="Cỡ chữ cực lớn 20px (Chống mỏi mắt)"
                >
                  A++
                </button>
              </div>

              {/* 3-State Eye-Care Mode */}
              <div className="flex items-center p-0.5 sm:p-1 rounded-xl vact-card-subtle gap-0.5 sm:gap-1 border vact-border" title="Chọn chế độ bảo vệ mắt">
                <button
                  onClick={() => setTheme('light')}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                    theme === 'light' 
                      ? 'bg-white text-amber-500 shadow-xs border border-slate-300' 
                      : 'vact-text-muted hover:vact-text-primary'
                  }`}
                  title="Chế độ Sáng chuẩn"
                >
                  <Sun className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setTheme('sepia')}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all font-bold cursor-pointer ${
                    theme === 'sepia' 
                      ? 'bg-[#c2410c] text-white shadow-xs' 
                      : 'vact-text-muted hover:vact-text-primary'
                  }`}
                  title="Chế độ Giấy ấm (Lọc ánh sáng xanh, chống mỏi mắt cho người cận thị)"
                >
                  <Coffee className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setTheme('dark')}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer ${
                    theme === 'dark' 
                      ? 'bg-blue-600 text-white shadow-xs' 
                      : 'vact-text-muted hover:vact-text-primary'
                  }`}
                  title="Chế độ Ban đêm dịu mắt"
                >
                  <Moon className="w-4 h-4" />
                </button>
              </div>

              {/* Security & WAF Status Button */}
              <button
                onClick={onOpenSecurity}
                className="flex items-center gap-1.5 text-xs font-black px-2.5 sm:px-3 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 shadow-xs hover:border-emerald-500 transition-colors cursor-pointer"
                title="Hệ thống tường lửa WAF, chống DDoS & an ninh máy chủ đang hoạt động"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="hidden sm:inline">Tường Lửa: Bật</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs Bar: Smooth momentum scrolling on iOS with touch target */}
          <nav className="flex items-center gap-1.5 overflow-x-auto py-2 sm:py-2.5 ios-scroll no-scrollbar -mx-1 px-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`whitespace-nowrap flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-black transition-all shrink-0 cursor-pointer ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-xs ring-2 ring-blue-400/40' 
                      : 'vact-text-secondary hover:vact-text-primary vact-tab-inactive'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`px-1.5 py-0.2 text-[9px] sm:text-[10px] font-extrabold rounded-full ${
                      isActive 
                        ? 'bg-white text-blue-700' 
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/80 dark:text-blue-200'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* iOS Mobile Bottom Navigation Bar (Visible on mobile screen <= 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 vact-nav border-t vact-border pb-safe shadow-lg">
        <div className="grid grid-cols-5 items-center px-1 py-1.5 text-[10px] font-black">
          <button
            onClick={() => setCurrentTab('exam')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              currentTab === 'exam' ? 'text-blue-600 font-extrabold' : 'vact-text-muted hover:vact-text-primary'
            }`}
          >
            <GraduationCap className="w-5 h-5 mb-0.5" />
            <span>Thi thử</span>
          </button>

          <button
            onClick={() => setCurrentTab('books')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              currentTab === 'books' ? 'text-blue-600 font-extrabold' : 'vact-text-muted hover:vact-text-primary'
            }`}
          >
            <Library className="w-5 h-5 mb-0.5" />
            <span>Tủ Sách</span>
          </button>

          <button
            onClick={() => setCurrentTab('theory')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              currentTab === 'theory' ? 'text-blue-600 font-extrabold' : 'vact-text-muted hover:vact-text-primary'
            }`}
          >
            <BookOpen className="w-5 h-5 mb-0.5" />
            <span>Lý thuyết</span>
          </button>

          <button
            onClick={() => setCurrentTab('tips')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              currentTab === 'tips' ? 'text-blue-600 font-extrabold' : 'vact-text-muted hover:vact-text-primary'
            }`}
          >
            <Lightbulb className="w-5 h-5 mb-0.5" />
            <span>Mẹo thi</span>
          </button>

          <button
            onClick={() => setCurrentTab('mistakes')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl relative transition-all ${
              currentTab === 'mistakes' ? 'text-blue-600 font-extrabold' : 'vact-text-muted hover:vact-text-primary'
            }`}
          >
            <div className="relative">
              <BookmarkCheck className="w-5 h-5 mb-0.5" />
              {mistakeCount > 0 && (
                <span className="absolute -top-1 -right-2 px-1 text-[9px] bg-rose-600 text-white rounded-full font-bold">
                  {mistakeCount}
                </span>
              )}
            </div>
            <span>Câu sai</span>
          </button>
        </div>
      </div>
    </>
  );
}
