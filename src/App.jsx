import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ExamView from './components/ExamView';
import BooksView from './components/BooksView';
import TheoryView from './components/TheoryView';
import TipsView from './components/TipsView';
import VideoView from './components/VideoView';
import RoadmapView from './components/RoadmapView';
import MistakeView from './components/MistakeView';
import SecurityDashboard from './components/SecurityDashboard';
import { HelloKittyFloatingCompanion } from './components/HelloKittyDecor';
import { playSwitchSound } from './utils/creamyAudio';
import { useDeviceDetection } from './hooks/useDeviceDetection';

export default function App() {
  const deviceInfo = useDeviceDetection();
  const [currentTab, setCurrentTab] = useState('exam');
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  
  // Eye-care Theme state: 'light' | 'sepia' | 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vact_theme_mode') || 'light';
  });

  // Font size scaler for visual comfort / myopia: 'normal' | 'large' | 'xlarge'
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('vact_font_size') || 'normal';
  });

  // Blue Light Shield for Myopia: 'off' | 'soft' | 'eink' | 'max'
  const [blueLightShield, setBlueLightShield] = useState(() => {
    return localStorage.getItem('vact_blue_shield') || 'eink';
  });

  // Mistakes state persisted in LocalStorage
  const [mistakes, setMistakes] = useState(() => {
    try {
      const saved = localStorage.getItem('vact_mistakes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Theme application (7 Designer Themes: dark, light, sepia, retro, frutiger-aero, hello-kitty, cinnamoroll)
  useEffect(() => {
    document.body.classList.remove(
      'theme-light', 
      'theme-sepia', 
      'theme-dark', 
      'theme-retro', 
      'theme-frutiger-aero', 
      'theme-hello-kitty', 
      'theme-cinnamoroll', 
      'dark'
    );
    if (theme === 'dark') {
      document.body.classList.add('theme-dark', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      document.body.classList.add(`theme-${theme}`);
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('vact_theme_mode', theme);
  }, [theme]);

  // Font size scaler application (Scale trực tiếp root html rem & body)
  useEffect(() => {
    document.documentElement.classList.remove('font-scale-normal', 'font-scale-large', 'font-scale-xlarge');
    document.body.classList.remove('font-scale-normal', 'font-scale-large', 'font-scale-xlarge');
    document.documentElement.classList.add(`font-scale-${fontSize}`);
    document.body.classList.add(`font-scale-${fontSize}`);
    localStorage.setItem('vact_font_size', fontSize);
  }, [fontSize]);

  // Blue Light Shield application
  useEffect(() => {
    const root = document.getElementById('root');
    if (root) {
      root.classList.remove('blue-light-shield-off', 'blue-light-shield-soft', 'blue-light-shield-eink', 'blue-light-shield-max');
      root.classList.add(`blue-light-shield-${blueLightShield}`);
    }
    localStorage.setItem('vact_blue_shield', blueLightShield);
  }, [blueLightShield]);

  // Persist mistakes
  useEffect(() => {
    try {
      localStorage.setItem('vact_mistakes', JSON.stringify(mistakes));
    } catch {
      // ignore
    }
  }, [mistakes]);

  // Global Keyboard Switch Sound click effect (Creamy, Thocky, Poppy, Clacky)
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target.closest('button, [role="button"], input[type="radio"], a, .creamy-tap');
      if (target) {
        if (!target.dataset.customSound) {
          playSwitchSound(1.0);
        }
      }
    };

    window.addEventListener('click', handleGlobalClick, { passive: true });
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  const handleSaveMistake = (question) => {
    setMistakes((prev) => {
      if (prev.some((q) => q.id === question.id)) {
        return prev;
      }
      return [question, ...prev];
    });
  };

  const handleRemoveMistake = (questionId) => {
    setMistakes((prev) => prev.filter((q) => q.id !== questionId));
  };

  const handleClearAllMistakes = () => {
    setMistakes([]);
  };

  return (
    <div className={`min-h-[100dvh] font-sans selection:bg-blue-500 selection:text-white transition-colors duration-200 font-scale-${fontSize}`}>
      {/* Top Navigation Bar with Eye-Care & Font controls & Mobile Bottom Nav */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        theme={theme}
        setTheme={setTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
        blueLightShield={blueLightShield}
        setBlueLightShield={setBlueLightShield}
        mistakeCount={mistakes.length}
        onOpenSecurity={() => setIsSecurityModalOpen(true)}
      />

      {/* Main Content Area - Extra bottom padding for iOS Home bar & Bottom nav */}
      <main className="pb-28 md:pb-16 px-safe">
        {currentTab === 'exam' && (
          <ExamView
            onSaveMistake={handleSaveMistake}
            savedMistakeIds={mistakes.map((m) => m.id)}
            fontSize={fontSize}
            theme={theme}
          />
        )}

        {currentTab === 'books' && (
          <BooksView
            onStartPracticeOfficial={() => setCurrentTab('exam')}
          />
        )}

        {currentTab === 'theory' && (
          <TheoryView 
            fontSize={fontSize} 
          />
        )}

        {currentTab === 'tips' && (
          <TipsView 
            fontSize={fontSize} 
          />
        )}

        {currentTab === 'videos' && <VideoView />}

        {currentTab === 'roadmap' && (
          <RoadmapView onStartExam={() => setCurrentTab('exam')} />
        )}

        {currentTab === 'mistakes' && (
          <MistakeView
            mistakes={mistakes}
            onRemoveMistake={handleRemoveMistake}
            onClearAllMistakes={handleClearAllMistakes}
          />
        )}
      </main>

      {/* Security & WAF Dashboard Modal */}
      {isSecurityModalOpen && (
        <SecurityDashboard onClose={() => setIsSecurityModalOpen(false)} />
      )}

      {/* Hello Kitty Interactive Companion Mascot for Girlfriend */}
      {theme === 'hello-kitty' && <HelloKittyFloatingCompanion />}

      {/* Footer */}
      <footer className="border-t vact-border py-8 pb-32 md:pb-8 text-center text-xs vact-text-muted">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-black vact-text-primary">V-ACT Master</span>
            <span>•</span>
            <span>Nền tảng Luyện thi Đánh Giá Năng Lực ĐHQG TP.HCM Miễn Phí</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Chế độ: {theme === 'sepia' ? 'Giấy ấm bảo vệ mắt' : theme === 'dark' ? 'Ban đêm' : 'Sáng chuẩn'}</span>
            <span>•</span>
            <span>Cỡ chữ: {fontSize === 'xlarge' ? 'Cực lớn (A++)' : fontSize === 'large' ? 'Lớn (A+)' : 'Chuẩn (A)'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
