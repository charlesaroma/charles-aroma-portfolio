import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ThemeToggle } from "./ThemeToggle";

/* Navigation Items */
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  /* State Management */
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isDarkMode, setIsDarkMode] = useState(false);

  /* Initialize Theme from LocalStorage */
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  /* Scroll Event Handler */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      /* Track active section based on scroll position */
      const sections = navItems.map(item => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Disable Scroll When Mobile Menu is Open */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  /* Toggle Theme Function */
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

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
    setIsMenuOpen(false);
  };

  /* Mobile Menu Component */
  const MobileMenu = () => (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-md z-[9999] flex flex-col items-center justify-center md:hidden">
      {/* Close Button - Top Right */}
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-7 right-8 p-2 text-foreground z-[10000]"
        aria-label="Close Menu"
      >
        <X size={34} />
      </button>

      {/* Custom Theme Toggle - Far Left */}
      <div className="absolute animate-bounce top-8 left-8 z-[10000]">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full transition-colors duration-300 cursor-pointer hover:bg-primary/10"
        >
          {isDarkMode ? (
            <Sun className="h-8 w-8 text-amber-400" />
          ) : (
            <Moon className="h-8 w-8 text-slate-700" />
          )}
        </button>
      </div>
      
      <div className="flex flex-col items-center space-y-8">
        {/* Navigation Links */}
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "transition-colors duration-300 cursor-pointer",
                  isActive 
                    ? "text-primary font-medium" 
                    : "text-foreground/80 hover:text-primary"
                )}
                onClick={(e) => handleNavClick(item.href, e)}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            className="text-xl font-bold text-primary flex items-center cursor-pointer"
            href="#hero"
            onClick={(e) => handleNavClick("#hero", e)}
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground"> Charles </span>{" "}
              Aroma
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={key}
                  href={item.href}
                  className={cn(
                    "transition-colors duration-300 cursor-pointer",
                    isActive 
                      ? "text-primary font-medium" 
                      : "text-foreground/80 hover:text-primary"
                  )}
                  onClick={(e) => handleNavClick(item.href, e)}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="ml-4 flex items-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-[60] relative"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />} {" "}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Portal */}
      {isMenuOpen && createPortal(<MobileMenu />, document.body)}
    </>
  );
};
