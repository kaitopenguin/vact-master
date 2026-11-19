import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ExamView from './components/ExamView';
import BooksView from './components/BooksView';
import TheoryView from './components/TheoryView';
import TipsView from './components/TipsView';
import VideoView from './components/VideoView';
import RoadmapView from './components/RoadmapView';
import MistakeView from './components/MistakeView';
import DeployGuide from './components/DeployGuide';

export default function App() {
  const [currentTab, setCurrentTab] = useState('exam');
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);
  
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
    <div className={`min-h-screen font-sans selection:bg-blue-500 selection:text-white transition-colors duration-200 font-scale-${fontSize}`}>
      {/* Top Navigation Bar with Eye-Care & Font controls */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        theme={theme}
        setTheme={setTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
        mistakeCount={mistakes.length}
        onOpenDeploy={() => setIsDeployModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="pb-16">
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

        {currentTab === 'theory' && <TheoryView fontSize={fontSize} />}

        {currentTab === 'tips' && <TipsView fontSize={fontSize} />}

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

      {/* Deploy Guide Modal */}
      {isDeployModalOpen && (
        <DeployGuide onClose={() => setIsDeployModalOpen(false)} />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200">V-ACT Master</span>
            <span>•</span>
            <span>Nền tảng Luyện thi Đánh Giá Năng Lực ĐHQG TP.HCM Miễn Phí</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Chế độ: {theme === 'sepia' ? 'Giấy vàng bảo vệ mắt' : theme === 'dark' ? 'Ban đêm' : 'Sáng chuẩn'}</span>
            <span>•</span>
            <span>Cỡ chữ: {fontSize === 'xlarge' ? 'Cực lớn (A++)' : fontSize === 'large' ? 'Lớn (A+)' : 'Chuẩn (A)'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
