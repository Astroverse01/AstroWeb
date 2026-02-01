"use client";
import { RequireUserComplete } from "@/hooks/userGuard";

export default function SettingsPage() {
  return (
    <RequireUserComplete>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl text-foreground font-semibold">Setting</h1>
        </div>
      </div>
    </RequireUserComplete>
  );
}
