import { QuizQuestion } from "@/components/TopicQuiz";

// Quiz data organized by category > subcategory index > item index
export const quizData: Record<string, Record<number, Record<number, QuizQuestion[]>>> = {
  "Money Management": {
    1: {
      1: [
        {
          question: "What is the primary purpose of creating a monthly budget?",
          options: [
            "To track only your income",
            "To compare income with expenses and control spending",
            "To increase your debt",
            "To avoid saving money"
          ],
          correctAnswer: 1,
          explanation: "A monthly budget compares your income with expenses, helping you control spending and ensure you live within your means."
        },
        {
          question: "If you earn ₹15,000/month and spend ₹12,000, what is your savings?",
          options: ["₹3,000", "₹12,000", "₹15,000", "₹27,000"],
          correctAnswer: 0,
          explanation: "Savings = Income - Expenses = ₹15,000 - ₹12,000 = ₹3,000"
        },
        {
          question: "What happens without a budget?",
          options: [
            "Money is tracked automatically",
            "Money slips away unnoticed",
            "Savings increase naturally",
            "Expenses decrease"
          ],
          correctAnswer: 1,
          explanation: "Without a budget, you lose track of where your money goes, leading to overspending and financial stress."
        }
      ],
      2: [
        {
          question: "What is the main benefit of setting spending limits for categories?",
          options: [
            "It increases spending",
            "It prevents overspending in non-essential areas",
            "It eliminates the need for budgeting",
            "It removes all spending restrictions"
          ],
          correctAnswer: 1,
          explanation: "Spending limits help you control expenses in each category, preventing overspending on wants while protecting your savings."
        },
        {
          question: "If your entertainment limit is ₹2,000 and you've spent ₹1,800, what should you do?",
          options: [
            "Ignore the limit and spend more",
            "Be cautious and limit remaining entertainment expenses",
            "Increase your limit",
            "Borrow money to spend more"
          ],
          correctAnswer: 1,
          explanation: "When approaching your limit, you should be mindful of remaining expenses to stay within budget."
        }
      ],
      3: [
        {
          question: "What type of visualization is best for showing percentage of income spent on each category?",
          options: ["Line chart", "Pie chart", "Scatter plot", "Heat map"],
          correctAnswer: 1,
          explanation: "Pie charts excel at showing proportions and percentages, making them ideal for displaying spending distribution."
        },
        {
          question: "Why are visual charts helpful for budgeting?",
          options: [
            "They make data harder to understand",
            "They hide problem areas",
            "They make it easy to spot problem areas and patterns",
            "They replace the need for tracking"
          ],
          correctAnswer: 2,
          explanation: "Visual representations make it easier to identify trends, problem areas, and spending patterns at a glance."
        }
      ],
      4: [
        {
          question: "At what percentage of your budget limit should alerts typically be triggered?",
          options: ["10-20%", "30-40%", "50-60%", "80-90%"],
          correctAnswer: 3,
          explanation: "Alerts at 80-90% give you warning before you overspend while still allowing some flexibility."
        },
        {
          question: "What is the purpose of spending alerts?",
          options: [
            "To encourage more spending",
            "To prevent accidental overspending",
            "To track only savings",
            "To remove budget limits"
          ],
          correctAnswer: 1,
          explanation: "Alerts warn you before exceeding limits, encouraging mindful spending decisions."
        }
      ]
    },
    2: {
      1: [
        {
          question: "According to the 50/30/20 rule, what percentage should go to needs?",
          options: ["20%", "30%", "50%", "60%"],
          correctAnswer: 2,
          explanation: "The 50/30/20 rule allocates 50% to needs, 30% to wants, and 20% to savings."
        },
        {
          question: "If your income is ₹30,000, how much should you save according to the 50/30/20 rule?",
          options: ["₹6,000", "₹9,000", "₹15,000", "₹3,000"],
          correctAnswer: 0,
          explanation: "20% of ₹30,000 = ₹6,000 should go to savings."
        }
      ],
      2: [
        {
          question: "What is the main advantage of automating savings?",
          options: [
            "It increases spending temptation",
            "It removes the temptation to spend and ensures consistent saving",
            "It reduces your income",
            "It eliminates the need for budgeting"
          ],
          correctAnswer: 1,
          explanation: "Automatic transfers remove the decision-making process, making saving effortless and consistent."
        }
      ],
      3: [
        {
          question: "If you spend ₹150 on coffee daily, how much do you spend monthly?",
          options: ["₹1,500", "₹3,000", "₹4,500", "₹6,000"],
          correctAnswer: 2,
          explanation: "₹150 × 30 days = ₹4,500 per month. Small daily expenses add up significantly!"
        }
      ],
      4: [
        {
          question: "How many months of expenses should an emergency fund cover?",
          options: ["1-2 months", "3-6 months", "10-12 months", "24 months"],
          correctAnswer: 1,
          explanation: "Financial experts recommend saving 3-6 months of expenses for emergencies."
        }
      ]
    },
    3: {
      1: [
        {
          question: "What is the first step to controlling your spending?",
          options: [
            "Increasing income",
            "Recording daily expenses",
            "Cutting all expenses",
            "Borrowing money"
          ],
          correctAnswer: 1,
          explanation: "Awareness through tracking is the first step - you can't control what you don't measure."
        }
      ],
      2: [
        {
          question: "What are 'essentials' in spending categories?",
          options: [
            "Entertainment and shopping",
            "Needs like rent, food, and utilities",
            "Luxury items",
            "Vacation expenses"
          ],
          correctAnswer: 1,
          explanation: "Essentials are necessary expenses like housing, food, utilities, and transportation."
        }
      ],
      3: [
        {
          question: "How often should you review spending reports for best results?",
          options: [
            "Once a year",
            "Weekly and monthly",
            "Never",
            "Only when in debt"
          ],
          correctAnswer: 1,
          explanation: "Regular weekly and monthly reviews help you stay on track and adjust quickly."
        }
      ],
      4: [
        {
          question: "Why is comparing spending habits over time valuable?",
          options: [
            "It shows you're always the same",
            "It reveals improvement or decline, motivating better habits",
            "It's not valuable",
            "It increases spending"
          ],
          correctAnswer: 1,
          explanation: "Tracking progress over time shows your financial journey and motivates continued improvement."
        }
      ]
    }
  },
  "Investments": {
    1: {
      1: [
        {
          question: "What is the relationship between risk and return?",
          options: [
            "Higher risk always means loss",
            "Higher potential returns usually come with higher risk",
            "Lower risk means higher returns",
            "There is no relationship"
          ],
          correctAnswer: 1,
          explanation: "Generally, investments with higher potential returns carry higher risk, while safer investments offer lower returns."
        },
        {
          question: "Which investment typically has higher risk?",
          options: ["Fixed deposits", "Stocks", "Savings account", "Government bonds"],
          correctAnswer: 1,
          explanation: "Stocks have higher volatility and risk compared to fixed deposits and bonds, but also offer higher potential returns."
        }
      ],
      2: [
        {
          question: "What makes compound interest so powerful?",
          options: [
            "You only earn interest on your principal",
            "You earn interest on both principal and accumulated interest",
            "Interest rates always increase",
            "It reduces your investment"
          ],
          correctAnswer: 1,
          explanation: "Compound interest allows you to earn returns on your returns, leading to exponential growth over time."
        }
      ],
      3: [
        {
          question: "What is the main purpose of diversification?",
          options: [
            "To maximize risk",
            "To put all money in one investment",
            "To spread risk across different asset classes",
            "To avoid investing"
          ],
          correctAnswer: 2,
          explanation: "Diversification reduces risk by spreading investments across different assets that may perform differently."
        }
      ],
      4: [
        {
          question: "Why are investment goals important?",
          options: [
            "They're not important",
            "They give direction and help choose the right investment vehicles",
            "They increase risk",
            "They reduce returns"
          ],
          correctAnswer: 1,
          explanation: "Clear goals help you determine the right investment strategy, timeline, and risk tolerance."
        }
      ]
    },
    2: {
      1: [
        {
          question: "What is a SIP (Systematic Investment Plan)?",
          options: [
            "A one-time large investment",
            "Regular fixed investments at set intervals",
            "A type of loan",
            "A savings account"
          ],
          correctAnswer: 1,
          explanation: "SIP allows you to invest a fixed amount regularly, making investing disciplined and affordable."
        }
      ],
      2: [
        {
          question: "What do you need to start stock investing?",
          options: [
            "Only cash",
            "A demat account and broker",
            "A business degree",
            "Minimum ₹1 lakh"
          ],
          correctAnswer: 1,
          explanation: "You need a demat account to hold shares and a broker to execute trades in the stock market."
        }
      ],
      3: [
        {
          question: "What is the main characteristic of fixed income securities?",
          options: [
            "Highly volatile returns",
            "Fixed interest at regular intervals",
            "No guaranteed returns",
            "High risk"
          ],
          correctAnswer: 1,
          explanation: "Fixed income securities provide predictable, regular interest payments with lower risk."
        }
      ],
      4: [
        {
          question: "Why include gold in a portfolio?",
          options: [
            "It always has highest returns",
            "It acts as a hedge against inflation and market crashes",
            "It's risk-free",
            "It replaces all other investments"
          ],
          correctAnswer: 1,
          explanation: "Gold typically moves inversely to stocks, providing protection during market downturns."
        }
      ]
    },
    3: {
      1: [
        {
          question: "How much can you save in taxes under Section 80C?",
          options: ["₹50,000", "₹1 lakh", "₹1.5 lakh", "₹2 lakh"],
          correctAnswer: 2,
          explanation: "Section 80C allows deductions up to ₹1.5 lakh annually on eligible investments."
        }
      ],
      2: [
        {
          question: "Why should you start retirement planning early?",
          options: [
            "It doesn't matter when you start",
            "Compound interest works longer, creating a larger corpus",
            "Returns are guaranteed to be higher",
            "You can skip saving later"
          ],
          correctAnswer: 1,
          explanation: "Starting early gives compound interest more time to work, significantly increasing your retirement corpus."
        }
      ],
      3: [
        {
          question: "What is portfolio rebalancing?",
          options: [
            "Selling all investments",
            "Adjusting asset allocation back to target percentages",
            "Buying only one type of asset",
            "Ignoring market changes"
          ],
          correctAnswer: 1,
          explanation: "Rebalancing means periodically adjusting your portfolio to maintain your desired asset allocation."
        }
      ],
      4: [
        {
          question: "Why use SIP instead of lump sum investing?",
          options: [
            "It always gives higher returns",
            "It averages out market volatility through rupee cost averaging",
            "It's the only way to invest",
            "It requires no discipline"
          ],
          correctAnswer: 1,
          explanation: "SIP reduces the impact of market timing by buying more units when prices are low and fewer when high."
        }
      ]
    }
  },
  "Scholarships": {
    1: {
      1: [
        {
          question: "What is the first step in the scholarship application process?",
          options: [
            "Writing essays",
            "Researching available scholarships and eligibility",
            "Submitting applications",
            "Attending interviews"
          ],
          correctAnswer: 1,
          explanation: "Research is the foundation - understanding what scholarships are available and their requirements is essential."
        }
      ],
      2: [
        {
          question: "What makes a scholarship essay stand out?",
          options: [
            "Generic content",
            "Personal stories and specific examples",
            "Copying from templates",
            "Keeping it very short"
          ],
          correctAnswer: 1,
          explanation: "Personal narratives with specific examples make your essay memorable and authentic."
        }
      ],
      3: [
        {
          question: "How early should you start preparing for scholarship applications?",
          options: [
            "The day before deadline",
            "At least a few weeks to months in advance",
            "After the deadline",
            "It doesn't matter"
          ],
          correctAnswer: 1,
          explanation: "Early preparation allows time for research, gathering documents, writing strong essays, and meeting deadlines."
        }
      ],
      4: [
        {
          question: "What documents are commonly required for scholarships?",
          options: [
            "Only the application form",
            "Transcripts, recommendation letters, essays, and proof of eligibility",
            "Just your resume",
            "No documents needed"
          ],
          correctAnswer: 1,
          explanation: "Most scholarships require multiple supporting documents to verify eligibility and assess candidates."
        }
      ]
    },
    2: {
      1: [
        {
          question: "What are merit-based scholarships awarded for?",
          options: [
            "Financial need only",
            "Academic excellence, talents, or achievements",
            "Random selection",
            "Age"
          ],
          correctAnswer: 1,
          explanation: "Merit-based scholarships recognize academic performance, special talents, or notable achievements."
        }
      ],
      2: [
        {
          question: "What do need-based scholarships primarily consider?",
          options: [
            "Only academic grades",
            "Family's financial situation and ability to pay",
            "Extracurricular activities only",
            "Geographic location"
          ],
          correctAnswer: 1,
          explanation: "Need-based scholarships assess financial need to provide support to those who need it most."
        }
      ],
      3: [
        {
          question: "Who typically offers private scholarships?",
          options: [
            "Only the government",
            "Corporations, foundations, and community organizations",
            "Only schools",
            "No one"
          ],
          correctAnswer: 1,
          explanation: "Private scholarships come from various sources including businesses, nonprofits, and community groups."
        }
      ],
      4: [
        {
          question: "What is a service-based scholarship?",
          options: [
            "A scholarship requiring no commitment",
            "A scholarship requiring future service or work commitment",
            "A scholarship based on grades",
            "A scholarship for athletes only"
          ],
          correctAnswer: 1,
          explanation: "Service-based scholarships require recipients to fulfill certain service obligations after graduation."
        }
      ]
    },
    3: {
      1: [
        {
          question: "How can you effectively manage multiple scholarship applications?",
          options: [
            "Apply to only one",
            "Create a tracking system with deadlines and requirements",
            "Submit the same essay everywhere",
            "Ignore deadlines"
          ],
          correctAnswer: 1,
          explanation: "Organization is key - tracking deadlines, requirements, and progress helps manage multiple applications effectively."
        }
      ],
      2: [
        {
          question: "What should you do after receiving a scholarship?",
          options: [
            "Nothing",
            "Send a thank-you note and maintain eligibility requirements",
            "Immediately stop trying",
            "Return the money"
          ],
          correctAnswer: 1,
          explanation: "Showing gratitude and maintaining requirements ensures good relationships and continued eligibility."
        }
      ],
      3: [
        {
          question: "Why is it important to apply to multiple scholarships?",
          options: [
            "It's not important",
            "It increases chances of receiving funding",
            "One scholarship is always enough",
            "It wastes time"
          ],
          correctAnswer: 1,
          explanation: "Applying to multiple scholarships increases your chances of receiving funding and can stack for larger total amounts."
        }
      ],
      4: [
        {
          question: "What common mistake should you avoid in scholarship applications?",
          options: [
            "Proofreading carefully",
            "Missing deadlines or submitting incomplete applications",
            "Tailoring essays to each scholarship",
            "Gathering documents early"
          ],
          correctAnswer: 1,
          explanation: "Missing deadlines and incomplete applications are common mistakes that disqualify otherwise strong candidates."
        }
      ]
    }
  },
  "Startups": {
    1: {
      1: [
        {
          question: "What is the first step in starting a business?",
          options: [
            "Raising millions in funding",
            "Identifying a problem to solve and validating your idea",
            "Hiring a large team",
            "Building a fancy office"
          ],
          correctAnswer: 1,
          explanation: "Every successful business starts with identifying a real problem and validating that people will pay for a solution."
        }
      ],
      2: [
        {
          question: "What is an MVP (Minimum Viable Product)?",
          options: [
            "The most expensive version of your product",
            "The simplest version that solves the core problem",
            "A product with all features",
            "A marketing term"
          ],
          correctAnswer: 1,
          explanation: "An MVP is the simplest version of your product that allows you to test your idea and learn from real users."
        }
      ],
      3: [
        {
          question: "Why is customer feedback important for startups?",
          options: [
            "It's not important",
            "It helps improve the product and meet market needs",
            "It only provides negative information",
            "It slows down development"
          ],
          correctAnswer: 1,
          explanation: "Customer feedback provides insights to improve your product and ensure it meets real market needs."
        }
      ],
      4: [
        {
          question: "What is product-market fit?",
          options: [
            "Having a pretty product",
            "When your product solves a real need that people will pay for",
            "Having many features",
            "Being in a physical market"
          ],
          correctAnswer: 1,
          explanation: "Product-market fit occurs when your product satisfies a strong market demand."
        }
      ]
    },
    2: {
      1: [
        {
          question: "What is bootstrapping?",
          options: [
            "Raising VC funding",
            "Self-funding your business without external investors",
            "Going into debt",
            "Hiring employees"
          ],
          correctAnswer: 1,
          explanation: "Bootstrapping means building your business using personal savings and revenue, without external funding."
        }
      ],
      2: [
        {
          question: "What do investors look for in a startup?",
          options: [
            "Only the idea",
            "Strong team, market opportunity, and business model",
            "Fancy offices",
            "Personal connections only"
          ],
          correctAnswer: 1,
          explanation: "Investors evaluate the team, market size, product-market fit, and potential for returns."
        }
      ],
      3: [
        {
          question: "What is equity dilution?",
          options: [
            "Increasing your ownership",
            "Reducing your ownership percentage when raising funds",
            "Mixing liquids",
            "A type of funding"
          ],
          correctAnswer: 1,
          explanation: "Dilution occurs when you issue new shares to investors, reducing your percentage ownership."
        }
      ],
      4: [
        {
          question: "What is a pitch deck?",
          options: [
            "A boat deck",
            "A presentation to explain your business to investors",
            "A product prototype",
            "An employee handbook"
          ],
          correctAnswer: 1,
          explanation: "A pitch deck is a visual presentation that tells your company's story to potential investors."
        }
      ]
    },
    3: {
      1: [
        {
          question: "What is a business model?",
          options: [
            "A physical model of your office",
            "How your company creates, delivers, and captures value",
            "A fancy diagram",
            "Your company logo"
          ],
          correctAnswer: 1,
          explanation: "A business model describes how your company makes money and delivers value to customers."
        }
      ],
      2: [
        {
          question: "Why is cash flow management critical for startups?",
          options: [
            "It's not important",
            "Running out of cash is the top reason startups fail",
            "Cash flow manages itself",
            "Only profitable companies need it"
          ],
          correctAnswer: 1,
          explanation: "Cash flow problems are the leading cause of startup failure, making management essential for survival."
        }
      ],
      3: [
        {
          question: "What is a pivot in startup terms?",
          options: [
            "Closing the business",
            "Changing direction based on learnings while keeping the vision",
            "Hiring new employees",
            "Moving offices"
          ],
          correctAnswer: 1,
          explanation: "A pivot is a strategic change in direction based on what you've learned about your market and customers."
        }
      ],
      4: [
        {
          question: "What is unit economics?",
          options: [
            "Physics for startups",
            "The revenue and costs associated with a single unit/customer",
            "Office rent calculations",
            "A type of investment"
          ],
          correctAnswer: 1,
          explanation: "Unit economics measures profitability at the individual customer or transaction level."
        }
      ]
    }
  }
};

// Get quiz for a specific topic
export function getQuizForTopic(category: string, subIndex: number, itemIndex: number): QuizQuestion[] | null {
  const categoryQuizzes = quizData[category];
  if (!categoryQuizzes) return null;
  
  const subCategoryQuizzes = categoryQuizzes[subIndex];
  if (!subCategoryQuizzes) return null;
  
  return subCategoryQuizzes[itemIndex] || null;
}
