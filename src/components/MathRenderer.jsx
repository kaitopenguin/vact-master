import React, { useMemo } from 'react';
import katex from 'katex';

/**
 * Universal Math & Markdown Table Renderer for V-ACT
 * Supports:
 * 1. Markdown tables (| Header | ... |)
 * 2. KaTeX LaTeX formulas ($...$ for inline, $$...$$ for block)
 * 3. On-the-fly normalization of Word/PDF font encoding artifacts
 */

export function cleanMathText(raw) {
  if (!raw || typeof raw !== 'string') return '';

  return raw
    // Symbol font & mathematical encoding fixes
    .replace(/−/g, '-\\infty ')
    .replace(/\+/g, '+\\infty ')
    .replace(//g, '\\infty ')
    .replace(//g, ' \\cup ')
    .replace(//g, ' \\cap ')
    .replace(//g, '[')
    .replace(//g, ']')
    .replace(//g, '(')
    .replace(//g, ')')
    .replace(//g, '-')
    .replace(//g, ' \\cdot ')
    .replace(//g, '')
    .replace(//g, '^\\circ')
    .replace(/||/g, ']')
    .replace(/||/g, '\\}')
    .replace(//g, '•')
    .replace(/\\bullet(?![a-zA-Z])/g, '•')
    .replace(//g, '\\alpha')
    .replace(//g, "'")
    .replace(//g, '\\eta')
    .replace(//g, '')
    .replace(//g, '\\int ')
    .replace(//g, ' \\ge ')
    .replace(//g, ' \\le ')
    .replace(//g, ' \\ne ')
    .replace(//g, ' \\in ')
    .replace(//g, ' \\notin ')
    .replace(/|||/g, '')
    .replace(//g, '\\pi ')
    .replace(/|/g, '\\mathbb{R}')
    .replace(//g, '\\Delta')
    .replace(//g, '\\setminus')
    .replace(//g, '\\{')
    .replace(//g, '\\}')
    .replace(/|/g, '')
    .replace(/[−–]/g, '-')
    .replace(//g, '+')
    .replace(//g, '=')
    .replace(//g, '<')
    .replace(//g, '>')
    .replace(//g, ' \\times ')
    .replace(//g, '\\Delta')
    .replace(//g, '^\\circ')
    .replace(/â–¡|□/g, ' \\ge ')
    .replace(/ï€«/g, '+')
    .replace(/ï€­/g, '-')
    .replace(/ï€½/g, '=')
    .replace(/ï‚¹/g, '\\ne')
    .replace(/ï‚±/g, '\\pm')
    .replace(/ï‚³/g, '\\ge')
    .replace(/ï‚£/g, '\\le')
    .replace(/ïƒŽ/g, '\\in')
    .replace(/ïƒ /g, '\\notin')
    .replace(/ïƒˆ/g, '\\cup')
    .replace(/ïƒ‡/g, '\\cap')
    .replace(/ï‚®/g, '\\to')
    .replace(/ïƒž/g, '\\Rightarrow')
    .replace(/ïƒ›/g, '\\Leftrightarrow')
    .replace(/ï °/g, '\\pi')
    .replace(/ï‚¥/g, '\\infty')
    .replace(/ï‚¡/g, '\\mathbb{R}')
    .replace(/||/g, '\\left(')
    .replace(/||/g, '\\right)')
    .replace(/[\uF000-\uF0FF]/g, '');
}

/**
 * Render an individual segment that may contain LaTeX math $...$ or $$...$$
 */
function MathInline({ text, className = '' }) {
  const parts = useMemo(() => {
    if (!text) return [];
    let sanitized = cleanMathText(text);

    // Defensive auto-wrap for un-delimited LaTeX expressions or math formulas
    if (!sanitized.includes('$')) {
      const hasLatex = /\\[a-zA-Z]+|\^\{?[0-9a-zA-Z\^\*\+\-]+\}?|_\{?[0-9a-zA-Z\^\*\+\-]+\}?/.test(sanitized);
      if (hasLatex) {
        const stripped = sanitized.replace(/\\text\{[^{}]*\}|\\[a-zA-Z]+(\{[^{}]*\}|\[[^\[\]]*\])?/g, '');
        const hasVietnameseWords = /[a-zA-ZÀ-Ỹà-ỹ]{4,}/.test(stripped);
        if (!hasVietnameseWords || sanitized.startsWith('\\begin{') || sanitized.startsWith('\\text{')) {
          sanitized = `$${sanitized}$`;
        }
      }
    }

    // Regex matching $$...$$ (block) or $...$ (inline)
    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g;
    const tokens = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(sanitized)) !== null) {
      if (match.index > lastIndex) {
        tokens.push({
          type: 'text',
          value: sanitized.slice(lastIndex, match.index)
        });
      }

      const rawFormula = match[0];
      const isBlock = rawFormula.startsWith('$$');
      const formula = isBlock
        ? rawFormula.slice(2, -2).trim()
        : rawFormula.slice(1, -1).trim();

      try {
        const html = katex.renderToString(formula, {
          displayMode: isBlock,
          throwOnError: false,
          output: 'htmlAndMathml'
        });
        tokens.push({
          type: isBlock ? 'math-block' : 'math-inline',
          html
        });
      } catch {
        tokens.push({
          type: 'text',
          value: rawFormula
        });
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < sanitized.length) {
      tokens.push({
        type: 'text',
        value: sanitized.slice(lastIndex)
      });
    }

    return tokens;
  }, [text]);

  return (
    <span className={className}>
      {parts.map((part, idx) => {
        if (part.type === 'math-inline') {
          return (
            <span
              key={idx}
              className="inline-math mx-0.5"
              dangerouslySetInnerHTML={{ __html: part.html }}
            />
          );
        }
        if (part.type === 'math-block') {
          return (
            <div
              key={idx}
              className="block-math my-2 text-center overflow-x-auto py-1"
              dangerouslySetInnerHTML={{ __html: part.html }}
            />
          );
        }
        return (
          <span key={idx}>
            {part.value.split(/(\*[^*\n]+?\*)/g).map((seg, sIdx) =>
              seg.startsWith('*') && seg.endsWith('*') && seg.length > 2 ? (
                <em key={sIdx} className="italic">{seg.slice(1, -1)}</em>
              ) : (
                <React.Fragment key={sIdx}>{seg}</React.Fragment>
              )
            )}
          </span>
        );
      })}
    </span>
  );
}

/**
 * Render Markdown Table
 */
function MarkdownTable({ lines }) {
  if (!lines || lines.length === 0) return null;

  // Header is lines[0]
  const parseRow = (line) => {
    return line
      .trim()
      .replace(/^\|/, '')
      .replace(/\|$/, '')
      .split('|')
      .map(cell => cell.trim());
  };

  const headers = parseRow(lines[0]);
  const dataRows = lines.slice(2).map(parseRow); // skip delimiter row |:--:|

  return (
    <div className="w-full max-w-full overflow-x-auto my-3 rounded-2xl border vact-border bg-[var(--bg-card)] shadow-xs">
      <table className="w-full min-w-full divide-y vact-border text-center text-[11px] sm:text-sm">
        <thead className="bg-[var(--bg-card-subtle)]">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="py-2 px-1.5 sm:px-3 font-black vact-text-primary border-r vact-border last:border-r-0 break-words"
              >
                <MathInline text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y vact-border font-medium bg-[var(--bg-card)]">
          {dataRows.map((row, rIdx) => (
            <tr
              key={rIdx}
              className="hover:bg-[var(--bg-card-subtle)] transition-colors"
            >
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className={`py-1.5 px-1.5 sm:px-3 border-r vact-border last:border-r-0 break-words ${
                    cIdx === 0
                      ? 'font-bold bg-[var(--bg-card-subtle)] text-[var(--accent)]'
                      : 'vact-text-primary'
                  }`}
                >
                  <MathInline text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MathRenderer({ content, className = '' }) {
  const blocks = useMemo(() => {
    if (!content || typeof content !== 'string') return [];

    let formatted = content;
    // Format glued markdown table rows if separated by '| |' on a single line
    if (!formatted.includes('\n|') && formatted.includes('|') && (formatted.includes(':---') || formatted.includes('---:'))) {
      formatted = formatted.replace(/\|\s*\|\s*/g, '|\n|');
      formatted = formatted.replace(/(:\s*)(\|)/g, '$1\n\n$2');
    }

    const lines = formatted.split('\n');
    const result = [];
    let currentTable = null;
    let currentText = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const isTableLine = /^\s*\|.*\|\s*$/.test(line);

      if (isTableLine) {
        if (currentText.length > 0) {
          result.push({ type: 'text', value: currentText.join('\n') });
          currentText = [];
        }
        if (!currentTable) {
          currentTable = [line];
        } else {
          currentTable.push(line);
        }
      } else {
        if (currentTable) {
          result.push({ type: 'table', lines: currentTable });
          currentTable = null;
        }
        currentText.push(line);
      }
    }

    if (currentTable) {
      result.push({ type: 'table', lines: currentTable });
    }
    if (currentText.length > 0) {
      result.push({ type: 'text', value: currentText.join('\n') });
    }

    return result;
  }, [content]);

  return (
    <div className={`space-y-1 ${className}`}>
      {blocks.map((block, idx) => {
        if (block.type === 'table') {
          return <MarkdownTable key={idx} lines={block.lines} />;
        }
        return (
          <div key={idx} className="whitespace-pre-line">
            <MathInline text={block.value} />
          </div>
        );
      })}
    </div>
  );
}
