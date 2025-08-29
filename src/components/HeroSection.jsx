import { ArrowDown, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { StarBackground } from "./StarBackground";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  /* State Management */
  const [currentRole, setCurrentRole] = useState(0);

  /* Roles/Skills Data */
  const roles = [
    "Frontend Developer",
    "UI/UX Designer", 
    "Graphics Designer",
    "React Specialist",
    "Web Developer",
    "Creative Coder"
  ];

  /* Auto-rotate through roles */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  /* Smooth Scroll Function */
  const smoothScrollTo = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  /* Navigation Click Handler */
  const handleNavClick = (href, e) => {
    e.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <StarBackground />
      
      {/* Main Content Container */}
      <div className="container max-w-5xl mx-auto z-10 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-20 text-center lg:text-left min-h-[calc(100vh-5rem)]">
        {/* Text Content */}
        <div className="space-y-4 lg:space-y-6 flex-1 order-2 lg:order-1">
          {/* Hero Title */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Charles</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Aroma</span>
          </h1>

          {/* Animated Role Display */}
          <div className="h-6 sm:h-8 md:h-10 lg:h-12 flex items-center justify-center lg:justify-start opacity-0 animate-fade-in-delay-3">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRole}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-primary"
              >
                {roles[currentRole]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Hero Description */}
          <p className="text-base sm:text-normal text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-4">
            Passionate about creating beautiful, responsive web experiences with modern JavaScript frameworks.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 pt-2 pb-4 lg:pb-2 opacity-0 animate-fade-in-delay-5">
            <a href="https://github.com/charlesaroma" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
              <Github size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a href="https://www.linkedin.com/in/charles-aroma-8955b62a2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a href="https://x.com/charles_aroma_" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
              <Twitter size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a href="https://www.instagram.com/charles_aroma?igsh=cTd0Z2p4bHVya3d3" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
              <Instagram size={24} className="sm:w-7 sm:h-7" />
            </a>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 lg:pt-4 opacity-0 animate-fade-in-delay-6">
            <a 
              href="#contact" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-center text-sm sm:text-base"
              onClick={(e) => handleNavClick("#contact", e)}
            >
              Get In Touch
            </a>
            <a 
              href="/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-center text-sm sm:text-base"
            >
              Download CV
            </a>
          </div>
        </div>
        
        {/* Profile Image Container */}
        <div className="relative w-40 sm:w-48 md:w-64 lg:w-72 mb-4 lg:mb-0 order-1 lg:order-2 animate-float">
          {/* Clean Container with Subtle Border */}
          <div className="relative p-1 rounded-full bg-gradient-to-r from-primary/10 via-emerald-500/10 to-teal-500/10 border border-primary/20 shadow-lg">
            <div className="relative w-38 sm:w-46 md:w-62 lg:w-70 h-38 sm:h-46 md:h-62 lg:h-70 rounded-full overflow-hidden border-2 border-white/30 shadow-xl">
              <img
                src="https://ik.imagekit.io/ldeismm29/Charles%20Aroma/IMG_6625-Photoroom.png?updatedAt=1754572485882"
                alt="Charles Aroma"
                className="w-full h-full object-cover object-center animate-fade-in"
                style={{ objectPosition: 'center 20%' }}
              />
              {/* Very subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>
            {/* Subtle glowing effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-emerald-500/20 to-teal-500/20 blur-lg opacity-30" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Scroll</span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
};
