// src/components/HeroSection.jsx
import React, { useEffect, useState } from 'react'
import LightPillar from './LightPillar'
import flag from "../assets/flag.png";

export function Navbar() {
  return (
    <header className="w-full">
      {/* wide container for navbar */}
      <div className="w-[95%] mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="text-2xl md:text-3xl font-bold tracking-tight">Sai Krishna</div>

        <nav className="hidden md:flex items-center gap-10 text-base md:text-lg text-gray-700">
  <a
    href="#projects"
    className="transition-all duration-150 ease-out hover:text-black hover:font-semibold hover:text-[1.05rem]"
  >
    About
  </a>
  <a
    href="#about"
    className="transition-all duration-150 ease-out hover:text-black hover:font-semibold hover:text-[1.05rem]"
  >
    Projects
  </a>
  <a
    href="#services"
    className="transition-all duration-150 ease-out hover:text-black hover:font-semibold hover:text-[1.05rem]"
  >
    Skills
  </a>
  <a
    href="#services"
    className="transition-all duration-150 ease-out hover:text-black hover:font-semibold hover:text-[1.05rem]"
  >
    Game
  </a>
  <a
    href="#services"
    className="transition-all duration-150 ease-out hover:text-black hover:font-semibold hover:text-[1.05rem]"
  >
    Case Study
  </a>
</nav>


        <div className="flex items-center gap-3">
        <button
  className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full
             bg-black text-white text-base md:text-lg font-medium
             border border-transparent
             transition-all duration-200 ease-out
             hover:bg-white hover:text-black hover:border-black font-medium"
>
  Contact Us
</button>


          <button
  className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl md:text-2xl
             transition-transform duration-200 ease-out hover:scale-105 group"
>
  <span className="inline-block transition-transform duration-300 ease-out group-hover:rotate-180">
    ↗
  </span>
</button>

        </div>
      </div>
    </header>
  )
}

function SocialPill({ icon, label }) {
  return (
    <button className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-[0_8px_20px_rgba(15,23,42,0.06)] w-full">
      <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
        {icon ? (
          <img src={icon} alt={`${label} icon`} className="w-4 h-4" />
        ) : (
          <span className="text-sm font-semibold">{label[0]}</span>
        )}
      </div>
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </button>
  )
}

export default function HeroSection() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const formattedTime = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(time)

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      <Navbar />

      {/* HERO + SOCIAL, same width as navbar */}
      <main className="container-wide px-4 md:px-6 pb-14">
        <section className="mt-6 w-full rounded-[32px] bg-white shadow-lg p-1">
          {/* HERO CARD */}
          <div className="relative rounded-[28px] overflow-hidden bg-black min-h-[460px] md:min-h-[560px] flex flex-col">
            {/* Light pillar */}
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

            {/* vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_70%)]" />

            {/* mist for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/15" />

            {/* CONTENT */}
            <div className="absolute inset-0 z-10 px-6 md:px-10 pt-6 pb-0 flex flex-col">
              {/* top row */}
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center gap-3 bg-white/95 px-3 py-2 rounded-2xl shadow-md">
                  <img src={flag} alt="Country flag" className="w-8 h-8 object-cover" />
                  <div className="text-xs">
                    <div className="font-semibold text-gray-900">Sai Krishna 2025°</div>
                    <div className="text-[11px] text-gray-500">
                      Data is the raw material
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-3 bg-white/95 px-6 py-2 rounded-2xl shadow-md">
                    <div className="text-sm font-medium text-gray-900">
                      {formattedTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* center text + button */}
              <div className="mt-16 text-center text-white drop-shadow-md">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold tracking-tight">
  Turn your{" "}
  <span className="italic ">
    data
  </span>{" "}
  into
  <br />
  <span className="italic ">
    decisions
  </span>
  , not noise.
</h1>





  <p className="mt-3 text-xs sm:text-sm md:text-base text-white/80 max-w-2xl mx-auto">
    Clear dashboards, automated workflows, and practical insights for teams that want
    to move with confidence.
  </p>

  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
  <button
  className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full
             bg-white text-black text-base md:text-lg font-medium
             border border-transparent
             transition-all duration-200 ease-out
             hover:bg-black hover:text-white hover:border-black font-medium"
>
Get My Resume
</button>
<button
  className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full
             bg-red-600 text-white text-base md:text-lg font-medium
             border border-transparent
             transition-all duration-200 ease-out
             hover:bg-white hover:text-black hover:border-black font-medium"
>
See My Work 
</button>
  </div>
</div>



              {/* big main heading - centered and at bottom */}
              {/* <div className="mt-auto pb-6 md:pb-8">
                <h1 className="text-[32px] sm:text-[48px] md:text-[48px] lg:text-[72px] xl:text-[88px] 2xl:text-[104px] leading-none font-extrabold text-white/50 tracking-tight md:tracking-tighter text-center mix-blend-screen drop-shadow-2xl whitespace-nowrap">
                  Data-Decisions-Direction
                </h1>
              </div> */}
            </div>
          </div>

          {/* SOCIAL BAR */}
          <div className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <SocialPill icon="/assets/icon-facebook.svg" label="Facebook" />
              <SocialPill icon="/assets/icon-instagram.svg" label="Instagram" />
              <SocialPill icon="/assets/icon-linkedin.svg" label="Linkedin" />
              <SocialPill icon="/assets/icon-dribbble.svg" label="Dribbble" />
              <SocialPill icon="/assets/icon-behance.svg" label="Behance" />
              <SocialPill icon="/assets/icon-portfolio.svg" label="Portfolio" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
