"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";

export default function PersonalInfo() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    gender: "female",
    dob: null,
  });
  const [loading, setLoading] = useState(false);

  const formatDateForAPI = (date) => (date ? format(date, "yyyy-MM-dd") : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.dob) {
      alert("Please select your date of birth");
      return;
    }
    setLoading(true);

    const formattedData = { ...formData, dob: formatDateForAPI(formData.dob) };
    localStorage.setItem("astroOnboarding", JSON.stringify(formattedData));

    setTimeout(() => {
      router.push("/astro-language");
    }, 500);
  };

  const handleChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <OnboardingLayout
      title="Personal Information"
      description="Tell us about yourself to get started"
      currentStep={1}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-foreground">
            Full Name
          </Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="bg-background border-border placeholder:text-muted-foreground"
            required
          />
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <Label className="text-foreground">Gender</Label>
          <RadioGroup
            value={formData.gender}
            onValueChange={(value) => handleChange("gender", value)}
            className="flex flex-wrap gap-4"
          >
            {[
              { id: "male", label: "Male", value: "male" },
              { id: "female", label: "Female", value: "female" },
              { id: "other", label: "Other", value: "other" },
            ].map((g) => (
              <div key={g.id} className="flex items-center space-x-2">
                <RadioGroupItem
                  id={g.id}
                  value={g.value}
                  className={cn(
                    "border-border text-foreground",
                    // make the dot use primary when checked
                    "data-[state=checked]:border-primary data-[state=checked]:text-primary"
                  )}
                />
                <Label
                  htmlFor={g.id}
                  className="cursor-pointer text-foreground"
                >
                  {g.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <Label className="text-foreground">Date of Birth</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  "bg-background border-border text-foreground",
                  !formData.dob && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.dob ? format(formData.dob, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              className="w-auto p-0 bg-popover text-popover-foreground border border-border"
            >
              <Calendar
                mode="single"
                selected={formData.dob}
                onSelect={(date) => handleChange("dob", date)}
                initialFocus
                // Calendar component uses theme tokens internally; no hardcoded colors needed
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
              />
            </PopoverContent>
          </Popover>
          {formData.dob && (
            <p className="text-sm text-muted-foreground">
              Selected: {formatDateForAPI(formData.dob)}
            </p>
          )}
        </div>

        {/* Continue */}
        <Button
          type="submit"
          className="w-full font-semibold py-3"
          disabled={loading || !formData.name || !formData.dob}
        >
          {loading ? "Continuing..." : "Continue"}
        </Button>
      </form>
    </OnboardingLayout>
  );
}
