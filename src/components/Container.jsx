// src/components/Container.jsx
import React from "react";

/**
 * Container — single place to control the site percent width.
 * Change widthClass to "w-[90%]" or "w-[100%]" etc.
 */
export default function Container({ children, className = "" }) {
  // widthClass: update once here to change app width everywhere
  const widthClass = "w-[97%]"; // <-- change this to adjust site percent width
  return (
    <div className={`${widthClass} mx-auto ${className}`}>
      {children}
    </div>
  );
}
