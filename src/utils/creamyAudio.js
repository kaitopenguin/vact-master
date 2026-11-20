// src/utils/creamyAudio.js
// Bộ tổng hợp âm thanh bàn phím cơ Creamy Switch & Cute Sanrio Sound FX bằng Web Audio API thuần
// Siêu mượt, không có độ trễ, không tải file ngoài, 100% hoạt động offline

let audioCtx = null;
let isSoundEnabled = true;

// Khởi tạo AudioContext an toàn khi có tương tác người dùng
function getAudioContext() {
  if (typeof window === 'undefined') return null;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  } catch (e) {
    console.warn('AudioContext not supported or blocked:', e);
    return null;
  }
}

// Kiểm tra trạng thái âm thanh
export function getCreamySoundEnabled() {
  if (typeof window === 'undefined') return true;
  const saved = localStorage.getItem('vact_creamy_sound');
  return saved === null ? true : saved === 'true';
}

export function setCreamySoundEnabled(enabled) {
  isSoundEnabled = enabled;
  if (typeof window !== 'undefined') {
    localStorage.setItem('vact_creamy_sound', enabled ? 'true' : 'false');
  }
}

/**
 * 1. ÂM THANH CREAMY SWITCH ĐẶC TRƯNG (Creamy Keyboard Thock / Marble Pop)
 * Tái tạo cảm giác bấm switch bôi trơn Krytox 205g0: âm đầm, dẹt, ấm, tròn trịa, cực kỳ gây nghiện
 */
export function playCreamySwitch(pitchFactor = 1.0) {
  if (!getCreamySoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;

    // Master Gain cho switch
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.28, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    // Biquad Filter tạo âm hưởng "creamy/thock" (ấm, chặn dải chói treble)
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400 * pitchFactor, now);
    filter.frequency.exponentialRampToValueAtTime(320 * pitchFactor, now + 0.06);
    filter.Q.setValueAtTime(2.2, now);

    // Dao động chính (Thump body của switch khi chạm đáy bottom-out)
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    const startFreq = (460 + Math.random() * 30 - 15) * pitchFactor;
    osc1.frequency.setValueAtTime(startFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(110 * pitchFactor, now + 0.045);

    // Dao động phụ (Độ dẹt cạch marble nhẹ của housing)
    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(startFreq * 1.5, now);
    osc2.frequency.exponentialRampToValueAtTime(180 * pitchFactor, now + 0.035);

    // Gain riêng cho osc2
    const osc2Gain = ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.18, now);
    osc2Gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    // Kết nối đồ thị âm thanh
    osc1.connect(filter);
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    // Kích hoạt
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.075);
    osc2.stop(now + 0.04);
  } catch (e) {
    // Không làm gián đoạn UI
  }
}

/**
 * 2. CUTE BUBBLE POP (Âm thanh bong bóng ngọt ngào khi chọn đáp án A, B, C, D)
 */
export function playBubblePop(variant = 1) {
  if (!getCreamySoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const baseFreq = variant === 1 ? 520 : variant === 2 ? 580 : variant === 3 ? 640 : 720;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sine';
    // Tần số trượt lên tạo tiếng "bloop" tròn trĩnh
    osc.frequency.setValueAtTime(baseFreq * 0.7, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.6, now + 0.045);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.2, now + 0.07);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(baseFreq * 1.3, now);
    filter.Q.setValueAtTime(3.0, now);

    gain.gain.setValueAtTime(0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.085);
  } catch (e) {}
}

/**
 * 3. KITTY SPARKLE / TWINKLE (Khi gắn cờ, bookmark, hoàn thành hoặc bấm sticker Hello Kitty)
 */
export function playKittySparkle() {
  if (!getCreamySoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const notes = [1046.5, 1318.5, 1567.98, 2093.0]; // C6, E6, G6, C7 (Hợp âm Đô trưởng trong trẻo)

    notes.forEach((freq, idx) => {
      const startTime = now + idx * 0.045;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.2);
    });
  } catch (e) {}
}

/**
 * 4. CUTE VICTORY FANFARE (Khi Nộp bài thi hoặc đạt kết quả cao)
 */
export function playKittyFanfare() {
  if (!getCreamySoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    // Giai điệu ngắn ngọt ngào: G5 -> C6 -> E6 -> G6 -> C7
    const melody = [
      { f: 783.99, d: 0.09, t: 0.0 },
      { f: 1046.5, d: 0.09, t: 0.09 },
      { f: 1318.51, d: 0.1, t: 0.18 },
      { f: 1567.98, d: 0.12, t: 0.28 },
      { f: 2093.0, d: 0.45, t: 0.42 }
    ];

    melody.forEach(({ f, d, t }) => {
      const startTime = now + t;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, startTime);

      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + d + 0.02);
    });
  } catch (e) {}
}

/**
 * 5. CUTE HELLO KITTY PURR / MEOW CHIME (Khi click vào Hello Kitty Mascot)
 */
export function playKittyPurr() {
  if (!getCreamySoundEnabled()) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Chuỗi tần số trượt nốt mèo kêu ngọt lịm "mew~"
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.linearRampToValueAtTime(1174, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(987, now + 0.22);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.26);
  } catch (e) {}
}
