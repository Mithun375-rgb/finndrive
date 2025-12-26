import { Wallet, TrendingUp, GraduationCap, Rocket, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { featureSubsData, SubItem, SubCategory } from "@/data/featureData";

const featureSubsData: Record<string, SubCategory[]> = {
  "Money Management": [
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
  ],
  "Investments": [
    {
      icon: PieChart,
      title: "Investment Basics",
      introduction: "Understanding investment fundamentals is crucial for building long-term wealth. Start early and let compound interest work for you.",
      items: [
        {
          title: "Understanding Risk vs. Return",
          content: {
            definition: "The relationship between potential profit and the possibility of losing money.",
            whyRequired: "Helps make informed investment decisions based on your risk tolerance.",
            whatItDoes: "Guides you to choose investments that match your comfort level.",
            howItWorks: "Higher potential returns usually come with higher risk; lower risk means lower returns.",
            example: "Fixed deposits offer 6% with low risk; stocks may offer 15% but with higher volatility.",
            scenario: "A conservative investor chooses debt funds over stocks for stable, lower returns.",
            keyTakeaway: "Never invest in something you don't understand.",
            conclusion: "Balance risk and return based on your goals and timeline.",
          },
        },
        {
          title: "Power of Compound Interest",
          content: {
            definition: "Earning interest on both your principal and accumulated interest.",
            whyRequired: "Multiplies wealth exponentially over time.",
            whatItDoes: "Makes your money work harder the longer you invest.",
            howItWorks: "Interest earned is added to principal, and future interest is calculated on the new total.",
            example: "₹10,000 at 10% compounds to ₹25,937 in 10 years without adding more money.",
            scenario: "Starting at 22 vs. 32 can mean twice the retirement corpus.",
            keyTakeaway: "Start investing early—time is your greatest asset.",
            conclusion: "Compound interest is the eighth wonder of the world.",
          },
        },
        {
          title: "Diversification Strategies",
          content: {
            definition: "Spreading investments across different asset classes to reduce risk.",
            whyRequired: "Protects against total loss if one investment fails.",
            whatItDoes: "Balances portfolio performance across market conditions.",
            howItWorks: "Invest in stocks, bonds, real estate, gold, and other assets.",
            example: "Portfolio: 50% stocks, 30% bonds, 10% gold, 10% real estate.",
            scenario: "When stocks fall, gold and bonds may rise, stabilizing overall returns.",
            keyTakeaway: "Don't put all your eggs in one basket.",
            conclusion: "Diversification is the only free lunch in investing.",
          },
        },
        {
          title: "Setting Investment Goals",
          content: {
            definition: "Defining clear financial objectives with timelines.",
            whyRequired: "Gives direction and purpose to your investments.",
            whatItDoes: "Helps choose the right investment vehicles for each goal.",
            howItWorks: "Identify goals (retirement, home, education), set timelines, calculate required amounts.",
            example: "Goal: ₹50 lakh for home in 10 years → Need to invest ₹25,000/month at 12% return.",
            scenario: "Clear goals prevent emotional decisions during market volatility.",
            keyTakeaway: "Goals transform investing from gambling to planning.",
            conclusion: "Without goals, you're just speculating.",
          },
        },
      ],
    },
    {
      icon: LineChart,
      title: "Investment Options",
      introduction: "Multiple investment vehicles exist for different goals, risk appetites, and time horizons. Choose wisely based on your needs.",
      items: [
        {
          title: "Mutual Funds for Beginners",
          content: {
            definition: "Professionally managed pools of money from multiple investors.",
            whyRequired: "Provides diversification and expert management for small investors.",
            whatItDoes: "Allows you to invest in stocks/bonds without picking individual securities.",
            howItWorks: "Choose a fund type (equity, debt, hybrid), invest via SIP or lump sum.",
            example: "₹5,000/month SIP in an index fund for 20 years can grow to ₹75+ lakhs.",
            scenario: "New investor starts with ₹500/month SIP and gradually increases.",
            keyTakeaway: "SIPs make investing disciplined and affordable.",
            conclusion: "Mutual funds are ideal for beginners to start their wealth journey.",
          },
        },
        {
          title: "Stock Market Fundamentals",
          content: {
            definition: "Buying ownership shares in publicly traded companies.",
            whyRequired: "Offers highest long-term growth potential among asset classes.",
            whatItDoes: "Lets you participate in company profits through price appreciation and dividends.",
            howItWorks: "Open a demat account, research companies, buy shares through a broker.",
            example: "₹10,000 invested in Infosys in 2000 would be worth ₹5+ lakhs today.",
            scenario: "Investor researches company fundamentals before buying, avoiding speculation.",
            keyTakeaway: "Invest in businesses you understand.",
            conclusion: "Stock investing requires patience, research, and emotional discipline.",
          },
        },
        {
          title: "Fixed Income Securities",
          content: {
            definition: "Investments that pay fixed interest at regular intervals.",
            whyRequired: "Provides stable, predictable income with lower risk.",
            whatItDoes: "Preserves capital while generating steady returns.",
            howItWorks: "Invest in FDs, bonds, PPF, or debt mutual funds.",
            example: "PPF at 7.1% interest with tax benefits; ₹1.5 lakh/year limit.",
            scenario: "Retiree invests in Senior Citizen Savings Scheme for regular income.",
            keyTakeaway: "Fixed income provides stability in volatile markets.",
            conclusion: "Every portfolio needs some fixed income for balance.",
          },
        },
        {
          title: "Gold and Alternative Investments",
          content: {
            definition: "Non-traditional assets beyond stocks and bonds.",
            whyRequired: "Provides hedge against inflation and market crashes.",
            whatItDoes: "Adds another layer of diversification to your portfolio.",
            howItWorks: "Invest through Sovereign Gold Bonds, Gold ETFs, or REITs.",
            example: "Gold returned 11% annually over the last 20 years in India.",
            scenario: "During 2020 market crash, gold prices rose 25%, protecting portfolios.",
            keyTakeaway: "5-10% allocation to gold provides insurance for your portfolio.",
            conclusion: "Alternative investments smooth out overall portfolio volatility.",
          },
        },
      ],
    },
    {
      icon: Building,
      title: "Advanced Strategies",
      introduction: "As you grow more confident, explore advanced strategies to optimize returns and minimize taxes.",
      items: [
        {
          title: "Tax-Saving Investments",
          content: {
            definition: "Investments that provide tax deductions under various sections.",
            whyRequired: "Reduces tax liability while building wealth.",
            whatItDoes: "Saves up to ₹46,800 in taxes annually (₹1.5 lakh under 80C).",
            howItWorks: "Invest in ELSS, PPF, NPS, or tax-saving FDs.",
            example: "ELSS funds offer equity returns with 3-year lock-in and tax benefits.",
            scenario: "Young professional invests ₹1.5 lakh in ELSS, saves ₹46,800 tax, earns 12% returns.",
            keyTakeaway: "Tax saved is tax earned—plan investments for tax efficiency.",
            conclusion: "Smart tax planning accelerates wealth creation.",
          },
        },
        {
          title: "Retirement Planning",
          content: {
            definition: "Building a corpus to maintain lifestyle after stopping work.",
            whyRequired: "Ensures financial independence in old age without depending on others.",
            whatItDoes: "Creates passive income streams for retirement years.",
            howItWorks: "Start early, invest consistently, increase with income, use NPS and EPF.",
            example: "₹10,000/month from age 25 at 12% = ₹3.5 crore by 60.",
            scenario: "Late starter at 40 needs ₹50,000/month to reach the same goal.",
            keyTakeaway: "The best time to start retirement planning was yesterday.",
            conclusion: "Retirement planning is non-negotiable for financial security.",
          },
        },
        {
          title: "Portfolio Rebalancing",
          content: {
            definition: "Periodically adjusting asset allocation to maintain target mix.",
            whyRequired: "Prevents overexposure to any single asset class.",
            whatItDoes: "Maintains risk levels and locks in gains from outperformers.",
            howItWorks: "Review portfolio annually; sell high, buy low to restore original allocation.",
            example: "If stocks grew from 60% to 75%, sell some to buy bonds back to 60-40.",
            scenario: "Investor rebalances after bull run, protecting gains before correction.",
            keyTakeaway: "Rebalancing enforces discipline of buying low and selling high.",
            conclusion: "Regular rebalancing is key to long-term portfolio health.",
          },
        },
        {
          title: "Emergency Fund Before Investing",
          content: {
            definition: "Liquid savings covering 6 months of expenses before starting investments.",
            whyRequired: "Prevents forced selling of investments during emergencies.",
            whatItDoes: "Provides financial cushion for unexpected expenses.",
            howItWorks: "Keep 6 months' expenses in savings account or liquid fund.",
            example: "Monthly expenses ₹30,000 → Emergency fund ₹1.8 lakh minimum.",
            scenario: "Job loss doesn't force selling stocks at loss because emergency fund exists.",
            keyTakeaway: "Emergency fund is the foundation of all investing.",
            conclusion: "Never invest what you might need in the short term.",
          },
        },
      ],
    },
  ],
  "Scholarships": [
    {
      icon: Search,
      title: "Finding Scholarships",
      introduction: "Thousands of scholarships go unclaimed every year. Knowing where to look is half the battle won.",
      items: [
        {
          title: "Government Scholarship Portals",
          content: {
            definition: "Official platforms listing state and central government scholarships.",
            whyRequired: "Largest source of financial aid with genuine, verified opportunities.",
            whatItDoes: "Connects students with merit and need-based scholarships.",
            howItWorks: "Register on National Scholarship Portal (NSP), apply before deadlines.",
            example: "Central Sector Scheme offers ₹12,000/year for top 82,000 students.",
            scenario: "First-gen college student receives full tuition through PM Scholarship.",
            keyTakeaway: "Government scholarships are often the most substantial and reliable.",
            conclusion: "Check NSP regularly—new schemes are added frequently.",
          },
        },
        {
          title: "Private and Corporate Scholarships",
          content: {
            definition: "Funding from companies, foundations, and NGOs.",
            whyRequired: "Additional sources beyond government aid with diverse criteria.",
            whatItDoes: "Provides funding based on merit, community, field of study, or creativity.",
            howItWorks: "Search company websites, scholarship aggregators, and NGO listings.",
            example: "Tata Trusts, Narotam Sekhsaria, and Google offer significant scholarships.",
            scenario: "Engineering student wins corporate scholarship for outstanding project.",
            keyTakeaway: "Cast a wide net—apply to multiple private scholarships.",
            conclusion: "Private scholarships can cover what government aid doesn't.",
          },
        },
        {
          title: "International Scholarship Opportunities",
          content: {
            definition: "Scholarships for studying abroad or from foreign organizations.",
            whyRequired: "Enables world-class education without financial burden.",
            whatItDoes: "Covers tuition, living expenses, and travel for overseas study.",
            howItWorks: "Research university-specific and country-specific scholarships; apply early.",
            example: "Fulbright, Chevening, and DAAD cover full expenses for deserving students.",
            scenario: "Village student studies at Oxford on Rhodes Scholarship.",
            keyTakeaway: "International scholarships value unique stories and perspectives.",
            conclusion: "Don't limit yourself—the world offers incredible opportunities.",
          },
        },
        {
          title: "Scholarship Search Strategies",
          content: {
            definition: "Systematic approach to finding and applying for scholarships.",
            whyRequired: "Maximizes chances of securing financial aid.",
            whatItDoes: "Creates a pipeline of opportunities matching your profile.",
            howItWorks: "Use aggregator sites, set alerts, create a scholarship calendar.",
            example: "Buddy4Study, Vidyasaarathi, and ScholarshipPortal list 500+ options.",
            scenario: "Organized student applies to 20 scholarships, wins 3.",
            keyTakeaway: "Treat scholarship hunting like a part-time job.",
            conclusion: "Persistence and organization lead to scholarship success.",
          },
        },
      ],
    },
    {
      icon: BookOpen,
      title: "Application Process",
      introduction: "A strong application can make the difference between winning and losing a scholarship.",
      items: [
        {
          title: "Crafting Winning Essays",
          content: {
            definition: "Personal statements that showcase your story and potential.",
            whyRequired: "Essays differentiate you from equally qualified candidates.",
            whatItDoes: "Tells your unique story and demonstrates fit with scholarship values.",
            howItWorks: "Understand the prompt, share authentic experiences, show growth and goals.",
            example: "Essay about overcoming adversity and helping community wins major scholarship.",
            scenario: "Average grades student wins based on compelling personal story.",
            keyTakeaway: "Be authentic—committees can spot generic essays.",
            conclusion: "Your essay is your voice; make it memorable.",
          },
        },
        {
          title: "Gathering Strong Recommendations",
          content: {
            definition: "Letters from teachers, mentors, or employers vouching for you.",
            whyRequired: "Third-party validation of your abilities and character.",
            whatItDoes: "Provides credible evidence of your achievements and potential.",
            howItWorks: "Choose recommenders who know you well; give them time and context.",
            example: "Teacher's detailed letter about student's curiosity wins scholarship.",
            scenario: "Student provides recommender with resume and scholarship details for strong letter.",
            keyTakeaway: "Give recommenders at least 3 weeks and relevant information.",
            conclusion: "Strong recommendations can tip close decisions in your favor.",
          },
        },
        {
          title: "Document Preparation",
          content: {
            definition: "Organizing all required certificates, transcripts, and proofs.",
            whyRequired: "Incomplete applications are often rejected outright.",
            whatItDoes: "Ensures smooth application submission without last-minute panic.",
            howItWorks: "Create a checklist; scan and organize documents digitally.",
            example: "Keep income certificates, mark sheets, caste certificates, and photos ready.",
            scenario: "Prepared student submits early while others scramble at deadline.",
            keyTakeaway: "Preparation prevents poor performance.",
            conclusion: "Organized documents show professionalism and seriousness.",
          },
        },
        {
          title: "Interview Preparation",
          content: {
            definition: "Final round where shortlisted candidates meet the selection panel.",
            whyRequired: "Interviews assess personality, communication, and genuine interest.",
            whatItDoes: "Gives you chance to expand on your application and ask questions.",
            howItWorks: "Research the scholarship, practice common questions, prepare questions to ask.",
            example: "Student who researched scholarship mission impresses panel.",
            scenario: "Nervous candidate calms down with thorough preparation and practice.",
            keyTakeaway: "Confidence comes from preparation.",
            conclusion: "A good interview can overcome weaknesses elsewhere in your application.",
          },
        },
      ],
    },
    {
      icon: Award,
      title: "Maximizing Success",
      introduction: "Strategic planning and smart execution dramatically increase your scholarship success rate.",
      items: [
        {
          title: "Creating a Scholarship Calendar",
          content: {
            definition: "Tracking deadlines, requirements, and application status.",
            whyRequired: "Missed deadlines mean missed opportunities.",
            whatItDoes: "Keeps you organized and ensures timely applications.",
            howItWorks: "Use spreadsheet or app to track all scholarships with deadlines and status.",
            example: "Calendar shows 5 scholarships due in March—plan essays in February.",
            scenario: "Student applies to 15 scholarships systematically instead of randomly.",
            keyTakeaway: "Organization is the scholarship hunter's best friend.",
            conclusion: "A calendar turns chaos into a manageable process.",
          },
        },
        {
          title: "Building a Strong Profile",
          content: {
            definition: "Developing academics, extracurriculars, and leadership for scholarship appeal.",
            whyRequired: "Holistic profile stands out over grades-only applications.",
            whatItDoes: "Demonstrates you're a well-rounded candidate worth investing in.",
            howItWorks: "Balance studies with volunteering, sports, clubs, and community work.",
            example: "Student with 80% but strong community service wins over 95% scorer.",
            scenario: "Starting a school recycling program becomes winning essay topic.",
            keyTakeaway: "Start building your profile from Class 9 onwards.",
            conclusion: "Scholarships reward potential and character, not just marks.",
          },
        },
        {
          title: "Understanding Eligibility Criteria",
          content: {
            definition: "Knowing exact requirements before applying.",
            whyRequired: "Saves time by focusing on scholarships you qualify for.",
            whatItDoes: "Ensures you don't waste effort on ineligible applications.",
            howItWorks: "Read criteria carefully—income limits, category, course, location, etc.",
            example: "Some scholarships require family income below ₹8 lakh; others have no limit.",
            scenario: "Student discovers she qualifies for women-in-STEM scholarship she didn't know about.",
            keyTakeaway: "Read the fine print—eligibility is non-negotiable.",
            conclusion: "Smart targeting beats random applying every time.",
          },
        },
        {
          title: "Renewal and Continuation",
          content: {
            definition: "Maintaining scholarship benefits throughout your education.",
            whyRequired: "Most scholarships require maintaining certain conditions.",
            whatItDoes: "Ensures continuous funding for your entire degree.",
            howItWorks: "Maintain required GPA, submit progress reports, meet other conditions.",
            example: "INSPIRE scholarship requires 60% marks each year for renewal.",
            scenario: "Student focuses on grades in second year to keep scholarship.",
            keyTakeaway: "Winning is half the battle; keeping it is equally important.",
            conclusion: "Plan for the full duration, not just the first year.",
          },
        },
      ],
    },
  ],
  "Startups": [
    {
      icon: Zap,
      title: "Ideation & Validation",
      introduction: "Every successful startup begins with a problem worth solving. Learn to identify and validate ideas before building.",
      items: [
        {
          title: "Identifying Problems Worth Solving",
          content: {
            definition: "Finding pain points that people will pay to solve.",
            whyRequired: "Solutions without problems fail; problems create opportunities.",
            whatItDoes: "Ensures you build something people actually need.",
            howItWorks: "Observe daily frustrations, talk to potential customers, analyze market gaps.",
            example: "Ola founders noticed difficulty booking autos in Bangalore.",
            scenario: "Student frustrated with hostel food delivery starts campus food app.",
            keyTakeaway: "The best ideas solve your own problems.",
            conclusion: "Start with problems, not solutions.",
          },
        },
        {
          title: "Market Research Fundamentals",
          content: {
            definition: "Studying your target market, competitors, and industry trends.",
            whyRequired: "Understanding the landscape prevents costly mistakes.",
            whatItDoes: "Reveals market size, customer segments, and competitive advantages.",
            howItWorks: "Analyze competitors, survey potential customers, study industry reports.",
            example: "Indian edtech market grew to $6 billion—founders who researched early benefited.",
            scenario: "Founder discovers untapped rural market segment through research.",
            keyTakeaway: "Research reduces risk and reveals opportunities.",
            conclusion: "Know your market better than anyone else.",
          },
        },
        {
          title: "Building an MVP",
          content: {
            definition: "Minimum Viable Product—the simplest version that solves the core problem.",
            whyRequired: "Tests assumptions quickly without wasting resources.",
            whatItDoes: "Gets real user feedback before building full product.",
            howItWorks: "Identify core feature, build quickly, launch to early users, iterate.",
            example: "Dropbox started with just a video demo before building the product.",
            scenario: "Food delivery app starts with WhatsApp orders before building an app.",
            keyTakeaway: "Done is better than perfect.",
            conclusion: "Launch early, learn fast, improve continuously.",
          },
        },
        {
          title: "Customer Validation Techniques",
          content: {
            definition: "Proving that customers will pay for your solution.",
            whyRequired: "Interest doesn't equal purchase; validation proves demand.",
            whatItDoes: "Confirms product-market fit before scaling.",
            howItWorks: "Get pre-orders, run pilots, measure willingness to pay.",
            example: "Razorpay validated by getting first 10 paying customers before raising funds.",
            scenario: "Founder gets 50 pre-orders through landing page before building product.",
            keyTakeaway: "Paying customers are the only true validation.",
            conclusion: "Validate with wallets, not words.",
          },
        },
      ],
    },
    {
      icon: Users,
      title: "Building Your Team",
      introduction: "Great startups are built by great teams. Finding the right co-founders and early hires is crucial.",
      items: [
        {
          title: "Finding the Right Co-founder",
          content: {
            definition: "Partnering with someone who complements your skills and shares your vision.",
            whyRequired: "Startups are hard; the right partner doubles your chances.",
            whatItDoes: "Brings complementary skills, shared burden, and accountability.",
            howItWorks: "Look for skill gaps, test working together, discuss equity and roles early.",
            example: "Flipkart's Sachin and Binny combined tech and operations expertise.",
            scenario: "Technical founder partners with sales expert to balance the team.",
            keyTakeaway: "Choose co-founders like a marriage—for the long term.",
            conclusion: "The right co-founder is worth more than any investor.",
          },
        },
        {
          title: "Building Your First Team",
          content: {
            definition: "Hiring early employees who can wear multiple hats.",
            whyRequired: "First hires shape culture and determine execution speed.",
            whatItDoes: "Turns your vision into reality with limited resources.",
            howItWorks: "Hire for attitude and adaptability; offer equity for lower salary.",
            example: "Zerodha built with just 5 people for first 3 years.",
            scenario: "Founder hires passionate intern who becomes key team member.",
            keyTakeaway: "Hire slow, fire fast.",
            conclusion: "A-players attract A-players; first hires define your culture.",
          },
        },
        {
          title: "Equity Distribution",
          content: {
            definition: "Dividing ownership among founders and early team members.",
            whyRequired: "Fair equity prevents future conflicts and motivates the team.",
            whatItDoes: "Aligns everyone's interests with company success.",
            howItWorks: "Use vesting schedules, consider contribution levels, plan for future hires.",
            example: "Standard: 4-year vesting with 1-year cliff for all founders and employees.",
            scenario: "Founders use 60-40 split based on idea origin and execution roles.",
            keyTakeaway: "Have the equity conversation early and in writing.",
            conclusion: "Clear equity agreements prevent painful disputes later.",
          },
        },
        {
          title: "Creating Startup Culture",
          content: {
            definition: "Establishing values, norms, and working style of your company.",
            whyRequired: "Culture determines how problems are solved and decisions made.",
            whatItDoes: "Attracts right talent and guides behavior without micromanagement.",
            howItWorks: "Define core values, lead by example, reinforce through actions.",
            example: "Zomato's culture of transparency includes sharing board decks with all employees.",
            scenario: "Remote-first startup creates strong culture through regular virtual rituals.",
            keyTakeaway: "Culture is what people do when no one is watching.",
            conclusion: "Build culture intentionally, or it builds itself—possibly badly.",
          },
        },
      ],
    },
    {
      icon: Target,
      title: "Funding & Growth",
      introduction: "Understanding funding options and growth strategies helps you scale sustainably.",
      items: [
        {
          title: "Bootstrapping vs. Raising Funds",
          content: {
            definition: "Growing with your own revenue vs. taking external investment.",
            whyRequired: "Funding choice affects control, speed, and exit options.",
            whatItDoes: "Determines how fast you can grow and how much equity you keep.",
            howItWorks: "Bootstrap for profitability; raise funds for faster growth.",
            example: "Zerodha bootstrapped to ₹7,000 crore valuation; Byju's raised billions.",
            scenario: "SaaS founder reaches ₹1 crore ARR without any external funding.",
            keyTakeaway: "Raising money is not success; building a sustainable business is.",
            conclusion: "Choose the path that fits your business and ambition.",
          },
        },
        {
          title: "Pitching to Investors",
          content: {
            definition: "Presenting your startup to potential investors for funding.",
            whyRequired: "Good pitching opens doors to capital, mentorship, and networks.",
            whatItDoes: "Convinces investors to bet on your team and vision.",
            howItWorks: "Craft compelling story, show traction, demonstrate market opportunity.",
            example: "Airbnb's pitch deck is studied worldwide for its clarity.",
            scenario: "Founder practices 50 times before nailing the investor pitch.",
            keyTakeaway: "Investors invest in teams, not just ideas.",
            conclusion: "Your pitch should answer: Why this? Why you? Why now?",
          },
        },
        {
          title: "Growth Hacking Strategies",
          content: {
            definition: "Creative, low-cost tactics to acquire users rapidly.",
            whyRequired: "Limited budgets require innovative marketing approaches.",
            whatItDoes: "Achieves exponential growth without massive marketing spend.",
            howItWorks: "Leverage virality, referrals, content marketing, and product-led growth.",
            example: "Hotmail grew by adding 'Get free email' in every email signature.",
            scenario: "Referral program where both parties get ₹100 drives 10x user growth.",
            keyTakeaway: "Think distribution from day one.",
            conclusion: "The best growth hack is a product people want to share.",
          },
        },
        {
          title: "Government Startup Schemes",
          content: {
            definition: "Government initiatives supporting startups with funding and benefits.",
            whyRequired: "Free money and support reduce early-stage risk.",
            whatItDoes: "Provides funding, tax benefits, and infrastructure support.",
            howItWorks: "Register on Startup India, apply for relevant schemes.",
            example: "Startup India offers tax holiday, self-certification, and fund of funds.",
            scenario: "Registered startup gets 3-year tax exemption and government contracts.",
            keyTakeaway: "Don't leave government support on the table.",
            conclusion: "Leverage all available support systems for maximum runway.",
          },
        },
      ],
    },
  ],
};

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