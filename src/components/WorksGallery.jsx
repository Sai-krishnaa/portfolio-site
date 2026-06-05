// src/components/WorksGallery.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import warehouse from "../assets/Warehouse.png";
import haldi from "../assets/haldi.png";
import wb from "../assets/wb.jpg";
import rr from "../assets/rr.jpg";
import hr from "../assets/hr.png";
import qc from "../assets/qc.jpg";
import centerImg from "../assets/Cs.png";

/* ================= SIDE CARD ================= */
function SideFeatureCard({ title, text, icons, bg }) {
  return (
    <article className="group relative h-full min-h-60 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
      <div
        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-white flex flex-col justify-between px-6 py-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="max-w-[75%]">
          <h3 className="text-[18px] font-semibold text-slate-800 leading-snug">
            {title}
          </h3>

          <p className="mt-3 text-[14px] leading-6 text-slate-500">
            {text}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 gap-4">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600 text-white text-sm font-medium hover:bg-black transition">
            View Case Study
            <span className="text-xs">→</span>
          </button>

          <div className="flex gap-2">
            {icons.map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 flex items-center justify-center"
              >
                <img
                  src={icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ================= CENTER DESKTOP CARD ================= */
function CenterFeatureCard({ image }) {
  return (
    <div className="flex justify-center">
      <article
        className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[340px] h-[300px] sm:h-[420px] md:h-[550px] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(37,99,235,0.25)]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}

/* ================= MOBILE CARDS ================= */
function MobileCaseCard({ item }) {
  if (item.type === "center") {
    return (
      <article className="w-full h-[420px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.18)] bg-white">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </article>
    );
  }

  return (
    <article className="w-full min-h-[420px] rounded-3xl overflow-hidden bg-white shadow-[0_14px_40px_rgba(0,0,0,0.12)] flex flex-col">
      <div
        className="h-60 sm:h-[280px] w-full shrink-0"
        style={{
          backgroundImage: `url(${item.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="flex-1 px-5 py-5 flex flex-col justify-between">
        <div>
          <h3 className="text-[18px] font-semibold text-slate-900 leading-snug">
            {item.title}
          </h3>

          <p className="mt-2 text-[14px] leading-6 text-slate-500 line-clamp-3">
            {item.text}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 pt-4">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600 text-white text-sm font-medium active:scale-[0.98] transition">
            View Case Study
            <span className="text-xs">→</span>
          </button>

          <div className="flex gap-2">
            {item.icons?.map((icon, i) => (
              <div key={i} className="w-9 h-9 flex items-center justify-center">
                <img src={icon} alt="" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ================= MOBILE CAROUSEL ================= */
function MobileCarousel({ items, autoSlide = true, interval = 3500 }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!autoSlide) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [index, autoSlide, interval]);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -80 || velocity < -500) {
      nextSlide();
    } else if (offset > 80 || velocity > 500) {
      prevSlide();
    }
  };

  return (
    <div className="md:hidden">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="w-full"
          >
            <MobileCaseCard item={items[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-slate-900" : "w-2.5 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= MAIN ================= */
export default function WorksGallery() {
  const caseStudies = [
    {
      type: "center",
      image: centerImg,
    },
    {
      title: "Haldiram’s International Expansion Strategy",
      text: "Haldiram's aims to expand globally by setting up manufacturing outside India. The challenge is identifying high-demand markets.",
      icons: [haldi],
      bg: hr,
    },
    {
      title: "Swiggy / Zomato Profitability Problem",
      text: "Swiggy and Zomato face profitability issues despite high order volumes. Rising delivery costs, discounts, and operational inefficiencies reduce margins.",
      icons: [warehouse],
      bg: qc,
    },
    {
      title: "Amazon Warehouse Optimization",
      text: "Amazon seeks to optimize warehouse locations and inventory distribution to reduce delivery time and logistics costs.",
      icons: [warehouse],
      bg: wb,
    },
    {
      title: "Reliance Retail Store Expansion",
      text: "Reliance Retail plans to expand into new regions to increase market share and revenue.",
      icons: [warehouse],
      bg: rr,
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-26 lg:py-32">
      <div className="w-[95%] mx-auto px-4 md:px-6">
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

        {/* MOBILE: carousel */}
        <MobileCarousel items={caseStudies} />

        {/* DESKTOP / TABLET: original layout */}
        <div className="hidden md:grid gap-5 md:items-center md:grid-cols-[1.5fr_1fr_1.5fr]">
          <div className="grid gap-5 md:grid-rows-2 md:h-[550px]">
            <SideFeatureCard
              title="Haldiram’s International Expansion Strategy"
              text="Haldiram's aims to expand globally by setting up manufacturing outside India. The challenge is identifying high-demand markets."
              icons={[haldi]}
              bg={hr}
            />
            <SideFeatureCard
              title="Swiggy / Zomato Profitability Problem"
              text="Swiggy and Zomato face profitability issues despite high order volumes. Rising delivery costs, discounts, and operational inefficiencies reduce margins."
              icons={[warehouse]}
              bg={qc}
            />
          </div>

          <CenterFeatureCard image={centerImg} />

          <div className="grid gap-5 md:grid-rows-2 md:h-[550px]">
            <SideFeatureCard
              title="Amazon Warehouse Optimization"
              text="Amazon seeks to optimize warehouse locations and inventory distribution to reduce delivery time and logistics costs."
              icons={[warehouse]}
              bg={wb}
            />
            <SideFeatureCard
              title="Reliance Retail Store Expansion"
              text="Reliance Retail plans to expand into new regions to increase market share and revenue."
              icons={[warehouse]}
              bg={rr}
            />
          </div>
        </div>
      </div>
    </section>
  );
}