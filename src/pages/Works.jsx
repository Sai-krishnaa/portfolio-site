import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Works() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const projects = [
    {
      id: "ambulance",
      title: "Smart Ambulance System",
      desc: "Real-time emergency dispatch & hospital pre-alert",
      color: "from-emerald-700 to-teal-900",
      icon: "🚑",
    },
    {
      id: "analytics",
      title: "Inventory Analytics Dashboard",
      desc: "Predict stock demand & reduce wastage",
      color: "from-blue-700 to-indigo-900",
      icon: "📊",
    },
    {
      id: "ai",
      title: "AI Resume Screener",
      desc: "Automatic candidate filtering using NLP",
      color: "from-purple-700 to-fuchsia-900",
      icon: "🤖",
    },
  ];

  const next = () => {
    setIndex((prev) => (prev < projects.length - 1 ? prev + 1 : prev));
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="min-h-screen w-full bg-white text-gray-900 px-6 md:px-16 pt-12 pb-20">
      <div className="w-full max-w-7xl">

        {/* BACK BUTTON */}
        <div className="mb-10 flex items-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-700 hover:text-black transition font-medium"
          >
            <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              ←
            </span>
            Back
          </button>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* HEADER */}
            <div className="space-y-4">
              <span className="text-xs tracking-widest text-white font-semibold uppercase bg-[#48cae4] px-3 py-1 rounded-full">
                My Work
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] tracking-tight max-w-3xl">
                Built to Solve <br />
                Real World <br />
                <span className="text-gray-400">Problems Every Day</span>
              </h2>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              I design and build products that solve real problems — not tutorial apps.
              Each project focuses on performance, scalability and real-world usability.
            </p>

            {/* NAVIGATION */}
            <div className="flex gap-4 pt-2">
              <button
                onClick={prev}
                disabled={index === 0}
                className={`btnNavLight ${index === 0 ? "opacity-30 cursor-not-allowed" : ""}`}
              >
                ←
              </button>

              <button
                onClick={next}
                disabled={index === projects.length - 1}
                className={`btnNavLight ${index === projects.length - 1 ? "opacity-30 cursor-not-allowed" : ""}`}
              >
                →
              </button>
            </div>

            {/* DOTS */}
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    i === index ? "w-8 bg-gray-900" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="relative h-[520px] md:h-[620px] w-full overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              <ProjectSlide
                key={index}
                project={projects[index]}
                prev={prev}
                next={next}
                index={index}
                projects={projects}
                setIndex={setIndex}
                navigate={navigate}
              />
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

/* PROJECT CARD */

function ProjectSlide({ project, prev, next, index, projects, setIndex, navigate }) {

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) prev();
    if (info.offset.x < -threshold) next();
  };

  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -120, opacity: 0 }}
      transition={{ duration: 0.45 }}
      drag="x"
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      className={`absolute inset-0 bg-gradient-to-br ${project.color} p-8 md:p-12 lg:p-16 flex flex-col justify-between text-white cursor-grab active:cursor-grabbing`}
    >

      {/* TOP BAR */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={prev}
            disabled={index === 0}
            className={`btnNav ${index === 0 ? "opacity-30 cursor-not-allowed" : ""}`}
          >
            ←
          </button>

          <button
            onClick={next}
            disabled={index === projects.length - 1}
            className={`btnNav ${index === projects.length - 1 ? "opacity-30 cursor-not-allowed" : ""}`}
          >
            →
          </button>
        </div>
      </div>

      {/* CONTENT ROW */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 flex-1">

        {/* LEFT TEXT */}
        <div className="max-w-lg space-y-5 order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold">{project.title}</h2>

          <p className="text-white/70 text-lg">{project.desc}</p>

          <button
            onClick={() => navigate(`/project/${project.id}`)}
            className="mt-4 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition"
          >
            View Project →
          </button>
        </div>

        {/* RIGHT ICON */}
        <div className="relative flex items-center justify-center order-1 lg:order-2">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute w-72 h-72 border border-white/20 rounded-full"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute w-52 h-52 border border-white/20 rounded-full"
          />

          <div className="text-[100px] md:text-[130px] drop-shadow-2xl">
            {project.icon}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
