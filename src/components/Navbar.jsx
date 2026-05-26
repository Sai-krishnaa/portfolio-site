"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Book,
  FileText,
  HelpCircle,
  Users,
  Clock3,
  Play,
  Menu,
  X,
} from "lucide-react";

import tranaction from "../assets/tr.png";
import zepto from "../assets/zp.png";
import mobile from "../assets/md.png";
import imgBlood from "../assets/sh.png";
import skills_icon from "../assets/skills_icon.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openCase, setOpenCase] = useState(false);
  const [mobile, setMobile] = useState(false);

  const [selectedProject, setSelectedProject] =
    useState("Schneider Electric");

  const projectsList = [
  {
    id: "Schneider Electric",
    title: "Industrial Automation",
    desc: "Industrial Automation revenue growth analysis",
    img: imgBlood,
  },

  {
    id: "Reconciliation",
    title: "Reconciliation",
    desc: "Bank & refund analysis",
    img: tranaction,
  },

  {
    id: "Zepto",
    title: "Zepto Analysis",
    desc: "Order insights dashboard",
    img: zepto,
  },

  {
    id: "MobileSales",
    title: "Mobile Sales Dashboard",
    desc: "Mobile app sales dashboard",
    img: mobile,
  },
];

  return (
    <>
      {/* ================= HEADER ================= */}

      <header className="w-full sticky top-0 z-50 bg-[#f3f4f6]/80 backdrop-blur-xl">

        <div className="w-[95%] mx-auto py-5 flex items-center justify-between">

          {/* LOGO */}

          <h1 className="text-3xl font-bold tracking-tight">
            Sai Krishna
          </h1>

          {/* DESKTOP NAV */}

          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-neutral-700 relative">

            <a
              href="#about"
              className="hover:text-black transition"
            >
              About
            </a>

            {/* ================= PROJECTS ================= */}

            <div
              className="relative"
              onMouseEnter={() => setOpenProjects(true)}
              onMouseLeave={() => setOpenProjects(false)}
            >

              <button className="flex items-center gap-2 hover:text-black transition">

                Projects

                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openProjects ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

              </button>

              {/* DROPDOWN */}

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-14 transition-all duration-300 ${
                  openProjects
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-3"
                }`}
              >

                <div className="w-[670px] bg-white rounded-[30px] border border-gray-200 shadow-xl overflow-hidden">

                  <div className="grid grid-cols-[320px_1fr] min-h-[480px]">

                    {/* LEFT */}

                    <div className="p-4 border-r border-gray-100 flex flex-col">

                      <p className="text-xs tracking-[0.3em] text-gray-400 mb-5">
                        PROJECTS
                      </p>

                      <div className="flex flex-col gap-2">

                        {projectsList.map((p) => (
                          <button
                            key={p.id}
                            onMouseEnter={() =>
                              setSelectedProject(p.id)
                            }
                            onClick={() =>
                              setSelectedProject(p.id)
                            }
                            className={`
                              group
                              text-left
                              rounded-2xl
                              px-5
                              py-5
                              transition-all
                              duration-300
                              border

                              ${
                                selectedProject === p.id
                                  ? "bg-gray-50 border-gray-200 shadow-sm"
                                  : "border-transparent hover:bg-gray-50"
                              }
                            `}
                          >

                            <div className="flex items-start justify-between">

                              <div>

                                <h3 className="text-[18px] font-semibold text-black">
                                  {p.title}
                                </h3>

                                <p className="text-sm text-gray-500 mt-1">
                                  {p.desc}
                                </p>

                              </div>

                              {/* RIGHT ICON */}

                              <div
                                className={`
                                  w-9
                                  h-9
                                  rounded-full
                                  flex
                                  items-center
                                  justify-center
                                  transition-all
                                  duration-300

                                  ${
                                    selectedProject === p.id
                                      ? "bg-orange-500 text-white"
                                      : "bg-gray-100 text-gray-500 group-hover:bg-black group-hover:text-white"
                                  }
                                `}
                              >
                                <ArrowUpRight size={16} />
                              </div>

                            </div>

                          </button>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT IMAGE */}

                    <div className="p-4 flex items-center justify-center bg-[#fafafa]">

                      <div className="relative w-[290px] h-[420px] rounded-[28px] overflow-hidden shadow-xl border border-gray-200 bg-white">

                        <img
                          src={
                            projectsList.find(
                              (p) =>
                                p.id === selectedProject
                            )?.img
                          }
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* OVERLAY */}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                        {/* CONTENT */}

                        <div className="absolute bottom-0 left-0 right-0 p-6">

                          <button className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">

                            View Project

                            <ArrowUpRight size={16} />

                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


           {/* ================= SKILLS ================= */}

<div
  className="relative"
  onMouseEnter={() => setOpenSkills(true)}
  onMouseLeave={() => setOpenSkills(false)}
>

  <button className="flex items-center gap-2 hover:text-black transition">

    Skills

    <svg
      className={`w-4 h-4 transition-transform duration-300 ${
        openSkills ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>

  </button>

  {/* DROPDOWN */}

  <div
    className={`absolute left-1/2 -translate-x-1/2 top-14 transition-all duration-300 ${
      openSkills
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible translate-y-3"
    }`}
  >

    <div className="w-[320px] bg-white rounded-[28px] border border-gray-200 shadow-xl overflow-hidden p-3">

      <img
        src={skills_icon}
        alt="skills"
        className="w-full h-auto rounded-[22px] object-cover"
      />

    </div>
  </div>
</div>


            {/* ================= CASE STUDY ================= */}

            <div
              className="relative"
              onMouseEnter={() => setOpenCase(true)}
              onMouseLeave={() => setOpenCase(false)}
            >

              <button className="flex items-center gap-2 hover:text-black transition">

                Case Study

                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openCase ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-14 transition-all duration-300 ${
                  openCase
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible translate-y-3"
                }`}
              >

                <div className="w-[420px] bg-white rounded-[20px] border border-gray-200 shadow-xl overflow-hidden">

                  <div className="p-4">

                    <DropdownItem
                      icon={<FileText size={18} />}
                      title="Reconciliation Case"
                      desc="Refund & settlements"
                    />

                    <DropdownItem
                      icon={<Book size={18} />}
                      title="Zepto Analysis"
                      desc="Order & delivery insights"
                    />

                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* RIGHT */}

          <div className="hidden lg:flex items-center gap-3">

            <button className="px-7 py-3 rounded-full bg-black text-white hover:bg-orange-600 transition-all duration-300">
              Contact Us
            </button>

            <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:rotate-45 transition-all duration-300">

              <ArrowUpRight size={18} />

            </button>

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMobile(true)}
            className="lg:hidden w-11 h-11 rounded-full bg-black text-white flex items-center justify-center"
          >
            <Menu size={20} />
          </button>

        </div>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 lg:hidden ${
          mobile
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >

        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobile(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[85%] bg-white transition-transform duration-300 ${
            mobile
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          <div className="p-6 flex justify-between items-center border-b">

            <h2 className="text-2xl font-bold">
              Menu
            </h2>

            <button
              onClick={() => setMobile(false)}
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
            >
              <X size={18} />
            </button>

          </div>

          <nav className="flex flex-col p-6 gap-6 text-lg font-medium">

            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#case-study">Case Study</a>

          </nav>

          <div className="absolute bottom-6 left-6 right-6">

            <button className="w-full py-4 rounded-full bg-orange-500 text-white">
              Contact Us
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

function DropdownItem({ icon, title, desc }) {
  return (
    <button
      className="
      group
      w-full
      flex
      items-start
      gap-4
      p-4
      rounded-2xl
      hover:bg-gray-50
      transition-all
      duration-300
      text-left
      mb-2
    "
    >

      <div
        className="
        w-11
        h-11
        rounded-2xl
        bg-gray-100
        flex
        items-center
        justify-center
        text-black
      "
      >
        {icon}
      </div>

      <div>

        <h4 className="text-black font-medium text-[15px]">
          {title}
        </h4>

        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
          {desc}
        </p>

      </div>
    </button>
  );
}