"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import { cn } from "@/lib/utils";

const specializations = [
  "Love",
  "Health",
  "Wealth",
  "Career",
  "Education",
  "Marriage",
  "Finance",
  "Business",
];

export default function Specialization() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [storedData, setStoredData] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("astroOnboarding");
    if (data) setStoredData(JSON.parse(data));
  }, []);

  const handleSelect = (s) => {
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const formatCategory = (category) =>
    category
      .toLowerCase()
      .split(" ")
      .map((w, i) => (i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
      .join("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected.length === 0) return;
    setLoading(true);

    const updatedData = {
      ...storedData,
      category: selected.map(formatCategory),
    };
    localStorage.setItem("astroOnboarding", JSON.stringify(updatedData));

    setTimeout(() => router.push("/astro-image"), 500);
  };

  return (
    <OnboardingLayout
      title="Your Specialization"
      description="Choose the areas where you provide expert guidance and consultation"
      currentStep={4}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Specialization Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {specializations.map((item) => {
            const active = selected.includes(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => handleSelect(item)}
                aria-pressed={active}
                className={cn(
                  "p-3 sm:p-4 rounded-lg border-2 transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background text-foreground border-border hover:bg-muted/50"
                )}
              >
                {item}
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
            className="flex-1"
            disabled={loading || selected.length === 0}
          >
            {loading ? "Continuing..." : "Continue"}
          </Button>
        </div>
      </form>
    </OnboardingLayout>
  );
}
