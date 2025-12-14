// src/components/WorksGallery.jsx
import React from "react";

import img1 from "../assets/img4.jpeg";
import img2 from "../assets/img5.jpeg";
import img3 from "../assets/img6.jpeg";
import img4 from "../assets/img7.jpeg";

function WorkCard({ index, title, subtitle, image, tall = false }) {
  return (
    <article
      className={`group rounded-3xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] overflow-hidden cursor-pointer
                  transition-transform transition-shadow duration-200 ease-out
                  hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.16)]
                  flex flex-col ${tall ? "row-span-2" : ""}`}
    >
      <header className="flex items-center justify-between px-4 pt-4 pb-2">
        <div className="inline-flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[11px] font-semibold text-white">
            {index.toString().padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
            {subtitle && (
              <p className="text-[11px] text-slate-400 leading-tight">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {tall && (
          <span className="text-xs text-slate-400 group-hover:text-slate-900">
            ↗
          </span>
        )}
      </header>

      <div className={`px-4 ${tall ? "pb-4" : "pb-3"}`}>
        <div
          className={`overflow-hidden rounded-2xl ${
            tall ? "aspect-[3/4]" : "aspect-[16/9]"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </article>
  );
}

export default function WorksGallery() {
  return (
    <section className="py-16 ">
      
      {/* ⭐ Apply 95% Width Container */}
      <div className="w-[95%] mx-auto px-4 md:px-6 pb-14">

        {/* top header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          <div className="text-sm text-slate-700 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            <span>Business Case Study</span>
          </div>

          <div className="md:max-w-xl">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
            A curated collection of data, dashboards, and automations — minimal in design, {" "}
              <span className="font-normal text-slate-400">
              maximal in impact.
              </span>
            </h2>
          </div>
        </div>

        {/* cards grid */}
        <div className="grid gap-5 md:gap-6 md:grid-cols-3 auto-rows-[1fr]">
          
          {/* column 1 */}
          <div className="space-y-5 md:space-y-6">
            <WorkCard
              index={1}
              title="Brand Identity"
              subtitle="Visual Identity"
              image={img1}
            />
            <WorkCard
              index={2}
              title="Digital Product UI"
              subtitle="Product Design"
              image={img2}
            />
          </div>

          {/* column 2 */}
          <div className="space-y-5 md:space-y-6">
            <WorkCard
              index={1}
              title="Brand Identity"
              subtitle="Visual Identity"
              image={img1}
            />
            <WorkCard
              index={2}
              title="Digital Product UI"
              subtitle="Product Design"
              image={img3}
            />
          </div>

          {/* column 3 */}
          <div className="space-y-5 md:space-y-6">
            <WorkCard
              index={3}
              title="Creative Showcase"
              subtitle="Case Study"
              image={img4}
            />
            <WorkCard
              index={4}
              title="Experimental Layouts"
              subtitle="Exploration"
              image={img1}
            />
          </div>
        </div>

        {/* bottom button */}
        <div className="mt-8 flex justify-end">
          <button className="inline-flex items-center gap-2 rounded-full bg-black text-white text-xs md:text-sm px-4 py-2.5">
            <span>Load More</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[11px]">
              ↗
            </span>
          </button>
        </div>
      
      </div>
    </section>
  );
}
