"use client";

import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  User,
  Layout,
  Server,
  Palette,
  Sparkles,
  Users,
  FileText,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {

  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case "layout":
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case "server":
        return <Server className="w-5 h-5 text-blue-400" />;
      case "palette":
        return <Palette className="w-5 h-5 text-indigo-400" />;
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case "users":
        return <Users className="w-5 h-5 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative bg-slate-100/60 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
              <User className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
              <span>Profile & Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Me</span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
              An IT student passionate about creating clean, efficient, and purposeful web experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal variant="fade-up" delay={100} duration={700}>
              <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-sm relative overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-black/20 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                  <span>Introduction & Philosophy</span>
                </h3>

                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                  {PORTFOLIO_DATA.personal.aboutBio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Verified Facts / Constraints Check */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono block">Current Role</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white mt-1 block">
                      IT Student & Full Stack Developer
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono block">Primary Stack</span>
                    <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-300 mt-1 block">
                      Next.js (App Router)
                    </span>
                  </div>
                </div>

                {/* Download CV Button */}
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="/Charls_Rebaja_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Charls_Rebaja_CV.pdf"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    id="download-cv-btn"
                  >
                    <FileText className="w-4 h-4 text-white" />
                    <span>Download CV (PDF)</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors"
                  >
                    <span>Explore GitHub Codebases</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Key Areas of Interest */}
          <div className="lg:col-span-6 space-y-4">
            <ScrollReveal variant="fade-up" delay={150}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white px-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                <span>Core Areas of Focus & Interest</span>
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.interests.map((interest, index) => (
                <ScrollReveal
                  key={interest.title}
                  variant="fade-up"
                  delay={200 + index * 80}
                  duration={600}
                >
                  <div className="h-full p-5 rounded-2xl bg-white/70 hover:bg-white dark:bg-slate-900/50 dark:hover:bg-slate-900/80 border border-slate-200/80 hover:border-slate-300 dark:border-slate-800/80 dark:hover:border-slate-700 transition-all duration-200 group flex flex-col justify-between shadow-sm hover:shadow-md">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        {getInterestIcon(interest.icon)}
                      </div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {interest.title}
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* GitHub Contributions Activity Banner */}
            <ScrollReveal variant="fade-up" delay={450} duration={700}>
              <div className="p-4 sm:p-5 rounded-2xl bg-white/70 hover:bg-white dark:bg-slate-900/50 dark:hover:bg-slate-900/80 border border-slate-200/80 hover:border-slate-300 dark:border-slate-800/80 dark:hover:border-slate-700 transition-all duration-200 shadow-sm group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">
                      GitHub Contributions Activity
                    </span>
                  </div>
                  <a
                    href={PORTFOLIO_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 group/gh"
                  >
                    <span>@charlsrebaja</span>
                    <ExternalLink className="w-3 h-3 group-hover/gh:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                <div className="w-full overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60 p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/projects/github.png"
                    alt="GitHub activity and contribution overview of Charls Rebaja"
                    width={821}
                    height={108}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 821px"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
