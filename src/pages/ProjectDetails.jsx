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
  const [activeTab, setActiveTab] = useState("overview");

  // Project data mapping for proper title display
  const getProjectTitle = (projectId) => {
    const projects = {
      ambulance: "Smart Ambulance System",
      analytics: "Inventory Analytics Dashboard", 
      ai: "AI Resume Screener"
    };
    return projects[projectId] || projectId;
  };

  const tabContent = {
    overview: "Developed a comprehensive Power BI dashboard providing real-time insights into sales performance across regions. Integrated multiple sources to create a unified business view.",
    challenge: "Data was scattered across Excel files and databases, leading to delayed reporting, inaccurate decisions, and no centralized monitoring.",
    solution: "Built automated ETL pipelines and interactive Power BI dashboards with drilldowns, slicers and dynamic filtering.",
    results: "Reduced manual reporting by 70% and enabled leadership to track KPIs instantly across departments."
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-gray-50 to-white text-gray-900 px-4 sm:px-6 lg:px-16 pt-8 pb-20">
      <div className="w-full max-w-7xl mx-auto relative">
        
        {/* BACK BUTTON - TOP LEFT */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 text-gray-700 hover:text-black transition-all font-medium group"
          >
            <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all group-hover:-translate-x-1 shadow-sm">
              ←
            </span>
            <span className="hidden sm:inline">Back</span>
          </button>
         
          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-12 h-12 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            ↗
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl p-8 flex flex-col shadow-2xl border-l-4 border-red-500">
            <div className="flex justify-end mb-10">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-12 h-12 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-8 text-xl font-semibold text-gray-800 flex-1">
              <a href="/" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">Home</a>
              <a href="/#about" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">About</a>
              <a href="/#projects" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">Projects</a>
              <a href="/#skills" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">Skills</a>
              <a href="/works" onClick={() => setMenuOpen(false)} className="hover:text-red-500 transition">Works</a>
            </nav>
            <button className="mt-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-black to-gray-900 text-white font-semibold text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all">
              Contact Us
            </button>
          </div>
        </div>

        {/* HEADER */}
        <div className="pt-8 lg:pt-20 mb-12 lg:mb-20 space-y-6 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent leading-[1.1] tracking-tight text-center">
            {getProjectTitle(id)}
          </h1>
          
          <p className="text-gray-500 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-center px-4">
            Full case study with images, tech stack, architecture, and results
          </p>

          {/* TECH STACK ICONS */}
          <div className="flex flex-wrap justify-center gap-3 pt-4 px-2">
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
                  group flex items-center gap-2 px-4 py-2.5 
                  bg-white/60 backdrop-blur-sm hover:bg-white 
                  rounded-2xl border border-gray-100 hover:border-gray-200
                  shadow-lg hover:shadow-xl hover:-translate-y-2
                  transition-all duration-300 ease-out
                "
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain group-hover:scale-110 transition-transform"
                />
                <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-gray-900">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN IMAGE */}
        <div className="max-w-6xl mx-auto mb-20 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 text-center">
            Analytics Dashboard
          </h2>
          <div className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl hover:shadow-4xl transition-all duration-700 bg-white/50 backdrop-blur-sm border border-gray-100/30">
            <img 
              src={img11}
              alt="Analytics Dashboard"
              className="
                w-full h-[200px] sm:h-[280px] md:h-[400px] lg:h-[500px] xl:h-[600px]
                object-cover object-center hover:scale-[1.02] transition-transform duration-700
              "
            />
          </div>
        </div>

        {/* DOCUMENTATION SECTION - FULLY RESPONSIVE */}
        <section className="max-w-6xl mx-auto px-4 py-16">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-10">
    <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center text-xl shadow">
      📄
    </div>

    <div>
      <h2 className="text-3xl font-bold text-gray-900">
        Project Documentation
      </h2>
      <p className="text-gray-500 text-sm">
        Select section to view details
      </p>
    </div>
  </div>


  {/* DROPDOWN */}
  <div className="max-w-md mx-auto mb-14 relative">
    <select
      value={activeTab}
      onChange={(e) => setActiveTab(e.target.value)}
      className="
        w-full px-5 py-4 rounded-xl
        bg-white border border-gray-200
        text-gray-800 font-medium
        shadow-sm
        focus:outline-none focus:ring-2 focus:ring-orange-400
        appearance-none
      "
    >
      <option value="overview">Overview</option>
      <option value="challenge">Challenge</option>
      <option value="solution">Solution</option>
      <option value="results">Results</option>
    </select>

    {/* arrow */}
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
      ▼
    </div>
  </div>


  {/* CONTENT */}
  <div className="flex justify-center">

    {activeTab === "results" ? (

      /* ================= REVENUE WIDGET ================= */
      <div className="bg-[#F7924A] rounded-2xl p-5 w-[340px] text-white shadow-md relative overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-sm">
              📊
            </div>
            <h3 className="font-semibold text-base">Total revenue</h3>
          </div>

          <div className="text-xs bg-white/20 px-3 py-1 rounded-full">
            USD $
          </div>
        </div>

        {/* MINI GRAPH */}
        <div className="flex items-end justify-between h-20 mb-5">
          {[40,65,35,75,50,85,45,70,55,90,60,80].map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-1">

              <div className="relative w-[2px] h-20 bg-white/60 rounded-full">
                <div
                  className="absolute bottom-0 w-[2px] bg-white rounded-full"
                  style={{ height: `${h}%` }}
                />
              </div>

              <div className="w-2 h-2 rounded-full bg-black/70"></div>

            </div>
          ))}
        </div>

        {/* VALUE */}
        <div className="text-3xl font-bold tracking-tight mb-1">
          $2,456,900
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-white/80">revenue growth rates</span>
          <span className="bg-black/80 px-2 py-1 rounded-full text-xs">
            +2.5%
          </span>
        </div>

      </div>

    ) : (

      /* TEXT CONTENT CARD */
      <div className="max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-sm p-10 text-gray-800 text-lg leading-relaxed">
        {tabContent[activeTab]}
      </div>

    )}

  </div>

</section>

      </div>
    </div>
  );
}
