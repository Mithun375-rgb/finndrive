import { Wallet, TrendingUp, GraduationCap, Rocket, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { featureSubsData, SubCategory } from "@/data/featureData";

const features = [
  {
    icon: Wallet,
    title: "Money Management",
    description: "Budgeting tools, savings tips, and expense tracking to master your finances.",
    color: "from-primary to-gold-light",
    hasExpanded: true,
  },
  {
    icon: TrendingUp,
    title: "Investments",
    description: "Beginner-friendly guides on where to invest and understand market advantages.",
    color: "from-emerald-500 to-teal-400",
    hasExpanded: true,
  },
  {
    icon: GraduationCap,
    title: "Scholarships",
    description: "Government & NGO opportunities with eligibility info and application guidance.",
    color: "from-blue-500 to-cyan-400",
    hasExpanded: true,
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Resources, success stories, and branding tips for aspiring entrepreneurs.",
    color: "from-purple-500 to-pink-400",
    hasExpanded: true,
  },
];

export function FeaturesSection() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [expandedSubItem, setExpandedSubItem] = useState<string | null>(null);

  const handleFeatureClick = (feature: typeof features[0]) => {
    if (feature.hasExpanded) {
      setExpandedFeature(expandedFeature === feature.title ? null : feature.title);
      setExpandedSubItem(null);
    }
  };

  return (
    <section id="features" className="py-24 relative grain">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient-gold">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive tools and resources designed to guide you through every step of your financial journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-elevated ${
                feature.hasExpanded ? "cursor-pointer" : ""
              } ${expandedFeature === feature.title ? "lg:col-span-4" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={(e) => {
                if (feature.hasExpanded && e.target === e.currentTarget) {
                  handleFeatureClick(feature);
                }
              }}
            >
              {/* Icon */}
              <div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                onClick={() => handleFeatureClick(feature)}
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <div 
                className="flex items-center gap-2 mb-3"
                onClick={() => handleFeatureClick(feature)}
              >
                <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                {feature.hasExpanded && (
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      expandedFeature === feature.title ? "rotate-180" : ""
                    }`} 
                  />
                )}
              </div>
              <p 
                className="text-muted-foreground text-sm leading-relaxed"
                onClick={() => handleFeatureClick(feature)}
              >
                {feature.description}
              </p>

              {/* Expanded Content */}
              {feature.hasExpanded && expandedFeature === feature.title && featureSubsData[feature.title] && (
                <div className="mt-6 space-y-6 animate-fade-in">
                  {featureSubsData[feature.title].map((sub, subIndex) => (
                    <div key={sub.title} className="border-t border-border/50 pt-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <sub.icon className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="font-display font-semibold text-foreground">
                          {subIndex + 1}. {sub.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 pl-11 italic">
                        {sub.introduction}
                      </p>
                      <ul className="space-y-3 pl-11">
                        {sub.items.map((item, itemIndex) => {
                          const itemKey = `${feature.title}-${subIndex + 1}.${itemIndex + 1}`;
                          const isExpanded = expandedSubItem === itemKey;
                          
                          return (
                            <li key={itemIndex} className="text-sm">
                              <Link
                                to={`/topic/${encodeURIComponent(feature.title)}/${subIndex + 1}/${itemIndex + 1}`}
                                className="flex items-start gap-2 w-full text-left hover:bg-muted/50 rounded-lg p-2 -ml-2 transition-colors group/link"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink 
                                  className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover/link:scale-110 transition-transform"
                                />
                                <span className="text-primary font-medium shrink-0">
                                  {subIndex + 1}.{itemIndex + 1}
                                </span>
                                <span className="text-foreground font-medium group-hover/link:text-primary transition-colors">
                                  {item.title}
                                </span>
                              </Link>
                              
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}