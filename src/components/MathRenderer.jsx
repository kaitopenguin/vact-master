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
    .replace(//g, ' \\ge ')
    .replace(//g, ' \\le ')
    .replace(//g, ' \\ne ')
    .replace(//g, ' \\in ')
    .replace(//g, ' \\notin ')
    .replace(//g, '')
    .replace(//g, '')
    .replace(//g, '')
    .replace(//g, '\\pi ')
    .replace(//g, '\\mathbb{R}')
    .replace(/|/g, '')
    .replace(/[−–]/g, '-')
    .replace(//g, '+')
    .replace(//g, '=')
    .replace(//g, '<')
    .replace(//g, '>')
    .replace(/□/g, '\\ge ');
}

/**
 * Render an individual segment that may contain LaTeX math $...$ or $$...$$
 */
function MathInline({ text, className = '' }) {
  const parts = useMemo(() => {
    if (!text) return [];
    const sanitized = cleanMathText(text);

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
        return <span key={idx}>{part.value}</span>;
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
    <div className="overflow-x-auto my-3 rounded-2xl border vact-border bg-slate-50/70 dark:bg-slate-900/70 shadow-xs max-w-full">
      <table className="min-w-full divide-y vact-border text-center text-xs sm:text-sm">
        <thead className="bg-slate-100/90 dark:bg-slate-800/90">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="py-2.5 px-3 font-black text-slate-800 dark:text-slate-100 border-r vact-border last:border-r-0"
              >
                <MathInline text={h} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y vact-border font-medium">
          {dataRows.map((row, rIdx) => (
            <tr
              key={rIdx}
              className="hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition-colors"
            >
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className={`py-2 px-3 border-r vact-border last:border-r-0 ${
                    cIdx === 0
                      ? 'font-bold bg-slate-100/40 dark:bg-slate-800/40 text-blue-600 dark:text-blue-400'
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

    const lines = content.split('\n');
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
