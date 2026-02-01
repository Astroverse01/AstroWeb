"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import { cn } from "@/lib/utils";

const skills = [
  "Vedic",
  "Tarot",
  "Numerology",
  "Psychic",
  "Palmistry",
  "Lal Kitab",
  "Cartomancy",
  "Loshu Grid",
  "Face reading",
  "Life Coach",
];

export default function Skills() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [storedData, setStoredData] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("astroOnboarding");
    if (data) setStoredData(JSON.parse(data));
  }, []);

  const handleSelect = (skill) => {
    setSelected((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const formatSkill = (skill) =>
    skill
      .toLowerCase()
      .split(" ")
      .map((word, i) =>
        i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected.length === 0) return;

    setLoading(true);
    const updatedData = { ...storedData, expertise: selected.map(formatSkill) };
    localStorage.setItem("astroOnboarding", JSON.stringify(updatedData));

    setTimeout(() => router.push("/astro-specialization"), 500);
  };

  return (
    <OnboardingLayout
      title="Your Skills"
      description="Select the astrological skills and techniques you specialize in"
      currentStep={3}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((skill) => {
            const active = selected.includes(skill);
            return (
              <button
                key={skill}
                type="button"
                onClick={() => handleSelect(skill)}
                aria-pressed={active}
                className={cn(
                  "p-3 sm:p-4 rounded-lg border-2 transition-all duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background text-foreground border-border hover:bg-muted/50"
                )}
              >
                {skill}
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
