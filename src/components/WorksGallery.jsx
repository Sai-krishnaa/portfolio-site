// src/components/WorksGallery.jsx
import React from "react";

import warehouse from "../assets/Warehouse.png";
import haldi from "../assets/haldi.png";
import python from "../assets/python.svg";
import ab from "../assets/ab.png";
import git from "../assets/git.svg";
import wb from "../assets/wb.jpg";
import rr from "../assets/rr.jpg";
import hr from "../assets/hr.png";
import qc from "../assets/qc.jpg";


import centerImg from "../assets/Cs.png";

/* ================= SIDE CARD ================= */
function SideFeatureCard({ title, text, icons, bg }) {
  return (
    <article className="group relative h-full rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]">

      {/* 🔥 IMAGE LAYER (DEFAULT) */}
      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* 🔥 WHITE CONTENT LAYER (HIDDEN INITIALLY) */}
      <div className="absolute inset-0 bg-white flex flex-col justify-between px-8 py-7 opacity-0 group-hover:opacity-100 transition-all duration-500">

        {/* TEXT */}
        <div className="max-w-[75%]">
          <h3 className="text-[18px] font-semibold text-slate-800 leading-snug">
            {title}
          </h3>

          <p className="mt-3 text-[14px] leading-6 text-slate-500">
            {text}
          </p>
        </div>
        <div className="flex items-center justify-between mt-6"> 
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-black hover:text-white transition">
      View Case Study
      <span className="text-xs">→</span>
    </button>
        {/* ICONS */}
        <div className="flex gap-2">
      {icons.map((icon, i) => (
        <div
          key={i}
          className="w-35 h-14  flex items-center justify-center"
        >
          <img
            src={icon}
            className="w-85 h-85 object-contain"
          />
        </div>
          ))}
        </div>

      </div>
      </div>
    </article>
  );
}
/* ================= CENTER ================= */
function CenterFeatureCard({ image }) {
  return (
    <div className="flex justify-center">
      <article
        className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[340px] h-[300px] sm:h-[420px] md:h-[550px] rounded-3xl sm:rounded-4xloverflow-hidden shadow-[0_25px_60px_rgba(37,99,235,0.25)]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}

/* ================= MAIN ================= */
export default function WorksGallery() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-26 lg:py-32">

      <div className="w-[95%] mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div className="text-sm text-slate-700 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            <span>Business Case Study</span>
          </div>

          <div className="md:max-w-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">
              A curated collection of data, dashboards, and automations —{" "}
              <span className="text-slate-400 font-normal">
                minimal in design, maximal in impact.
              </span>
            </h2>
          </div>
        </div>

        {/* 🔥 MAIN GRID */}
        <div className="grid gap-5 md:items-center md:grid-cols-[1.5fr_1fr_1.5fr]">

          {/* LEFT */}
          <div className="grid gap-5 md:grid-rows-2 md:h-[550px]">
            <SideFeatureCard
              title="Haldiram’s International Expansion Strategy"
              text="Haldiram's aims to expand globally by setting up manufacturing outside India. The challenge is identifying high-demand markets"
              icons={[haldi]}
              bg={hr}
            />
            <SideFeatureCard
              title="Swiggy / Zomato Profitability Problem"
              text="Swiggy and Zomato face profitability issues despite high order volumes. Rising delivery costs, discounts, and operational inefficiencies reduce margins. "
              icons={[warehouse]}
              bg={qc}
            />
          </div>

          {/* CENTER */}
          <CenterFeatureCard image={centerImg} />

          {/* RIGHT */}
          <div className="grid gap-5 md:grid-rows-2 md:h-[550px]">
            <SideFeatureCard
              title="Amazon Warehouse Optimization"
              text="Amazon seeks to optimize warehouse locations and inventory distribution to reduce delivery time and logistics costs. "
              icons={[warehouse]}
              bg={wb}
            />
            <SideFeatureCard
              title="Reliance Retail Store Expansion"
              text="Reliance Retail plans to expand into new regions to increase market share and revenue. "
              icons={[warehouse]}
              bg={rr}
            />
          </div>

        </div>
      </div>
    </section>
  );
}