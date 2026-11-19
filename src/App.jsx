import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ExamView from './components/ExamView';
import TheoryView from './components/TheoryView';
import TipsView from './components/TipsView';
import VideoView from './components/VideoView';
import RoadmapView from './components/RoadmapView';
import MistakeView from './components/MistakeView';
import DeployGuide from './components/DeployGuide';

export default function App() {
  const [currentTab, setCurrentTab] = useState('exam');
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);
  
  // Theme state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('vact_theme') === 'dark';
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

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('vact_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('vact_theme', 'light');
    }
  }, [darkMode]);

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mistakeCount={mistakes.length}
        onOpenDeploy={() => setIsDeployModalOpen(true)}
      />

      {/* Main Content Pane */}
      <main className="pb-16">
        {currentTab === 'exam' && (
          <ExamView
            onSaveMistake={handleSaveMistake}
            savedMistakeIds={mistakes.map((m) => m.id)}
          />
        )}

        {currentTab === 'theory' && <TheoryView />}

        {currentTab === 'tips' && <TipsView />}

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

      {/* Minimal Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 dark:text-slate-200">V-ACT Master</span>
            <span>•</span>
            <span>Nền tảng Luyện thi Đánh Giá Năng Lực ĐHQG TP.HCM Miễn Phí</span>
          </div>
          <div>
            Thiết kế tối ưu cho học sinh 2k7, 2k8 & thí sinh tự do • Sẵn sàng deploy Vercel 0đ
          </div>
        </div>
      </footer>
    </div>
  );
}
