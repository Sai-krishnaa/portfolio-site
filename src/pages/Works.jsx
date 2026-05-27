import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ================= CARD IMAGES ================= */
import scheniderCard from "../assets/tr.png";
import reconciliationCard from "../assets/tr.png";
import zeptoCard from "../assets/tr.png";
import mobileCard from "../assets/tr.png";

/* ================= BANNER IMAGES ================= */

import reconciliationBanner from "../assets/PM.png";
import zeptoBanner from "../assets/PM.png";
import mobileBanner from "../assets/PM.png";

export default function Works() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const projects = [
        {
      id: "Schneider",
      title: "Schneider Electric Industrial Automation growth analysis",
      desc: "IA Segement growth analysis and forecasting for Schneider Electric's industrial automation division, leveraging historical sales data and market trends to identify growth opportunities and optimize resource allocation.",

      /* CARD IMAGE */
      cardImage: scheniderCard,

      /* PROJECT PAGE BANNER */
      bannerImage: reconciliationBanner,
    },
    {
      id: "reconciliation",
      title: "Transaction Reconciliation System",
      desc: "Automated cross-platform transaction matching system",

      /* CARD IMAGE */
      cardImage: reconciliationCard,

      /* PROJECT PAGE BANNER */
      bannerImage: reconciliationBanner,
    },

    {
      id: "zepto",
      title: "Zepto Inventory Analysis",
      desc: "Real-time inventory intelligence dashboard",

      cardImage: zeptoCard,
      bannerImage: zeptoBanner,
    },

    {
      id: "mobile-sales",
      title: "Mobile Sales Performance",
      desc: "Interactive mobile sales analytics system",

      cardImage: mobileCard,
      bannerImage: mobileBanner,
    },
  ];

  const next = () => {
    setIndex((prev) =>
      prev < projects.length - 1 ? prev + 1 : 0
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev > 0 ? prev - 1 : projects.length - 1
    );
  };

  return (
    <section className="min-h-screen w-full bg-white text-gray-900 px-6 md:px-16 pt-12 pb-20">

      <div className="w-full max-w-7xl mx-auto">

        {/* BACK BUTTON */}

        <div className="mb-10 flex items-center">

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 text-gray-700 hover:text-black transition font-medium"
          >

            <span className="w-11 h-11 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
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

            <div className="space-y-5">

              <span className="text-xs tracking-widest text-white font-semibold uppercase bg-orange-500 px-4 py-2 rounded-full shadow-lg shadow-orange-500/30">

                My Work

              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight max-w-3xl">

                Built to solve
                <br />

                <span className="text-orange-500">
                  Real World
                </span>

                <br />

                Problems Every Day

              </h2>

            </div>

            {/* DESCRIPTION */}

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">

              I design and build products that solve
              real business problems — not tutorial apps.
              Every project focuses on usability,
              scalability and meaningful impact.

            </p>

            {/* NAVIGATION */}

            <div className="flex gap-4 pt-2">

              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                ←
              </button>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center"
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
                    i === index
                      ? "w-8 bg-orange-500"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}

            </div>

          </div>

          {/* RIGHT CARD */}

          <div
            className="
            relative
            md:-mt-8
            lg:-mt-12
            xl:-mt-10
            w-full
            h-[500px]
            md:h-[540px]
            lg:h-[560px]
            xl:h-[580px]
            max-w-[720px]
            ml-auto
            overflow-hidden
            rounded-[40px]
            shadow-2xl
            bg-gray-900
          "
          >

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

/* ================= PROJECT CARD ================= */

function ProjectSlide({
  project,
  prev,
  next,
  index,
  projects,
  setIndex,
  navigate,
}) {

  const isDragging = useRef(false);
  const moved = useRef(false);

  const [showHint, setShowHint] = useState(true);

  const handleDragEnd = (event, info) => {

    const threshold = 50;
    const velocityThreshold = 500;

    if (
      info.offset.x > threshold ||
      info.velocity.x > velocityThreshold
    ) {
      prev();
    }

    if (
      info.offset.x < -threshold ||
      info.velocity.x < -velocityThreshold
    ) {
      next();
    }

    setTimeout(() => {
      isDragging.current = false;
      moved.current = false;
    }, 50);

    setShowHint(false);
  };

  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -120, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 26,
      }}
      drag="x"
      dragElastic={0.16}
      whileDrag={{ scale: 0.995 }}
      onDragStart={() => {
        isDragging.current = true;
        moved.current = false;
        setShowHint(false);
      }}
      onDrag={(event, info) => {
        if (
          Math.abs(info.offset.x) > 8 ||
          Math.abs(info.offset.y) > 8
        ) {
          moved.current = true;
        }
      }}
      onDragEnd={handleDragEnd}
      onTap={() => {

        if (!moved.current) {

          navigate(`/project/${project.id}`, {
            state: {
              project,
            },
          });
        }
      }}
      className="
      absolute
      inset-0
      p-7
      md:p-12
      lg:p-14
      flex
      flex-col
      justify-between
      text-white
      cursor-grab
      active:cursor-grabbing
      bg-cover
      bg-center
      group
    "
      style={{
        backgroundImage: `url('${project.cardImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* ORANGE OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-orange-500/10 pointer-events-none" />

      {/* HOVER OVERLAY */}

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/60 pointer-events-none"
      />

      {/* SWIPE HINT */}

      {showHint && (

        <motion.div
          className="absolute top-28 right-8 z-30 pointer-events-none flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{
            x: [0, -28, 0],
            opacity: [0, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "easeInOut",
          }}
        >

          <div className="bg-orange-500/80 text-white p-3 rounded-full shadow-lg shadow-orange-500/30">
            ←
          </div>

        </motion.div>
      )}

      {/* TOP BAR */}

      <div className="flex justify-between items-center relative z-20">

        <div className="flex gap-2">

          {projects.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                i === index
                  ? "w-8 bg-orange-500"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}

        </div>

        <div className="flex gap-3">

          <button
            onClick={prev}
            className="w-14 h-14 rounded-full bg-orange-500/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-orange-500/20"
          >
            ←
          </button>

          <button
            onClick={next}
            className="w-14 h-14 rounded-full bg-orange-500/80 backdrop-blur-md text-white flex items-center justify-center hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-orange-500/20"
          >
            →
          </button>

        </div>

      </div>

      {/* BOTTOM CONTENT */}

      <div className="space-y-4 relative z-20">

        <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-xl">

          {project.title}

        </h2>

        <p className="text-white/80 text-lg max-w-lg leading-relaxed">

          {project.desc}

        </p>

        <button
          onClick={() =>
            navigate(`/project/${project.id}`, {
              state: {
                project,
              },
            })
          }
          className="mt-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/30"
        >

          View Project →

        </button>

      </div>

    </motion.div>
  );
}