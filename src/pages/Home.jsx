import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { SEO } from "@/components/SEO";
import { siteConfig } from "@/lib/seo";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Frontend Developer & React Specialist"
        description="Explore the portfolio of Charles Aroma—Frontend Developer & React Specialist. I build beautiful, accessible, and high‑performance web apps with React, Tailwind CSS, and Framer Motion."
        path="/"
        image={siteConfig.defaultImage}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Charles Aroma",
          url: siteConfig.siteUrl,
          image: siteConfig.defaultImage,
          sameAs: [
            "https://github.com/charlesaroma",
            "https://www.linkedin.com/in/charles-aroma-8955b62a2",
            "https://x.com/charles_aroma_",
            "https://www.instagram.com/charles_aroma",
          ],
          jobTitle: "Frontend Developer",
          worksFor: {
            "@type": "Organization",
            name: "Freelance",
          },
        }}
      />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
