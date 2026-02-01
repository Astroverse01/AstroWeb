"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import { cn } from "@/lib/utils";

const languages = [
  "English",
  "Hindi",
  "Punjabi",
  "Marathi",
  "Kannada",
  "Tamil",
  "Telugu",
  "Gujarati",
];

export default function Languages() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [storedData, setStoredData] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("astroOnboarding");
    if (data) setStoredData(JSON.parse(data));
  }, []);

  const handleSelect = (language) => {
    setSelected((prev) =>
      prev.includes(language)
        ? prev.filter((l) => l !== language)
        : [...prev, language]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected.length === 0) return;

    setLoading(true);

    const updatedData = {
      ...storedData,
      language: selected.map((lang) => lang.toLowerCase()),
    };

    localStorage.setItem("astroOnboarding", JSON.stringify(updatedData));

    setTimeout(() => {
      router.push("/astro-skills");
    }, 500);
  };

  return (
    <OnboardingLayout
      title="Languages You Know"
      description="Select all languages you're comfortable speaking with clients"
      currentStep={2}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Languages Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {languages.map((language) => {
            const isActive = selected.includes(language);
            return (
              <button
                key={language}
                type="button"
                onClick={() => handleSelect(language)}
                aria-pressed={isActive}
                className={cn(
                  "p-3 sm:p-4 rounded-lg border-2 transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background text-foreground border-border hover:bg-muted/50"
                )}
              >
                {language}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            className="flex-1"
          >
            Previous
          </Button>
          <Button
            type="submit"
            disabled={loading || selected.length === 0}
            className="flex-1"
          >
            {loading ? "Continuing..." : "Continue"}
          </Button>
        </div>
      </form>
    </OnboardingLayout>
  );
}
