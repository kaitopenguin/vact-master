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
import CasioCalculator from './components/CasioCalculator';

export default function App() {
  const [currentTab, setCurrentTab] = useState('exam');
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  const [isCasioModalOpen, setIsCasioModalOpen] = useState(false);
  
  // Eye-care Theme state: 'light' | 'sepia' | 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('vact_theme_mode') || 'light';
  });

  // Font size scaler for visual comfort / myopia: 'normal' | 'large' | 'xlarge'
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('vact_font_size') || 'normal';
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

  // Theme application
  useEffect(() => {
    document.body.classList.remove('theme-light', 'theme-sepia', 'theme-dark', 'dark');
    if (theme === 'dark') {
      document.body.classList.add('theme-dark', 'dark');
      document.documentElement.classList.add('dark');
    } else if (theme === 'sepia') {
      document.body.classList.add('theme-sepia');
      document.documentElement.classList.remove('dark');
    } else {
      document.body.classList.add('theme-light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('vact_theme_mode', theme);
  }, [theme]);

  // Font size scaler application
  useEffect(() => {
    document.body.classList.remove('font-scale-normal', 'font-scale-large', 'font-scale-xlarge');
    document.body.classList.add(`font-scale-${fontSize}`);
    localStorage.setItem('vact_font_size', fontSize);
  }, [fontSize]);

  // Persist mistakes
  useEffect(() => {
    try {
      localStorage.setItem('vact_mistakes', JSON.stringify(mistakes));
    } catch {
      // ignore
    }
  }, [mistakes]);

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
        mistakeCount={mistakes.length}
        onOpenSecurity={() => setIsSecurityModalOpen(true)}
        onOpenCasio={() => setIsCasioModalOpen(true)}
      />

      {/* Main Content Area - Extra bottom padding for iOS Home bar & Bottom nav */}
      <main className="pb-28 md:pb-16 px-safe">
        {currentTab === 'exam' && (
          <ExamView
            onSaveMistake={handleSaveMistake}
            savedMistakeIds={mistakes.map((m) => m.id)}
            fontSize={fontSize}
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
            onOpenCasio={() => setIsCasioModalOpen(true)}
          />
        )}

        {currentTab === 'tips' && (
          <TipsView 
            fontSize={fontSize} 
            onOpenCasio={() => setIsCasioModalOpen(true)}
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

      {/* Casio fx-580VN X Online Calculator & App Launcher */}
      <CasioCalculator 
        isOpen={isCasioModalOpen} 
        onClose={() => setIsCasioModalOpen(false)} 
      />

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
