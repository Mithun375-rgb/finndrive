import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, HelpCircle, BookmarkCheck, Brain } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { featureSubsData } from "@/data/featureData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TopicQuiz } from "@/components/TopicQuiz";
import { getQuizForTopic } from "@/data/quizData";
import { useLearningProgress } from "@/hooks/useLearningProgress";
import { useAuth } from "@/contexts/AuthContext";
import { LessonChart } from "@/components/LessonChart";
import { LessonTable } from "@/components/LessonTable";
import { MindMap } from "@/components/MindMap";
export default function TopicDetail() {
  const { category, subIndex, itemIndex } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { getProgressForTopic, markLessonComplete, markVideoWatched, saveQuizScore } = useLearningProgress();

  const currentSubIndex = Number(subIndex);
  const currentItemIndex = Number(itemIndex);
  
  // Get category index for progress tracking
  const categoryIndex = category ? Object.keys(featureSubsData).indexOf(decodeURIComponent(category)) : -1;

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

  // Get progress for current topic
  const currentProgress = categoryIndex >= 0 
    ? getProgressForTopic(categoryIndex, currentSubIndex, currentItemIndex) 
    : undefined;

  // Navigation handlers
  const goToNextItem = () => {
    if (category) {
      // Mark current lesson as complete before moving
      if (categoryIndex >= 0 && user) {
        markLessonComplete(categoryIndex, currentSubIndex, currentItemIndex);
      }
      navigate(`/topic/${encodeURIComponent(category)}/${currentSubIndex}/${currentItemIndex + 1}`);
    }
  };

  const goToNextSubCategory = () => {
    if (category && nextSubCategory) {
      // Mark current lesson as complete before moving
      if (categoryIndex >= 0 && user) {
        markLessonComplete(categoryIndex, currentSubIndex, currentItemIndex);
      }
      navigate(`/topic/${encodeURIComponent(category)}/${currentSubIndex + 1}/1`);
    }
  };

  const handleMarkComplete = () => {
    if (categoryIndex >= 0) {
      markLessonComplete(categoryIndex, currentSubIndex, currentItemIndex);
    }
  };


  const handleQuizComplete = (score: number) => {
    if (categoryIndex >= 0) {
      saveQuizScore(categoryIndex, currentSubIndex, currentItemIndex, score);
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
          {/* Breadcrumbs */}
          <Breadcrumbs />

          {/* Topic Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-primary font-display font-semibold text-lg">
                  {subIndex}.{itemIndex}
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {subCategory.title}
                </span>
                {currentProgress?.completed && (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Completed
                  </span>
                )}
              </div>
              {user && !currentProgress?.completed && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleMarkComplete}
                  className="gap-2"
                >
                  <BookmarkCheck className="w-4 h-4" />
                  Mark as Complete
                </Button>
              )}
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {item.title}
            </h1>
            <p className="text-lg text-muted-foreground italic max-w-3xl">
              {subCategory.introduction}
            </p>
          </div>

          {/* Overview */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 mb-8">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-3">Overview</span>
            <p className="text-foreground leading-relaxed text-lg">{item.content.overview}</p>
          </div>

          {/* Detailed Sections */}
          <div className="space-y-6 mb-12">
            {item.content.sections.map((section, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-display font-semibold text-lg mb-3 text-foreground">{section.heading}</h3>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Chart & Table */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {item.content.chart && <LessonChart chart={item.content.chart} />}
            {item.content.table && <LessonTable table={item.content.table} />}
          </div>

          {/* Key Takeaway & Conclusion */}
          <div className="space-y-6 mb-12">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider block mb-3">Key Takeaway</span>
              <p className="text-xl md:text-2xl font-display font-semibold text-foreground">{item.content.keyTakeaway}</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider block mb-3">Conclusion</span>
              <p className="text-foreground leading-relaxed text-lg">{item.content.conclusion}</p>
            </div>
          </div>

          {/* Mind Map */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold">Mind Map</h2>
                <p className="text-sm text-muted-foreground">Visual summary of key concepts</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <MindMap data={item.content.mindMap} />
            </div>
          </div>


          {/* Quiz Section */}
          {category && getQuizForTopic(decodeURIComponent(category), currentSubIndex, currentItemIndex) && (
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold">Test Your Knowledge</h2>
                  <p className="text-sm text-muted-foreground">Take a quick quiz to reinforce your learning</p>
                </div>
              </div>
              <TopicQuiz 
                title={item.title}
                lessonNumber={`${subIndex}.${itemIndex}`}
                questions={getQuizForTopic(decodeURIComponent(category), currentSubIndex, currentItemIndex)!}
                categoryIndex={categoryIndex}
                subcategoryIndex={currentSubIndex}
                itemIndex={currentItemIndex}
                onQuizComplete={handleQuizComplete}
              />
            </div>
          )}

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
