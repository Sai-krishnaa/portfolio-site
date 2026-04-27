import React, { useState } from "react";
// import img2 from "../assets/img2.jpeg";
import img2 from "../assets/ab.png";
import sql from "../assets/sql.svg"
import excel from "../assets/excel.svg"
import powerbi from "../assets/power-bi.svg"
import python from "../assets/python.svg"
import git from "../assets/git.svg"
import n8n from "../assets/n8n.svg"


function DotRed() {
  return (
    <span className="inline-block w-2.5 h-2.5 bg-red-600 rounded-full mr-3" />
  );
}

function SmallThumb({ src }) {
  return (
    <img src={src} alt="" className="w-20 h-12 object-cover rounded-md shadow-sm" />
  );
}

export default function About() {
  const [showAllCerts, setShowAllCerts] = useState(false);

  const certifications = [
    "Data Bricks AI Fundamentals",
    "Scaler × Google Startup School: Prompt to Prototype program",
    "Kaggle × Google 5-Day AI Agents Program",
    "Cognizant AI Forage",
    "Young Turks",
    "AI Workshop NxtWave"
  ];

  const visibleCerts = showAllCerts ? certifications : certifications.slice(0, 2);

  return (
    <section className="container-wide px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left content (col span 7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* small label */}
          <div className="flex items-center text-sm text-gray-600">
            <DotRed />
            <div className="font-medium">About</div>
          </div>

          {/* heading + subtext */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Turning Raw Data Into Clear, <span className="text-gray-400"> Actionable Direction</span>
            </h2>
            <p className="mt-3 text-sm text-gray-600 max-w-xl">
              Celebrating awards and nominations that reflect our commitment to clarity, innovation, and timeless minimalism.
            </p>
          </div>

          {/* big card: Site of the Year */}
          <article className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            {/* Top row: Trophy icon (left) + Arrow icon (right) */}
            <div className="flex items-start justify-between mb-4">
              
              {/* small arrow icon (top-right) */}
              <div className="text-gray-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 17L17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-3xl font-semibold text-gray-900 mb-2">Hi, I’m B Sai Krishna — a data analyst who turns messy, real-world data into decisions that actually move the business.</h3>

            {/* Description */}
            <p className="text-md text-gray-500 mb-5">
            At this early stage of my career, I bring energy, discipline, and a mindset of continuous improvement to every project I build.
            </p>

            {/* badges/pills row */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-black/90 text-white px-3 py-2 rounded-full text-sm">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full" />
                <span>Dive Into My Work</span>
              </div>

              {/* Skills Row */}
              <div className="flex items-center flex-wrap gap-5">
  {[
    { icon: sql, name: "SQL" },
    { icon: excel, name: "Excel" },
    { icon: powerbi, name: "Power BI" },
    { icon: python, name: "Python" },
    { icon: git, name: "Git" },
    { icon: n8n, name: "n8n" },
  ].map((skill) => (
    <div
      key={skill.name}
      className="
        group
        flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-sm border 
        border-gray-200 transition-all duration-300 ease-out
        hover:shadow-md hover:-translate-y-1
      "
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="
          w-4 h-4 object-contain 
          transition-all duration-300 ease-out 
          group-hover:w-5 group-hover:h-5
        "
      />
      <span
        className="
          text-xs text-gray-700 font-medium 
          transition-all duration-300 ease-out 
          group-hover:text-sm
        "
      >
        {skill.name}
      </span>
    </div>
  ))}
</div>
            </div>
          </article>

          {/* two small cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-lg font-bold text-gray-900">Academic Credentials</h2>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Undergraduate Degree (BCA)
              </h3>
              <p>Siksha 'O' Anusandhan, ITER</p>

              <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Senior Secondary (12th)
              </h3>
              <p>Venkateswar English Medium School</p>
              <a className="mt-4 inline-block text-xs text-blue-600" href="#">Access Resume ↗</a>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4">
              <div className="flex-1">  
              <h2 className="text-lg font-bold text-gray-900">Certifications</h2>
              <div className="space-y-2">
                {visibleCerts.map((cert, idx) => (
                  <h3 key={idx} className="mt-2 text-lg font-semibold text-gray-900">
                    {cert}
                  </h3>
                ))}
              </div>
              {certifications.length > 2 && (
                <button 
                  onClick={() => setShowAllCerts(!showAllCerts)}
                  className="mt-4 inline-block text-xs text-blue-600 hover:text-blue-700 font-medium transition"
                >
                  {showAllCerts ? "Show Less ↑" : `Read More (${certifications.length - 2} more) ↓`}
                </button>
              )}
              </div>
            </div>
          </div>
        </div>

        {/* Right column (col span 5): Tall image card */}
        <aside className="lg:col-span-5 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-md bg-gray-50 aspect-[3/5] max-h-[650px] w-full">
            <img src={img2} alt="Award hero" className="w-full h-full object-cover" />
          </div>
        </aside>
      </div>
    </section>
  );
}