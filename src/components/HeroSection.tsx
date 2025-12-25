import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden grain">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-burgundy/10 rounded-full blur-3xl" />
      
      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />
      <div className="absolute top-32 right-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Your Financial Journey Starts Here</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Fuel Your Drive to{" "}
            <span className="text-gradient-gold">Financial Independence</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Learn money management, investments, scholarships, and startup skills — all in one app designed to empower your future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <Button variant="hero" size="xl" className="group">
              <Download className="w-5 h-5" />
              Download Findrive
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50 animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">50K+</p>
              <p className="text-sm text-muted-foreground mt-1">Active Users</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">₹10Cr+</p>
              <p className="text-sm text-muted-foreground mt-1">Scholarships Found</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">200+</p>
              <p className="text-sm text-muted-foreground mt-1">Expert Mentors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
