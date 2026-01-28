import { Skeleton } from "@/components/ui/skeleton";

interface ContentSkeletonProps {
  variant?: "card" | "hero" | "section" | "list";
  count?: number;
}

export function ContentSkeleton({ variant = "card", count = 1 }: ContentSkeletonProps) {
  const items = Array.from({ length: count }, (_, i) => i);

  if (variant === "hero") {
    return (
      <div className="space-y-6 p-8">
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
        <div className="flex gap-4 justify-center mt-8">
          <Skeleton className="h-12 w-36 rounded-full" />
          <Skeleton className="h-12 w-36 rounded-full" />
        </div>
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className="space-y-8 py-12">
        <div className="text-center space-y-4">
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-5 w-96 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i} className="p-6 rounded-2xl border border-border bg-card">
              <Skeleton className="h-14 w-14 rounded-xl mb-5" />
              <Skeleton className="h-6 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6 mt-2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className="space-y-4">
        {items.map((i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-lg border border-border">
            <Skeleton className="h-12 w-12 rounded-lg shrink-0" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default: card variant
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((i) => (
        <div key={i} className="p-6 rounded-2xl border border-border bg-card">
          <Skeleton className="h-48 w-full rounded-xl mb-4" />
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mt-2" />
          <div className="flex gap-2 mt-4">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Page-level loading skeleton
export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-background animate-pulse">
      {/* Header skeleton */}
      <div className="h-20 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Skeleton className="h-10 w-32" />
          <div className="hidden lg:flex items-center gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-4 w-20" />
            ))}
          </div>
          <Skeleton className="h-10 w-28" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-4 py-12">
        <ContentSkeleton variant="hero" />
        <div className="mt-16">
          <ContentSkeleton variant="section" count={4} />
        </div>
      </div>
    </div>
  );
}

// Topic detail skeleton
export function TopicDetailSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header skeleton */}
      <div className="h-20 border-b border-border" />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 mb-8">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-32" />
        </div>

        {/* Title skeleton */}
        <Skeleton className="h-10 w-2/3 mb-4" />
        <Skeleton className="h-6 w-1/2 mb-8" />

        {/* Content skeleton */}
        <div className="space-y-6">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        {/* Quiz skeleton */}
        <div className="mt-12 p-6 rounded-2xl border border-border">
          <Skeleton className="h-8 w-48 mb-6" />
          <Skeleton className="h-6 w-full mb-4" />
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-12 w-full rounded-lg" />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
