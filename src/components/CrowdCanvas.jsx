"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Improved CrowdCanvas.jsx — denser crowd options
 *
 * Props:
 *  - src: image URL (imported or public path)
 *  - rows, cols: sprite grid layout (columns across, rows down)
 *  - initialCount: how many peeps to spawn initially (higher = denser)
 *  - minScale, maxScale: scale range for each peep (0.4 - 1.0)
 *  - offsetMin, offsetMax: vertical offset range (smaller => tighter cluster)
 *  - canvasHeight: css height string (e.g. "50vh")
 *
 * Usage:
 *  <CrowdCanvas src={allPeeps} rows={15} cols={7} initialCount={40}
 *               minScale={0.45} maxScale={0.75} offsetMin={-30} offsetMax={40}
 *               canvasHeight="50vh" />
 */

const CrowdCanvas = ({
  src,
  rows = 15,
  cols = 7,
  initialCount = 40,
  minScale = 0.45,
  maxScale = 0.75,
  offsetMin = -30,
  offsetMax = 40,
  canvasHeight = "50vh",
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!gsap) {
      console.error("GSAP not loaded. Run: npm install gsap");
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // utils
    const rand = (min, max) => min + Math.random() * (max - min);
    const randIndex = (arr) => (Math.floor(rand(0, arr.length)) % arr.length);
    const removeAt = (arr, i) => arr.splice(i, 1)[0];
    const removeRandom = (arr) => removeAt(arr, Math.floor(rand(0, arr.length)));
    const getRandom = (arr) => arr[Math.floor(rand(0, arr.length))];

    // peep factory
    const createPeep = ({ image, rect }) => {
      const scale = rand(minScale, maxScale);
      const peep = {
        image,
        rect,
        width: rect[2],
        height: rect[3],
        x: 0,
        y: 0,
        anchorY: 0,
        scaleX: 1,
        scale,
        walk: null,
        setRect(r) {
          peep.rect = r;
          peep.width = r[2];
          peep.height = r[3];
        },
        render(ctx) {
          ctx.save();
          // apply scale and flip
          ctx.translate(peep.x, peep.y);
          ctx.scale(peep.scaleX * peep.scale, peep.scale);
          ctx.drawImage(
            peep.image,
            peep.rect[0],
            peep.rect[1],
            peep.rect[2],
            peep.rect[3],
            0,
            0,
            peep.width,
            peep.height
          );
          ctx.restore();
        },
      };
      peep.setRect(rect);
      return peep;
    };

    // tween factories
    const resetPeep = ({ stage, peep }) => {
      // random direction
      const dir = Math.random() > 0.5 ? 1 : -1;
      // smaller vertical offset range to tighten cluster
      const offsetY = rand(offsetMin, offsetMax) * gsap.parseEase("power2.in")(Math.random());
      const startY = stage.height - peep.height * peep.scale + offsetY;
      let startX, endX;
      if (dir === 1) {
        startX = -peep.width * peep.scale;
        endX = stage.width + peep.width * peep.scale;
        peep.scaleX = 1;
      } else {
        startX = stage.width + peep.width * peep.scale;
        endX = -peep.width * peep.scale;
        peep.scaleX = -1;
      }
      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;
      return { startX, startY, endX };
    };

    const normalWalk = ({ peep, props }) => {
      const { startY, endX } = props;
      // speed scaling: smaller peeps move slightly faster — helps density illusion
      const sizeFactor = (maxScale + minScale) / (peep.scale + 0.0001);
      const xDuration = rand(6, 12) * (1 / (peep.scale + 0.5)); // smaller = faster
      const yDuration = 0.25;
      const tl = gsap.timeline();
      tl.timeScale(rand(0.6, 1.3));
      tl.to(peep, { duration: xDuration, x: endX, ease: "none" }, 0);
      tl.to(peep, {
        duration: yDuration,
        repeat: Math.max(1, Math.floor(xDuration / yDuration)),
        yoyo: true,
        y: startY - rand(4, 14),
      }, 0);
      return tl;
    };

    const walks = [normalWalk];

    // main
    const img = new Image();
    img.crossOrigin = "anonymous";
    const stage = { width: 0, height: 0 };
    const allPeeps = [];
    const availablePeeps = [];
    const crowd = [];

    const createPeepsFromSprite = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      if (!width || !height) return;
      // sprite grid: columns = rows param, rows = cols param (kept same convention)
      const total = rows * cols;
      const rectW = width / rows;
      const rectH = height / cols;
      allPeeps.length = 0;
      for (let i = 0; i < total; i++) {
        const rect = [
          (i % rows) * rectW,
          Math.floor(i / rows) * rectH,
          rectW,
          rectH,
        ];
        allPeeps.push(createPeep({ image: img, rect }));
      }
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);
    };

    const initCrowd = () => {
      const cap = Math.min(availablePeeps.length, Math.max(8, initialCount));
      for (let i = 0; i < cap; i++) {
        const p = addPeepToCrowd();
        if (p && p.walk) p.walk.progress(Math.random());
      }
    };

    const addPeepToCrowd = () => {
      if (!availablePeeps.length) return null;
      const peep = removeRandom(availablePeeps);
      const walk = getRandom(walks)({
        peep,
        props: resetPeep({ peep, stage }),
      }).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep);
        addPeepToCrowd();
      });
      peep.walk = walk;
      crowd.push(peep);
      // sort so smaller anchorY (higher on screen) renders first (depth)
      crowd.sort((a, b) => a.anchorY - b.anchorY);
      return peep;
    };

    const removePeepFromCrowd = (peep) => {
      const idx = crowd.indexOf(peep);
      if (idx !== -1) crowd.splice(idx, 1);
      availablePeeps.push(peep);
    };

    const render = () => {
      if (!canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(devicePixelRatio, devicePixelRatio);
      crowd.forEach((peep) => peep.render(ctx));
      ctx.restore();
    };

    const resize = () => {
      if (!canvas) return;
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(stage.width * devicePixelRatio));
      canvas.height = Math.max(1, Math.floor(stage.height * devicePixelRatio));
      // kill tweens
      crowd.forEach((p) => p.walk && p.walk.kill());
      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);
      initCrowd();
    };

    // init once sprite loads
    img.onload = () => {
      createPeepsFromSprite();
      resize();
      gsap.ticker.add(render);
    };
    img.onerror = (e) => {
      console.error("Sprite failed to load:", e);
      // still try to init (empty)
      createPeepsFromSprite();
      resize();
      gsap.ticker.add(render);
    };
    img.src = src;

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      gsap.ticker.remove(render);
      crowd.forEach((p) => p.walk && p.walk.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, rows, cols, initialCount, minScale, maxScale, offsetMin, offsetMax]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: canvasHeight }}
      aria-hidden="true"
    />
  );
};

export default CrowdCanvas;
