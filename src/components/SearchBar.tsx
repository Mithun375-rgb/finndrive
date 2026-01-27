import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { featureSubsData } from "@/data/featureData";
import { motion, AnimatePresence } from "framer-motion";

interface SearchResult {
  title: string;
  category: string;
  path: string;
  type: "topic" | "section";
}

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchResults: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    // Search through all topics
    Object.entries(featureSubsData).forEach(([category, subcategories]) => {
      subcategories.forEach((sub, subIndex) => {
        sub.items.forEach((item, itemIndex) => {
          if (
            item.title.toLowerCase().includes(lowerQuery) ||
            sub.title.toLowerCase().includes(lowerQuery) ||
            category.toLowerCase().includes(lowerQuery)
          ) {
            searchResults.push({
              title: item.title,
              category: `${category} > ${sub.title}`,
              path: `/topic/${encodeURIComponent(category)}/${subIndex + 1}/${itemIndex + 1}`,
              type: "topic",
            });
          }
        });
      });
    });

    // Add section links
    const sections = [
      { title: "Money Essentials", path: "/#features" },
      { title: "Scholarships", path: "/#scholarships" },
      { title: "Learn & Grow", path: "/#learn" },
      { title: "Community", path: "/#community" },
      { title: "Blog", path: "/#blog" },
    ];

    sections.forEach((section) => {
      if (section.title.toLowerCase().includes(lowerQuery)) {
        searchResults.push({
          title: section.title,
          category: "Section",
          path: section.path,
          type: "section",
        });
      }
    });

    setResults(searchResults.slice(0, 8));
  }, [query]);

  const handleSelect = (path: string) => {
    setIsOpen(false);
    setQuery("");
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <>
      {/* Search Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border hover:border-primary/50 hover:bg-muted transition-all duration-200 group"
      >
        <Search className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="text-sm text-muted-foreground hidden sm:inline">Search...</span>
        <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-background text-xs text-muted-foreground border border-border">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => {
                setIsOpen(false);
                setQuery("");
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-xl z-50 px-4"
            >
              <div className="bg-card border border-border rounded-2xl shadow-elevated overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 p-4 border-b border-border">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search topics, lessons, sections..."
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="p-1 hover:bg-muted rounded-md transition-colors"
                    >
                      <X className="w-4 h-4 text-muted-foreground" />
                    </button>
                  )}
                </div>

                {/* Results */}
                {results.length > 0 && (
                  <div className="p-2 max-h-80 overflow-y-auto">
                    {results.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelect(result.path)}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group text-left"
                      >
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {result.title}
                          </p>
                          <p className="text-xs text-muted-foreground">{result.category}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Empty State */}
                {query && results.length === 0 && (
                  <div className="p-8 text-center text-muted-foreground">
                    <p>No results found for "{query}"</p>
                  </div>
                )}

                {/* Quick Links when empty */}
                {!query && (
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Quick Links</p>
                    <div className="grid grid-cols-2 gap-2">
                      {["Money Management", "Investments", "Scholarships", "Startups"].map((topic) => (
                        <button
                          key={topic}
                          onClick={() => setQuery(topic)}
                          className="p-2 text-sm text-left text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
