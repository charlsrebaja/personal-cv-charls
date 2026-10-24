"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GoogleSkillIcon } from "@/components/icons/BrandIcons";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Wrench,
  Code2,
  Server,
  Database,
  Terminal,
} from "lucide-react";
import SkillsCircuit from "@/components/SkillsCircuit";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Server className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 3:
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-50/50 dark:bg-[#080d1a] border-t border-slate-200 dark:border-slate-900 transition-colors duration-300 overflow-hidden">
      {/* Background Plain Circuit Lines */}
      <SkillsCircuit />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-300 text-xs font-mono uppercase tracking-widest mb-3">
              <Wrench className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">Tooling</span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
              A verified inventory of technologies, frameworks, and developer tools organized by domain.
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.skillCategories.map((category, idx) => (
            <ScrollReveal
              key={category.title}
              variant="fade-up"
              delay={120 + idx * 100}
              duration={650}
              className="h-full"
            >
              <div
                className="h-full p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300 group shadow-lg shadow-slate-200/50 dark:shadow-black/20 flex flex-col justify-between"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/70 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {getCategoryIcon(idx)}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Badges / Cards */}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/skill inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm transition-all duration-200 ${
                          skill.isPrimary
                            ? "bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 dark:border-cyan-500/35 text-cyan-900 dark:text-cyan-200 font-semibold shadow-sm shadow-cyan-500/5 dark:shadow-cyan-500/10 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/25 hover:border-cyan-500/50"
                            : "bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex-shrink-0 flex items-center justify-center">
                          <GoogleSkillIcon
                            name={skill.name}
                            domain={skill.iconDomain}
                            className="w-4 h-4 sm:w-4.5 sm:h-4.5"
                            size={64}
                          />
                        </div>
                        <span className="font-medium group-hover/skill:text-slate-900 dark:group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 opacity-80">
                          • {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
