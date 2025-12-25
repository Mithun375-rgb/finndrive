import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 relative grain">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-card to-muted border border-border p-8 md:p-12 overflow-hidden shadow-elevated">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-burgundy/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Newsletter</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Stay Ahead of the <span className="text-gradient-gold">Game</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Get the latest scholarships, investment tips, and startup opportunities delivered straight to your inbox.
              </p>

              {isSubscribed ? (
                <div className="flex items-center justify-center gap-3 text-primary animate-fade-in">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-lg font-medium">You're subscribed! Welcome aboard.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full h-12 pl-12 pr-4 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg">
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>
              )}

              <p className="text-xs text-muted-foreground mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
