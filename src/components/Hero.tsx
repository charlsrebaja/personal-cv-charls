"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  ArrowRight,
  Mail,
  ChevronDown,
} from "lucide-react";
import { GoogleSkillIcon } from "@/components/icons/BrandIcons";
import HeroCircuit from "@/components/HeroCircuit";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  const fullTitle = PORTFOLIO_DATA.personal.title;
  const [displayedTitle, setDisplayedTitle] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedTitle(fullTitle.slice(0, i));
      if (i >= fullTitle.length) {
        clearInterval(interval);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [fullTitle]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 sm:pt-36 pb-16 overflow-hidden"
    >
      {/* Background ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-subtle-pulse" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 dark:opacity-40 pointer-events-none" />

      {/* Futuristic Animated Circuit Lines Background */}
      <HeroCircuit />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Status Badge */}
            <ScrollReveal variant="fade-down" delay={100} duration={600}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-medium shadow-md shadow-slate-200/40 dark:shadow-cyan-500/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>{PORTFOLIO_DATA.personal.availability}</span>
              </div>
            </ScrollReveal>

            {/* Name & Animated Title */}
            <ScrollReveal variant="fade-up" delay={200} duration={700}>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight">
                  <span className="block text-slate-900 dark:text-slate-100">{PORTFOLIO_DATA.personal.name}</span>
                  <span className="sr-only">{fullTitle}</span>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 animate-gradient-flow text-2xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold tracking-tight"
                  >
                    <span>{displayedTitle || "\u00A0"}</span>
                    <span
                      className="inline-block w-[3px] sm:w-[4px] h-[0.85em] ml-1.5 bg-gradient-to-b from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full animate-cursor-blink shadow-sm shadow-cyan-500/50"
                    />
                  </span>
                </h1>
              </div>
            </ScrollReveal>

            {/* Tagline */}
            <ScrollReveal variant="fade-up" delay={300} duration={700}>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl max-w-2xl leading-relaxed font-normal">
                {PORTFOLIO_DATA.personal.heroTagline}
              </p>
            </ScrollReveal>

            {/* Call To Action Buttons */}
            <ScrollReveal variant="fade-up" delay={400} duration={700}>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => scrollTo("projects")}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-base shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  id="hero-view-projects-btn"
                >
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-900/80 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-medium text-base shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                  id="hero-contact-btn"
                >
                  <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Contact Me</span>
                </button>
              </div>
            </ScrollReveal>

            {/* Quick Tech Highlights with Brand Logos/Favicons */}
            <ScrollReveal variant="fade-up" delay={500} duration={700}>
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <span className="text-slate-500 dark:text-slate-400 font-medium mr-1 text-xs">Core Stack:</span>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5">
                  {[
                    { name: "Next.js", domain: "nextjs.org" },
                    { name: "TypeScript", domain: "typescriptlang.org" },
                    { name: "React", domain: "react.dev" },
                    { name: "Tailwind CSS", domain: "tailwindcss.com" },
                    { name: "Node.js", domain: "nodejs.org" },
                    { name: "PostgreSQL", domain: "postgresql.org" },
                    { name: "NeonDB", domain: "neon.tech" },
                    { name: "Supabase", domain: "supabase.com" },
                    { name: "Prisma ORM", domain: "prisma.io" },
                    { name: "Cloudinary", domain: "cloudinary.com" },
                  ].map((tech, index) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 font-mono text-[11px] shadow-xs hover:border-cyan-500/60 hover:shadow-md hover:shadow-cyan-500/15 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group select-none"
                    >
                      <span
                        className="shrink-0 flex items-center justify-center animate-periodic-favicon-bounce group-hover-favicon-bounce transition-transform duration-200"
                        style={{ animationDelay: `${index * 120}ms` }}
                      >
                        <GoogleSkillIcon
                          name={tech.name}
                          domain={tech.domain}
                          className="w-3.5 h-3.5 object-contain shrink-0"
                          size={32}
                        />
                      </span>
                      <span className="group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors duration-200 font-medium">
                        {tech.name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Featured Circular Hero Profile Portrait & Badges */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <ScrollReveal variant="zoom-in" delay={300} duration={850}>
              <div className="relative w-[290px] h-[290px] sm:w-[370px] sm:h-[370px] md:w-[420px] md:h-[420px] lg:w-[450px] lg:h-[450px] xl:w-[490px] xl:h-[490px] flex items-center justify-center">
                {/* Outer decorative glowing aura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-indigo-600/30 blur-3xl rounded-full scale-110 pointer-events-none animate-subtle-pulse" />

                {/* Decorative concentric cyber / orbital rings */}
                <div className="absolute -inset-6 sm:-inset-8 rounded-full border border-cyan-500/20 dark:border-cyan-500/30 pointer-events-none" />
                <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-blue-500/25 dark:border-blue-500/35 border-dashed animate-[spin_80s_linear_infinite] pointer-events-none" />

                {/* Orbital Solder Nodes & Crosshair Accents */}
                <div className="absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-sm shadow-cyan-400" />
                </div>
                <div className="absolute -bottom-7 sm:-bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-sm shadow-blue-400" />
                </div>
                <div className="absolute top-1/2 -left-7 sm:-left-9 -translate-y-1/2 flex items-center pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                </div>
                <div className="absolute top-1/2 -right-7 sm:-right-9 -translate-y-1/2 flex items-center pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400" />
                </div>

                {/* Main Circular Portrait Card */}
                <div className="relative w-full h-full p-2 sm:p-2.5 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 dark:from-cyan-400/90 dark:via-blue-500/70 dark:to-indigo-500/80 shadow-2xl shadow-cyan-500/30 transition-all duration-500 group hover:shadow-cyan-500/40 hover:scale-[1.01]">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 sm:border-4 border-white dark:border-slate-900">
                    {/* Charls's Profile Image */}
                    <Image
                      src={PORTFOLIO_DATA.personal.avatar}
                      alt={`${PORTFOLIO_DATA.personal.name} - ${PORTFOLIO_DATA.personal.title}`}
                      fill
                      priority
                      sizes="(max-width: 640px) 290px, (max-width: 768px) 370px, (max-width: 1024px) 450px, 490px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Soft bottom vignette overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator below */}
        <ScrollReveal variant="fade-up" delay={650} duration={600}>
          <div className="pt-12 pb-2 flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={() => scrollTo("about")}
              className="group flex flex-col items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors focus:outline-none cursor-pointer"
              aria-label="Scroll to About Me section"
            >
              <span className="text-xs font-mono tracking-widest uppercase">Explore Portfolio</span>
              <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 group-hover:border-cyan-500 dark:group-hover:border-cyan-400/80 flex items-start justify-center p-1.5 transition-colors">
                <div className="w-1.5 h-2.5 rounded-full bg-cyan-600 dark:bg-cyan-400 animate-bounce" />
              </div>
              <ChevronDown className="w-4 h-4 animate-pulse -mt-1" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
