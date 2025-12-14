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

function SkillTile({ icon, id, label, large = false, onHover = () => {} }) {
  return (
    <button
      type="button"
      onMouseEnter={() => onHover(id)}
      onFocus={() => onHover(id)}
      className="group outline-none"
      aria-label={label}
    >
      <div
        className={`flex items-center justify-center rounded-3xl bg-white 
                    shadow-[0_18px_45px_rgba(15,23,42,0.08)]
                    transition-transform transition-shadow duration-200 ease-out
                    group-hover:shadow-[0_22px_55px_rgba(15,23,42,0.18)] group-hover:-translate-y-1
                    ${large ? "h-44 w-44 md:h-56 md:w-56" : "h-24 w-24 md:h-32 md:w-32"}`}
      >
        <img
          src={icon}
          alt={label}
          className={large ? "h-28 w-28 md:h-32 md:w-32" : "h-16 w-16 md:h-20 md:w-20"}
        />
      </div>
    </button>
  );
}

export default function Skills() {
  const [active, setActive] = useState("powerbi");
  const info = SKILL_INFO[active];

  return (
    <section id="skills" className="py-10">
      {/* outer: match other sections width */}
      <div className="relative w-[95%] mx-auto px-4 md:px-6">
        {/* distortion background
            NOTE: parent must have explicit min-h so absolute inset-0 has height to fill.
            we add min-h on this wrapper so GridDistortion gets real dimensions at mount.
        */}
        <div className="absolute inset-0 -z-10 rounded-[32px] overflow-hidden min-h-[320px] md:min-h-[420px]">
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

        {/* main skills card */}
        <div className="relative rounded-[32px] px-6 py-10 md:px-12 md:py-12 overflow-hidden">
          {/* small meta label */}
          <div className="flex items-center text-sm text-gray-300 mb-4">
            <DotRed />
            <div className="font-medium">Skills</div>
          </div>

          {/* centered heading */}
          <div className="mx-auto text-center max-w-2xl mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Turning Raw Data Into Clear,
              <span className="text-gray-300"> Actionable Direction</span>
            </h2>
            <p className="mt-3 text-sm text-gray-300/80">
              Practical tools and workflows I use to turn messy data into decisions — clean,
              repeatable, and production-ready.
            </p>
          </div>

          {/* main columns: left tiles, right preview */}
          <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-10">
            {/* tiles column */}
            <div className="w-full max-w-[640px] mx-auto">
              <div className="grid grid-cols-2 gap-5 md:gap-6 justify-items-center place-items-center">
                {/* left stack */}
                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-center justify-center">
                    <SkillTile icon={powerbi} id="powerbi" label="Power BI" large onHover={setActive} />
                  </div>

                  <div className="flex gap-5 md:gap-6">
                    <SkillTile icon={sql} id="sql" label="SQL" onHover={setActive} />
                    <SkillTile icon={excel} id="excel" label="Excel" onHover={setActive} />
                  </div>

                  <div className="flex gap-5 md:gap-6">
                    <SkillTile icon={git} id="git" label="Git" onHover={setActive} />
                    <SkillTile icon={n8n} id="n8n" label="n8n" onHover={setActive} />
                  </div>
                </div>

                {/* right stack */}
                <div className="space-y-5 md:space-y-6">
                  <div className="flex gap-5 md:gap-6">
                    <SkillTile icon={python} id="python" label="Python" onHover={setActive} />
                    <SkillTile icon={excel} id="excel" label="Excel" onHover={setActive} />
                  </div>

                  <div className="flex gap-5 md:gap-6">
                    <SkillTile icon={sql} id="sql" label="SQL" onHover={setActive} />
                    <SkillTile icon={git} id="git" label="Git" onHover={setActive} />
                  </div>

                  <div className="flex items-center justify-center">
                    <SkillTile icon={python} id="python" label="Python" large onHover={setActive} />
                  </div>
                </div>
              </div>

              <div className="mt-6 md:hidden text-center text-xs text-slate-400">
                Tap a skill to preview its project on the right.
              </div>
            </div>

            {/* preview card */}
            <div className="w-full md:w-[420px] lg:w-[580px] flex items-stretch">
              <div className="relative w-full rounded-3xl overflow-hidden bg-slate-950 text-white transform transition-all duration-300 ease-out min-h-[280px] md:min-h-[320px]">
                <div className="relative w-full" style={{ paddingTop: "72%" }}>
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
      </div> {/* end outer */}
    </section>
  );
}
