import { SEO } from "@/components/SEO";
import { Home, ArrowLeft, Zap } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <main className="h-screen flex items-center justify-center p-4 text-center relative overflow-hidden bg-background">
      <SEO title="Page Not Found" description="The page you are looking for does not exist." path="/404" noindex />
      
      {/* Background Effects */}
      <StarBackground />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="w-8 h-8 bg-primary/20 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-32 right-16 animate-pulse">
        <div className="w-6 h-6 bg-emerald-500/30 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce delay-300">
        <div className="w-10 h-10 bg-teal-500/20 rounded-full blur-sm"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        {/* 404 Number with Glow Effect */}
        <div className="relative mb-6">
          <h1 className="text-6xl md:text-7xl font-black text-primary/20 select-none animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-6xl md:text-7xl font-black text-primary animate-pulse opacity-80">
            404
          </div>
        </div>
        
        {/* Sad Animated Sticker */}
        <div className="flex justify-center mb-4">
          <div className="text-6xl animate-bounce select-none">
            😢
          </div>
        </div>
        
        {/* Title and Description */}
        <div className="space-y-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Oops! Page Not Found
          </h2>
          <p className="text-base text-muted-foreground max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for seems to have wandered off into the digital void. 
            Don&apos;t worry, even the best explorers get lost sometimes!
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <button
            onClick={handleGoHome}
            className="group flex cursor-pointer items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-xl"
          >
            <Home className="h-4 w-4 group-hover:animate-bounce" />
            Go Home
          </button>
          
          <button
            onClick={handleGoBack}
            className="group flex cursor-pointer items-center gap-2 px-6 py-3 border border-border hover:bg-secondary rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>
        
        {/* Fun Fact */}
        <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="h-4 w-4 text-primary animate-pulse" />
            <span className="font-medium text-primary text-sm">Fun Fact</span>
          </div>
          <p className="text-xs text-muted-foreground">
            The HTTP 404 error was named after room 404 at CERN, where the original web servers were located. 
            When files couldn&apos;t be found, they were &quot;404&quot; - not found in room 404!
          </p>
        </div>
      </div>
    </main>
  );
};
