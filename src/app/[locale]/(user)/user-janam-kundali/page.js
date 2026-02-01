"use client";
import { RequireUserComplete } from "@/hooks/userGuard";

export default function JanamKundaliPage() {
  return (
    <RequireUserComplete>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl text-foreground font-semibold">Janam Kundali</h1>
          {/* Janam Kundali UI goes here */}
        </div>
      </div>
    </RequireUserComplete>
  );
}
