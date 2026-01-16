import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLearningProgress } from "@/hooks/useLearningProgress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { featureSubsData } from "@/data/featureData";
import { 
  ArrowLeft, 
  BookOpen, 
  Video, 
  HelpCircle, 
  CheckCircle2, 
  Trophy,
  Loader2,
  Lock
} from "lucide-react";

export default function ProgressPage() {
  const { user, loading: authLoading } = useAuth();
  const { progress, loading, getOverallProgress } = useLearningProgress();

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4 text-center">
            <Lock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="font-display text-3xl font-bold mb-4">Sign In Required</h1>
            <p className="text-muted-foreground mb-8">
              Please sign in to view your learning progress.
            </p>
            <Link to="/auth">
              <Button variant="hero" size="lg">
                Sign In
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const overallStats = getOverallProgress();

  // Calculate total possible lessons
  let totalLessons = 0;
  Object.values(featureSubsData).forEach((category) => {
    category.forEach((sub) => {
      totalLessons += sub.items.length;
    });
  });

  const completionPercentage = totalLessons > 0 
    ? Math.round((overallStats.lessonsCompleted / totalLessons) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Your Learning Progress
            </h1>
            <p className="text-muted-foreground">
              Track your journey to financial literacy mastery
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <StatCard
              icon={<BookOpen className="w-6 h-6" />}
              label="Lessons Completed"
              value={overallStats.lessonsCompleted}
              total={totalLessons}
              color="text-primary"
            />
            <StatCard
              icon={<Video className="w-6 h-6" />}
              label="Videos Watched"
              value={overallStats.videosWatched}
              color="text-purple-500"
            />
            <StatCard
              icon={<HelpCircle className="w-6 h-6" />}
              label="Quizzes Completed"
              value={overallStats.quizzesCompleted}
              color="text-emerald-500"
            />
            <StatCard
              icon={<Trophy className="w-6 h-6" />}
              label="Overall Progress"
              value={`${completionPercentage}%`}
              color="text-amber-500"
            />
          </div>

          {/* Overall Progress Bar */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-display">Course Progress</CardTitle>
              <CardDescription>
                You've completed {overallStats.lessonsCompleted} of {totalLessons} lessons
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={completionPercentage} className="h-3" />
              <p className="text-sm text-muted-foreground mt-2">
                {completionPercentage < 100 
                  ? `${100 - completionPercentage}% to go - keep learning!`
                  : "🎉 Congratulations! You've completed all lessons!"}
              </p>
            </CardContent>
          </Card>

          {/* Category Progress */}
          <div className="space-y-6">
            <h2 className="font-display text-xl font-bold">Progress by Category</h2>
            {Object.entries(featureSubsData).map(([categoryName, subcategories]) => {
              const categoryProgress = progress.filter((p) => {
                // Match by checking all subcategories in this category
                return subcategories.some((_, subIdx) =>
                  p.category_index === Object.keys(featureSubsData).indexOf(categoryName) &&
                  p.subcategory_index === subIdx + 1
                );
              });
              
              const totalInCategory = subcategories.reduce((acc, sub) => acc + sub.items.length, 0);
              const completedInCategory = categoryProgress.filter((p) => p.completed).length;
              const categoryPercentage = totalInCategory > 0 
                ? Math.round((completedInCategory / totalInCategory) * 100) 
                : 0;

              return (
                <Card key={categoryName}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-display text-lg">{categoryName}</CardTitle>
                      <span className="text-sm font-medium text-muted-foreground">
                        {completedInCategory}/{totalInCategory} lessons
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={categoryPercentage} className="h-2 mb-4" />
                    <div className="grid gap-2">
                      {subcategories.map((sub, subIdx) => (
                        <div key={subIdx} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            {subIdx + 1}. {sub.title}
                          </span>
                          <div className="flex items-center gap-2">
                            {sub.items.map((_, itemIdx) => {
                              const lessonProgress = progress.find(
                                (p) =>
                                  p.category_index === Object.keys(featureSubsData).indexOf(categoryName) &&
                                  p.subcategory_index === subIdx + 1 &&
                                  p.item_index === itemIdx + 1
                              );
                              
                              return lessonProgress?.completed ? (
                                <CheckCircle2 key={itemIdx} className="w-4 h-4 text-emerald-500" />
                              ) : (
                                <div key={itemIdx} className="w-4 h-4 rounded-full border-2 border-muted" />
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Continue Learning */}
          <div className="mt-8 text-center">
            <Link to="/#features">
              <Button variant="hero" size="lg">
                Continue Learning
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  total,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  total?: number;
  color: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl bg-muted ${color}`}>
            {icon}
          </div>
          <div>
            <p className="text-2xl font-bold font-display">
              {value}
              {total && <span className="text-muted-foreground text-lg">/{total}</span>}
            </p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
