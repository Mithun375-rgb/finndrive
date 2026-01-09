import { Users, Calendar, Award, MessageCircle, ArrowRight, Video, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const communityFeatures = [
  {
    icon: MessageCircle,
    title: "Discussion Forum",
    description: "Connect with peers, share experiences, and get answers to your financial questions.",
    stats: "5K+ Active Members",
  },
  {
    icon: Calendar,
    title: "Events & Workshops",
    description: "Join live webinars on finance, investing, and entrepreneurship with industry experts.",
    stats: "Weekly Sessions",
  },
  {
    icon: UserCheck,
    title: "Expert Mentorship",
    description: "Get personalized guidance from experienced professionals who've been in your shoes.",
    stats: "200+ Mentors",
  },
];

const upcomingEvents = [
  {
    title: "Investment 101: Stock Market Basics",
    date: "Jan 15, 2025",
    time: "7:00 PM IST",
    host: "Rahul Sharma",
    type: "Live Webinar",
  },
  {
    title: "Scholarship Application Masterclass",
    date: "Jan 20, 2025",
    time: "6:00 PM IST",
    host: "Dr. Priya Menon",
    type: "Workshop",
  },
];

export function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-gradient-dark relative grain">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Community & Engagement</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Grow <span className="text-gradient-gold">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join a thriving community of ambitious individuals on the path to financial success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-gold mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform shadow-gold">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm text-primary font-medium">
                {feature.stats}
              </span>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center mb-8">
            Upcoming Events
          </h3>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {event.date} • {event.time} • Host: {event.host}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                    {event.type}
                  </span>
                  <Button variant="outline" size="sm">
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
