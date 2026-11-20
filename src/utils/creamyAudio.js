// src/utils/creamyAudio.js
// Bộ tổng hợp âm thanh bàn phím cơ Custom (Creamy, Thocky, Poppy, Clacky) & Cute Sanrio Sound FX
// Sử dụng Web Audio API thuần: Siêu nhẹ (<15KB code), 0ms độ trễ, không tải file mp3 ngoài, 100% offline

let audioCtx = null;

// Khởi tạo AudioContext an toàn khi người dùng tương tác
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

// 5 Sound Profiles: 'creamy' | 'thocky' | 'poppy' | 'clacky' | 'mute'
export const SOUND_PROFILES = [
  { id: 'creamy', name: 'Creamy', emoji: '🧈', desc: 'Êm dịu, bôi trơn Krytox 205g0' },
  { id: 'thocky', name: 'Thocky', emoji: '🪵', desc: 'Trầm ấm, đầm tay, plate POM/Gỗ' },
  { id: 'poppy', name: 'Poppy', emoji: '🫧', desc: 'Bong bóng nổ giòn, marble pop' },
  { id: 'clacky', name: 'Clacky', emoji: '⚡', desc: 'Đanh giòn, dứt khoát, thanh thoát' },
  { id: 'mute', name: 'Tắt âm', emoji: '🔇', desc: 'Không phát âm thanh' }
];

export function getSoundProfile() {
  if (typeof window === 'undefined') return 'creamy';
  const saved = localStorage.getItem('vact_sound_profile');
  if (saved && SOUND_PROFILES.some(p => p.id === saved)) {
    return saved;
  }
  // Tương thích ngược với key cũ 'vact_creamy_sound'
  const oldSound = localStorage.getItem('vact_creamy_sound');
  if (oldSound === 'false') return 'mute';
  return 'creamy';
}

export function setSoundProfile(profile) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('vact_sound_profile', profile);
    localStorage.setItem('vact_creamy_sound', profile === 'mute' ? 'false' : 'true');
  }
}

// Tương thích ngược
export function getCreamySoundEnabled() {
  return getSoundProfile() !== 'mute';
}

export function setCreamySoundEnabled(enabled) {
  setSoundProfile(enabled ? 'creamy' : 'mute');
}

/**
 * 1. CREAMY SWITCH (Gateron Milky Yellow / Cream Linear - Êm, mượt, tròn trịa)
 */
export function playCreamySwitch(pitchFactor = 1.0) {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.26, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400 * pitchFactor, now);
    filter.frequency.exponentialRampToValueAtTime(320 * pitchFactor, now + 0.06);
    filter.Q.setValueAtTime(2.2, now);

    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    const startFreq = (460 + Math.random() * 20 - 10) * pitchFactor;
    osc1.frequency.setValueAtTime(startFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(110 * pitchFactor, now + 0.045);

    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(startFreq * 1.5, now);
    osc2.frequency.exponentialRampToValueAtTime(180 * pitchFactor, now + 0.035);

    const osc2Gain = ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.16, now);
    osc2Gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

    osc1.connect(filter);
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.075);
    osc2.stop(now + 0.04);
  } catch (e) {}
}

/**
 * 2. THOCKY SWITCH (Holy Panda / Oil King / POM Plate - Âm trầm, đục, đầm chắc, heavy bottom-out)
 */
export function playThockySwitch(pitchFactor = 1.0) {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.32, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

    // Filter cắt sâu tạo âm đầm thock
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(680 * pitchFactor, now);
    filter.frequency.exponentialRampToValueAtTime(180 * pitchFactor, now + 0.07);
    filter.Q.setValueAtTime(3.6, now);

    // Sub-bass thump
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    const startFreq = (260 + Math.random() * 16 - 8) * pitchFactor;
    osc1.frequency.setValueAtTime(startFreq, now);
    osc1.frequency.exponentialRampToValueAtTime(65 * pitchFactor, now + 0.055);

    // Housing bottom impact
    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(startFreq * 1.8, now);
    osc2.frequency.exponentialRampToValueAtTime(90 * pitchFactor, now + 0.04);

    const osc2Gain = ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.22, now);
    osc2Gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc1.connect(filter);
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.085);
    osc2.stop(now + 0.045);
  } catch (e) {}
}

/**
 * 3. POPPY SWITCH (Akko CS Jelly / Marble Sound - Nổ lách tách tròn như bong bóng bọt khí)
 */
export function playPoppySwitch(pitchFactor = 1.0) {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.24, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1100 * pitchFactor, now);
    filter.Q.setValueAtTime(3.8, now);

    // Sweep tần số nhanh tạo tiếng 'pop'
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    const base = 560 * pitchFactor;
    osc.frequency.setValueAtTime(base * 0.75, now);
    osc.frequency.exponentialRampToValueAtTime(base * 2.1, now + 0.025);
    osc.frequency.exponentialRampToValueAtTime(base * 1.1, now + 0.06);

    osc.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.07);
  } catch (e) {}
}

/**
 * 4. CLACKY SWITCH (Cherry MX Blue/Brown / Aluminum Plate - Sắc sảo, đanh giòn, dứt khoát)
 */
export function playClackySwitch(pitchFactor = 1.0) {
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.26, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.065);

    // Highpass + Peaking filter tạo độ đanh sắc
    const filter = ctx.createBiquadFilter();
    filter.type = 'peaking';
    filter.frequency.setValueAtTime(2400 * pitchFactor, now);
    filter.gain.setValueAtTime(8, now);
    filter.Q.setValueAtTime(2.5, now);

    const osc1 = ctx.createOscillator();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(1250 * pitchFactor, now);
    osc1.frequency.exponentialRampToValueAtTime(340 * pitchFactor, now + 0.035);

    const osc2 = ctx.createOscillator();
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(2200 * pitchFactor, now);
    osc2.frequency.exponentialRampToValueAtTime(700 * pitchFactor, now + 0.02);

    const osc2Gain = ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.08, now);
    osc2Gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

    osc1.connect(filter);
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.055);
    osc2.stop(now + 0.025);
  } catch (e) {}
}

/**
 * TỔNG HỢP: Phát âm thanh theo Profile người dùng đang chọn
 */
export function playSwitchSound(pitchFactor = 1.0) {
  const profile = getSoundProfile();
  if (profile === 'mute') return;

  switch (profile) {
    case 'thocky':
      playThockySwitch(pitchFactor);
      break;
    case 'poppy':
      playPoppySwitch(pitchFactor);
      break;
    case 'clacky':
      playClackySwitch(pitchFactor);
      break;
    case 'creamy':
    default:
      playCreamySwitch(pitchFactor);
      break;
  }
}

/**
 * CUTE BUBBLE POP (Chọn đáp án A, B, C, D)
 */
export function playBubblePop(variant = 1) {
  if (getSoundProfile() === 'mute') return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const baseFreq = variant === 1 ? 520 : variant === 2 ? 580 : variant === 3 ? 640 : 720;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sine';
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
 * KITTY SPARKLE / TWINKLE (Gắn cờ, lưu câu hỏi, bấm sticker)
 */
export function playKittySparkle() {
  if (getSoundProfile() === 'mute') return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const notes = [1046.5, 1318.5, 1567.98, 2093.0]; // C6, E6, G6, C7

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
 * CUTE FANFARE (Nộp bài thi hoặc hoàn thành)
 */
export function playKittyFanfare() {
  if (getSoundProfile() === 'mute') return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
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
 * CUTE PURR (Click vào Hello Kitty)
 */
export function playKittyPurr() {
  if (getSoundProfile() === 'mute') return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

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
