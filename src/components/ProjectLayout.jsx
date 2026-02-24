import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectLayout({ title, header, image, tech = [], children }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-50 to-white text-gray-900 px-4 sm:px-6 lg:px-16 pt-8 pb-20">
      <div className="w-full max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-gray-700 hover:text-black transition-all font-medium group"
          >
            <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all group-hover:-translate-x-1 shadow-sm">
              ←
            </span>
            <span className="hidden sm:inline">Back</span>
          </button>
        </div>

        <div className="pt-8 lg:pt-20 mb-12 lg:mb-20 space-y-6 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent leading-[1.1] tracking-tight">
            {title}
          </h1>

          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {header}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4 px-2">
            {tech.map((t) => (
              <div key={t.name} className="group flex items-center gap-2 px-4 py-2.5 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
                <img src={t.icon} alt={t.name} className="w-5 h-5 object-contain" />
                <span className="text-xs sm:text-sm font-semibold text-gray-800">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-12 px-4">
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl bg-white/50 border border-gray-100/30">
            <img src={image} alt={header} className="w-full h-[320px] object-cover object-center" />
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4">
          {children}
        </main>
      </div>
    </div>
  );
}
