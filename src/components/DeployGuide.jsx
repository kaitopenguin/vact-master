import React, { useState } from 'react';
import { X, Copy, Check, Terminal, ExternalLink, Cloud, GitBranch, AlertCircle, ShieldCheck } from 'lucide-react';

export default function DeployGuide({ onClose }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const stepsCli = [
    {
      title: 'Bước 1: Cài đặt Vercel CLI (Nếu chưa có)',
      command: 'npm install -g vercel',
      desc: 'Công cụ dòng lệnh chính thức do Vercel phát triển.'
    },
    {
      title: 'Bước 2: Di chuyển vào thư mục dự án',
      command: 'cd vact-prep-app',
      desc: 'Đảm bảo bạn đang đứng tại thư mục gốc chứa file package.json.'
    },
    {
      title: 'Bước 3: Đăng nhập và liên kết tài khoản Vercel',
      command: 'vercel',
      desc: 'Lần đầu chạy, CLI sẽ hỏi xác nhận và gửi email đăng nhập.'
    },
    {
      title: 'Bước 4: Triển khai bản Production hoàn chỉnh',
      command: 'vercel --prod',
      desc: 'Đưa phiên bản chính thức lên mạng toàn cầu với tốc độ cao nhất.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="vact-card rounded-3xl border vact-border max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black">
            ▲
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black vact-text-primary">
              Hướng Dẫn Đưa App Lên Vercel Miễn Phí 100%
            </h2>
            <p className="text-xs sm:text-sm vact-text-secondary font-medium">
              Không tốn chi phí máy chủ, hỗ trợ tên miền riêng và chứng chỉ SSL bảo mật tự động.
            </p>
          </div>
        </div>

        {/* CRITICAL FIX ALERT FOR "REPOSITORY COULDN'T BE FOUND" */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-400 dark:border-amber-700 text-xs sm:text-sm mb-6">
          <div className="flex items-center gap-2 font-black text-amber-900 dark:text-amber-200 mb-2">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Cách khắc phục lỗi: "The repository 'vact-master' couldn't be found"</span>
          </div>
          <div className="space-y-2 text-amber-950 dark:text-amber-100 leading-relaxed font-medium">
            <p>
              <strong>Nguyên nhân:</strong> Vercel GitHub App trên tài khoản của bạn chưa được cấp quyền truy cập vào repo <code>kaitopenguin/vact-master</code>, hoặc tài khoản GitHub kết nối trên Vercel khác với chủ sở hữu repo.
            </p>
            <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-amber-300 dark:border-amber-800 space-y-1.5 font-bold">
              <div>👉 <strong>Cách xử lý trong 30 giây:</strong></div>
              <ol className="list-decimal pl-5 space-y-1 font-medium">
                <li>Truy cập: <a href="https://github.com/settings/installations" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 underline font-bold">github.com/settings/installations</a></li>
                <li>Tìm ứng dụng <strong>Vercel</strong> và bấm nút <strong>Configure</strong>.</li>
                <li>Ở mục <strong>Repository access</strong>, chọn <strong>All repositories</strong> (hoặc thêm <code>vact-master</code>) rồi bấm <strong>Save</strong>.</li>
                <li>Quay lại màn hình Vercel bấm nút <strong>Deploy</strong> là thành công 100%!</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Why Vercel banner */}
        <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60 text-xs sm:text-sm text-blue-900 dark:text-blue-200 mb-6 flex items-start gap-3 font-medium">
          <Cloud className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            Dự án đã được tích hợp sẵn file cấu hình <code>vercel.json</code>. Máy chủ Vercel cung cấp 100GB băng thông/tháng hoàn toàn miễn phí cho gói cá nhân (Hobby Tier).
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-6">
          <h3 className="font-black text-sm vact-text-primary flex items-center gap-2">
            <Terminal className="w-4 h-4 text-blue-600" />
            Cách 1: Triển khai nhanh bằng Vercel CLI (Nếu không muốn liên kết GitHub)
          </h3>

          {stepsCli.map((step, idx) => (
            <div key={idx} className="vact-card-subtle rounded-xl p-4 border vact-border">
              <div className="font-bold text-xs sm:text-sm vact-text-primary mb-1">
                {step.title}
              </div>
              <p className="text-xs vact-text-secondary mb-2">
                {step.desc}
              </p>
              <div className="flex items-center justify-between bg-slate-900 text-slate-100 rounded-lg px-3 py-2 font-mono text-xs overflow-x-auto">
                <code>{step.command}</code>
                <button
                  onClick={() => copyToClipboard(step.command, idx)}
                  className="ml-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Sao chép lệnh"
                >
                  {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Method 2: GitHub integration */}
        <div className="p-4 rounded-xl border vact-border vact-card text-xs sm:text-sm">
          <div className="font-black vact-text-primary mb-1.5 flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-emerald-600" />
            Cách 2: Đẩy lên GitHub rồi kết nối Vercel (Tự động cập nhật mỗi khi commit)
          </div>
          <p className="vact-text-secondary leading-relaxed font-medium">
            Toàn bộ code mới nhất của bạn đã được đẩy lên <a href="https://github.com/kaitopenguin/vact-master" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 font-bold underline">github.com/kaitopenguin/vact-master</a>. Sau khi cấp quyền tại cài đặt GitHub Installations, Vercel sẽ tự động deploy và cấp cho bạn đường link trực tuyến miễn phí vĩnh viễn!
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black shadow-xs cursor-pointer active:scale-95 transition-all"
          >
            Đã hiểu, quay lại học
          </button>
        </div>
      </div>
    </div>
  );
}
