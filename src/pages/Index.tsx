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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
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
