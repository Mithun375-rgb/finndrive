import { FileText, Lightbulb, BarChart3 } from "lucide-react";
import type { SubCategory } from "../featureData";

export const moneyManagementData: SubCategory[] = [
  {
    icon: FileText,
    title: "Budgeting Tools",
    introduction: "Budgeting is the backbone of financial independence. It helps young people plan their money, avoid overspending, and achieve savings goals.",
    items: [
      {
        title: "Create Monthly Budgets (Income vs. Expenses)",
        content: {
          overview: "A monthly budget is a structured financial plan that compares your total income against all expenses, giving you a clear picture of where your money goes each month. It is the single most important tool for achieving financial control.",
          sections: [
            {
              heading: "What is a Monthly Budget?",
              content: "A monthly budget is a financial roadmap that lists all sources of income and categorizes every expense. It helps you understand your spending patterns, identify areas of waste, and ensure you're living within your means. Think of it as a GPS for your money — without it, you're driving blind. The concept dates back centuries, but modern tools make it easier than ever to create and maintain one."
            },
            {
              heading: "Why Budgeting Matters for Young Adults",
              content: "Studies show that 78% of Indians live paycheck to paycheck. Without a budget, money slips away on small, untracked expenses — a coffee here, a subscription there. Budgeting creates awareness, which is the first step toward financial control. When you know exactly where every ₹100 goes, you can redirect it toward savings, investments, or debt repayment. Financial literacy starts with budgeting."
            },
            {
              heading: "How to Create Your First Budget",
              content: "Step 1: List all income sources (salary, freelance, allowance, side hustles). Step 2: Track every expense for one full month — don't skip anything. Step 3: Categorize expenses into fixed (rent, EMIs, insurance) and variable (food, entertainment, shopping). Step 4: Set realistic limits for each category. Step 5: Review weekly and adjust. Use apps like Google Sheets, Mint, or simple pen-and-paper methods."
            },
            {
              heading: "Real-World Application",
              content: "Consider Priya, a 23-year-old earning ₹25,000/month. Before budgeting, she had ₹0 savings and frequently borrowed from friends. After creating a budget: Rent ₹8,000, Food ₹5,000, Transport ₹3,000, Entertainment ₹2,000, Savings ₹5,000, Miscellaneous ₹2,000. Within 6 months, she built a ₹30,000 emergency fund and stopped borrowing entirely."
            },
            {
              heading: "Common Budgeting Mistakes",
              content: "1) Being too restrictive — budgets that are too tight fail fast. 2) Forgetting irregular expenses like annual subscriptions or festivals. 3) Not tracking small expenses — ₹50 here and there adds up to thousands. 4) Giving up after one bad month — budgeting is a skill that improves with practice. 5) Not reviewing regularly — a budget needs weekly check-ins to stay effective."
            }
          ],
          chart: {
            type: "pie",
            title: "Sample Monthly Budget Breakdown (₹25,000 Income)",
            data: [
              { name: "Rent", value: 32 },
              { name: "Food", value: 20 },
              { name: "Transport", value: 12 },
              { name: "Entertainment", value: 8 },
              { name: "Savings", value: 20 },
              { name: "Misc", value: 8 },
            ]
          },
          table: {
            title: "Income vs. Expenses Comparison",
            headers: ["Category", "Amount (₹)", "% of Income", "Type"],
            rows: [
              ["Salary", "25,000", "100%", "Income"],
              ["Rent", "8,000", "32%", "Fixed"],
              ["Food", "5,000", "20%", "Variable"],
              ["Transport", "3,000", "12%", "Fixed"],
              ["Entertainment", "2,000", "8%", "Variable"],
              ["Savings", "5,000", "20%", "Savings"],
              ["Miscellaneous", "2,000", "8%", "Variable"],
            ]
          },
          mindMap: {
            central: "Monthly Budget",
            branches: [
              { label: "Income Sources", children: [{ label: "Salary" }, { label: "Freelance" }, { label: "Side Hustle" }] },
              { label: "Fixed Expenses", children: [{ label: "Rent/EMI" }, { label: "Insurance" }, { label: "Subscriptions" }] },
              { label: "Variable Expenses", children: [{ label: "Food" }, { label: "Entertainment" }, { label: "Shopping" }] },
              { label: "Savings Goals", children: [{ label: "Emergency Fund" }, { label: "Investments" }, { label: "Travel Fund" }] },
            ]
          },
          keyTakeaway: "A budget is not about restricting spending — it's about giving every rupee a purpose and making conscious choices.",
          conclusion: "Creating a monthly budget is the foundation of financial independence. Start today, even if it's imperfect — consistency matters more than perfection."
        }
      },
      {
        title: "Set Spending Limits for Categories",
        content: {
          overview: "Setting spending limits means assigning a maximum amount you're willing to spend in each expense category. This practice prevents lifestyle inflation and ensures your priorities are funded first.",
          sections: [
            {
              heading: "Understanding Spending Limits",
              content: "A spending limit is a self-imposed cap on how much you'll spend in a specific category per month. Unlike a budget that allocates money, limits act as guardrails — they prevent any single category from consuming more than its fair share. This is especially crucial for discretionary spending like dining out, shopping, and entertainment."
            },
            {
              heading: "The Psychology Behind Limits",
              content: "Research in behavioral economics shows that without explicit limits, people anchor to recent spending rather than optimal amounts. If you spent ₹5,000 on shopping last month, you unconsciously treat that as 'normal.' Limits reset this anchor. The pain of hitting a limit also triggers creative problem-solving — cooking at home instead of ordering, or finding free entertainment."
            },
            {
              heading: "How to Set Effective Limits",
              content: "Review 3 months of past spending to find your baseline. Then reduce each non-essential category by 10-20%. Essential categories (rent, groceries) stay realistic. Use the envelope method: physically or digitally separate money into categories. When the envelope is empty, you stop spending. Digital tools like walnut or YNAB automate this process."
            },
            {
              heading: "Adjusting Limits Over Time",
              content: "Limits aren't permanent. Review them monthly. If you consistently underspend in one category, reallocate that money elsewhere. If a limit feels too tight, loosen it slightly but compensate by tightening another. The goal is finding a sustainable balance between enjoyment and financial progress. Life events (salary raise, new expense) require limit recalibration."
            }
          ],
          chart: {
            type: "bar",
            title: "Recommended Spending Limits by Category",
            data: [
              { name: "Housing", value: 30 },
              { name: "Food", value: 15 },
              { name: "Transport", value: 10 },
              { name: "Shopping", value: 10 },
              { name: "Fun", value: 10 },
              { name: "Savings", value: 20 },
              { name: "Other", value: 5 },
            ]
          },
          table: {
            title: "Spending Limit Guide (₹30,000 Income)",
            headers: ["Category", "Limit (₹)", "Priority", "Flexibility"],
            rows: [
              ["Housing", "9,000", "Essential", "Low"],
              ["Groceries", "4,500", "Essential", "Medium"],
              ["Transport", "3,000", "Essential", "Medium"],
              ["Shopping", "3,000", "Wants", "High"],
              ["Entertainment", "3,000", "Wants", "High"],
              ["Savings", "6,000", "Priority", "Low"],
              ["Miscellaneous", "1,500", "Buffer", "High"],
            ]
          },
          mindMap: {
            central: "Spending Limits",
            branches: [
              { label: "Needs (50%)", children: [{ label: "Housing" }, { label: "Food" }, { label: "Utilities" }] },
              { label: "Wants (30%)", children: [{ label: "Shopping" }, { label: "Dining Out" }, { label: "Hobbies" }] },
              { label: "Savings (20%)", children: [{ label: "Emergency" }, { label: "Investments" }] },
              { label: "Methods", children: [{ label: "Envelope System" }, { label: "App Alerts" }, { label: "Cash Only" }] },
            ]
          },
          keyTakeaway: "Spending limits turn vague intentions into concrete financial boundaries that protect your future self.",
          conclusion: "Setting and respecting spending limits is a discipline that compounds over time, leading to financial freedom."
        }
      },
      {
        title: "Visual Charts to Track Progress",
        content: {
          overview: "Visual charts transform raw financial data into intuitive, easy-to-understand graphics. Pie charts, bar graphs, and line charts make it simple to spot trends, identify problems, and celebrate progress in your financial journey.",
          sections: [
            {
              heading: "Why Visuals Beat Numbers",
              content: "The human brain processes visual information 60,000 times faster than text. A spreadsheet of expenses is useful but overwhelming. A pie chart showing 40% going to rent instantly communicates the same information. Visual tracking also triggers emotional responses — seeing savings grow on a line chart is motivating in ways that numbers alone can't achieve."
            },
            {
              heading: "Types of Financial Charts",
              content: "Pie Charts: Show percentage breakdown of spending categories. Best for monthly snapshots. Bar Charts: Compare spending across months or categories. Great for spotting trends. Line Charts: Track progress over time (savings growth, debt reduction). Area Charts: Similar to line charts but emphasize volume. Each type serves a specific purpose — use the right chart for the right insight."
            },
            {
              heading: "Reading Your Financial Story",
              content: "Every chart tells a story. A pie chart dominated by one color means over-concentration. A line chart trending upward on savings means progress. Sudden spikes in bar charts indicate irregular spending that needs investigation. The key is regular review — weekly for expenses, monthly for net worth, quarterly for investment performance."
            },
            {
              heading: "Tools for Visual Tracking",
              content: "Free options include Google Sheets (built-in charts), Excel, and apps like Walnut or Money Manager. For advanced visualization, try personal finance dashboards that auto-categorize bank transactions. Even a simple hand-drawn bar chart in a notebook works — the medium matters less than the habit of visualizing your finances regularly."
            }
          ],
          chart: {
            type: "area",
            title: "Monthly Savings Growth Over 12 Months",
            data: [
              { name: "Jan", value: 2000 },
              { name: "Feb", value: 4500 },
              { name: "Mar", value: 7000 },
              { name: "Apr", value: 9000 },
              { name: "May", value: 12000 },
              { name: "Jun", value: 15500 },
              { name: "Jul", value: 18000 },
              { name: "Aug", value: 21000 },
              { name: "Sep", value: 24500 },
              { name: "Oct", value: 28000 },
              { name: "Nov", value: 32000 },
              { name: "Dec", value: 36000 },
            ]
          },
          table: {
            title: "Chart Types & Best Use Cases",
            headers: ["Chart Type", "Best For", "Example Use", "Frequency"],
            rows: [
              ["Pie Chart", "Category breakdown", "Monthly expense split", "Monthly"],
              ["Bar Chart", "Comparison", "Month-over-month spending", "Monthly"],
              ["Line Chart", "Trends over time", "Savings growth trajectory", "Weekly"],
              ["Area Chart", "Volume emphasis", "Cumulative investments", "Quarterly"],
              ["Stacked Bar", "Multi-category comparison", "Income vs expenses over time", "Monthly"],
            ]
          },
          mindMap: {
            central: "Visual Tracking",
            branches: [
              { label: "Chart Types", children: [{ label: "Pie Chart" }, { label: "Bar Chart" }, { label: "Line Chart" }] },
              { label: "What to Track", children: [{ label: "Expenses" }, { label: "Savings" }, { label: "Net Worth" }] },
              { label: "Tools", children: [{ label: "Google Sheets" }, { label: "Finance Apps" }, { label: "Notebooks" }] },
              { label: "Review Cadence", children: [{ label: "Weekly" }, { label: "Monthly" }, { label: "Quarterly" }] },
            ]
          },
          keyTakeaway: "What gets measured gets managed — and what gets visualized gets understood and acted upon.",
          conclusion: "Visual charts make financial tracking engaging and actionable. Start with one chart type and build from there."
        }
      },
      {
        title: "Alerts When You're Close to Overspending",
        content: {
          overview: "Spending alerts are automated notifications that warn you when your spending in any category approaches its limit. They act as a real-time financial safety net, preventing budget overruns before they happen.",
          sections: [
            {
              heading: "How Spending Alerts Work",
              content: "Spending alerts monitor your transactions against preset limits. When you reach 75-90% of a category limit, you receive a notification. This early warning gives you time to adjust behavior — cook at home, skip a purchase, or find cheaper alternatives. Modern banking apps and budgeting tools offer this feature, making it automatic and effortless."
            },
            {
              heading: "Types of Financial Alerts",
              content: "Category Alerts: Triggered when spending in a category nears its limit. Balance Alerts: When account balance drops below a minimum threshold. Bill Reminders: Before due dates to avoid late fees. Large Transaction Alerts: For unusual or big purchases. Savings Milestone Alerts: Positive reinforcement when you hit savings goals. Each type serves a protective or motivational purpose."
            },
            {
              heading: "Setting Up Effective Alerts",
              content: "Set category alerts at 80% of the limit — this gives you 20% buffer to adjust. For essentials like groceries, set at 90% since these are harder to cut. For wants like entertainment, set at 70% to give more adjustment room. Avoid alert fatigue by limiting to 5-7 key categories. Review alert thresholds monthly as your spending patterns change."
            },
            {
              heading: "Behavioral Impact of Alerts",
              content: "Research shows that real-time financial feedback reduces overspending by 15-20%. Alerts create a 'pause moment' — a brief interruption that engages your rational brain before an impulsive purchase. Over time, this builds automatic self-regulation. Many users report that just knowing alerts are active makes them more mindful, even before any alert triggers."
            }
          ],
          chart: {
            type: "bar",
            title: "Alert Threshold Recommendations by Category",
            data: [
              { name: "Groceries", value: 90 },
              { name: "Dining", value: 75 },
              { name: "Shopping", value: 70 },
              { name: "Entertainment", value: 70 },
              { name: "Transport", value: 85 },
              { name: "Subscriptions", value: 95 },
            ]
          },
          table: {
            title: "Alert Types & Configuration Guide",
            headers: ["Alert Type", "Trigger Point", "Action Required", "Priority"],
            rows: [
              ["Category Limit", "80% spent", "Reduce spending", "High"],
              ["Low Balance", "Below ₹5,000", "Check upcoming bills", "Critical"],
              ["Bill Due", "3 days before", "Arrange payment", "High"],
              ["Large Purchase", "Above ₹2,000", "Verify transaction", "Medium"],
              ["Savings Goal", "Milestone reached", "Celebrate & continue", "Low"],
            ]
          },
          mindMap: {
            central: "Spending Alerts",
            branches: [
              { label: "Alert Types", children: [{ label: "Category Limit" }, { label: "Low Balance" }, { label: "Bill Reminder" }] },
              { label: "Channels", children: [{ label: "Push Notification" }, { label: "SMS" }, { label: "Email" }] },
              { label: "Thresholds", children: [{ label: "70% (Wants)" }, { label: "80% (General)" }, { label: "90% (Needs)" }] },
              { label: "Benefits", children: [{ label: "Prevents Overrun" }, { label: "Builds Awareness" }, { label: "Reduces Stress" }] },
            ]
          },
          keyTakeaway: "Alerts transform budgeting from a passive plan into an active, real-time financial defense system.",
          conclusion: "Setting up spending alerts is a 5-minute action that saves thousands of rupees over a lifetime."
        }
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
          overview: "The 50/30/20 rule is a simple budgeting framework that divides your after-tax income into three categories: 50% for needs, 30% for wants, and 20% for savings. It provides a balanced approach to money management.",
          sections: [
            {
              heading: "Understanding the Formula",
              content: "Popularized by Senator Elizabeth Warren in her book 'All Your Worth,' this rule creates a sustainable balance. Needs (50%) include rent, utilities, groceries, insurance, and minimum debt payments. Wants (30%) cover dining out, entertainment, shopping, and hobbies. Savings (20%) goes to emergency funds, investments, and extra debt payments."
            },
            {
              heading: "Adapting for Indian Incomes",
              content: "In high-cost cities like Mumbai or Bangalore, housing alone might consume 40% of income. Adjust the rule: try 60/20/20 or 50/25/25 depending on your situation. The key principle remains — save at least 20% before spending on wants. For lower incomes, even 50/40/10 is a valid starting point. Progress gradually toward the ideal ratio."
            },
            {
              heading: "Implementing Step by Step",
              content: "Month 1: Track all spending and categorize into needs/wants/savings. Month 2: Identify wants that can be reduced. Month 3: Automate the 20% savings transfer on payday. Month 4: Fine-tune categories. By Month 6, the habit becomes automatic. Use separate bank accounts or digital wallets for each category to maintain discipline."
            },
            {
              heading: "When the Rule Doesn't Apply",
              content: "High-income earners should save more than 20% — try 30-50%. Those with significant debt should allocate more to debt repayment. Students with minimal income can start with 80/10/10. The rule is a guideline, not gospel. What matters is having any structured allocation rather than spending randomly."
            }
          ],
          chart: {
            type: "pie",
            title: "The 50/30/20 Rule Breakdown",
            data: [
              { name: "Needs (50%)", value: 50 },
              { name: "Wants (30%)", value: 30 },
              { name: "Savings (20%)", value: 20 },
            ]
          },
          table: {
            title: "50/30/20 Applied to Different Income Levels",
            headers: ["Monthly Income", "Needs (50%)", "Wants (30%)", "Savings (20%)"],
            rows: [
              ["₹15,000", "₹7,500", "₹4,500", "₹3,000"],
              ["₹25,000", "₹12,500", "₹7,500", "₹5,000"],
              ["₹40,000", "₹20,000", "₹12,000", "₹8,000"],
              ["₹60,000", "₹30,000", "₹18,000", "₹12,000"],
              ["₹1,00,000", "₹50,000", "₹30,000", "₹20,000"],
            ]
          },
          mindMap: {
            central: "50/30/20 Rule",
            branches: [
              { label: "Needs 50%", children: [{ label: "Rent" }, { label: "Groceries" }, { label: "Utilities" }, { label: "Insurance" }] },
              { label: "Wants 30%", children: [{ label: "Dining Out" }, { label: "Shopping" }, { label: "Entertainment" }] },
              { label: "Savings 20%", children: [{ label: "Emergency Fund" }, { label: "Investments" }, { label: "Debt Payoff" }] },
              { label: "Variations", children: [{ label: "60/20/20" }, { label: "70/20/10" }, { label: "40/30/30" }] },
            ]
          },
          keyTakeaway: "The 50/30/20 rule gives you permission to enjoy life while building a secure financial future.",
          conclusion: "Start with any ratio that works for you, then gradually move toward the 50/30/20 ideal."
        }
      },
      {
        title: "Automate Savings into a Separate Account",
        content: {
          overview: "Automating savings means setting up automatic transfers from your main account to a dedicated savings account on payday. This 'pay yourself first' strategy eliminates willpower from the equation.",
          sections: [
            {
              heading: "The Pay Yourself First Principle",
              content: "Most people save what's left after spending. This rarely works because there's never anything 'left.' Flipping the script — saving first, then spending what remains — guarantees savings happen. Automation makes this effortless. The money moves before you can miss it or spend it."
            },
            {
              heading: "Setting Up Automation",
              content: "Step 1: Open a separate savings account (different bank recommended to reduce temptation). Step 2: Set up a standing instruction for payday +1 day. Step 3: Start with 10% of income if 20% feels too much. Step 4: Increase by 1% every quarter. Most banks offer free standing instructions through net banking or mobile apps."
            },
            {
              heading: "Advanced Automation Strategies",
              content: "Round-up savings: Apps round up every purchase and save the difference. Salary split: Ask HR to split salary into two accounts. Goal-based accounts: Create separate sub-accounts for different goals (vacation, emergency, car). Recurring SIPs: Automate mutual fund investments along with savings. Each layer of automation strengthens your financial position."
            },
            {
              heading: "Overcoming Resistance",
              content: "Common objection: 'I can't afford to save.' Reality: Even ₹500/month is ₹6,000/year. Start embarrassingly small if needed — the habit matters more than the amount. Another concern: 'What if I need the money?' Keep your emergency fund accessible but your investment savings in accounts with slight friction (like FDs with penalty for early withdrawal)."
            }
          ],
          chart: {
            type: "line",
            title: "Automated Savings Growth (₹5,000/month at 8%)",
            data: [
              { name: "Year 1", value: 62000 },
              { name: "Year 2", value: 130000 },
              { name: "Year 3", value: 204000 },
              { name: "Year 5", value: 370000 },
              { name: "Year 10", value: 920000 },
              { name: "Year 15", value: 1740000 },
              { name: "Year 20", value: 2950000 },
            ]
          },
          table: {
            title: "Automation Methods Comparison",
            headers: ["Method", "Ease of Setup", "Flexibility", "Best For"],
            rows: [
              ["Standing Instruction", "Easy", "Fixed amount", "Regular savings"],
              ["SIP (Mutual Fund)", "Medium", "Fixed amount", "Wealth building"],
              ["Round-up Apps", "Easy", "Variable", "Micro-savings"],
              ["Salary Split", "Medium", "Fixed %", "Disciplined savers"],
              ["RD (Recurring Deposit)", "Easy", "Fixed amount", "Safe savings"],
            ]
          },
          mindMap: {
            central: "Automate Savings",
            branches: [
              { label: "Methods", children: [{ label: "Standing Instruction" }, { label: "SIP" }, { label: "Round-up" }] },
              { label: "Accounts", children: [{ label: "Savings A/C" }, { label: "FD" }, { label: "RD" }] },
              { label: "Goals", children: [{ label: "Emergency" }, { label: "Retirement" }, { label: "Travel" }] },
              { label: "Tips", children: [{ label: "Start Small" }, { label: "Increase Gradually" }, { label: "Different Bank" }] },
            ]
          },
          keyTakeaway: "Automation removes willpower from saving — making financial discipline effortless and consistent.",
          conclusion: "Set up one automated transfer today. Your future self will thank you for this single decision."
        }
      },
      {
        title: "Cut Small Daily Expenses",
        content: {
          overview: "The 'Latte Factor' concept shows how small, seemingly insignificant daily expenses compound into massive amounts over time. Cutting ₹150/day saves ₹54,750/year — enough to start a serious investment portfolio.",
          sections: [
            {
              heading: "The Latte Factor Explained",
              content: "Coined by David Bach, the Latte Factor refers to small daily expenses that feel insignificant individually but add up dramatically. A ₹150 daily coffee = ₹4,500/month = ₹54,000/year. Over 10 years invested at 12%, that's over ₹10 lakhs. The point isn't to never enjoy coffee — it's to make conscious choices about which small expenses truly bring value."
            },
            {
              heading: "Identifying Your Hidden Expenses",
              content: "Track every expense under ₹500 for one week. Common culprits: daily tea/coffee from cafes, impulse snacks, auto rides for walkable distances, unused app subscriptions, bottled water (carry a bottle instead), cigarettes/paan. Most people find ₹3,000-5,000 in monthly 'invisible' spending. These aren't bad expenses — they're unconscious ones."
            },
            {
              heading: "Smart Substitution Strategy",
              content: "Don't eliminate — substitute. Cafe coffee → thermos from home (save ₹100/day). Restaurant lunch → home-cooked tiffin (save ₹150/day). Auto for 1km → walk or cycle (save ₹50/day). Premium subscriptions → shared family plans. Brand groceries → store brands for basics. Each substitution maintains your lifestyle quality while reducing costs."
            },
            {
              heading: "Investing Your Savings",
              content: "The magic happens when saved money is invested, not just kept idle. ₹5,000/month saved from cutting small expenses, invested in an index fund at 12% average return: Year 5 = ₹4.1 lakh, Year 10 = ₹11.6 lakh, Year 20 = ₹50 lakh. Small daily choices create life-changing wealth over time."
            }
          ],
          chart: {
            type: "bar",
            title: "Common Daily Expenses That Add Up",
            data: [
              { name: "Coffee", value: 4500 },
              { name: "Snacks", value: 3000 },
              { name: "Auto Rides", value: 2500 },
              { name: "Dining", value: 4000 },
              { name: "Subscriptions", value: 1500 },
              { name: "Impulse Buys", value: 3000 },
            ]
          },
          table: {
            title: "Daily Expense Impact Over Time",
            headers: ["Daily Expense", "Monthly Cost", "Yearly Cost", "10-Year Investment Value"],
            rows: [
              ["₹50", "₹1,500", "₹18,000", "₹3.5 Lakh"],
              ["₹100", "₹3,000", "₹36,000", "₹7 Lakh"],
              ["₹150", "₹4,500", "₹54,000", "₹10.5 Lakh"],
              ["₹200", "₹6,000", "₹72,000", "₹14 Lakh"],
              ["₹300", "₹9,000", "₹1,08,000", "₹21 Lakh"],
            ]
          },
          mindMap: {
            central: "Cut Daily Expenses",
            branches: [
              { label: "Identify", children: [{ label: "Track 1 Week" }, { label: "Under ₹500" }, { label: "Daily Habits" }] },
              { label: "Substitute", children: [{ label: "Home Coffee" }, { label: "Packed Lunch" }, { label: "Walk/Cycle" }] },
              { label: "Invest Savings", children: [{ label: "SIP" }, { label: "Index Fund" }, { label: "RD" }] },
              { label: "Impact", children: [{ label: "₹54K/Year" }, { label: "₹10L in 10 Yrs" }, { label: "Financial Freedom" }] },
            ]
          },
          keyTakeaway: "Small daily savings, when invested consistently, create life-changing wealth — it's not about deprivation, it's about awareness.",
          conclusion: "Find your 'Latte Factor,' substitute smartly, invest the difference, and let compounding do the heavy lifting."
        }
      },
      {
        title: "Build an Emergency Fund",
        content: {
          overview: "An emergency fund is a savings reserve specifically for unexpected expenses — job loss, medical emergencies, car repairs, or urgent home fixes. Financial experts recommend saving 3-6 months of living expenses.",
          sections: [
            {
              heading: "What Qualifies as an Emergency?",
              content: "Emergencies are unexpected, urgent, and necessary. Job loss, medical bills, car breakdown, home repairs, and family emergencies qualify. Sales, vacations, new gadgets, and 'can't miss' deals are NOT emergencies. Having a clear definition prevents raiding your emergency fund for non-emergencies. Write your criteria down and tape it to your fund's passbook."
            },
            {
              heading: "How Much to Save",
              content: "Calculate your essential monthly expenses (rent, food, utilities, transport, insurance, EMIs). Multiply by 3 for a starter fund, 6 for a robust fund. For freelancers or single-income families, aim for 9-12 months. Example: Monthly essentials = ₹20,000 → Starter fund = ₹60,000, Full fund = ₹1,20,000. Don't include wants in this calculation."
            },
            {
              heading: "Where to Keep Your Emergency Fund",
              content: "Priority: Liquidity > Returns. Best options: High-interest savings account (4-6%), Liquid mutual funds (6-7%, redeemable in 24 hours), Short-term FDs (ladder across 1-6 months). Avoid: Stocks (too volatile), long-term FDs (penalty for early withdrawal), real estate (illiquid). Split across 2-3 options for optimal access and returns."
            },
            {
              heading: "Building Your Fund Step by Step",
              content: "Phase 1 (Month 1-3): Save ₹1,000-2,000/month — build a ₹5,000 starter buffer. Phase 2 (Month 4-12): Increase to ₹3,000-5,000/month — reach 1 month of expenses. Phase 3 (Year 2): Automate and reach 3 months. Phase 4 (Year 3): Complete 6 months. If you face an emergency mid-build, use the fund — that's what it's for. Then rebuild."
            }
          ],
          chart: {
            type: "area",
            title: "Emergency Fund Building Timeline",
            data: [
              { name: "Month 1", value: 3000 },
              { name: "Month 3", value: 10000 },
              { name: "Month 6", value: 25000 },
              { name: "Month 9", value: 45000 },
              { name: "Month 12", value: 60000 },
              { name: "Month 18", value: 90000 },
              { name: "Month 24", value: 120000 },
            ]
          },
          table: {
            title: "Emergency Fund Targets by Situation",
            headers: ["Situation", "Monthly Expenses", "Months Needed", "Target Amount"],
            rows: [
              ["Student", "₹10,000", "3 months", "₹30,000"],
              ["Single Employee", "₹20,000", "6 months", "₹1,20,000"],
              ["Married (Dual Income)", "₹35,000", "4 months", "₹1,40,000"],
              ["Married (Single Income)", "₹30,000", "9 months", "₹2,70,000"],
              ["Freelancer", "₹25,000", "12 months", "₹3,00,000"],
            ]
          },
          mindMap: {
            central: "Emergency Fund",
            branches: [
              { label: "How Much", children: [{ label: "3 Months (Min)" }, { label: "6 Months (Ideal)" }, { label: "12 Months (Freelancer)" }] },
              { label: "Where to Keep", children: [{ label: "Savings A/C" }, { label: "Liquid Funds" }, { label: "Short FDs" }] },
              { label: "Real Emergencies", children: [{ label: "Job Loss" }, { label: "Medical" }, { label: "Home Repair" }] },
              { label: "NOT Emergencies", children: [{ label: "Sales" }, { label: "Vacations" }, { label: "Gadgets" }] },
            ]
          },
          keyTakeaway: "An emergency fund is not an investment — it's insurance against life's unpredictability. Build it before investing.",
          conclusion: "Start your emergency fund today with whatever you can. Even ₹1,000 is better than ₹0 when an emergency strikes."
        }
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
          overview: "Recording daily expenses is the practice of logging every financial transaction, no matter how small. This creates a complete picture of your spending habits and reveals hidden money leaks.",
          sections: [
            {
              heading: "Why Daily Tracking Matters",
              content: "Most people can't account for 30-40% of their monthly spending. That 'missing' money goes to small, untracked purchases — snacks, chai, auto rides. Daily tracking eliminates this blind spot. Studies show that people who track expenses daily save 15-20% more than those who don't. Awareness alone changes behavior."
            },
            {
              heading: "Simple Tracking Methods",
              content: "Method 1: Notes app on your phone — create a daily note, add each expense as it happens. Method 2: Dedicated apps like Walnut, Money Manager, or YNAB. Method 3: Small notebook in your pocket. Method 4: Evening recap — spend 5 minutes before bed listing the day's expenses. Method 5: Photo receipts and categorize weekly. Choose what fits your lifestyle."
            },
            {
              heading: "Building the Habit",
              content: "Week 1: Just record, don't judge. Week 2: Start noticing patterns. Week 3: Group expenses into categories. Week 4: Compare against your budget. The key is making it frictionless — the easier the method, the more likely you'll stick with it. Set a daily reminder at 9 PM to log any missed transactions. Within 30 days, it becomes automatic."
            },
            {
              heading: "Analyzing Your Data",
              content: "After one month, you'll have powerful data. Calculate: What % goes to essentials? What's your average daily spend? Which day of the week is most expensive? What's your biggest non-essential category? Use this data to make informed adjustments. Share findings with an accountability partner for extra motivation."
            }
          ],
          chart: {
            type: "bar",
            title: "Average Daily Spending by Category",
            data: [
              { name: "Food", value: 250 },
              { name: "Transport", value: 120 },
              { name: "Shopping", value: 180 },
              { name: "Entertainment", value: 100 },
              { name: "Utilities", value: 80 },
              { name: "Misc", value: 70 },
            ]
          },
          table: {
            title: "Expense Tracking Methods Comparison",
            headers: ["Method", "Cost", "Ease", "Accuracy", "Best For"],
            rows: [
              ["Phone Notes", "Free", "★★★★★", "★★★☆☆", "Beginners"],
              ["Dedicated App", "Free/Paid", "★★★★☆", "★★★★★", "Tech-savvy users"],
              ["Spreadsheet", "Free", "★★★☆☆", "★★★★★", "Detail-oriented"],
              ["Notebook", "₹50", "★★★★★", "★★★☆☆", "Offline preference"],
              ["Bank Statement", "Free", "★★☆☆☆", "★★★★☆", "Minimal effort"],
            ]
          },
          mindMap: {
            central: "Daily Tracking",
            branches: [
              { label: "Methods", children: [{ label: "App" }, { label: "Notebook" }, { label: "Spreadsheet" }] },
              { label: "What to Track", children: [{ label: "Amount" }, { label: "Category" }, { label: "Payment Mode" }] },
              { label: "Habit Building", children: [{ label: "Daily Reminder" }, { label: "Evening Recap" }, { label: "30-Day Challenge" }] },
              { label: "Analysis", children: [{ label: "Weekly Review" }, { label: "Monthly Report" }, { label: "Trend Spotting" }] },
            ]
          },
          keyTakeaway: "You can't manage what you don't measure — daily expense tracking is the foundation of all financial improvement.",
          conclusion: "Pick the simplest method that works for you and start recording today. Perfection isn't the goal — consistency is."
        }
      },
      {
        title: "Categorize Spending (Essentials vs. Non-Essentials)",
        content: {
          overview: "Categorizing spending means separating your expenses into essentials (needs) and non-essentials (wants). This simple act of classification reveals your spending priorities and identifies areas where you can cut back without reducing quality of life.",
          sections: [
            {
              heading: "Defining Essentials vs. Non-Essentials",
              content: "Essentials are expenses you cannot avoid without impacting health, safety, or basic functioning: rent, groceries, utilities, healthcare, insurance, minimum debt payments, basic transportation. Non-essentials are everything else: dining out, entertainment, shopping, premium subscriptions, vacations. The line isn't always clear — a basic phone is essential; the latest iPhone is a want."
            },
            {
              heading: "The Gray Area",
              content: "Some expenses are partly essential, partly want. Internet: essential for work, but a ₹2,000/month plan when ₹500 suffices is partly a want. Clothing: basic clothes are essential; designer labels are wants. Food: home-cooked meals are essential; ordering Swiggy daily is a want. Be honest with yourself about which category each expense truly falls into."
            },
            {
              heading: "Creating Your Categories",
              content: "Beyond the needs/wants split, create sub-categories: Housing (rent, maintenance), Food (groceries vs dining out), Transport (fuel, public transport, ride-shares), Health (insurance, medicines, gym), Personal (clothing, grooming), Entertainment (streaming, outings, hobbies), Education (courses, books), Gifts & Donations. More granularity = better insights."
            },
            {
              heading: "Using Categories to Optimize",
              content: "Once categorized, calculate the ratio: Essentials should be 50-60%, non-essentials 20-30%, savings 15-25%. If non-essentials exceed 30%, identify the top 3 expenses and find alternatives. If essentials exceed 60%, look for ways to reduce fixed costs (negotiate rent, switch insurance, refinance loans). Categories reveal the levers you can pull."
            }
          ],
          chart: {
            type: "pie",
            title: "Typical Spending Split: Before vs. After Categorization",
            data: [
              { name: "Essential - Housing", value: 35 },
              { name: "Essential - Food", value: 15 },
              { name: "Essential - Transport", value: 8 },
              { name: "Want - Dining Out", value: 12 },
              { name: "Want - Shopping", value: 10 },
              { name: "Want - Entertainment", value: 8 },
              { name: "Savings", value: 12 },
            ]
          },
          table: {
            title: "Essential vs. Non-Essential Classification Guide",
            headers: ["Expense", "Essential?", "Average Monthly", "Can Reduce?"],
            rows: [
              ["Rent/EMI", "✅ Yes", "₹8,000-15,000", "Negotiate/Relocate"],
              ["Groceries", "✅ Yes", "₹4,000-6,000", "Meal planning"],
              ["Dining Out", "❌ No", "₹3,000-5,000", "Cook more at home"],
              ["Streaming (Netflix etc)", "❌ No", "₹500-1,500", "Share plans"],
              ["Internet", "✅ Partial", "₹500-2,000", "Downgrade plan"],
              ["Gym", "✅ Partial", "₹1,000-3,000", "Home workouts"],
            ]
          },
          mindMap: {
            central: "Categorize Spending",
            branches: [
              { label: "Essentials", children: [{ label: "Housing" }, { label: "Food" }, { label: "Healthcare" }, { label: "Transport" }] },
              { label: "Non-Essentials", children: [{ label: "Dining Out" }, { label: "Shopping" }, { label: "Subscriptions" }] },
              { label: "Gray Area", children: [{ label: "Internet" }, { label: "Gym" }, { label: "Phone Plan" }] },
              { label: "Optimize", children: [{ label: "50-60% Needs" }, { label: "20-30% Wants" }, { label: "15-25% Savings" }] },
            ]
          },
          keyTakeaway: "Categorization turns a mess of transactions into a clear financial picture that empowers smart decisions.",
          conclusion: "Start by simply marking each expense as 'need' or 'want.' This small step creates powerful financial awareness."
        }
      },
      {
        title: "Weekly and Monthly Reports",
        content: {
          overview: "Financial reports are periodic summaries that consolidate your spending data into actionable insights. Weekly reports catch issues early; monthly reports reveal broader patterns and progress toward goals.",
          sections: [
            {
              heading: "Weekly Reports: Your Early Warning System",
              content: "A weekly report takes 10 minutes every Sunday. Sum up the week's spending by category. Compare against your weekly budget (monthly limit ÷ 4). Ask: Did I overspend anywhere? Is there a pattern (e.g., weekend splurges)? What adjustments should I make this week? Weekly reviews prevent small problems from becoming monthly disasters."
            },
            {
              heading: "Monthly Reports: The Big Picture",
              content: "At month-end, compile: Total income vs total expenses, savings rate percentage, category-wise spending with percentage of income, comparison with last month, progress toward goals. A good monthly report answers: Am I moving toward or away from my financial goals? What's my biggest financial win this month? What's one thing I'll change next month?"
            },
            {
              heading: "Key Metrics to Track",
              content: "Savings Rate: (Income - Expenses) ÷ Income × 100. Target: 20%+. Needs Ratio: Essential expenses ÷ Income. Target: Under 60%. Debt-to-Income: Total EMIs ÷ Income. Target: Under 40%. Average Daily Spend: Total expenses ÷ 30. Net Worth: Assets - Liabilities (track quarterly). These 5 numbers tell your complete financial story."
            },
            {
              heading: "Making Reports Actionable",
              content: "A report without action is just data. After each report, write down: 1) One thing going well (keep doing it), 2) One problem area (create a specific plan), 3) One experiment to try (e.g., 'no-spend weekdays'). Share your monthly report with a trusted friend or partner for accountability. Celebrate improvements, no matter how small."
            }
          ],
          chart: {
            type: "line",
            title: "Monthly Spending Trend Over 6 Months",
            data: [
              { name: "Jan", value: 28000 },
              { name: "Feb", value: 26000 },
              { name: "Mar", value: 24500 },
              { name: "Apr", value: 25000 },
              { name: "May", value: 22000 },
              { name: "Jun", value: 21000 },
            ]
          },
          table: {
            title: "Key Financial Metrics Dashboard",
            headers: ["Metric", "Your Value", "Target", "Status"],
            rows: [
              ["Savings Rate", "18%", "20%+", "🟡 Almost There"],
              ["Needs Ratio", "55%", "Under 60%", "🟢 Good"],
              ["Debt-to-Income", "25%", "Under 40%", "🟢 Healthy"],
              ["Daily Avg Spend", "₹850", "Under ₹800", "🟡 Needs Work"],
              ["Emergency Fund", "₹45,000", "₹1,20,000", "🔴 Building"],
            ]
          },
          mindMap: {
            central: "Financial Reports",
            branches: [
              { label: "Weekly Review", children: [{ label: "10 Min Sunday" }, { label: "Category Check" }, { label: "Adjustments" }] },
              { label: "Monthly Report", children: [{ label: "Income vs Expense" }, { label: "Savings Rate" }, { label: "Goal Progress" }] },
              { label: "Key Metrics", children: [{ label: "Savings Rate" }, { label: "Needs Ratio" }, { label: "Net Worth" }] },
              { label: "Action Items", children: [{ label: "Keep 1 Thing" }, { label: "Fix 1 Thing" }, { label: "Try 1 Thing" }] },
            ]
          },
          keyTakeaway: "Regular financial reports transform raw data into wisdom — they show you not just where your money went, but where it should go.",
          conclusion: "Set a recurring Sunday reminder for weekly reviews and a month-end ritual for comprehensive reports."
        }
      },
      {
        title: "Compare Spending Habits Over Time",
        content: {
          overview: "Comparing your spending across different time periods reveals whether you're improving, plateauing, or regressing financially. This longitudinal view provides motivation and strategic insights that point-in-time snapshots cannot.",
          sections: [
            {
              heading: "Month-over-Month Comparison",
              content: "The simplest comparison: How did this month compare to last month? Look at: Total spending change, category-wise changes, savings rate change, and any new expenses. A 5% reduction in spending month-over-month, sustained over a year, results in a 45% improvement in savings. Small, consistent improvements compound dramatically."
            },
            {
              heading: "Year-over-Year Analysis",
              content: "Compare the same month across years to account for seasonal spending (festivals, academic fees, weather-related costs). This removes monthly noise and reveals true progress. Questions to ask: Has my savings rate improved? Have I reduced dependency on any expense category? Has my income grown faster than my expenses?"
            },
            {
              heading: "Benchmark Against Yourself",
              content: "Don't compare with others — their income, obligations, and goals are different. Instead, set personal benchmarks: 'I'll reduce dining out by 20% in 3 months.' 'I'll increase my savings rate from 15% to 20% this quarter.' 'I'll eliminate one subscription each month.' Track these specific commitments and celebrate hitting them."
            },
            {
              heading: "Spotting and Breaking Patterns",
              content: "Multi-month data reveals behavioral patterns: Spending more on weekends? Emotional shopping after stressful weeks? Subscription creep (slowly adding services)? Lifestyle inflation with each salary raise? Once you see the pattern, you can address the root cause rather than fighting individual expenses. Patterns are where the real savings hide."
            }
          ],
          chart: {
            type: "bar",
            title: "Spending Comparison: Last 6 Months",
            data: [
              { name: "Jan", value: 32000 },
              { name: "Feb", value: 29000 },
              { name: "Mar", value: 27500 },
              { name: "Apr", value: 26000 },
              { name: "May", value: 24000 },
              { name: "Jun", value: 23000 },
            ]
          },
          table: {
            title: "Spending Trend Analysis",
            headers: ["Month", "Total Spent", "Savings", "Savings Rate", "Change"],
            rows: [
              ["January", "₹32,000", "₹3,000", "9%", "Baseline"],
              ["February", "₹29,000", "₹6,000", "17%", "↑ +8%"],
              ["March", "₹27,500", "₹7,500", "21%", "↑ +4%"],
              ["April", "₹26,000", "₹9,000", "26%", "↑ +5%"],
              ["May", "₹24,000", "₹11,000", "31%", "↑ +5%"],
              ["June", "₹23,000", "₹12,000", "34%", "↑ +3%"],
            ]
          },
          mindMap: {
            central: "Compare Over Time",
            branches: [
              { label: "Timeframes", children: [{ label: "Week-on-Week" }, { label: "Month-on-Month" }, { label: "Year-on-Year" }] },
              { label: "What to Compare", children: [{ label: "Total Spend" }, { label: "Categories" }, { label: "Savings Rate" }] },
              { label: "Patterns to Spot", children: [{ label: "Weekend Spikes" }, { label: "Seasonal Trends" }, { label: "Lifestyle Creep" }] },
              { label: "Actions", children: [{ label: "Set Benchmarks" }, { label: "Celebrate Wins" }, { label: "Fix Root Causes" }] },
            ]
          },
          keyTakeaway: "Progress is invisible day-to-day but unmistakable month-to-month — comparison reveals the trajectory your habits are creating.",
          conclusion: "Review your financial journey regularly. The trends matter more than any single month's numbers."
        }
      },
    ],
  },
];
