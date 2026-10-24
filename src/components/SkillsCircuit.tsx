"use client";

import React from "react";

export default function SkillsCircuit() {
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
            id="skills-pcb-grid"
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
        <rect width="1440" height="960" fill="url(#skills-pcb-grid)" />

        {/* ====================================================================
            PLAIN CIRCUIT PATHS DEFINITIONS FOR SKILLS
            ==================================================================== */}

        {/* Top Boundary Tracks (framing above header) */}
        <path
          id="sc-top-left-1"
          d="M 0,60 L 160,60 L 200,100 L 330,100 L 360,70 L 480,70"
        />
        <path
          id="sc-top-left-2"
          d="M 0,95 L 130,95 L 165,130 L 280,130"
        />

        <path
          id="sc-top-right-1"
          d="M 1440,60 L 1280,60 L 1240,100 L 1110,100 L 1080,70 L 960,70"
        />
        <path
          id="sc-top-right-2"
          d="M 1440,95 L 1310,95 L 1275,130 L 1160,130"
        />

        {/* Left Side Outer Flank Bus alongside category cards */}
        <path
          id="sc-left-bus"
          d="M 25,220 L 90,220 L 135,265 L 135,490 L 95,530 L 45,530 L 15,560 L 15,710 L 55,750 L 120,750"
        />
        <path
          id="sc-left-feeder-1"
          d="M 60,340 L 110,340 L 145,375 L 210,375"
        />
        <path
          id="sc-left-feeder-2"
          d="M 35,450 L 85,450 L 125,490 L 180,490"
        />

        {/* Right Side Outer Flank Bus alongside category cards */}
        <path
          id="sc-right-bus"
          d="M 1415,220 L 1350,220 L 1305,265 L 1305,490 L 1345,530 L 1395,530 L 1425,560 L 1425,710 L 1385,750 L 1320,750"
        />
        <path
          id="sc-right-feeder-1"
          d="M 1380,340 L 1330,340 L 1295,375 L 1230,375"
        />
        <path
          id="sc-right-feeder-2"
          d="M 1405,450 L 1355,450 L 1315,490 L 1260,490"
        />

        {/* Central Vertical Conduit (subtle spine between grid columns) */}
        <path
          id="sc-center-spine"
          d="M 720,200 L 720,380 L 700,400 L 700,560 L 720,580 L 720,780"
        />
        <path
          id="sc-center-branch-1"
          d="M 700,400 L 665,400"
        />
        <path
          id="sc-center-branch-2"
          d="M 700,560 L 665,560"
        />
        <path
          id="sc-center-branch-3"
          d="M 720,480 L 755,480"
        />

        {/* Bottom Framing Buses */}
        <path
          id="sc-bottom-left"
          d="M 20,880 L 180,880 L 220,840 L 450,840 L 490,880 L 620,880"
        />
        <path
          id="sc-bottom-right"
          d="M 1420,880 L 1260,880 L 1220,840 L 990,840 L 950,880 L 820,880"
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
          <use href="#sc-top-left-1" />
          <use href="#sc-top-left-2" />
          <use href="#sc-top-right-1" />
          <use href="#sc-top-right-2" />
          <use href="#sc-left-bus" />
          <use href="#sc-left-feeder-1" />
          <use href="#sc-left-feeder-2" />
          <use href="#sc-right-bus" />
          <use href="#sc-right-feeder-1" />
          <use href="#sc-right-feeder-2" />
          <use href="#sc-center-spine" />
          <use href="#sc-center-branch-1" />
          <use href="#sc-center-branch-2" />
          <use href="#sc-center-branch-3" />
          <use href="#sc-bottom-left" />
          <use href="#sc-bottom-right" />
        </g>

        {/* Micro IC Footprints (Hardware details on flanks) */}
        <g
          className="stroke-slate-300/35 dark:stroke-cyan-500/15 transition-colors duration-500"
          strokeWidth="1"
          fill="none"
        >
          {/* Left IC Package */}
          <rect x="68" y="400" width="26" height="26" rx="2" />
          <circle cx="75" cy="407" r="1.4" className="fill-slate-300/40 dark:fill-cyan-500/20" />
          <line x1="62" y1="407" x2="68" y2="407" />
          <line x1="62" y1="413" x2="68" y2="413" />
          <line x1="62" y1="419" x2="68" y2="419" />
          <line x1="94" y1="407" x2="100" y2="407" />
          <line x1="94" y1="413" x2="100" y2="413" />
          <line x1="94" y1="419" x2="100" y2="419" />

          {/* Right IC Package */}
          <rect x="1346" y="400" width="26" height="26" rx="2" />
          <circle cx="1353" cy="407" r="1.4" className="fill-slate-300/40 dark:fill-cyan-500/20" />
          <line x1="1340" y1="407" x2="1346" y2="407" />
          <line x1="1340" y1="413" x2="1346" y2="413" />
          <line x1="1340" y1="419" x2="1346" y2="419" />
          <line x1="1372" y1="407" x2="1378" y2="407" />
          <line x1="1372" y1="413" x2="1378" y2="413" />
          <line x1="1372" y1="419" x2="1378" y2="419" />
        </g>

        {/* Alignment Crosshairs */}
        <g className="stroke-slate-400/30 dark:stroke-cyan-400/20" strokeWidth="1" fill="none">
          <path d="M 45,45 L 60,45" />
          <path d="M 45,45 L 45,60" />
          <path d="M 1395,45 L 1380,45" />
          <path d="M 1395,45 L 1395,60" />
          <path d="M 45,915 L 60,915" />
          <path d="M 45,915 L 45,900" />
          <path d="M 1395,915 L 1380,915" />
          <path d="M 1395,915 L 1395,900" />
        </g>

        {/* ====================================================================
            TERMINAL SOLDER VIAS
            ==================================================================== */}
        <g>
          {[
            { cx: 480, cy: 70 },
            { cx: 280, cy: 130 },
            { cx: 960, cy: 70 },
            { cx: 1160, cy: 130 },
            { cx: 210, cy: 375 },
            { cx: 180, cy: 490 },
            { cx: 120, cy: 750 },
            { cx: 1230, cy: 375 },
            { cx: 1260, cy: 490 },
            { cx: 1320, cy: 750 },
            { cx: 665, cy: 400 },
            { cx: 665, cy: 560 },
            { cx: 755, cy: 480 },
            { cx: 620, cy: 880 },
            { cx: 820, cy: 880 },
          ].map((via, i) => (
            <g key={i}>
              <circle
                cx={via.cx}
                cy={via.cy}
                r="3.2"
                className="fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-cyan-500/40 transition-colors duration-500"
                strokeWidth="1.2"
              />
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
