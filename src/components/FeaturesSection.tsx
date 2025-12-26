import { Wallet, TrendingUp, GraduationCap, Rocket, FileText, Lightbulb, BarChart3, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SubItem {
  title: string;
  content: {
    definition: string;
    whyRequired: string;
    whatItDoes: string;
    howItWorks: string;
    example: string;
    scenario: string;
    keyTakeaway: string;
    conclusion: string;
  };
}

interface SubCategory {
  icon: typeof FileText;
  title: string;
  introduction: string;
  items: SubItem[];
}

const moneyManagementSubs: SubCategory[] = [
  {
    icon: FileText,
    title: "Budgeting Tools",
    introduction: "Budgeting is the backbone of financial independence. It helps young people plan their money, avoid overspending, and achieve savings goals.",
    items: [
      {
        title: "Create Monthly Budgets (Income vs. Expenses)",
        content: {
          definition: "A monthly budget is a plan that compares your income with your expenses.",
          whyRequired: "Without a budget, money slips away unnoticed. With a budget, you control spending.",
          whatItDoes: "Shows how much you earn and where it goes.",
          howItWorks: "List all income sources (salary, allowance, freelance work) and all expenses (rent, food, travel).",
          example: "A student earns ₹10,000/month. Expenses: Rent ₹4,000, Food ₹2,000, Travel ₹1,500, Entertainment ₹1,000 → Savings ₹1,500.",
          scenario: "Without a budget, the student overspends on eating out and borrows money. With a budget, they save ₹1,500 monthly.",
          keyTakeaway: "Budgeting ensures you live within your means.",
          conclusion: "A monthly budget is the first step toward financial discipline.",
        },
      },
      {
        title: "Set Spending Limits for Categories",
        content: {
          definition: "Assigning maximum amounts for each expense category.",
          whyRequired: "Prevents overspending in non-essential areas.",
          whatItDoes: "Keeps lifestyle expenses under control.",
          howItWorks: "Decide limits (e.g., ₹3,000 for shopping, ₹1,000 for entertainment).",
          example: "A young professional sets a ₹3,000 shopping limit.",
          scenario: "They want a new gadget but wait until next month because the limit is reached.",
          keyTakeaway: "Limits help prioritize needs over wants.",
          conclusion: "Spending caps protect savings and prevent financial stress.",
        },
      },
      {
        title: "Visual Charts to Track Progress",
        content: {
          definition: "Graphs and charts that show spending patterns.",
          whyRequired: "Visuals make it easy to spot problem areas.",
          whatItDoes: "Shows percentage of income spent on each category.",
          howItWorks: "Pie charts, bar graphs, or line charts display expenses.",
          example: "Pie chart shows 40% rent, 20% food, 10% travel, 10% entertainment, 20% savings.",
          scenario: "User sees entertainment is too high and cuts back.",
          keyTakeaway: "Visuals simplify financial analysis.",
          conclusion: "Charts make budgeting engaging and actionable.",
        },
      },
      {
        title: "Alerts When You're Close to Overspending",
        content: {
          definition: "Notifications when spending nears category limits.",
          whyRequired: "Prevents accidental overspending.",
          whatItDoes: "Warns users before they exceed limits.",
          howItWorks: "App sends alerts at 80–90% of the limit.",
          example: "Food budget ₹2,000 → Alert at ₹1,800.",
          scenario: "Student gets alert and cooks at home instead of ordering food.",
          keyTakeaway: "Alerts encourage mindful spending.",
          conclusion: "Real-time warnings keep budgets intact.",
        },
      },
    ],
  },
  {
    icon: Lightbulb,
    title: "Savings Tips",
    introduction: "Saving is the habit that builds wealth. Even small amounts grow over time and protect against emergencies.",
    items: [
      {
        title: "Follow the 50/30/20 Rule",
        content: {
          definition: "Spend 50% on needs, 30% on wants, save 20%.",
          whyRequired: "Balances lifestyle and savings.",
          whatItDoes: "Ensures consistent saving.",
          howItWorks: "Divide monthly income into three portions.",
          example: "Income ₹20,000 → Needs ₹10,000, Wants ₹6,000, Savings ₹4,000.",
          scenario: "Young employee avoids overspending on luxuries by following the rule.",
          keyTakeaway: "Simple formula for financial balance.",
          conclusion: "The 50/30/20 rule is a beginner-friendly savings strategy.",
        },
      },
      {
        title: "Automate Savings into a Separate Account",
        content: {
          definition: "Automatic transfer of money into savings.",
          whyRequired: "Removes temptation to spend.",
          whatItDoes: "Builds savings consistently.",
          howItWorks: "Set up auto-transfer on payday.",
          example: "₹2,000 auto-transferred monthly.",
          scenario: "Freelancer automates savings after each client payment.",
          keyTakeaway: "Automation makes saving effortless.",
          conclusion: '"Pay yourself first" ensures financial growth.',
        },
      },
      {
        title: "Cut Small Daily Expenses",
        content: {
          definition: "Reduce frequent small spending.",
          whyRequired: "Small costs add up to big amounts.",
          whatItDoes: "Frees money for savings.",
          howItWorks: "Replace costly habits with cheaper alternatives.",
          example: "₹150 coffee daily = ₹4,500/month. Homemade coffee saves ₹4,000.",
          scenario: "Student cuts snacks, saves ₹2,000/month, invests in mutual funds.",
          keyTakeaway: "Small sacrifices lead to big savings.",
          conclusion: "Mindful spending accelerates financial independence.",
        },
      },
      {
        title: "Build an Emergency Fund",
        content: {
          definition: "Savings for unexpected events.",
          whyRequired: "Protects against job loss, medical bills, or emergencies.",
          whatItDoes: "Provides financial security.",
          howItWorks: "Save 3–6 months of expenses.",
          example: "Monthly expenses ₹15,000 → Emergency fund ₹45,000–₹90,000.",
          scenario: "Professional loses job but survives 4 months without debt.",
          keyTakeaway: "Emergency funds prevent financial crises.",
          conclusion: "Safety nets are essential for peace of mind.",
        },
      },
    ],
  },
  {
    icon: BarChart3,
    title: "Expense Tracking",
    introduction: "Tracking expenses reveals spending habits and helps improve discipline.",
    items: [
      {
        title: "Record Daily Expenses Easily",
        content: {
          definition: "Logging every expense.",
          whyRequired: "Shows where money goes.",
          whatItDoes: "Identifies hidden spending.",
          howItWorks: "Enter expenses in app daily.",
          example: "₹50 bus fare, ₹200 lunch, ₹500 shopping.",
          scenario: "Student realizes ₹3,000/month spent on snacks.",
          keyTakeaway: "Awareness is the first step to control.",
          conclusion: "Daily tracking prevents wasteful spending.",
        },
      },
      {
        title: "Categorize Spending (Essentials vs. Non-Essentials)",
        content: {
          definition: "Separate needs from wants.",
          whyRequired: "Helps prioritize spending.",
          whatItDoes: "Shows balance between essentials and luxuries.",
          howItWorks: 'Tag expenses as "essential" or "non-essential."',
          example: "Essentials ₹12,000; Non-essentials ₹5,000.",
          scenario: "Worker cuts online shopping after seeing high non-essential spending.",
          keyTakeaway: "Categorization reveals priorities.",
          conclusion: "Smart categorization improves financial discipline.",
        },
      },
      {
        title: "Weekly and Monthly Reports",
        content: {
          definition: "Summaries of spending patterns.",
          whyRequired: "Helps track progress.",
          whatItDoes: "Shows trends over time.",
          howItWorks: "App generates reports automatically.",
          example: "Weekly report shows ₹2,000 food, ₹1,000 travel.",
          scenario: "Student notices weekend spending spikes, adjusts budget.",
          keyTakeaway: "Reports highlight problem areas.",
          conclusion: "Regular reviews improve financial habits.",
        },
      },
      {
        title: "Compare Spending Habits Over Time",
        content: {
          definition: "Analyzing changes in spending.",
          whyRequired: "Shows improvement or decline.",
          whatItDoes: "Motivates better habits.",
          howItWorks: "Compare current vs. past reports.",
          example: "Last month savings ₹3,000; this month ₹4,500.",
          scenario: "Entrepreneur sees steady improvement, feels motivated.",
          keyTakeaway: "Tracking progress builds confidence.",
          conclusion: "Comparing habits ensures long-term discipline.",
        },
      },
    ],
  },
];

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
  },
  {
    icon: GraduationCap,
    title: "Scholarships",
    description: "Government & NGO opportunities with eligibility info and application guidance.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Resources, success stories, and branding tips for aspiring entrepreneurs.",
    color: "from-purple-500 to-pink-400",
  },
];

export function FeaturesSection() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [expandedSubItem, setExpandedSubItem] = useState<string | null>(null);

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
                  setExpandedFeature(expandedFeature === feature.title ? null : feature.title);
                  setExpandedSubItem(null);
                }
              }}
            >
              {/* Icon */}
              <div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                onClick={() => {
                  if (feature.hasExpanded) {
                    setExpandedFeature(expandedFeature === feature.title ? null : feature.title);
                    setExpandedSubItem(null);
                  }
                }}
              >
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <div 
                className="flex items-center gap-2 mb-3"
                onClick={() => {
                  if (feature.hasExpanded) {
                    setExpandedFeature(expandedFeature === feature.title ? null : feature.title);
                    setExpandedSubItem(null);
                  }
                }}
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
                onClick={() => {
                  if (feature.hasExpanded) {
                    setExpandedFeature(expandedFeature === feature.title ? null : feature.title);
                    setExpandedSubItem(null);
                  }
                }}
              >
                {feature.description}
              </p>

              {/* Expanded Content for Money Management */}
              {feature.hasExpanded && expandedFeature === feature.title && (
                <div className="mt-6 space-y-6 animate-fade-in">
                  {moneyManagementSubs.map((sub, subIndex) => (
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
                          const itemKey = `${subIndex + 1}.${itemIndex + 1}`;
                          const isExpanded = expandedSubItem === itemKey;
                          
                          return (
                            <li key={itemIndex} className="text-sm">
                              <button
                                className="flex items-start gap-2 w-full text-left hover:bg-muted/50 rounded-lg p-2 -ml-2 transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedSubItem(isExpanded ? null : itemKey);
                                }}
                              >
                                <ChevronRight 
                                  className={`w-4 h-4 text-primary shrink-0 mt-0.5 transition-transform duration-200 ${
                                    isExpanded ? "rotate-90" : ""
                                  }`}
                                />
                                <span className="text-primary font-medium shrink-0">
                                  {itemKey}
                                </span>
                                <span className="text-foreground font-medium">
                                  {item.title}
                                </span>
                              </button>
                              
                              {isExpanded && (
                                <div className="ml-6 mt-3 p-4 bg-muted/30 rounded-lg border border-border/50 space-y-3 animate-fade-in">
                                  <div>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Definition</span>
                                    <p className="text-muted-foreground mt-1">{item.content.definition}</p>
                                  </div>
                                  <div>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Why Required</span>
                                    <p className="text-muted-foreground mt-1">{item.content.whyRequired}</p>
                                  </div>
                                  <div>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">What It Does</span>
                                    <p className="text-muted-foreground mt-1">{item.content.whatItDoes}</p>
                                  </div>
                                  <div>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">How It Works</span>
                                    <p className="text-muted-foreground mt-1">{item.content.howItWorks}</p>
                                  </div>
                                  <div>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Example</span>
                                    <p className="text-muted-foreground mt-1">{item.content.example}</p>
                                  </div>
                                  <div>
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">Scenario</span>
                                    <p className="text-muted-foreground mt-1">{item.content.scenario}</p>
                                  </div>
                                  <div className="pt-2 border-t border-border/50">
                                    <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">Key Takeaway</span>
                                    <p className="text-foreground font-medium mt-1">{item.content.keyTakeaway}</p>
                                  </div>
                                  <div>
                                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">Conclusion</span>
                                    <p className="text-foreground mt-1">{item.content.conclusion}</p>
                                  </div>
                                </div>
                              )}
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
