"use client";

import { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { FolderGit2, Info } from "lucide-react";
import dynamic from "next/dynamic";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCarousel3D from "@/components/ProjectCarousel3D";
import ProjectsCircuit from "@/components/ProjectsCircuit";

const ProjectModal = dynamic(() => import("@/components/ProjectModal"), {
  ssr: false,
});

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [demoNoticeProject, setDemoNoticeProject] = useState<string | null>(null);

  const handleLiveDemoClick = (project: Project) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    } else {
      setDemoNoticeProject(project.title);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 relative bg-slate-100/50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Plain Circuit Lines */}
      <ProjectsCircuit />

      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={0}>
          <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
              <span>Featured Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">Projects</span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
              Practical web applications engineered with Next.js, emphasizing GIS mapping, community services, organizational impact, and regional tourism.
            </p>
          </div>
        </ScrollReveal>

        {/* 3D Perspective Card Carousel */}
        <ScrollReveal variant="fade-up" delay={120} duration={650}>
          <ProjectCarousel3D
            projects={PORTFOLIO_DATA.projects}
            onSelectProject={setSelectedProject}
            onLiveDemoClick={handleLiveDemoClick}
          />
        </ScrollReveal>
      </div>

      {/* Detailed Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Demo Notice Modal when Live URL is unconfigured */}
      {demoNoticeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl shadow-slate-900/10 dark:shadow-cyan-500/10">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3">
              <Info className="w-5 h-5" />
            </div>

            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              {demoNoticeProject} Live Deployment
            </h4>

            <p className="mt-2 text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
              This project is currently hosted on local/internal environments or undergoing institutional domain registration. The live URL can be easily configured in <code className="text-cyan-700 dark:text-cyan-300 bg-slate-100 dark:bg-slate-950 px-1 py-0.5 rounded font-mono">src/data/portfolioData.ts</code> once deployed.
            </p>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setDemoNoticeProject(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
