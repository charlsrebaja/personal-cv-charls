"use client";

import { useEffect, useRef } from "react";

export default function HeroCircuit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<SVGRadialGradientElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    // Respect user's reduced motion preferences
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;
    let pendingX = 720;
    let pendingY = 450;
    let pendingHover = false;
    let isVisible = false;
    let cachedRect: DOMRect | null = null;

    const updateRect = () => {
      if (container) {
        cachedRect = container.getBoundingClientRect();
      }
    };

    const updateSpotlight = () => {
      if (gradientRef.current) {
        gradientRef.current.setAttribute("cx", String(pendingX));
        gradientRef.current.setAttribute("cy", String(pendingY));
      }
      if (circleRef.current) {
        circleRef.current.setAttribute("cx", String(pendingX));
        circleRef.current.setAttribute("cy", String(pendingY));
        circleRef.current.style.opacity = pendingHover ? "0.8" : "0.25";
      }
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      if (!cachedRect) updateRect();
      const rect = cachedRect;
      if (!rect) return;

      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        pendingX = ((e.clientX - rect.left) / rect.width) * 1440;
        pendingY = ((e.clientY - rect.top) / rect.height) * 900;
        pendingHover = true;
      } else {
        pendingHover = false;
      }

      if (!rafId) {
        rafId = requestAnimationFrame(updateSpotlight);
      }
    };

    const handleMouseLeave = () => {
      pendingHover = false;
      if (!rafId) {
        rafId = requestAnimationFrame(updateSpotlight);
      }
    };

    // Attach listeners only when visible in viewport
    const attachListeners = () => {
      updateRect();
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("resize", updateRect, { passive: true });
      window.addEventListener("scroll", updateRect, { passive: true });
    };

    const detachListeners = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          attachListeners();
        } else {
          detachListeners();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      detachListeners();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle & Soft Neon Glow Filter */}
          <filter id="circuit-glow-subtle" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Elegant Minimal Cyan Energy Gradient */}
          <linearGradient id="energy-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="65%" stopColor="#22d3ee" stopOpacity="0.6" />
            <stop offset="92%" stopColor="#67e8f9" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#cffafe" stopOpacity="0.95" />
          </linearGradient>

          {/* Soft Interactive Mouse Spotlight Gradient */}
          <radialGradient
            ref={gradientRef}
            id="cursor-spotlight"
            cx="720"
            cy="450"
            r="320"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#0891b2" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Micro PCB Grid Pattern - Minimal & Discrete */}
          <pattern id="pcb-micro-grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <circle cx="28" cy="28" r="0.6" className="fill-slate-400/15 dark:fill-cyan-500/10" />
            <circle cx="0" cy="0" r="0.6" className="fill-slate-400/15 dark:fill-cyan-500/10" />
            <circle cx="56" cy="0" r="0.6" className="fill-slate-400/15 dark:fill-cyan-500/10" />
            <circle cx="0" cy="56" r="0.6" className="fill-slate-400/15 dark:fill-cyan-500/10" />
            <circle cx="56" cy="56" r="0.6" className="fill-slate-400/15 dark:fill-cyan-500/10" />
          </pattern>
        </defs>

        {/* Ambient Subtle PCB Grid Background */}
        <rect width="1440" height="900" fill="url(#pcb-micro-grid)" />

        {/* Interactive Soft Mouse Spotlight */}
        <circle
          ref={circleRef}
          cx="720"
          cy="450"
          r="320"
          fill="url(#cursor-spotlight)"
          className="transition-opacity duration-500 opacity-25"
        />

        {/* ====================================================================
            DEFINED ELEGANT CYAN CIRCUIT PATHS (Curated, Uncluttered)
            ==================================================================== */}

        {/* Path 1: Top-Left Header Framing Track (above status badge & intro) */}
        <path
          id="cp-top-left"
          d="M 30,130 L 150,130 L 195,175 L 195,210 L 240,255 L 320,255"
        />

        {/* Path 2: Bottom-Left Foundation Track (runs beneath tech stack) */}
        <path
          id="cp-bottom-left"
          d="M 20,740 L 160,740 L 210,690 L 440,690 L 490,740 L 650,740"
        />

        {/* Path 3: Center Signal Line (gently leads from text area toward avatar) */}
        <path
          id="cp-center-bus"
          d="M 640,380 L 710,380 L 760,430 L 825,430"
        />

        {/* Path 4: Core North-East Framing Egress (radiates into top-right) */}
        <path
          id="cp-top-right"
          d="M 1060,160 L 1060,110 L 1120,50 L 1280,50 L 1330,100 L 1420,100"
        />

        {/* Path 5: Core South-East Power Track (lower right boundary) */}
        <path
          id="cp-bottom-right"
          d="M 1250,620 L 1315,685 L 1315,765 L 1365,815 L 1430,815"
        />

        {/* ====================================================================
            LAYER 1: Base Circuit Tracks (Crisp, Thin, Subtle)
            ==================================================================== */}
        <g
          className="stroke-slate-300/30 dark:stroke-cyan-500/18 transition-colors duration-500"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <use href="#cp-top-left" />
          <use href="#cp-bottom-left" />
          <use href="#cp-center-bus" />
          <use href="#cp-top-right" />
          <use href="#cp-bottom-right" />
        </g>

        {/* ====================================================================
            LAYER 2: Minimal Avatar Cybernetic Framing
            ==================================================================== */}
        <g className="transition-colors duration-500">
          {/* Subtle Dashed Outer Orbital Ring */}
          <circle
            cx="1050"
            cy="440"
            r="285"
            className="stroke-slate-300/25 dark:stroke-cyan-500/15"
            strokeWidth="1"
            strokeDasharray="3 14"
          />

          {/* Gentle, Slow Rotating Cyan Radar Accent Arc */}
          <g className="animate-circuit-radar origin-[1050px_440px]">
            <path
              d="M 1050,155 A 285 285 0 0 1 1335,440"
              className="stroke-cyan-500/25 dark:stroke-cyan-400/30"
              strokeWidth="1.5"
              strokeDasharray="35 320"
              strokeLinecap="round"
              filter="url(#circuit-glow-subtle)"
            />
          </g>

          {/* Minimal Corner Crosshair Brackets around Avatar Core */}
          <g className="stroke-cyan-500/30 dark:stroke-cyan-400/35" strokeWidth="1.2" fill="none">
            <path d="M 825,265 L 810,265 L 810,280" />
            <path d="M 1275,265 L 1290,265 L 1290,280" />
            <path d="M 1290,600 L 1290,615 L 1275,615" />
            <path d="M 810,600 L 810,615 L 825,615" />
          </g>
        </g>

        {/* ====================================================================
            LAYER 3: Flowing Minimal Cyan Energy Pulses (Slow & Elegant)
            ==================================================================== */}
        <g filter="url(#circuit-glow-subtle)">
          {/* Pulse on Top-Left Framing (9s duration) */}
          <use
            href="#cp-top-left"
            className="animate-circuit-flow-1"
            stroke="url(#energy-cyan)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="55 500"
          />

          {/* Pulse on Bottom-Left Track (12s duration) */}
          <use
            href="#cp-bottom-left"
            className="animate-circuit-flow-2"
            stroke="url(#energy-cyan)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="65 600"
          />

          {/* Pulse on Center Bus entering toward Avatar (11s duration) */}
          <use
            href="#cp-center-bus"
            className="animate-circuit-flow-slow"
            stroke="url(#energy-cyan)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="45 420"
          />

          {/* Pulse on Top-Right Egress (15s duration) */}
          <use
            href="#cp-top-right"
            className="animate-circuit-flow-3"
            stroke="url(#energy-cyan)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="55 540"
          />
        </g>

        {/* ====================================================================
            LAYER 4: Delicate Terminal Solder Vias (Only at key endpoints)
            ==================================================================== */}
        <g>
          {[
            { cx: 30, cy: 130 },
            { cx: 320, cy: 255 },
            { cx: 20, cy: 740 },
            { cx: 650, cy: 740 },
            { cx: 825, cy: 430 },
            { cx: 1060, cy: 160 },
            { cx: 1420, cy: 100 },
            { cx: 1430, cy: 815 },
          ].map((node, i) => (
            <g key={i}>
              {/* Outer Solder Ring */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r="3.5"
                className="fill-white dark:fill-slate-900 stroke-cyan-600/70 dark:stroke-cyan-400/60"
                strokeWidth="1.2"
              />
              {/* Soft Pulsing Core Dot */}
              <circle
                cx={node.cx}
                cy={node.cy}
                r="1.6"
                className="fill-cyan-600/80 dark:fill-cyan-300/80 animate-circuit-node"
                style={{ animationDelay: `${(i * 350) % 2500}ms` }}
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
