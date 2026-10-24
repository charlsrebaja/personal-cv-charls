"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Project } from "@/data/portfolioData";
import {
  ExternalLink,
  Layers,
  Info,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { GithubIcon, GoogleSkillIcon } from "@/components/icons/BrandIcons";

interface ProjectCarousel3DProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onLiveDemoClick: (project: Project) => void;
}

export default function ProjectCarousel3D({
  projects,
  onSelectProject,
  onLiveDemoClick,
}: ProjectCarousel3DProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  const shouldReduceMotion = useReducedMotion();

  // Track window resize for responsive 3D perspective translations
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  // Autoplay functionality with hover pause
  useEffect(() => {
    if (!isAutoplay || isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoplay, isHovered, handleNext]);

  // Global keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Mobile Swipe / Touch Drag handling
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }
  ) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -300) {
      handleNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 300) {
      handlePrev();
    }
  };

  // Color schemes and dynamic ambient illumination for each project
  const getProjectAccent = (projectId: string) => {
    switch (projectId) {
      case "bluewaste":
        return {
          glow: "from-cyan-500/30 via-blue-500/15 to-transparent",
          border: "border-cyan-500/60 dark:border-cyan-400/60",
          shadow: "shadow-cyan-500/20 dark:shadow-cyan-500/25",
          badge: "text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border-cyan-500/30",
          btnGradient: "from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/25",
        };
      case "sk-mankilam":
        return {
          glow: "from-blue-500/30 via-indigo-500/15 to-transparent",
          border: "border-blue-500/60 dark:border-blue-400/60",
          shadow: "shadow-blue-500/20 dark:shadow-blue-500/25",
          badge: "text-blue-700 dark:text-blue-300 bg-blue-500/10 border-blue-500/30",
          btnGradient: "from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 shadow-blue-500/25",
        };
      case "projektmariphil":
        return {
          glow: "from-emerald-500/30 via-teal-500/15 to-transparent",
          border: "border-emerald-500/60 dark:border-emerald-400/60",
          shadow: "shadow-emerald-500/20 dark:shadow-emerald-500/25",
          badge: "text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/30",
          btnGradient: "from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-emerald-500/25",
        };
      case "ces-travel":
        return {
          glow: "from-amber-500/30 via-orange-500/15 to-transparent",
          border: "border-amber-500/60 dark:border-amber-400/60",
          shadow: "shadow-amber-500/20 dark:shadow-amber-500/25",
          badge: "text-amber-700 dark:text-amber-300 bg-amber-500/10 border-amber-500/30",
          btnGradient: "from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-amber-500/25",
        };
      default:
        return {
          glow: "from-cyan-500/30 via-blue-500/15 to-transparent",
          border: "border-cyan-500/60 dark:border-cyan-400/60",
          shadow: "shadow-cyan-500/20 dark:shadow-cyan-500/25",
          badge: "text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border-cyan-500/30",
          btnGradient: "from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/25",
        };
    }
  };

  const activeProject = projects[activeIndex];
  const activeAccent = getProjectAccent(activeProject.id);

  // Compute 3D perspective transforms for each card in the carousel
  const getCardTransform = (index: number) => {
    let diff = (index - activeIndex) % projects.length;
    if (diff < 0) diff += projects.length;

    // Reduced motion mode fallback: simple flat transition without 3D rotation
    if (shouldReduceMotion) {
      if (diff === 0) {
        return {
          x: 0,
          y: 0,
          scale: 1,
          rotateY: 0,
          z: 0,
          opacity: 1,
          zIndex: 30,
        };
      }
      return {
        x: diff === 1 ? 40 : diff === 3 ? -40 : 0,
        y: 0,
        scale: 0.9,
        rotateY: 0,
        z: 0,
        opacity: 0,
        zIndex: 10,
      };
    }

    if (diff === 0) {
      // Active Front Center Card
      return {
        x: 0,
        y: 0,
        scale: 1,
        rotateY: 0,
        z: 100,
        opacity: 1,
        zIndex: 30,
      };
    } else if (diff === 1) {
      // Right Card
      const xOffset = isMobile ? 130 : isTablet ? 260 : 360;
      const rot = isMobile ? -16 : isTablet ? -22 : -28;
      return {
        x: xOffset,
        y: 0,
        scale: isMobile ? 0.84 : 0.86,
        rotateY: rot,
        z: isMobile ? -40 : -80,
        opacity: isMobile ? 0.6 : 0.88,
        zIndex: 20,
      };
    } else if (diff === 3) {
      // Left Card (diff 3 is equivalent to -1 in modulo 4)
      const xOffset = isMobile ? -130 : isTablet ? -260 : -360;
      const rot = isMobile ? 16 : isTablet ? 22 : 28;
      return {
        x: xOffset,
        y: 0,
        scale: isMobile ? 0.84 : 0.86,
        rotateY: rot,
        z: isMobile ? -40 : -80,
        opacity: isMobile ? 0.6 : 0.88,
        zIndex: 20,
      };
    } else {
      // Back Card (diff 2 is opposite the active card)
      return {
        x: 0,
        y: isMobile ? -8 : -14,
        scale: isMobile ? 0.68 : 0.72,
        rotateY: 0,
        z: isMobile ? -110 : -180,
        opacity: isMobile ? 0.15 : 0.28,
        zIndex: 10,
      };
    }
  };

  return (
    <div
      className="relative w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured Projects 3D Showcase"
    >
      {/* Quick Navigation Tabs: 1-click jump to any project */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10 px-4">
        {projects.map((project, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={project.id}
              id={`project-tab-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`group relative flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "text-cyan-700 dark:text-cyan-300 font-semibold shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 bg-white/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeProjectPill"
                  className="absolute inset-0 rounded-xl bg-cyan-500/15 dark:bg-cyan-500/20 border border-cyan-500/40"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="font-mono text-[11px] font-bold text-cyan-600 dark:text-cyan-400">
                0{idx + 1}
              </span>
              <span className="relative z-10 truncate max-w-[120px] sm:max-w-none">
                {project.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3D Carousel Stage */}
      <div
        className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[580px] sm:min-h-[620px] lg:min-h-[640px] overflow-x-clip py-4 select-none"
        style={{ perspective: 1200 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dynamic Project Ambient Illumination */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] h-[340px] sm:h-[520px] rounded-full bg-gradient-to-tr ${activeAccent.glow} blur-3xl pointer-events-none transition-all duration-700 -z-10`}
        />

        {/* Previous Button */}
        <button
          type="button"
          id="carousel-prev-btn"
          onClick={handlePrev}
          aria-label="Previous project"
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 active:scale-95 transition-all shadow-xl shadow-slate-900/10 dark:shadow-black/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          id="carousel-next-btn"
          onClick={handleNext}
          aria-label="Next project"
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 active:scale-95 transition-all shadow-xl shadow-slate-900/10 dark:shadow-black/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Motion Drag Container for Mobile Touch & Gestures */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
          className="relative w-full h-[540px] sm:h-[570px] lg:h-[590px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ transformStyle: "preserve-3d" }}
        >
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const cardAccent = getProjectAccent(project.id);
            const transform = getCardTransform(index);

            return (
              <motion.div
                key={project.id}
                id={`carousel-card-${index}`}
                className="absolute w-[90vw] max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] h-[530px] sm:h-[560px] lg:h-[580px] rounded-3xl"
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                  zIndex: transform.zIndex,
                }}
                animate={{
                  x: transform.x,
                  y: transform.y,
                  scale: transform.scale,
                  rotateY: transform.rotateY,
                  z: transform.z,
                  opacity: transform.opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                  mass: 0.8,
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
                aria-hidden={!isActive}
              >
                <div
                  className={`w-full h-full rounded-2xl sm:rounded-3xl ${
                    isActive
                      ? "bg-white dark:bg-slate-900 border-2 " + cardAccent.border + " shadow-2xl " + cardAccent.shadow
                      : "bg-white/95 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-black/10"
                  } overflow-hidden flex flex-col justify-between transition-colors duration-300 relative`}
                >
                  {/* Top Image Section */}
                  <div>
                    <div
                      className="relative w-full h-40 sm:h-44 lg:h-48 overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800/80 cursor-pointer group/img"
                      onClick={() => isActive && onSelectProject(project)}
                      role="button"
                      tabIndex={isActive ? 0 : -1}
                      onKeyDown={(e) => {
                        if (isActive && (e.key === "Enter" || e.key === " ")) {
                          e.preventDefault();
                          onSelectProject(project);
                        }
                      }}
                      aria-label={`View full overview for ${project.title}`}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.subtitle}`}
                        fill
                        priority
                        unoptimized
                        className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 90vw, (max-width: 1024px) 420px, 480px"
                      />

                      {/* Header Badges Overlay */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        {/* Index & Category Badge */}
                        <div className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-700/70 text-[10px] sm:text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-md max-w-[70%]">
                          <span className="font-bold shrink-0">0{index + 1}</span>
                          <span className="text-slate-500 shrink-0">|</span>
                          <span className="truncate">{project.category}</span>
                        </div>

                        {/* Status Badge */}
                        <div
                          className={`px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono flex items-center gap-1.5 shadow-md backdrop-blur-md ${
                            project.status === "Production Ready"
                              ? "bg-cyan-950/85 text-cyan-300 border border-cyan-700/70"
                              : "bg-emerald-950/85 text-emerald-300 border border-emerald-700/70"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse shrink-0" />
                          <span className="truncate hidden sm:inline">{project.status}</span>
                          <span className="truncate sm:hidden">{project.status === "Production Ready" ? "Live" : "Done"}</span>
                        </div>
                      </div>

                      {/* Maximize Icon on Hover */}
                      {isActive && (
                        <div className="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/70 text-cyan-300 text-[10px] font-mono flex items-center gap-1 opacity-0 group-hover/img:opacity-100 transition-opacity">
                          <Maximize2 className="w-3 h-3" />
                          <span>Expand</span>
                        </div>
                      )}
                    </div>

                    {/* Card Content Details */}
                    <div className="p-4 sm:p-5 space-y-2.5 sm:space-y-3">
                      <div>
                        <h3
                          onClick={() => isActive && onSelectProject(project)}
                          className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors tracking-tight line-clamp-1 cursor-pointer"
                        >
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] font-medium text-cyan-600 dark:text-cyan-400 line-clamp-1 mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {project.description}
                      </p>

                      {/* Verified Tech Stack */}
                      <div className="pt-0.5">
                        <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5 font-medium">
                          <Layers className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400 shrink-0" />
                          <span>Verified Stack:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 items-start content-start">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono transition-all ${
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
                              <span className="truncate max-w-[85px] sm:max-w-[100px]">{tech}</span>
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

                  {/* Card Action Controls */}
                  <div className="p-4 sm:p-5 pt-3 border-t border-slate-200 dark:border-slate-800/80 mt-auto">
                    <div className="flex items-center gap-2">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          id={`view-project-${project.id}`}
                          onPointerDown={(e) => e.stopPropagation()}
                          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r ${cardAccent.btnGradient} text-white text-xs font-semibold shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]`}
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-white shrink-0" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <button
                          type="button"
                          id={`view-project-${project.id}`}
                          onClick={() => onLiveDemoClick(project)}
                          onPointerDown={(e) => e.stopPropagation()}
                          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r ${cardAccent.btnGradient} text-white text-xs font-semibold shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer`}
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-white shrink-0" />
                          <span>Live Demo</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        onPointerDown={(e) => e.stopPropagation()}
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
                          onPointerDown={(e) => e.stopPropagation()}
                          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white transition-colors shrink-0"
                          aria-label={`${project.title} source code on GitHub`}
                        >
                          <GithubIcon className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300 shrink-0" />
                          <span>Source</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Inactive Card Click-To-Focus Overlay (Clean, no blur, no text overlay) */}
                  {!isActive && (
                    <div
                      onClick={() => setActiveIndex(index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveIndex(index);
                        }
                      }}
                      aria-label={`Switch to project: ${project.title}`}
                      className="absolute inset-0 z-30 cursor-pointer rounded-2xl sm:rounded-3xl hover:bg-cyan-500/5 transition-colors"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Controls Bar: Counter, Pagination, and Autoplay */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto px-4">
        {/* Project Counter & Info */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <span className="font-bold text-slate-900 dark:text-white text-sm">
            0{activeIndex + 1}
          </span>
          <span>/</span>
          <span>0{projects.length}</span>
          <span className="mx-1 text-slate-300 dark:text-slate-700">•</span>
          <span className="text-cyan-600 dark:text-cyan-400 font-medium">
            {activeProject.category}
          </span>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {projects.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={project.id}
                id={`carousel-dot-${idx}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}: ${project.title}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-8 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-sm shadow-cyan-500/50"
                    : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                }`}
              />
            );
          })}
        </div>

        {/* Action Controls & Navigation Hints */}
        <div className="flex items-center gap-3">
          {/* Autoplay Toggle */}
          <button
            type="button"
            id="carousel-autoplay-btn"
            onClick={() => setIsAutoplay((prev) => !prev)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors cursor-pointer ${
              isAutoplay
                ? "bg-cyan-500/15 border-cyan-500/30 text-cyan-700 dark:text-cyan-300"
                : "bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
            title={isAutoplay ? "Pause auto-rotation" : "Enable auto-rotation"}
            aria-label={isAutoplay ? "Pause auto-rotation" : "Enable auto-rotation"}
          >
            {isAutoplay ? (
              <>
                <Pause className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                <span>Auto</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3" />
                <span>Auto</span>
              </>
            )}
          </button>

          {/* Keyboard Hint Pill */}
          <div className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
            <kbd className="px-1 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-[10px]">
              ←
            </kbd>
            <kbd className="px-1 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-[10px]">
              →
            </kbd>
            <span>to navigate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
