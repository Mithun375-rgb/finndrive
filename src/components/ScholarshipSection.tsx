import { Search, ArrowRight, Clock, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const featuredScholarships = [
  {
    title: "National Merit Scholarship",
    provider: "Government of India",
    amount: "₹50,000/year",
    deadline: "March 2025",
    location: "All India",
    field: "All Streams",
  },
  {
    title: "STEM Excellence Award",
    provider: "Tech Foundation",
    amount: "₹1,00,000",
    deadline: "April 2025",
    location: "Pan India",
    field: "Engineering & Science",
  },
  {
    title: "Women in Business Grant",
    provider: "WomenFirst NGO",
    amount: "₹75,000",
    deadline: "February 2025",
    location: "Metro Cities",
    field: "Business & Commerce",
  },
];

export function ScholarshipSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section id="scholarships" className="py-24 bg-gradient-dark relative grain">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Scholarship Spotlight</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Find Your <span className="text-gradient-gold">Perfect Scholarship</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover thousands of scholarships tailored to your age, field, and location.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by age, field, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-36 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <Button variant="hero" className="absolute right-2 top-1/2 -translate-y-1/2">
              Search
            </Button>
          </div>
        </div>

        {/* Featured Scholarships */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredScholarships.map((scholarship, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated vintage-border"
            >
              {/* Amount Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                <span className="text-sm font-semibold text-primary">{scholarship.amount}</span>
              </div>

              <h3 className="font-display text-xl font-semibold mb-2 pr-24 group-hover:text-primary transition-colors">
                {scholarship.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{scholarship.provider}</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Deadline: {scholarship.deadline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{scholarship.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                  {scholarship.field}
                </span>
                <Button variant="ghost" size="sm" className="group/btn">
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="heroOutline" size="lg">
            View All Scholarships
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
