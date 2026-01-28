import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps = {}) {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Use provided items or auto-generate from route
  let breadcrumbs: BreadcrumbItem[] = items || [];

  if (!items) {
    if (pathSegments.length === 0) return null;

    breadcrumbs = [{ label: "Home", href: "/" }];

    // Build breadcrumbs based on route
    if (pathSegments[0] === "topic" && pathSegments.length >= 4) {
      const category = decodeURIComponent(pathSegments[1]);
      breadcrumbs.push({
        label: category,
        href: `/#features`,
      });
      breadcrumbs.push({
        label: `Lesson ${pathSegments[2]}.${pathSegments[3]}`,
      });
    } else if (pathSegments[0] === "auth") {
      breadcrumbs.push({ label: "Sign In" });
    } else if (pathSegments[0] === "progress") {
      breadcrumbs.push({ label: "My Progress" });
    } else if (pathSegments[0] === "ask-ai") {
      breadcrumbs.push({ label: "Ask AI" });
    } else if (pathSegments[0] === "terms") {
      breadcrumbs.push({ label: "Terms of Service" });
    } else if (pathSegments[0] === "privacy") {
      breadcrumbs.push({ label: "Privacy Policy" });
    }
  }

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav 
      className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap"
      aria-label="Breadcrumb navigation"
    >
      {breadcrumbs.map((crumb, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="w-4 h-4" aria-hidden="true" />}
          {crumb.href ? (
            <Link
              to={crumb.href}
              className="hover:text-primary transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              {index === 0 && <Home className="w-4 h-4" aria-hidden="true" />}
              {crumb.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium" aria-current="page">{crumb.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
