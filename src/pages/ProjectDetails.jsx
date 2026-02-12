import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import sql from "../assets/sql.svg"
import excel from "../assets/excel.svg"
import powerbi from "../assets/power-bi.svg"
import python from "../assets/python.svg"
import git from "../assets/git.svg"
import n8n from "../assets/n8n.svg"
import img11 from "../assets/img11.png"

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Project data mapping for proper title display
  const getProjectTitle = (projectId) => {
    const projects = {
      ambulance: "Smart Ambulance System",
      analytics: "Inventory Analytics Dashboard", 
      ai: "AI Resume Screener"
    };
    return projects[projectId] || projectId;
  };

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 px-6 md:px-16 pt-8 pb-20">
      <div className="w-full max-w-7xl mx-auto relative">
        
        {/* BACK BUTTON - TOP LEFT */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-700 hover:text-black transition font-medium"
          >
            <span className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              ←
            </span>
            Back
          </button>
          
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center"
          >
            ↗
          </button>
        </div>

        {/* MOBILE MENU - SAME AS BEFORE */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 flex flex-col shadow-lg">
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-lg font-medium text-gray-800">
              <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="/#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="/#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="/#skills" onClick={() => setMenuOpen(false)}>Skills</a>
              <a href="/works" onClick={() => setMenuOpen(false)}>Works</a>
            </nav>
            <button className="mt-auto px-6 py-3 rounded-full bg-black text-white font-medium">
              Contact Us
            </button>
          </div>
        </div>

        {/* HEADER - CENTER BELOW BACK */}
        <div className="text-center pt-12 md:pt-24 mb-8 space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent leading-[1.1] tracking-tight">
            {getProjectTitle(id)}
          </h1> {/* Removed "Project" for cleaner look */}
          
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Here goes full case study, images, tech stack, architecture, etc.
          </p>

          {/* TECH STACK ICONS - UNDER DESCRIPTION, SMALL SIZE */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {[
              { icon: sql, name: "SQL" },
              { icon: excel, name: "Excel" },
              { icon: powerbi, name: "Power BI" },
              { icon: python, name: "Python" },
              { icon: git, name: "Git" },
              { icon: n8n, name: "n8n" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="
                  group flex items-center gap-1.5 px-3 py-1.5 
                  bg-gray-50/50 hover:bg-gray-100 rounded-lg 
                  border border-gray-100 hover:border-gray-200
                  transition-all duration-200 ease-out
                  hover:shadow-sm hover:-translate-y-0.5
                "
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="
                    w-3.5 h-3.5 object-contain 
                    group-hover:scale-110 transition-transform
                  "
                />
                <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA - Add your case study here */}
        <div className="max-w-5xl mx-auto">
  <div className=" p-6 md:p-12 rounded-3xl ">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-gray-900 text-center">
      Analytics Dashboard
    </h2>
    
    {/* DASHBOARD IMAGE - Full responsive */}
    <div className="w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200/50 bg-white">
      <img 
        src={img11}  // ← YE PATH CHANGE KARO
        alt="Analytics Dashboard"
        className="
          w-full h-[220px] md:h-[450px] lg:h-[500px] 
          object-cover object-center
          hover:scale-[1.02] transition-transform duration-500
        "
      />
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
