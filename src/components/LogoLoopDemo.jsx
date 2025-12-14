"use client";

import React from "react";
import LogoLoop from "./LogoLoop";
import { techLogos } from "../data/techLogos.jsx";


export default function LogoLoopDemo() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="text-lg font-medium mb-3">Horizontal loop (icons)</h3>
        <div style={{ height: 96, position: "relative", overflow: "hidden" }}>
          <LogoLoop
            logos={techLogos}
            speed={124}
            direction="left"
            logoHeight={48}
            gap={40}
            hoverSpeed={5}
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>

    </div>
  );
}
