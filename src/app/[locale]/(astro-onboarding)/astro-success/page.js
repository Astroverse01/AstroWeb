"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import OnboardingLayout from "@/components/onboarding/OnboardingLayout";
import { useRouter } from "@/i18n/routing";

export default function Success() {
  const router = useRouter();

  useEffect(() => {
    // Set a flag that onboarding is complete
    localStorage.setItem("astroOnboardingComplete", "true");
  }, []);

  const handleDashboard = () => {
    router.push("/home");
  };

  return (
    <OnboardingLayout
      title="Registration Complete!"
      description="Welcome to our community of expert astrologers"
      currentStep={6}
      showBackButton={false}
    >
      <div className="text-center space-y-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-16 w-16 text-emerald-400" />
            </div>
            <div className="absolute -top-2 -right-2">
              <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-amber-800 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            Welcome Aboard!
          </h2>
          <p className="text-muted-foreground">
            Your profile is being reviewed and will be activated within 24
            hours. You&apos;ll receive a notification once you&apos;re ready to start
            receiving clients.
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-muted/30 p-4 rounded-lg text-left border border-border/50">
          <h4 className="text-foreground font-semibold mb-2">What&apos;s next?</h4>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>• Profile review and verification</li>
            <li>• Set up your availability calendar</li>
            <li>• Complete your profile description</li>
            <li>• Set your consultation rates</li>
          </ul>
        </div>

        {/* Action Button */}
        <Button
          onClick={handleDashboard}
          className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold py-3"
        >
          Go to Home
        </Button>
      </div>
    </OnboardingLayout>
  );
}
