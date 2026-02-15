import { Zap, Users, Target } from "lucide-react";
import type { SubCategory } from "../featureData";

export const startupsData: SubCategory[] = [
  {
    icon: Zap,
    title: "Getting Started",
    introduction: "Every successful startup begins with a problem worth solving. Learn the fundamentals of entrepreneurship.",
    items: [
      {
        title: "Identifying Problems Worth Solving",
        content: {
          overview: "Great startups don't begin with ideas — they begin with problems. The most successful companies solve genuine, painful problems that people are willing to pay to eliminate. Learning to identify these problems is the first entrepreneurial skill.",
          sections: [
            { heading: "Problem vs Idea Thinking", content: "Most first-time founders start with 'I have an idea for an app.' Successful founders start with 'I noticed a problem.' Ola didn't start by wanting to build a taxi app — they noticed that getting a reliable taxi in Bangalore was frustrating. Zomato started because finding restaurant menus was inconvenient. Shift your thinking from solutions to problems, and the right solution will emerge." },
            { heading: "How to Find Real Problems", content: "Talk to people: Interview 50+ potential customers about their daily frustrations. Observe: Watch how people struggle with existing solutions. Experience: Your own pain points are valid starting points. Forums: Reddit, Quora, Twitter complaints reveal unmet needs. Industry reports: Identify gaps in existing markets. The key rule: If you can't find 10 people who've paid to solve this problem (even badly), it's not worth solving." },
            { heading: "Evaluating Problem Quality", content: "Not all problems are worth building a business around. Good problems are: Frequent (daily or weekly occurrence), Intense (genuinely painful, not just annoying), Widespread (millions of people affected), Growing (problem getting worse, not better), Monetizable (people will pay to solve it). Score each problem on these 5 criteria to find the best opportunity." },
            { heading: "Indian Market Opportunities", content: "India-specific problems worth solving: Financial inclusion for 500M+ underserved population, healthcare access in Tier 2-3 cities, education quality gaps, last-mile delivery challenges, language barriers in technology, small business digitization, agriculture supply chain inefficiencies. The India opportunity is massive — problems are everywhere, and solutions are rewarded." }
          ],
          chart: { type: "bar", title: "Problem Quality Scorecard (Rate 1-10)", data: [{ name: "Frequency", value: 9 }, { name: "Intensity", value: 8 }, { name: "Market Size", value: 7 }, { name: "Growth", value: 8 }, { name: "Monetizable", value: 6 }] },
          table: { title: "Problem Identification Methods", headers: ["Method", "Time Required", "Quality of Insights", "Cost", "Best For"], rows: [["Customer Interviews", "2-4 weeks", "⭐⭐⭐⭐⭐", "Free", "Deep understanding"], ["Online Forums", "1-2 weeks", "⭐⭐⭐⭐", "Free", "Broad patterns"], ["Personal Experience", "Ongoing", "⭐⭐⭐", "Free", "Authentic insights"], ["Market Research", "2-4 weeks", "⭐⭐⭐⭐", "₹5-50K", "Data-backed"], ["Competitor Analysis", "1 week", "⭐⭐⭐", "Free", "Gap finding"]] },
          mindMap: { central: "Problem Finding", branches: [{ label: "Methods", children: [{ label: "Interviews" }, { label: "Observation" }, { label: "Forums" }] }, { label: "Evaluate", children: [{ label: "Frequent?" }, { label: "Painful?" }, { label: "Growing?" }] }, { label: "India Opps", children: [{ label: "Fintech" }, { label: "Healthtech" }, { label: "Edtech" }] }, { label: "Avoid", children: [{ label: "Solution First" }, { label: "No Validation" }, { label: "Tiny Market" }] }] },
          keyTakeaway: "Fall in love with the problem, not your solution — the best businesses solve real, painful, frequent problems.",
          conclusion: "Spend more time understanding problems than building solutions. Problem-first thinking prevents building products nobody wants."
        }
      },
      {
        title: "Validating Your Idea",
        content: {
          overview: "Idea validation is testing whether real people will pay real money for your solution before you invest significant time and resources building it. The market votes with money, not compliments.",
          sections: [
            { heading: "Why Validation Matters", content: "42% of startups fail because there's no market need. Not because of bad teams, poor execution, or lack of funding — but because nobody wanted what they built. Validation prevents this. It costs 100x less to validate than to build. A weekend of validation can save you years of wasted effort. Dropbox validated with a 3-minute video before writing a single line of code." },
            { heading: "The Validation Ladder", content: "Level 1: Problem validation — Do people actually have this problem? (Interviews). Level 2: Solution validation — Does your solution make sense? (Mockups/demos). Level 3: Willingness to pay — Will people pay? How much? (Pre-orders/landing page). Level 4: Repeat usage — Do they come back? (Beta test). Each level increases confidence. Don't skip levels — each one de-risks your venture." },
            { heading: "Lean Validation Methods", content: "Landing page test: Create a page describing your product, drive traffic, measure sign-ups. Pre-sell: Take advance payments before building. Concierge MVP: Deliver the service manually before automating. Wizard of Oz: Make it look automated but handle requests manually behind the scenes. Crowdfunding: If people fund it, they want it. Each method costs ₹0-5,000 and takes 1-2 weeks." },
            { heading: "Interpreting Validation Results", content: "Positive signals: People seek you out, pre-pay without prompting, refer others, complain when the service is down. Neutral signals: 'Cool idea,' 'I'd definitely use that' (words without action). Negative signals: Polite interest but no action, price objections, 'maybe later.' Only count actions, never words. 10 paying customers beat 1,000 sign-ups. Iterate or pivot based on real data." }
          ],
          chart: { type: "bar", title: "Validation Methods by Confidence Level", data: [{ name: "Interviews", value: 30 }, { name: "Landing Page", value: 50 }, { name: "Pre-orders", value: 75 }, { name: "Beta Users", value: 85 }, { name: "Paying Customers", value: 95 }] },
          table: { title: "Validation Methods Comparison", headers: ["Method", "Cost", "Time", "Confidence", "Best For"], rows: [["Customer Interviews", "Free", "1-2 weeks", "Low", "Problem validation"], ["Landing Page", "₹2-5K", "1 week", "Medium", "Interest validation"], ["Pre-selling", "Free", "1-2 weeks", "High", "Willingness to pay"], ["Concierge MVP", "₹5-10K", "2-4 weeks", "High", "Solution validation"], ["Beta Launch", "₹10-50K", "4-8 weeks", "Very High", "Product-market fit"]] },
          mindMap: { central: "Idea Validation", branches: [{ label: "Levels", children: [{ label: "Problem Fit" }, { label: "Solution Fit" }, { label: "Willingness to Pay" }] }, { label: "Methods", children: [{ label: "Landing Page" }, { label: "Pre-sell" }, { label: "Concierge MVP" }] }, { label: "Signals", children: [{ label: "Actions > Words" }, { label: "Pre-payments" }, { label: "Referrals" }] }, { label: "Mistakes", children: [{ label: "Skip Validation" }, { label: "Trust Words" }, { label: "Build First" }] }] },
          keyTakeaway: "The market votes with money, not compliments — only count actions, never just words.",
          conclusion: "Validate before you build. A weekend of validation is worth more than months of development."
        }
      },
      {
        title: "Building Your First Product",
        content: {
          overview: "An MVP (Minimum Viable Product) is the smallest possible version of your product that solves the core problem and lets you learn from real users. Speed of learning matters more than perfection.",
          sections: [
            { heading: "What is an MVP?", content: "An MVP is NOT a half-finished product. It's a complete solution to ONE problem. Zomato's MVP was scanned restaurant menus on a website — no ordering, no reviews, no delivery. Just menus. It solved one problem perfectly. Your MVP should do one thing well, not ten things poorly. Strip away every feature that isn't essential to solving the core problem." },
            { heading: "Building Fast and Cheap", content: "No-code tools: Bubble, Webflow, Airtable, Zapier can create functional products without coding. These cost ₹0-5,000/month. Template-based: Use WordPress, Shopify, or open-source templates as starting points. Manual + tech: Automate the customer-facing part, handle backend manually. Example: A food delivery app where orders come via WhatsApp and delivery is coordinated via phone. Ugly but functional beats beautiful but unfinished." },
            { heading: "Launch Timeline", content: "Week 1: Define the ONE core problem to solve. Week 2-3: Build the simplest possible solution. Week 4: Test with 10-20 beta users. Week 5: Fix critical bugs and pain points. Week 6: Soft launch to 50-100 users. If your MVP takes more than 6-8 weeks to build, you're building too much. Speed of iteration is your competitive advantage against larger, slower competitors." },
            { heading: "Learning from Your MVP", content: "The MVP's purpose is learning, not revenue. Key metrics to track: Activation rate (how many sign-ups actually use the product?), retention (do they come back?), referral (do they tell others?), revenue (will they pay?). Talk to every early user personally. Ask: What do you love? What's frustrating? What's missing? Would you pay for this? Their answers shape version 2." }
          ],
          chart: { type: "bar", title: "MVP Building Approaches by Speed", data: [{ name: "No-Code", value: 2 }, { name: "Templates", value: 3 }, { name: "Low-Code", value: 4 }, { name: "Custom Dev", value: 8 }, { name: "Full Product", value: 16 }] },
          table: { title: "MVP Building Tools", headers: ["Tool", "Best For", "Cost/Month", "Coding Needed", "Speed"], rows: [["Bubble", "Web apps", "₹0-2,000", "None", "2-3 weeks"], ["Webflow", "Websites", "₹0-1,500", "None", "1-2 weeks"], ["Shopify", "E-commerce", "₹1,500+", "Minimal", "1 week"], ["Airtable + Zapier", "Backend/automation", "₹0-2,000", "None", "1-2 weeks"], ["React/Node.js", "Custom apps", "₹0 (self)", "High", "4-8 weeks"]] },
          mindMap: { central: "MVP Building", branches: [{ label: "Principles", children: [{ label: "One Problem" }, { label: "Speed > Perfection" }, { label: "Learn Fast" }] }, { label: "Tools", children: [{ label: "No-Code" }, { label: "Templates" }, { label: "Manual + Tech" }] }, { label: "Timeline", children: [{ label: "Define (Week 1)" }, { label: "Build (Week 2-3)" }, { label: "Launch (Week 6)" }] }, { label: "Metrics", children: [{ label: "Activation" }, { label: "Retention" }, { label: "Revenue" }] }] },
          keyTakeaway: "If you're not embarrassed by v1, you launched too late — speed of learning matters more than perfection.",
          conclusion: "Build the smallest thing that works, put it in front of real users, and iterate based on their feedback."
        }
      },
      {
        title: "Finding Your First Customers",
        content: {
          overview: "Your first 100 customers are the hardest to get and the most valuable. They validate your business, provide crucial feedback, and become your biggest advocates if treated well. Do things that don't scale.",
          sections: [
            { heading: "Where to Find Early Adopters", content: "Personal network: Friends, family, college alumni, LinkedIn connections — ask for introductions. Online communities: Reddit, Facebook groups, Discord servers, Twitter where your target audience hangs out. Offline: Local events, meetups, college fests, industry conferences. Competitor users: People already paying for inferior solutions. Complementary products: Partner with businesses serving the same audience." },
            { heading: "The 'Do Things That Don't Scale' Philosophy", content: "Y Combinator's Paul Graham coined this famous advice. Early on: personally onboard every customer, hand-deliver your product, make personal phone calls, write individual emails, visit customers in person. Airbnb founders personally photographed listings. Stripe founders manually installed their payment system on merchants' laptops. These actions build relationships and generate insights that no scalable marketing can." },
            { heading: "Pricing Your First Product", content: "Don't give it away for free — people don't value free products. Start with low pricing that reduces friction but establishes willingness to pay. Offer early-adopter discounts (50% off for first 100 users). Consider: freemium (basic free, premium paid), trial period (14-30 days), money-back guarantee (reduces risk). Early pricing should optimize for learning, not revenue." },
            { heading: "Converting Early Users into Advocates", content: "Over-deliver on support and quality for early users. Send personal thank-you messages. Act on their feedback within 48 hours. Give them exclusive access to new features. Create a community (WhatsApp group, Discord). Ask for referrals explicitly: 'If you know 3 people who'd benefit from this, I'd love an introduction.' A happy early customer is worth 10 marketing campaigns." }
          ],
          chart: { type: "pie", title: "First 100 Customer Sources (Typical Startup)", data: [{ name: "Personal Network", value: 35 }, { name: "Online Communities", value: 25 }, { name: "Referrals", value: 20 }, { name: "Content/SEO", value: 10 }, { name: "Events", value: 10 }] },
          table: { title: "Customer Acquisition Channels for Early Stage", headers: ["Channel", "Cost", "Speed", "Quality", "Scalability"], rows: [["Personal Network", "Free", "Fast", "High (warm leads)", "Low"], ["Social Media", "Free/Low", "Medium", "Medium", "Medium"], ["Content Marketing", "Time only", "Slow", "High", "High"], ["Referral Program", "₹100-500/referral", "Medium", "Very High", "Medium"], ["Paid Ads", "₹5-50K", "Fast", "Variable", "High"]] },
          mindMap: { central: "First Customers", branches: [{ label: "Find Them", children: [{ label: "Network" }, { label: "Communities" }, { label: "Events" }] }, { label: "Don't Scale", children: [{ label: "Personal Onboarding" }, { label: "Hand Delivery" }, { label: "Phone Calls" }] }, { label: "Pricing", children: [{ label: "Early Discount" }, { label: "Freemium" }, { label: "Money-back" }] }, { label: "Retain", children: [{ label: "Over-deliver" }, { label: "Fast Feedback" }, { label: "Community" }] }] },
          keyTakeaway: "Do things that don't scale in the beginning — personal relationships with first customers build the foundation for everything that follows.",
          conclusion: "Your first customers are your co-creators. Treat them exceptionally well, and they'll build your business for you through referrals."
        }
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
          overview: "A co-founder is your most important business decision. The right co-founder multiplies your chances of success; the wrong one is the #1 cause of startup failure. Choose wisely — like choosing a spouse.",
          sections: [
            { heading: "Why You Need a Co-founder", content: "Solo founders face: higher failure rates (solo startups fail 60% more often), burnout from wearing all hats, limited skill coverage, weaker investor confidence, no one to debate ideas with. Ideal co-founder pairs cover complementary areas: technical + business, product + sales, strategy + execution. Two committed co-founders with aligned vision outperform any solo genius." },
            { heading: "Where to Find Co-founders", content: "Best sources: College classmates and alumni (you've seen them under pressure). Work colleagues (proven collaboration). Hackathons and startup events. Online: YCombinator co-founder matching, AngelList, LinkedIn groups. Incubator programs pair compatible founders. Warning: Don't co-found with someone you haven't worked with on a project for at least 3-6 months." },
            { heading: "Evaluating Potential Co-founders", content: "Assess: Complementary skills (don't clone yourself), shared values (non-negotiable), work ethic alignment, risk tolerance, financial expectations, communication style, conflict resolution approach. Red flags: Different definitions of success, unequal commitment levels, inability to disagree constructively, entitlement mentality. The 'airport test': Would you enjoy being stuck at an airport with this person for 12 hours?" },
            { heading: "Co-founder Agreements", content: "Before starting, agree on: Equity split (ideally equal or close), vesting schedule (4 years with 1-year cliff is standard), roles and responsibilities, decision-making process, what happens if someone leaves, IP ownership, time commitment expectations. Get these in writing — a founders' agreement is essential. Uncomfortable conversations now prevent devastating ones later." }
          ],
          chart: { type: "pie", title: "Startup Failure Causes Related to Team", data: [{ name: "Co-founder Conflict", value: 35 }, { name: "Wrong Team", value: 25 }, { name: "Solo Burnout", value: 20 }, { name: "Skill Gaps", value: 20 }] },
          table: { title: "Co-founder Evaluation Matrix", headers: ["Quality", "Must Have", "Nice to Have", "Red Flag"], rows: [["Complementary Skills", "✅", "", "Same skills as you"], ["Shared Values", "✅", "", "Different definitions of success"], ["Work Ethic", "✅", "", "Very different commitment levels"], ["Industry Experience", "", "✅", "No relevant knowledge"], ["Network", "", "✅", "Isolated/no connections"]] },
          mindMap: { central: "Finding Co-founders", branches: [{ label: "Where", children: [{ label: "College" }, { label: "Work" }, { label: "Hackathons" }] }, { label: "Evaluate", children: [{ label: "Skills" }, { label: "Values" }, { label: "Work Ethic" }] }, { label: "Agreement", children: [{ label: "Equity Split" }, { label: "Vesting" }, { label: "Roles" }] }, { label: "Red Flags", children: [{ label: "No Commitment" }, { label: "Same Skills" }, { label: "Can't Disagree" }] }] },
          keyTakeaway: "Choose co-founders like you'd choose a spouse — complementary skills, shared values, and ability to disagree constructively.",
          conclusion: "The right co-founder multiplies your chances of success. Take the time to find someone truly compatible."
        }
      },
      {
        title: "Hiring First Employees",
        content: {
          overview: "Your first 10 hires define your company's DNA. These early employees set cultural standards, build core systems, and shape the organization that every future hire joins. Hire for attitude and culture; skills can be taught.",
          sections: [
            { heading: "When to Make Your First Hire", content: "Hire when: You have validated product-market fit (paying customers), you're turning away work because of capacity, there's a specific skill gap you can't fill, your personal life is suffering from overwork. Don't hire when: You're hoping someone else will figure out the business, to look like a 'real' company, or because you have investment money to spend. Each hire should have clear ROI." },
            { heading: "What to Look For", content: "First employees should be: Generalists who can wear multiple hats, self-starters who don't need micromanagement, aligned with your mission (not just looking for a job), comfortable with ambiguity and change, scrappy and resourceful, willing to learn new skills. Skills matter less than attitude at this stage. A passionate, smart generalist outperforms a specialized but unmotivated expert in a startup environment." },
            { heading: "Where to Find Talent", content: "Referrals from your network (highest quality). College placement cells (enthusiastic, affordable). LinkedIn (targeted search for specific skills). Startup communities (Headstart, TiE, local meetups). Internship-to-hire pipeline (test before committing). Twitter/personal brand (attract people who resonate with your mission). Early-stage talent is attracted by mission, learning opportunity, and equity — not just salary." },
            { heading: "Compensation at Early Stage", content: "Cash-constrained reality: Offer market rate minus 20-30% for salary, compensate with meaningful equity (0.5-2% for first 5 employees), provide other benefits (flexible hours, learning budget, title flexibility). Be transparent about company stage and financial situation. People who join early for equity and mission are your best long-term team members. Don't hire people who only care about salary at this stage." }
          ],
          chart: { type: "bar", title: "What First Employees Value Most", data: [{ name: "Mission", value: 30 }, { name: "Learning", value: 25 }, { name: "Equity", value: 20 }, { name: "Salary", value: 15 }, { name: "Title", value: 10 }] },
          table: { title: "First Hire Checklist", headers: ["Role Priority", "When to Hire", "Salary Range", "Equity", "Key Trait"], rows: [["Technical Co-builder", "With co-founder", "Market or below", "5-15%", "Builder mindset"], ["First Engineer", "Product-market fit", "₹3-8 LPA", "1-3%", "Full-stack ability"], ["First Marketer/Sales", "Revenue traction", "₹3-6 LPA", "0.5-1.5%", "Hustle & creativity"], ["Operations", "Scaling pains", "₹2-5 LPA", "0.5-1%", "Process-oriented"], ["Customer Support", "100+ customers", "₹2-4 LPA", "0.25-0.5%", "Empathy"]] },
          mindMap: { central: "First Hires", branches: [{ label: "When", children: [{ label: "Product-Market Fit" }, { label: "Capacity Full" }, { label: "Skill Gap" }] }, { label: "What to Seek", children: [{ label: "Generalists" }, { label: "Self-starters" }, { label: "Mission-aligned" }] }, { label: "Where", children: [{ label: "Referrals" }, { label: "Colleges" }, { label: "Communities" }] }, { label: "Compensation", children: [{ label: "Below Market Salary" }, { label: "Meaningful Equity" }, { label: "Learning Budget" }] }] },
          keyTakeaway: "A players hire A players; B players hire C players — your first hires set the standard for everyone who follows.",
          conclusion: "Your early team determines whether you'll succeed or fail. Hire slowly, fire quickly, and prioritize attitude over credentials."
        }
      },
      {
        title: "Creating Company Culture",
        content: {
          overview: "Company culture is the set of shared values, behaviors, and norms that define 'how things are done here.' Culture happens whether you design it or not — so design it intentionally from day one.",
          sections: [
            { heading: "What Culture Really Is", content: "Culture is NOT a ping-pong table, free snacks, or casual Fridays. Culture is: How decisions are made when the founder isn't in the room. How bad news travels (fast and openly, or hidden?). How people treat each other during disagreements. What behaviors get rewarded and what gets punished. The stories people tell about the company. Culture is what people do, not what the website says." },
            { heading: "Defining Your Values", content: "Limit to 3-5 core values that are: Specific (not generic like 'integrity' — everyone claims that). Actionable (clear behavior expectations). Lived by founders first. Used in hiring/firing decisions. Regularly referenced in daily work. Example values: 'Customers first, always' (Zerodha), 'Disagree and commit' (Amazon), 'Move fast and break things' (early Facebook). Your values should be distinctive and genuine." },
            { heading: "Building Culture Through Actions", content: "Model it yourself — culture starts with the founder's behavior. Hire and fire based on values (fire a top performer who violates values to send a clear signal). Celebrate behaviors that align with values. Make values part of onboarding, reviews, and daily standup. Create rituals: weekly all-hands, monthly retrospectives, annual offsites. Share stories of values in action. Consistency is everything." },
            { heading: "Remote and Hybrid Culture", content: "Building culture remotely requires extra intentionality: Over-communicate through writing (documented decisions, public channels). Virtual coffee chats (random pairings for relationship building). Async-first communication respects different time zones. Regular in-person meetups (quarterly or biannually). Transparent documentation (everyone knows the 'why' behind decisions). Remote culture can be stronger than office culture when done intentionally." }
          ],
          chart: { type: "pie", title: "What Defines Company Culture", data: [{ name: "Founder Behavior", value: 30 }, { name: "Hiring Decisions", value: 25 }, { name: "Daily Practices", value: 20 }, { name: "Rituals/Ceremonies", value: 15 }, { name: "Physical/Digital Space", value: 10 }] },
          table: { title: "Culture Building Practices", headers: ["Practice", "Frequency", "Time", "Impact", "Remote-Friendly"], rows: [["All-hands meeting", "Weekly", "30 min", "High", "Yes (video call)"], ["1-on-1s", "Weekly", "30 min", "Very High", "Yes"], ["Team retrospective", "Bi-weekly", "1 hour", "High", "Yes"], ["Culture stories sharing", "Monthly", "15 min", "Medium", "Yes"], ["In-person offsite", "Quarterly", "2 days", "Very High", "Essential"]] },
          mindMap: { central: "Company Culture", branches: [{ label: "Define", children: [{ label: "3-5 Values" }, { label: "Specific" }, { label: "Actionable" }] }, { label: "Build", children: [{ label: "Model It" }, { label: "Hire/Fire by It" }, { label: "Celebrate It" }] }, { label: "Rituals", children: [{ label: "All-hands" }, { label: "1-on-1s" }, { label: "Retrospectives" }] }, { label: "Remote", children: [{ label: "Over-communicate" }, { label: "Documentation" }, { label: "Meetups" }] }] },
          keyTakeaway: "Culture is what people do when no one is watching — build it intentionally or it will build itself randomly.",
          conclusion: "Your culture is your most durable competitive advantage. Invest in it from day one and protect it fiercely."
        }
      },
      {
        title: "Leadership and Management",
        content: {
          overview: "As a founder, your role evolves from doing everything yourself to enabling others to do their best work. The transition from individual contributor to leader is one of the hardest but most important shifts in entrepreneurship.",
          sections: [
            { heading: "From Doer to Leader", content: "Initially, you're the best developer/marketer/salesperson. As the team grows, your job changes to: setting direction, removing obstacles, developing people, and making decisions. This transition is uncomfortable — you'll do things slower than you could yourself. But it's essential because you can't scale by doing everything. Delegation isn't laziness; it's multiplication." },
            { heading: "One-on-One Meetings", content: "The most powerful management tool is the weekly 1-on-1. Format: 30 minutes, employee sets the agenda (not you). Topics: What's going well? What's blocking you? How can I help? Career development. Listen more than you talk. Take notes and follow up. 1-on-1s build trust, catch problems early, and show employees they matter. Skip them at your company's peril." },
            { heading: "Giving and Receiving Feedback", content: "Radical Candor framework: Care personally + Challenge directly = best feedback. 'Your presentation had weak data — let me help you strengthen it for next time' is better than either silence or harsh criticism. Give feedback immediately (within 24 hours), privately (never publicly embarrass), and constructively (specific improvement suggestion). Also actively seek feedback about yourself — leaders who can't receive feedback can't grow." },
            { heading: "Decision-Making Frameworks", content: "Not all decisions need consensus. Framework: Type 1 decisions (irreversible, high-impact) — deliberate carefully, involve the team. Type 2 decisions (reversible, lower-impact) — decide fast, course-correct if needed. Most decisions are Type 2 but get treated as Type 1, slowing everything down. Empower your team to make Type 2 decisions independently. Your job is to be right on Type 1 decisions." }
          ],
          chart: { type: "pie", title: "Founder Time Allocation as Team Grows", data: [{ name: "People Development", value: 30 }, { name: "Strategy", value: 25 }, { name: "External (Sales/Investors)", value: 20 }, { name: "Product", value: 15 }, { name: "Operations", value: 10 }] },
          table: { title: "Leadership Skills Development", headers: ["Skill", "How to Develop", "Time to Learn", "Impact"], rows: [["Delegation", "Start with small tasks", "3-6 months", "10x your output"], ["Feedback", "Practice Radical Candor", "Ongoing", "Better team performance"], ["1-on-1s", "Weekly practice", "1 month", "Trust & retention"], ["Decision-making", "Type 1/2 framework", "3 months", "Speed & quality"], ["Hiring", "Conduct 50+ interviews", "6 months", "Team quality"]] },
          mindMap: { central: "Leadership", branches: [{ label: "Transition", children: [{ label: "Doer → Leader" }, { label: "Delegation" }, { label: "Empowerment" }] }, { label: "Practices", children: [{ label: "1-on-1s" }, { label: "Feedback" }, { label: "All-hands" }] }, { label: "Decisions", children: [{ label: "Type 1 (Careful)" }, { label: "Type 2 (Fast)" }, { label: "Empower Team" }] }, { label: "Growth", children: [{ label: "Seek Feedback" }, { label: "Mentors" }, { label: "Books" }] }] },
          keyTakeaway: "Your job as leader is to make everyone around you better — great leaders create more leaders, not followers.",
          conclusion: "Leadership is a learnable skill, not an innate trait. Practice it daily through 1-on-1s, feedback, and deliberate delegation."
        }
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
          overview: "Fundraising is the process of raising external capital from investors to accelerate growth beyond what organic revenue allows. It's a means to an end, not the goal itself.",
          sections: [
            { heading: "Funding Stages Explained", content: "Pre-Seed (₹10-50 lakh): From friends, family, angels. Proves the concept. Seed (₹50L-5 Crore): From angel investors, micro-VCs. Builds MVP and gets initial traction. Series A (₹5-30 Crore): From VCs. Scales proven business model. Series B+ (₹30 Crore+): From larger VCs, PE firms. Expands aggressively. Each stage requires proving different metrics: concept → traction → unit economics → scale." },
            { heading: "Should You Raise Money?", content: "Reasons to raise: Market opportunity is time-sensitive, competitors are well-funded, business model requires upfront investment (marketplace, hardware), you've proven PMF and need fuel for growth. Reasons NOT to raise: Your business can be profitable quickly, you want to maintain full control, you haven't validated the market yet. Bootstrapping is valid — Zerodha never raised external funding and is worth ₹25,000+ crore." },
            { heading: "Preparing for Fundraising", content: "Before approaching investors: Have 6-12 months of traction data. Create a compelling pitch deck (10-15 slides). Build a financial model showing path to profitability. Research investors who invest in your stage and sector. Get warm introductions through your network. Practice your pitch 50+ times. Have answers ready for tough questions about competition, unit economics, and team." },
            { heading: "Negotiating Terms", content: "Key terms to understand: Valuation (pre-money and post-money), dilution (how much you give up), board seats, liquidation preferences, anti-dilution clauses, vesting schedules. Don't optimize solely for highest valuation — investor quality, terms, and alignment matter more. A great investor at a lower valuation often beats a mediocre investor at a higher valuation. Get a startup lawyer to review term sheets." }
          ],
          chart: { type: "bar", title: "Typical Funding Rounds in India", data: [{ name: "Pre-Seed", value: 30 }, { name: "Seed", value: 200 }, { name: "Series A", value: 1500 }, { name: "Series B", value: 5000 }, { name: "Series C+", value: 15000 }] },
          table: { title: "Funding Stage Requirements", headers: ["Stage", "Amount (₹)", "What to Prove", "Typical Dilution", "Timeline"], rows: [["Pre-Seed", "10-50 Lakh", "Problem exists", "10-15%", "1-2 months"], ["Seed", "50L-5 Crore", "Solution works, early users", "15-25%", "3-6 months"], ["Series A", "5-30 Crore", "Product-market fit, revenue", "20-30%", "4-9 months"], ["Series B", "30-100 Crore", "Unit economics, scale", "15-25%", "3-6 months"]] },
          mindMap: { central: "Fundraising", branches: [{ label: "Stages", children: [{ label: "Pre-Seed" }, { label: "Seed" }, { label: "Series A" }, { label: "Series B+" }] }, { label: "Prepare", children: [{ label: "Pitch Deck" }, { label: "Financial Model" }, { label: "Traction Data" }] }, { label: "Negotiate", children: [{ label: "Valuation" }, { label: "Terms" }, { label: "Board Seats" }] }, { label: "Alternatives", children: [{ label: "Bootstrap" }, { label: "Grants" }, { label: "Revenue" }] }] },
          keyTakeaway: "Raise money when you don't need it desperately — desperation gives investors leverage and leads to bad terms.",
          conclusion: "Fundraising is a skill that gets better with practice. Start building investor relationships before you need money."
        }
      },
      {
        title: "Pitching to Investors",
        content: {
          overview: "A compelling pitch tells a story that convinces investors to bet on your team and vision. Investors see 1,000+ pitches a year — yours needs to be memorable, clear, and data-backed.",
          sections: [
            { heading: "The Perfect Pitch Deck Structure", content: "10-15 slides: 1) Problem (make it painful), 2) Solution (your unique approach), 3) Market Size (TAM/SAM/SOM), 4) Business Model (how you make money), 5) Traction (growth metrics), 6) Competition (why you win), 7) Team (why you're the right people), 8) Financials (3-year projection), 9) Ask (how much, for what), 10) Vision (where you're going). Keep each slide to one key message." },
            { heading: "Storytelling Over Data", content: "Lead with a story, not statistics. 'My grandmother couldn't find affordable medicine in our village — so we built...' is more powerful than 'The Indian pharma market is worth ₹X crore.' Use specific customer stories, personal experiences, and vivid examples. Data supports the story; it shouldn't be the story. Investors invest in narratives they can retell to their partners." },
            { heading: "Handling Tough Questions", content: "Common investor concerns: 'What if Google/big company does this?' (Focus on your niche advantage and speed). 'Why hasn't this been done before?' (Timing: what's changed to make this possible now). 'Your unit economics don't work' (Show path to improvement with scale). 'Team is too small' (Highlight your specific advantages and hiring plan). Never bluff — 'I don't know, but I'll find out' is better than a bad answer." },
            { heading: "After the Pitch", content: "Follow up within 24 hours with a thank-you email and any materials requested. Address unanswered questions in writing. Don't wait passively — if interested, investors will respond in 1-2 weeks. If not, ask for feedback and referrals to other investors. Keep investors updated monthly with progress (even those who said no — situations change). Build relationships for the long term, not just for one round." }
          ],
          chart: { type: "pie", title: "What Investors Evaluate in Pitches", data: [{ name: "Team", value: 30 }, { name: "Market Size", value: 25 }, { name: "Traction", value: 20 }, { name: "Product", value: 15 }, { name: "Business Model", value: 10 }] },
          table: { title: "Pitch Deck Slide Checklist", headers: ["Slide", "Key Message", "Data Needed", "Time (30min pitch)"], rows: [["Problem", "The pain is real and large", "Customer quotes, market data", "3 minutes"], ["Solution", "Your unique approach", "Product demo/screenshots", "3 minutes"], ["Market Size", "Large and growing", "TAM/SAM/SOM", "2 minutes"], ["Traction", "Proof it works", "Revenue, users, growth %", "4 minutes"], ["Team", "Why you'll win", "Backgrounds, achievements", "3 minutes"]] },
          mindMap: { central: "Investor Pitch", branches: [{ label: "Structure", children: [{ label: "Problem" }, { label: "Solution" }, { label: "Traction" }, { label: "Ask" }] }, { label: "Storytelling", children: [{ label: "Customer Stories" }, { label: "Personal Journey" }, { label: "Vision" }] }, { label: "Prepare For", children: [{ label: "Competition Q" }, { label: "Unit Economics" }, { label: "Scale Plan" }] }, { label: "Follow Up", children: [{ label: "24hr Email" }, { label: "Monthly Updates" }, { label: "Ask for Feedback" }] }] },
          keyTakeaway: "Investors invest in teams, not just ideas — your pitch should answer: Why this? Why you? Why now?",
          conclusion: "Your pitch should be practiced 50+ times and refined with every interaction. Preparation separates funded founders from unfunded ones."
        }
      },
      {
        title: "Growth Hacking Strategies",
        content: {
          overview: "Growth hacking uses creative, low-cost tactics to acquire users rapidly. It combines product, marketing, and data to achieve exponential growth without massive marketing budgets.",
          sections: [
            { heading: "What is Growth Hacking?", content: "Growth hacking was coined by Sean Ellis (who grew Dropbox, Eventbrite). It's not traditional marketing — it's experiment-driven, product-integrated growth. Classic examples: Hotmail added 'Get free email' in signatures (12M users in 18 months). Dropbox gave free space for referrals. PayPal paid users $10 for signing up. Airbnb cross-posted to Craigslist. Each found a creative, scalable acquisition channel." },
            { heading: "The AARRR Framework", content: "Acquisition: How users find you (SEO, social, referral, paid). Activation: First great experience (onboarding completion). Retention: Do they come back? (Daily/weekly active users). Revenue: Do they pay? (Conversion rate, ARPU). Referral: Do they tell others? (Viral coefficient). Measure each step of this 'Pirate Funnel.' Find where users drop off and fix that first — often the biggest growth lever is retention, not acquisition." },
            { heading: "Low-Cost Growth Tactics for India", content: "WhatsApp marketing (with consent — India has 500M+ users). Vernacular content (Hindi, Tamil, Telugu markets are underserved). Referral programs with tangible rewards (₹100 per referral). College ambassador programs (students promote for experience + rewards). Content marketing in regional languages. Telegram/Discord community building. Partnership with complementary services. SEO in long-tail Indian keywords." },
            { heading: "Measuring Growth", content: "North Star Metric: The ONE number that best represents the value you deliver. For Uber: rides per month. For Slack: messages sent. For your startup: identify this metric. Track it weekly. Every experiment should aim to move this number. Use cohort analysis to separate new vs. returning user behavior. A/B test everything: landing pages, onboarding, pricing. Data-driven decisions beat opinions." }
          ],
          chart: { type: "bar", title: "AARRR Funnel Conversion Rates (Typical)", data: [{ name: "Visitors", value: 100 }, { name: "Sign-ups", value: 15 }, { name: "Activated", value: 8 }, { name: "Retained (W4)", value: 4 }, { name: "Paying", value: 2 }, { name: "Referral", value: 1 }] },
          table: { title: "Growth Hacking Experiments to Try", headers: ["Experiment", "Cost", "Time to Test", "Potential Impact", "Effort"], rows: [["Referral program", "₹100/referral", "2 weeks", "High", "Medium"], ["WhatsApp campaign", "Free", "1 week", "Medium", "Low"], ["SEO content", "Time only", "3-6 months", "Very High", "High"], ["College ambassadors", "₹5K/month", "1 month", "Medium", "Medium"], ["Product-led growth", "Dev time", "2-4 weeks", "Very High", "High"]] },
          mindMap: { central: "Growth Hacking", branches: [{ label: "AARRR", children: [{ label: "Acquisition" }, { label: "Activation" }, { label: "Retention" }, { label: "Referral" }] }, { label: "Tactics", children: [{ label: "Referral Program" }, { label: "Content/SEO" }, { label: "Partnerships" }] }, { label: "Measure", children: [{ label: "North Star Metric" }, { label: "Cohort Analysis" }, { label: "A/B Testing" }] }, { label: "India-specific", children: [{ label: "WhatsApp" }, { label: "Vernacular" }, { label: "College Ambassadors" }] }] },
          keyTakeaway: "Think distribution from day one — the best growth hack is a product so good that people want to share it.",
          conclusion: "Growth hacking is a mindset, not a toolkit. Be creative, experiment relentlessly, and let data guide your decisions."
        }
      },
      {
        title: "Government Startup Schemes",
        content: {
          overview: "The Indian government offers extensive support for startups through funding, tax benefits, compliance relaxation, and infrastructure. These programs significantly reduce early-stage risk and should be leveraged fully.",
          sections: [
            { heading: "Startup India Initiative", content: "Launched in 2016, Startup India offers: Self-certification for compliance (6 labor and 3 environmental laws). Tax holiday for 3 years (from a block of 10 years). Faster patent examination at reduced costs. Easy winding-up process. Fund of Funds (₹10,000 crore for startups). Free Intellectual Property support. Access to government procurement. Register on startupindia.gov.in — it's free and takes 30 minutes." },
            { heading: "State-Level Support", content: "Every state has startup policies: Karnataka (highest startup density), Maharashtra (₹500 crore fund), Tamil Nadu (TANSIM incubation), Telangana (T-Hub — India's largest incubator), Kerala (KSUM with ₹300 crore fund), Gujarat (iCreate, seed fund). Benefits vary: co-working space, mentorship, seed funding (₹10-50 lakh), market access, subsidies on patent filing. Check your state's startup policy." },
            { heading: "Tax Benefits for Startups", content: "DPIIT-recognized startups get: 3-year income tax holiday under Section 80-IAC, angel tax exemption (Section 56 relief), carry forward of losses on change in shareholding (Section 79), lower tax on ESOPs (deferred for 5 years or until exit), no capital gains tax on investment in Eligible Startups (Section 54GB). These benefits save lakhs annually. Consult a CA who specializes in startup taxation." },
            { heading: "How to Register and Benefit", content: "Step 1: Incorporate as Private Limited or LLP. Step 2: Register on Startup India portal. Step 3: Get DPIIT recognition (submit innovation description). Step 4: Apply for specific schemes (seed fund, mentorship). Step 5: Check state-level schemes and apply. Step 6: Engage with incubators for additional support. Timeline: 2-4 weeks for full registration. Cost: ₹5,000-15,000 for incorporation + registration." }
          ],
          chart: { type: "bar", title: "Key Government Benefits for Startups", data: [{ name: "Tax Holiday", value: 3 }, { name: "Patent Subsidy %", value: 80 }, { name: "Seed Fund (₹L)", value: 50 }, { name: "Compliance Relief", value: 9 }] },
          table: { title: "Government Startup Schemes Overview", headers: ["Scheme", "Benefit", "Eligibility", "How to Apply"], rows: [["Startup India", "Tax holiday + Compliance", "DPIIT recognized", "startupindia.gov.in"], ["Seed Fund Scheme", "₹20-50 Lakh grant", "Early-stage startup", "Through incubators"], ["SISFS", "Seed funding", "Ideation stage", "State nodal agency"], ["Atal Innovation", "Incubation support", "Tech startups", "aim.gov.in"], ["State Policies", "Varies by state", "State domicile", "State startup portal"]] },
          mindMap: { central: "Govt Support", branches: [{ label: "Startup India", children: [{ label: "Tax Holiday" }, { label: "Self-certification" }, { label: "Fund of Funds" }] }, { label: "State Schemes", children: [{ label: "Seed Funding" }, { label: "Co-working" }, { label: "Mentorship" }] }, { label: "Tax Benefits", children: [{ label: "80-IAC" }, { label: "Angel Tax" }, { label: "ESOP Relief" }] }, { label: "Process", children: [{ label: "Incorporate" }, { label: "Register DPIIT" }, { label: "Apply Schemes" }] }] },
          keyTakeaway: "Don't leave government support on the table — registration is free and benefits can save lakhs annually.",
          conclusion: "Leverage all available government support for maximum runway. These programs exist to help startups like yours succeed."
        }
      },
    ],
  },
];
