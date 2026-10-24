"use client";

import React from "react";

export default function FooterCircuit() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1440 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Subtle PCB micro-grid pattern */}
          <pattern
            id="footer-pcb-grid"
            width="44"
            height="44"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="22"
              cy="22"
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
              cx="44"
              cy="0"
              r="0.6"
              className="fill-slate-400/15 dark:fill-cyan-500/10"
            />
            <circle
              cx="0"
              cy="44"
              r="0.6"
              className="fill-slate-400/15 dark:fill-cyan-500/10"
            />
            <circle
              cx="44"
              cy="44"
              r="0.6"
              className="fill-slate-400/15 dark:fill-cyan-500/10"
            />
          </pattern>
        </defs>

        {/* Ambient Subtle PCB Grid Background */}
        <rect width="1440" height="260" fill="url(#footer-pcb-grid)" />

        {/* ====================================================================
            PLAIN CIRCUIT PATH DEFINITIONS FOR FOOTER
            ==================================================================== */}

        {/* Top Boundary Circuit Bus (Left Side) */}
        <path
          id="fc-top-left"
          d="M 0,22 L 180,22 L 215,57 L 380,57 L 415,22 L 560,22"
        />

        {/* Top Boundary Circuit Bus (Right Side) */}
        <path
          id="fc-top-right"
          d="M 1440,22 L 1260,22 L 1225,57 L 1060,57 L 1025,22 L 880,22"
        />

        {/* Mid-level Horizontal Tracks */}
        <path
          id="fc-mid-left-1"
          d="M 20,110 L 140,110 L 175,145 L 310,145 L 345,180 L 490,180"
        />
        <path
          id="fc-mid-left-2"
          d="M 50,175 L 160,175 L 195,140 L 260,140"
        />

        <path
          id="fc-mid-right-1"
          d="M 1420,110 L 1300,110 L 1265,145 L 1130,145 L 1095,180 L 950,180"
        />
        <path
          id="fc-mid-right-2"
          d="M 1390,175 L 1280,175 L 1245,140 L 1180,140"
        />

        {/* Bottom Framing Line */}
        <path
          id="fc-bottom-center"
          d="M 440,235 L 520,235 L 550,205 L 890,205 L 920,235 L 1000,235"
        />

        {/* ====================================================================
            PLAIN CIRCUIT TRACES (Clean, Crisp, Subtle)
            ==================================================================== */}
        <g
          className="stroke-slate-300/40 dark:stroke-cyan-500/18 transition-colors duration-500"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <use href="#fc-top-left" />
          <use href="#fc-top-right" />
          <use href="#fc-mid-left-1" />
          <use href="#fc-mid-left-2" />
          <use href="#fc-mid-right-1" />
          <use href="#fc-mid-right-2" />
          <use href="#fc-bottom-center" />
        </g>

        {/* Micro IC Outline Footprints for Footer */}
        <g
          className="stroke-slate-300/35 dark:stroke-cyan-500/15 transition-colors duration-500"
          strokeWidth="1"
          fill="none"
        >
          {/* Left IC Package */}
          <rect x="70" y="80" width="24" height="24" rx="2" />
          <circle cx="76" cy="86" r="1.3" className="fill-slate-300/40 dark:fill-cyan-500/20" />
          <line x1="64" y1="87" x2="70" y2="87" />
          <line x1="64" y1="94" x2="70" y2="94" />
          <line x1="94" y1="87" x2="100" y2="87" />
          <line x1="94" y1="94" x2="100" y2="94" />

          {/* Right IC Package */}
          <rect x="1346" y="80" width="24" height="24" rx="2" />
          <circle cx="1352" cy="86" r="1.3" className="fill-slate-300/40 dark:fill-cyan-500/20" />
          <line x1="1340" y1="87" x2="1346" y2="87" />
          <line x1="1340" y1="94" x2="1346" y2="94" />
          <line x1="1370" y1="87" x2="1376" y2="87" />
          <line x1="1370" y1="94" x2="1376" y2="94" />
        </g>

        {/* Alignment Crosshairs */}
        <g className="stroke-slate-400/30 dark:stroke-cyan-400/20" strokeWidth="1" fill="none">
          <path d="M 35,25 L 48,25" />
          <path d="M 35,25 L 35,38" />
          <path d="M 1405,25 L 1392,25" />
          <path d="M 1405,25 L 1405,38" />
        </g>

        {/* ====================================================================
            TERMINAL SOLDER VIAS
            ==================================================================== */}
        <g>
          {[
            { cx: 560, cy: 22 },
            { cx: 880, cy: 22 },
            { cx: 490, cy: 180 },
            { cx: 260, cy: 140 },
            { cx: 950, cy: 180 },
            { cx: 1180, cy: 140 },
            { cx: 440, cy: 235 },
            { cx: 1000, cy: 235 },
          ].map((via, i) => (
            <g key={i}>
              <circle
                cx={via.cx}
                cy={via.cy}
                r="3"
                className="fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-cyan-500/40 transition-colors duration-500"
                strokeWidth="1.2"
              />
              <circle
                cx={via.cx}
                cy={via.cy}
                r="1.3"
                className="fill-slate-400/60 dark:fill-cyan-400/70 transition-colors duration-500"
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
