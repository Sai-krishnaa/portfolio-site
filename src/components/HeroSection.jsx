// src/components/HeroSection.jsx
import React, { useEffect, useState } from "react";
import LightPillar from "./LightPillar";
import flag from "../assets/flag.png";

/* ===================== NAVBAR ===================== */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="w-full relative z-50 bg-[#f3f4f6]">
        <div className="w-[95%] mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold tracking-tight">
            Sai Krishna
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10 text-base md:text-lg text-gray-700">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#skills" className="hover:text-black">Skills</a>
            <a href="#case-study" className="hover:text-black">Case Study</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop Contact */}
            <button className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-black text-white hover:bg-white hover:text-black border border-transparent hover:border-black transition">
              Contact Us
            </button>

            {/* 🔴 ARROW BUTTON (acts like hamburger on mobile) */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-red-600 text-white
                         flex items-center justify-center text-xl md:text-2xl
                         transition-transform duration-200 hover:scale-105"
            >
              ↗
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE SLIDE MENU ================= */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />

        {/* Slide panel */}
        <div className="absolute right-0 top-0 h-full w-[100%] bg-white p-6 shadow-xl flex flex-col">
          <div className="flex justify-end mb-10">
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center"
            >
              ↗
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-lg font-medium text-gray-800">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#case-study" onClick={() => setMenuOpen(false)}>Case Study</a>
          </nav>

          <button className="mt-auto px-6 py-3 rounded-full bg-black text-white">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

/* ===================== SOCIAL PILL ===================== */
function SocialPill({ icon, label }) {
  return (
    <button className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow w-full">
      <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
        <img src={icon} alt={label} className="w-4 h-4" />
      </div>
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </button>
  );
}

/* ===================== HERO SECTION ===================== */
export default function HeroSection() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const formattedTime = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(time);

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <Navbar />

      <main className="container-wide px-4 md:px-6 pb-14">
        <section className="mt-6 w-full rounded-[32px] bg-white shadow-lg p-1">
          <div className="relative rounded-[28px] overflow-hidden bg-black min-h-[460px] md:min-h-[560px]">
            <div className="absolute inset-0">
              <LightPillar
                topColor="#FF48FF"
                bottomColor="#2D35FF"
                intensity={1.4}
                rotationSpeed={1.1}
                glowAmount={0.012}
                pillarWidth={2.1}
                pillarHeight={0.65}
                noiseIntensity={0.55}
                pillarRotation={12}
                interactive={false}
                mixBlendMode="screen"
                className="w-full h-full"
              />
            </div>

            <div className="absolute inset-0 z-10 px-6 md:px-10 pt-6">
              <div className="flex justify-between">
                <div className="inline-flex items-center gap-3 bg-white/95 px-3 py-2 rounded-2xl shadow">
                  <img src={flag} alt="flag" className="w-8 h-8" />
                  <div className="text-xs">
                    <div className="font-semibold">Sai Krishna 2025°</div>
                    <div className="text-[11px] text-gray-500">
                      Data is the raw material
                    </div>
                  </div>
                </div>

                <div className="bg-white/95 px-6 py-2 rounded-2xl shadow text-sm">
                  {formattedTime}
                </div>
              </div>

              <div className="mt-16 text-center text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold">
                  Turn your <span className="italic">data</span> into <br />
                  <span className="italic">decisions</span>, not noise.
                </h1>

                <p className="mt-3 text-sm md:text-base text-white/80 max-w-2xl mx-auto">
                  Clear dashboards, automated workflows, and practical insights for
                  teams that want to move with confidence.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <SocialPill icon="/assets/icon-facebook.svg" label="Facebook" />
            <SocialPill icon="/assets/icon-instagram.svg" label="Instagram" />
            <SocialPill icon="/assets/icon-linkedin.svg" label="LinkedIn" />
            <SocialPill icon="/assets/icon-dribbble.svg" label="Dribbble" />
            <SocialPill icon="/assets/icon-behance.svg" label="Behance" />
            <SocialPill icon="/assets/icon-portfolio.svg" label="Portfolio" />
          </div>
        </section>
      </main>
    </div>
  );
}
