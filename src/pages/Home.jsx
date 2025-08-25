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
        includePersonSchema={true}
        includeWebsiteSchema={true}
        includeProfessionalSchema={true}
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
