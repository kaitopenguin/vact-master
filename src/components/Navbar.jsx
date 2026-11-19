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
  CloudUpload
} from 'lucide-react';

export default function Navbar({ currentTab, setCurrentTab, darkMode, setDarkMode, mistakeCount, onOpenDeploy }) {
  const navItems = [
    { id: 'exam', label: 'Thi thử V-ACT', icon: GraduationCap },
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
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => setCurrentTab('exam')} 
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-blue-500/20">
              V
            </div>
            <div>
              <div className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                V-ACT <span className="text-blue-600 dark:text-blue-400 font-semibold">Master</span>
                <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                  100% Free
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                Luyện thi ĐGNL ĐHQG TP.HCM
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.2 text-[11px] font-bold rounded-full bg-rose-500 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenDeploy}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-300 transition-colors bg-white dark:bg-slate-800 shadow-sm"
              title="Hướng dẫn Deploy Vercel miễn phí"
            >
              <CloudUpload className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="hidden lg:inline">Deploy</span> Vercel
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Chuyển chế độ sáng / tối"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="md:hidden flex overflow-x-auto border-t border-slate-200 dark:border-slate-800 px-2 py-1 gap-1 no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentTab(item.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
              {item.badge && (
                <span className={`px-1 rounded-full text-[10px] font-bold ${isActive ? 'bg-white text-blue-600' : 'bg-rose-500 text-white'}`}>
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
