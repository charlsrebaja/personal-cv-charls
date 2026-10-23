"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Code2 } from "lucide-react";

export function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function Html5Icon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#E34F26"
        d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
      />
    </svg>
  );
}

export function Css3Icon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#1572B6"
        d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
      />
    </svg>
  );
}

export function PrismaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={`${className} text-slate-800 dark:text-white`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z"
      />
    </svg>
  );
}

export function CppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#00599C"
        d="M22.394 6.012L13.11.65a2.217 2.217 0 0 0-2.22 0L1.606 6.012A2.22 2.22 0 0 0 1.05 7.935v10.725c0 .798.426 1.536 1.106 1.923l9.284 5.362a2.217 2.217 0 0 0 2.22 0l9.284-5.362a2.22 2.22 0 0 0 1.106-1.923V7.935a2.22 2.22 0 0 0-.556-1.923zM15.42 16.516a5.556 5.556 0 0 1-3.42 1.196c-3.076 0-5.57-2.495-5.57-5.572s2.494-5.57 5.57-5.57c1.282 0 2.46.435 3.42 1.164l-1.396 2.052a3.11 3.11 0 0 0-2.024-.766c-1.722 0-3.12 1.398-3.12 3.12 0 1.723 1.398 3.12 3.12 3.12.78 0 1.492-.284 2.024-.764l1.396 2.02zm3.32-3.48h1.164v-1.636h1.636v-1.164h-1.636V8.6h-1.164v1.636h-1.636v1.164h1.636v1.636zm-4.364 0h1.164v-1.636h1.636v-1.164h-1.636V8.6h-1.164v1.636h-1.636v1.164h1.636v1.636z"
      />
    </svg>
  );
}

/**
 * Known domain mapping for tech stack and skills to fetch official favicons through Google.
 */
export const SKILL_DOMAIN_MAP: Record<string, string> = {
  "Next.js": "nextjs.org",
  "React": "react.dev",
  "Vue.js": "vuejs.org",
  "Vue": "vuejs.org",
  "TypeScript": "typescriptlang.org",
  "JavaScript": "js.org",
  "Tailwind CSS": "tailwindcss.com",
  "Bootstrap": "getbootstrap.com",
  "Flutter": "flutter.dev",
  "Node.js": "nodejs.org",
  "Express.js": "expressjs.com",
  "Python": "python.org",
  "Django": "djangoproject.com",
  "Java": "java.com",
  "C++": "isocpp.org",
  "Cpp": "isocpp.org",
  "PHP": "php.net",
  "Laravel": "laravel.com",
  "MySQL": "mysql.com",
  "PostgreSQL": "postgresql.org",
  "NeonDB": "neon.tech",
  "Neon": "neon.tech",
  "Supabase": "supabase.com",
  "Git": "git-scm.com",
  "GitHub": "github.com",
  "VS Code": "code.visualstudio.com",
  "XAMPP": "apachefriends.org",
  "Xampp": "apachefriends.org",
  "Vercel": "vercel.com",
  "Prisma ORM": "prisma.io",
  "Prisma": "prisma.io",
  "Leaflet.js": "leafletjs.com",
  "Leaflet": "leafletjs.com",
  "Cloudinary": "cloudinary.com",
  "JSON Web Tokens (JWT)": "jwt.io",
  "JWT": "jwt.io",
};

/**
 * Generate Google Favicon API URL
 * @param domain Target website domain
 * @param size Requested pixel size (typically 64 or 128 for high-DPI displays)
 */
export function getGoogleFaviconUrl(domain: string, size: number = 64): string {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=${size}`;
}

export interface GoogleSkillIconProps {
  name: string;
  domain?: string;
  className?: string;
  size?: number;
}

/**
 * GoogleSkillIcon renders the verified technology icon.
 * Uses official vector SVGs for HTML5, CSS3, C++, and Prisma ORM, and Google's Favicon Service for other stacks.
 * Includes graceful fallback if an image fails to load.
 */
export function GoogleSkillIcon({
  name,
  domain,
  className = "w-4 h-4",
  size = 64,
}: GoogleSkillIconProps) {
  const [hasError, setHasError] = useState(false);

  // Exact official brand SVGs for standards & tools with non-standard favicons
  if (name === "HTML") {
    return <Html5Icon className={`${className} transition-transform duration-200 group-hover:scale-110 flex-shrink-0`} />;
  }
  if (name === "CSS") {
    return <Css3Icon className={`${className} transition-transform duration-200 group-hover:scale-110 flex-shrink-0`} />;
  }
  if (name === "C++" || name === "Cpp") {
    return <CppIcon className={`${className} transition-transform duration-200 group-hover:scale-110 flex-shrink-0`} />;
  }
  if (name === "Prisma ORM" || name === "Prisma") {
    return <PrismaIcon className={`${className} transition-transform duration-200 group-hover:scale-110 flex-shrink-0`} />;
  }

  const resolvedDomain = domain || SKILL_DOMAIN_MAP[name] || "google.com";
  const iconUrl = getGoogleFaviconUrl(resolvedDomain, size);

  if (hasError) {
    return <Code2 className={`${className} text-cyan-400`} aria-hidden="true" />;
  }

  return (
    <Image
      src={iconUrl}
      alt={`${name} icon`}
      width={size}
      height={size}
      unoptimized
      onError={() => setHasError(true)}
      className={`${className} object-contain transition-transform duration-200 group-hover:scale-110 flex-shrink-0`}
    />
  );
}
