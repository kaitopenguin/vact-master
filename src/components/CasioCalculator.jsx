import React, { useState } from 'react';
import { 
  Calculator, 
  X, 
  ExternalLink, 
  Sparkles, 
  RotateCcw, 
  Copy, 
  Check, 
  Play, 
  BookOpen, 
  Terminal,
  Cpu
} from 'lucide-react';

export default function CasioCalculator({ isOpen, onClose }) {
  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState('');
  const [activeMode, setActiveMode] = useState('COMP'); // COMP (1), TABLE (8), EQN (9), VECTOR (5)
  const [isShift, setIsShift] = useState(false);
  const [isAlpha, setIsAlpha] = useState(false);
  const [launchStatus, setLaunchStatus] = useState(null);
  const [copiedCmd, setCopiedCmd] = useState(false);

  // Table Mode inputs
  const [tableFx, setTableFx] = useState('2*x^2 - 3*x + 1');
  const [tableStart, setTableStart] = useState('0');
  const [tableEnd, setTableEnd] = useState('5');
  const [tableStep, setTableStep] = useState('1');
  const [tableResults, setTableResults] = useState(null);

  // Eqn Mode inputs (ax^2 + bx + c = 0)
  const [eqnA, setEqnA] = useState('1');
  const [eqnB, setEqnB] = useState('-5');
  const [eqnC, setEqnC] = useState('6');
  const [eqnResult, setEqnResult] = useState(null);

  if (!isOpen) return null;

  const handleKey = (key) => {
    if (key === 'AC') {
      setDisplay('0');
      setHistory('');
      return;
    }
    if (key === 'DEL') {
      setDisplay(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
      return;
    }
    if (key === '=') {
      try {
        setHistory(display + ' =');
        // Sanitize and evaluate expression safely
        let expr = display
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/π/g, 'Math.PI')
          .replace(/e/g, 'Math.E')
          .replace(/sin\(/g, 'Math.sin(')
          .replace(/cos\(/g, 'Math.cos(')
          .replace(/tan\(/g, 'Math.tan(')
          .replace(/ln\(/g, 'Math.log(')
          .replace(/log\(/g, 'Math.log10(')
          .replace(/√\(/g, 'Math.sqrt(')
          .replace(/\^/g, '**');

        // Simple math eval
        const res = Function(`"use strict"; return (${expr})`)();
        const rounded = Math.round(res * 100000000) / 100000000;
        setDisplay(String(rounded));
      } catch {
        setDisplay('Lỗi cú pháp (Syntax ERROR)');
      }
      return;
    }

    if (display === '0' || display.includes('ERROR')) {
      setDisplay(key);
    } else {
      setDisplay(prev => prev + key);
    }
  };

  const runTableCalculation = () => {
    try {
      const start = parseFloat(tableStart);
      const end = parseFloat(tableEnd);
      const step = parseFloat(tableStep);

      if (step <= 0 || start > end) {
        alert('Vui lòng nhập Start < End và Step > 0');
        return;
      }

      const rows = [];
      let cur = start;
      const parsedFx = tableFx
        .replace(/\^/g, '**')
        .replace(/×/g, '*')
        .replace(/÷/g, '/');

      let maxVal = -Infinity;
      let minVal = Infinity;
      let maxX = cur;
      let minX = cur;

      while (cur <= end + 0.0001) {
        const x = Math.round(cur * 1000) / 1000;
        const fn = new Function('x', `"use strict"; return (${parsedFx.replace(/x/g, `(${x})`)});`);
        const val = fn(x);
        const roundedVal = Math.round(val * 10000) / 10000;

        if (roundedVal > maxVal) {
          maxVal = roundedVal;
          maxX = x;
        }
        if (roundedVal < minVal) {
          minVal = roundedVal;
          minX = x;
        }

        rows.push({ x, fx: roundedVal });
        cur += step;
        if (rows.length > 50) break; // cap to 50 rows
      }

      setTableResults({ rows, maxVal, minVal, maxX, minX });
    } catch {
      alert('Lỗi biểu thức f(x). Vui lòng kiểm tra lại cú pháp toán học.');
    }
  };

  const runEqnCalculation = () => {
    const a = parseFloat(eqnA);
    const b = parseFloat(eqnB);
    const c = parseFloat(eqnC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) return;

    if (a === 0) {
      if (b === 0) {
        setEqnResult({ text: c === 0 ? 'Vô số nghiệm' : 'Vô nghiệm' });
      } else {
        setEqnResult({ text: `Phương trình bậc 1: x = ${-c / b}` });
      }
      return;
    }

    const delta = b * b - 4 * a * c;
    if (delta > 0) {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      setEqnResult({
        delta,
        x1: Math.round(x1 * 10000) / 10000,
        x2: Math.round(x2 * 10000) / 10000,
        text: `Phương trình có 2 nghiệm phân biệt: x1 = ${Math.round(x1 * 10000) / 10000}; x2 = ${Math.round(x2 * 10000) / 10000}`
      });
    } else if (delta === 0) {
      const x0 = -b / (2 * a);
      setEqnResult({
        delta,
        text: `Phương trình có nghiệm kép: x = ${Math.round(x0 * 10000) / 10000}`
      });
    } else {
      setEqnResult({
        delta,
        text: `Phương trình vô nghiệm thực (Có 2 nghiệm phức)`
      });
    }
  };

  const launchLocalCasioApp = () => {
    setLaunchStatus('Đang gửi lệnh mở ứng dụng Casio trên máy...');
    fetch('/api/casio/launch', { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        setLaunchStatus(data.message || 'Đã mở Casio Emulator thành công!');
        setTimeout(() => setLaunchStatus(null), 4000);
      })
      .catch(() => {
        setLaunchStatus('Đã chạy trình giả lập hoặc hãy mở trực tiếp từ tệp tin trên máy tính.');
        setTimeout(() => setLaunchStatus(null), 4000);
      });
  };

  const copyLocalCommand = () => {
    const cmd = `cd "C:\\Program Files (x86)\\CASIO\\ClassWiz Emulator Subscription\\fx-580VN X Emulator"; & ".\\fx-580VN X Emulator.exe"`;
    navigator.clipboard.writeText(cmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="vact-card rounded-3xl border vact-border max-w-4xl w-full max-h-[95vh] overflow-y-auto p-4 sm:p-6 shadow-2xl relative flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between pb-3 border-b vact-border mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-sm sm:text-base vact-text-primary tracking-tight">
                  CASIO <span className="text-blue-600">ClassWiz fx-580VN X</span>
                </span>
                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200">
                  Online Simulator
                </span>
              </div>
              <p className="text-[10px] sm:text-xs vact-text-muted font-medium">
                Tích hợp phím tắt V-ACT: Bảng giá trị hàm số, Giải phương trình & Tọa độ Oxyz
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={launchLocalCasioApp}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-blue-600 hover:bg-blue-700 text-white transition-all cursor-pointer shadow-xs active:scale-95"
              title="Khởi động ứng dụng Casio ClassWiz Emulator cài trên máy tính"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Mở App Máy Tính (PC)</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl vact-card border vact-border flex items-center justify-center vact-text-primary hover:bg-rose-50 hover:text-rose-600 cursor-pointer text-sm font-bold"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {launchStatus && (
          <div className="mb-3 p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-400 text-xs font-bold text-emerald-800 dark:text-emerald-200 flex items-center gap-2 animate-in fade-in">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{launchStatus}</span>
          </div>
        )}

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 ios-scroll no-scrollbar">
          {[
            { id: 'COMP', label: '1. Tính toán chuẩn (COMP)' },
            { id: 'TABLE', label: '8. Quét bảng f(x) (TABLE)' },
            { id: 'EQN', label: '9. Giải phương trình (EQN)' },
            { id: 'GUIDE', label: '📖 Hướng dẫn bấm máy V-ACT' },
          ].map(m => (
            <button
              key={m.id}
              onClick={() => setActiveMode(m.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                activeMode === m.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'vact-card border vact-border vact-text-secondary hover:vact-text-primary'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Main Body per Active Mode */}
        {activeMode === 'COMP' && (
          <div className="max-w-md mx-auto w-full bg-slate-900 text-slate-100 rounded-3xl p-4 sm:p-5 shadow-2xl border-4 border-slate-700">
            {/* Casio Brand Badge */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2 px-1">
              <span className="font-bold tracking-widest text-slate-200">CASIO</span>
              <span className="text-amber-400 font-bold">ClassWiz fx-580VN X</span>
            </div>

            {/* LCD Screen Display */}
            <div className="bg-[#b4c9b9] text-[#1a2e20] font-mono rounded-xl p-3 mb-4 shadow-inner border-2 border-slate-600">
              <div className="text-[10px] flex items-center justify-between font-bold opacity-75 mb-1">
                <span>{isShift ? 'S' : ''} {isAlpha ? 'A' : ''}</span>
                <span>Math ▲ ▼</span>
              </div>
              <div className="text-right text-xs opacity-75 truncate h-4 font-sans">
                {history || '\u00A0'}
              </div>
              <div className="text-right text-xl sm:text-2xl font-bold truncate tracking-wider">
                {display}
              </div>
            </div>

            {/* Keypad Grid */}
            <div className="space-y-2">
              {/* Function row 1 */}
              <div className="grid grid-cols-5 gap-1.5 text-xs">
                <button
                  onClick={() => setIsShift(!isShift)}
                  className={`py-2 rounded-lg font-black transition-all ${isShift ? 'bg-amber-500 text-black' : 'bg-slate-700 text-amber-400 hover:bg-slate-600'}`}
                >
                  SHIFT
                </button>
                <button
                  onClick={() => setIsAlpha(!isAlpha)}
                  className={`py-2 rounded-lg font-black transition-all ${isAlpha ? 'bg-rose-500 text-white' : 'bg-slate-700 text-rose-400 hover:bg-slate-600'}`}
                >
                  ALPHA
                </button>
                <button
                  onClick={() => handleKey('^')}
                  className="py-2 rounded-lg bg-slate-700 text-slate-200 hover:bg-slate-600 font-bold"
                >
                  xⁿ
                </button>
                <button
                  onClick={() => handleKey('DEL')}
                  className="py-2 rounded-lg bg-rose-700 text-white hover:bg-rose-600 font-black"
                >
                  DEL
                </button>
                <button
                  onClick={() => handleKey('AC')}
                  className="py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-500 font-black"
                >
                  AC
                </button>
              </div>

              {/* Function row 2: Math operators */}
              <div className="grid grid-cols-5 gap-1.5 text-xs">
                <button onClick={() => handleKey('√(')} className="py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold">√</button>
                <button onClick={() => handleKey('^2')} className="py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold">x²</button>
                <button onClick={() => handleKey('log(')} className="py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold">log</button>
                <button onClick={() => handleKey('ln(')} className="py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold">ln</button>
                <button onClick={() => handleKey('π')} className="py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold">π</button>
              </div>

              {/* Function row 3: Trig & Brackets */}
              <div className="grid grid-cols-5 gap-1.5 text-xs">
                <button onClick={() => handleKey('sin(')} className="py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold">sin</button>
                <button onClick={() => handleKey('cos(')} className="py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold">cos</button>
                <button onClick={() => handleKey('tan(')} className="py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold">tan</button>
                <button onClick={() => handleKey('(')} className="py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold">(</button>
                <button onClick={() => handleKey(')')} className="py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold">)</button>
              </div>

              {/* Numbers + Basic Math */}
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                {['7', '8', '9', '÷'].map(k => (
                  <button
                    key={k}
                    onClick={() => handleKey(k)}
                    className={`py-3 rounded-xl text-sm font-black transition-all ${k === '÷' ? 'bg-slate-700 text-amber-300' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                  >
                    {k}
                  </button>
                ))}
                {['4', '5', '6', '×'].map(k => (
                  <button
                    key={k}
                    onClick={() => handleKey(k)}
                    className={`py-3 rounded-xl text-sm font-black transition-all ${k === '×' ? 'bg-slate-700 text-amber-300' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                  >
                    {k}
                  </button>
                ))}
                {['1', '2', '3', '-'].map(k => (
                  <button
                    key={k}
                    onClick={() => handleKey(k)}
                    className={`py-3 rounded-xl text-sm font-black transition-all ${k === '-' ? 'bg-slate-700 text-amber-300' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                  >
                    {k}
                  </button>
                ))}
                {['0', '.', '=', '+'].map(k => (
                  <button
                    key={k}
                    onClick={() => handleKey(k)}
                    className={`py-3 rounded-xl text-sm font-black transition-all ${k === '=' ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/30' : k === '+' ? 'bg-slate-700 text-amber-300' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mode 8: Table Scan */}
        {activeMode === 'TABLE' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl vact-card-subtle border vact-border space-y-3">
              <div className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Casio Menu 8: Quét bảng giá trị hàm số f(x) tìm Max / Min</span>
              </div>

              <div>
                <label className="text-xs font-bold vact-text-primary block mb-1">
                  Nhập hàm số f(x) (Ví dụ: 2*x^2 - 3*x + 1 hoặc -x^3 + 3*x):
                </label>
                <input
                  type="text"
                  value={tableFx}
                  onChange={(e) => setTableFx(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-sm font-mono vact-card border vact-border vact-text-primary focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[11px] font-bold vact-text-muted block mb-1">Start (Bắt đầu):</label>
                  <input
                    type="text"
                    value={tableStart}
                    onChange={(e) => setTableStart(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl text-xs font-mono vact-card border vact-border vact-text-primary"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold vact-text-muted block mb-1">End (Kết thúc):</label>
                  <input
                    type="text"
                    value={tableEnd}
                    onChange={(e) => setTableEnd(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl text-xs font-mono vact-card border vact-border vact-text-primary"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold vact-text-muted block mb-1">Step (Bước nhảy):</label>
                  <input
                    type="text"
                    value={tableStep}
                    onChange={(e) => setTableStep(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl text-xs font-mono vact-card border vact-border vact-text-primary"
                  />
                </div>
              </div>

              <button
                onClick={runTableCalculation}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs cursor-pointer shadow-xs transition-all active:scale-[0.98]"
              >
                Bắt đầu quét bảng [=]
              </button>
            </div>

            {tableResults && (
              <div className="p-4 rounded-2xl vact-card border vact-border space-y-3">
                <div className="flex items-center justify-between text-xs font-black">
                  <span className="text-emerald-600 dark:text-emerald-400">
                    Max f(x) = {tableResults.maxVal} (tại x = {tableResults.maxX})
                  </span>
                  <span className="text-rose-600 dark:text-rose-400">
                    Min f(x) = {tableResults.minVal} (tại x = {tableResults.minX})
                  </span>
                </div>

                <div className="max-h-60 overflow-y-auto rounded-xl border vact-border">
                  <table className="w-full text-xs text-left">
                    <thead className="vact-card-subtle sticky top-0 border-b vact-border">
                      <tr>
                        <th className="p-2 font-black">STT</th>
                        <th className="p-2 font-black">x</th>
                        <th className="p-2 font-black">f(x)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableResults.rows.map((r, i) => (
                        <tr key={i} className="border-b vact-border last:border-b-0 hover:bg-blue-50/20">
                          <td className="p-2 font-bold vact-text-muted">{i + 1}</td>
                          <td className="p-2 font-mono font-bold">{r.x}</td>
                          <td className="p-2 font-mono font-black text-blue-600 dark:text-blue-400">{r.fx}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mode 9: Equation Solver */}
        {activeMode === 'EQN' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl vact-card-subtle border vact-border space-y-3">
              <div className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Casio Menu 9: Giải Phương Trình Bậc 2 (ax² + bx + c = 0)
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-xs font-bold block mb-1">Hệ số a:</label>
                  <input
                    type="text"
                    value={eqnA}
                    onChange={(e) => setEqnA(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-sm font-mono vact-card border vact-border"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold block mb-1">Hệ số b:</label>
                  <input
                    type="text"
                    value={eqnB}
                    onChange={(e) => setEqnB(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-sm font-mono vact-card border vact-border"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold block mb-1">Hệ số c:</label>
                  <input
                    type="text"
                    value={eqnC}
                    onChange={(e) => setEqnC(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-sm font-mono vact-card border vact-border"
                  />
                </div>
              </div>

              <button
                onClick={runEqnCalculation}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs cursor-pointer shadow-xs transition-all active:scale-[0.98]"
              >
                Giải nghiệm phương trình [=]
              </button>
            </div>

            {eqnResult && (
              <div className="p-4 rounded-2xl vact-card border vact-border space-y-2">
                <div className="text-xs font-black text-blue-600">Kết quả nghiệm:</div>
                <div className="font-mono text-sm sm:text-base font-black vact-text-primary">
                  {eqnResult.text}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mode GUIDE: Casio Desktop & Keypress Tutorials */}
        {activeMode === 'GUIDE' && (
          <div className="space-y-4 text-xs sm:text-sm">
            {/* Desktop App Direct Launcher Box */}
            <div className="p-4 sm:p-5 rounded-2xl border-2 border-dashed border-blue-500/40 bg-blue-50/30 dark:bg-blue-950/30 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="font-black text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" />
                  Đường Dẫn Ứng Dụng Casio Cài Trên Máy Tính Của Bạn
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                  Đã cài đặt
                </span>
              </div>

              <p className="vact-text-secondary font-medium leading-relaxed">
                Máy tính của bạn đã được cài sẵn bản quyền chính thức <strong>CASIO ClassWiz Emulator Subscription</strong> tại:
              </p>

              <div className="flex items-center justify-between bg-slate-900 text-slate-100 p-2.5 rounded-xl font-mono text-xs overflow-x-auto">
                <code>C:\Program Files (x86)\CASIO\ClassWiz Emulator Subscription\fx-580VN X Emulator\fx-580VN X Emulator.exe</code>
                <button
                  onClick={copyLocalCommand}
                  className="ml-2 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-bold flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCmd ? 'Đã copy lệnh' : 'Copy lệnh cd'}</span>
                </button>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={launchLocalCasioApp}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs cursor-pointer shadow-xs active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Bấm để mở App Casio trên máy tính ngay</span>
                </button>
              </div>
            </div>

            {/* Step-by-Step Keypress Guides */}
            <div className="space-y-3">
              <h4 className="font-black text-sm vact-text-primary">
                Top 4 Thao Tác Bấm Máy Casio 580 Cứu Điểm V-ACT:
              </h4>

              <div className="p-3.5 rounded-xl vact-card-subtle border vact-border space-y-1">
                <div className="font-black text-blue-600">1. Quét bảng tìm GTLN / GTNN (Max / Min):</div>
                <div className="font-mono text-xs font-bold vact-text-primary">
                  [MENU] → [8] → Nhập f(x) → [=] → Start: 0 → End: 5 → Step: 0.5 → [=]
                </div>
              </div>

              <div className="p-3.5 rounded-xl vact-card-subtle border vact-border space-y-1">
                <div className="font-black text-indigo-600">2. Giải hệ 3 phương trình 3 ẩn:</div>
                <div className="font-mono text-xs font-bold vact-text-primary">
                  [MENU] → [9] → [1] (Hệ PT) → [3] (Số lượng ẩn) → Nhập các hệ số
                </div>
              </div>

              <div className="p-3.5 rounded-xl vact-card-subtle border vact-border space-y-1">
                <div className="font-black text-purple-600">3. Tích có hướng 2 Vectơ không gian Oxyz:</div>
                <div className="font-mono text-xs font-bold vact-text-primary">
                  [MENU] → [5] (Vectơ) → [1] Tạo VctA → [OPTN] → [1] Tạo VctB → VctA × VctB
                </div>
              </div>

              <div className="p-3.5 rounded-xl vact-card-subtle border vact-border space-y-1">
                <div className="font-black text-emerald-600">4. Dò nghiệm nhanh SHIFT SOLVE:</div>
                <div className="font-mono text-xs font-bold vact-text-primary">
                  Nhập phương trình → [ALPHA] [CALC] (=) → [SHIFT] [CALC] (SOLVE) → [=]
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
