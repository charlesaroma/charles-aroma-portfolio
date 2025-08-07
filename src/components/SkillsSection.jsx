import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Settings, Layers } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const categoryIcons = {
  all: <Layers className="inline-block mr-2" size={18} />,
  frontend: <Code className="inline-block mr-2" size={18} />,
  backend: <Database className="inline-block mr-2" size={18} />,
  tools: <Settings className="inline-block mr-2" size={18} />,
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize flex items-center cursor-pointer border border-transparent hover:border-primary/40 shadow-sm backdrop-blur-md bg-white/10 dark:bg-black/20",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg border-primary"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/90"
              )}
              style={{ minWidth: 110 }}
            >
              {categoryIcons[category]}{category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-white/30 dark:bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-lg card-hover border border-primary/10 hover:scale-105 transition-transform duration-300 relative overflow-hidden group"
              style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-secondary/40 h-2 rounded-full overflow-hidden relative">
                  <div
                    className="bg-gradient-to-r from-primary to-primary/60 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] group-hover:from-primary/80 group-hover:to-primary"
                    style={{ width: skill.level + "%", transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)" }}
                  />
                  <div className="absolute left-0 top-0 h-4 rounded-full" style={{ width: skill.level + "%" }}>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground font-mono tracking-wider min-w-[3rem] text-right">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
