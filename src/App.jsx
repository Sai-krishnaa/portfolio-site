// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import CrowdCanvas from "./components/CrowdCanvas";
import allPeeps from "./assets/all-peeps.png";
import LogoLoopDemo from "./components/LogoLoopDemo";
import Skills from "./components/Skills";
// import { Skiper19 } from "./components/Skiper19";
import WorksGallery from "./components/WorksGallery";
import IdeaContactForm from "./components/IdeaContactForm";
import Works from "./pages/Works";

function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="container-wide">
        <About />
      </div>

      <div className="container-wide">
        <Projects />
      </div>

      <div className="container-wide">
      <Skills/>
      </div>

      <div className="container-wide">
      <WorksGallery/>
      </div>
      <div className="container-wide">
        {/* add some bottom padding so the form doesn't butt up against the canvas */}
        <div className="container-wide">
          <IdeaContactForm />
        </div>
      </div>
      <div className="container-wide">
        <CrowdCanvas
          src={allPeeps}
          rows={15}
          cols={7}
          initialCount={70}
          minScale={0.65}
          maxScale={0.85}
          offsetMin={-20}
          offsetMax={25}
          canvasHeight="52vh"
        />
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}
