import { ArrowRight, ExternalLink, Github } from "lucide-react";

/* Projects Data */
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Vite React, React Js, Framer Motion,  and TailwindCSS featuring dark mode, light mode and animations.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Vite", "framer-motion"],
    demoUrl: "https://atuhaire-emmanuel.netlify.app/",
    githubUrl: "https://github.com/charlesaroma/atuhaire-emmanuel-portfolio",
  },
  {
    id: 2,
    title: "Nyati Motion Pictures",
    description:
      "Collaborated on frontend development for a film production company website with responsive design and modern UI components.",
    image: "/projects/project2.png",
    tags: ["React", "JavaScript", "TailwindCSS", "Collaboration"],
    demoUrl: "https://nyatimotionpictures.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Interactive task management application with real-time updates, drag-and-drop functionality, and responsive design.",
    image: "/projects/project3.png",
    tags: ["React", "JavaScript", "TailwindCSS", "framer-motion"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        {/* Section Description */}
        <p className="text-base sm:text-normal text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my latest projects showcasing modern web development, responsive design, and creative problem-solving.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20"
            >
              {/* Project Image */}
              <div className="h-52 lg:h-56 overflow-hidden bg-secondary/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                
                {/* Project Description */}
                <p className="text-sm lg:text-base text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Project Links */}
                <div className="flex justify-between items-center pt-2">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-all duration-300 text-xs md:text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/charlesaroma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold text-sm md:text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            View More Projects
            <ArrowRight size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};
