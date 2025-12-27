import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { featureSubsData } from "@/data/featureData";

export default function TopicDetail() {
  const { category, subIndex, itemIndex } = useParams();
  const navigate = useNavigate();

  const currentSubIndex = Number(subIndex);
  const currentItemIndex = Number(itemIndex);

  // Find the content
  const categoryData = category ? featureSubsData[decodeURIComponent(category)] : null;
  const subCategory = categoryData?.[currentSubIndex - 1];
  const item = subCategory?.items[currentItemIndex - 1];

  // Check if this is the last item in the current subcategory
  const isLastItemInSubCategory = subCategory ? currentItemIndex >= subCategory.items.length : false;
  
  // Check if this is the last subcategory in the category
  const isLastSubCategory = categoryData ? currentSubIndex >= categoryData.length : false;
  
  // Check if this is the very last lesson in the entire category
  const isChapterComplete = isLastItemInSubCategory && isLastSubCategory;

  // Get next subcategory info for "Go to next lesson" button
  const nextSubCategory = categoryData?.[currentSubIndex];

  // Navigation handlers
  const goToNextItem = () => {
    if (category) {
      navigate(`/topic/${encodeURIComponent(category)}/${currentSubIndex}/${currentItemIndex + 1}`);
    }
  };

  const goToNextSubCategory = () => {
    if (category && nextSubCategory) {
      navigate(`/topic/${encodeURIComponent(category)}/${currentSubIndex + 1}/1`);
    }
  };

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
          <div className="mt-12 pt-8 border-t border-border">
            {isChapterComplete ? (
              // Show completion message when category is complete
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  <span className="text-xl font-display font-semibold text-emerald-500">
                    {subCategory.title} completed!
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Congratulations! You've completed all lessons in this category.
                </p>
                <Link to="/#features">
                  <Button variant="hero" size="lg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Explore More Topics
                  </Button>
                </Link>
              </div>
            ) : isLastItemInSubCategory && nextSubCategory ? (
              // Show completion message with "Go to next lesson" for next subcategory
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  <span className="text-xl font-display font-semibold text-emerald-500">
                    {subCategory.title} completed!
                  </span>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border max-w-2xl mx-auto">
                  <h3 className="font-display font-semibold text-lg mb-2">
                    Up Next: {currentSubIndex + 1}. {nextSubCategory.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    {nextSubCategory.introduction}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    {nextSubCategory.items.map((nextItem, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-primary font-medium">{currentSubIndex + 1}.{idx + 1}</span>
                        <span>{nextItem.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="hero" size="lg" onClick={goToNextSubCategory}>
                  Go to next lesson
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ) : (
              // Show normal navigation with "Explore More Topics" and "Next Lesson"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#features">
                  <Button variant="outline" size="lg">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Explore More Topics
                  </Button>
                </Link>
                <Button variant="hero" size="lg" onClick={goToNextItem}>
                  Next Lesson
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
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
