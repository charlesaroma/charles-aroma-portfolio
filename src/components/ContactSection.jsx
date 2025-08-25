import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  /* State Management */
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* Form Submit Handler */
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        {/* Section Description */}
        <p className="text-base sm:text-normal text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to collaborate on your next project? Let&apos;s discuss how we can bring your ideas to life with modern web technologies.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Email Contact */}
              <div className="flex items-center space-x-5">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-lg mb-1 text-left">Email</h4>
                  <a
                    href="mailto:charlesaroma9@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-base block text-left"
                  >
                    charlesaroma9@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Phone Contact */}
              <div className="flex items-center space-x-5">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-lg mb-1 text-left">Phone</h4>
                  <a
                    href="tel:+256750328631"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-base block text-left"
                  >
                    Available upon request
                  </a>
                </div>
              </div>
              
              {/* Location Contact */}
              <div className="flex items-center space-x-5">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-lg mb-1 text-left">Location</h4>
                  <span className="text-muted-foreground text-base block text-left">
                    Available for remote work worldwide
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-12">
              <h4 className="font-semibold text-lg mb-6">Connect With Me</h4>
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/charlesaroma" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-border hover:border-primary/30"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/charles-aroma-8955b62a2" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-border hover:border-primary/30"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://x.com/charles_aroma_" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-border hover:border-primary/30"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/charles_aroma?igsh=cTd0Z2p4bHVya3d3" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-border hover:border-primary/30"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300",
                  "hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
                  "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
                  "flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
