"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ScrollReveal from "@/components/ScrollReveal";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Building,
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-50/50 dark:bg-[#080d1a] border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-300 text-xs font-mono uppercase tracking-widest mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400">Education</span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
              Formal foundations in Information Technology, systems architecture, and software development.
            </p>
          </div>
        </ScrollReveal>

        {/* Education Timeline Card */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <ScrollReveal
              key={idx}
              variant="fade-up"
              delay={120}
              duration={700}
            >
              <div
                className="p-6 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/20 space-y-6 relative overflow-hidden transition-colors duration-300"
              >
                {/* Degree Title & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-slate-800/80">
                  <div>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 mb-2 inline-block">
                      {edu.status}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                {/* Institution & Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-1">
                      <Building className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                      <span>Institution</span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-1">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                      <span>Year Level</span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                      {edu.yearLevel}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-1">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                      <span>Academic Year</span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200">
                      {edu.academicYear}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {edu.description}
                </p>

                {/* Coursework Badges */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                    <span>Key Coursework & Competencies:</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium"
                      >
                        {course}
                      </span>
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
