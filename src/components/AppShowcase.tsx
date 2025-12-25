import { Star, Quote, ArrowLeft, ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const testimonials = [
  {
    name: "Arjun Patel",
    role: "Engineering Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote: "Findrive helped me land a ₹75,000 scholarship and taught me how to start investing with just ₹500. Life-changing!",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Young Entrepreneur",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    quote: "The startup resources and mentorship program gave me the confidence to launch my first business at 22.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Finance Graduate",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "From knowing nothing about investments to having a diversified portfolio — all thanks to Findrive's guidance.",
    rating: 5,
  },
];

const appFeatures = [
  "Budget Tracker & Expense Analysis",
  "Real-time Scholarship Alerts",
  "Investment Tips & Market Updates",
  "Community Forums & Expert Q&A",
  "Personalized Financial Roadmap",
];

export function AppShowcase() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative grain overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* App Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-64 md:w-80">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[3rem] p-3 shadow-elevated">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-background rounded-full" />
                <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* App Screen Content */}
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4 pt-6">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
                          <span className="font-display font-bold text-primary-foreground text-sm">F</span>
                        </div>
                        <span className="font-display text-sm font-bold">Findrive</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-muted" />
                    </div>
                    
                    <div className="bg-card rounded-xl p-4 mb-4 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Total Savings</p>
                      <p className="font-display text-2xl font-bold text-primary">₹45,280</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-xs text-green-500">+12.5%</span>
                        <span className="text-xs text-muted-foreground">this month</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-muted rounded-lg p-3 text-center">
                        <div className="w-6 h-6 rounded-md bg-primary/20 mx-auto mb-2 flex items-center justify-center">
                          <Smartphone className="w-3 h-3 text-primary" />
                        </div>
                        <p className="text-xs font-medium">Budget</p>
                      </div>
                      <div className="bg-muted rounded-lg p-3 text-center">
                        <div className="w-6 h-6 rounded-md bg-emerald-500/20 mx-auto mb-2" />
                        <p className="text-xs font-medium">Invest</p>
                      </div>
                    </div>

                    <div className="flex-1 bg-muted rounded-xl p-3">
                      <p className="text-xs font-medium mb-2">Recent Activity</p>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-card" />
                            <div className="flex-1">
                              <div className="h-2 bg-card rounded w-3/4" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-4 top-1/4 bg-card border border-border rounded-xl p-3 shadow-card animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">New Scholarship!</p>
                    <p className="text-[10px] text-muted-foreground">₹50K Available</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 bottom-1/4 bg-card border border-border rounded-xl p-3 shadow-card animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-500 text-sm">↑</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Investment Up</p>
                    <p className="text-[10px] text-green-500">+8.5% Today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Download the App</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Your Financial Future in{" "}
              <span className="text-gradient-gold">Your Pocket</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Track budgets, discover scholarships, learn investing, and connect with mentors — all from one beautifully designed app.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {appFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="lg">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                App Store
              </Button>
              <Button variant="heroOutline" size="lg">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                Google Play
              </Button>
            </div>

            {/* Testimonial Carousel */}
            <div className="bg-card border border-border rounded-2xl p-6 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>

              <p className="text-muted-foreground italic mb-4">
                "{testimonials[currentTestimonial].quote}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
