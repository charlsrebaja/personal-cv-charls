"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import {
  FolderGit2,
  ExternalLink,
  Layers,
  Info,
  Maximize2,
} from "lucide-react";
import { GithubIcon, GoogleSkillIcon } from "@/components/icons/BrandIcons";
import ProjectModal from "@/components/ProjectModal";
import ScrollReveal from "@/components/ScrollReveal";

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
    <section id="projects" className="py-24 relative bg-slate-100/50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" delay={0}>
          <div className="flex flex-col items-center text-center mb-16">
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

        {/* Projects Grid: Exactly 4 projects in a single horizontal row on desktop, 2 cols on tablet, 1 col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              variant="fade-up"
              delay={100 + index * 120}
              duration={650}
              className="h-full"
            >
              <div
                className={`rounded-2xl xl:rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/90 ${project.accentColor.border} transition-all duration-300 group overflow-hidden flex flex-col justify-between shadow-lg shadow-slate-200/50 dark:shadow-black/30 hover:-translate-y-1 h-full`}
              >
              <div>
                {/* Project Image & Overlay */}
                <div
                  className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-950 cursor-pointer group/img"
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  aria-label={`View full overview for ${project.title}`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.subtitle}`}
                    fill
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-90" />

                  {/* Top Badges Row */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    {/* Project Index & Category Badge */}
                    <div className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/70 text-[10px] xl:text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-md max-w-[80%]">
                      <span className="font-bold shrink-0">0{index + 1}</span>
                      <span className="text-slate-500 shrink-0">|</span>
                      <span className="truncate">{project.category}</span>
                    </div>

                    <div className="w-6 h-6 rounded-full bg-slate-950/80 border border-slate-700/70 text-cyan-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 space-y-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg xl:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors tracking-tight line-clamp-1 mb-2 cursor-pointer"
                    >
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 min-h-[3.6rem] xl:min-h-[3.9rem]">
                      {project.description}
                    </p>
                  </div>

                  {/* Verified Technology Badges */}
                  <div className="pt-1">
                    <div className="text-[10px] xl:text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-medium">
                      <Layers className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 shrink-0" />
                      <span>Verified Stack:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 min-h-[52px] items-start content-start">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] xl:text-[11px] font-mono transition-all ${
                            tech === project.primaryFramework
                              ? "bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30 font-semibold"
                              : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                          }`}
                        >
                          <GoogleSkillIcon
                            name={tech}
                            className="w-3 h-3 object-contain shrink-0"
                            size={32}
                          />
                          <span className="truncate max-w-[90px]">{tech}</span>
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer / Action Links */}
              <div className="p-4 sm:p-5 pt-3 border-t border-slate-200 dark:border-slate-800/80 mt-auto">
                <div className="flex items-center gap-2">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`view-project-${project.id}`}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      id={`view-project-${project.id}`}
                      onClick={() => handleLiveDemoClick(project)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>Live Demo</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="View full project details"
                    aria-label={`View full project details for ${project.title}`}
                  >
                    <Info className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span className="hidden sm:inline">Details</span>
                  </button>

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white transition-colors shrink-0"
                      aria-label={`${project.title} source code on GitHub`}
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300 shrink-0" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
          ))}
        </div>
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
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors"
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
