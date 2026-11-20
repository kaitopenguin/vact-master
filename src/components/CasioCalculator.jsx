import React, { useState, useEffect, useRef } from 'react';
import { 
  Calculator, 
  X, 
  Sparkles, 
  RotateCcw, 
  Copy, 
  Check, 
  Play, 
  BookOpen, 
  Terminal,
  Cpu,
  Layers,
  Maximize2,
  Minimize2,
  Table,
  Sigma,
  Binary,
  Grid3X3,
  Compass,
  BarChart2,
  Sliders
} from 'lucide-react';

// =========================================================================
// MATHEMATICAL HELPER FUNCTIONS (ROCK SOLID, ZERO ERROR)
// =========================================================================

function nPr(n, r) {
  n = Math.round(n);
  r = Math.round(r);
  if (r < 0 || n < 0 || r > n) return 0;
  let res = 1;
  for (let i = 0; i < r; i++) res *= (n - i);
  return res;
}

function nCr(n, r) {
  n = Math.round(n);
  r = Math.round(r);
  if (r < 0 || n < 0 || r > n) return 0;
  if (r === 0 || r === n) return 1;
  if (r > n / 2) r = n - r;
  let res = 1;
  for (let i = 1; i <= r; i++) {
    res = (res * (n - i + 1)) / i;
  }
  return res;
}

function factorial(n) {
  n = Math.round(n);
  if (n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  if (n > 170) return Infinity;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

function gcd(a, b) {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a, b) {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

// Decimal to reduced fraction p/q
function decimalToFraction(val) {
  if (Number.isInteger(val)) return String(val);
  const sign = val < 0 ? -1 : 1;
  val = Math.abs(val);
  const maxDenominator = 10000;
  let bestN = 1, bestD = 1, bestError = Math.abs(val - 1);
  for (let d = 1; d <= maxDenominator; d++) {
    const n = Math.round(val * d);
    const err = Math.abs(val - n / d);
    if (err < bestError) {
      bestN = n;
      bestD = d;
      bestError = err;
      if (err < 1e-8) break;
    }
  }
  return (sign < 0 ? '-' : '') + `${bestN}/${bestD}`;
}

// Numerical derivative f'(x0) using central difference
function numDerivative(fn, x0) {
  const h = 1e-6;
  return (fn(x0 + h) - fn(x0 - h)) / (2 * h);
}

// Numerical definite integral using Simpson's 1/3 Rule
function numIntegral(fn, a, b, n = 200) {
  if (n % 2 !== 0) n++;
  const h = (b - a) / n;
  let sum = fn(a) + fn(b);
  for (let i = 1; i < n; i++) {
    const x = a + i * h;
    sum += (i % 2 === 0 ? 2 : 4) * fn(x);
  }
  return (h / 3) * sum;
}

// Solve quadratic equation ax^2 + bx + c = 0
function solveQuadratic(a, b, c) {
  if (Math.abs(a) < 1e-12) return null;
  const delta = b * b - 4 * a * c;
  const xv = -b / (2 * a);
  const yv = -delta / (4 * a);
  if (delta > 1e-10) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return {
      type: '2 nghiệm thực phân biệt',
      x1: Math.round(x1 * 1e6) / 1e6,
      x2: Math.round(x2 * 1e6) / 1e6,
      vertex: { x: Math.round(xv * 1e6) / 1e6, y: Math.round(yv * 1e6) / 1e6 }
    };
  } else if (Math.abs(delta) <= 1e-10) {
    return {
      type: 'Nghiệm kép',
      x1: Math.round(xv * 1e6) / 1e6,
      vertex: { x: Math.round(xv * 1e6) / 1e6, y: Math.round(yv * 1e6) / 1e6 }
    };
  } else {
    const real = -b / (2 * a);
    const imag = Math.sqrt(-delta) / (2 * a);
    return {
      type: '2 nghiệm phức liên hợp',
      x1: `${Math.round(real * 1e5) / 1e5} + ${Math.round(imag * 1e5) / 1e5}i`,
      x2: `${Math.round(real * 1e5) / 1e5} - ${Math.round(imag * 1e5) / 1e5}i`,
      vertex: { x: Math.round(xv * 1e6) / 1e6, y: Math.round(yv * 1e6) / 1e6 }
    };
  }
}

// Solve cubic equation ax^3 + bx^2 + cx + d = 0 using Cardano's formula
function solveCubic(a, b, c, d) {
  if (Math.abs(a) < 1e-12) return null;
  const p = (3 * a * c - b * b) / (3 * a * a);
  const q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
  const delta = (q * q / 4) + (p * p * p / 27);
  const shift = -b / (3 * a);

  // Derivative 3ax^2 + 2bx + c = 0 for stationary points (local max/min)
  let localExtrema = null;
  const dDelta = (2 * b) * (2 * b) - 4 * (3 * a) * c;
  if (dDelta > 0) {
    const ex1 = (-2 * b + Math.sqrt(dDelta)) / (6 * a);
    const ex2 = (-2 * b - Math.sqrt(dDelta)) / (6 * a);
    const ey1 = a * ex1 ** 3 + b * ex1 ** 2 + c * ex1 + d;
    const ey2 = a * ex2 ** 3 + b * ex2 ** 2 + c * ex2 + d;
    localExtrema = [
      { x: Math.round(ex1 * 1e4) / 1e4, y: Math.round(ey1 * 1e4) / 1e4 },
      { x: Math.round(ex2 * 1e4) / 1e4, y: Math.round(ey2 * 1e4) / 1e4 }
    ];
  }

  if (delta > 1e-10) {
    const u = Math.cbrt(-q / 2 + Math.sqrt(delta));
    const v = Math.cbrt(-q / 2 - Math.sqrt(delta));
    const r1 = u + v + shift;
    const realPart = -(u + v) / 2 + shift;
    const imagPart = Math.abs((u - v) * Math.sqrt(3) / 2);
    return {
      type: '1 nghiệm thực & 2 nghiệm phức',
      x1: Math.round(r1 * 1e5) / 1e5,
      x2: `${Math.round(realPart * 1e4) / 1e4} + ${Math.round(imagPart * 1e4) / 1e4}i`,
      x3: `${Math.round(realPart * 1e4) / 1e4} - ${Math.round(imagPart * 1e4) / 1e4}i`,
      extrema: localExtrema
    };
  } else if (Math.abs(delta) <= 1e-10) {
    const u = Math.cbrt(-q / 2);
    return {
      type: 'Nghiệm bội',
      x1: Math.round((2 * u + shift) * 1e5) / 1e5,
      x2: Math.round((-u + shift) * 1e5) / 1e5,
      extrema: localExtrema
    };
  } else {
    const r = Math.sqrt(-p * p * p / 27);
    const phi = Math.acos(Math.max(-1, Math.min(1, -q / (2 * r))));
    const t = 2 * Math.cbrt(r);
    const r1 = t * Math.cos(phi / 3) + shift;
    const r2 = t * Math.cos((phi + 2 * Math.PI) / 3) + shift;
    const r3 = t * Math.cos((phi + 4 * Math.PI) / 3) + shift;
    const sorted = [r1, r2, r3].sort((x, y) => x - y);
    return {
      type: '3 nghiệm thực phân biệt',
      x1: Math.round(sorted[0] * 1e5) / 1e5,
      x2: Math.round(sorted[1] * 1e5) / 1e5,
      x3: Math.round(sorted[2] * 1e5) / 1e5,
      extrema: localExtrema
    };
  }
}

// Solve linear system Ax = b using Gaussian elimination
function solveLinearSystem(A, b) {
  const n = b.length;
  const M = A.map((row, i) => [...row, b[i]]);
  for (let i = 0; i < n; i++) {
    let maxRow = i;
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(M[k][i]) > Math.abs(M[maxRow][i])) maxRow = k;
    }
    const temp = M[i]; M[i] = M[maxRow]; M[maxRow] = temp;
    if (Math.abs(M[i][i]) < 1e-12) return null; // Singular or no unique solution

    for (let k = i + 1; k < n; k++) {
      const c = M[k][i] / M[i][i];
      for (let j = i; j <= n; j++) {
        M[k][j] -= c * M[i][j];
      }
    }
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let sum = 0;
    for (let j = i + 1; j < n; j++) sum += M[i][j] * x[j];
    x[i] = (M[i][n] - sum) / M[i][i];
  }
  return x.map(val => Math.round(val * 1e6) / 1e6);
}

// =========================================================================
// MAIN CASIO FX-580VN X COMPONENT
// =========================================================================

export default function CasioCalculator({ isOpen, onClose, theme }) {
  const isHK = theme === 'hello-kitty' || (typeof document !== 'undefined' && (document.body.classList.contains('theme-hello-kitty') || localStorage.getItem('vact_theme_mode') === 'hello-kitty'));
  // Mode selection:
  // 1: COMP, 2: CMPLX, 3: BASE-N, 4: MATRIX, 5: VECTOR, 
  // 6: STAT, 7: DIST, 8: TABLE, 9: EQN, A: INEQ, B: RATIO
  const [mode, setMode] = useState('1'); 
  const [isShift, setIsShift] = useState(false);
  const [isAlpha, setIsAlpha] = useState(false);
  const [angleUnit, setAngleUnit] = useState('Deg'); // Deg | Rad
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isFractionView, setIsFractionView] = useState(false);
  
  // Expression & Display state for Mode 1 (COMP)
  const [inputExpr, setInputExpr] = useState('');
  const [resultVal, setResultVal] = useState('0');
  const [historyList, setHistoryList] = useState([]);
  const [factResult, setFactResult] = useState('');
  const [isOptnOpen, setIsOptnOpen] = useState(false);
  const [calcVarPrompt, setCalcVarPrompt] = useState(false);
  const [calcXVal, setCalcXVal] = useState('1');

  // Memory Registers (A, B, C, D, E, F, X, Y, M, Ans)
  const [memRegisters, setMemRegisters] = useState({
    A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, X: 0, Y: 0, M: 0, Ans: 0
  });

  // Mode 2: Complex
  const [cplxZ1, setCplxZ1] = useState({ r: '3', i: '4' });
  const [cplxZ2, setCplxZ2] = useState({ r: '1', i: '-2' });
  const [cplxOp, setCplxOp] = useState('+');
  const [cplxResult, setCplxResult] = useState(null);

  // Mode 3: Base-N
  const [baseNVal, setBaseNVal] = useState('255');
  const [baseNType, setBaseNType] = useState('DEC'); // DEC, HEX, BIN, OCT

  // Mode 4: Matrix
  const [matrixDim, setMatrixDim] = useState('3'); // 2, 3
  const [matrixA, setMatrixA] = useState([
    [1, 2, 3],
    [0, 1, 4],
    [5, 6, 0]
  ]);
  const [matrixB, setMatrixB] = useState([
    [2, 0, -1],
    [1, 3, 2],
    [0, 4, 1]
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
  const [tableStats, setTableStats] = useState(null);

  // Mode 9: Equations (poly2, poly3, simul2, simul3, simul4)
  const [eqnSubMode, setEqnSubMode] = useState('poly2');
  const [polyCoeffs, setPolyCoeffs] = useState({ a: '1', b: '-5', c: '6', d: '0' });
  const [simulCoeffs, setSimulCoeffs] = useState([
    ['2', '3', '8'],
    ['1', '-1', '1']
  ]);
  const [simulCoeffs3, setSimulCoeffs3] = useState([
    ['2', '1', '-1', '8'],
    ['-3', '-1', '2', '-11'],
    ['-2', '1', '2', '-3']
  ]);
  const [eqnResult, setEqnResult] = useState(null);

  // Mode A: Inequality
  const [ineqDegree, setIneqDegree] = useState('2'); // 2, 3
  const [ineqType, setIneqType] = useState('>'); // >, <, >=, <=
  const [ineqCoeffs, setIneqCoeffs] = useState({ a: '1', b: '-5', c: '6' });
  const [ineqResult, setIneqResult] = useState(null);

  // Desktop App status
  const [desktopStatus, setDesktopStatus] = useState(null);
  const [launchMessage, setLaunchMessage] = useState(null);

  useEffect(() => {
    if (isOpen) {
      fetch('http://127.0.0.1:3000/api/casio/status')
        .then(res => res.json())
        .then(data => setDesktopStatus(data))
        .catch(() => setDesktopStatus({ installed: false }));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // --- ADVANCED ROBUST EXPRESSION EVALUATOR ---
  const evaluateMath = (rawExpr) => {
    try {
      if (!rawExpr || rawExpr.trim() === '') return '0';
      let expr = rawExpr.trim();

      // Normalize operators and symbols
      expr = expr
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/−/g, '-')
        .replace(/π/g, '(Math.PI)')
        .replace(/Ans/g, `(${memRegisters.Ans || 0})`);

      // Handle e (Euler constant) when not followed by letters
      expr = expr.replace(/\be\b/g, '(Math.E)');

      // Replace memory variables
      ['A', 'B', 'C', 'D', 'E', 'F', 'X', 'Y', 'M'].forEach(v => {
        const re = new RegExp(`\\b${v}\\b`, 'g');
        expr = expr.replace(re, `(${memRegisters[v] || 0})`);
      });

      // Factorial: e.g. 5! -> factorial(5)
      expr = expr.replace(/(\d+)!/g, 'factorial($1)');

      // Permutations nPr & Combinations nCr: e.g. 5P3 -> nPr(5, 3), 5C2 -> nCr(5, 2)
      expr = expr.replace(/(\d+)P(\d+)/g, 'nPr($1, $2)');
      expr = expr.replace(/(\d+)C(\d+)/g, 'nCr($1, $2)');

      // Percentages: 50% -> (50/100)
      expr = expr.replace(/(\d+(\.\d+)?)%/g, '($1/100)');

      // GCD and LCM
      expr = expr.replace(/GCD\((\d+),\s*(\d+)\)/gi, 'gcd($1, $2)');
      expr = expr.replace(/LCM\((\d+),\s*(\d+)\)/gi, 'lcm($1, $2)');

      // Square root: √(x) -> Math.sqrt(x)
      expr = expr.replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)');
      expr = expr.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');

      // Exponent: ^ -> **
      expr = expr.replace(/\^/g, '**');

      // Implicit multiplication: 2(3) -> 2*(3), (2)(3) -> (2)*(3), 2Math.sqrt -> 2*Math.sqrt
      expr = expr.replace(/(\d)(\()/g, '$1*$2');
      expr = expr.replace(/(\))(\d)/g, '$1*$2');
      expr = expr.replace(/(\))(\()/g, '$1*$2');
      expr = expr.replace(/(\d)(Math\.[a-zA-Z]+)/g, '$1*$2');

      // Trigonometry handling with angleUnit (Deg | Rad)
      const isDeg = angleUnit === 'Deg';
      const toRad = isDeg ? '(Math.PI/180)*' : '';
      const fromRad = isDeg ? '*(180/Math.PI)' : '';

      expr = expr
        .replace(/sin\(([^)]+)\)/gi, `Math.sin(${toRad}($1))`)
        .replace(/cos\(([^)]+)\)/gi, `Math.cos(${toRad}($1))`)
        .replace(/tan\(([^)]+)\)/gi, `Math.tan(${toRad}($1))`)
        .replace(/sin⁻¹\(([^)]+)\)/gi, `(Math.asin($1)${fromRad})`)
        .replace(/cos⁻¹\(([^)]+)\)/gi, `(Math.acos($1)${fromRad})`)
        .replace(/tan⁻¹\(([^)]+)\)/gi, `(Math.atan($1)${fromRad})`)
        .replace(/asin\(([^)]+)\)/gi, `(Math.asin($1)${fromRad})`)
        .replace(/acos\(([^)]+)\)/gi, `(Math.acos($1)${fromRad})`)
        .replace(/atan\(([^)]+)\)/gi, `(Math.atan($1)${fromRad})`)
        .replace(/ln\(([^)]+)\)/gi, 'Math.log($1)')
        .replace(/log\(([^)]+)\)/gi, 'Math.log10($1)')
        .replace(/Abs\(([^)]+)\)/gi, 'Math.abs($1)');

      // Auto-close missing parentheses
      let opens = (expr.match(/\(/g) || []).length;
      let closes = (expr.match(/\)/g) || []).length;
      while (opens > closes) {
        expr += ')';
        closes++;
      }

      // Safe execution context
      const scope = {
        nPr, nCr, factorial, gcd, lcm, Math
      };
      const scopeKeys = Object.keys(scope);
      const scopeVals = Object.values(scope);

      const evaluator = new Function(...scopeKeys, `"use strict"; return (${expr});`);
      const res = evaluator(...scopeVals);

      if (typeof res === 'number') {
        if (isNaN(res)) return 'Math ERROR';
        if (!isFinite(res)) return res > 0 ? 'Infinity' : '-Infinity';
        // Clean float precision
        return String(Math.round(res * 1e10) / 1e10);
      }
      return String(res);
    } catch (err) {
      return 'Syntax ERROR';
    }
  };

  const handleKeyClick = (key) => {
    setFactResult('');

    if (key === 'ON' || key === 'AC') {
      setInputExpr('');
      setResultVal('0');
      setIsShift(false);
      setIsAlpha(false);
      setIsFractionView(false);
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

    // Toggle Angle Unit (Deg / Rad)
    if (key === 'SETUP_ANGLE') {
      setAngleUnit(prev => prev === 'Deg' ? 'Rad' : 'Deg');
      return;
    }

    // SHIFT KEY COMBINATIONS
    if (isShift) {
      setIsShift(false);
      if (key === '°') {
        // FACT (Prime factorization)
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
          const countMap = {};
          factors.forEach(f => countMap[f] = (countMap[f] || 0) + 1);
          const factStr = Object.entries(countMap)
            .map(([prime, pwr]) => pwr > 1 ? `${prime}^${pwr}` : `${prime}`)
            .join(' × ');
          setFactResult(`${val} = ${factStr}`);
        }
        return;
      }
      if (key === 'x^2') { setInputExpr(prev => prev + '√('); return; }
      if (key === 'x^□') { setInputExpr(prev => prev + '^(1/'); return; }
      if (key === 'ln') { setInputExpr(prev => prev + 'e^('); return; }
      if (key === 'log') { setInputExpr(prev => prev + '10^('); return; }
      if (key === 'sin') { setInputExpr(prev => prev + 'sin⁻¹('); return; }
      if (key === 'cos') { setInputExpr(prev => prev + 'cos⁻¹('); return; }
      if (key === 'tan') { setInputExpr(prev => prev + 'tan⁻¹('); return; }
      if (key === '×') { setInputExpr(prev => prev + 'P'); return; }
      if (key === '÷') { setInputExpr(prev => prev + 'C'); return; }
      if (key === '×10^') { setInputExpr(prev => prev + 'π'); return; }
      if (key === 'Ans') { setInputExpr(prev => prev + String(memRegisters.Ans)); return; }
      if (key === 'S<=>D') {
        // Toggle fraction display
        const num = parseFloat(resultVal);
        if (!isNaN(num)) {
          setFactResult(decimalToFraction(num));
        }
        return;
      }
    }

    // ALPHA KEY COMBINATIONS
    if (isAlpha) {
      setIsAlpha(false);
      if (key === ')') { setInputExpr(prev => prev + 'x'); return; }
      if (key === 'S<=>D') { setInputExpr(prev => prev + 'y'); return; }
      if (['A', 'B', 'C', 'D', 'E', 'F', 'M'].includes(key)) {
        setInputExpr(prev => prev + key);
        return;
      }
    }

    // EQUALS KEY (=)
    if (key === '=') {
      const res = evaluateMath(inputExpr);
      setResultVal(res);
      if (res !== 'Syntax ERROR' && res !== 'Math ERROR') {
        const num = parseFloat(res);
        setMemRegisters(prev => ({ ...prev, Ans: !isNaN(num) ? num : 0 }));
        setHistoryList(prev => [{ expr: inputExpr, val: res }, ...prev.slice(0, 15)]);
      }
      return;
    }

    // S<=>D TOGGLE KEY
    if (key === 'S<=>D') {
      const num = parseFloat(resultVal);
      if (!isNaN(num)) {
        if (!isFractionView) {
          setFactResult(decimalToFraction(num));
          setIsFractionView(true);
        } else {
          setFactResult('');
          setIsFractionView(false);
        }
      }
      return;
    }

    // OPTN MENU KEY
    if (key === 'OPTN') {
      setIsOptnOpen(prev => !prev);
      return;
    }

    // CALC KEY
    if (key === 'CALC') {
      if (inputExpr.includes('x')) {
        setCalcVarPrompt(prev => !prev);
      } else {
        const res = evaluateMath(inputExpr);
        setResultVal(res);
        if (res !== 'Syntax ERROR' && res !== 'Math ERROR') {
          const num = parseFloat(res);
          setMemRegisters(prev => ({ ...prev, Ans: !isNaN(num) ? num : 0 }));
          setHistoryList(prev => [{ expr: inputExpr, val: res }, ...prev.slice(0, 15)]);
        }
      }
      return;
    }

    // STO KEY (Store in Memory)
    if (key === 'STO') {
      const num = parseFloat(resultVal);
      if (!isNaN(num)) {
        setMemRegisters(prev => ({ ...prev, M: num }));
        setFactResult(`Đã lưu kết quả vào M = ${num}`);
      }
      return;
    }

    // M+ KEY (Add to Memory M)
    if (key === 'M+') {
      const num = parseFloat(resultVal);
      if (!isNaN(num)) {
        const newM = (memRegisters.M || 0) + num;
        setMemRegisters(prev => ({ ...prev, M: newM }));
        setFactResult(`M+ => Biến M = ${newM}`);
      }
      return;
    }

    // ENG KEY (Engineering Notation)
    if (key === 'ENG') {
      const num = parseFloat(resultVal);
      if (!isNaN(num) && num !== 0) {
        const exp = Math.floor(Math.log10(Math.abs(num)));
        const engExp = Math.floor(exp / 3) * 3;
        const mantissa = num / Math.pow(10, engExp);
        setFactResult(`${parseFloat(mantissa.toFixed(4))} × 10^${engExp}`);
      }
      return;
    }

    // Default append
    setInputExpr(prev => prev + key);
  };

  // Launch Desktop Casio fx-580VN X Emulator via Server Backend
  const handleLaunchDesktop = async () => {
    try {
      setLaunchMessage('Đang kết nối và khởi động fx-580VN X Emulator.exe...');
      const res = await fetch('http://127.0.0.1:3000/api/casio/launch', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setLaunchMessage('Đã mở ứng dụng Cacao fx-580VN X Emulator trên màn hình PC!');
      } else {
        setLaunchMessage(`Chưa thể mở tự động: ${data.message || 'Kiểm tra đường dẫn file'}`);
      }
    } catch (e) {
      setLaunchMessage('Lỗi kết nối máy chủ cục bộ.');
    }
  };

  // Mode 2: Complex calculation
  const calculateComplex = () => {
    const a = parseFloat(cplxZ1.r) || 0, b = parseFloat(cplxZ1.i) || 0;
    const c = parseFloat(cplxZ2.r) || 0, d = parseFloat(cplxZ2.i) || 0;
    let r = 0, i = 0;
    if (cplxOp === '+') { r = a + c; i = b + d; }
    else if (cplxOp === '-') { r = a - c; i = b - d; }
    else if (cplxOp === '×') { r = a * c - b * d; i = a * d + b * c; }
    else if (cplxOp === '÷') {
      const denom = c * c + d * d;
      if (denom === 0) { setCplxResult({ error: 'Math ERROR (Mẫu số bằng 0)' }); return; }
      r = (a * c + b * d) / denom;
      i = (b * c - a * d) / denom;
    }
    const mod = Math.sqrt(r * r + i * i);
    const argRad = Math.atan2(i, r);
    const argDeg = argRad * (180 / Math.PI);
    setCplxResult({
      form: `${Math.round(r * 1e4) / 1e4} ${i >= 0 ? '+' : '-'} ${Math.abs(Math.round(i * 1e4) / 1e4)}i`,
      modulus: Math.round(mod * 1e5) / 1e5,
      argDeg: Math.round(argDeg * 1e2) / 1e2,
      conjugate: `${Math.round(r * 1e4) / 1e4} ${i >= 0 ? '-' : '+'} ${Math.abs(Math.round(i * 1e4) / 1e4)}i`
    });
  };

  // Mode 3: Base-N calculation
  const calculateBaseN = () => {
    try {
      let dec = 0;
      if (baseNType === 'DEC') dec = parseInt(baseNVal, 10);
      else if (baseNType === 'HEX') dec = parseInt(baseNVal, 16);
      else if (baseNType === 'BIN') dec = parseInt(baseNVal, 2);
      else if (baseNType === 'OCT') dec = parseInt(baseNVal, 8);

      if (isNaN(dec)) return { error: 'Syntax ERROR' };
      return {
        DEC: dec.toString(10),
        HEX: dec.toString(16).toUpperCase(),
        BIN: dec.toString(2),
        OCT: dec.toString(8)
      };
    } catch {
      return { error: 'Math ERROR' };
    }
  };

  // Mode 4: Matrix calculation
  const calculateMatrix = (op) => {
    try {
      const dim = parseInt(matrixDim, 10);
      const A = matrixA.slice(0, dim).map(row => row.slice(0, dim));
      const B = matrixB.slice(0, dim).map(row => row.slice(0, dim));

      if (op === 'A+B') {
        const C = A.map((row, i) => row.map((val, j) => val + B[i][j]));
        setMatrixResult({ title: 'A + B', matrix: C });
      } else if (op === 'A-B') {
        const C = A.map((row, i) => row.map((val, j) => val - B[i][j]));
        setMatrixResult({ title: 'A - B', matrix: C });
      } else if (op === 'A×B') {
        const C = Array.from({ length: dim }, () => new Array(dim).fill(0));
        for (let i = 0; i < dim; i++) {
          for (let j = 0; j < dim; j++) {
            for (let k = 0; k < dim; k++) {
              C[i][j] += A[i][k] * B[k][j];
            }
          }
        }
        setMatrixResult({ title: 'A × B', matrix: C });
      } else if (op === 'detA') {
        let det = 0;
        if (dim === 2) {
          det = A[0][0] * A[1][1] - A[0][1] * A[1][0];
        } else if (dim === 3) {
          det = A[0][0] * (A[1][1] * A[2][2] - A[1][2] * A[2][1])
              - A[0][1] * (A[1][0] * A[2][2] - A[1][2] * A[2][0])
              + A[0][2] * (A[1][0] * A[2][1] - A[1][1] * A[2][0]);
        }
        setMatrixResult({ title: 'Định thức det(A)', value: Math.round(det * 1e5) / 1e5 });
      } else if (op === 'transA') {
        const C = Array.from({ length: dim }, (_, i) => Array.from({ length: dim }, (_, j) => A[j][i]));
        setMatrixResult({ title: 'Chuyển vị Aᵀ', matrix: C });
      }
    } catch {
      setMatrixResult({ error: 'Lỗi tính toán ma trận' });
    }
  };

  // Mode 5: Vector calculation
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
    const cosAngle = magA * magB === 0 ? 0 : dot / (magA * magB);
    const angleDeg = Math.acos(Math.max(-1, Math.min(1, cosAngle))) * (180 / Math.PI);
    const crossMag = Math.sqrt(cross[0] ** 2 + cross[1] ** 2 + cross[2] ** 2);
    const triangleArea = 0.5 * crossMag;

    setVctResult({
      dot: Math.round(dot * 1e4) / 1e4,
      cross,
      magA: Math.round(magA * 1e4) / 1e4,
      magB: Math.round(magB * 1e4) / 1e4,
      angleDeg: Math.round(angleDeg * 1e2) / 1e2,
      triangleArea: Math.round(triangleArea * 1e4) / 1e4
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
      const variance = nums.reduce((a, b) => a + (b - mean) ** 2, 0) / n;
      const sampleVar = n > 1 ? nums.reduce((a, b) => a + (b - mean) ** 2, 0) / (n - 1) : 0;
      const sorted = [...nums].sort((a, b) => a - b);
      const min = sorted[0];
      const max = sorted[sorted.length - 1];
      const med = sorted.length % 2 === 0 
        ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2 
        : sorted[Math.floor(sorted.length / 2)];

      // Quartiles Q1, Q3
      const halfLen = Math.floor(sorted.length / 2);
      const lowerHalf = sorted.slice(0, halfLen);
      const upperHalf = sorted.length % 2 === 0 ? sorted.slice(halfLen) : sorted.slice(halfLen + 1);
      const q1 = lowerHalf.length % 2 === 0
        ? (lowerHalf[lowerHalf.length / 2 - 1] + lowerHalf[lowerHalf.length / 2]) / 2
        : lowerHalf[Math.floor(lowerHalf.length / 2)];
      const q3 = upperHalf.length % 2 === 0
        ? (upperHalf[upperHalf.length / 2 - 1] + upperHalf[upperHalf.length / 2]) / 2
        : upperHalf[Math.floor(upperHalf.length / 2)];

      setStatResult({
        n,
        mean: Math.round(mean * 1e4) / 1e4,
        sum: Math.round(sum * 1e4) / 1e4,
        stdDev: Math.round(Math.sqrt(variance) * 1e4) / 1e4,
        sampleStdDev: Math.round(Math.sqrt(sampleVar) * 1e4) / 1e4,
        min,
        max,
        median: med,
        q1: q1 !== undefined ? q1 : min,
        q3: q3 !== undefined ? q3 : max,
        iqr: (q3 !== undefined && q1 !== undefined) ? Math.round((q3 - q1) * 1e4) / 1e4 : 0
      });
    } catch {}
  };

  // Mode 8: Table calculation with Min/Max
  const calculateTable = () => {
    try {
      const start = parseFloat(tableStart);
      const end = parseFloat(tableEnd);
      const step = parseFloat(tableStep);
      if (step <= 0 || start > end) return;

      const rows = [];
      const cleanF = tableFx.replace(/x/g, '($x)').replace(/\^/g, '**');
      const cleanG = tableGx ? tableGx.replace(/x/g, '($x)').replace(/\^/g, '**') : null;

      let minF = Infinity, maxF = -Infinity;
      let minAt = start, maxAt = start;

      for (let x = start; x <= end + 0.0001; x += step) {
        const roundedX = Math.round(x * 1000) / 1000;
        let valF = 'ERROR', valG = '-';
        try {
          const fnF = new Function('$x', `"use strict"; return (${cleanF});`);
          const rF = fnF(roundedX);
          if (typeof rF === 'number' && !isNaN(rF)) {
            valF = Math.round(rF * 1e4) / 1e4;
            if (valF < minF) { minF = valF; minAt = roundedX; }
            if (valF > maxF) { maxF = valF; maxAt = roundedX; }
          }
        } catch {}

        if (cleanG) {
          try {
            const fnG = new Function('$x', `"use strict"; return (${cleanG});`);
            const rG = fnG(roundedX);
            if (typeof rG === 'number' && !isNaN(rG)) {
              valG = Math.round(rG * 1e4) / 1e4;
            }
          } catch {}
        }

        rows.push({ x: roundedX, fx: valF, gx: valG });
      }

      setTableRows(rows);
      if (minF !== Infinity && maxF !== -Infinity) {
        setTableStats({ min: minF, minAt, max: maxF, maxAt });
      }
    } catch {
      alert('Lỗi hàm số trong bảng Table. Hãy kiểm tra cú pháp (ví dụ: x^2 - 4*x + 3).');
    }
  };

  // Mode 9: Equations calculation
  const solveEquation = () => {
    if (eqnSubMode === 'poly2') {
      const a = parseFloat(polyCoeffs.a);
      const b = parseFloat(polyCoeffs.b);
      const c = parseFloat(polyCoeffs.c);
      if (isNaN(a) || a === 0) {
        setEqnResult({ error: 'Hệ số a phải khác 0' });
        return;
      }
      setEqnResult(solveQuadratic(a, b, c));
    } else if (eqnSubMode === 'poly3') {
      const a = parseFloat(polyCoeffs.a);
      const b = parseFloat(polyCoeffs.b);
      const c = parseFloat(polyCoeffs.c);
      const d = parseFloat(polyCoeffs.d);
      if (isNaN(a) || a === 0) {
        setEqnResult({ error: 'Hệ số a phải khác 0' });
        return;
      }
      setEqnResult(solveCubic(a, b, c, d));
    } else if (eqnSubMode === 'simul2') {
      const a1 = parseFloat(simulCoeffs[0][0]), b1 = parseFloat(simulCoeffs[0][1]), c1 = parseFloat(simulCoeffs[0][2]);
      const a2 = parseFloat(simulCoeffs[1][0]), b2 = parseFloat(simulCoeffs[1][1]), c2 = parseFloat(simulCoeffs[1][2]);
      const A = [[a1, b1], [a2, b2]];
      const b = [c1, c2];
      const sol = solveLinearSystem(A, b);
      if (!sol) {
        setEqnResult({ type: 'Hệ vô nghiệm hoặc vô số nghiệm' });
      } else {
        setEqnResult({ type: 'Hệ 2 ẩn duy nhất', x: sol[0], y: sol[1] });
      }
    } else if (eqnSubMode === 'simul3') {
      const A = simulCoeffs3.map(row => row.slice(0, 3).map(v => parseFloat(v) || 0));
      const b = simulCoeffs3.map(row => parseFloat(row[3]) || 0);
      const sol = solveLinearSystem(A, b);
      if (!sol) {
        setEqnResult({ type: 'Hệ 3 ẩn vô nghiệm hoặc vô số nghiệm' });
      } else {
        setEqnResult({ type: 'Hệ 3 ẩn duy nhất', x: sol[0], y: sol[1], z: sol[2] });
      }
    }
  };

  // Mode A: Inequality calculation
  const solveInequality = () => {
    const a = parseFloat(ineqCoeffs.a);
    const b = parseFloat(ineqCoeffs.b);
    const c = parseFloat(ineqCoeffs.c);
    if (isNaN(a) || a === 0) {
      setIneqResult('Hệ số a phải khác 0');
      return;
    }
    const delta = b * b - 4 * a * c;
    const op = ineqType;

    if (delta < 0) {
      if ((a > 0 && (op === '>' || op === '>=')) || (a < 0 && (op === '<' || op === '<='))) {
        setIneqResult('Tập nghiệm: S = ℝ (Tất cả số thực)');
      } else {
        setIneqResult('Tập nghiệm: S = ∅ (Vô nghiệm)');
      }
    } else if (delta === 0) {
      const x0 = -b / (2 * a);
      if (op === '>') {
        setIneqResult(a > 0 ? `S = ℝ \\ {${x0}}` : 'S = ∅');
      } else if (op === '>=') {
        setIneqResult(a > 0 ? 'S = ℝ' : `S = {${x0}}`);
      } else if (op === '<') {
        setIneqResult(a < 0 ? `S = ℝ \\ {${x0}}` : 'S = ∅');
      } else if (op === '<=') {
        setIneqResult(a < 0 ? 'S = ℝ' : `S = {${x0}}`);
      }
    } else {
      const r1 = (-b - Math.sqrt(delta)) / (2 * a);
      const r2 = (-b + Math.sqrt(delta)) / (2 * a);
      const [x1, x2] = [Math.min(r1, r2), Math.max(r1, r2)];

      if ((a > 0 && op === '>') || (a < 0 && op === '<')) {
        setIneqResult(`x < ${x1} hoặc x > ${x2}`);
      } else if ((a > 0 && op === '>=') || (a < 0 && op === '<=')) {
        setIneqResult(`x ≤ ${x1} hoặc x ≥ ${x2}`);
      } else if ((a > 0 && op === '<') || (a < 0 && op === '>')) {
        setIneqResult(`${x1} < x < ${x2}`);
      } else if ((a > 0 && op === '<=') || (a < 0 && op === '>=')) {
        setIneqResult(`${x1} ≤ x ≤ ${x2}`);
      }
    }
  };

  const baseNData = mode === '3' ? calculateBaseN() : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-2 sm:p-4 overflow-y-auto">
      <div 
        className={`transition-all duration-300 flex flex-col overflow-hidden ${
          isHK 
            ? 'bg-[#FFF9FB] border-2 border-[#F6BBC4] text-[#4A1525] shadow-2xl shadow-pink-300/40' 
            : 'bg-slate-900 border-2 border-slate-700 text-white shadow-2xl'
        } ${
          isFullScreen 
            ? 'w-full h-full max-w-none rounded-none' 
            : 'w-full max-w-5xl max-h-[94vh]'
        }`}
      >
        {/* Top Header Bar */}
        <div className={`flex items-center justify-between px-4 sm:px-6 py-3 border-b ${
          isHK 
            ? 'border-[#FACCD7] bg-gradient-to-r from-[#FFF0F4] via-[#FDF5F7] to-[#FFF0F4]' 
            : 'border-slate-800 bg-slate-950/90'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-white shadow-md ${
              isHK ? 'bg-gradient-to-br from-[#F62E70] to-[#F98EAA] shadow-pink-500/30' : 'bg-blue-600 shadow-blue-500/30'
            }`}>
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-black text-sm tracking-wide ${isHK ? 'text-[#F62E70] flex items-center gap-1.5' : 'text-white'}`}>
                  {isHK && <span>🎀</span>}
                  <span>CACAO Scientific</span>
                </span>
                <span className={`text-[11px] font-black px-2 py-0.5 rounded-md border ${
                  isHK 
                    ? 'bg-[#FACCD7]/60 text-[#F62E70] border-[#F6BBC4]' 
                    : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                }`}>
                  fx-580VN X {isHK && '♥ Hello Kitty'}
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  isHK ? 'bg-pink-100 text-pink-700 border border-pink-200' : 'bg-emerald-500/20 text-emerald-400'
                }`}>
                  Full 12 Modes
                </span>
              </div>
              <p className={`text-[10px] ${isHK ? 'text-pink-600/90 font-medium' : 'text-slate-400'}`}>
                {isHK ? 'Máy tính khoa học Sweet Pink Edition dành tặng bạn gái 🎀' : 'Giả lập máy tính khoa học cao cấp cho kỳ thi V-ACT ĐHQG-HCM'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Launch Real Desktop App Button */}
            <button
              onClick={handleLaunchDesktop}
              className={`flex items-center gap-1 text-[11px] font-bold px-2.5 py-1.5 rounded-xl border transition-colors cursor-pointer ${
                isHK 
                  ? 'bg-pink-100 hover:bg-pink-200 text-[#F62E70] border-pink-300' 
                  : 'bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border-blue-500/40'
              }`}
              title="Khởi động ứng dụng Cacao fx-580VN X Emulator trên Windows"
            >
              <Cpu className={`w-3.5 h-3.5 ${isHK ? 'text-[#F62E70]' : 'text-blue-400'}`} />
              <span className="hidden sm:inline">Mở App PC (Gốc)</span>
            </button>

            {/* Toggle Full Screen */}
            <button
              onClick={() => setIsFullScreen(prev => !prev)}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isHK ? 'text-pink-600 hover:text-pink-900 hover:bg-pink-100' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              title="Toàn màn hình"
            >
              {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isHK ? 'text-[#F62E70] hover:bg-pink-100' : 'text-slate-400 hover:text-rose-400 hover:bg-rose-950/40'
              }`}
              title="Đóng giả lập"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mode Selector Tabs (Full Casio 580 Modes) */}
        <div className={`flex items-center gap-1.5 px-4 py-2 border-b overflow-x-auto no-scrollbar ${
          isHK ? 'bg-[#FFF0F4] border-[#FACCD7]' : 'bg-slate-950/70 border-slate-800'
        }`}>
          {[
            { id: '1', label: '1: COMP', icon: Calculator, desc: 'Tính toán chuẩn' },
            { id: '2', label: '2: CMPLX', icon: Sparkles, desc: 'Số phức' },
            { id: '3', label: '3: BASE-N', icon: Binary, desc: 'Cơ số' },
            { id: '4', label: '4: MATRIX', icon: Grid3X3, desc: 'Ma trận' },
            { id: '5', label: '5: VECTOR', icon: Compass, desc: 'Vectơ Oxyz' },
            { id: '6', label: '6: STAT', icon: BarChart2, desc: 'Thống kê' },
            { id: '8', label: '8: TABLE', icon: Table, desc: 'Bảng giá trị f(x)' },
            { id: '9', label: '9: EQN', icon: Sigma, desc: 'Phương trình' },
            { id: 'A', label: 'A: INEQ', icon: Sliders, desc: 'Bất phương trình' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setMode(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
                mode === tab.id
                  ? isHK 
                    ? 'bg-gradient-to-r from-[#F62E70] to-[#F98EAA] text-white shadow-md shadow-pink-500/30' 
                    : 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : isHK
                    ? 'text-pink-700 hover:text-[#F62E70] hover:bg-pink-100/70'
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

        {/* Main Work Area: Authentic Casio Physical Body + Workbench */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Authentic Casio Physical Calculator Frame */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className={`w-full max-w-[430px] rounded-[36px] p-4 sm:p-5 border-2 shadow-2xl relative transition-all ${
              isHK
                ? 'bg-gradient-to-b from-[#FACCD7] via-[#F6BBC4] to-[#f4abbb] border-4 border-[#F98EAA] shadow-pink-300/60 text-[#4A1525]'
                : 'bg-gradient-to-b from-[#1b2234] via-[#151c2c] to-[#0f1422] border-slate-700/80 text-white'
            }`}>
              {/* Cute Hello Kitty Ribbon Sticker */}
              {isHK && (
                <div className="absolute -top-3.5 -right-3.5 w-10 h-10 bg-[#F62E70] rounded-full flex items-center justify-center text-lg shadow-lg border-2 border-white animate-bounce">
                  🎀
                </div>
              )}
              
              {/* Solar Panel & Brand Banner */}
              <div className="flex items-center justify-between mb-3 px-1">
                <div>
                  <div className="text-base font-black tracking-wider text-slate-100 flex items-center gap-1.5">
                    <span className={`tracking-widest font-black ${isHK ? 'text-[#F62E70] flex items-center gap-1' : 'text-amber-400'}`}>
                      {isHK && <span>🎀</span>}
                      <span>CACAO</span>
                    </span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      isHK ? 'bg-white/90 text-[#F62E70] shadow-xs' : 'text-slate-400 bg-slate-800/80'
                    }`}>
                      {isHK ? 'SWEET WIZ' : 'CALCWIZ'}
                    </span>
                  </div>
                  <div className={`text-[11px] font-black tracking-wider ${isHK ? 'text-[#4A1525]' : 'text-blue-400'}`}>
                    fx-580VN X <span className={`${isHK ? 'text-[#F62E70]' : 'text-slate-400'} font-normal text-[9px]`}>{isHK ? '♥ HELLO KITTY' : 'NATURAL-MATH'}</span>
                  </div>
                </div>

                {/* Simulated Realistic Solar Cell */}
                <div className={`w-24 h-6 rounded-md border shadow-inner flex items-center justify-around px-1 ${
                  isHK
                    ? 'bg-gradient-to-r from-[#e38d9f] via-[#c96f83] to-[#e38d9f] border-[#d87c91]'
                    : 'bg-gradient-to-r from-[#291711] via-[#3a2016] to-[#291711] border-[#522e20]'
                }`}>
                  <div className="w-0.5 h-full bg-black/40"></div>
                  <div className="w-0.5 h-full bg-black/40"></div>
                  <div className="w-0.5 h-full bg-black/40"></div>
                </div>
              </div>

              {/* LCD Dot Matrix Screen (Authentic 192x63 Casio Screen) */}
              <div className={`rounded-xl p-3 sm:p-3.5 border-4 shadow-inner font-mono relative overflow-hidden min-h-[110px] flex flex-col justify-between mb-4 select-none ${
                isHK 
                  ? 'bg-[#FFF5F7] text-[#4A1525] border-[#F98EAA]' 
                  : 'bg-[#b4c4a5] text-[#142316] border-slate-900'
              }`}>
                {/* LCD Top Status Indicators */}
                <div className={`flex items-center justify-between text-[10px] font-black tracking-tight border-b pb-1 ${
                  isHK ? 'border-pink-200 text-pink-700' : 'border-[#9eb08d] text-[#142316]'
                }`}>
                  <div className="flex items-center gap-1.5">
                    {isShift && <span className="px-1 bg-[#142316] text-[#b4c4a5] rounded-xs font-black">S</span>}
                    {isAlpha && <span className="px-1 bg-[#142316] text-[#b4c4a5] rounded-xs font-black">A</span>}
                    <span className="font-bold">{mode === '1' ? 'COMP' : mode === '2' ? 'CMPLX' : mode === '8' ? 'TABLE' : mode === '9' ? 'EQN' : `M:${mode}`}</span>
                    <button 
                      onClick={() => handleKeyClick('SETUP_ANGLE')} 
                      className="font-bold underline cursor-pointer"
                      title="Bấm để đổi Đơn vị góc Deg / Rad"
                    >
                      [{angleUnit}]
                    </button>
                    <span className="font-bold">[Math]</span>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-950 font-bold">
                    <span>▲▼ Disp</span>
                  </div>
                </div>

                {/* LCD Expression Line (Input) */}
                <div className="text-right text-xs sm:text-sm font-bold min-h-[22px] tracking-wide break-all py-1 select-text">
                  {inputExpr || (mode === '8' ? `f(x)=${tableFx}` : mode === '9' ? 'a·x² + b·x + c = 0' : '0')}
                </div>

                {/* S<=>D / Fact Result Display */}
                {factResult && (
                  <div className="text-left text-[11px] font-black text-emerald-950 bg-emerald-200/50 px-1.5 py-0.5 rounded">
                    {factResult}
                  </div>
                )}

                {/* LCD Answer Line (Result) */}
                <div className="text-right text-lg sm:text-2xl font-black tracking-wider overflow-x-auto select-all">
                  {resultVal}
                </div>
              </div>

              {/* OPTN Options Quick Bar */}
              {isOptnOpen && (
                <div className="p-2.5 rounded-xl bg-slate-900 border border-blue-500/50 shadow-lg space-y-1.5 animate-in fade-in duration-150">
                  <div className={`text-[10px] font-black uppercase ${isHK ? 'text-[#F62E70]' : 'text-blue-400'} flex items-center justify-between`}>
                    <span>Menu Hàm Nâng Cao (OPTN)</span>
                    <button onClick={() => setIsOptnOpen(false)} className="text-slate-400 hover:text-white">✕</button>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5 text-[11px] font-bold text-slate-200">
                    <button onClick={() => { setInputExpr(prev => prev + 'abs('); setIsOptnOpen(false); }} className="py-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 text-center">1: Abs |x|</button>
                    <button onClick={() => { setInputExpr(prev => prev + 'cbrt('); setIsOptnOpen(false); }} className="py-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 text-center">2: ∛(x)</button>
                    <button onClick={() => { setInputExpr(prev => prev + 'gcd('); setIsOptnOpen(false); }} className="py-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 text-center">3: GCD</button>
                    <button onClick={() => { setInputExpr(prev => prev + 'lcm('); setIsOptnOpen(false); }} className="py-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 text-center">4: LCM</button>
                    <button onClick={() => { setInputExpr(prev => prev + 'deriv('); setIsOptnOpen(false); }} className="py-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 text-center">5: d/dx</button>
                    <button onClick={() => { setInputExpr(prev => prev + 'integ('); setIsOptnOpen(false); }} className="py-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 text-center">6: ∫</button>
                    <button onClick={() => { setInputExpr(prev => prev + 'round('); setIsOptnOpen(false); }} className="py-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 text-center">7: Làm tròn</button>
                    <button onClick={() => { setFactResult('Biến M = ' + (memRegisters.M || 0)); setIsOptnOpen(false); }} className="py-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 text-center text-amber-300">8: Gọi M</button>
                  </div>
                </div>
              )}

              {/* CALC Variable Input Prompt */}
              {calcVarPrompt && (
                <div className="p-2.5 rounded-xl bg-slate-900 border border-amber-500/60 shadow-lg flex items-center justify-between gap-2 text-xs animate-in fade-in duration-150">
                  <span className="font-black text-amber-300 shrink-0">Nhập x =</span>
                  <input
                    type="number"
                    value={calcXVal}
                    onChange={(e) => setCalcXVal(e.target.value)}
                    className="w-24 px-2 py-1 rounded-lg bg-slate-800 text-white border border-slate-700 font-mono text-center font-bold focus:border-amber-400 focus:outline-none"
                    autoFocus
                  />
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        const xNum = parseFloat(calcXVal) || 0;
                        setMemRegisters(prev => ({ ...prev, X: xNum }));
                        const replaced = inputExpr.replace(/x/g, `(${xNum})`);
                        const res = evaluateMath(replaced);
                        setResultVal(res);
                        setCalcVarPrompt(false);
                      }}
                      className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-black cursor-pointer shadow-xs"
                    >
                      Tính (=)
                    </button>
                    <button
                      onClick={() => setCalcVarPrompt(false)}
                      className="px-2 py-1 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 font-bold"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}

              {/* Realistic Keypad Grid */}
              <div className="space-y-2">
                {/* Top Control Cluster: SHIFT, ALPHA, OPTN, CALC, MENU, ON */}
                <div className="grid grid-cols-6 gap-1.5 items-center">
                  <button
                    onClick={() => handleKeyClick('SHIFT')}
                    className={`py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      isShift 
                        ? (isHK ? 'bg-[#F62E70] text-white shadow-md' : 'bg-amber-400 text-black shadow-md')
                        : (isHK ? 'bg-white text-amber-600 hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-700/80 text-amber-300 hover:bg-slate-600')
                    }`}
                  >
                    SHIFT
                  </button>

                  <button
                    onClick={() => handleKeyClick('ALPHA')}
                    className={`py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      isAlpha 
                        ? (isHK ? 'bg-[#F62E70] text-white shadow-md' : 'bg-rose-500 text-white shadow-md')
                        : (isHK ? 'bg-white text-[#F62E70] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-700/80 text-rose-300 hover:bg-slate-600')
                    }`}
                  >
                    ALPHA
                  </button>

                  <button
                    onClick={() => handleKeyClick('OPTN')}
                    className={`py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      isOptnOpen 
                        ? (isHK ? 'bg-[#F62E70] text-white shadow-md' : 'bg-blue-600 text-white shadow-md')
                        : (isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-700/80 text-slate-200 hover:bg-slate-600')
                    }`}
                  >
                    OPTN
                  </button>

                  <button
                    onClick={() => handleKeyClick('CALC')}
                    className={`py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      calcVarPrompt 
                        ? (isHK ? 'bg-[#F62E70] text-white shadow-md' : 'bg-amber-500 text-black shadow-md')
                        : (isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-700/80 text-slate-200 hover:bg-slate-600')
                    }`}
                  >
                    CALC
                  </button>

                  <button
                    onClick={() => setMode(prev => prev === '1' ? '8' : prev === '8' ? '9' : '1')}
                    className={`py-2 rounded-lg text-xs font-black transition-colors cursor-pointer ${
                      isHK ? 'bg-white text-[#F62E70] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-700/80 text-blue-300 hover:bg-slate-600'
                    }`}
                    title="Chuyển chế độ nhanh COMP -> TABLE -> EQN"
                  >
                    MENU
                  </button>

                  <button
                    onClick={() => handleKeyClick('ON')}
                    className={`py-2 rounded-lg text-xs font-black transition-colors cursor-pointer ${
                      isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-700/80 text-slate-100 hover:bg-slate-600'
                    }`}
                  >
                    ON
                  </button>
                </div>

                {/* Math Row 2: √, □/□, x^2, x^□, log, ln */}
                <div className="grid grid-cols-6 gap-1.5">
                  {[
                    { label: '√□', shift: '∛', val: '√(' },
                    { label: '□/□', shift: 'a b/c', val: '/' },
                    { label: 'x²', shift: 'x!', val: '^2' },
                    { label: 'x^□', shift: 'ⁿ√', val: '^' },
                    { label: 'log', shift: '10ˣ', val: 'log(' },
                    { label: 'ln', shift: 'eˣ', val: 'ln(' }
                  ].map((btn, bIdx) => (
                    <button
                      key={bIdx}
                      onClick={() => handleKeyClick(btn.val)}
                      className={`py-2 rounded-lg text-xs font-black transition-colors cursor-pointer flex flex-col items-center justify-center leading-none ${
                        isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-700/80 text-slate-200 hover:bg-slate-600'
                      }`}
                    >
                      <span className={`text-[9px] font-bold mb-0.5 ${isHK ? 'text-[#F62E70]' : 'text-amber-300'}`}>{btn.shift}</span>
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
                      className={`py-2 rounded-lg text-xs font-black transition-colors cursor-pointer ${
                        isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-700/80 text-slate-200 hover:bg-slate-600'
                      }`}
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
                      className={`py-2 rounded-lg text-xs font-black transition-colors cursor-pointer ${
                        btn.val === 'S<=>D' 
                          ? (isHK ? 'bg-[#FACCD7] text-[#F62E70] border border-[#F6BBC4] hover:bg-[#F98EAA] hover:text-white' : 'bg-amber-600/30 text-amber-300 border border-amber-500/40 hover:bg-amber-600/50')
                          : (isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-700/80 text-slate-200 hover:bg-slate-600')
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>

                {/* Numpad Block: 7 8 9 DEL AC */}
                <div className="grid grid-cols-5 gap-1.5 pt-1">
                  <button onClick={() => handleKeyClick('7')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}>7</button>
                  <button onClick={() => handleKeyClick('8')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}>8</button>
                  <button onClick={() => handleKeyClick('9')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}>9</button>
                  <button onClick={() => handleKeyClick('DEL')} className={`py-2.5 sm:py-3 rounded-xl text-xs font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-[#F62E70] text-white hover:bg-[#e02663] shadow-pink-500/20' : 'bg-rose-700 text-white hover:bg-rose-600'
                  }`}>DEL</button>
                  <button onClick={() => handleKeyClick('AC')} className={`py-2.5 sm:py-3 rounded-xl text-xs font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-[#F62E70] text-white hover:bg-[#e02663] shadow-pink-500/20' : 'bg-rose-600 text-white hover:bg-rose-500'
                  }`}>AC</button>
                </div>

                {/* Numpad Block: 4 5 6 × ÷ */}
                <div className="grid grid-cols-5 gap-1.5">
                  <button onClick={() => handleKeyClick('4')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}>4</button>
                  <button onClick={() => handleKeyClick('5')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}>5</button>
                  <button onClick={() => handleKeyClick('6')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}>6</button>
                  <button onClick={() => handleKeyClick('×')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-[#FACCD7] text-[#4A1525] hover:bg-[#F98EAA] hover:text-white border border-[#F6BBC4]' : 'bg-slate-700 text-slate-100 hover:bg-slate-600'
                  }`}>×</button>
                  <button onClick={() => handleKeyClick('÷')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-[#FACCD7] text-[#4A1525] hover:bg-[#F98EAA] hover:text-white border border-[#F6BBC4]' : 'bg-slate-700 text-slate-100 hover:bg-slate-600'
                  }`}>÷</button>
                </div>

                {/* Numpad Block: 1 2 3 + - */}
                <div className="grid grid-cols-5 gap-1.5">
                  <button onClick={() => handleKeyClick('1')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}>1</button>
                  <button onClick={() => handleKeyClick('2')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}>2</button>
                  <button onClick={() => handleKeyClick('3')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}>3</button>
                  <button onClick={() => handleKeyClick('+')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-[#FACCD7] text-[#4A1525] hover:bg-[#F98EAA] hover:text-white border border-[#F6BBC4]' : 'bg-slate-700 text-slate-100 hover:bg-slate-600'
                  }`}>+</button>
                  <button onClick={() => handleKeyClick('-')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-[#FACCD7] text-[#4A1525] hover:bg-[#F98EAA] hover:text-white border border-[#F6BBC4]' : 'bg-slate-700 text-slate-100 hover:bg-slate-600'
                  }`}>-</button>
                </div>

                {/* Numpad Block: 0 . ×10^x Ans = */}
                <div className="grid grid-cols-5 gap-1.5">
                  <button onClick={() => handleKeyClick('0')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}>0</button>
                  <button onClick={() => handleKeyClick('.')} className={`py-2.5 sm:py-3 rounded-xl text-sm font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}>.</button>
                  <button onClick={() => handleKeyClick('×10^')} className={`py-2.5 sm:py-3 rounded-xl text-xs font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-700 text-slate-100 hover:bg-slate-600'
                  }`}>×10ˣ</button>
                  <button onClick={() => handleKeyClick('Ans')} className={`py-2.5 sm:py-3 rounded-xl text-xs font-black transition-colors shadow-xs cursor-pointer ${
                    isHK ? 'bg-white text-[#4A1525] hover:bg-pink-50 border border-[#FACCD7]' : 'bg-slate-700 text-slate-100 hover:bg-slate-600'
                  }`}>Ans</button>
                  <button onClick={() => handleKeyClick('=')} className={`py-2.5 sm:py-3 rounded-xl text-base font-black transition-all cursor-pointer ${
                    isHK ? 'bg-gradient-to-r from-[#F62E70] to-[#F98EAA] text-white hover:brightness-105 shadow-md shadow-pink-500/40' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-md shadow-blue-500/30'
                  }`}>=</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Advanced Function Workbenches (Mode 8 Table, Mode 9 Eqn, Mode 4 Matrix, Vector, etc.) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Mode 8: TABLE WORKBENCH */}
            {mode === '8' && (
              <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 ${isHK ? 'bg-[#FFF0F4]/95 border-[#FACCD7] text-[#4A1525]' : 'bg-slate-950/80 border-slate-800 text-white'}`}>
                <div className="flex items-center justify-between">
                  <h3 className={`text-sm font-black ${isHK ? 'text-[#F62E70]' : 'text-blue-400'} flex items-center gap-2`}>
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

                {/* Min / Max Extrema Detection */}
                {tableStats && (
                  <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/60 text-xs font-mono grid grid-cols-2 gap-2">
                    <div>Max f(x) = <span className="text-emerald-400 font-bold">{tableStats.max}</span> (tại x = {tableStats.maxAt})</div>
                    <div>Min f(x) = <span className="text-rose-400 font-bold">{tableStats.min}</span> (tại x = {tableStats.minAt})</div>
                  </div>
                )}

                {/* Table Result Display */}
                {tableRows && (
                  <div className="overflow-x-auto max-h-[220px] rounded-xl border border-slate-800">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-900 text-slate-300 border-b border-slate-800 sticky top-0">
                        <tr>
                          <th className="p-2 text-center">x</th>
                          <th className={`p-2 ${isHK ? 'text-[#F62E70]' : 'text-blue-400'}`}>f(x)</th>
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
              <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 ${isHK ? 'bg-[#FFF0F4]/95 border-[#FACCD7] text-[#4A1525]' : 'bg-slate-950/80 border-slate-800 text-white'}`}>
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
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[
                    { id: 'poly2', label: 'Bậc 2 (ax²+bx+c=0)' },
                    { id: 'poly3', label: 'Bậc 3 (ax³+bx²+cx+d=0)' },
                    { id: 'simul2', label: 'Hệ 2 ẩn' },
                    { id: 'simul3', label: 'Hệ 3 ẩn' }
                  ].map(sm => (
                    <button
                      key={sm.id}
                      onClick={() => { setEqnSubMode(sm.id); setEqnResult(null); }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                        eqnSubMode === sm.id ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {sm.label}
                    </button>
                  ))}
                </div>

                {/* Poly 2 inputs */}
                {eqnSubMode === 'poly2' && (
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400">Hệ số a:</label>
                      <input type="text" value={polyCoeffs.a} onChange={(e) => setPolyCoeffs(prev => ({ ...prev, a: e.target.value }))} className="w-full mt-1 px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-center font-mono text-xs font-bold" />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400">Hệ số b:</label>
                      <input type="text" value={polyCoeffs.b} onChange={(e) => setPolyCoeffs(prev => ({ ...prev, b: e.target.value }))} className="w-full mt-1 px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-center font-mono text-xs font-bold" />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400">Hệ số c:</label>
                      <input type="text" value={polyCoeffs.c} onChange={(e) => setPolyCoeffs(prev => ({ ...prev, c: e.target.value }))} className="w-full mt-1 px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-center font-mono text-xs font-bold" />
                    </div>
                  </div>
                )}

                {/* Poly 3 inputs */}
                {eqnSubMode === 'poly3' && (
                  <div className="grid grid-cols-4 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400">a:</label>
                      <input type="text" value={polyCoeffs.a} onChange={(e) => setPolyCoeffs(prev => ({ ...prev, a: e.target.value }))} className="w-full mt-1 px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-center font-mono text-xs font-bold" />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400">b:</label>
                      <input type="text" value={polyCoeffs.b} onChange={(e) => setPolyCoeffs(prev => ({ ...prev, b: e.target.value }))} className="w-full mt-1 px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-center font-mono text-xs font-bold" />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400">c:</label>
                      <input type="text" value={polyCoeffs.c} onChange={(e) => setPolyCoeffs(prev => ({ ...prev, c: e.target.value }))} className="w-full mt-1 px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-center font-mono text-xs font-bold" />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400">d:</label>
                      <input type="text" value={polyCoeffs.d} onChange={(e) => setPolyCoeffs(prev => ({ ...prev, d: e.target.value }))} className="w-full mt-1 px-2 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-center font-mono text-xs font-bold" />
                    </div>
                  </div>
                )}

                {/* Simul 2 inputs */}
                {eqnSubMode === 'simul2' && (
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-2">
                      <input type="text" value={simulCoeffs[0][0]} onChange={e => { const c = [...simulCoeffs]; c[0][0] = e.target.value; setSimulCoeffs(c); }} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs" placeholder="a1" />
                      <input type="text" value={simulCoeffs[0][1]} onChange={e => { const c = [...simulCoeffs]; c[0][1] = e.target.value; setSimulCoeffs(c); }} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs" placeholder="b1" />
                      <input type="text" value={simulCoeffs[0][2]} onChange={e => { const c = [...simulCoeffs]; c[0][2] = e.target.value; setSimulCoeffs(c); }} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs font-bold text-amber-400" placeholder="= c1" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <input type="text" value={simulCoeffs[1][0]} onChange={e => { const c = [...simulCoeffs]; c[1][0] = e.target.value; setSimulCoeffs(c); }} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs" placeholder="a2" />
                      <input type="text" value={simulCoeffs[1][1]} onChange={e => { const c = [...simulCoeffs]; c[1][1] = e.target.value; setSimulCoeffs(c); }} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs" placeholder="b2" />
                      <input type="text" value={simulCoeffs[1][2]} onChange={e => { const c = [...simulCoeffs]; c[1][2] = e.target.value; setSimulCoeffs(c); }} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs font-bold text-amber-400" placeholder="= c2" />
                    </div>
                  </div>
                )}

                {/* Simul 3 inputs */}
                {eqnSubMode === 'simul3' && (
                  <div className="space-y-1.5">
                    {simulCoeffs3.map((row, rIdx) => (
                      <div key={rIdx} className="grid grid-cols-4 gap-1.5">
                        <input type="text" value={row[0]} onChange={e => { const c = [...simulCoeffs3]; c[rIdx][0] = e.target.value; setSimulCoeffs3(c); }} className="px-1.5 py-1 rounded bg-slate-900 border border-slate-700 text-center text-xs" placeholder="x" />
                        <input type="text" value={row[1]} onChange={e => { const c = [...simulCoeffs3]; c[rIdx][1] = e.target.value; setSimulCoeffs3(c); }} className="px-1.5 py-1 rounded bg-slate-900 border border-slate-700 text-center text-xs" placeholder="y" />
                        <input type="text" value={row[2]} onChange={e => { const c = [...simulCoeffs3]; c[rIdx][2] = e.target.value; setSimulCoeffs3(c); }} className="px-1.5 py-1 rounded bg-slate-900 border border-slate-700 text-center text-xs" placeholder="z" />
                        <input type="text" value={row[3]} onChange={e => { const c = [...simulCoeffs3]; c[rIdx][3] = e.target.value; setSimulCoeffs3(c); }} className="px-1.5 py-1 rounded bg-slate-900 border border-slate-700 text-center text-xs font-bold text-amber-400" placeholder="=" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Eqn Result */}
                {eqnResult && (
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/60 text-xs space-y-1.5 font-mono">
                    <div className="font-black text-purple-300">{eqnResult.type || eqnResult.error}</div>
                    {eqnResult.x1 !== undefined && <div>x₁ = <span className="text-white font-bold">{eqnResult.x1}</span></div>}
                    {eqnResult.x2 !== undefined && <div>x₂ = <span className="text-white font-bold">{eqnResult.x2}</span></div>}
                    {eqnResult.x3 !== undefined && <div>x₃ = <span className="text-white font-bold">{eqnResult.x3}</span></div>}
                    {eqnResult.x !== undefined && <div>x = <span className="text-white font-bold">{eqnResult.x}</span></div>}
                    {eqnResult.y !== undefined && <div>y = <span className="text-white font-bold">{eqnResult.y}</span></div>}
                    {eqnResult.z !== undefined && <div>z = <span className="text-white font-bold">{eqnResult.z}</span></div>}
                    {eqnResult.vertex && (
                      <div className="text-[11px] text-slate-400 pt-1 border-t border-purple-800/40">
                        Đỉnh parabol: X-Value = {eqnResult.vertex.x}, Y-Value = {eqnResult.vertex.y}
                      </div>
                    )}
                    {eqnResult.extrema && (
                      <div className="text-[11px] text-slate-400 pt-1 border-t border-purple-800/40">
                        Điểm cực trị: ({eqnResult.extrema[0].x}; {eqnResult.extrema[0].y}) và ({eqnResult.extrema[1].x}; {eqnResult.extrema[1].y})
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Mode A: INEQUALITY WORKBENCH */}
            {mode === 'A' && (
              <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 ${isHK ? 'bg-[#FFF0F4]/95 border-[#FACCD7] text-[#4A1525]' : 'bg-slate-950/80 border-slate-800 text-white'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-amber-400 flex items-center gap-2">
                    <Sliders className="w-4 h-4" />
                    <span>Bất Phương Trình Bậc 2 (Menu A - INEQ)</span>
                  </h3>
                  <button
                    onClick={solveInequality}
                    className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-black cursor-pointer shadow-sm"
                  >
                    Giải BPT
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Dấu:</span>
                  {['>', '>=', '<', '<='].map(sign => (
                    <button
                      key={sign}
                      onClick={() => setIneqType(sign)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${ineqType === sign ? 'bg-amber-500 text-black' : 'bg-slate-800 text-slate-300'}`}
                    >
                      {sign === '>=' ? '≥' : sign === '<=' ? '≤' : sign}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-[10px] text-slate-400">a:</label>
                    <input type="text" value={ineqCoeffs.a} onChange={e => setIneqCoeffs(p => ({ ...p, a: e.target.value }))} className="w-full mt-1 px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs font-bold" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400">b:</label>
                    <input type="text" value={ineqCoeffs.b} onChange={e => setIneqCoeffs(p => ({ ...p, b: e.target.value }))} className="w-full mt-1 px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs font-bold" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400">c:</label>
                    <input type="text" value={ineqCoeffs.c} onChange={e => setIneqCoeffs(p => ({ ...p, c: e.target.value }))} className="w-full mt-1 px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs font-bold" />
                  </div>
                </div>

                {ineqResult && (
                  <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs font-mono font-bold text-amber-200">
                    {ineqResult}
                  </div>
                )}
              </div>
            )}

            {/* Mode 2: COMPLEX NUMBER WORKBENCH */}
            {mode === '2' && (
              <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 ${isHK ? 'bg-[#FFF0F4]/95 border-[#FACCD7] text-[#4A1525]' : 'bg-slate-950/80 border-slate-800 text-white'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-rose-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Số Phức (Menu 2 - CMPLX)</span>
                  </h3>
                  <button
                    onClick={calculateComplex}
                    className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-black cursor-pointer shadow-sm"
                  >
                    Tính Toán
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-slate-400 font-bold">Số phức z₁ (a + bi):</label>
                    <div className="grid grid-cols-2 gap-1.5 mt-1">
                      <input type="text" value={cplxZ1.r} onChange={e => setCplxZ1(p => ({ ...p, r: e.target.value }))} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs font-bold" placeholder="Thực a" />
                      <input type="text" value={cplxZ1.i} onChange={e => setCplxZ1(p => ({ ...p, i: e.target.value }))} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs font-bold" placeholder="Ảo b" />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 font-bold">Số phức z₂ (c + di):</label>
                    <div className="grid grid-cols-2 gap-1.5 mt-1">
                      <input type="text" value={cplxZ2.r} onChange={e => setCplxZ2(p => ({ ...p, r: e.target.value }))} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs font-bold" placeholder="Thực c" />
                      <input type="text" value={cplxZ2.i} onChange={e => setCplxZ2(p => ({ ...p, i: e.target.value }))} className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs font-bold" placeholder="Ảo d" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Phép tính:</span>
                  {['+', '-', '×', '÷'].map(op => (
                    <button
                      key={op}
                      onClick={() => setCplxOp(op)}
                      className={`w-8 h-8 rounded-lg font-black text-xs cursor-pointer ${cplxOp === op ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-300'}`}
                    >
                      {op}
                    </button>
                  ))}
                </div>

                {cplxResult && (
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 text-xs font-mono space-y-1">
                    <div>Kết quả: <span className="text-rose-300 font-bold">{cplxResult.form}</span></div>
                    <div>Môđun |z|: <span className="text-white font-bold">{cplxResult.modulus}</span></div>
                    <div>Argument: <span className="text-amber-300 font-bold">{cplxResult.argDeg}°</span></div>
                    <div>Số phức liên hợp z̄: <span className="text-slate-300 font-bold">{cplxResult.conjugate}</span></div>
                  </div>
                )}
              </div>
            )}

            {/* Mode 3: BASE-N WORKBENCH */}
            {mode === '3' && baseNData && (
              <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 ${isHK ? 'bg-[#FFF0F4]/95 border-[#FACCD7] text-[#4A1525]' : 'bg-slate-950/80 border-slate-800 text-white'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-emerald-400 flex items-center gap-2">
                    <Binary className="w-4 h-4" />
                    <span>Chuyển Đổi Hệ Cơ Số (Menu 3 - BASE-N)</span>
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Hệ nhập:</span>
                  {['DEC', 'HEX', 'BIN', 'OCT'].map(t => (
                    <button
                      key={t}
                      onClick={() => setBaseNType(t)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${baseNType === t ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Giá trị đầu vào ({baseNType}):</label>
                  <input
                    type="text"
                    value={baseNVal}
                    onChange={e => setBaseNVal(e.target.value)}
                    className="w-full mt-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-sm font-mono font-bold text-white uppercase"
                  />
                </div>

                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs font-mono space-y-1.5">
                  <div className="flex justify-between"><span>Dec (Thập phân):</span><span className="font-bold text-white">{baseNData.DEC}</span></div>
                  <div className="flex justify-between"><span>Hex (Thập lục):</span><span className="font-bold text-emerald-300">{baseNData.HEX}</span></div>
                  <div className="flex justify-between"><span>Bin (Nhị phân):</span><span className="font-bold text-amber-300">{baseNData.BIN}</span></div>
                  <div className="flex justify-between"><span>Oct (Bát phân):</span><span className="font-bold text-cyan-300">{baseNData.OCT}</span></div>
                </div>
              </div>
            )}

            {/* Mode 4: MATRIX WORKBENCH */}
            {mode === '4' && (
              <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 ${isHK ? 'bg-[#FFF0F4]/95 border-[#FACCD7] text-[#4A1525]' : 'bg-slate-950/80 border-slate-800 text-white'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-black text-indigo-400 flex items-center gap-2">
                    <Grid3X3 className="w-4 h-4" />
                    <span>Ma Trận (Menu 4 - MATRIX)</span>
                  </h3>
                  <div className="flex items-center gap-1.5">
                    {['2', '3'].map(d => (
                      <button
                        key={d}
                        onClick={() => setMatrixDim(d)}
                        className={`px-2 py-0.5 rounded text-[11px] font-bold cursor-pointer ${matrixDim === d ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                      >
                        {d}×{d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 font-bold">Ma trận A ({matrixDim}×{matrixDim}):</label>
                  <div className="grid grid-cols-3 gap-1.5 mt-1">
                    {matrixA.slice(0, parseInt(matrixDim)).map((row, i) => (
                      row.slice(0, parseInt(matrixDim)).map((val, j) => (
                        <input
                          key={`${i}-${j}`}
                          type="number"
                          value={val}
                          onChange={e => {
                            const newM = matrixA.map(r => [...r]);
                            newM[i][j] = parseFloat(e.target.value) || 0;
                            setMatrixA(newM);
                          }}
                          className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-center text-xs font-mono font-bold"
                        />
                      ))
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {['A+B', 'A-B', 'A×B', 'detA', 'transA'].map(op => (
                    <button
                      key={op}
                      onClick={() => calculateMatrix(op)}
                      className="px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-xs font-bold text-indigo-200 cursor-pointer"
                    >
                      {op}
                    </button>
                  ))}
                </div>

                {matrixResult && (
                  <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-800/60 text-xs font-mono space-y-1">
                    <div className="font-bold text-indigo-300">{matrixResult.title}</div>
                    {matrixResult.value !== undefined && <div className="text-white font-bold">{matrixResult.value}</div>}
                    {matrixResult.matrix && (
                      <div className="space-y-0.5 pt-1">
                        {matrixResult.matrix.map((row, rIdx) => (
                          <div key={rIdx} className="flex gap-3 text-white">
                            [ {row.map((v, cIdx) => <span key={cIdx} className="w-10 text-right">{v}</span>)} ]
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Mode 5: VECTOR OXYZ WORKBENCH */}
            {mode === '5' && (
              <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 ${isHK ? 'bg-[#FFF0F4]/95 border-[#FACCD7] text-[#4A1525]' : 'bg-slate-950/80 border-slate-800 text-white'}`}>
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
                    <div>Diện tích tam giác S: <span className="text-cyan-300 font-bold">{vctResult.triangleArea}</span></div>
                  </div>
                )}
              </div>
            )}

            {/* Mode 6: STATISTICS WORKBENCH */}
            {mode === '6' && (
              <div className={`p-4 sm:p-5 rounded-2xl border space-y-4 ${isHK ? 'bg-[#FFF0F4]/95 border-[#FACCD7] text-[#4A1525]' : 'bg-slate-950/80 border-slate-800 text-white'}`}>
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
                    <div>Tứ phân vị Q₁: <span className="text-amber-300 font-bold">{statResult.q1}</span></div>
                    <div>Trung vị Med (Q₂): <span className="text-amber-300 font-bold">{statResult.median}</span></div>
                    <div>Tứ phân vị Q₃: <span className="text-amber-300 font-bold">{statResult.q3}</span></div>
                    <div>Khoảng tứ phân vị IQR: <span className="text-cyan-300 font-bold">{statResult.iqr}</span></div>
                  </div>
                )}
              </div>
            )}

            {/* Calculation History Log */}
            <div className={`p-4 sm:p-5 rounded-2xl border space-y-3 ${isHK ? 'bg-[#FFF0F4]/95 border-[#FACCD7] text-[#4A1525]' : 'bg-slate-950/80 border-slate-800 text-white'}`}>
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-slate-300 flex items-center gap-1.5">
                  <RotateCcw className={`w-3.5 h-3.5 ${isHK ? 'text-[#F62E70]' : 'text-blue-400'}`} />
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

              <div className="space-y-1.5 max-h-[140px] overflow-y-auto pr-1 text-xs font-mono">
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
                      <span className={`${isHK ? 'text-[#F62E70]' : 'text-blue-400'} font-bold`}>{item.val}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Real PC App Integration Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-900/50 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-xl bg-blue-600/30 ${isHK ? 'text-[#F62E70]' : 'text-blue-400'} flex items-center justify-center shrink-0`}>
                  <Terminal className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-black text-white">Cacao fx-580 Emulator Trên PC</div>
                  <div className="text-[11px] text-slate-400">
                    {desktopStatus?.installed ? 'Đã cài đặt tại Program Files (x86)' : 'C:\\Program Files (x86)\\CACAO\\...'}
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
