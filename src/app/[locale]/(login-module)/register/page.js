"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Star,
  Mail,
  Loader2,
  Users,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";
import { astroSignIn, setAstroId } from "@/utils/astroUtils";
import { userSignIn, setUserId } from "@/utils/userUtils";
import { Link } from "@/i18n/navigation";

export default function RegistrationPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("user");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Simple email validation
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!acceptTerms) {
      setError(
        "Please accept the Terms of Service and Privacy Policy to continue"
      );
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const isAstro = activeTab === "astro";

      // Use the appropriate signIn function with email
      const data = isAstro
        ? await astroSignIn(email)
        : await userSignIn(email);

      if (data.statusCode === 200) {
        // Store the ID based on user type
        if (isAstro) {
          await setAstroId(data.data.astroId);
        } else {
          await setUserId(data.data.userId);
        }

        // Redirect to OTP verification page
        router.push(isAstro ? "/astro-otp" : "/user-otp");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
        <Card className="backdrop-blur-sm border-border/50 shadow-2xl overflow-hidden p-0 m-0">
          <div className="flex bg-muted/30 m-0 p-0 border-b border-border">
            <button
              onClick={() => setActiveTab("user")}
              className={`flex-1 py-4 px-4 sm:px-6 text-center font-medium transition-all duration-300 flex flex-col items-center gap-2 sm:gap-1 ${
                activeTab === "user"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Users className="w-5 h-5 sm:w-4 sm:h-4" />
              <span className="text-sm sm:text-base">User</span>
            </button>
            <button
              onClick={() => setActiveTab("astro")}
              className={`flex-1 py-4 px-4 sm:px-6 text-center font-medium transition-all duration-300 flex flex-col items-center gap-2 sm:gap-1 ${
                activeTab === "astro"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <Sparkles className="w-5 h-5 sm:w-4 sm:h-4" />
              <span className="text-sm sm:text-base">Astrologer</span>
            </button>
          </div>

          <CardHeader className="text-center space-y-4 pb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Star className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground fill-primary-foreground" />
            </div>

            <div className="space-y-2">
              <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-balance">
                {activeTab === "user" ? "Join as User" : "Join as Astrologer"}
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-pretty leading-relaxed px-2">
                {activeTab === "user"
                  ? "Start off with a free chat session with one of our talented Astrologers!"
                  : "Share your cosmic wisdom and connect with seekers around the world"}
              </CardDescription>
            </div>

            <div className="flex justify-center gap-4 sm:gap-6 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-black dark:text-white" />
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-black dark:text-white" />
                <span>Fast Setup</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 px-6 sm:px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-base sm:text-sm"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  We&apos;ll send a verification code to this email
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                <Checkbox
                  id="acceptTerms"
                  checked={acceptTerms}
                  onCheckedChange={setAcceptTerms}
                  className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label
                  htmlFor="acceptTerms"
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  I agree to Ahead&apos;s{" "}
                  <Link
                    href="/terms-and-conditions"
                    className="text-black dark:text-white hover:underline font-medium"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-black dark:text-white hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {error && (
                <div className="bg-destructive/10 border border-destructive/30 text-destructive px-4 py-3 rounded-lg text-sm flex items-start gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary font-medium py-3 sm:py-4 rounded-xl text-base"
                disabled={isLoading || !email || !acceptTerms}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    <span>Sending OTP...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-2" />
                    <span>
                      {activeTab === "user" ? "Get Started" : "Begin Journey"}
                    </span>
                  </>
                )}
              </Button>
            </form>

            <div className="text-center pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                Trusted by thousands of users worldwide
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}