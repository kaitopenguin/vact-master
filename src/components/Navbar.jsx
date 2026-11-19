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
  CloudUpload,
  Library,
  Type
} from 'lucide-react';

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  theme, 
  setTheme, 
  fontSize, 
  setFontSize, 
  mistakeCount, 
  onOpenDeploy 
}) {
  const navItems = [
    { id: 'exam', label: 'Thi thử V-ACT', icon: GraduationCap },
    { id: 'books', label: 'Tủ Sách & Đề PDF', icon: Library, badge: 'Mới' },
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

  const fontSizes = [
    { id: 'normal', label: 'A', title: 'Cỡ chữ chuẩn (16px)' },
    { id: 'large', label: 'A+', title: 'Cỡ chữ lớn (18px) - Giảm mỏi mắt' },
    { id: 'xlarge', label: 'A++', title: 'Cỡ chữ cực lớn (20px) - Cho người cận thị' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Logo */}
          <div 
            onClick={() => setCurrentTab('exam')} 
            className="flex items-center gap-2.5 cursor-pointer select-none shrink-0"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-extrabold text-xl shadow-md shadow-blue-500/20">
              V
            </div>
            <div>
              <div className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                V-ACT <span className="text-blue-600 dark:text-blue-400 font-semibold">Master</span>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                  100% Free
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                Luyện thi ĐGNL ĐHQG TP.HCM • Chuẩn GDPT 2018
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`ml-1 px-1.5 py-0.2 text-[10px] font-bold rounded-full ${
                      item.badge === 'Mới' ? 'bg-blue-600 text-white' : 'bg-rose-500 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Accessibility Controls: Eye-care & Font Scaler */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Font Size Scaler for Myopia / Visual Comfort */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-0.5 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300" title="Chỉnh cỡ chữ chống mỏi mắt cho người cận">
              {fontSizes.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFontSize(f.id)}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    fontSize === f.id
                      ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-sm'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title={f.title}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* 3-State Theme Selector: Light, Sepia (Giấy ấm chống mỏi mắt), Dark */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-0.5 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setTheme('light')}
                className={`p-1.5 rounded-lg transition-all ${theme === 'light' ? 'bg-white shadow-sm text-amber-500' : 'text-slate-500 hover:text-slate-900'}`}
                title="Chế độ Sáng chuẩn"
              >
                <Sun className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setTheme('sepia')}
                className={`p-1.5 rounded-lg transition-all ${theme === 'sepia' ? 'bg-[#f4ede0] shadow-sm text-[#8c6b38]' : 'text-slate-500 hover:text-slate-900'}`}
                title="Chế độ Giấy ấm (Chống ánh sáng xanh, chống mỏi mắt cho người cận)"
              >
                <Coffee className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setTheme('dark')}
                className={`p-1.5 rounded-lg transition-all ${theme === 'dark' ? 'bg-slate-700 shadow-sm text-blue-400' : 'text-slate-500 hover:text-white'}`}
                title="Chế độ Ban đêm dịu mắt"
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onOpenDeploy}
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-300 transition-colors bg-white dark:bg-slate-800 shadow-sm"
              title="Hướng dẫn Deploy Vercel miễn phí"
            >
              <CloudUpload className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Vercel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="lg:hidden flex overflow-x-auto border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 gap-1 no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
              {item.badge && (
                <span className={`px-1.5 rounded-full text-[10px] font-bold ${isActive ? 'bg-white text-blue-600' : 'bg-rose-500 text-white'}`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
}
