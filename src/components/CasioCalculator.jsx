import React, { useState, useEffect, useRef } from 'react';
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
  Cpu,
  Layers,
  ChevronDown,
  Maximize2,
  Minimize2,
  Table,
  Sigma,
  Binary,
  Grid3X3,
  Compass,
  BarChart2,
  HelpCircle
} from 'lucide-react';

export default function CasioCalculator({ isOpen, onClose }) {
  // Mode selection:
  // 1: COMP, 2: COMPLEX, 3: BASE-N, 4: MATRIX, 5: VECTOR, 
  // 6: STAT, 7: DIST, 8: TABLE, 9: EQN, A: INEQ, B: RATIO
  const [mode, setMode] = useState('1'); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShift, setIsShift] = useState(false);
  const [isAlpha, setIsAlpha] = useState(false);
  const [angleUnit, setAngleUnit] = useState('Deg'); // Deg | Rad
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  // Expression & Display state for Mode 1 (COMP)
  const [inputExpr, setInputExpr] = useState('');
  const [resultVal, setResultVal] = useState('0');
  const [historyList, setHistoryList] = useState([]);
  const [factResult, setFactResult] = useState('');
  const [copied, setCopied] = useState(false);

  // Memory Registers (A, B, C, D, E, F, X, Y, M, Ans)
  const [memRegisters, setMemRegisters] = useState({
    A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, X: 0, Y: 0, M: 0, Ans: 0
  });

  // Mode 2: Complex
  const [cplxExpr, setCplxExpr] = useState('3 + 4i');
  const [cplxResult, setCplxResult] = useState(null);

  // Mode 3: Base-N
  const [baseNVal, setBaseNVal] = useState('255');
  const [baseNType, setBaseNType] = useState('DEC'); // DEC, HEX, BIN, OCT

  // Mode 4: Matrix
  const [matrixA, setMatrixA] = useState([
    [1, 2, 3],
    [0, 1, 4],
    [5, 6, 0]
  ]);
  const [matrixResult, setMatrixResult] = useState(null);

  // Mode 5: Vector
  const [vctA, setVctA] = useState([1, 2, 3]);
  const [vctB, setVctB] = useState([4, -1, 2]);
  const [vctResult, setVctResult] = useState(null);

  // Mode 6: Statistics
  const [statData, setStatData] = useState('12, 15, 18, 22, 25, 29, 30, 32, 35, 40');
  const [statResult, setStatResult] = useState(null);

  // Mode 8: Table
  const [tableFx, setTableFx] = useState('x^2 - 4*x + 3');
  const [tableGx, setTableGx] = useState('2*x - 1');
  const [tableStart, setTableStart] = useState('0');
  const [tableEnd, setTableEnd] = useState('5');
  const [tableStep, setTableStep] = useState('0.5');
  const [tableRows, setTableRows] = useState(null);

  // Mode 9: Equations (Simul 2, 3, 4 unknowns & Poly 2, 3, 4 degree)
  const [eqnSubMode, setEqnSubMode] = useState('poly2'); // poly2, poly3, poly4, simul2, simul3, simul4
  const [polyCoeffs, setPolyCoeffs] = useState({ a: '1', b: '-5', c: '6', d: '0', e: '0' });
  const [simulCoeffs, setSimulCoeffs] = useState([
    ['2', '3', '8'],
    ['1', '-1', '1']
  ]);
  const [eqnResult, setEqnResult] = useState(null);

  // Desktop App status
  const [desktopStatus, setDesktopStatus] = useState(null);
  const [launchMessage, setLaunchMessage] = useState(null);

  useEffect(() => {
    if (isOpen) {
      // Check desktop emulator availability
      fetch('http://127.0.0.1:3000/api/casio/status')
        .then(res => res.json())
        .then(data => setDesktopStatus(data))
        .catch(() => setDesktopStatus({ installed: false }));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // --- COMP ENGINE EVALUATOR ---
  const evaluateMath = (expr) => {
    try {
      if (!expr || expr.trim() === '') return '0';
      let clean = expr
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, 'Math.PI')
        .replace(/e(?![a-zA-Z])/g, 'Math.E')
        .replace(/\^/g, '**')
        .replace(/Ans/g, String(memRegisters.Ans));

      // Handle trig with angleUnit
      const degFactor = angleUnit === 'Deg' ? '(Math.PI/180)*' : '';
      clean = clean
        .replace(/sin\(([^)]+)\)/g, `Math.sin(${degFactor}($1))`)
        .replace(/cos\(([^)]+)\)/g, `Math.cos(${degFactor}($1))`)
        .replace(/tan\(([^)]+)\)/g, `Math.tan(${degFactor}($1))`)
        .replace(/ln\(/g, 'Math.log(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/√\(/g, 'Math.sqrt(');

      // Handle factorial x!
      clean = clean.replace(/(\d+)!/g, (match, n) => {
        let val = 1;
        for (let i = 2; i <= parseInt(n); i++) val *= i;
        return String(val);
      });

      // Factorial helper
      const res = Function(`"use strict"; return (${clean})`)();
      if (typeof res === 'number') {
        if (isNaN(res)) return 'Math ERROR';
        if (!isFinite(res)) return 'Infinity';
        // Round cleanly to 10 decimal digits
        return String(Math.round(res * 1e10) / 1e10);
      }
      return String(res);
    } catch (err) {
      return 'Syntax ERROR';
    }
  };

  const handleKeyClick = (key) => {
    setFactResult('');

    if (key === 'ON') {
      setInputExpr('');
      setResultVal('0');
      setIsShift(false);
      setIsAlpha(false);
      setIsMenuOpen(false);
      return;
    }

    if (key === 'AC') {
      setInputExpr('');
      setResultVal('0');
      setIsShift(false);
      setIsAlpha(false);
      return;
    }

    if (key === 'DEL') {
      setInputExpr(prev => prev.slice(0, -1));
      return;
    }

    if (key === 'SHIFT') {
      setIsShift(prev => !prev);
      setIsAlpha(false);
      return;
    }

    if (key === 'ALPHA') {
      setIsAlpha(prev => !prev);
      setIsShift(false);
      return;
    }

    if (key === 'MENU') {
      setIsMenuOpen(prev => !prev);
      return;
    }

    // Key handlers based on SHIFT / ALPHA state
    if (isShift) {
      setIsShift(false);
      if (key === 'AC') {
        // OFF
        onClose();
        return;
      }
      if (key === 'FACT' || key === '(-)') {
        // Prime factorization (FACT)
        const val = parseInt(resultVal, 10);
        if (!isNaN(val) && val > 1 && val < 10000000) {
          const factors = [];
          let d = 2;
          let temp = val;
          while (temp >= d * d) {
            if (temp % d === 0) {
              factors.push(d);
              temp /= d;
            } else {
              d++;
            }
          }
          factors.push(temp);
          // Group exponents
          const countMap = {};
          factors.forEach(f => countMap[f] = (countMap[f] || 0) + 1);
          const factStr = Object.entries(countMap)
            .map(([prime, pwr]) => pwr > 1 ? `${prime}^${pwr}` : `${prime}`)
            .join(' × ');
          setFactResult(`${val} = ${factStr}`);
        }
        return;
      }
      if (key === 'x^2') {
        setInputExpr(prev => prev + '√(');
        return;
      }
      if (key === 'x^□') {
        setInputExpr(prev => prev + '^(1/');
        return;
      }
      if (key === 'ln') {
        setInputExpr(prev => prev + 'e^(');
        return;
      }
      if (key === 'log') {
        setInputExpr(prev => prev + '10^(');
        return;
      }
      if (key === 'sin') {
        setInputExpr(prev => prev + 'sin⁻¹(');
        return;
      }
      if (key === 'cos') {
        setInputExpr(prev => prev + 'cos⁻¹(');
        return;
      }
      if (key === 'tan') {
        setInputExpr(prev => prev + 'tan⁻¹(');
        return;
      }
      if (key === '×') {
        // nPr
        setInputExpr(prev => prev + 'P');
        return;
      }
      if (key === '÷') {
        // nCr
        setInputExpr(prev => prev + 'C');
        return;
      }
      if (key === '×10^x') {
        setInputExpr(prev => prev + 'π');
        return;
      }
      if (key === 'Ans') {
        setInputExpr(prev => prev + String(memRegisters.Ans));
        return;
      }
    }

    if (isAlpha) {
      setIsAlpha(false);
      if (key === ')') {
        setInputExpr(prev => prev + 'x');
        return;
      }
      if (key === 'S<=>D') {
        setInputExpr(prev => prev + 'y');
        return;
      }
      if (key === 'CALC') {
        setInputExpr(prev => prev + '=');
        return;
      }
      if (key === 'M+') {
        setInputExpr(prev => prev + 'M');
        return;
      }
      if (['A', 'B', 'C', 'D', 'E', 'F'].includes(key)) {
        setInputExpr(prev => prev + key);
        return;
      }
    }

    if (key === '=') {
      const res = evaluateMath(inputExpr);
      setResultVal(res);
      if (res !== 'Syntax ERROR' && res !== 'Math ERROR') {
        setMemRegisters(prev => ({ ...prev, Ans: parseFloat(res) || 0 }));
        setHistoryList(prev => [{ expr: inputExpr, val: res }, ...prev.slice(0, 15)]);
      }
      return;
    }

    if (key === 'S<=>D') {
      // Toggle between decimal and fraction if decimal has decimal point
      const num = parseFloat(resultVal);
      if (!isNaN(num) && resultVal.includes('.')) {
        // Simple decimal to fraction approximation
        const tolerance = 1.0E-6;
        let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
        let b = num;
        do {
          let a = Math.floor(b);
          let aux = h1; h1 = a * h1 + h2; h2 = aux;
          aux = k1; k1 = a * k1 + k2; k2 = aux;
          b = 1 / (b - a);
        } while (Math.abs(num - h1 / k1) > num * tolerance);
        setFactResult(`${h1} / ${k1}`);
      }
      return;
    }

    // Default character append
    setInputExpr(prev => prev + key);
  };

  // Launch Desktop Casio fx-580VN X Emulator
  const handleLaunchDesktop = async () => {
    try {
      setLaunchMessage('Đang kết nối và khởi động fx-580VN X Emulator.exe...');
      const res = await fetch('http://127.0.0.1:3000/api/casio/launch', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setLaunchMessage('Đã mở ứng dụng CASIO fx-580VN X ClassWiz Emulator trên màn hình PC!');
      } else {
        setLaunchMessage(`Chưa thể mở tự động: ${data.message || 'Kiểm tra đường dẫn file'}`);
      }
    } catch (e) {
      setLaunchMessage('Lỗi kết nối máy chủ cục bộ.');
    }
  };

  // Mode 8: Table calculation
  const calculateTable = () => {
    try {
      const start = parseFloat(tableStart);
      const end = parseFloat(tableEnd);
      const step = parseFloat(tableStep);
      if (step <= 0 || start > end) return;

      const rows = [];
      const cleanF = tableFx.replace(/x/g, '($x)').replace(/\^/g, '**');
      const cleanG = tableGx.replace(/x/g, '($x)').replace(/\^/g, '**');

      for (let x = start; x <= end + 0.0001; x += step) {
        const roundedX = Math.round(x * 1000) / 1000;
        let valF = 'ERROR', valG = 'ERROR';
        try {
          const fnF = Function('$x', `"use strict"; return (${cleanF})`);
          const rF = fnF(roundedX);
          valF = Math.round(rF * 10000) / 10000;
        } catch {}
        try {
          const fnG = Function('$x', `"use strict"; return (${cleanG})`);
          const rG = fnG(roundedX);
          valG = Math.round(rG * 10000) / 10000;
        } catch {}

        rows.push({ x: roundedX, fx: valF, gx: valG });
      }
      setTableRows(rows);
    } catch {
      alert('Lỗi hàm số trong bảng Table.');
    }
  };

  // Mode 9: Equations calculation
  const solveEquation = () => {
    if (eqnSubMode === 'poly2') {
      const a = parseFloat(polyCoeffs.a);
      const b = parseFloat(polyCoeffs.b);
      const c = parseFloat(polyCoeffs.c);
      if (a === 0) {
        setEqnResult({ error: 'Hệ số a phải khác 0' });
        return;
      }
      const delta = b * b - 4 * a * c;
      const xv = -b / (2 * a);
      const yv = -delta / (4 * a);

      if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        setEqnResult({
          type: '2 nghiệm thực phân biệt',
          x1: Math.round(x1 * 100000) / 100000,
          x2: Math.round(x2 * 100000) / 100000,
          vertex: { x: Math.round(xv * 100000) / 100000, y: Math.round(yv * 100000) / 100000 }
        });
      } else if (delta === 0) {
        setEqnResult({
          type: 'Nghiệm kép',
          x1: Math.round(xv * 100000) / 100000,
          vertex: { x: Math.round(xv * 100000) / 100000, y: Math.round(yv * 100000) / 100000 }
        });
      } else {
        const real = -b / (2 * a);
        const imag = Math.sqrt(-delta) / (2 * a);
        setEqnResult({
          type: '2 nghiệm phức liên hợp',
          x1: `${Math.round(real * 10000) / 10000} + ${Math.round(imag * 10000) / 10000}i`,
          x2: `${Math.round(real * 10000) / 10000} - ${Math.round(imag * 10000) / 10000}i`,
          vertex: { x: Math.round(xv * 100000) / 100000, y: Math.round(yv * 100000) / 100000 }
        });
      }
    } else if (eqnSubMode === 'simul2') {
      const a1 = parseFloat(simulCoeffs[0][0]), b1 = parseFloat(simulCoeffs[0][1]), c1 = parseFloat(simulCoeffs[0][2]);
      const a2 = parseFloat(simulCoeffs[1][0]), b2 = parseFloat(simulCoeffs[1][1]), c2 = parseFloat(simulCoeffs[1][2]);
      const D = a1 * b2 - a2 * b1;
      const Dx = c1 * b2 - c2 * b1;
      const Dy = a1 * c2 - a2 * c1;
      if (D === 0) {
        setEqnResult({ type: Dx === 0 && Dy === 0 ? 'Vô số nghiệm' : 'Vô nghiệm' });
      } else {
        setEqnResult({
          type: 'Hệ phương trình bậc nhất 2 ẩn',
          x: Math.round((Dx / D) * 100000) / 100000,
          y: Math.round((Dy / D) * 100000) / 100000
        });
      }
    }
  };

  // Mode 5: Vector Cross Product & Dot Product
  const calculateVectors = () => {
    const ax = vctA[0], ay = vctA[1], az = vctA[2];
    const bx = vctB[0], by = vctB[1], bz = vctB[2];

    const dot = ax * bx + ay * by + az * bz;
    const cross = [
      ay * bz - az * by,
      az * bx - ax * bz,
      ax * by - ay * bx
    ];
    const magA = Math.sqrt(ax * ax + ay * ay + az * az);
    const magB = Math.sqrt(bx * bx + by * by + bz * bz);
    const cosAngle = dot / (magA * magB);
    const angleDeg = Math.acos(Math.max(-1, Math.min(1, cosAngle))) * (180 / Math.PI);

    setVctResult({
      dot: Math.round(dot * 10000) / 10000,
      cross,
      magA: Math.round(magA * 10000) / 10000,
      magB: Math.round(magB * 10000) / 10000,
      angleDeg: Math.round(angleDeg * 100) / 100
    });
  };

  // Mode 6: Statistics
  const calculateStat = () => {
    try {
      const nums = statData.split(/[,;\s]+/).map(s => parseFloat(s)).filter(n => !isNaN(n));
      if (nums.length === 0) return;
      const n = nums.length;
      const sum = nums.reduce((a, b) => a + b, 0);
      const mean = sum / n;
      const sumSq = nums.reduce((a, b) => a + b * b, 0);
      const variance = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / n;
      const sampleVar = nums.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (n - 1);
      const sorted = [...nums].sort((a, b) => a - b);
      const min = sorted[0];
      const max = sorted[sorted.length - 1];
      const med = sorted.length % 2 === 0 
        ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2 
        : sorted[Math.floor(sorted.length / 2)];

      setStatResult({
        n,
        mean: Math.round(mean * 10000) / 10000,
        sum: Math.round(sum * 10000) / 10000,
        stdDev: Math.round(Math.sqrt(variance) * 10000) / 10000,
        sampleStdDev: Math.round(Math.sqrt(sampleVar) * 10000) / 10000,
        min,
        max,
        median: med
      });
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto">
      <div 
        className={`bg-slate-900 border-2 border-slate-700 text-white rounded-3xl shadow-2xl transition-all duration-300 flex flex-col overflow-hidden ${
          isFullScreen 
            ? 'w-full h-full max-w-none rounded-none' 
            : 'w-full max-w-4xl max-h-[92vh]'
        }`}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white shadow-md shadow-blue-500/30">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-sm tracking-wide text-white">CASIO ClassWiz</span>
                <span className="text-[11px] font-black px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  fx-580VN X
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                  GDPT 2018
                </span>
              </div>
              <p className="text-[10px] text-slate-400">Giả lập máy tính khoa học cao cấp cho kỳ thi V-ACT ĐHQG-HCM</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Launch Real Desktop App Button */}
            <button
              onClick={handleLaunchDesktop}
              className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              title="Khởi động ứng dụng CASIO fx-580VN X Emulator trên Windows"
            >
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Mở App Máy Tính (PC)</span>
            </button>

            {/* Toggle Full Screen */}
            <button
              onClick={() => setIsFullScreen(prev => !prev)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title="Toàn màn hình"
            >
              {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 transition-colors cursor-pointer"
              title="Đóng giả lập"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-950/60 border-b border-slate-800 overflow-x-auto no-scrollbar">
          {[
            { id: '1', label: '1: COMP', icon: Calculator, desc: 'Tính toán chuẩn' },
            { id: '2', label: '2: COMPLEX', icon: Sparkles, desc: 'Số phức' },
            { id: '3', label: '3: BASE-N', icon: Binary, desc: 'Cơ số' },
            { id: '4', label: '4: MATRIX', icon: Grid3X3, desc: 'Ma trận' },
            { id: '5', label: '5: VECTOR', icon: Compass, desc: 'Vectơ Oxyz' },
            { id: '6', label: '6: STAT', icon: BarChart2, desc: 'Thống kê' },
            { id: '8', label: '8: TABLE', icon: Table, desc: 'Bảng giá trị f(x)' },
            { id: '9', label: '9: EQN', icon: Sigma, desc: 'Hệ & Phương trình' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setMode(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                mode === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Notification Status Banner */}
        {launchMessage && (
          <div className="px-4 py-2 bg-blue-950/70 border-b border-blue-800 text-blue-200 text-xs font-bold flex items-center justify-between">
            <span>{launchMessage}</span>
            <button onClick={() => setLaunchMessage(null)} className="text-blue-300 hover:text-white">✕</button>
          </div>
        )}

        {/* Main Work Area: Genuine ClassWiz Body & Layout */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Authentic Casio Physical Calculator Frame */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full max-w-[420px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[32px] p-4 sm:p-5 border-2 border-slate-700 shadow-2xl relative">
              
              {/* Solar Panel & Brand Banner */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div>
                  <div className="text-base font-black tracking-wider text-slate-100 flex items-center gap-1">
                    <span>CASIO</span>
                    <span className="text-[10px] font-bold text-slate-400">CLASSWIZ</span>
                  </div>
                  <div className="text-[11px] font-black text-blue-400 tracking-wide">
                    fx-580VN X
                  </div>
                </div>

                {/* Simulated Solar Panel */}
                <div className="w-24 h-6 rounded-md bg-gradient-to-r from-amber-950/80 via-amber-900/90 to-amber-950/80 border border-amber-900/60 shadow-inner flex items-center justify-around px-1">
                  <div className="w-0.5 h-full bg-black/40"></div>
                  <div className="w-0.5 h-full bg-black/40"></div>
                  <div className="w-0.5 h-full bg-black/40"></div>
                </div>
              </div>

              {/* LCD Dot Matrix Screen (Authentic 192x63 look) */}
              <div className="bg-[#b7c4a8] text-[#1a2e1e] rounded-xl p-3 sm:p-3.5 border-4 border-slate-800 shadow-inner font-mono relative overflow-hidden min-h-[105px] flex flex-col justify-between mb-4">
                {/* LCD Top Status Indicators */}
                <div className="flex items-center justify-between text-[10px] font-black tracking-tight border-b border-[#a3b194] pb-1 select-none">
                  <div className="flex items-center gap-1.5">
                    {isShift && <span className="px-1 bg-[#1a2e1e] text-[#b7c4a8] rounded-xs font-black">S</span>}
                    {isAlpha && <span className="px-1 bg-[#1a2e1e] text-[#b7c4a8] rounded-xs font-black">A</span>}
                    <span className="font-bold">{mode === '1' ? 'COMP' : mode === '8' ? 'TABLE' : mode === '9' ? 'EQN' : `M:${mode}`}</span>
                    <span className="font-bold">[{angleUnit}]</span>
                    <span className="font-bold">[Math]</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px]">
                    <span>▲</span>
                    <span>▼</span>
                  </div>
                </div>

                {/* LCD Expression Line (Input) */}
                <div className="text-right text-xs sm:text-sm font-bold min-h-[20px] tracking-wide break-all py-1 select-text">
                  {inputExpr || (mode === '8' ? `f(x)=${tableFx}` : mode === '9' ? 'a·x² + b·x + c = 0' : ' ')}
                </div>

                {/* Fact Result (if active) */}
                {factResult && (
                  <div className="text-left text-[11px] font-black text-emerald-900 bg-emerald-100/60 px-1.5 py-0.5 rounded">
                    {factResult}
                  </div>
                )}

                {/* LCD Answer Line (Result) */}
                <div className="text-right text-lg sm:text-2xl font-black tracking-wider overflow-x-auto select-all">
                  {resultVal}
                </div>
              </div>

              {/* Keypad Grid */}
              <div className="space-y-2">
                {/* Function Top Row 1: SHIFT, ALPHA, ARROWS, OPTN, CALC, ON */}
                <div className="grid grid-cols-6 gap-1.5 items-center">
                  <button
                    onClick={() => handleKeyClick('SHIFT')}
                    className={`py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      isShift ? 'bg-amber-400 text-black shadow-md' : 'bg-slate-700 text-amber-300 hover:bg-slate-600'
                    }`}
                  >
                    SHIFT
                  </button>

                  <button
                    onClick={() => handleKeyClick('ALPHA')}
                    className={`py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      isAlpha ? 'bg-rose-500 text-white shadow-md' : 'bg-slate-700 text-rose-300 hover:bg-slate-600'
                    }`}
                  >
                    ALPHA
                  </button>

                  <button
                    onClick={() => handleKeyClick('OPTN')}
                    className="py-2 rounded-lg text-xs font-black bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors cursor-pointer"
                  >
                    OPTN
                  </button>

                  <button
                    onClick={() => handleKeyClick('CALC')}
                    className="py-2 rounded-lg text-xs font-black bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors cursor-pointer"
                  >
                    CALC
                  </button>

                  <button
                    onClick={() => handleKeyClick('MENU')}
                    className="py-2 rounded-lg text-xs font-black bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors cursor-pointer"
                  >
                    MENU
                  </button>

                  <button
                    onClick={() => handleKeyClick('ON')}
                    className="py-2 rounded-lg text-xs font-black bg-slate-700 text-slate-100 hover:bg-slate-600 transition-colors cursor-pointer"
                  >
                    ON
                  </button>
                </div>

                {/* Math Row 2: x^-1, x^2, x^□, log, ln */}
                <div className="grid grid-cols-5 gap-1.5">
                  {[
                    { label: 'x⁻¹', shift: 'x!', val: '^-1' },
                    { label: 'x²', shift: '√', val: '^2' },
                    { label: 'x^□', shift: 'ⁿ√', val: '^' },
                    { label: 'log', shift: '10ˣ', val: 'log(' },
                    { label: 'ln', shift: 'eˣ', val: 'ln(' }
                  ].map((btn, bIdx) => (
                    <button
                      key={bIdx}
                      onClick={() => handleKeyClick(btn.val)}
                      className="py-2 rounded-lg text-xs font-black bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors cursor-pointer flex flex-col items-center justify-center leading-none"
                    >
                      <span className="text-[9px] text-amber-300 font-bold mb-0.5">{btn.shift}</span>
                      <span>{btn.label}</span>
                    </button>
                  ))}
                </div>

                {/* Math Row 3: (-), °'", x, sin, cos, tan */}
                <div className="grid grid-cols-6 gap-1.5">
                  {[
                    { label: '(-)', val: '-' },
                    { label: '° \' "', val: '°' },
                    { label: 'x', val: 'x' },
                    { label: 'sin', val: 'sin(' },
                    { label: 'cos', val: 'cos(' },
                    { label: 'tan', val: 'tan(' }
                  ].map((btn, bIdx) => (
                    <button
                      key={bIdx}
                      onClick={() => handleKeyClick(btn.val)}
                      className="py-2 rounded-lg text-xs font-black bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors cursor-pointer"
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>

                {/* Math Row 4: STO, ENG, (, ), S<=>D, M+ */}
                <div className="grid grid-cols-6 gap-1.5">
                  {[
                    { label: 'STO', val: 'STO' },
                    { label: 'ENG', val: 'ENG' },
                    { label: '(', val: '(' },
                    { label: ')', val: ')' },
                    { label: 'S⇔D', val: 'S<=>D' },
                    { label: 'M+', val: 'M+' }
                  ].map((btn, bIdx) => (
                    <button
                      key={bIdx}
                      onClick={() => handleKeyClick(btn.val)}
                      className="py-2 rounded-lg text-xs font-black bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors cursor-pointer"
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>

                {/* Numpad Block: 7 8 9 DEL AC */}
                <div className="grid grid-cols-5 gap-1.5 pt-1">
                  <button onClick={() => handleKeyClick('7')} className="py-3 rounded-xl text-sm font-black bg-slate-800 text-white hover:bg-slate-700 shadow-sm cursor-pointer">7</button>
                  <button onClick={() => handleKeyClick('8')} className="py-3 rounded-xl text-sm font-black bg-slate-800 text-white hover:bg-slate-700 shadow-sm cursor-pointer">8</button>
                  <button onClick={() => handleKeyClick('9')} className="py-3 rounded-xl text-sm font-black bg-slate-800 text-white hover:bg-slate-700 shadow-sm cursor-pointer">9</button>
                  <button onClick={() => handleKeyClick('DEL')} className="py-3 rounded-xl text-xs font-black bg-rose-700 text-white hover:bg-rose-600 shadow-sm cursor-pointer">DEL</button>
                  <button onClick={() => handleKeyClick('AC')} className="py-3 rounded-xl text-xs font-black bg-rose-600 text-white hover:bg-rose-500 shadow-sm cursor-pointer">AC</button>
                </div>

                {/* Numpad Block: 4 5 6 × ÷ */}
                <div className="grid grid-cols-5 gap-1.5">
                  <button onClick={() => handleKeyClick('4')} className="py-3 rounded-xl text-sm font-black bg-slate-800 text-white hover:bg-slate-700 shadow-sm cursor-pointer">4</button>
                  <button onClick={() => handleKeyClick('5')} className="py-3 rounded-xl text-sm font-black bg-slate-800 text-white hover:bg-slate-700 shadow-sm cursor-pointer">5</button>
                  <button onClick={() => handleKeyClick('6')} className="py-3 rounded-xl text-sm font-black bg-slate-800 text-white hover:bg-slate-700 shadow-sm cursor-pointer">6</button>
                  <button onClick={() => handleKeyClick('×')} className="py-3 rounded-xl text-sm font-black bg-slate-700 text-slate-100 hover:bg-slate-600 shadow-sm cursor-pointer">×</button>
                  <button onClick={() => handleKeyClick('÷')} className="py-3 rounded-xl text-sm font-black bg-slate-700 text-slate-100 hover:bg-slate-600 shadow-sm cursor-pointer">÷</button>
                </div>

                {/* Numpad Block: 1 2 3 + - */}
                <div className="grid grid-cols-5 gap-1.5">
                  <button onClick={() => handleKeyClick('1')} className="py-3 rounded-xl text-sm font-black bg-slate-800 text-white hover:bg-slate-700 shadow-sm cursor-pointer">1</button>
                  <button onClick={() => handleKeyClick('2')} className="py-3 rounded-xl text-sm font-black bg-slate-800 text-white hover:bg-slate-700 shadow-sm cursor-pointer">2</button>
                  <button onClick={() => handleKeyClick('3')} className="py-3 rounded-xl text-sm font-black bg-slate-800 text-white hover:bg-slate-700 shadow-sm cursor-pointer">3</button>
                  <button onClick={() => handleKeyClick('+')} className="py-3 rounded-xl text-sm font-black bg-slate-700 text-slate-100 hover:bg-slate-600 shadow-sm cursor-pointer">+</button>
                  <button onClick={() => handleKeyClick('-')} className="py-3 rounded-xl text-sm font-black bg-slate-700 text-slate-100 hover:bg-slate-600 shadow-sm cursor-pointer">-</button>
                </div>

                {/* Numpad Block: 0 . ×10^x Ans = */}
                <div className="grid grid-cols-5 gap-1.5">
                  <button onClick={() => handleKeyClick('0')} className="py-3 rounded-xl text-sm font-black bg-slate-800 text-white hover:bg-slate-700 shadow-sm cursor-pointer">0</button>
                  <button onClick={() => handleKeyClick('.')} className="py-3 rounded-xl text-sm font-black bg-slate-800 text-white hover:bg-slate-700 shadow-sm cursor-pointer">.</button>
                  <button onClick={() => handleKeyClick('×10^')} className="py-3 rounded-xl text-xs font-black bg-slate-700 text-slate-100 hover:bg-slate-600 shadow-sm cursor-pointer">×10ˣ</button>
                  <button onClick={() => handleKeyClick('Ans')} className="py-3 rounded-xl text-xs font-black bg-slate-700 text-slate-100 hover:bg-slate-600 shadow-sm cursor-pointer">Ans</button>
                  <button onClick={() => handleKeyClick('=')} className="py-3 rounded-xl text-base font-black bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/30 cursor-pointer">=</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Advanced Function Workspace (Mode 8 Table, Mode 9 Eqn, Vector, History) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Mode 8: TABLE WORKBENCH */}
            {mode === '8' && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-blue-400 flex items-center gap-2">
                    <Table className="w-4 h-4" />
                    <span>Chế Độ Bảng Giá Trị (Menu 8 - Table)</span>
                  </h3>
                  <button
                    onClick={calculateTable}
                    className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-black cursor-pointer shadow-sm"
                  >
                    Quét Bảng
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  <div>
                    <label className="text-[11px] font-bold text-slate-400">Hàm số f(x):</label>
                    <input
                      type="text"
                      value={tableFx}
                      onChange={(e) => setTableFx(e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-400">Hàm số g(x) (Tùy chọn):</label>
                    <input
                      type="text"
                      value={tableGx}
                      onChange={(e) => setTableGx(e.target.value)}
                      className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400">Start:</label>
                      <input
                        type="text"
                        value={tableStart}
                        onChange={(e) => setTableStart(e.target.value)}
                        className="w-full mt-1 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-center font-mono font-bold text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400">End:</label>
                      <input
                        type="text"
                        value={tableEnd}
                        onChange={(e) => setTableEnd(e.target.value)}
                        className="w-full mt-1 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-center font-mono font-bold text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400">Step:</label>
                      <input
                        type="text"
                        value={tableStep}
                        onChange={(e) => setTableStep(e.target.value)}
                        className="w-full mt-1 px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-center font-mono font-bold text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Table Result Display */}
                {tableRows && (
                  <div className="overflow-x-auto max-h-[220px] rounded-xl border border-slate-800">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-900 text-slate-300 border-b border-slate-800">
                        <tr>
                          <th className="p-2 text-center">x</th>
                          <th className="p-2 text-blue-400">f(x)</th>
                          <th className="p-2 text-amber-400">g(x)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableRows.map((r, rIdx) => (
                          <tr key={rIdx} className="border-b border-slate-800/60 hover:bg-slate-800/40">
                            <td className="p-2 text-center font-bold text-slate-300">{r.x}</td>
                            <td className="p-2 font-bold text-blue-300">{r.fx}</td>
                            <td className="p-2 font-bold text-amber-300">{r.gx}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Mode 9: EQUATIONS & POLYNOMIALS */}
            {mode === '9' && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-purple-400 flex items-center gap-2">
                    <Sigma className="w-4 h-4" />
                    <span>Chế Độ Phương Trình & Hệ (Menu 9 - EQN)</span>
                  </h3>
                  <button
                    onClick={solveEquation}
                    className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-black cursor-pointer shadow-sm"
                  >
                    Giải Nghiệm
                  </button>
                </div>

                {/* Submode Selector */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => { setEqnSubMode('poly2'); setEqnResult(null); }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer ${eqnSubMode === 'poly2' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                  >
                    Bậc 2 (ax²+bx+c=0)
                  </button>
                  <button
                    onClick={() => { setEqnSubMode('simul2'); setEqnResult(null); }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer ${eqnSubMode === 'simul2' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                  >
                    Hệ 2 ẩn
                  </button>
                </div>

                {eqnSubMode === 'poly2' && (
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400">Hệ số a:</label>
                      <input
                        type="text"
                        value={polyCoeffs.a}
                        onChange={(e) => setPolyCoeffs(prev => ({ ...prev, a: e.target.value }))}
                        className="w-full mt-1 px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-center font-mono text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400">Hệ số b:</label>
                      <input
                        type="text"
                        value={polyCoeffs.b}
                        onChange={(e) => setPolyCoeffs(prev => ({ ...prev, b: e.target.value }))}
                        className="w-full mt-1 px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-center font-mono text-xs font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400">Hệ số c:</label>
                      <input
                        type="text"
                        value={polyCoeffs.c}
                        onChange={(e) => setPolyCoeffs(prev => ({ ...prev, c: e.target.value }))}
                        className="w-full mt-1 px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-center font-mono text-xs font-bold"
                      />
                    </div>
                  </div>
                )}

                {eqnResult && (
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/60 text-xs space-y-1.5 font-mono">
                    <div className="font-black text-purple-300">{eqnResult.type}</div>
                    {eqnResult.x1 !== undefined && <div>x₁ = <span className="text-white font-bold">{eqnResult.x1}</span></div>}
                    {eqnResult.x2 !== undefined && <div>x₂ = <span className="text-white font-bold">{eqnResult.x2}</span></div>}
                    {eqnResult.x !== undefined && <div>x = <span className="text-white font-bold">{eqnResult.x}</span></div>}
                    {eqnResult.y !== undefined && <div>y = <span className="text-white font-bold">{eqnResult.y}</span></div>}
                    {eqnResult.vertex && (
                      <div className="text-[11px] text-slate-400 pt-1 border-t border-purple-800/40">
                        Đỉnh parabol: X-Value = {eqnResult.vertex.x}, Y-Value = {eqnResult.vertex.y}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Mode 5: VECTOR OXYZ WORKBENCH */}
            {mode === '5' && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-emerald-400 flex items-center gap-2">
                    <Compass className="w-4 h-4" />
                    <span>Toán Vectơ Không Gian Oxyz (Menu 5 - Vector)</span>
                  </h3>
                  <button
                    onClick={calculateVectors}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black cursor-pointer shadow-sm"
                  >
                    Tính Toán
                  </button>
                </div>

                <div className="space-y-2">
                  <div>
                    <label className="text-[11px] text-slate-400 font-bold">Vectơ A (x, y, z):</label>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      <input type="number" value={vctA[0]} onChange={(e) => setVctA([parseFloat(e.target.value) || 0, vctA[1], vctA[2]])} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs" />
                      <input type="number" value={vctA[1]} onChange={(e) => setVctA([vctA[0], parseFloat(e.target.value) || 0, vctA[2]])} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs" />
                      <input type="number" value={vctA[2]} onChange={(e) => setVctA([vctA[0], vctA[1], parseFloat(e.target.value) || 0])} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 font-bold">Vectơ B (x, y, z):</label>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      <input type="number" value={vctB[0]} onChange={(e) => setVctB([parseFloat(e.target.value) || 0, vctB[1], vctB[2]])} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs" />
                      <input type="number" value={vctB[1]} onChange={(e) => setVctB([vctB[0], parseFloat(e.target.value) || 0, vctB[2]])} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs" />
                      <input type="number" value={vctB[2]} onChange={(e) => setVctB([vctB[0], vctB[1], parseFloat(e.target.value) || 0])} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs" />
                    </div>
                  </div>
                </div>

                {vctResult && (
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs font-mono space-y-1">
                    <div>Tích có hướng [A × B]: <span className="text-emerald-300 font-bold">({vctResult.cross.join(', ')})</span></div>
                    <div>Tích vô hướng A·B: <span className="text-white font-bold">{vctResult.dot}</span></div>
                    <div>Độ dài |A|: {vctResult.magA} • |B|: {vctResult.magB}</div>
                    <div>Góc giữa A và B: <span className="text-amber-300 font-bold">{vctResult.angleDeg}°</span></div>
                  </div>
                )}
              </div>
            )}

            {/* Mode 6: STATISTICS WORKBENCH */}
            {mode === '6' && (
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-cyan-400 flex items-center gap-2">
                    <BarChart2 className="w-4 h-4" />
                    <span>Thống Kê 1 Biến (Menu 6 - 1-Var)</span>
                  </h3>
                  <button
                    onClick={calculateStat}
                    className="px-3 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-black cursor-pointer shadow-sm"
                  >
                    Tính Số Đặc Trưng
                  </button>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Nhập chuỗi số liệu (ngăn cách bởi dấu phẩy):</label>
                  <textarea
                    rows={2}
                    value={statData}
                    onChange={(e) => setStatData(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-white focus:outline-none"
                  />
                </div>

                {statResult && (
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/60 text-xs font-mono grid grid-cols-2 gap-2">
                    <div>Cỡ mẫu n: <span className="text-white font-bold">{statResult.n}</span></div>
                    <div>Trung bình x̄: <span className="text-cyan-300 font-bold">{statResult.mean}</span></div>
                    <div>Độ lệch chuẩn σ: <span className="text-white font-bold">{statResult.stdDev}</span></div>
                    <div>Độ lệch hiệu chỉnh s: <span className="text-white font-bold">{statResult.sampleStdDev}</span></div>
                    <div>Min = {statResult.min}</div>
                    <div>Max = {statResult.max}</div>
                    <div className="col-span-2">Trung vị Med: <span className="text-amber-300 font-bold">{statResult.median}</span></div>
                  </div>
                )}
              </div>
            )}

            {/* Calculation History Log */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-slate-300 flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-blue-400" />
                  <span>Lịch Sử Phép Tính Gần Đây</span>
                </h4>
                {historyList.length > 0 && (
                  <button
                    onClick={() => setHistoryList([])}
                    className="text-[10px] text-slate-500 hover:text-rose-400 cursor-pointer"
                  >
                    Xóa tất cả
                  </button>
                )}
              </div>

              <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1 text-xs font-mono">
                {historyList.length === 0 ? (
                  <p className="text-[11px] text-slate-500 py-2 text-center">Chưa có phép tính nào trong phiên này.</p>
                ) : (
                  historyList.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setInputExpr(item.expr);
                        setResultVal(item.val);
                      }}
                      className="p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800/80 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span className="text-slate-400 truncate max-w-[180px]">{item.expr}</span>
                      <span className="text-blue-400 font-bold">{item.val}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Real PC App Integration Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-900/50 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-black text-white">ClassWiz Emulator Trên PC</div>
                  <div className="text-[11px] text-slate-400">
                    {desktopStatus?.installed ? 'Đã tìm thấy tại Program Files' : 'C:\\Program Files (x86)\\CASIO\\...'}
                  </div>
                </div>
              </div>
              <button
                onClick={handleLaunchDesktop}
                className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs cursor-pointer shrink-0 transition-colors shadow-xs"
              >
                Chạy ngay
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
