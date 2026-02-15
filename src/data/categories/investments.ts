import { PieChart, LineChart, Building } from "lucide-react";
import type { SubCategory } from "../featureData";

export const investmentsData: SubCategory[] = [
  {
    icon: PieChart,
    title: "Investment Basics",
    introduction: "Understanding investment fundamentals is crucial for building long-term wealth. Start early and let compound interest work for you.",
    items: [
      {
        title: "Understanding Risk vs. Return",
        content: {
          overview: "The risk-return tradeoff is the foundational principle of investing: higher potential returns come with higher risk of loss. Understanding this relationship is essential for making informed investment decisions that align with your goals and comfort level.",
          sections: [
            { heading: "The Risk-Return Spectrum", content: "Every investment sits on a spectrum from low-risk/low-return (savings accounts at 3-4%) to high-risk/high-return (stocks at 12-15% historically). Government bonds, fixed deposits, corporate bonds, balanced funds, large-cap stocks, mid-cap stocks, small-cap stocks, and crypto represent increasing risk levels. Your job is to find where your comfort zone meets your financial goals." },
            { heading: "Types of Investment Risk", content: "Market Risk: Overall market decline affects all investments. Credit Risk: The borrower may default. Inflation Risk: Returns may not beat inflation, losing purchasing power. Liquidity Risk: You can't sell quickly without loss. Concentration Risk: Over-investing in one asset. Currency Risk: For international investments. Understanding each risk type helps you build a portfolio that manages all of them." },
            { heading: "Measuring Your Risk Tolerance", content: "Ask yourself: If my ₹1,00,000 investment dropped to ₹70,000 in a month, would I (a) panic and sell, (b) hold nervously, (c) buy more? If (a), you're conservative — stick to FDs and debt funds. If (b), you're moderate — balanced funds work well. If (c), you're aggressive — equity-heavy portfolios suit you. Risk tolerance also changes with age, income stability, and financial obligations." },
            { heading: "Risk Management Strategies", content: "Diversification across asset classes reduces overall risk. Rupee-cost averaging (SIPs) reduces timing risk. Having an emergency fund prevents forced selling during market dips. Setting stop-losses limits downside. Regular rebalancing maintains your target risk level. Never invest money you'll need within 3 years in volatile assets." }
          ],
          chart: {
            type: "bar",
            title: "Historical Average Returns by Asset Class (India)",
            data: [
              { name: "Savings A/C", value: 3.5 },
              { name: "FD", value: 6.5 },
              { name: "PPF", value: 7.1 },
              { name: "Gold", value: 10 },
              { name: "Large Cap", value: 12 },
              { name: "Mid Cap", value: 15 },
              { name: "Small Cap", value: 18 },
            ]
          },
          table: {
            title: "Risk-Return Comparison of Investment Options",
            headers: ["Investment", "Expected Return", "Risk Level", "Min Horizon", "Liquidity"],
            rows: [
              ["Savings Account", "3-4%", "Very Low", "None", "Instant"],
              ["Fixed Deposit", "6-7%", "Low", "1 Year", "With Penalty"],
              ["PPF", "7.1%", "Very Low", "15 Years", "Partial after 7 yrs"],
              ["Debt Mutual Fund", "6-8%", "Low-Medium", "3 Years", "1-2 Days"],
              ["Large Cap Equity", "10-14%", "Medium", "5 Years", "1-2 Days"],
              ["Small Cap Equity", "15-20%", "High", "7+ Years", "1-2 Days"],
            ]
          },
          mindMap: {
            central: "Risk vs Return",
            branches: [
              { label: "Low Risk", children: [{ label: "FD" }, { label: "PPF" }, { label: "Savings A/C" }] },
              { label: "Medium Risk", children: [{ label: "Balanced Funds" }, { label: "Large Cap" }, { label: "Gold" }] },
              { label: "High Risk", children: [{ label: "Small Cap" }, { label: "Crypto" }, { label: "Startups" }] },
              { label: "Risk Management", children: [{ label: "Diversify" }, { label: "SIP" }, { label: "Emergency Fund" }] },
            ]
          },
          keyTakeaway: "Never invest in something you don't understand — and always match your risk tolerance to your time horizon.",
          conclusion: "Risk is not the enemy; unmanaged risk is. Balance risk and return based on your goals and timeline."
        }
      },
      {
        title: "Power of Compound Interest",
        content: {
          overview: "Compound interest is earning interest on both your original investment (principal) and the accumulated interest from previous periods. Albert Einstein allegedly called it the 'eighth wonder of the world.' It's the most powerful force in wealth creation.",
          sections: [
            { heading: "Simple vs. Compound Interest", content: "Simple interest: ₹10,000 at 10% = ₹1,000/year, always. After 10 years = ₹20,000. Compound interest: ₹10,000 at 10% compounded annually = ₹25,937 after 10 years. The extra ₹5,937 is interest earned on interest. Over 20 years, the difference becomes dramatic: ₹30,000 (simple) vs ₹67,275 (compound). Time amplifies the magic exponentially." },
            { heading: "The Rule of 72", content: "Quick mental math: Divide 72 by your interest rate to find how many years it takes to double your money. At 8% = 9 years. At 12% = 6 years. At 15% = 4.8 years. This simple formula helps you compare investments instantly. ₹1 lakh at 12% doubles to ₹2 lakh in 6 years, ₹4 lakh in 12 years, ₹8 lakh in 18 years, ₹16 lakh in 24 years." },
            { heading: "Starting Early: The Massive Advantage", content: "Rahul starts investing ₹5,000/month at age 22 and stops at 32 (total invested: ₹6 lakh). Priya starts at 32 and invests ₹5,000/month until 62 (total invested: ₹18 lakh). At 12% annual return, Rahul has ₹2.65 crore at 62. Priya has ₹1.76 crore. Rahul invested 1/3 the amount but has 50% more wealth. That's the power of starting early." },
            { heading: "Compounding Frequency Matters", content: "Annual compounding: Interest added once per year. Quarterly: Four times per year (slightly better). Monthly: Twelve times (even better). Daily: 365 times (marginally better than monthly). The more frequent the compounding, the faster your money grows. Most mutual funds compound daily. Bank FDs typically compound quarterly. PPF compounds annually." }
          ],
          chart: {
            type: "line",
            title: "₹10,000 Growing at 10% Compound Interest",
            data: [
              { name: "Year 0", value: 10000 },
              { name: "Year 5", value: 16105 },
              { name: "Year 10", value: 25937 },
              { name: "Year 15", value: 41772 },
              { name: "Year 20", value: 67275 },
              { name: "Year 25", value: 108347 },
              { name: "Year 30", value: 174494 },
            ]
          },
          table: {
            title: "Rule of 72: Doubling Time at Different Rates",
            headers: ["Annual Return", "Years to Double", "₹1 Lakh After 24 Yrs", "Investment Type"],
            rows: [
              ["6%", "12 years", "₹4.05 Lakh", "FDs, PPF"],
              ["8%", "9 years", "₹6.34 Lakh", "Debt Funds"],
              ["10%", "7.2 years", "₹9.85 Lakh", "Balanced Funds"],
              ["12%", "6 years", "₹15.18 Lakh", "Large Cap Equity"],
              ["15%", "4.8 years", "₹28.63 Lakh", "Mid/Small Cap"],
            ]
          },
          mindMap: {
            central: "Compound Interest",
            branches: [
              { label: "Key Factors", children: [{ label: "Rate of Return" }, { label: "Time Period" }, { label: "Frequency" }] },
              { label: "Quick Math", children: [{ label: "Rule of 72" }, { label: "Doubling Time" }, { label: "Future Value" }] },
              { label: "Maximize", children: [{ label: "Start Early" }, { label: "Stay Invested" }, { label: "Reinvest Returns" }] },
              { label: "Enemies", children: [{ label: "Inflation" }, { label: "Fees" }, { label: "Withdrawals" }] },
            ]
          },
          keyTakeaway: "Start investing early — time is your greatest asset. Even small amounts grow into fortunes with enough time and compounding.",
          conclusion: "Compound interest rewards patience and punishes procrastination. The best time to start was 10 years ago. The second best time is today."
        }
      },
      {
        title: "Diversification Strategies",
        content: {
          overview: "Diversification means spreading your investments across different asset classes, sectors, and geographies to reduce the impact of any single investment's poor performance on your overall portfolio.",
          sections: [
            { heading: "Why Diversification Works", content: "Different assets respond differently to the same event. When stocks crash during a recession, gold typically rises. When interest rates increase, bonds fall but savings accounts earn more. By holding a mix, your portfolio remains stable even when individual investments are volatile. Diversification is called 'the only free lunch in investing' because it reduces risk without necessarily reducing expected returns." },
            { heading: "Asset Class Diversification", content: "Equity (Stocks/Mutual Funds): Growth engine, volatile short-term. Debt (Bonds/FDs): Stability and income. Gold: Inflation hedge and crisis insurance. Real Estate: Long-term appreciation and rental income. Cash: Liquidity for opportunities and emergencies. A balanced portfolio includes all five in proportions matching your risk profile and goals." },
            { heading: "Portfolio Models by Age", content: "Age 20-30: 80% equity, 10% debt, 5% gold, 5% cash. Age 30-40: 70% equity, 15% debt, 10% gold, 5% cash. Age 40-50: 50% equity, 30% debt, 10% gold, 10% cash. Age 50+: 30% equity, 45% debt, 15% gold, 10% cash. The '100 minus age' rule for equity allocation is a useful starting point. Adjust based on personal circumstances." },
            { heading: "Common Diversification Mistakes", content: "Over-diversification: Owning 15 mutual funds that all hold the same stocks. Fake diversification: Five large-cap funds = no diversification. Ignoring correlation: Tech stocks and IT sector funds move together. Home country bias: All investments in Indian markets only. The goal is meaningful diversification across truly different assets, not just spreading money across many similar investments." }
          ],
          chart: {
            type: "pie",
            title: "Recommended Portfolio for a 25-Year-Old",
            data: [
              { name: "Equity MF", value: 50 },
              { name: "Direct Stocks", value: 20 },
              { name: "PPF/Debt", value: 15 },
              { name: "Gold", value: 10 },
              { name: "Cash", value: 5 },
            ]
          },
          table: {
            title: "Asset Class Performance in Different Market Conditions",
            headers: ["Condition", "Stocks", "Bonds", "Gold", "Real Estate"],
            rows: [
              ["Bull Market", "📈 Excellent", "📉 Average", "📉 Weak", "📈 Good"],
              ["Bear Market", "📉 Poor", "📈 Good", "📈 Excellent", "➡️ Stable"],
              ["High Inflation", "➡️ Mixed", "📉 Poor", "📈 Excellent", "📈 Good"],
              ["Recession", "📉 Poor", "📈 Good", "📈 Good", "📉 Weak"],
              ["Low Interest", "📈 Good", "📈 Good", "➡️ Mixed", "📈 Good"],
            ]
          },
          mindMap: {
            central: "Diversification",
            branches: [
              { label: "Asset Classes", children: [{ label: "Equity" }, { label: "Debt" }, { label: "Gold" }, { label: "Real Estate" }] },
              { label: "Within Equity", children: [{ label: "Large Cap" }, { label: "Mid Cap" }, { label: "International" }] },
              { label: "By Geography", children: [{ label: "India" }, { label: "US" }, { label: "Emerging Markets" }] },
              { label: "Mistakes", children: [{ label: "Over-diversify" }, { label: "Same Assets" }, { label: "Home Bias" }] },
            ]
          },
          keyTakeaway: "Don't put all your eggs in one basket — but make sure your baskets are actually different.",
          conclusion: "Diversification doesn't guarantee profits, but it significantly reduces the chance of devastating losses."
        }
      },
      {
        title: "Setting Investment Goals",
        content: {
          overview: "Investment goals transform abstract 'saving money' into concrete, time-bound targets. Clear goals dictate which investment vehicles to use, how much to invest, and how long to stay invested.",
          sections: [
            { heading: "SMART Financial Goals", content: "Every investment goal should be Specific (₹50 lakh for a home, not 'save money'), Measurable (track monthly progress), Achievable (based on income and expenses), Relevant (aligned with life priorities), and Time-bound (in 10 years, not 'someday'). Vague goals produce vague results. Specific goals produce specific action plans." },
            { heading: "Short, Medium, and Long-Term Goals", content: "Short-term (1-3 years): Vacation, emergency fund, gadget. Use: FDs, liquid funds, RDs. Medium-term (3-7 years): Car, wedding, education. Use: Debt funds, balanced funds, short-term equity. Long-term (7+ years): Home, retirement, children's education. Use: Equity mutual funds, PPF, NPS, direct stocks. Matching the right investment to the right time horizon is critical." },
            { heading: "Calculating Required Investments", content: "Goal: ₹50 lakh in 10 years. Expected return: 12% (equity mutual funds). Using SIP calculator: Monthly SIP needed = ₹21,700. If that's too much, either extend the timeline, reduce the goal, increase income, or accept higher risk for higher returns. Working backward from the goal makes the plan concrete and actionable." },
            { heading: "Prioritizing Multiple Goals", content: "Most people have 5-10 financial goals. Prioritize: 1) Emergency fund (3-6 months expenses), 2) High-interest debt elimination, 3) Insurance (term + health), 4) Retirement (start SIP even if small), 5) Other goals by urgency. Never sacrifice retirement savings for shorter-term goals — you can borrow for a car but not for retirement." }
          ],
          chart: {
            type: "bar",
            title: "Monthly SIP Needed for Different Goals (12% Return)",
            data: [
              { name: "₹5L (5yr)", value: 6100 },
              { name: "₹10L (7yr)", value: 8000 },
              { name: "₹25L (10yr)", value: 10900 },
              { name: "₹50L (15yr)", value: 10100 },
              { name: "₹1Cr (20yr)", value: 10100 },
              { name: "₹3Cr (25yr)", value: 17700 },
            ]
          },
          table: {
            title: "Goal Planning Framework",
            headers: ["Goal", "Amount", "Timeline", "Vehicle", "Monthly SIP"],
            rows: [
              ["Emergency Fund", "₹1,20,000", "1 Year", "Liquid Fund/RD", "₹10,000"],
              ["Vacation", "₹2,00,000", "2 Years", "Short-term FD", "₹8,000"],
              ["Car Down Payment", "₹5,00,000", "5 Years", "Balanced Fund", "₹6,100"],
              ["Home", "₹50,00,000", "10 Years", "Equity MF", "₹21,700"],
              ["Retirement", "₹3,00,00,000", "30 Years", "Diversified Equity", "₹8,700"],
            ]
          },
          mindMap: {
            central: "Investment Goals",
            branches: [
              { label: "Short-term", children: [{ label: "Emergency Fund" }, { label: "Vacation" }, { label: "Gadgets" }] },
              { label: "Medium-term", children: [{ label: "Car" }, { label: "Wedding" }, { label: "Education" }] },
              { label: "Long-term", children: [{ label: "Home" }, { label: "Retirement" }, { label: "Children" }] },
              { label: "SMART Framework", children: [{ label: "Specific" }, { label: "Measurable" }, { label: "Time-bound" }] },
            ]
          },
          keyTakeaway: "Goals transform investing from gambling to planning — without goals, you're just speculating.",
          conclusion: "Write down your top 3 financial goals today with specific amounts and deadlines. Then calculate what it takes to get there."
        }
      },
    ],
  },
  {
    icon: LineChart,
    title: "Investment Options",
    introduction: "Multiple investment vehicles exist for different goals, risk appetites, and time horizons.",
    items: [
      {
        title: "Mutual Funds for Beginners",
        content: {
          overview: "Mutual funds pool money from thousands of investors and invest it in stocks, bonds, or other securities under professional management. They're the ideal starting point for new investors.",
          sections: [
            { heading: "How Mutual Funds Work", content: "When you invest in a mutual fund, your money is combined with that of other investors. A professional fund manager invests this pool in a diversified portfolio of stocks, bonds, or both. Each investor owns 'units' proportional to their investment. The value of each unit (NAV - Net Asset Value) changes daily based on the portfolio's performance." },
            { heading: "Types of Mutual Funds", content: "Equity Funds: Invest in stocks (large-cap, mid-cap, small-cap, sectoral). Highest growth potential, highest volatility. Debt Funds: Invest in bonds and fixed-income securities. Lower returns, lower risk. Hybrid/Balanced Funds: Mix of equity and debt. Moderate risk and returns. Index Funds: Track market indices like Nifty 50. Low fees, market returns. ELSS: Tax-saving equity funds with 3-year lock-in." },
            { heading: "SIP: The Best Way to Start", content: "Systematic Investment Plan (SIP) lets you invest a fixed amount monthly — as low as ₹500. Benefits: No need to time the market (rupee cost averaging), builds discipline, harnesses compounding, affordable for beginners. A ₹5,000/month SIP in an index fund at 12% average return grows to ₹50 lakh in 20 years." },
            { heading: "Choosing Your First Fund", content: "Beginners should start with: 1) Nifty 50 Index Fund (lowest fees, market returns), 2) Large-cap fund (stable blue-chip companies), 3) ELSS fund (if you need tax savings). Avoid sectoral, thematic, or small-cap funds initially. Look for funds with: low expense ratio (under 1%), consistent 5-year track record, large AUM (assets under management)." }
          ],
          chart: { type: "line", title: "₹5,000/month SIP Growth at 12% Returns", data: [{ name: "Year 1", value: 64000 }, { name: "Year 3", value: 215000 }, { name: "Year 5", value: 413000 }, { name: "Year 10", value: 1162000 }, { name: "Year 15", value: 2513000 }, { name: "Year 20", value: 4996000 }] },
          table: { title: "Mutual Fund Types Comparison", headers: ["Fund Type", "Risk", "Expected Return", "Best For", "Lock-in"], rows: [["Index Fund", "Medium", "10-12%", "Beginners", "None"], ["Large Cap", "Medium", "10-14%", "Stability", "None"], ["Mid Cap", "High", "12-16%", "Growth", "None"], ["ELSS", "Medium-High", "10-14%", "Tax Saving", "3 Years"], ["Debt Fund", "Low", "6-8%", "Capital Safety", "None"]] },
          mindMap: { central: "Mutual Funds", branches: [{ label: "Types", children: [{ label: "Equity" }, { label: "Debt" }, { label: "Hybrid" }, { label: "Index" }] }, { label: "How to Invest", children: [{ label: "SIP" }, { label: "Lump Sum" }, { label: "STP" }] }, { label: "Selection", children: [{ label: "Expense Ratio" }, { label: "Track Record" }, { label: "Fund Manager" }] }, { label: "Platforms", children: [{ label: "Groww" }, { label: "Zerodha" }, { label: "Kuvera" }] }] },
          keyTakeaway: "SIPs in index funds are the simplest, most effective way for beginners to start building wealth.",
          conclusion: "Don't wait for the 'perfect time' — start a small SIP today and increase it as your income grows."
        }
      },
      {
        title: "Stock Market Fundamentals",
        content: {
          overview: "The stock market allows you to buy ownership shares in publicly traded companies. While riskier than mutual funds, direct stock investing offers the highest long-term growth potential and teaches valuable business analysis skills.",
          sections: [
            { heading: "How the Stock Market Works", content: "Companies sell shares to raise capital. These shares trade on exchanges (BSE, NSE in India). When you buy a share, you own a tiny piece of the company. Share prices rise when the company performs well and fall when it doesn't. You profit through price appreciation (selling higher than you bought) and dividends (company sharing profits with shareholders)." },
            { heading: "Fundamental vs Technical Analysis", content: "Fundamental analysis evaluates a company's financial health: revenue growth, profit margins, debt levels, management quality, competitive advantages. Technical analysis studies price charts and patterns to predict short-term movements. For long-term investors, fundamentals matter most. For traders, technicals are primary. Beginners should start with fundamentals — it's more intuitive and reliable." },
            { heading: "Getting Started with Stocks", content: "Step 1: Open a demat + trading account (Zerodha, Groww, Upstox). Step 2: Learn to read financial statements (balance sheet, income statement, cash flow). Step 3: Start with companies you understand (the products you use daily). Step 4: Invest small amounts in 5-7 quality companies. Step 5: Hold for at least 3-5 years. Don't trade — invest." },
            { heading: "Common Beginner Mistakes", content: "1) Trading based on tips from friends or social media. 2) Buying penny stocks hoping they'll multiply. 3) Panic selling during market drops. 4) Over-concentrating in one sector. 5) Checking prices too frequently. 6) Not having a sell strategy. 7) Investing borrowed money. The stock market rewards patience and punishes emotion." }
          ],
          chart: { type: "line", title: "Sensex Growth Over 20 Years (₹10,000 invested)", data: [{ name: "2004", value: 10000 }, { name: "2007", value: 35000 }, { name: "2009", value: 15000 }, { name: "2014", value: 40000 }, { name: "2017", value: 55000 }, { name: "2020", value: 45000 }, { name: "2024", value: 120000 }] },
          table: { title: "Key Financial Ratios for Stock Analysis", headers: ["Ratio", "Formula", "Good Value", "What It Shows"], rows: [["P/E Ratio", "Price / EPS", "Under 25", "Valuation"], ["ROE", "Net Profit / Equity", "Above 15%", "Efficiency"], ["Debt/Equity", "Total Debt / Equity", "Under 1", "Financial Health"], ["Dividend Yield", "Dividend / Price", "Above 2%", "Income"], ["Revenue Growth", "YoY Revenue Change", "Above 10%", "Growth"]] },
          mindMap: { central: "Stock Market", branches: [{ label: "Analysis", children: [{ label: "Fundamental" }, { label: "Technical" }, { label: "Qualitative" }] }, { label: "Key Metrics", children: [{ label: "P/E Ratio" }, { label: "ROE" }, { label: "Debt/Equity" }] }, { label: "Strategy", children: [{ label: "Buy & Hold" }, { label: "Value Investing" }, { label: "Growth Investing" }] }, { label: "Avoid", children: [{ label: "Tips Trading" }, { label: "Penny Stocks" }, { label: "Panic Selling" }] }] },
          keyTakeaway: "Invest in businesses you understand, buy at reasonable prices, and hold for the long term.",
          conclusion: "Stock investing requires patience, research, and emotional discipline — but rewards those who practice all three."
        }
      },
      {
        title: "Fixed Income Securities",
        content: {
          overview: "Fixed income investments provide predictable, regular returns through interest payments. They're essential for portfolio stability, capital preservation, and generating passive income — especially important as you approach financial goals.",
          sections: [
            { heading: "Types of Fixed Income in India", content: "Fixed Deposits (FDs): Bank deposits earning 6-7%. Most familiar and safest. Public Provident Fund (PPF): Government-backed, 7.1%, 15-year lock-in, tax-free returns. National Pension System (NPS): Retirement-focused, partial equity exposure, tax benefits. Corporate Bonds: Higher returns (8-10%) with moderate credit risk. Government Bonds (G-Secs): Sovereign guarantee, 7-8% yields." },
            { heading: "When to Use Fixed Income", content: "Fixed income is ideal for: Goals within 1-5 years (too short for equity volatility), emergency funds (need stability), regular income needs (retirees), balancing a portfolio heavy in equity, and risk-averse investors. The proportion of fixed income in your portfolio should increase as you approach your goal date or as you age." },
            { heading: "Tax Implications", content: "FD interest is fully taxable at your income tax slab. PPF returns are completely tax-free (EEE status). NPS offers additional ₹50,000 deduction under 80CCD(1B). Debt mutual fund gains: STCG (under 3 years) taxed at slab rate, LTCG (over 3 years) at 20% with indexation benefit. Tax efficiency can significantly impact actual returns." },
            { heading: "Building a Fixed Income Ladder", content: "Instead of one large FD, create a ladder: Split ₹5 lakh into 5 FDs of ₹1 lakh each, maturing at 1, 2, 3, 4, and 5 years. As each matures, reinvest for 5 years. This gives you annual liquidity, captures rising interest rates, and maintains a predictable income stream. Apply the same concept to bonds and debt funds." }
          ],
          chart: { type: "bar", title: "Fixed Income Returns Comparison (Annual %)", data: [{ name: "Savings", value: 3.5 }, { name: "FD", value: 6.5 }, { name: "RD", value: 6.2 }, { name: "PPF", value: 7.1 }, { name: "NPS", value: 9 }, { name: "Corp Bond", value: 8.5 }] },
          table: { title: "Fixed Income Options at a Glance", headers: ["Option", "Return", "Risk", "Lock-in", "Tax Benefit"], rows: [["FD", "6-7%", "Very Low", "Flexible", "No (taxable)"], ["PPF", "7.1%", "Zero", "15 Years", "EEE (tax-free)"], ["NPS", "8-10%", "Low-Med", "Till 60", "₹2L under 80C/CCD"], ["RD", "6-6.5%", "Very Low", "1-10 Years", "No"], ["Debt MF", "6-8%", "Low", "None", "Indexation benefit"]] },
          mindMap: { central: "Fixed Income", branches: [{ label: "Options", children: [{ label: "FD" }, { label: "PPF" }, { label: "NPS" }, { label: "Bonds" }] }, { label: "Benefits", children: [{ label: "Stability" }, { label: "Predictable" }, { label: "Low Risk" }] }, { label: "Strategy", children: [{ label: "FD Ladder" }, { label: "Tax Planning" }, { label: "Goal Matching" }] }, { label: "When to Use", children: [{ label: "Short-term Goals" }, { label: "Emergency Fund" }, { label: "Near Retirement" }] }] },
          keyTakeaway: "Fixed income provides the stability foundation that allows you to take calculated risks with your equity investments.",
          conclusion: "Every portfolio needs a fixed income component — it's the anchor that keeps your financial ship steady during storms."
        }
      },
      {
        title: "Gold and Alternative Investments",
        content: {
          overview: "Gold and alternative investments provide diversification beyond traditional stocks and bonds. Gold specifically acts as a hedge against inflation, currency devaluation, and market crashes — making it an essential portfolio component.",
          sections: [
            { heading: "Gold as an Investment", content: "Gold has been a store of value for 5,000 years. In India, it's both cultural and financial. Gold returned ~11% annually over the last 20 years. During the 2008 crisis, when Sensex fell 60%, gold rose 25%. Options: Physical gold (coins/bars), Gold ETFs (traded like stocks), Sovereign Gold Bonds (SGBs — 2.5% annual interest + gold price appreciation, tax-free on maturity), Digital Gold." },
            { heading: "Sovereign Gold Bonds: The Best Way", content: "SGBs issued by RBI offer: gold price appreciation + 2.5% annual interest (unique to SGBs), no storage risk or making charges, tax-free capital gains on maturity (8 years), tradable on exchanges. Available during periodic issue windows. ₹1 lakh in SGB 5 years ago would be worth ₹1.8 lakh today (including interest). Best gold investment option for Indians." },
            { heading: "Real Estate Investment", content: "Direct real estate requires large capital (₹30-50 lakh minimum) and is illiquid. REITs (Real Estate Investment Trusts) democratize real estate investing: invest from ₹10,000-15,000, earn rental income (6-8% yield), benefit from property appreciation, no management headaches. Indian REITs include Embassy, Mindspace, and Brookfield. Great for passive real estate exposure." },
            { heading: "Portfolio Allocation for Alternatives", content: "Recommended allocation: Gold 5-10% (higher during uncertain times), REITs 5-10% (for real estate exposure), International equity 10-15% (geographical diversification). Total alternatives: 20-30% of portfolio. This protects against India-specific risks and provides non-correlated returns. Rebalance annually to maintain target allocation." }
          ],
          chart: { type: "line", title: "Gold Price in India Over 10 Years (per 10g)", data: [{ name: "2015", value: 26000 }, { name: "2017", value: 29000 }, { name: "2019", value: 35000 }, { name: "2020", value: 50000 }, { name: "2022", value: 52000 }, { name: "2024", value: 63000 }] },
          table: { title: "Gold Investment Options Comparison", headers: ["Option", "Min Investment", "Returns", "Storage Risk", "Tax Benefit"], rows: [["Physical Gold", "₹5,000+", "Price only", "Yes", "LTCG after 3 yrs"], ["Gold ETF", "₹500+", "Price only", "No", "LTCG after 3 yrs"], ["SGB", "1 gram (~₹6,300)", "Price + 2.5%", "No", "Tax-free on maturity"], ["Digital Gold", "₹1+", "Price only", "No", "LTCG after 3 yrs"], ["Gold MF", "₹500+", "Price only", "No", "LTCG after 3 yrs"]] },
          mindMap: { central: "Alternative Investments", branches: [{ label: "Gold", children: [{ label: "SGB" }, { label: "ETF" }, { label: "Physical" }] }, { label: "Real Estate", children: [{ label: "REITs" }, { label: "Direct Property" }] }, { label: "International", children: [{ label: "US Stocks" }, { label: "Global Funds" }] }, { label: "Why Diversify", children: [{ label: "Hedge Inflation" }, { label: "Reduce Risk" }, { label: "Non-correlated" }] }] },
          keyTakeaway: "5-10% allocation to gold provides insurance for your portfolio — think of it as a financial safety net, not a growth engine.",
          conclusion: "Alternative investments smooth out overall portfolio volatility and protect against risks that stocks and bonds can't hedge alone."
        }
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
          overview: "Tax-saving investments serve a dual purpose: they reduce your tax liability while simultaneously building wealth. Under various sections of the Income Tax Act, you can save up to ₹1.5 lakh annually from taxable income.",
          sections: [
            { heading: "Section 80C Investments", content: "Section 80C allows deduction of up to ₹1.5 lakh from taxable income. Eligible investments: ELSS mutual funds (3-year lock-in, equity returns), PPF (15-year lock-in, guaranteed 7.1%), NPS (additional ₹50,000 under 80CCD(1B)), Tax-saving FDs (5-year lock-in), ULIP, Sukanya Samriddhi (for girl child), Life insurance premiums. Choose based on your risk appetite and lock-in tolerance." },
            { heading: "ELSS vs PPF vs NPS", content: "ELSS: Shortest lock-in (3 years), highest growth potential (equity-linked, ~12%), but volatile. PPF: Longest lock-in (15 years), guaranteed returns (7.1%), completely tax-free. NPS: Lock-in till 60, best for retirement, partial equity exposure (8-10%), extra ₹50,000 deduction. Best strategy: Use all three — ELSS for growth, PPF for safety, NPS for retirement + extra tax benefit." },
            { heading: "Calculating Tax Savings", content: "At 30% tax bracket: ₹1.5 lakh 80C deduction saves ₹46,800 in taxes. Plus ₹50,000 NPS (80CCD1B) saves ₹15,600 more. Total tax saving: ₹62,400/year. That's like getting a guaranteed 31% instant return on ₹2 lakh invested. Health insurance premium (80D) saves another ₹7,800-15,600. Tax planning is the highest-return, lowest-risk financial activity." },
            { heading: "Common Tax Planning Mistakes", content: "1) Last-minute rush in March — leads to poor investment choices. 2) Buying insurance for tax-saving (endowment/money-back policies are terrible investments). 3) Not utilizing all available deductions. 4) Ignoring NPS for the extra ₹50,000 benefit. 5) Not considering tax on returns (FD interest is taxable; ELSS LTCG above ₹1 lakh is taxed at 10%). Start tax planning in April, not March." }
          ],
          chart: { type: "bar", title: "Tax Savings Under Different Sections", data: [{ name: "80C", value: 46800 }, { name: "80CCD(1B)", value: 15600 }, { name: "80D Health", value: 7800 }, { name: "HRA", value: 36000 }, { name: "Std Deduction", value: 15600 }] },
          table: { title: "Section 80C Investment Options Ranked", headers: ["Option", "Return", "Lock-in", "Risk", "Recommendation"], rows: [["ELSS", "10-14%", "3 Years", "Medium", "⭐⭐⭐⭐⭐"], ["PPF", "7.1%", "15 Years", "Zero", "⭐⭐⭐⭐"], ["NPS", "8-10%", "Till 60", "Low-Med", "⭐⭐⭐⭐"], ["Tax FD", "6-7%", "5 Years", "Very Low", "⭐⭐⭐"], ["ULIP", "6-10%", "5 Years", "Medium", "⭐⭐"]] },
          mindMap: { central: "Tax-Saving", branches: [{ label: "Section 80C", children: [{ label: "ELSS" }, { label: "PPF" }, { label: "Tax FD" }] }, { label: "Section 80CCD", children: [{ label: "NPS Extra ₹50K" }] }, { label: "Section 80D", children: [{ label: "Health Insurance" }, { label: "Parents' Insurance" }] }, { label: "Strategy", children: [{ label: "Plan in April" }, { label: "Max All Sections" }, { label: "Avoid Insurance" }] }] },
          keyTakeaway: "Tax saved is tax earned — smart tax planning can save ₹50,000-60,000 annually while building long-term wealth.",
          conclusion: "Start your tax planning at the beginning of the financial year, not the end. Choose investments for growth, not just tax savings."
        }
      },
      {
        title: "Retirement Planning",
        content: {
          overview: "Retirement planning is building a financial corpus large enough to sustain your lifestyle for 25-30 years after you stop working. Starting at 25 instead of 35 can mean the difference between ₹3 crore and ₹1 crore at retirement.",
          sections: [
            { heading: "Why Start Early", content: "At 12% returns: ₹5,000/month from age 25 = ₹3.24 crore at 60. The same ₹5,000/month from age 35 = only ₹94 lakh at 60. Starting 10 years earlier with the same investment creates 3.4x more wealth. The total invested is only ₹6 lakh more (₹21L vs ₹15L), but compounding adds ₹2.3 crore. This is why 'start early' isn't cliché — it's math." },
            { heading: "Calculating Your Retirement Number", content: "Step 1: Current monthly expenses × 12 = annual expenses. Step 2: Inflate by 6% annually to retirement age. Step 3: Multiply by 25 (assuming 4% withdrawal rate). Example: ₹30,000/month at age 25, retiring at 60. Inflated to ₹2.3 lakh/month at 60. Annual need: ₹27.6 lakh. Corpus needed: ₹6.9 crore. Monthly SIP needed at 12%: ₹10,600. Seems daunting but starts small." },
            { heading: "Retirement Investment Vehicles", content: "EPF: Employer contributes, guaranteed ~8.5%, tax-free. PPF: Safe, tax-free, 7.1%. NPS: Partial equity, tax benefits, annuity at 60. ELSS/Equity MFs: Growth engine for early years. Direct stocks: For knowledgeable investors. Ideal mix: EPF + PPF for safety, NPS for tax + equity, equity MFs for growth. Shift gradually from equity to debt as retirement nears." },
            { heading: "The 4% Withdrawal Rule", content: "Withdraw 4% of your corpus annually in retirement, adjusting for inflation. This historically sustains a portfolio for 30+ years. ₹1 crore corpus = ₹4 lakh/year = ₹33,333/month. ₹3 crore corpus = ₹12 lakh/year = ₹1 lakh/month. Some experts suggest 3.5% for India due to higher inflation. The rule helps you calculate exactly how much you need." }
          ],
          chart: { type: "line", title: "Retirement Corpus: Starting at 25 vs 35 (₹5,000/month SIP)", data: [{ name: "Age 25", value: 0 }, { name: "Age 30", value: 413000 }, { name: "Age 35", value: 1162000 }, { name: "Age 40", value: 2850000 }, { name: "Age 45", value: 6200000 }, { name: "Age 50", value: 13000000 }, { name: "Age 55", value: 26000000 }, { name: "Age 60", value: 32400000 }] },
          table: { title: "Retirement Planning by Age", headers: ["Starting Age", "Monthly SIP", "Years", "Total Invested", "Corpus at 60"], rows: [["25", "₹5,000", "35", "₹21 Lakh", "₹3.24 Crore"], ["30", "₹10,000", "30", "₹36 Lakh", "₹3.53 Crore"], ["35", "₹15,000", "25", "₹45 Lakh", "₹2.84 Crore"], ["40", "₹25,000", "20", "₹60 Lakh", "₹2.50 Crore"]] },
          mindMap: { central: "Retirement Plan", branches: [{ label: "Vehicles", children: [{ label: "EPF" }, { label: "PPF" }, { label: "NPS" }, { label: "Equity MF" }] }, { label: "Calculate", children: [{ label: "Monthly Expenses" }, { label: "Inflation Adjust" }, { label: "25x Rule" }] }, { label: "Strategy", children: [{ label: "Start Early" }, { label: "Increase SIP" }, { label: "Shift to Debt" }] }, { label: "Withdrawal", children: [{ label: "4% Rule" }, { label: "Bucket Strategy" }, { label: "Annuity" }] }] },
          keyTakeaway: "The earlier you start, the easier retirement becomes — time is the most valuable resource in retirement planning.",
          conclusion: "Start with even ₹1,000/month towards retirement. Increase by 10% each year. Your future self will thank you."
        }
      },
      {
        title: "Portfolio Rebalancing",
        content: {
          overview: "Portfolio rebalancing is the process of periodically adjusting your asset allocation back to your target mix. Market movements naturally shift your portfolio away from its intended balance, requiring deliberate correction.",
          sections: [
            { heading: "Why Portfolios Drift", content: "If you start with 70% equity and 30% debt, a strong bull market might shift it to 85-15. Now you're taking more risk than planned. Similarly, a crash might move you to 55-45, making your portfolio too conservative. Drift happens automatically — rebalancing is the manual correction that keeps your portfolio aligned with your goals and risk tolerance." },
            { heading: "When to Rebalance", content: "Calendar-based: Review annually (simplest approach). Threshold-based: Rebalance when any asset class deviates more than 5% from target. Event-based: Major life changes (marriage, job change, child) warrant review. Most investors benefit from annual rebalancing — it's frequent enough to manage risk without excessive trading and tax implications." },
            { heading: "How to Rebalance", content: "Method 1: Sell overweight assets, buy underweight ones. Tax-efficient but triggers capital gains. Method 2: Direct new investments into underweight assets. Slower but avoids selling. Method 3: Redirect SIPs temporarily. Example: 70-30 target became 80-20. Either sell 10% equity and buy debt, or pause equity SIP and increase debt SIP until balanced." },
            { heading: "Rebalancing Improves Returns", content: "Counter-intuitively, selling winners and buying 'losers' improves long-term returns. You're selling high and buying low systematically. Studies show that annual rebalancing adds 0.5-1% to returns over a decade while reducing volatility by 15-20%. It also enforces emotional discipline — preventing greed during bull markets and fear during bear markets." }
          ],
          chart: { type: "bar", title: "Portfolio Before and After Rebalancing", data: [{ name: "Equity (Before)", value: 82 }, { name: "Equity (After)", value: 70 }, { name: "Debt (Before)", value: 13 }, { name: "Debt (After)", value: 20 }, { name: "Gold (Before)", value: 5 }, { name: "Gold (After)", value: 10 }] },
          table: { title: "Rebalancing Methods Comparison", headers: ["Method", "Speed", "Tax Impact", "Effort", "Best For"], rows: [["Sell & Buy", "Immediate", "Capital Gains Tax", "Low", "Large deviations"], ["New Investments", "Gradual", "None", "Medium", "Regular investors"], ["SIP Redirect", "Medium", "None", "Low", "SIP investors"], ["Combination", "Medium", "Minimal", "Medium", "Optimal approach"]] },
          mindMap: { central: "Rebalancing", branches: [{ label: "When", children: [{ label: "Annually" }, { label: "5% Deviation" }, { label: "Life Events" }] }, { label: "How", children: [{ label: "Sell & Buy" }, { label: "New Investments" }, { label: "SIP Redirect" }] }, { label: "Benefits", children: [{ label: "Risk Control" }, { label: "Buy Low/Sell High" }, { label: "Discipline" }] }, { label: "Avoid", children: [{ label: "Over-trading" }, { label: "Tax Inefficiency" }, { label: "Emotional Decisions" }] }] },
          keyTakeaway: "Rebalancing enforces buy-low, sell-high discipline automatically — it's the closest thing to a free lunch in investing.",
          conclusion: "Set an annual calendar reminder to review and rebalance your portfolio. This single habit improves returns and reduces risk."
        }
      },
      {
        title: "Understanding Market Cycles",
        content: {
          overview: "Markets move in predictable cycles of optimism (bull markets) and pessimism (bear markets). Understanding these cycles helps you stay calm during crashes and cautious during euphoria — the two most valuable investor skills.",
          sections: [
            { heading: "The Four Market Phases", content: "Accumulation: Smart money buys quietly after a crash. Prices are low, sentiment is negative. Markup: Broader market starts rising. Media turns positive. More investors join. Distribution: Smart money starts selling to new buyers. Prices peak. Everyone is optimistic. Markdown: Selling accelerates, prices crash, panic sets in. The cycle repeats every 5-10 years. Knowing which phase you're in prevents costly emotional mistakes." },
            { heading: "Historical Cycles in India", content: "2000: Dot-com bust — Sensex fell 55%. 2003-2007: Bull run — Sensex rose from 3,000 to 21,000. 2008: Global financial crisis — Sensex crashed 60% in months. 2009-2020: Long bull market with corrections. 2020: COVID crash — 40% drop, then full recovery in 6 months. 2021-2024: Strong recovery and new highs. Pattern: Every crash has been followed by higher highs. Patience wins." },
            { heading: "How to Behave in Each Phase", content: "During crashes (Markdown/Accumulation): Keep investing via SIP, add extra if possible. This is when wealth is built. During bull markets (Markup): Stay invested but don't get greedy. Avoid over-leveraging. During euphoria (Distribution): Book partial profits, increase cash/debt allocation, resist FOMO. The key insight: Your behavior during extreme market conditions determines your lifetime returns more than which stocks you pick." },
            { heading: "Market Timing vs Time in Market", content: "Missing just the 10 best days in a 20-year period reduces returns by 50%. Since the best days often occur right after the worst days, market timers miss both. ₹1 lakh invested in Sensex in 2004, held continuously = ₹12 lakh by 2024. Same investment missing 10 best days = ₹5 lakh. Stay invested. Use SIPs to remove timing pressure. Time in the market beats timing the market — every single time." }
          ],
          chart: { type: "line", title: "Market Cycles: Sensex Over 20 Years", data: [{ name: "2004", value: 6000 }, { name: "2007", value: 20000 }, { name: "2009", value: 8000 }, { name: "2014", value: 27000 }, { name: "2018", value: 36000 }, { name: "2020", value: 26000 }, { name: "2024", value: 72000 }] },
          table: { title: "Market Cycle Phases & Investor Strategy", headers: ["Phase", "Market Mood", "Price Trend", "Best Action", "Biggest Mistake"], rows: [["Accumulation", "Fear/Despair", "Bottoming out", "Buy aggressively", "Selling in panic"], ["Markup", "Growing optimism", "Rising steadily", "Stay invested", "Waiting for dip"], ["Distribution", "Euphoria/Greed", "Peaking", "Book partial profits", "Going all-in"], ["Markdown", "Denial → Panic", "Falling sharply", "Hold, add via SIP", "Panic selling"]] },
          mindMap: { central: "Market Cycles", branches: [{ label: "Phases", children: [{ label: "Accumulation" }, { label: "Markup" }, { label: "Distribution" }, { label: "Markdown" }] }, { label: "Emotions", children: [{ label: "Fear" }, { label: "Greed" }, { label: "FOMO" }, { label: "Panic" }] }, { label: "Strategy", children: [{ label: "SIP Always" }, { label: "Don't Time" }, { label: "Stay Invested" }] }, { label: "History", children: [{ label: "2008 Crash" }, { label: "2020 COVID" }, { label: "Always Recovered" }] }] },
          keyTakeaway: "Time in the market beats timing the market — every crash has been followed by new highs. Patience is your greatest edge.",
          conclusion: "Understanding cycles builds the emotional fortitude needed to stay invested through the inevitable ups and downs."
        }
      },
    ],
  },
];
