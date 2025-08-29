import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
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
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Charles Aroma</span>
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Title */}
            <h3 className="text-2xl font-semibold">
              Frontend Developer & UI/UX Enthusiast
            </h3>

            {/* Description Paragraphs */}
            <p className="text-base sm:text-normal text-muted-foreground">
              I'm a passionate Frontend Developer with a keen eye for creating beautiful, responsive, and user-friendly web experiences. With expertise in modern JavaScript frameworks and a strong foundation in design principles, I craft intuitive interfaces that users love.
            </p>

            <p className="text-base sm:text-normal text-muted-foreground">
              My journey in web development started with a curiosity for how things work on the web, and it has evolved into a passion for creating seamless digital experiences. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a 
                href="#contact" 
                className="cosmic-button cursor-pointer"
                onClick={(e) => handleNavClick("#contact", e)}
              >
                Get In Touch
              </a>

              <a
                href="/CV Charles Aroma.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Frontend Development Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Frontend Development</h4>
                  <p className="text-base sm:text-normal text-muted-foreground">
                    Building responsive and accessible user interfaces that work seamlessly across all devices and platforms.
                  </p>
                </div>
              </div>
            </div>
            
            {/* UI/UX Design Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-base sm:text-normal text-muted-foreground">
                    Crafting engaging user experiences with smooth animations and intuitive interactions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Responsive Design Card */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Responsive Design</h4>
                  <p className="text-base sm:text-normal text-muted-foreground">
                    Building performant web applications with modern frameworks and optimization techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
