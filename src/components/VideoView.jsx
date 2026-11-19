import React, { useState } from 'react';
import { PlayCircle, ExternalLink, Video, Clock, Filter } from 'lucide-react';
import { RECOMMENDED_VIDEOS } from '../data/tipsData';

export default function VideoView() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'logic', label: 'Tư duy Logic' },
    { id: 'data', label: 'Phân tích số liệu' },
    { id: 'vietnamese', label: 'Tiếng Việt' },
    { id: 'math', label: 'Toán học & Casio' },
  ];

  const filteredVideos = filter === 'all' 
    ? RECOMMENDED_VIDEOS 
    : RECOMMENDED_VIDEOS.filter(v => v.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-200 mb-3 border border-rose-300 dark:border-rose-800">
          <Video className="w-4 h-4 text-rose-600" />
          Kênh học tập & Livestream chất lượng cao
        </div>
        <h1 className="text-2xl sm:text-4xl font-black vact-text-primary tracking-tight">
          Tuyển Tập Video Bài Giảng & Giải Đề V-ACT
        </h1>
        <p className="mt-2 vact-text-secondary max-w-3xl text-sm sm:text-base leading-relaxed">
          Học từ các thầy cô luyện thi nổi tiếng, xem phân tích ma trận đề và mẹo bấm máy trực quan qua video tuyển chọn.
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all cursor-pointer ${
              filter === c.id
                ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-400/40'
                : 'vact-card border vact-border vact-text-secondary hover:vact-text-primary'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="vact-card rounded-3xl border vact-border overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Thumbnail Container */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-6 h-6 fill-current" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 text-[11px] font-black px-2 py-0.5 rounded-lg bg-black/80 text-white backdrop-blur-sm flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  {video.duration}
                </span>
              </div>

              {/* Video Info */}
              <div className="p-5">
                <div className="text-xs font-black text-rose-600 dark:text-rose-400 mb-1.5 uppercase tracking-wide">
                  {video.channel}
                </div>
                <h3 className="font-black vact-text-primary text-base mb-2 line-clamp-2 leading-snug">
                  {video.title}
                </h3>
                <p className="text-xs sm:text-sm vact-text-secondary line-clamp-2 leading-relaxed font-medium">
                  {video.description}
                </p>
              </div>
            </div>

            {/* Watch Link */}
            <div className="p-5 pt-0">
              <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-black vact-card-subtle hover:bg-rose-600 hover:text-white border vact-border vact-text-primary transition-all shadow-xs"
              >
                <span>Xem trên YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
