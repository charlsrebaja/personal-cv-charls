"use client";

import React from "react";

export default function ProjectsCircuit() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 960"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle PCB micro-grid pattern */}
          <pattern
            id="projects-pcb-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="24"
              cy="24"
              r="0.6"
              className="fill-slate-400/15 dark:fill-cyan-500/10"
            />
            <circle
              cx="0"
              cy="0"
              r="0.6"
              className="fill-slate-400/15 dark:fill-cyan-500/10"
            />
            <circle
              cx="48"
              cy="0"
              r="0.6"
              className="fill-slate-400/15 dark:fill-cyan-500/10"
            />
            <circle
              cx="0"
              cy="48"
              r="0.6"
              className="fill-slate-400/15 dark:fill-cyan-500/10"
            />
            <circle
              cx="48"
              cy="48"
              r="0.6"
              className="fill-slate-400/15 dark:fill-cyan-500/10"
            />
          </pattern>
        </defs>

        {/* Ambient Subtle PCB Grid Background */}
        <rect width="1440" height="960" fill="url(#projects-pcb-grid)" />

        {/* ====================================================================
            PLAIN CIRCUIT PATHS DEFINITIONS
            ==================================================================== */}

        {/* Top-Left Framing Track */}
        <path
          id="pc-top-left-1"
          d="M 0,70 L 140,70 L 180,110 L 320,110 L 350,80 L 460,80"
        />
        <path
          id="pc-top-left-2"
          d="M 0,105 L 120,105 L 155,140 L 260,140"
        />

        {/* Top-Right Framing Track */}
        <path
          id="pc-top-right-1"
          d="M 1440,70 L 1300,70 L 1260,110 L 1120,110 L 1090,80 L 980,80"
        />
        <path
          id="pc-top-right-2"
          d="M 1440,105 L 1320,105 L 1285,140 L 1180,140"
        />

        {/* Left Side Bus Track (Outer boundary alongside carousel) */}
        <path
          id="pc-left-bus"
          d="M 30,220 L 100,220 L 150,270 L 150,480 L 110,520 L 50,520 L 20,550 L 20,680 L 60,720 L 120,720"
        />
        <path
          id="pc-left-inner"
          d="M 70,330 L 120,330 L 160,370 L 220,370"
        />
        <path
          id="pc-left-lower"
          d="M 40,430 L 90,430 L 130,470 L 190,470"
        />

        {/* Right Side Bus Track (Outer boundary alongside carousel) */}
        <path
          id="pc-right-bus"
          d="M 1410,220 L 1340,220 L 1290,270 L 1290,480 L 1330,520 L 1390,520 L 1420,550 L 1420,680 L 1380,720 L 1320,720"
        />
        <path
          id="pc-right-inner"
          d="M 1370,330 L 1320,330 L 1280,370 L 1220,370"
        />
        <path
          id="pc-right-lower"
          d="M 1400,430 L 1350,430 L 1310,470 L 1250,470"
        />

        {/* Bottom Left Bus Track */}
        <path
          id="pc-bottom-left"
          d="M 10,870 L 170,870 L 220,820 L 440,820 L 480,860 L 610,860"
        />

        {/* Bottom Right Bus Track */}
        <path
          id="pc-bottom-right"
          d="M 1430,870 L 1270,870 L 1220,820 L 1000,820 L 960,860 L 830,860"
        />

        {/* Center Bottom Sub-Bus */}
        <path
          id="pc-bottom-center"
          d="M 640,890 L 670,920 L 770,920 L 800,890"
        />

        {/* ====================================================================
            BASE CIRCUIT TRACES (Plain, Clean, Crisp)
            ==================================================================== */}
        <g
          className="stroke-slate-300/40 dark:stroke-cyan-500/18 transition-colors duration-500"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <use href="#pc-top-left-1" />
          <use href="#pc-top-left-2" />
          <use href="#pc-top-right-1" />
          <use href="#pc-top-right-2" />
          <use href="#pc-left-bus" />
          <use href="#pc-left-inner" />
          <use href="#pc-left-lower" />
          <use href="#pc-right-bus" />
          <use href="#pc-right-inner" />
          <use href="#pc-right-lower" />
          <use href="#pc-bottom-left" />
          <use href="#pc-bottom-right" />
          <use href="#pc-bottom-center" />
        </g>

        {/* Micro IC Outline Footprints (Minimalist plain hardware accents) */}
        <g className="stroke-slate-300/35 dark:stroke-cyan-500/15 transition-colors duration-500" strokeWidth="1" fill="none">
          {/* Left IC Package */}
          <rect x="75" y="385" width="28" height="28" rx="2" />
          <circle cx="82" cy="392" r="1.5" className="fill-slate-300/40 dark:fill-cyan-500/20" />
          <line x1="68" y1="392" x2="75" y2="392" />
          <line x1="68" y1="399" x2="75" y2="399" />
          <line x1="68" y1="406" x2="75" y2="406" />
          <line x1="103" y1="392" x2="110" y2="392" />
          <line x1="103" y1="399" x2="110" y2="399" />
          <line x1="103" y1="406" x2="110" y2="406" />

          {/* Right IC Package */}
          <rect x="1337" y="385" width="28" height="28" rx="2" />
          <circle cx="1344" cy="392" r="1.5" className="fill-slate-300/40 dark:fill-cyan-500/20" />
          <line x1="1330" y1="392" x2="1337" y2="392" />
          <line x1="1330" y1="399" x2="1337" y2="399" />
          <line x1="1330" y1="406" x2="1337" y2="406" />
          <line x1="1365" y1="392" x2="1372" y2="392" />
          <line x1="1365" y1="399" x2="1372" y2="399" />
          <line x1="1365" y1="406" x2="1372" y2="406" />
        </g>

        {/* Small Corner Alignment Crosshairs */}
        <g className="stroke-slate-400/30 dark:stroke-cyan-400/20" strokeWidth="1" fill="none">
          {/* Top Left */}
          <path d="M 50,40 L 65,40" />
          <path d="M 50,40 L 50,55" />
          {/* Top Right */}
          <path d="M 1390,40 L 1375,40" />
          <path d="M 1390,40 L 1390,55" />
          {/* Bottom Left */}
          <path d="M 50,920 L 65,920" />
          <path d="M 50,920 L 50,905" />
          {/* Bottom Right */}
          <path d="M 1390,920 L 1375,920" />
          <path d="M 1390,920 L 1390,905" />
        </g>

        {/* ====================================================================
            TERMINAL SOLDER VIAS (Endpoint Pads)
            ==================================================================== */}
        <g>
          {[
            { cx: 460, cy: 80 },
            { cx: 260, cy: 140 },
            { cx: 980, cy: 80 },
            { cx: 1180, cy: 140 },
            { cx: 220, cy: 370 },
            { cx: 190, cy: 470 },
            { cx: 120, cy: 720 },
            { cx: 1220, cy: 370 },
            { cx: 1250, cy: 470 },
            { cx: 1320, cy: 720 },
            { cx: 610, cy: 860 },
            { cx: 830, cy: 860 },
            { cx: 640, cy: 890 },
            { cx: 800, cy: 890 },
          ].map((via, i) => (
            <g key={i}>
              {/* Outer Pad Ring */}
              <circle
                cx={via.cx}
                cy={via.cy}
                r="3.2"
                className="fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-cyan-500/40 transition-colors duration-500"
                strokeWidth="1.2"
              />
              {/* Center Copper Via Dot */}
              <circle
                cx={via.cx}
                cy={via.cy}
                r="1.4"
                className="fill-slate-400/60 dark:fill-cyan-400/70 transition-colors duration-500"
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
