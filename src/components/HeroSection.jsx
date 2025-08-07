import { ArrowDown, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { StarBackground } from "./StarBackground";

export const HeroSection = () => {
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
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background Effects */}
      <StarBackground />
      
      {/* Main Content Container */}
      <div className="container max-w-5xl mx-auto z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 text-center lg:text-left">
        {/* Text Content */}
        <div className="space-y-6 flex-1 order-2 lg:order-1">
          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Charles</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Aroma</span>
          </h1>

          {/* Hero Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3">
            Frontend developer passionate about creating beautiful, responsive, and user-friendly web experiences. I specialize in modern JavaScript frameworks and crafting intuitive interfaces that users love.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-6 pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="https://github.com/charlesaroma" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/charles-aroma-8955b62a2" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="https://x.com/charles_aroma_" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
              <Twitter size={28} />
            </a>
            <a href="https://www.instagram.com/charles_aroma?igsh=cTd0Z2p4bHVya3d3" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
              <Instagram size={28} />
            </a>
          </div>

          {/* Call to Action Button */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-5">
            <a 
              href="#projects" 
              className="cosmic-button cursor-pointer"
              onClick={(e) => handleNavClick("#projects", e)}
            >
              View My Work
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="relative w-52 md:w-72 mb-8 lg:mb-0 order-1 lg:order-2">
          <img
            src="https://ik.imagekit.io/ldeismm29/Charles%20Aroma/IMG_6625-Photoroom.png?updatedAt=1754572485882"
            alt="Charles Aroma"
            className="w-52 h-auto md:w-72 md:h-auto object-cover animate-fade-in block"
          />
          {/* Image Gradient Overlay */}
          <div
            className="pointer-events-none absolute left-0 right-0 bottom-0 h-1/3 md:h-1/2"
            style={{
              background: "linear-gradient(to bottom, rgba(255,255,255,0) 20%, hsl(var(--background)) 100%)",
              zIndex: 2,
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
