import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Shield, FileText, Users, AlertCircle } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: `By accessing and using Findrive ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all users, including visitors, registered members, and contributors to the platform.`
  },
  {
    icon: Users,
    title: "2. User Accounts & Responsibilities",
    content: `When you create an account with us, you must provide accurate and complete information. You are responsible for:

• Maintaining the confidentiality of your account credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized use
• Being at least 13 years of age to use this platform

We reserve the right to suspend or terminate accounts that violate these terms.`
  },
  {
    icon: Shield,
    title: "3. Educational Content & Disclaimer",
    content: `Findrive provides educational content about financial literacy, investments, scholarships, and entrepreneurship. This content is for informational purposes only and should not be considered:

• Professional financial advice
• Investment recommendations
• Legal or tax advice
• Guaranteed outcomes

Always consult qualified professionals before making financial decisions. We are not liable for any actions taken based on our educational content.`
  },
  {
    icon: AlertCircle,
    title: "4. Intellectual Property",
    content: `All content on Findrive, including text, graphics, logos, images, and software, is the property of Findrive or its content suppliers and is protected by copyright laws.

You may:
• View and access content for personal, non-commercial use
• Share links to our content with proper attribution

You may not:
• Reproduce, distribute, or create derivative works without permission
• Use our content for commercial purposes without a license
• Remove any copyright or proprietary notices`
  },
  {
    icon: FileText,
    title: "5. User-Generated Content",
    content: `If you submit content to our platform (comments, forum posts, etc.), you:

• Retain ownership of your original content
• Grant us a non-exclusive, royalty-free license to use, display, and distribute your content
• Are responsible for ensuring your content does not violate any laws or third-party rights
• Agree not to post harmful, offensive, or misleading content

We reserve the right to remove any content that violates these terms.`
  },
  {
    icon: Shield,
    title: "6. Limitation of Liability",
    content: `To the maximum extent permitted by law, Findrive shall not be liable for:

• Any indirect, incidental, or consequential damages
• Loss of profits, data, or business opportunities
• Damages arising from your use or inability to use the platform
• Third-party actions or content

Our total liability shall not exceed the amount you paid us in the past 12 months, if any.`
  },
  {
    icon: AlertCircle,
    title: "7. Changes to Terms",
    content: `We may update these Terms of Service from time to time. When we do:

• We will post the updated terms on this page
• We will update the "Last Updated" date
• For significant changes, we may notify you via email or platform notification

Your continued use of the platform after changes constitutes acceptance of the new terms.`
  },
  {
    icon: Users,
    title: "8. Contact Us",
    content: `If you have questions about these Terms of Service, please contact us at:

Email: legal@findrive.app
Address: Mumbai, Maharashtra, India

We aim to respond to all inquiries within 48 business hours.`
  }
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs />
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 28, 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Findrive! These Terms of Service govern your use of our platform and services. 
              We've tried to make them as clear and fair as possible. Please read them carefully before 
              using our platform.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <article 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl font-semibold mb-4">
                      {section.title}
                    </h2>
                    <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 p-6 rounded-2xl bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground text-center">
              By using Findrive, you acknowledge that you have read, understood, and agree to be bound 
              by these Terms of Service. If you have any questions, please don't hesitate to{" "}
              <a href="/#contact" className="text-primary hover:underline">contact us</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
