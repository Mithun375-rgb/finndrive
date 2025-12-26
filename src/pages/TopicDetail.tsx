import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { featureSubsData } from "@/data/featureData";

export default function TopicDetail() {
  const { category, subIndex, itemIndex } = useParams();

  // Find the content
  const categoryData = category ? featureSubsData[decodeURIComponent(category)] : null;
  const subCategory = categoryData?.[Number(subIndex) - 1];
  const item = subCategory?.items[Number(itemIndex) - 1];

  if (!item || !subCategory || !categoryData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-3xl font-bold mb-4">Topic Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested topic could not be found.</p>
            <Link to="/">
              <Button variant="hero">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Link 
            to="/#features" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to {category}
          </Link>

          {/* Topic Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary font-display font-semibold text-lg">
                {subIndex}.{itemIndex}
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {subCategory.title}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {item.title}
            </h1>
            <p className="text-lg text-muted-foreground italic max-w-3xl">
              {subCategory.introduction}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <ContentCard 
              label="Definition" 
              content={item.content.definition}
              variant="primary"
            />
            <ContentCard 
              label="Why Required" 
              content={item.content.whyRequired}
              variant="default"
            />
            <ContentCard 
              label="What It Does" 
              content={item.content.whatItDoes}
              variant="default"
            />
            <ContentCard 
              label="How It Works" 
              content={item.content.howItWorks}
              variant="default"
            />
          </div>

          {/* Example & Scenario */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-500 text-lg">📊</span>
                </span>
                <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wider">Example</span>
              </div>
              <p className="text-foreground leading-relaxed">{item.content.example}</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-500 text-lg">💡</span>
                </span>
                <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">Scenario</span>
              </div>
              <p className="text-foreground leading-relaxed">{item.content.scenario}</p>
            </div>
          </div>

          {/* Key Takeaway & Conclusion */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider block mb-3">
                Key Takeaway
              </span>
              <p className="text-xl md:text-2xl font-display font-semibold text-foreground">
                {item.content.keyTakeaway}
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider block mb-3">
                Conclusion
              </span>
              <p className="text-foreground leading-relaxed text-lg">{item.content.conclusion}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border flex justify-center">
            <Link to="/#features">
              <Button variant="hero" size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Explore More Topics
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ContentCard({ 
  label, 
  content, 
  variant = "default" 
}: { 
  label: string; 
  content: string; 
  variant?: "default" | "primary";
}) {
  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-card ${
      variant === "primary" 
        ? "bg-gradient-to-br from-primary/10 to-transparent border-primary/30" 
        : "bg-card border-border"
    }`}>
      <span className={`text-xs font-semibold uppercase tracking-wider block mb-3 ${
        variant === "primary" ? "text-primary" : "text-muted-foreground"
      }`}>
        {label}
      </span>
      <p className="text-foreground leading-relaxed">{content}</p>
    </div>
  );
}
