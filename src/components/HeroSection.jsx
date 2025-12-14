import React, { useEffect, useState } from "react";
import LightPillar from "./LightPillar";
import flag from "../assets/flag.png";
import heroBg from "../assets/hero-bg.png";

import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import leetcode from "../assets/leetcode.svg";
import hackerank from "../assets/hackerank.svg";

/* ===================== NAVBAR ===================== */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full relative z-50 bg-[#f3f4f6]">
        <div className="w-[95%] mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="text-2xl md:text-3xl font-bold tracking-tight">
            Sai Krishna
          </div>

          <nav className="hidden md:flex items-center gap-10 text-base md:text-lg text-gray-700">
            <a href="#about" className="hover:text-black">About</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#skills" className="hover:text-black">Skills</a>
            <a href="#case-study" className="hover:text-black">Case Study</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex px-6 py-2.5 rounded-full
                               bg-black text-white border border-transparent
                               transition hover:bg-white hover:text-black hover:border-black">
              Contact Us
            </button>

            <button
              onClick={() => setMenuOpen(prev => !prev)}
              className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-red-600 text-white
                         flex items-center justify-center text-xl md:text-2xl
                         transition-transform duration-200 hover:scale-105"
            >
              <span
                className={`inline-block transition-transform duration-300 ${
                  menuOpen ? "rotate-180" : ""
                }`}
              >
                ↗
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />

        <div className="absolute right-0 top-0 h-full w-full bg-white p-6 flex flex-col">
          <div className="flex justify-end mb-8">
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
function SocialPill({ icon, platform, username, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-2xl bg-white px-4 py-3
                 shadow-[0_8px_20px_rgba(15,23,42,0.06)]
                 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="w-10 h-10 rounded-full bg-white border border-gray-200
                      flex items-center justify-center">
        <img src={icon} alt={platform} className="w-5 h-5 object-contain" />
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-sm font-semibold text-gray-900">{username}</span>
        <span className="text-xs text-gray-500">{platform}</span>
      </div>
    </a>
  );
}

/* ===================== HERO SECTION ===================== */
export default function HeroSection() {
  const [time, setTime] = useState(new Date());
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
          <div
            className="relative rounded-[28px] overflow-hidden min-h-[460px] md:min-h-[560px]"
            style={
              !isDesktop
                ? {
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
          >
            {/* DESKTOP: LIGHT PILLAR */}
            {isDesktop && (
              <div className="absolute inset-0">
                <LightPillar
                  topColor="#FF48FF"
                  bottomColor="#2D35FF"
                  intensity={1.3}
                  rotationSpeed={1.0}
                  glowAmount={0.01}
                  pillarWidth={2.1}
                  pillarHeight={0.65}
                  noiseIntensity={0.5}
                  pillarRotation={12}
                  interactive={false}
                  mixBlendMode="screen"
                  className="w-full h-full"
                />
              </div>
            )}

            {/* OVERLAYS */}
            <div className="absolute inset-0" />
            {/* CONTENT */}
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
                  Clear dashboards, automated workflows, and practical insights
                  for teams that want to move with confidence.
                </p>

                <div className="mt-6 flex justify-center gap-3">
                  <button className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium
                                     transition hover:bg-black hover:text-white">
                    Resume
                  </button>
                  <button className="px-6 py-2.5 rounded-full bg-red-600 text-white text-sm font-medium
                                     transition hover:bg-white hover:text-black">
                    Work
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SOCIAL GRID */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <SocialPill icon={linkedin} platform="LinkedIn" username="B Sai Krishna"
              url="https://www.linkedin.com/in/saikrishnacodes/" />
            <SocialPill icon={github} platform="GitHub" username="saikrishna"
              url="https://github.com/Sai-krishnaa" />
            <SocialPill icon={leetcode} platform="LeetCode" username="SaiKrishna"
              url="https://leetcode.com/u/Code-Sai/" />
            <SocialPill icon={hackerank} platform="HackerRank" username="saikrishna_dev"
              url="https://www.hackerrank.com/profile/saikrishna34326" />
          </div>
        </section>
      </main>
    </div>
  );
}
