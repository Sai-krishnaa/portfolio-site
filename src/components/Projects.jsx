import React from "react";

import tranaction from "../assets/tr.png";
import zepto from "../assets/zp.png";
import mobile from "../assets/md.png";
import imgBlood from "../assets/sh.png";

const projects = [
  {
    title: "Transaction Reconciliation",
    subtitle: "Financial matching & exception tracking",
    image: tranaction,
    badge: "Fintech",
  },

  {
    title: "Zepto Inventory Analysis",
    subtitle: "Inventory insights & stock optimization",
    image: zepto,
    badge: "Inventory",
  },

  {
    title: "Mobile Sales Dashboard",
    subtitle: "Interactive KPI & sales intelligence",
    image: mobile,
    badge: "Sales",
  },

  {
    title: "Product Analysis",
    subtitle: "Product growth & performance insights",
    image: imgBlood,
    badge: "Product",
  },
];

function ProjectCard({ project }) {
  return (
    <article
      className="
      group
      relative
      rounded-[34px]
      overflow-hidden
      bg-black
      min-h-[620px]
      transition-all
      duration-500
      hover:-translate-y-2
    "
    >

      {/* IMAGE */}

      <img
        src={project.image}
        alt={project.title}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
      "
      />

      {/* OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* TOP */}

      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 z-20">

        <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center">
          •••
        </button>

        <button className="px-4 py-2 rounded-full bg-white text-black text-xs font-medium">
          {project.badge}
        </button>

      </div>

      {/* CONTENT */}

      <div className="absolute bottom-0 left-0 right-0 p-7 z-20">

        <div
          className="
          translate-y-8
          opacity-0
          group-hover:translate-y-0
          group-hover:opacity-100
          transition-all
          duration-500
        "
        >

          <div className="bg-white rounded-[28px] p-5 flex items-end justify-between gap-4">

            <div>

              <h3 className="text-xl font-semibold text-black leading-tight">
                {project.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {project.subtitle}
              </p>

            </div>

            <button
              className="
              min-w-[52px]
              h-[52px]
              rounded-full
              bg-black
              text-white
              flex
              items-center
              justify-center
              transition-transform
              duration-500
              group-hover:rotate-45
            "
            >
              ↗
            </button>

          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-28 bg-white"
    >

      <div className="w-[95%] mx-auto">

        {/* TOP */}

        <div className="mb-16">

          {/* MINI LABEL */}

          <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 bg-white">

            <span className="w-2 h-2 rounded-full bg-orange-500" />

            Selected Work

          </div>

          {/* PREMIUM HEADING */}

          <div className="mt-7">

            <h2
              className="
              text-4xl
              md:text-6xl
              font-semibold
              tracking-[-0.05em]
              leading-[0.95]
              text-black
              max-w-3xl
            "
            >
              Crafted to solve
              <br />

              <span className="text-orange-500">
                real business
              </span>

              {" "}problems through
              modern analytics.
            </h2>

          </div>

        </div>

        {/* PROJECT GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

        {/* BUTTON */}

        <div className="mt-16 flex justify-center">

          <button
            className="
            group
            inline-flex
            items-center
            gap-4
            rounded-full
            bg-black
            text-white
            px-7
            py-4
            hover:bg-orange-500
            transition-all
            duration-300
          "
          >

            <span className="text-sm font-medium">
              View All Projects
            </span>

            <span
              className="
              w-10
              h-10
              rounded-full
              bg-white
              text-black
              flex
              items-center
              justify-center
              transition-transform
              duration-500
              group-hover:rotate-45
            "
            >
              ↗
            </span>

          </button>

        </div>

      </div>
    </section>
  );
}