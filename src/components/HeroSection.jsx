import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import flag from "../assets/flag.png";
import heroBanner from "../assets/PM.png";   // Desktop
import heroBannerr from "../assets/M.png";  // Mobile

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
          <div className="text-2xl md:text-3xl font-bold">
            Sai Krishna
          </div>

          <nav className="hidden md:flex items-center gap-10 text-gray-700">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#case-study">Case Study</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-black text-white hover:bg-orange-600">
              Contact Us
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-11 h-11 rounded-full bg-orange-600 text-white flex items-center justify-center"
            >
              ↗
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"} transition`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-full bg-white p-6 flex flex-col">
          <div className="flex justify-end mb-8">
            <button onClick={() => setMenuOpen(false)} className="w-10 h-10 rounded-full bg-orange-600 text-white">↗</button>
          </div>

          <nav className="flex flex-col gap-6 text-lg">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#case-study">Case Study</a>
          </nav>

          <button className="mt-auto px-6 py-3 rounded-full bg-orange-600 text-white">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

/* ===================== SOCIAL ===================== */
function SocialPill({ icon, platform, username, url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-4 rounded-2xl bg-white px-4 py-3 shadow">
      
      <div className="w-10 h-10 border flex items-center justify-center rounded-full">
        <img src={icon} alt={platform} className="w-5 h-5" />
      </div>

      <div>
        <div className="text-sm font-semibold">{username}</div>
        <div className="text-xs text-gray-500">{platform}</div>
      </div>
    </a>
  );
}

/* ===================== HERO ===================== */
export default function HeroSection() {
  const navigate = useNavigate();
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

      <main className="px-4 md:px-6 pb-14">
        <section className="mt-6 w-full rounded-4xl bg-white shadow-lg p-1">
          
          <div className="relative rounded-[28px] overflow-hidden min-h-[460px] md:min-h-[560px]">

            {/* DESKTOP IMAGE */}
            <img
              src={heroBanner}
              alt="hero"
              className="absolute inset-0 w-full h-full object-cover hidden md:block"
            />

            {/* MOBILE IMAGE */}
            <img
              src={heroBannerr}
              alt="hero-mobile"
              className="absolute inset-0 w-full h-full object-cover block md:hidden"
            />

            {/* CONTENT */}
            <div className="absolute inset-0 px-6 md:px-10 pt-6 flex flex-col z-10">

              {/* TOP BAR (DESKTOP ONLY) */}
              <div className="hidden md:flex justify-between">
                <div className="inline-flex items-center gap-3 bg-white px-3 py-2 rounded-2xl shadow">
                  <img src={flag} alt="flag" className="w-8 h-8" />
                  <div className="text-xs">
                    <div className="font-semibold">Sai Krishna 2026°</div>
                    <div className="text-gray-500 text-[11px]">
                      Data is the raw material
                    </div>
                  </div>
                </div>

                <div className="bg-white px-2 py-3 rounded-2xl shadow text-sm">
                  {formattedTime}
                </div>
              </div>

              {/* DESKTOP TEXT */}
              <div className="hidden md:flex mt-20 text-center text-black flex-col">
                <h1 className="max-w-3xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
                  Data is useless <span className="font-bold" style={{ color: "orange-600" }}>until it drives </span>decisions<br />
                  <span className="font-bold" style={{ color: "orange-600" }}>growth </span> and <span className="font-bold" style={{ color: "orange-600" }}>real impact</span>
                </h1>

                <p className="mt-4 text-sm md:text-base text-black/80 max-w-xl mx-auto">
                  Clear dashboards, automated workflows, and practical insights
                  that help teams make confident decisions.
                </p>

                <div className="mt-6 flex justify-center gap-3">
                  <button
                    onClick={() => window.open("/B_SaiKrishna_Data_Analyst_Resume.pdf", "_blank")}
                    className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-black hover:text-white"
                  >
                    Resume
                  </button>

                  <button
                    onClick={() => navigate("/works")}
                    className="px-6 py-2.5 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-white hover:text-black"
                  >
                    Work
                  </button>
                </div>
              </div>

              {/* MOBILE BUTTONS (BOTTOM FIXED) */}
              <div className="absolute bottom-6 left-0 w-full flex justify-center gap-3 md:hidden z-20">

                <button
                  onClick={() => window.open("/B_SaiKrishna_Data_Analyst_Resume.pdf", "_blank")}
                  className="px-6 py-2.5 rounded-full bg-white text-black shadow"
                >
                  Resume
                </button>

                <button
                  onClick={() => navigate("/works")}
                  className="px-6 py-2.5 rounded-full bg-orange-600 text-white shadow"
                >
                  Work
                </button>

              </div>

            </div>
          </div>

          {/* SOCIAL */}
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