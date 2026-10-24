import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://charlsrebaja.dev"),
  title: "Charls Rebaja-Full Stack Developer",
  description:
    "Curriculum Vitae and portfolio of Charls L. Rebaja, Full Stack Developer specializing in Next.js, React, TypeScript, and modern web applications.",
  keywords: [
    "Charls L. Rebaja",
    "Charls Rebaja",
    "Full Stack Developer",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js Portfolio",
    "React",
    "Vue.js",
    "TypeScript",
    "Python",
    "Django",
    "Java",
    "C++",
    "PostgreSQL",
    "NeonDB",
    "Supabase",
    "Prisma ORM",
    "Cloudinary",
    "BlueWaste",
    "Panabo City",
    "Davao Web Developer",
  ],
  authors: [{ name: "Charls L. Rebaja", url: "https://github.com/charlsrebaja" }],
  creator: "Charls L. Rebaja",
  alternates: {
    canonical: "https://charlsrebaja.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://charlsrebaja.dev",
    title: "Charls L. Rebaja | Full Stack Developer",
    description:
      "Explore the personal portfolio and featured projects of Charls L. Rebaja, featuring BlueWaste, SK Brgy Mankilam, ProjektMariphil Inc., and CES Travel & Tours.",
    siteName: "Charls L. Rebaja Portfolio",
    images: [
      {
        url: "/projects/profilepic.jpg",
        width: 1200,
        height: 630,
        alt: "Charls L. Rebaja - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charls L. Rebaja | Full Stack Developer",
    description:
      "Explore the personal portfolio and featured projects of Charls L. Rebaja, specializing in Next.js, React, and TypeScript.",
    images: ["/projects/profilepic.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://charlsrebaja.dev/#person",
      name: "Charls L. Rebaja",
      alternateName: "Charls Rebaja",
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer specializing in Next.js, React, TypeScript, and modern web applications.",
      url: "https://charlsrebaja.dev",
      image: "https://charlsrebaja.dev/projects/profilepic.jpg",
      sameAs: [
        "https://github.com/charlsrebaja",
        "https://www.facebook.com/charls.rebaja",
        "https://www.linkedin.com/in/charls-rebaja/",
      ],
      knowsAbout: [
        "Next.js",
        "React",
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Python",
        "Django",
        "Java",
        "C++",
        "PostgreSQL",
        "NeonDB",
        "Supabase",
        "Prisma ORM",
        "Cloudinary",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://charlsrebaja.dev/#website",
      url: "https://charlsrebaja.dev",
      name: "Charls L. Rebaja | Portfolio",
      description:
        "Curriculum Vitae and portfolio of Charls L. Rebaja, Full Stack Developer.",
      publisher: { "@id": "https://charlsrebaja.dev/#person" },
    },
  ],
};

import { ThemeProvider } from "@/context/ThemeContext";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        {/* Anti-FOUC inline script to apply theme before render */}
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('charls_theme_preference');var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var theme=saved||(prefersDark?'dark':'light');if(theme==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light';}}catch(e){}})();`,
          }}
        />
        {/* JSON-LD Structured Data for Enhanced Search Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-700 dark:selection:text-cyan-300 transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-cyan-500 focus:text-slate-950 focus:rounded-xl focus:font-bold focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
