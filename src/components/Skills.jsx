import React from "react";
import { useNavigate } from "react-router-dom";

import python from "../assets/python.svg";
import excel from "../assets/excel.svg";
import powerbi from "../assets/power-bi.svg";
import sql from "../assets/sql.svg";
import git from "../assets/git.svg";
import fabric from "../assets/fabric.png";
import Numpy from "../assets/NumPy.svg";
import Pandas from "../assets/Pandas.svg";

import bg from "../assets/bb.png";
const isMobile = window.innerWidth < 640;
export default function SkillsSection() {
  // 🔥 LOWER ARC (outer ring)
  const lowerSkills = [
  {
    icon: python,
    name: "Python",
    angle: 215,
    r: isMobile ? 290 : 310,
  },
  {
    icon: Pandas,
    name: "Pandas",
    angle: 248,
    r: isMobile ? 185 : 280,
  },
  {
    icon: fabric,
    name: "Fabric",
    angle: 292,
    r: isMobile ? 185 : 280,
  },
  {
    icon: Numpy,
    name: "Numpy",
    angle: 325,
    r: isMobile ? 290 : 320,
  },
];

  // 🔥 UPPER ARC (inner ring)
const upperSkills = [
  {
    icon: excel,
    name: "Excel",
    angle: 225,
    r: isMobile ? 305 : 370,
  },
  {
    icon: powerbi,
    name: "Power BI",
    angle: 290,
    r: isMobile ? 230 : 350,
  },
  {
    icon: sql,
    name: "SQL",
    angle: 250,
    r: isMobile ? 230 : 350,
  },
  {
    icon: git,
    name: "Git",
    angle: 315,
    r: isMobile ? 305 : 375,
  },
  
];

  const RADIUS = 300;
  const INNER_RADIUS = 230; // smaller = upper arc
  const CX = 400;
  const CY = 490;
  const navigate = useNavigate();

  return (
    <div
      className="w-[95%] mx-auto relative flex items-start justify-center min-h-[600px] md:min-h-[785px] rounded-3xl overflow-hidden pt-16

"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute top-[58%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 pt-20 md:pt-40 w-[90%] md:w-auto">

  {/* SMALL TAG */}
  <div className="inline-block px-4 py-1.5 rounded-full bg-orange-700 text-blue text-m mb-4 text-white">
    Skills & Tools
  </div>

  {/* MAIN HEADING */}
  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
    Turn <span className="text-orange-600"> Data </span>Into<span className="text-orange-600"> Decisions</span> <span> That Matter</span>
  </h1>

  {/* SUBTEXT */}
  <p className="text-gray-300 text-sm md:text-base mt-4 max-w-md mx-auto">
    From data cleaning to <span className = "text-orange-600 "> dashboards </span> , these skills power my workflow.
  </p>
       <button onClick={() => navigate("/works")} className="mt-6 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-orange-600 hover:text-white transition">
    View My Work →
  </button>
</div>
      {/* ORBITS */}
      <div className="absolute bottom-0 left-0 right-0 z-10" style={{
  height: isMobile ? "1150px" : "950px",
}}>

        {/* 🔥 LOWER ARC */}
        {lowerSkills.map((skill, i) => {
          const rad = (skill.angle * Math.PI) / 180;
const r = skill.r || RADIUS;

const xPct = ((CX + r * Math.cos(rad)) / 800) * 100;
const yPct = ((CY + r * Math.sin(rad)) / 490) * 100;

          return (
            <div
              key={`lower-${i}`}
              className="absolute"
              style={{
                left: `${xPct}%`,
                bottom: `${100 - yPct}%`,
                transform: "translate(-50%, 50%)",
              }}
            >
              <SkillItem skill={skill} />
            </div>
          );
        })}

        {/* 🔥 UPPER ARC */}
        {upperSkills.map((skill, i) => {
          const rad = (skill.angle * Math.PI) / 180;
const r = skill.r || INNER_RADIUS;

const xPct = ((CX + r * Math.cos(rad)) / 800) * 100;
const yPct = ((CY + r * Math.sin(rad)) / 490) * 100;

          return (
            <div
              key={`upper-${i}`}
              className="absolute"
              style={{
                left: `${xPct}%`,
                bottom: `${100 - yPct}%`,
                transform: "translate(-50%, 50%)",
              }}
            >
              <SkillItem skill={skill} />
            </div>
          );
        })}

      </div>
    </div>
  );
}

/* ================= SKILL ITEM ================= */
function SkillItem({ skill }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-14 h-14 md:w-17 md:h-17 rounded-full bg-white/10 backdrop-blur border border-blue-400/40
flex items-center justify-center p-2 shadow-lg hover:scale-110 transition">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-xs text-blue-300">{skill.name}</span>
    </div>
  );
}