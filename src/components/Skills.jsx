// src/components/Skills.jsx
import React, { useState } from "react";
import GridDistortion from "./GridDistortion";

import sql from "../assets/sql.svg";
import excel from "../assets/excel.svg";
import powerbi from "../assets/power-bi.svg";
import python from "../assets/python.svg";
import git from "../assets/git.svg";
import n8n from "../assets/n8n.svg";

import imgPhysio from "../assets/img4.jpeg";
import imgCancer from "../assets/img5.jpeg";
import imgRadiation from "../assets/img6.jpeg";
import imgBlood from "../assets/img7.jpeg";

const SKILL_INFO = {
  powerbi: {
    name: "Power BI",
    image: imgPhysio,
    text: "Interactive dashboards built for real-time business tracking and storytelling.",
  },
  python: {
    name: "Python",
    image: imgCancer,
    text: "Data cleaning, feature engineering and automation scripts for analytics.",
  },
  sql: {
    name: "SQL",
    image: imgRadiation,
    text: "Complex queries and views powering BI dashboards and reports.",
  },
  excel: {
    name: "Excel",
    image: imgBlood,
    text: "Models, pivot tables and what-if scenarios for decision making.",
  },
  git: {
    name: "Git",
    image: imgRadiation,
    text: "Version-controlled analytics and automation projects on GitHub.",
  },
  n8n: {
    name: "n8n",
    image: imgPhysio,
    text: "Visual workflows to connect data sources and schedule automations.",
  },
};

function DotRed() {
  return <span className="inline-block w-2.5 h-2.5 bg-red-600 rounded-full mr-3" />;
}

/* ---------------- RESPONSIVE SKILL TILE ---------------- */
function SkillTile({ icon, id, label, large = false, onHover = () => {} }) {
  return (
    <button
      type="button"
      onMouseEnter={() => onHover(id)}
      onClick={() => onHover(id)}   // mobile support
      onFocus={() => onHover(id)}
      className="group outline-none"
      aria-label={label}
    >
      <div
        className={`
          flex items-center justify-center rounded-2xl bg-white
          shadow-[0_10px_25px_rgba(15,23,42,0.08)]
          transition-all duration-200 ease-out
          group-hover:shadow-[0_18px_45px_rgba(15,23,42,0.18)]
          group-hover:-translate-y-1

          ${large
            ? "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
            : "w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"}
        `}
      >
        <img
          src={icon}
          alt={label}
          className={`
            object-contain
            ${large
              ? "w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20"
              : "w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 lg:w-14 lg:h-14"}
          `}
        />
      </div>
    </button>
  );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function Skills() {
  const [active, setActive] = useState("powerbi");
  const info = SKILL_INFO[active];

  return (
    <section id="skills" className="py-12">
      <div className="relative w-[95%] mx-auto px-4 md:px-6">

        {/* background distortion */}
        <div className="absolute inset-0 -z-10 rounded-[32px] overflow-hidden min-h-[260px] md:min-h-[340px] lg:min-h-[380px]">
          <div className="griddistortion-container w-full h-full">
            <GridDistortion
              imageSrc="https://picsum.photos/1920/1080?grayscale"
              grid={10}
              mouse={0.1}
              strength={0.15}
              relaxation={0.9}
            />
          </div>
        </div>

        {/* card */}
        <div className="relative rounded-[32px] px-6 py-10 md:px-12 md:py-12 overflow-hidden">

          {/* heading */}
          <div className="flex items-center text-sm text-gray-300 mb-4">
            <DotRed />
            <div className="font-medium">Skills</div>
          </div>

          <div className="mx-auto text-center max-w-2xl mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
              Turning Raw Data Into Clear,
              <span className="text-gray-300"> Actionable Direction</span>
            </h2>
            <p className="mt-3 text-sm text-gray-300/80">
              Practical tools and workflows I use to turn messy data into decisions — clean,
              repeatable, and production-ready.
            </p>
          </div>

          {/* layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

            {/* SKILLS GRID */}
            <div className="w-full max-w-[560px]">

              <div className="
                grid
                grid-cols-3
                sm:grid-cols-4
                md:grid-cols-3
                lg:grid-cols-2
                gap-4 sm:gap-5 md:gap-6
                justify-items-center
              ">

                <SkillTile icon={powerbi} id="powerbi" label="Power BI" large onHover={setActive} />
                <SkillTile icon={python} id="python" label="Python" large onHover={setActive} />
                <SkillTile icon={sql} id="sql" label="SQL" onHover={setActive} />
                <SkillTile icon={excel} id="excel" label="Excel" onHover={setActive} />
                <SkillTile icon={git} id="git" label="Git" onHover={setActive} />
                <SkillTile icon={n8n} id="n8n" label="n8n" onHover={setActive} />

              </div>

              <div className="mt-5 text-center text-xs text-slate-400 lg:hidden">
                Tap a skill to preview its project
              </div>
            </div>

            {/* PREVIEW CARD */}
            <div className="w-full md:w-[420px] lg:w-[560px]">
              <div className="relative w-full rounded-3xl overflow-hidden bg-slate-950 text-white min-h-[220px] sm:min-h-[260px] md:min-h-[300px]">

                <div className="relative w-full" style={{ paddingTop: "70%" }}>
                  <img
                    src={info.image}
                    alt={info.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-violet-200/80">
                      Featured project
                    </p>
                    <h3 className="mt-1 text-xl font-semibold">{info.name}</h3>
                    <p className="mt-2 text-xs md:text-sm text-slate-100/90 max-w-sm">
                      {info.text}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
