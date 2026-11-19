import React, { useState } from 'react';
import { X, Copy, Check, Terminal, Globe, Cloud, GitBranch, ArrowRight } from 'lucide-react';

export default function DeployGuide({ onClose }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const stepsCli = [
    {
      title: 'Bước 1: Mở Terminal tại thư mục dự án',
      command: 'cd C:\\Users\\lamha\\.gemini\\antigravity\\scratch\\vact-prep-app',
      desc: 'Di chuyển vào thư mục chứa mã nguồn của app.'
    },
    {
      title: 'Bước 2: Cài đặt Vercel CLI toàn cục (nếu chưa có)',
      command: 'npm install -g vercel',
      desc: 'Công cụ dòng lệnh chính thức từ Vercel.'
    },
    {
      title: 'Bước 3: Chạy lệnh triển khai một chạm',
      command: 'vercel',
      desc: 'Làm theo hướng dẫn trên màn hình (chọn Yes cho các tùy chọn mặc định). Sau 30 giây, bạn sẽ nhận được một đường link https://...vercel.app hoàn toàn miễn phí!'
    },
    {
      title: 'Bước 4: Triển khai bản Production hoàn chỉnh',
      command: 'vercel --prod',
      desc: 'Đưa phiên bản chính thức lên mạng toàn cầu với tốc độ cao nhất.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">
            ▲
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Hướng Dẫn Đưa App Lên Vercel Miễn Phí 100%
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Không tốn chi phí máy chủ, hỗ trợ tên miền riêng và chứng chỉ SSL bảo mật tự động.
            </p>
          </div>
        </div>

        {/* Why Vercel banner */}
        <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 text-xs sm:text-sm text-blue-900 dark:text-blue-200 mb-6 flex items-start gap-3">
          <Cloud className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            Dự án đã được tích hợp sẵn tệp cấu hình <code>vercel.json</code>. Máy chủ Vercel cung cấp 100GB băng thông/tháng hoàn toàn miễn phí cho gói cá nhân (Hobby Tier).
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-6">
          <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <Terminal className="w-4 h-4 text-slate-500" />
            Cách 1: Triển khai nhanh bằng Vercel CLI (Khuyên dùng)
          </h3>

          {stepsCli.map((step, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200 dark:border-slate-800">
              <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">
                {step.title}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                {step.desc}
              </p>
              <div className="flex items-center justify-between bg-slate-900 text-slate-100 rounded-lg px-3 py-2 font-mono text-xs overflow-x-auto">
                <code>{step.command}</code>
                <button
                  onClick={() => copyToClipboard(step.command, idx)}
                  className="ml-2 text-slate-400 hover:text-white transition-colors"
                  title="Sao chép lệnh"
                >
                  {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Method 2: GitHub integration */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm">
          <div className="font-bold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-slate-500" />
            Cách 2: Đẩy lên GitHub rồi kết nối Vercel
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Tạo một kho lưu trữ (Repository) trên GitHub, đẩy toàn bộ thư mục này lên. Sau đó truy cập <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-blue-600 font-semibold underline">vercel.com</a>, bấm "Add New Project" &gt; Chọn repository đó &gt; Bấm "Deploy". Mỗi khi bạn cập nhật code, Vercel sẽ tự động build lại mà bạn không cần làm gì thêm!
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition-opacity"
          >
            Đã hiểu, quay lại học
          </button>
        </div>
      </div>
    </div>
  );
}
