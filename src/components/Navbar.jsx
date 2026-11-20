import React, { useState } from 'react';
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
  Monitor,
  Sparkles,
  Heart,
  Cloud,
  Palette,
  ChevronDown,
  Check,
  ShieldCheck,
  Library,
  Eye,
  Volume2,
  VolumeX,
  Sliders
} from 'lucide-react';
import { HelloKittyBow } from './HelloKittyDecor';
import { 
  getSoundProfile, 
  setSoundProfile, 
  SOUND_PROFILES,
  playSwitchSound,
  playCreamySwitch,
  playThockySwitch,
  playPoppySwitch,
  playClackySwitch,
  playKittyPurr, 
  playKittySparkle 
} from '../utils/creamyAudio';

export default function Navbar({ 
  currentTab, 
  setCurrentTab, 
  theme, 
  setTheme, 
  fontSize, 
  setFontSize,
  blueLightShield = 'eink',
  setBlueLightShield,
  mistakeCount, 
  onOpenSecurity
}) {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [soundProfile, setSoundProfileState] = useState(getSoundProfile());
  const [isSoundMenuOpen, setIsSoundMenuOpen] = useState(false);

  const themes = [
    {
      id: 'dark',
      name: 'Tối',
      english: 'Obsidian Dark',
      desc: 'Sắc sảo, chuẩn Linear & Raycast',
      icon: Moon,
      color: '#0b0f19',
      borderColor: '#3b82f6',
      badge: 'Pro Dark'
    },
    {
      id: 'light',
      name: 'Sáng',
      english: 'Clean Daylight',
      desc: 'Sáng dịu tự nhiên chuẩn WCAG AAA',
      icon: Sun,
      color: '#ffffff',
      borderColor: '#cbd5e1',
      badge: 'Daylight'
    },
    {
      id: 'sepia',
      name: 'Dịu mắt',
      english: 'E-Ink 3800K',
      desc: 'Giấy ngà ấm thư giãn mắt cận',
      icon: Coffee,
      color: '#fbf5e8',
      borderColor: '#c2410c',
      badge: 'Bảo vệ mắt'
    },
    {
      id: 'retro',
      name: 'Retro',
      english: 'Vintage 90s',
      desc: 'Cổ điển thập niên 90s & Workstation',
      icon: Monitor,
      color: '#ece6dc',
      borderColor: '#0f766e',
      badge: 'Classic'
    },
    {
      id: 'frutiger-aero',
      name: 'Frutiger Aero',
      english: 'Aqua Web 2.0',
      desc: 'Bóng kính, trời xanh & biển ngọc',
      icon: Sparkles,
      color: '#e0f2fe',
      borderColor: '#0284c7',
      badge: 'Aero Glass'
    },
    {
      id: 'hello-kitty',
      name: 'Hello Kitty',
      english: 'My Melody Pastel',
      desc: 'Hồng pastel dịu mắt, chống chói lóa',
      icon: Heart,
      color: '#FBFDFB',
      borderColor: '#F62E70',
      badge: 'My Melody'
    },
    {
      id: 'cinnamoroll',
      name: 'Cinnamoroll',
      english: 'Fluffy Cloud Blue',
      desc: 'Xanh mây bồng bềnh & marshmallow',
      icon: Cloud,
      color: '#f0f7ff',
      borderColor: '#0284c7',
      badge: 'Sanrio Blue'
    }
  ];

  const currentThemeObj = themes.find(t => t.id === theme) || themes[0];
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
              onClick={() => {
                playCreamySwitch(1.1);
                setCurrentTab('exam');
              }} 
              className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none shrink-0"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                {theme === 'hello-kitty' ? '🎀' : 'V'}
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-black text-sm sm:text-lg vact-text-primary tracking-tight flex items-center gap-1">
                    V-ACT <span className="text-blue-600">Master</span>
                    {theme === 'hello-kitty' && (
                      <HelloKittyBow size={20} className="inline-block animate-bounce-subtle ml-0.5" />
                    )}
                  </span>
                  {theme === 'hello-kitty' ? (
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-[#FACCD7] text-[#F62E70] border border-[#F98EAA] hidden xs:inline-flex items-center gap-1 shadow-2xs">
                      💖 Bé Yêu
                    </span>
                  ) : (
                    <span className="text-[10px] font-black px-1.5 py-0.2 rounded-full bg-emerald-600 text-white hidden xs:inline-block">
                      Free
                    </span>
                  )}
                </div>
                <p className="text-[10px] sm:text-[11px] vact-text-muted font-medium hidden md:block">
                  {theme === 'hello-kitty' 
                    ? 'Chuyên trang luyện thi ĐHQG TP.HCM dành tặng bé yêu 🌸' 
                    : 'Luyện thi ĐGNL ĐHQG TP.HCM • Chuẩn GDPT 2018'}
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

              {/* 7-Theme Designer Palette Switcher (Tối, Sáng, Dịu mắt, Retro, Frutiger Aero, Hello Kitty, Cinnamoroll) */}
              <div className="relative">
                <button
                  onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                  className={`flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                    isThemeMenuOpen 
                      ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-slate-800' 
                      : 'vact-card border vact-border vact-text-primary hover:border-blue-400'
                  }`}
                  title="Chọn chủ đề giao diện (7 Themes: Tối, Sáng, Dịu mắt, Retro, Frutiger Aero, Hello Kitty, Cinnamoroll)"
                >
                  <div 
                    className="w-3.5 h-3.5 rounded-full border shadow-2xs shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: currentThemeObj.color, borderColor: currentThemeObj.borderColor }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentThemeObj.borderColor }}></span>
                  </div>
                  <span className="hidden sm:inline font-bold">Theme: {currentThemeObj.name}</span>
                  <ChevronDown className={`w-3.5 h-3.5 vact-text-muted transition-transform duration-200 ${isThemeMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isThemeMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsThemeMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl vact-card border vact-border shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <div className="px-3 py-2 border-b vact-border mb-1 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Palette className="w-4 h-4 text-blue-500" />
                          <span className="text-xs font-black uppercase tracking-wider vact-text-primary">Chọn Giao Diện (7 Themes)</span>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 font-bold">
                          Designer
                        </span>
                      </div>

                      <div className="space-y-1 max-h-[70vh] overflow-y-auto pr-0.5">
                        {themes.map((t) => {
                          const IconComponent = t.icon;
                          const isActive = theme === t.id;
                          return (
                            <button
                              key={t.id}
                              onClick={() => {
                                setTheme(t.id);
                                setIsThemeMenuOpen(false);
                                if (t.id === 'hello-kitty') {
                                  playKittyPurr();
                                  setTimeout(() => playKittySparkle(), 140);
                                } else {
                                  playCreamySwitch(1.1);
                                }
                              }}
                              className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${
                                isActive 
                                  ? 'bg-blue-500/10 border border-blue-500/30' 
                                  : 'hover:bg-slate-500/10 border border-transparent'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <div 
                                  className="w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 shadow-2xs"
                                  style={{ backgroundColor: t.color, borderColor: t.borderColor }}
                                >
                                  <IconComponent className="w-4 h-4" style={{ color: t.borderColor }} />
                                </div>
                                <div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs font-black vact-text-primary">
                                      {t.name}
                                    </span>
                                    <span className="text-[10px] font-medium vact-text-muted">
                                      ({t.english})
                                    </span>
                                    {t.badge && (
                                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-slate-500/15 vact-text-secondary">
                                        {t.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] vact-text-muted line-clamp-1 leading-snug">
                                    {t.desc}
                                  </p>
                                </div>
                              </div>

                              {isActive && (
                                <Check className="w-4 h-4 text-blue-500 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Keyboard Sound FX Profile Selector (Creamy, Thocky, Poppy, Clacky) */}
              <div className="relative">
                <button
                  onClick={() => setIsSoundMenuOpen(!isSoundMenuOpen)}
                  className={`flex items-center gap-1.5 p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                    soundProfile !== 'mute' 
                      ? 'vact-card border vact-border vact-text-primary text-[#F62E70] ring-1 ring-[#F6BBC4]/40' 
                      : 'vact-card-subtle border vact-border opacity-60'
                  }`}
                  title="Chọn hiệu ứng âm thanh gõ phím (Creamy, Thocky, Poppy, Clacky)"
                >
                  {soundProfile !== 'mute' ? (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-[#F62E70] animate-pulse" />
                      <span className="hidden sm:inline font-bold">
                        {SOUND_PROFILES.find(p => p.id === soundProfile)?.emoji} {SOUND_PROFILES.find(p => p.id === soundProfile)?.name}
                      </span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-3.5 h-3.5 vact-text-muted" />
                      <span className="hidden sm:inline font-medium vact-text-muted">Mute</span>
                    </>
                  )}
                  <ChevronDown className={`w-3 h-3 vact-text-muted transition-transform duration-200 ${isSoundMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {isSoundMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsSoundMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-64 rounded-2xl vact-card border vact-border shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <div className="px-3 py-1.5 border-b vact-border mb-1 flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase tracking-wider vact-text-primary">Âm Thanh Bàn Phím (FX)</span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200 font-bold">
                          Custom
                        </span>
                      </div>

                      <div className="space-y-1">
                        {SOUND_PROFILES.map((p) => {
                          const isSelected = soundProfile === p.id;
                          return (
                            <button
                              key={p.id}
                              onClick={() => {
                                setSoundProfile(p.id);
                                setSoundProfileState(p.id);
                                setIsSoundMenuOpen(false);
                                if (p.id === 'creamy') playCreamySwitch(1.1);
                                else if (p.id === 'thocky') playThockySwitch(1.0);
                                else if (p.id === 'poppy') playPoppySwitch(1.0);
                                else if (p.id === 'clacky') playClackySwitch(1.0);
                              }}
                              className={`w-full text-left p-2 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${
                                isSelected 
                                  ? 'bg-blue-500/10 border border-blue-500/30' 
                                  : 'hover:bg-slate-500/10 border border-transparent'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-base shrink-0">{p.emoji}</span>
                                <div>
                                  <div className="text-xs font-black vact-text-primary leading-tight">
                                    {p.name}
                                  </div>
                                  <div className="text-[10px] vact-text-muted leading-tight">
                                    {p.desc}
                                  </div>
                                </div>
                              </div>
                              {isSelected && <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Hardware-Grade Digital Blue Light Shield (Kính Lọc Ánh Sáng Xanh Tích Hợp) */}
              {setBlueLightShield && (
                <button
                  onClick={() => {
                    const levels = ['off', 'soft', 'eink', 'max'];
                    const next = levels[(levels.indexOf(blueLightShield) + 1) % levels.length];
                    setBlueLightShield(next);
                  }}
                  className={`flex items-center gap-1.5 text-xs font-black px-2.5 sm:px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                    blueLightShield !== 'off'
                      ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/70 dark:text-amber-200 border-amber-400 shadow-xs ring-1 ring-amber-400/40'
                      : 'vact-card border vact-border vact-text-muted hover:vact-text-primary'
                  }`}
                  title="Kính lọc ánh sáng xanh kỹ thuật số (Bấm để chuyển mức lọc: Tắt -> Dịu nhẹ 30% -> Giấy ấm Cận thị 60% -> Tối đa 85%)"
                >
                  <Eye className={`w-4 h-4 shrink-0 ${blueLightShield !== 'off' ? 'text-amber-600 dark:text-amber-400' : ''}`} />
                  <span className="hidden md:inline">
                    {blueLightShield === 'off' && 'Lọc Xanh: Tắt'}
                    {blueLightShield === 'soft' && 'Lọc Xanh: 30%'}
                    {blueLightShield === 'eink' && 'Lọc Xanh: 60% (Cận)'}
                    {blueLightShield === 'max' && 'Lọc Xanh: 85%'}
                  </span>
                  {blueLightShield !== 'off' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  )}
                </button>
              )}

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
                  onClick={() => {
                    playSwitchSound(1.0);
                    setCurrentTab(item.id);
                  }}
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
            onClick={() => {
              playSwitchSound(1.0);
              setCurrentTab('exam');
            }}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              currentTab === 'exam' ? 'text-blue-600 font-extrabold' : 'vact-text-muted hover:vact-text-primary'
            }`}
          >
            <GraduationCap className="w-5 h-5 mb-0.5" />
            <span>Thi thử</span>
          </button>

          <button
            onClick={() => {
              playSwitchSound(1.0);
              setCurrentTab('books');
            }}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              currentTab === 'books' ? 'text-blue-600 font-extrabold' : 'vact-text-muted hover:vact-text-primary'
            }`}
          >
            <Library className="w-5 h-5 mb-0.5" />
            <span>Tủ Sách</span>
          </button>

          <button
            onClick={() => {
              playSwitchSound(1.0);
              setCurrentTab('theory');
            }}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              currentTab === 'theory' ? 'text-blue-600 font-extrabold' : 'vact-text-muted hover:vact-text-primary'
            }`}
          >
            <BookOpen className="w-5 h-5 mb-0.5" />
            <span>Lý thuyết</span>
          </button>

          <button
            onClick={() => {
              playSwitchSound(1.0);
              setCurrentTab('tips');
            }}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              currentTab === 'tips' ? 'text-blue-600 font-extrabold' : 'vact-text-muted hover:vact-text-primary'
            }`}
          >
            <Lightbulb className="w-5 h-5 mb-0.5" />
            <span>Mẹo thi</span>
          </button>

          <button
            onClick={() => {
              playSwitchSound(1.0);
              setCurrentTab('mistakes');
            }}
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
