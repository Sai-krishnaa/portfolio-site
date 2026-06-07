import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import flag from "../assets/flag.png";
import heroBanner from "../assets/PM.png";   // Desktop
import heroBannerr from "../assets/M.png";  // Mobile

// desktop Banners
import linkedin from "../assets/linkedin_logo.png";
import leetcode from "../assets/leetcode_logo.png";
import hackerrank from "../assets/hackerrank_logo.png";
import github from "../assets/github_logo.png";

// mobile Banners
import linkedinm from "../assets/linkedin_logoo.png";
import leetcodem from "../assets/leetcode_logoo.png";
import hackerrankm from "../assets/hackerrank_logoo.png";
import githubm from "../assets/github_logoo.png";

/* ===================== SOCIAL ===================== */
function SocialBanner({
  desktopImage,
  mobileImage,
  url,
  alt,
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block overflow-hidden
        rounded-[20px]
        border border-gray-100
        shadow-sm
        hover:shadow-md
        transition-all duration-300
      "
    >
      {/* Desktop Banner */}
      <img
        src={desktopImage}
        alt={alt}
        className="
          hidden md:block
          w-full
          h-[78px]
          object-cover
          hover:scale-105
          transition-transform duration-500
        "
      />

      {/* Mobile Banner */}
      <img
        src={mobileImage}
        alt={alt}
        className="
          block md:hidden
          w-full
          h-[90px]
          object-cover
        "
      />
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
          
          <div className="relative rounded-[31px] overflow-hidden min-h-[460px] md:min-h-[540px]">

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
          {/* SOCIAL */}
<div className="mt-4 mb-1 grid grid-cols-2 md:grid-cols-4 gap-3">

  <SocialBanner
    desktopImage={linkedin}
    mobileImage={linkedinm}
    url="https://www.linkedin.com/in/saikrishnacodes/"
    alt="LinkedIn"
  />

  <SocialBanner
    desktopImage={github}
    mobileImage={githubm}
    url="https://github.com/Sai-krishnaa"
    alt="GitHub"
  />

  <SocialBanner
    desktopImage={leetcode}
    mobileImage={leetcodem}
    url="https://leetcode.com/u/Code-Sai/"
    alt="LeetCode"
  />

  <SocialBanner
    desktopImage={hackerrank}
    mobileImage={hackerrankm}
    url="https://www.hackerrank.com/profile/saikrishna34326"
    alt="HackerRank"
  />

</div>
        </section>
      </main>
    </div>
  );
}