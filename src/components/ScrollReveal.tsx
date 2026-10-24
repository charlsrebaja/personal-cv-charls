"use client";

import React, { useEffect, useRef, useState } from "react";

export type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "zoom-in";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: AnimationVariant;
  delay?: number; // Milliseconds
  duration?: number; // Milliseconds
  distance?: number; // Pixels
  threshold?: number; // 0 to 1
  rootMargin?: string;
  once?: boolean;
  className?: string;
}

export default function ScrollReveal({
  children,
  as: Component = "div",
  variant = "fade-up",
  delay = 0,
  duration = 650,
  distance = 28,
  threshold = 0.08,
  rootMargin = "0px 0px -40px 0px",
  once = true,
  className = "",
  style,
  ...rest
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Respect user's reduced motion preference or missing IntersectionObserver
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window))
    ) {
      const rafId = requestAnimationFrame(() => setIsRevealed(true));
      return () => cancelAnimationFrame(rafId);
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  // Compute CSS styles based on variant and state
  const getInitialTransform = (): string => {
    switch (variant) {
      case "fade-up":
        return `translate3d(0, ${distance}px, 0)`;
      case "fade-down":
        return `translate3d(0, -${distance}px, 0)`;
      case "fade-left":
        return `translate3d(${distance}px, 0, 0)`;
      case "fade-right":
        return `translate3d(-${distance}px, 0, 0)`;
      case "zoom-in":
        return `scale(0.95) translate3d(0, ${Math.round(distance / 2)}px, 0)`;
      case "fade-in":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  const dynamicStyle: React.CSSProperties = {
    ...style,
    opacity: isRevealed ? 1 : 0,
    transform: isRevealed ? "translate3d(0, 0, 0) scale(1)" : getInitialTransform(),
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: isRevealed ? "auto" : "opacity, transform",
  };

  return (
    <Component
      ref={elementRef}
      style={dynamicStyle}
      className={`scroll-reveal ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
