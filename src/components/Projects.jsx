// src/components/ProjectsSection.jsx
import React from "react";
import bg from "../assets/img3.jpeg";

// import card images (use your real filenames here)
import imgPhysio from "../assets/img4.jpeg";
import imgCancer from "../assets/img5.jpeg";
import imgRadiation from "../assets/img6.jpeg";
import imgBlood from "../assets/img7.jpeg";

const projects = [
  {
    titleTop: "Best Physical",
    titleBottom: "Therapy",
    image: imgPhysio,
    badge: "See Consultation",
  },
  {
    titleTop: "Cancer",
    titleBottom: "Chemotherapy",
    image: imgCancer,
    badge: "See Consultation",
  },
  {
    titleTop: "Best Radiation",
    titleBottom: "Therapy",
    image: imgRadiation,
    badge: "See Consultation",
  },
  {
    titleTop: "Blood",
    titleBottom: "Transfusion",
    image: imgBlood,
    badge: "See Consultation",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="group relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-[0_18px_45px_rgba(15,23,42,0.35)] min-h-[420px] md:min-h-[460px] transition-transform duration-300 hover:-translate-y-3">

      {/* Image with hover dim */}
      <div className="h-[400px] md:h-[600px] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.titleTop}
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-[0.65]"
        />
      </div>

      {/* gradient top mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

      {/* header badges */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between px-4 pt-4 text-[11px] z-10">
        <button className="rounded-full bg-black/40 px-2 py-1 text-[10px] uppercase tracking-wide text-white/90">
          •••
        </button>
        <button className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-medium text-slate-900">
          {project.badge}
        </button>
      </div>

      {/* BOTTOM SLIDE-UP DETAILS */}
      <div
        className="
          absolute inset-x-0 bottom-0
          translate-y-full group-hover:translate-y-0
          transition-transform duration-500 ease-out
          p-5 rounded-t-3xl
          bg-white/95 backdrop-blur-md
          z-20
          flex items-center justify-between
        "
      >
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            {project.titleTop} <br /> {project.titleBottom}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            A data-focused solution crafted with accuracy & clarity.
          </p>
        </div>

        {/* Rotating arrow */}
        <button className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 text-white shadow transition-transform duration-500 group-hover:rotate-90">
          ↗
        </button>
      </div>
    </article>
  );
}


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div
        className="w-[95%] mx-auto rounded-3xl overflow-hidden px-4 md:px-6 py-20 relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        <div className="relative z-[2]">
          {/* top meta row */}
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/80">
            <button className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-4 py-1 text-white">
              <span className="h-[3px] w-[18px] rounded-full bg-violet-400" />
              <span>Projects</span>
            </button>

            <div className="hidden md:flex items-center gap-3">
              <span className="h-[1px] w-10 bg-white/40" />
              <span className="text-[10px] tracking-[0.18em] text-white/80">
                Work that turns data into decisions
              </span>
            </div>
          </div>

          {/* heading */}
          <div className="mt-8 flex justify-center">
            <p className="max-w-3xl text-center text-[26px] md:text-[32px] leading-snug font-medium text-white">
              Data-driven{" "}
              <span className="text-sky-400">solutions crafted to</span>{" "}
              <span className="text-gray-200">solve real problems</span>{" "}
              with accuracy and simplicity
            </p>
          </div>

          {/* grid */}
          <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((p) => (
                <ProjectCard key={p.titleTop + p.titleBottom} project={p} />
              ))}
            </div>

            {/* Explore more */}
            <div className="mt-9 flex justify-center">
              <button
                className="group inline-flex items-center gap-3 rounded-full bg-white text-slate-900 px-5 py-2.5 shadow-lg transition-all duration-300 hover:shadow-2xl"
                aria-label="Explore more projects"
              >
                <span className="text-sm font-medium">Explore more projects</span>

                {/* circular mini-arrow with subtle spin on hover */}
                <span className="inline-flex items-center justify-center bg-slate-900 text-white w-8 h-8 rounded-full transition-transform duration-500 group-hover:rotate-90">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
