import { useState } from "react";
import python from "../assets/python.svg";
import powerbi from "../assets/power-bi.svg";
import fabric from "../assets/fabric.png";
import NumPy from "../assets/NumPy.svg";
import bg from "../assets/PM.png";

export default function ContactSection() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section
      className="w-[95%] mx-auto relative py-38 overflow-hidden bg-cover bg-center rounded-3xl"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >

      {/* 🔥 OVERLAY (IMPORTANT for readability) */}
      <div className="absolute inset-0" />

      {/* 🔥 FLOATING ICONS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingIcon src={fabric} className="top-10 left-20" />
        <FloatingIcon src={python} className="top-16 right-20" />
        <FloatingIcon src={NumPy} className="bottom-20 left-32" />
        <FloatingIcon src={powerbi} className="bottom-24 right-32" />
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">

        {/* INPUT */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-10 flex items-center justify-between gap-2 w-full max-w-md bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-full px-3 py-2"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-transparent outline-none px-3 text-sm text-slate-700 placeholder:text-slate-400"
          />

          <button
            type="submit"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow-lg hover:scale-105 transition"
          >
            Submit
          </button>
        </form>

        {/* HEADING */}
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
          Let’s <span className="text-blue-600">connect</span> and create something <span className="text-blue-600">real</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-4 text-slate-600 text-sm md:text-base max-w-xl mx-auto">
         From ideas to execution, we create solutions that drive real impact.
        </p>

      </div>
    </section>
  );
}

/* 🔥 FLOATING ICON COMPONENT */
function FloatingIcon({ src, className }) {
  return (
    <div
      className={`absolute ${className} w-16 h-16 rounded-full 
      bg-white/20 backdrop-blur-xl border border-white/30 
      shadow-[0_10px_30px_rgba(0,0,0,0.15)] 
      flex items-center justify-center 
      animate-float`}
    >
      <img src={src} alt="" className="w-8 h-8 object-contain" />
    </div>
  );
}