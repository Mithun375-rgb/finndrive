import { ArrowRight, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "5 Investment Mistakes Every Beginner Makes (And How to Avoid Them)",
    excerpt: "Learn from common pitfalls and start your investment journey on the right foot with these expert tips.",
    category: "Investments",
    readTime: "5 min read",
    author: "Rahul Sharma",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
  },
  {
    title: "The Complete Guide to Government Scholarships in India 2025",
    excerpt: "A comprehensive list of scholarships available for students across all streams and how to apply.",
    category: "Scholarships",
    readTime: "8 min read",
    author: "Dr. Priya Menon",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
  },
  {
    title: "From Side Hustle to Startup: A Youth Entrepreneur's Journey",
    excerpt: "How a 23-year-old turned a weekend project into a profitable business with minimal investment.",
    category: "Startups",
    readTime: "6 min read",
    author: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-gradient-dark relative grain">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Latest from the <span className="text-gradient-gold">Blog</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Stay informed with the latest trends in finance, scholarships, and entrepreneurship.
            </p>
          </div>
          <Button variant="heroOutline" size="lg">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-elevated"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
