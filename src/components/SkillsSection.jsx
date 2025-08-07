import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Settings, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* Skills Data */
const skills = [
  /* Frontend Skills */
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  /* Backend Skills */
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  /* Tools Skills */
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

/* Category Configuration */
const categories = ["all", "frontend", "backend", "tools"];

const categoryIcons = {
  all: <Layers className="inline-block mr-2" size={18} />,
  frontend: <Code className="inline-block mr-2" size={18} />,
  backend: <Database className="inline-block mr-2" size={18} />,
  tools: <Settings className="inline-block mr-2" size={18} />,
};

export const SkillsSection = () => {
  /* State Management */
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  /* Auto-rotate through categories */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
      setActiveCategory(categories[(currentCategoryIndex + 1) % categories.length]);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentCategoryIndex]);

  /* Filter Skills Based on Category */
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative dark:bg-secondary/30 shadow-lg dark:shadow-none">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <motion.button
              key={key}
              onClick={() => {
                setActiveCategory(category);
                setCurrentCategoryIndex(categories.indexOf(category));
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize flex items-center cursor-pointer border border-transparent hover:border-primary/40 shadow-sm backdrop-blur-md dark:bg-black/20",
                activeCategory === category
                  ? "border-primary text-primary"
                  : "bg-transparent dark:bg-secondary/70 text-foreground hover:bg-gray-50 dark:hover:bg-secondary/90"
              )}
              style={{ minWidth: 110 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {categoryIcons[category]}{category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid with AnimatePresence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="contents"
            >
              {filteredSkills.map((skill, key) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: key * 0.1 }}
                  className="!bg-transparent dark:bg-black/30 dark:backdrop-blur-md p-6 rounded-2xl border border-primary/10 hover:scale-105 transition-transform duration-300 relative overflow-hidden group"
                  style={{ backgroundColor: 'transparent' }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Skill Name */}
                  <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg"> {skill.name}</h3>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-gray-200 dark:bg-secondary/40 h-2 rounded-full overflow-hidden relative">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-primary/60 h-2 rounded-full origin-left group-hover:from-primary/80 group-hover:to-primary"
                        initial={{ width: 0 }}
                        animate={{ width: skill.level + "%" }}
                        transition={{ duration: 1.2, delay: key * 0.1 + 0.3, ease: "easeOut" }}
                      />
                      <div className="absolute left-0 top-0 h-4 rounded-full" style={{ width: skill.level + "%" }}>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono tracking-wider min-w-[3rem] text-right">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
