import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ScholarshipSection } from "@/components/ScholarshipSection";
import { LearnSection } from "@/components/LearnSection";
import { CommunitySection } from "@/components/CommunitySection";
import { AppShowcase } from "@/components/AppShowcase";
import { BlogSection } from "@/components/BlogSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { SpinningLogo } from "@/components/SpinningLogo";
import { AskAIButton } from "@/components/AskAIButton";

const Index = () => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setShowSpinner(false);
    }
  }, []);

  const handleSpinnerComplete = () => {
    setShowSpinner(false);
    sessionStorage.setItem("hasLoaded", "true");
  };

  return (
    <div className="min-h-screen bg-background">
      {showSpinner && <SpinningLogo onComplete={handleSpinnerComplete} />}
      <Header />
      <AskAIButton />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ScholarshipSection />
        <LearnSection />
        <CommunitySection />
        <AppShowcase />
        <BlogSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
