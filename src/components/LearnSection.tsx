import { Bitcoin, Laptop, ShoppingBag, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const topics = [
  {
    icon: Bitcoin,
    title: "Bitcoin & Crypto",
    description: "Easy explainers on cryptocurrency, blockchain basics, and understanding risks vs rewards.",
    points: ["Beginner's guide to crypto", "Risk assessment tools", "Market analysis basics"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Laptop,
    title: "Online Earning",
    description: "Freelancing tips, passive income strategies, and building digital skills that pay.",
    points: ["Freelancing platforms guide", "Skill development roadmap", "Income diversification"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: ShoppingBag,
    title: "Brand Value Analysis",
    description: "How to evaluate companies and products before investing your hard-earned money.",
    points: ["Company valuation basics", "Product research methods", "Investment due diligence"],
    gradient: "from-pink-500 to-rose-500",
  },
];

export function LearnSection() {
  return (
    <section id="learn" className="py-24 relative grain">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Learn & Grow</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Master Modern <span className="text-gradient-gold">Money Skills</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay ahead with cutting-edge knowledge on digital finance, investing, and building sustainable income streams.
            </p>
          </div>
          <Button variant="heroOutline" size="lg" className="self-start lg:self-auto">
            Explore All Topics
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Topics Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-elevated"
            >
              {/* Header */}
              <div className={`p-6 bg-gradient-to-r ${topic.gradient} relative`}>
                <div className="absolute inset-0 bg-background/80" />
                <div className="relative flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${topic.gradient} flex items-center justify-center`}>
                    <topic.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{topic.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">{topic.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {topic.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="w-full group/btn justify-between">
                  Start Learning
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
