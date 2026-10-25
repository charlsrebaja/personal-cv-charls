"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";
import { GithubIcon, GoogleSkillIcon } from "@/components/icons/BrandIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-900/10 dark:shadow-cyan-500/10 p-6 sm:p-8 my-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-10"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>

          <h3
            id="modal-project-title"
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            {project.title}
          </h3>

          <p className="text-cyan-600 dark:text-cyan-400 font-medium text-sm sm:text-base">
            {project.subtitle}
          </p>
        </div>

        {/* Project Preview Image */}
        <div className="relative mt-6 w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
          <Image
            src={project.image}
            alt={`${project.title} Interface Preview`}
            fill
            className="object-cover object-top"
            unoptimized
          />
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Primary Framework: {project.primaryFramework}</span>
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="mt-6 space-y-3">
          <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
            <span>Project Overview & Scope</span>
          </h4>
          <div className="space-y-2.5 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {project.detailedDescription.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Key Implemented Features */}
        <div className="mt-6">
          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
            <span>Confirmed Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shrink-0 mt-1.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Direction & Theme */}
        <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
          <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 block uppercase tracking-wider mb-1">
            Visual & Aesthetic Direction
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.visualDirection}
          </p>
        </div>

        {/* Verified Technologies */}
        <div className="mt-6">
          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-300 mb-2.5 flex items-center gap-2">
            <Layers className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            <span>Verified Technology Stack</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono ${
                  tech === project.primaryFramework
                    ? "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-500/40 font-bold"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                }`}
              >
                <GoogleSkillIcon
                  name={tech}
                  className="w-3.5 h-3.5 object-contain shrink-0"
                  size={32}
                />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>Status: </span>
            <span className="text-slate-900 dark:text-white font-semibold">{project.status}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700 dark:text-white text-xs font-semibold transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>View Source</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors shadow-md shadow-cyan-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Site</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                project.liveUrl
                  ? "bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  : "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20"
              }`}
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
