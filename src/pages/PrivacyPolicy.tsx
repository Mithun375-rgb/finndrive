import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Shield, Eye, Lock, Database, Bell, Globe, Trash2, Mail } from "lucide-react";

const sections = [
  {
    icon: Eye,
    title: "1. Information We Collect",
    content: `We collect information to provide you with a better learning experience. Here's what we gather:

**Information you provide:**
• Account details (name, email, password)
• Profile information (display name, preferences)
• Learning progress and quiz scores
• Feedback and support requests

**Information collected automatically:**
• Device information (browser type, operating system)
• Usage data (pages visited, features used, time spent)
• Log data (IP address, access times)

We never collect sensitive financial information like bank account details or credit card numbers unless you're making a purchase.`
  },
  {
    icon: Database,
    title: "2. How We Use Your Information",
    content: `We use your information to:

**Provide our services:**
• Create and manage your account
• Track your learning progress
• Personalize content recommendations
• Sync your data across devices

**Improve our platform:**
• Analyze usage patterns to enhance features
• Fix bugs and technical issues
• Develop new educational content

**Communicate with you:**
• Send important account notifications
• Share educational updates (with your consent)
• Respond to support requests

We never sell your personal information to third parties.`
  },
  {
    icon: Lock,
    title: "3. Data Security",
    content: `We take your data security seriously:

**Technical measures:**
• End-to-end encryption for sensitive data
• Secure HTTPS connections
• Regular security audits and updates
• Access controls and authentication

**Organizational measures:**
• Limited employee access to user data
• Staff training on data protection
• Incident response procedures

While we implement industry-standard security measures, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but will notify you of any breaches that may affect your data.`
  },
  {
    icon: Globe,
    title: "4. Data Sharing & Third Parties",
    content: `We may share your information with:

**Service providers:**
• Cloud hosting providers (to store your data securely)
• Analytics services (to improve our platform)
• Communication tools (to send notifications)

These providers are contractually bound to protect your data and use it only for specified purposes.

**Legal requirements:**
We may disclose your information if required by law, court order, or government request.

**Business transfers:**
In case of merger or acquisition, your data may be transferred to the new entity, who will be bound by this privacy policy.`
  },
  {
    icon: Shield,
    title: "5. Your Rights & Choices",
    content: `You have control over your data:

**Access & portability:**
• View all data we have about you
• Download your data in a portable format

**Correction:**
• Update your profile information anytime
• Correct any inaccurate data

**Deletion:**
• Delete your account and associated data
• Request removal of specific information

**Communication preferences:**
• Opt out of marketing emails
• Manage notification settings

To exercise these rights, visit your account settings or contact us at privacy@findrive.app.`
  },
  {
    icon: Bell,
    title: "6. Cookies & Tracking",
    content: `We use cookies and similar technologies for:

**Essential cookies:**
• Keeping you logged in
• Remembering your preferences
• Ensuring security

**Analytics cookies:**
• Understanding how you use our platform
• Improving user experience

**Managing cookies:**
You can control cookies through your browser settings. Note that disabling essential cookies may affect platform functionality.

We do not use cookies for advertising purposes.`
  },
  {
    icon: Trash2,
    title: "7. Data Retention",
    content: `We retain your data for as long as necessary to provide our services:

**Active accounts:**
• Data is retained while your account is active
• Learning progress is preserved for continuity

**Deleted accounts:**
• Most data is deleted within 30 days
• Some data may be retained for legal compliance (up to 7 years)
• Anonymized data may be kept for analytics

**Automatic deletion:**
• Inactive accounts may be deleted after 2 years of inactivity
• We'll notify you before deletion`
  },
  {
    icon: Mail,
    title: "8. Contact Us",
    content: `If you have questions about this Privacy Policy or your data:

**Email:** privacy@findrive.app
**Address:** Mumbai, Maharashtra, India

**Data Protection Officer:**
For EU residents, you may contact our DPO at dpo@findrive.app

**Complaints:**
If you're not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.

We aim to respond to all privacy inquiries within 30 days.`
  }
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs />
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 28, 2025
            </p>
          </div>

          {/* Commitment banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20 mb-12">
            <div className="flex items-start gap-4">
              <Lock className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="font-display font-semibold mb-2">Our Privacy Commitment</h2>
                <p className="text-muted-foreground">
                  At Findrive, we believe your data belongs to you. We collect only what's necessary 
                  to provide our educational services, we never sell your information, and we give you 
                  full control over your data. Your trust is our priority.
                </p>
              </div>
            </div>
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
                    <div className="text-muted-foreground whitespace-pre-line leading-relaxed prose prose-sm dark:prose-invert max-w-none">
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
              This Privacy Policy may be updated from time to time. We'll notify you of significant 
              changes via email or platform notification. Your continued use of Findrive after changes 
              constitutes acceptance of the updated policy. Questions? {" "}
              <a href="mailto:privacy@findrive.app" className="text-primary hover:underline">
                Contact our privacy team
              </a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
