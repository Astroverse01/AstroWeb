"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OnboardingLayout({
  children,
  title,
  description,
  currentStep,
  totalSteps = 6,
  showBackButton = true,
  showProgress = true, // new: allow hiding progress if needed
}) {
  const router = useRouter();
  const progress = Math.min(100, Math.max(0, (currentStep / totalSteps) * 100));

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl">
        <Card className="backdrop-blur-sm border-border/50 shadow-2xl overflow-hidden">
          {/* Progress */}
          {showProgress && (
            <div className="px-6 pt-6">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>
                  Step {currentStep} of {totalSteps}
                </span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
            </div>
          )}

          <CardContent className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start sm:items-center mb-6">
              {showBackButton && (
                <button
                  onClick={() => router.back()}
                  className="mr-4 p-2 rounded-full hover:bg-muted/50 border border-transparent hover:border-border/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  aria-label="Go back"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
              )}
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {title}
                </h1>
                {description && (
                  <p className="text-sm sm:text-base text-muted-foreground mt-1">
                    {description}
                  </p>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="rounded-lg bg-muted/30 border border-border/50 p-4 sm:p-6">
              {children}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
