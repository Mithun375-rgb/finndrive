import { FileText, Lightbulb, BarChart3, PieChart, LineChart, Building, Award, Search, BookOpen, Zap, Users, Target, Briefcase, Palette, Globe } from "lucide-react";

export interface SubItem {
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

export interface SubCategory {
  icon: typeof FileText;
  title: string;
  introduction: string;
  items: SubItem[];
}

export const featureSubsData: Record<string, SubCategory[]> = {
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
            howItWorks: "Calculate required corpus, invest regularly in EPF, PPF, NPS, and equity.",
            example: "₹1 crore corpus at 8% withdrawal = ₹8 lakh/year retirement income.",
            scenario: "Starting at 25 with ₹5,000/month reaches ₹1 crore by 55.",
            keyTakeaway: "The earlier you start, the easier retirement becomes.",
            conclusion: "Retirement planning is a marathon, not a sprint.",
          },
        },
        {
          title: "Portfolio Rebalancing",
          content: {
            definition: "Periodically adjusting asset allocation to maintain target mix.",
            whyRequired: "Market movements can skew your portfolio away from goals.",
            whatItDoes: "Maintains consistent risk level and disciplined investing.",
            howItWorks: "Review annually; sell overperformers, buy underperformers.",
            example: "60-40 stock-bond portfolio becomes 70-30 after bull run; rebalance back.",
            scenario: "Investor sells 10% stocks at peak, buys bonds, avoids crash losses.",
            keyTakeaway: "Rebalancing enforces buy-low, sell-high discipline.",
            conclusion: "Regular rebalancing improves long-term returns and reduces risk.",
          },
        },
        {
          title: "Understanding Market Cycles",
          content: {
            definition: "Recognizing recurring patterns of market expansion and contraction.",
            whyRequired: "Helps avoid panic selling and greedy buying.",
            whatItDoes: "Provides perspective during market volatility.",
            howItWorks: "Study historical patterns; markets cycle through fear and greed.",
            example: "Bear markets average 1-2 years; bull markets average 5-7 years.",
            scenario: "Investor stays invested during 2020 crash, recovers fully by 2021.",
            keyTakeaway: "Time in the market beats timing the market.",
            conclusion: "Understanding cycles builds patience and long-term thinking.",
          },
        },
      ],
    },
  ],
  "Scholarships": [
    {
      icon: Award,
      title: "Finding Scholarships",
      introduction: "Scholarships provide free money for education. Knowing where to look and how to apply increases your chances significantly.",
      items: [
        {
          title: "Government Scholarship Programs",
          content: {
            definition: "Financial aid programs funded by central and state governments.",
            whyRequired: "Covers tuition, books, and living expenses for deserving students.",
            whatItDoes: "Makes higher education accessible to economically weaker sections.",
            howItWorks: "Apply through National Scholarship Portal or state portals with required documents.",
            example: "Post-Matric Scholarship for SC/ST students covers full tuition.",
            scenario: "First-generation college student gets ₹50,000/year scholarship.",
            keyTakeaway: "Check eligibility criteria carefully before applying.",
            conclusion: "Government scholarships are the most reliable source of education funding.",
          },
        },
        {
          title: "Private & Corporate Scholarships",
          content: {
            definition: "Scholarships offered by companies, foundations, and NGOs.",
            whyRequired: "Additional funding sources beyond government programs.",
            whatItDoes: "Supports students based on merit, need, or specific criteria.",
            howItWorks: "Research opportunities, prepare strong applications, meet deadlines.",
            example: "Tata Scholarship covers tuition at select universities.",
            scenario: "Engineering student receives ₹2 lakh from corporate CSR program.",
            keyTakeaway: "Apply to multiple scholarships to increase chances.",
            conclusion: "Private scholarships reward excellence and potential.",
          },
        },
        {
          title: "Merit-Based Scholarships",
          content: {
            definition: "Awards based on academic or extracurricular excellence.",
            whyRequired: "Rewards hard work and talent regardless of financial status.",
            whatItDoes: "Provides recognition and financial support for top performers.",
            howItWorks: "Maintain high grades, participate in competitions, build strong profile.",
            example: "NTSE scholarship provides ₹1,250/month for top 1000 students.",
            scenario: "Class 10 topper qualifies for prestigious national scholarship.",
            keyTakeaway: "Consistent performance opens multiple scholarship doors.",
            conclusion: "Merit scholarships motivate academic excellence.",
          },
        },
        {
          title: "Need-Based Financial Aid",
          content: {
            definition: "Support based on family income and financial circumstances.",
            whyRequired: "Ensures talented students aren't held back by poverty.",
            whatItDoes: "Covers costs for students who cannot afford education.",
            howItWorks: "Submit income proof, demonstrate financial need, apply early.",
            example: "College provides 100% fee waiver for students below ₹2.5 lakh income.",
            scenario: "Rural student attends IIT with full financial aid package.",
            keyTakeaway: "Don't let finances stop you from applying to top colleges.",
            conclusion: "Need-based aid makes quality education accessible to all.",
          },
        },
      ],
    },
    {
      icon: Search,
      title: "Application Process",
      introduction: "A well-prepared application significantly increases your chances. Pay attention to every detail.",
      items: [
        {
          title: "Preparing Required Documents",
          content: {
            definition: "Gathering all necessary papers for scholarship applications.",
            whyRequired: "Incomplete applications are rejected immediately.",
            whatItDoes: "Demonstrates eligibility and seriousness of intent.",
            howItWorks: "Collect certificates, income proof, ID proof, and academic records.",
            example: "Documents needed: Marksheets, Aadhaar, income certificate, bank details.",
            scenario: "Student creates organized folder with all documents ready.",
            keyTakeaway: "Keep all documents updated and easily accessible.",
            conclusion: "Preparation is 80% of scholarship success.",
          },
        },
        {
          title: "Writing Winning Essays",
          content: {
            definition: "Personal statements that showcase your story and potential.",
            whyRequired: "Essays differentiate you from other qualified applicants.",
            whatItDoes: "Communicates your goals, challenges, and why you deserve the scholarship.",
            howItWorks: "Be authentic, specific, and connect your story to the scholarship's mission.",
            example: "Essay about overcoming financial hardship to pursue engineering dreams.",
            scenario: "Student rewrites essay 5 times with feedback, wins scholarship.",
            keyTakeaway: "Show, don't tell—use specific examples and stories.",
            conclusion: "A compelling essay can overcome weaker academic credentials.",
          },
        },
        {
          title: "Meeting Deadlines",
          content: {
            definition: "Submitting applications before the specified closing date.",
            whyRequired: "Late applications are never considered, regardless of merit.",
            whatItDoes: "Ensures your application enters the evaluation process.",
            howItWorks: "Create calendar reminders, submit early, account for technical issues.",
            example: "National Scholarship Portal opens August, closes October.",
            scenario: "Student submits 1 week early, avoids last-minute portal crash.",
            keyTakeaway: "Treat deadlines as two weeks earlier than stated.",
            conclusion: "Timeliness shows discipline and genuine interest.",
          },
        },
        {
          title: "Interview Preparation",
          content: {
            definition: "Preparing for scholarship selection interviews.",
            whyRequired: "Interviews assess personality, communication, and fit.",
            whatItDoes: "Demonstrates you're more than just grades on paper.",
            howItWorks: "Research the organization, practice common questions, dress professionally.",
            example: "Questions: Why this scholarship? What are your career goals? Challenges faced?",
            scenario: "Student practices with mentor, confidently answers tough questions.",
            keyTakeaway: "Authenticity and preparation together create confidence.",
            conclusion: "Good interviews convert shortlisted candidates into winners.",
          },
        },
      ],
    },
    {
      icon: BookOpen,
      title: "Maximizing Success",
      introduction: "Strategic planning and continuous effort maximize your scholarship success rate.",
      items: [
        {
          title: "Building a Strong Profile",
          content: {
            definition: "Developing a well-rounded academic and extracurricular record.",
            whyRequired: "Scholarships prefer students who excel beyond academics.",
            whatItDoes: "Makes you stand out among thousands of applicants.",
            howItWorks: "Balance studies with leadership, community service, and unique skills.",
            example: "Student leads school club, volunteers at NGO, maintains 90% grades.",
            scenario: "Diverse profile helps student win scholarship over higher-scoring peers.",
            keyTakeaway: "Depth in few activities beats breadth in many.",
            conclusion: "Quality experiences matter more than quantity.",
          },
        },
        {
          title: "Scholarship Search Strategies",
          content: {
            definition: "Systematic approach to finding relevant scholarship opportunities.",
            whyRequired: "Many scholarships go unclaimed due to lack of awareness.",
            whatItDoes: "Increases the number of opportunities you can apply for.",
            howItWorks: "Use aggregator websites, check college financial aid offices, set alerts.",
            example: "Buddy4Study, Vidyalakshmi Portal, college websites list opportunities.",
            scenario: "Student finds 15 relevant scholarships through systematic search.",
            keyTakeaway: "Treat scholarship search like a part-time job.",
            conclusion: "More applications mean more chances of success.",
          },
        },
        {
          title: "Avoiding Common Mistakes",
          content: {
            definition: "Learning from errors that cause rejection.",
            whyRequired: "Small mistakes can disqualify otherwise strong applications.",
            whatItDoes: "Helps you submit polished, error-free applications.",
            howItWorks: "Proofread everything, follow instructions exactly, verify all information.",
            example: "Common errors: wrong bank details, spelling mistakes, missing documents.",
            scenario: "Student double-checks application, catches critical error before submission.",
            keyTakeaway: "Have someone else review your application before submitting.",
            conclusion: "Attention to detail separates winners from also-rans.",
          },
        },
        {
          title: "Renewal and Maintenance",
          content: {
            definition: "Keeping scholarship benefits throughout your education.",
            whyRequired: "Many scholarships require maintaining certain criteria.",
            whatItDoes: "Ensures continuous financial support for full duration.",
            howItWorks: "Maintain required GPA, submit renewal forms, meet attendance requirements.",
            example: "Scholarship requires 75% attendance and 60% marks for renewal.",
            scenario: "Student loses scholarship in year 2 due to dropping grades.",
            keyTakeaway: "Winning a scholarship is just the beginning.",
            conclusion: "Consistent performance protects your scholarship investment.",
          },
        },
      ],
    },
  ],
  "Startups": [
    {
      icon: Zap,
      title: "Getting Started",
      introduction: "Every successful startup begins with a problem worth solving. Learn the fundamentals of entrepreneurship.",
      items: [
        {
          title: "Identifying Problems Worth Solving",
          content: {
            definition: "Finding genuine pain points that people will pay to solve.",
            whyRequired: "Great startups solve real problems, not imaginary ones.",
            whatItDoes: "Validates that there's a market for your solution.",
            howItWorks: "Talk to potential customers, observe frustrations, analyze complaints.",
            example: "Ola solved the problem of unreliable taxi booking in India.",
            scenario: "Founder interviews 50 potential customers before building anything.",
            keyTakeaway: "Fall in love with the problem, not your solution.",
            conclusion: "Problem-first thinking prevents building products nobody wants.",
          },
        },
        {
          title: "Validating Your Idea",
          content: {
            definition: "Testing whether people will actually pay for your solution.",
            whyRequired: "Saves time and money by confirming demand early.",
            whatItDoes: "Provides evidence that your idea can become a business.",
            howItWorks: "Create MVP, get paying customers, measure willingness to pay.",
            example: "Dropbox validated with just a demo video before building the product.",
            scenario: "Student pre-sells 20 subscriptions before writing any code.",
            keyTakeaway: "The market votes with money, not compliments.",
            conclusion: "Validation separates viable businesses from expensive hobbies.",
          },
        },
        {
          title: "Building Your First Product",
          content: {
            definition: "Creating a minimum viable product (MVP) to test the market.",
            whyRequired: "Quick feedback prevents wasted development time.",
            whatItDoes: "Gives customers something tangible to react to.",
            howItWorks: "Build smallest possible version that solves the core problem.",
            example: "Zomato started as a simple PDF menu aggregator.",
            scenario: "Founder launches in 2 months instead of waiting for 'perfect' product.",
            keyTakeaway: "If you're not embarrassed by v1, you launched too late.",
            conclusion: "Speed of learning matters more than perfection.",
          },
        },
        {
          title: "Finding Your First Customers",
          content: {
            definition: "Acquiring initial users who will test and pay for your product.",
            whyRequired: "Early customers provide revenue, feedback, and validation.",
            whatItDoes: "Proves you can sell and builds momentum.",
            howItWorks: "Leverage personal network, target narrow niches, offer special deals.",
            example: "Razorpay got first customers through founder's IIT network.",
            scenario: "Founder personally onboards first 100 customers.",
            keyTakeaway: "Do things that don't scale in the beginning.",
            conclusion: "First customers become your biggest advocates if treated well.",
          },
        },
      ],
    },
    {
      icon: Users,
      title: "Building Teams",
      introduction: "Great companies are built by great teams. Learn how to find, attract, and retain the right people.",
      items: [
        {
          title: "Finding Co-founders",
          content: {
            definition: "Partnering with complementary individuals to build together.",
            whyRequired: "Solo founders face higher failure rates and burnout.",
            whatItDoes: "Brings diverse skills, shared burden, and mutual accountability.",
            howItWorks: "Work on projects together first, ensure value alignment, define roles clearly.",
            example: "Larry and Sergey (Google) met at Stanford, complemented each other perfectly.",
            scenario: "Two classmates team up—one technical, one business-focused.",
            keyTakeaway: "Choose co-founders like you'd choose a spouse.",
            conclusion: "The right co-founder multiplies your chances of success.",
          },
        },
        {
          title: "Hiring First Employees",
          content: {
            definition: "Recruiting initial team members who shape company culture.",
            whyRequired: "Early hires define company DNA and set standards.",
            whatItDoes: "Brings expertise you lack and scales your capacity.",
            howItWorks: "Hire for attitude and culture fit; skills can be taught.",
            example: "First 10 employees should be generalists who wear multiple hats.",
            scenario: "Startup hires passionate intern over experienced but unmotivated candidate.",
            keyTakeaway: "A players hire A players; B players hire C players.",
            conclusion: "Your early team determines whether you'll succeed or fail.",
          },
        },
        {
          title: "Creating Company Culture",
          content: {
            definition: "Establishing values and behaviors that define your organization.",
            whyRequired: "Culture attracts right people and repels wrong ones.",
            whatItDoes: "Creates shared identity and decision-making framework.",
            howItWorks: "Define core values, model them yourself, reward aligned behavior.",
            example: "Zerodha's transparency culture: all business metrics are public.",
            scenario: "Founder fires top performer who violated company values.",
            keyTakeaway: "Culture is what people do when no one is watching.",
            conclusion: "Build culture intentionally or it will build itself randomly.",
          },
        },
        {
          title: "Leadership and Management",
          content: {
            definition: "Guiding and developing your team for collective success.",
            whyRequired: "Founders must evolve from doers to leaders.",
            whatItDoes: "Enables others to perform at their best.",
            howItWorks: "Set clear expectations, give regular feedback, remove obstacles.",
            example: "One-on-one meetings weekly keep team aligned and motivated.",
            scenario: "CEO spends 50% time on people development.",
            keyTakeaway: "Your job is to make everyone around you better.",
            conclusion: "Great leaders create more leaders, not followers.",
          },
        },
      ],
    },
    {
      icon: Target,
      title: "Scaling Up",
      introduction: "Taking your startup from idea to scale requires strategy, funding, and execution excellence.",
      items: [
        {
          title: "Fundraising Fundamentals",
          content: {
            definition: "Raising capital from investors to grow faster.",
            whyRequired: "External funding enables rapid scaling beyond organic growth.",
            whatItDoes: "Provides runway to invest in product, team, and marketing.",
            howItWorks: "Understand funding stages, prepare pitch deck, build relationships.",
            example: "Seed round: ₹1-5 crore; Series A: ₹10-30 crore.",
            scenario: "Founder bootstraps to revenue, then raises at better valuation.",
            keyTakeaway: "Raise money when you don't need it desperately.",
            conclusion: "Fundraising is a means to an end, not the goal itself.",
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

export const features = [
  {
    icon: "Wallet",
    title: "Money Management",
    description: "Budgeting tools, savings tips, and expense tracking to master your finances.",
    color: "from-primary to-gold-light",
    hasExpanded: true,
  },
  {
    icon: "TrendingUp",
    title: "Investments",
    description: "Beginner-friendly guides on where to invest and understand market advantages.",
    color: "from-emerald-500 to-teal-400",
    hasExpanded: true,
  },
  {
    icon: "GraduationCap",
    title: "Scholarships",
    description: "Government & NGO opportunities with eligibility info and application guidance.",
    color: "from-blue-500 to-cyan-400",
    hasExpanded: true,
  },
  {
    icon: "Rocket",
    title: "Startups",
    description: "Resources, success stories, and branding tips for aspiring entrepreneurs.",
    color: "from-purple-500 to-pink-400",
    hasExpanded: true,
  },
];
