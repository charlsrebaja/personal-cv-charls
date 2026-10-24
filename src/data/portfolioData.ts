export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  detailedDescription: string[];
  primaryFramework: string;
  technologies: string[];
  visualDirection: string;
  features: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  status: "Completed" | "In Active Development" | "Production Ready";
  accentColor: {
    badge: string;
    border: string;
    glow: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    isPrimary?: boolean;
    iconDomain?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  yearLevel: string;
  academicYear: string;
  description: string;
  coursework: string[];
  isPlaceholder?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status: string;
  note: string;
  isPlaceholder?: boolean;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Charls L. Rebaja",
    shortName: "Charls",
    initials: "CLR",
    title: "Full Stack Developer",
    avatar: "/projects/profilepic.webp",
    tagline: "Hi, I'm — a passionate Web Developer.",
    heroTagline: "A dedicated Full-Stack Developer turning innovative ideas into functional and impactful web solutions.",
    aboutBio: [
      "I am an Information Technology student with a deep passion for web development and software engineering. I focus on creating intuitive, responsive, and impactful digital solutions that bridge functional backend architectures with elegant user interfaces.",
      "My journey centers on modern web technologies, particularly Next.js, TypeScript, React, and Tailwind CSS. I have built practical applications ranging from municipal GIS waste-monitoring systems and civic community portals to humanitarian foundation platforms and tourism web experiences.",
      "Whether developing community-centric applications or architecting full-stack systems, I emphasize clean code, accessible design, performance, and real-world utility."
    ],
    github: "https://github.com/charlsrebaja",
    facebook: "https://www.facebook.com/charls.rebaja",
    // Clearly marked placeholders for unprovided personal information
    email: "charlsrebaja09@gmail.com",
    emailDisplay: "charlsrebaja09@gmail.com",
    phone: "+63 (XXX) XXX-XXXX [Placeholder]",
    location: "Davao Region, Philippines",
    linkedin: "https://www.linkedin.com/in/charls-rebaja/",
    cvFileName: "/Charls_Rebaja_CV.pdf",
    availability: "Available for Internships & Projects",
  },

  interests: [
    {
      title: "Frontend Development",
      description: "Crafting fluid, responsive, and accessible user interfaces using React, Next.js, and modern styling libraries.",
      icon: "layout",
    },
    {
      title: "Full-Stack Development",
      description: "Architecting end-to-end web applications with robust APIs, database integration, and reliable server-side logic.",
      icon: "server",
    },
    {
      title: "Responsive UI/UX Design",
      description: "Designing user-centered experiences with intuitive workflows, polished typography, and seamless device adaptations.",
      icon: "palette",
    },
    {
      title: "Modern Web Technologies",
      description: "Leveraging the modern Next.js App Router, TypeScript type-safety, and cutting-edge ecosystem tools.",
      icon: "sparkles",
    },
  ],

  skillCategories: [
    {
      title: "Frontend & Mobile",
      description: "Core languages, modern libraries, and cross-platform UI frameworks.",
      skills: [
        { name: "Next.js", level: "Primary Framework", isPrimary: true, iconDomain: "nextjs.org" },
        { name: "React", level: "Core Library", isPrimary: true, iconDomain: "react.dev" },
        { name: "Vue.js", level: "Progressive Framework", iconDomain: "vuejs.org" },
        { name: "Flutter", level: "Cross-Platform Framework", iconDomain: "flutter.dev" },
        { name: "TypeScript", level: "Language", isPrimary: true, iconDomain: "typescriptlang.org" },
        { name: "JavaScript", level: "Language", iconDomain: "js.org" },
        { name: "HTML", level: "Markup", iconDomain: "html.com" },
        { name: "CSS", level: "Styling", iconDomain: "css3.info" },
        { name: "Tailwind CSS", level: "Utility-first Styling", isPrimary: true, iconDomain: "tailwindcss.com" },
        { name: "Bootstrap", level: "Component Styling", iconDomain: "getbootstrap.com" },
      ],
    },
    {
      title: "Backend Development",
      description: "Server-side runtimes, API frameworks, and web architectures.",
      skills: [
        { name: "Node.js", level: "Runtime Environment", iconDomain: "nodejs.org" },
        { name: "Express.js", level: "API Framework", iconDomain: "expressjs.com" },
        { name: "Python", level: "Server-side Language", iconDomain: "python.org" },
        { name: "Django", level: "Python Web Framework", iconDomain: "djangoproject.com" },
        { name: "Java", level: "Object-Oriented Language", iconDomain: "java.com" },
        { name: "C++", level: "Systems Programming", iconDomain: "isocpp.org" },
        { name: "Laravel", level: "PHP Web Framework", iconDomain: "laravel.com" },
        { name: "PHP", level: "Server-side Language", iconDomain: "php.net" },
      ],
    },
    {
      title: "Database & Cloud BaaS",
      description: "Relational databases, serverless Postgres, BaaS, and type-safe ORMs.",
      skills: [
        { name: "PostgreSQL", level: "Advanced Relational Database", isPrimary: true, iconDomain: "postgresql.org" },
        { name: "NeonDB", level: "Serverless Postgres", iconDomain: "neon.tech" },
        { name: "Supabase", level: "BaaS & Postgres DB", isPrimary: true, iconDomain: "supabase.com" },
        { name: "MySQL", level: "Relational Database", iconDomain: "mysql.com" },
        { name: "Prisma ORM", level: "Type-safe ORM", iconDomain: "prisma.io" },
      ],
    },
    {
      title: "Tools & Platforms",
      description: "Version control, IDE, local server stacks, and modern cloud deployment workflows.",
      skills: [
        { name: "Git", level: "Version Control", iconDomain: "git-scm.com" },
        { name: "GitHub", level: "Code Collaboration & CI", iconDomain: "github.com" },
        { name: "VS Code", level: "Primary IDE", iconDomain: "code.visualstudio.com" },
        { name: "Cloudinary", level: "Cloud Media CDN & Storage", iconDomain: "cloudinary.com" },
        { name: "XAMPP", level: "Local Server Stack", iconDomain: "apachefriends.org" },
        { name: "Vercel", level: "Cloud Deployment Platform", isPrimary: true, iconDomain: "vercel.com" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "bluewaste",
      title: "BlueWaste",
      subtitle: "GIS-Enabled Marine Waste Reporting & Coastal Cleanup Scheduling",
      category: "Municipal Environmental System",
      description:
        "A GIS-enabled marine waste reporting, mapping, and coastal cleanup scheduling system for Panabo City. The platform enables citizens to submit waste reports with photos and geolocation, while authorized LGU personnel can validate reports, monitor waste hotspots, prioritize cleanup activities, and coordinate cleanup schedules.",
      detailedDescription: [
        "BlueWaste addresses coastal degradation in Panabo City by establishing a direct digital bridge between civic reporting and municipal response.",
        "Citizens can capture photos and attach pinpoint geolocation to document coastal debris. Authorized local government personnel review incoming reports through a verified triage workflow.",
        "The system incorporates interactive GIS mapping to visualize waste density heatmaps and coordinate targeted cleanup mobilizations."
      ],
      primaryFramework: "Next.js",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "Leaflet.js",
        "Cloudinary",
        "JSON Web Tokens (JWT)",
      ],
      visualDirection:
        "Ocean-inspired color palette, environmental sustainability, waste reporting, interactive GIS mapping, coastal monitoring, and a clean administrative dashboard.",
      features: [
        "Citizen marine waste reporting with photo upload and GPS geolocation",
        "Interactive GIS mapping displaying coastal hotspots and cleanup coordinates",
        "LGU administrative dashboard for report triage, verification, and audit logs",
        "Coastal cleanup operation scheduling and volunteer mobilization tracking",
        "Role-based access security using JSON Web Tokens (JWT)",
      ],
      image: "/projects/bluewaste.webp",
      liveUrl: "https://bluewaste-management-system.vercel.app/",
      repoUrl: "https://github.com/charlsrebaja",
      status: "Production Ready",
      accentColor: {
        badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
        border: "hover:border-cyan-500/40",
        glow: "group-hover:shadow-cyan-500/10",
      },
    },
    {
      id: "sk-mankilam",
      title: "SK Brgy Mankilam",
      subtitle: "Youth Council Community Web Portal & Information System",
      category: "Civic & Community Portal",
      description:
        "A community-focused web development project for Sangguniang Kabataan (SK) Barangay Mankilam, designed to provide an accessible online presence for youth programs, community initiatives, announcements, events, and other barangay-related activities.",
      detailedDescription: [
        "SK Brgy Mankilam serves as the official digital headquarters for the youth council of Barangay Mankilam, promoting transparency and engagement among community youth.",
        "The portal consolidates announcements, leadership seminars, sports league registrations, educational scholarship opportunities, and public youth council initiatives.",
        "Built with an accessible, mobile-first design so barangay residents can easily access critical information from any device."
      ],
      primaryFramework: "Next.js",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      visualDirection:
        "Professional, community-focused design with a clean layout, accessible navigation, youth-oriented visuals, and a consistent visual identity appropriate for a local government and youth organization.",
      features: [
        "Youth program directories and scholarship grant announcements",
        "Community notice board for barangay events and workshop schedules",
        "Sports tournament tracking, match updates, and youth team standings",
        "Transparent youth council project updates and contact directory",
        "Mobile-first responsive layout optimized for low-bandwidth mobile browsing",
      ],
      image: "/projects/sk-mankilam.webp",
      liveUrl: "https://skbarangaymankilam.netlify.app/",
      repoUrl: "https://github.com/charlsrebaja",
      status: "Production Ready",
      accentColor: {
        badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        border: "hover:border-blue-500/40",
        glow: "group-hover:shadow-blue-500/10",
      },
    },
    {
      id: "projektmariphil",
      title: "ProjektMariphil Inc.",
      subtitle: "Official Organizational Website for MARIPHIL Foundation",
      category: "Non-Government Organization (NGO)",
      description:
        "A modern organizational website for MARIPHIL Foundation, designed to present the organization's mission, programs, community initiatives, news, events, and activities. The website aims to strengthen the organization's online presence and help visitors learn about its work, social impact, and community development initiatives.",
      detailedDescription: [
        "ProjektMariphil delivers a modern digital presentation for MARIPHIL Foundation Inc., amplifying their humanitarian mission and grassroots community programs.",
        "The platform highlights community empowerment projects, child sponsorship programs, educational assistance, and rural development milestones.",
        "Engineered for clarity and storytelling, allowing donors, volunteers, and partners to engage meaningfully with the foundation's impact."
      ],
      primaryFramework: "Next.js",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      visualDirection:
        "Clean, modern, professional, and responsive design emphasizing organizational identity, community development, social impact, accessible content, and a polished presentation across desktop and mobile devices.",
      features: [
        "Organizational mission, vision, and core humanitarian values presentation",
        "Community development program highlights and impact storytelling",
        "Child sponsorship and education assistance initiative overviews",
        "Upcoming events calendar and verified humanitarian news updates",
        "Accessible navigation with responsive desktop and mobile layouts",
      ],
      image: "/projects/projektmariphil.webp",
      liveUrl: "https://projektmariphilfoundation.vercel.app/",
      repoUrl: "https://github.com/charlsrebaja",
      status: "Production Ready",
      accentColor: {
        badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        border: "hover:border-emerald-500/40",
        glow: "group-hover:shadow-emerald-500/10",
      },
    },
    {
      id: "ces-travel",
      title: "CES Travel & Tours",
      subtitle: "Tourism Portal & Agri-Tourism Experience Showcase",
      category: "Travel & Hospitality",
      description:
        "A professional travel and tourism website for CES Travel & Tours in Davao City, designed to showcase the company's travel services, destinations, tour packages, and customer inquiry options. The project also highlights specialized coffee and cacao tourism experiences, including the concepts 'Seed to Sip' and 'Beyond the Cup,' where implemented.",
      detailedDescription: [
        "CES Travel & Tours showcases Davao City and Mindanao's premier travel experiences, offering comprehensive tour packages spanning mountain treks to tropical island escapes.",
        "Special prominence is dedicated to regional agri-tourism highlights, featuring the signature 'Seed to Sip' highland coffee farm tour and the 'Beyond the Cup' Malagos cacao chocolate immersion.",
        "Equipped with interactive inquiry pathways allowing prospective travelers to request personalized tour itineraries."
      ],
      primaryFramework: "Next.js",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Inquiry Integration",
      ],
      visualDirection:
        "Travel-inspired imagery, destination-focused visuals, elegant typography, engaging tourism content, and a polished business presentation that communicates trust, professionalism, and memorable travel experiences.",
      features: [
        "Curated Davao City and Mindanao tour packages (Mount Apo, Samal Island)",
        "Signature 'Seed to Sip' specialty highland coffee farm tourism spotlight",
        "'Beyond the Cup' Malagos chocolate and cacao agro-industrial experience",
        "Customer travel inquiry and quotation request integration",
        "Elegant destination imagery and mobile-optimized itinerary cards",
      ],
      image: "/projects/ces-travel.webp",
      liveUrl: "https://ces-travel-tours.vercel.app/",
      repoUrl: "https://github.com/charlsrebaja",
      status: "Production Ready",
      accentColor: {
        badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        border: "hover:border-amber-500/40",
        glow: "group-hover:shadow-amber-500/10",
      },
    },
  ] as Project[],

  education: [
    {
      degree: "Bachelor of Science in Information Technology (BSIT)",
      institution: "Davao Del Norte State College",
      status: "In Progress / Candidate for Degree",
      yearLevel: "4th Year",
      academicYear: "2023 - Present",
      description:
        "Pursuing comprehensive coursework in software design, web application development, database management systems, and network fundamentals. Actively applying classroom concepts to build functional digital solutions for community organizations.",
      coursework: [
        "Web Systems & Technologies",
        "Database Management Systems (RDBMS)",
        "Software Engineering & Architecture",
        "Object-Oriented Programming (OOP)",
        "Data Structures & Algorithms",
        "Information Management & Security",
      ],
      isPlaceholder: false,
    },
  ] as EducationItem[],

  certifications: [
    {
      title: "Technical Training & Certifications",
      issuer: "In Progress / Upcoming Certifications",
      status: "Pending Official Verification",
      note: "Formal technical certifications, development bootcamps, and institutional awards will be added as verified documentation is completed. (Clearly marked placeholder per portfolio standards)",
      isPlaceholder: true,
    },
  ] as CertificationItem[],

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ],
};
