import { FileText, Lightbulb, BarChart3, PieChart, LineChart, Building, Award, Search, BookOpen, Zap, Users, Target } from "lucide-react";
import type { ChartDataPoint, LessonChartData } from "@/components/LessonChart";
import type { TableData } from "@/components/LessonTable";
import type { MindMapData, MindMapNode } from "@/components/MindMap";
import { moneyManagementData } from "./categories/moneyManagement";
import { investmentsData } from "./categories/investments";
import { scholarshipsData } from "./categories/scholarships";
import { startupsData } from "./categories/startups";

export type { ChartDataPoint, LessonChartData, TableData, MindMapData, MindMapNode };

export interface ExplanationSection {
  heading: string;
  content: string;
}

export interface SubItem {
  title: string;
  content: {
    overview: string;
    sections: ExplanationSection[];
    chart?: LessonChartData;
    table?: TableData;
    mindMap: MindMapData;
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
  "Money Management": moneyManagementData,
  "Investments": investmentsData,
  "Scholarships": scholarshipsData,
  "Startups": startupsData,
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
