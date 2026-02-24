import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import zeptoImage from "../assets/zepto.png";
import reconciliation from "../assets/reconciliation.png";
import mobile from "../assets/motorola.png";

export default function Works() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const projects = [
    {
      id: "reconciliation",
      title: "Transaction Reconciliation System",
      desc: "Automated cross-platform transaction matching system",
      image: reconciliation,
    },
    {
      id: "zepto",
      title: "Zepto Inventory Analysis",
      desc: "Real-time emergency dispatch & hospital pre-alert",
      image: zeptoImage,
    },
    {
      id: "mobile-sales",
      title: "Mobile Sales Performance",
      desc: "Automatic candidate filtering using NLP",
      image: mobile,
    },
  ];

  const next = () => {
    setIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  };

  const prev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
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
                className="btnNavLight"
              >
                ←
              </button>

              <button
                onClick={next}
                className="btnNavLight"
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
          <div className="relative h-[520px] md:h-[620px] w-full overflow-hidden rounded-3xl shadow-2xl bg-gray-900">
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
    const velocityThreshold = 500; // px/sec - faster flicks also count

    // if user swiped fast enough or moved past threshold, go prev/next
    if (info.offset.x > threshold || info.velocity.x > velocityThreshold) prev();
    if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) next();

    // mark dragging finished after handling
    // small delay so onTap doesn't fire immediately after drag end
    setTimeout(() => {
      isDragging.current = false;
      moved.current = false;
    }, 50);
    setShowHint(false);
  };

  const isDragging = useRef(false);
  const [showHint, setShowHint] = useState(true);
  const moved = useRef(false);

  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -120, opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 26 }}
      drag="x"
      dragElastic={0.16}
      onDragStart={() => { isDragging.current = true; moved.current = false; setShowHint(false); }}
      onDrag={(event, info) => {
        if (Math.abs(info.offset.x) > 8 || Math.abs(info.offset.y) > 8) moved.current = true;
      }}
      onDragEnd={handleDragEnd}
      onTap={() => {
        // only navigate on tap if the user didn't move (tap, not swipe)
        if (!moved.current) navigate(`/project/${project.id}`);
      }}
      whileDrag={{ scale: 0.995 }}
      className="absolute inset-0 p-7 md:p-12 lg:p-16 flex flex-col justify-between text-white cursor-grab active:cursor-grabbing bg-cover bg-center group"
      style={{
        backgroundImage: `url('${project.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* VIGNETTE OVERLAY - Bottom to Top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent pointer-events-none" />
      
      {/* HOVER OVERLAY */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/70 pointer-events-none"
      />

      {/* SWIPE HINT (hand + arrow) */}
      {showHint && (
        <motion.div
          className="absolute top-28 right-8 z-30 pointer-events-none flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ x: [0, -28, 0], opacity: [0, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <div className="bg-white/20 text-white/90 p-2 rounded-full shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.5 2.5C8.12 2.5 7 3.62 7 5v6.09C6.39 11.36 6 12.16 6 13v5c0 .55.45 1 1 1h6.5c.95 0 1.77-.6 2.03-1.47l1.02-3.16c.39-1.2-.38-2.48-1.7-2.48H13v-4c0-1.93-1.57-3.5-3.5-3.5z"/>
            </svg>
          </div>

          <div className="bg-white/10 text-white/90 p-3 rounded-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
      )}

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
            className="btnNav"
          >
            ←
          </button>

          <button
            onClick={next}
            className="btnNav"
          >
            →
          </button>
        </div>
      </div>

      {/* BOTTOM TEXT */}
      <div className="space-y-2 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>

        <p className="text-white/70 text-base">{project.desc}</p>

        <button
          onClick={() => navigate(`/project/${project.id}`)}
          className="mt-1 px-3 py-2 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition"
        >
          View Project →
        </button>
      </div>
    </motion.div>
  );
}
