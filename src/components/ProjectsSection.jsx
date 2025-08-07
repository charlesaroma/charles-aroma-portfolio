import { ArrowRight, ExternalLink, Github } from "lucide-react";

/* Projects Data */
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React and TailwindCSS featuring dark mode and animations.",
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
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent frontend projects showcasing my skills in responsive design, 
          user interface development, and modern web technologies. Each project demonstrates my 
          commitment to creating beautiful and functional user experiences.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                
                {/* Project Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/charlesaroma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            View More Projects
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
