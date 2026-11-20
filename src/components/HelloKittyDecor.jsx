// src/components/HelloKittyDecor.jsx
// Bộ Sticker, Huy hiệu và Linh vật Hello Kitty cực kỳ tinh tế, dễ thương và chỉnh chu dành cho bạn gái

import React, { useState, useEffect } from 'react';
import { playKittyPurr, playKittySparkle, playCreamySwitch } from '../utils/creamyAudio';

/**
 * 1. ICONIC HELLO KITTY BOW (Nơ Sanrio đặc trưng với tông màu My Melody)
 */
export function HelloKittyBow({ size = 28, className = '', color = '#F62E70', centerColor = '#e01d5d' }) {
  return (
    <svg 
      width={size} 
      height={size * 0.7} 
      viewBox="0 0 60 42" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block drop-shadow-sm select-none transition-transform hover:scale-110 active:scale-95 ${className}`}
    >
      {/* Cánh nơ trái */}
      <path 
        d="M26 21C26 21 16 7 7 13C-2 19 4 33 13 31C20 29 25 22 26 21Z" 
        fill={color} 
        stroke="#331b24" 
        strokeWidth="2.5" 
        strokeLinejoin="round"
      />
      {/* Vết gấp nơ trái */}
      <path d="M11 18C13 20 17 22 17 22" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* Cánh nơ phải */}
      <path 
        d="M34 21C34 21 44 7 53 13C62 19 56 33 47 31C40 29 35 22 34 21Z" 
        fill={color} 
        stroke="#331b24" 
        strokeWidth="2.5" 
        strokeLinejoin="round"
      />
      {/* Vết gấp nơ phải */}
      <path d="M49 18C47 20 43 22 43 22" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* Nút thắt tròn ở giữa */}
      <ellipse 
        cx="30" 
        cy="21" 
        rx="7.5" 
        ry="7" 
        fill={centerColor} 
        stroke="#331b24" 
        strokeWidth="2.5" 
      />
      <circle cx="28.5" cy="19" r="2" fill="#ffffff" opacity="0.7" />
    </svg>
  );
}

/**
 * 2. HELLO KITTY AVATAR (Gương mặt Hello Kitty với nơ hồng My Melody)
 */
export function HelloKittyAvatar({ size = 36, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 90" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none drop-shadow-sm ${className}`}
    >
      {/* Đầu & Tai */}
      <path 
        d="M22 30 C12 18, 10 12, 22 10 C32 9, 38 18, 44 20 C48 20, 52 20, 56 20 C62 18, 68 9, 78 10 C90 12, 88 18, 78 30 C90 40, 96 55, 90 70 C84 84, 68 88, 50 88 C32 88, 16 84, 10 70 C4 55, 10 40, 22 30 Z" 
        fill="#FFFFFF" 
        stroke="#331b24" 
        strokeWidth="4" 
        strokeLinejoin="round"
      />

      {/* Nơ trên tai trái */}
      <g transform="translate(60, 4) rotate(18) scale(0.68)">
        <path d="M26 21C26 21 16 7 7 13C-2 19 4 33 13 31C20 29 25 22 26 21Z" fill="#F62E70" stroke="#331b24" strokeWidth="3.5" />
        <path d="M34 21C34 21 44 7 53 13C62 19 56 33 47 31C40 29 35 22 34 21Z" fill="#F62E70" stroke="#331b24" strokeWidth="3.5" />
        <ellipse cx="30" cy="21" rx="8" ry="7.5" fill="#e01d5d" stroke="#331b24" strokeWidth="3.5" />
        <circle cx="28" cy="19" r="2.5" fill="#ffffff" opacity="0.8" />
      </g>

      {/* Mắt trái & Mắt phải */}
      <ellipse cx="32" cy="52" rx="4.5" ry="6" fill="#331b24" />
      <ellipse cx="68" cy="52" rx="4.5" ry="6" fill="#331b24" />

      {/* Mũi vàng đặc trưng */}
      <ellipse cx="50" cy="58" rx="5.5" ry="4" fill="#FFCA28" stroke="#331b24" strokeWidth="2.5" />

      {/* Râu bên trái (3 sợi cong nhẹ) */}
      <path d="M12 48 Q 4 47, 0 49" stroke="#331b24" strokeWidth="3" strokeLinecap="round" />
      <path d="M10 56 Q 2 57, -2 60" stroke="#331b24" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 64 Q 4 67, 0 71" stroke="#331b24" strokeWidth="3" strokeLinecap="round" />

      {/* Râu bên phải (3 sợi) */}
      <path d="M88 48 Q 96 47, 100 49" stroke="#331b24" strokeWidth="3" strokeLinecap="round" />
      <path d="M90 56 Q 98 57, 102 60" stroke="#331b24" strokeWidth="3" strokeLinecap="round" />
      <path d="M88 64 Q 96 67, 100 71" stroke="#331b24" strokeWidth="3" strokeLinecap="round" />

      {/* Má hồng pastel dễ thương */}
      <circle cx="24" cy="62" r="5" fill="#F98EAA" opacity="0.45" />
      <circle cx="76" cy="62" r="5" fill="#F98EAA" opacity="0.45" />
    </svg>
  );
}

/**
 * 3. STICKER DÂU TÂY PASTEL (Sanrio Strawberry)
 */
export function StrawberrySticker({ size = 24, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
    >
      {/* Quả dâu */}
      <path 
        d="M20 38C20 38 7 26 6 17C5 10 11 6 20 6C29 6 35 10 34 17C33 26 20 38 20 38Z" 
        fill="#F62E70" 
        stroke="#331b24" 
        strokeWidth="2.5" 
      />
      {/* Cuống & lá */}
      <path d="M20 2V7" stroke="#331b24" strokeWidth="3" strokeLinecap="round" />
      <path d="M13 8C16 11 20 9 20 9C20 9 24 11 27 8C29 11 25 13 20 12C15 13 11 11 13 8Z" fill="#81C784" stroke="#331b24" strokeWidth="2" />
      {/* Hạt dâu */}
      <ellipse cx="14" cy="18" rx="1" ry="1.5" fill="#fff" opacity="0.9" />
      <ellipse cx="20" cy="22" rx="1" ry="1.5" fill="#fff" opacity="0.9" />
      <ellipse cx="26" cy="18" rx="1" ry="1.5" fill="#fff" opacity="0.9" />
      <ellipse cx="16" cy="27" rx="1" ry="1.5" fill="#fff" opacity="0.9" />
      <ellipse cx="24" cy="27" rx="1" ry="1.5" fill="#fff" opacity="0.9" />
    </svg>
  );
}

/**
 * 4. BANNER TRANG TRÍ ĐẦU KHUNG BÀI THI HELLO KITTY
 */
export function HelloKittyCardHeader({ title = 'BÀI THI CHUẨN HÓA V-ACT', subtitle = 'Chúc bé yêu làm bài thật tốt! 💖' }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FDF0F3] via-[#FBFDFB] to-[#FDF0F3] border-2 border-[#F6BBC4] p-3.5 mb-4 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-3 z-10">
        <div className="relative">
          <HelloKittyAvatar size={44} className="hover:rotate-6 transition-transform cursor-pointer" />
          <span className="absolute -top-1 -right-1 text-xs animate-ping">✨</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold tracking-wider uppercase text-[#F62E70] bg-[#FACCD7] px-2 py-0.5 rounded-full border border-[#F98EAA]">
              Special Gift 🎀
            </span>
            <span className="text-xs font-medium text-[#8e5b6c]">{title}</span>
          </div>
          <div className="text-sm font-bold text-[#331b24] mt-0.5 flex items-center gap-1.5">
            {subtitle}
            <span className="text-[#F62E70] inline-block animate-pulse">🌸</span>
          </div>
        </div>
      </div>
      
      {/* Góc phải sticker nơ và ngôi sao */}
      <div className="hidden sm:flex items-center gap-2 z-10">
        <div className="bg-[#FACCD7]/60 px-3 py-1.5 rounded-xl border border-[#F6BBC4] flex items-center gap-1.5 text-xs font-semibold text-[#5c3845]">
          <StrawberrySticker size={18} />
          <span>Sanrio Mode</span>
          <HelloKittyBow size={18} />
        </div>
      </div>

      {/* Họa tiết nền mờ trang nhã */}
      <div className="absolute right-0 top-0 bottom-0 opacity-15 pointer-events-none flex items-center pr-4">
        <HelloKittyAvatar size={110} />
      </div>
    </div>
  );
}

/**
 * 5. MASCOT LINH VẬT HELLO KITTY NỔI GÓC MÀN HÌNH (Interactive Floating Companion)
 * Đồng hành cùng bạn gái khi làm bài thi, động viên và phát âm thanh creamy/twinkle khi chạm vào
 */
export function HelloKittyFloatingCompanion() {
  const [isOpen, setIsOpen] = useState(true);
  const [messageIdx, setMessageIdx] = useState(0);
  const [hearts, setHearts] = useState([]);

  const messages = [
    'Bé yêu cố lên nha! 🌸 Anh luôn ở bên bé!',
    'Đọc kỹ đề nhé công chúa của anh! 💖',
    'Bé giỏi nhất trần đời, tự tin lên nha! ✨',
    'Nhớ uống ngụm nước và chớp mắt thư giãn nhé! 🧋',
    'Mỗi câu đúng là một nụ hôn của anh nè! 🍓',
    'Trộm vía làm bài được điểm cao chót vót! 🎀'
  ];

  const handleKittyClick = () => {
    // Phát âm thanh purr/sparkle đáng yêu
    playKittyPurr();
    setTimeout(() => playKittySparkle(), 120);

    // Chuyển câu nói động viên tiếp theo
    setMessageIdx((prev) => (prev + 1) % messages.length);

    // Bắn tim bay bổng
    const newHeart = {
      id: Date.now() + Math.random(),
      x: (Math.random() * 40 - 20)
    };
    setHearts((prev) => [...prev.slice(-6), newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1400);
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-40 flex flex-col items-end select-none pointer-events-auto">
      {/* Tim bay lên khi tương tác */}
      <div className="relative w-full h-0 pointer-events-none">
        {hearts.map((h) => (
          <span
            key={h.id}
            className="absolute text-lg animate-fade-up"
            style={{
              bottom: '50px',
              right: `${24 + h.x}px`,
              transition: 'all 1.4s ease-out',
              animation: 'kittyFloatHeart 1.4s forwards'
            }}
          >
            💖
          </span>
        ))}
      </div>

      {/* Bong bóng lời nhắn của Hello Kitty */}
      {isOpen && (
        <div 
          onClick={handleKittyClick}
          className="mb-2 max-w-[210px] sm:max-w-[240px] bg-[#FBFDFB] text-[#331b24] text-xs font-semibold px-3 py-2 rounded-2xl border-2 border-[#F6BBC4] shadow-lg cursor-pointer transform hover:scale-105 active:scale-95 transition-all relative animate-bounce-subtle"
          style={{ boxShadow: '0 6px 20px -2px rgba(246, 187, 196, 0.45)' }}
        >
          <div className="flex items-start gap-1.5">
            <span className="text-[#F62E70] text-sm shrink-0">🎀</span>
            <span className="leading-snug">{messages[messageIdx]}</span>
          </div>
          <span className="text-[10px] text-[#8e5b6c] block text-right mt-1 font-normal italic">
            (Bấm vào tớ nè ✨)
          </span>
          {/* Mũi tên chỉ xuống Hello Kitty */}
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#F6BBC4]" />
        </div>
      )}

      {/* Avatar Hello Kitty với Nơ lắc lư */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          title={isOpen ? 'Thu gọn lời nhắn' : 'Mở lời nhắn của Hello Kitty'}
          className="w-6 h-6 rounded-full bg-[#FACCD7] border border-[#F6BBC4] text-[10px] text-[#331b24] flex items-center justify-center hover:bg-[#F98EAA] transition-colors"
        >
          {isOpen ? '✕' : '💬'}
        </button>

        <div
          onClick={handleKittyClick}
          className="relative cursor-pointer group bg-[#FBFDFB] p-2 rounded-3xl border-2 border-[#F6BBC4] shadow-md hover:shadow-xl hover:border-[#F62E70] transition-all transform hover:-translate-y-1 active:scale-90"
          style={{ boxShadow: '0 8px 24px -4px rgba(246, 46, 112, 0.25)' }}
        >
          <HelloKittyAvatar size={48} className="group-hover:rotate-6 transition-transform" />
          <span className="absolute -top-1.5 -right-1.5 bg-[#F62E70] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full border border-white shadow">
            Love 💕
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * 6. HUY HIỆU ĐÁP ÁN DỄ THƯƠNG (Cute Option Letter Pill cho câu hỏi)
 */
export function CuteOptionBadge({ letter, isSelected }) {
  return (
    <div 
      className={`w-9 h-9 rounded-2xl flex items-center justify-center font-bold text-sm transition-all shrink-0 ${
        isSelected 
          ? 'bg-gradient-to-br from-[#F98EAA] to-[#F62E70] text-white shadow-md scale-105 border-2 border-white' 
          : 'bg-[#FDF0F3] text-[#5c3845] border border-[#F6BBC4] group-hover:bg-[#FACCD7]'
      }`}
    >
      {isSelected ? (
        <span className="flex items-center justify-center">
          {letter}
        </span>
      ) : (
        letter
      )}
    </div>
  );
}
