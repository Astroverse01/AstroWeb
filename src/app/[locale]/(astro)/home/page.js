"use client";

import { RequireAstroComplete } from "@/hooks/astroGuard";

export default function HomePage() {
  return (
    <RequireAstroComplete>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-foreground text-center">
            Welcome to Astro Dashboard
          </h1>

        </div>
      </div>
    </RequireAstroComplete>
  );
}
