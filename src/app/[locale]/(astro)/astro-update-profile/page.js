"use client";

import { RequireAstroComplete } from "@/hooks/astroGuard";

export default function UpdateProfilePage() {
  return (
    <RequireAstroComplete>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-foreground">Update Profile</h1>
          {/* update profile form */}
        </div>
      </div>
    </RequireAstroComplete>
  );
}
