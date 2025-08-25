// Central SEO configuration used across the app

export const siteConfig = {
  siteUrl: import.meta.env.VITE_SITE_URL || "https://charles-aroma.netlify.app",
  siteName: "Charles Aroma",
  twitterHandle: "@charles_aroma_",
  defaultTitle: "Charles Aroma | Frontend Developer & React Specialist Portfolio",
  defaultDescription:
    "Charles Aroma - Passionate Frontend Developer & React Specialist creating beautiful, responsive web experiences. Expert in React, TypeScript, TailwindCSS, and modern JavaScript frameworks. Available for remote work worldwide.",
  // Use a reliable absolute URL for social sharing images
  defaultImage:
    "https://ik.imagekit.io/ldeismm29/Charles%20Aroma/IMG_6625-Photoroom.png?updatedAt=1754572485882",
  keywords: [
    "Charles Aroma",
    "Charles Aroma developer",
    "Charles Aroma portfolio",
    "Charles Aroma frontend",
    "Charles Aroma React",
    "Charles Aroma UI/UX",
    "Charles Aroma graphics designer",
    "Charles Aroma creative coder",
    "Frontend Developer",
    "React Developer",
    "JavaScript Developer",
    "Web Developer",
    "UI/UX Designer",
    "React Specialist",
    "Graphics Designer",
    "Creative Coder",
    "Full Stack Developer",
    "Software Engineer",
    "Web Designer",
    "React.js",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Tailwind CSS",
    "TailwindCSS",
    "Framer Motion",
    "Next.js",
    "Vite",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "Git/GitHub",
    "Docker",
    "Figma",
    "VS Code",
    "Responsive Design",
    "Web Performance",
    "Accessibility",
    "Portfolio Website",
    "Task Management App",
    "Nyati Motion Pictures",
    "Professional Developer",
    "Remote Work",
    "Hire Charles Aroma",
    "Contact Charles Aroma",
    "charlesaroma9@gmail.com",
    "Modern Web Development",
    "Component-based Architecture",
    "Performance Optimization",
    "Mobile-first Design",
    "Dark Mode Toggle",
    "Animated Interfaces",
    "SEO Optimization"
  ],
  author: {
    name: "Charles Aroma",
    jobTitle: "Frontend Developer & React Specialist",
    description: "Passionate Frontend Developer with expertise in creating beautiful, responsive, and user-friendly web experiences. Specializes in modern JavaScript frameworks with a keen eye for design and performance optimization.",
    email: "charlesaroma9@gmail.com",
    location: "Available for remote work worldwide",
    bio: "My journey in web development started with a curiosity for how things work on the web, and it has evolved into a passion for creating seamless digital experiences. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.",
    roles: [
      "Frontend Developer",
      "UI/UX Designer",
      "Graphics Designer",
      "React Specialist",
      "Web Developer",
      "Creative Coder"
    ],
    skills: {
      frontend: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 80 }
      ],
      backend: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 },
        { name: "GraphQL", level: 60 }
      ],
      tools: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Figma", level: 85 },
        { name: "VS Code", level: 95 }
      ]
    },
    services: [
      {
        title: "Frontend Development",
        description: "Building responsive and accessible user interfaces that work seamlessly across all devices and platforms."
      },
      {
        title: "UI/UX Design",
        description: "Crafting engaging user experiences with smooth animations and intuitive interactions."
      },
      {
        title: "Responsive Design",
        description: "Building performant web applications with modern frameworks and optimization techniques."
      }
    ],
    socialLinks: {
      github: "https://github.com/charlesaroma",
      linkedin: "https://www.linkedin.com/in/charles-aroma-8955b62a2",
      twitter: "https://x.com/charles_aroma_",
      instagram: "https://www.instagram.com/charles_aroma?igsh=cTd0Z2p4bHVya3d3"
    }
  },
  projects: [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React and TailwindCSS featuring dark mode and animations.",
      technologies: ["React", "TailwindCSS", "Vite", "Framer Motion"],
      demoUrl: "https://atuhaire-emmanuel.netlify.app/",
      githubUrl: "https://github.com/charlesaroma/atuhaire-emmanuel-portfolio",
      featured: true
    },
    {
      title: "Nyati Motion Pictures",
      description: "Collaborated on frontend development for a film production company website with responsive design and modern UI components.",
      technologies: ["React", "JavaScript", "TailwindCSS", "Collaboration"],
      demoUrl: "https://nyatimotionpictures.com/",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Interactive task management application with real-time updates, drag-and-drop functionality, and responsive design.",
      technologies: ["React", "JavaScript", "TailwindCSS", "Framer Motion"],
      featured: true
    }
  ],
  techStack: {
    frontend: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    tools: ["Vite", "Git", "Docker", "Figma", "VS Code"],
    specialties: ["Responsive Design", "Performance Optimization", "Accessibility", "SEO"]
  }
};

// Generate structured data for Charles Aroma's professional profile
export const generatePersonStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": siteConfig.author.name,
  "jobTitle": siteConfig.author.jobTitle,
  "description": siteConfig.author.description,
  "url": siteConfig.siteUrl,
  "image": siteConfig.defaultImage,
  "email": siteConfig.author.email,
  "sameAs": [
    siteConfig.author.socialLinks.github,
    siteConfig.author.socialLinks.linkedin,
    siteConfig.author.socialLinks.twitter,
    siteConfig.author.socialLinks.instagram
  ].filter(Boolean),
  "knowsAbout": [
    ...siteConfig.author.skills.frontend.map(skill => skill.name),
    ...siteConfig.author.skills.backend.map(skill => skill.name),
    ...siteConfig.author.skills.tools.map(skill => skill.name),
    ...siteConfig.techStack.specialties
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Frontend Developer",
    "skills": siteConfig.author.roles.join(", ")
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Self-taught Developer"
  }
});

// Generate website structured data
export const generateWebsiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.siteName,
  "description": siteConfig.defaultDescription,
  "url": siteConfig.siteUrl,
  "author": {
    "@type": "Person",
    "name": "Charles Aroma"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteConfig.siteUrl}?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

// Generate professional service structured data
export const generateProfessionalServiceStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Charles Aroma - Frontend Development Services",
  "description": "Professional frontend development and React specialization services",
  "provider": {
    "@type": "Person",
    "name": "Charles Aroma"
  },
  "areaServed": "Worldwide",
  "serviceType": "Web Development",
  "url": siteConfig.siteUrl
});


