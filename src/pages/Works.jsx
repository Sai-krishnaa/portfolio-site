import React from "react";
import { useNavigate } from "react-router-dom";

export default function Works() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f3f4f6]">
      {/* Header with back button */}
      <header className="w-full bg-[#f3f4f6]">
        <div className="w-[95%] mx-auto px-4 md:px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black
                       hover:bg-black hover:text-white transition"
          >
            ← Back
          </button>
          <h1 className="text-3xl md:text-4xl font-bold">My Works</h1>
        </div>
      </header>

      {/* Works content */}
      <main className="container-wide px-4 md:px-6 pb-14 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Work Card 1 */}
          <div className="rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl font-bold">Project 1</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Your Project Title</h3>
              <p className="text-gray-600 mb-4">
                Add your project description here. Highlight the technologies used and key achievements.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">Tailwind</span>
              </div>
              <a
                href="#"
                className="inline-block px-4 py-2 rounded-full bg-black text-white hover:bg-red-600 transition"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Work Card 2 */}
          <div className="rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl font-bold">Project 2</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Your Project Title</h3>
              <p className="text-gray-600 mb-4">
                Add your project description here. Highlight the technologies used and key achievements.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">MongoDB</span>
              </div>
              <a
                href="#"
                className="inline-block px-4 py-2 rounded-full bg-black text-white hover:bg-red-600 transition"
              >
                View Project →
              </a>
            </div>
          </div>

          {/* Work Card 3 */}
          <div className="rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl font-bold">Project 3</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Your Project Title</h3>
              <p className="text-gray-600 mb-4">
                Add your project description here. Highlight the technologies used and key achievements.
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium">Flask</span>
              </div>
              <a
                href="#"
                className="inline-block px-4 py-2 rounded-full bg-black text-white hover:bg-red-600 transition"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
