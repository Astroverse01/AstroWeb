"use client";

import { RequireAstroComplete } from "@/hooks/astroGuard";

export default function AstroProfilePage() {
  return (
    <RequireAstroComplete>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-foreground">Astro Profile</h1>
          {/* profile UI */}
        </div>
      </div>
    </RequireAstroComplete>
  );
}
