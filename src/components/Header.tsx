import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FindriveLogo } from "@/components/FindriveLogo";
import { UserMenu } from "@/components/UserMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchBar } from "@/components/SearchBar";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Money Essentials", href: "/#features" },
  { name: "Scholarships", href: "/#scholarships" },
  { name: "Learn", href: "/#learn" },
  { name: "Community", href: "/#community" },
  { name: "Blog", href: "/#blog" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    // If we're on a different page and clicking an anchor link
    if (href.startsWith("/#") && location.pathname !== "/") {
      // Navigate to home first, then scroll
      window.location.href = href;
      return;
    }
    
    // If we're on home page, just scroll to section
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <FindriveLogo size="md" className="transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              item.href === "/" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {item.name}
                </button>
              )
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block">
            <SearchBar />
          </div>

          {/* User Menu, Theme Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <UserMenu />
            <Button variant="hero" size="lg">
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.href === "/" ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 text-left"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="pt-4 border-t border-border/50 mt-4 flex items-center justify-between">
                <UserMenu />
                <ThemeToggle />
              </div>
              <div className="mt-4">
                <SearchBar />
              </div>
              <Button variant="hero" size="lg" className="mt-4 w-full">
                Download App
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
