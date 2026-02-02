"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Mail } from "lucide-react"; // Added Mail icon
import {
  verifyAstroOTP,
  resendAstroOTP,
  getAstroId,
  saveAstroSession,
} from "@/utils/astroUtils";

export default function AstroOTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [activeInput, setActiveInput] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [astroId, setAstroIdState] = useState("");
  const [countdown, setCountdown] = useState(0);
  const inputRefs = useRef([]);
  const router = useRouter();

  useEffect(() => {
    const id = getAstroId();
    if (id) setAstroIdState(id);
  }, []);

  useEffect(() => {
    let interval;
    if (countdown > 0) {
      interval = setInterval(() => setCountdown((p) => p - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [countdown]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const next = [...otp];
      next[index] = value;
      setOtp(next);
      setError("");
      if (index < 5) {
        setActiveInput(index + 1);
        inputRefs.current[index + 1]?.focus();
      }
    } else if (value === "") {
      const next = [...otp];
      next[index] = "";
      setOtp(next);
      if (index > 0) {
        setActiveInput(index - 1);
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      setActiveInput(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/[^0-9]/g, "");
    const arr = pasted.split("").slice(0, 6);
    if (arr.length === 6) {
      setOtp(arr);
      setActiveInput(5);
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const code = otp.join("");
    if (code.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      setIsLoading(false);
      return;
    }
    if (!astroId) {
      setError("Astro ID not found. Please try registering again.");
      setIsLoading(false);
      return;
    }

    try {
      const data = await verifyAstroOTP(astroId, code);

      if (data.statusCode === 200) {
        setSuccess("OTP verified successfully! Redirecting...");

        // ✅ Save full session + profile + onboarding flag + emit event
        const complete = saveAstroSession({
          astroId,
          token: data.data.token,
          astroDetail: data.data.astroDetail,
        });

        // ✅ Route based on completion (existing -> home, new -> onboarding)
        setTimeout(() => {
          if (complete) {
            router.push("/home");
          } else {
            router.push("/astro-info");
          }
        }, 500);
      } else {
        setError(data.message || "OTP verification failed");
      }
    } catch (err) {
      setError(err.message || "Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (countdown > 0) return;
    if (!astroId) {
      setError("Astro ID not found. Please try registering again.");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const data = await resendAstroOTP(astroId);
      if (data.statusCode === 200) {
        setSuccess("OTP resent successfully!");
        setCountdown(30);
      } else {
        setError(data.message || "Failed to resend OTP");
      }
    } catch (err) {
      setError(err.message || "Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-2xl overflow-hidden border-0">
        <CardHeader className="space-y-4 text-black dark:text-white p-6">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">
            Verify Your Email
          </CardTitle>
          <CardDescription className="text-black dark:text-white text-center">
            Enter the 6-digit code sent to your registered email address
          </CardDescription>
        </CardHeader>

        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Verification Code</Label>
              <div className="flex justify-between space-x-2">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    onFocus={() => setActiveInput(index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className={`w-12 h-14 text-center text-xl font-semibold ${
                      activeInput === index
                        ? "border-blue-500 ring-2 ring-blue-200"
                        : ""
                    }`}
                    disabled={isLoading}
                  />
                ))}
              </div>
            </div>

            {error && (
              <Alert variant="destructive" className="py-3">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="py-3 bg-green-50 border-green-200">
                <AlertDescription className="text-green-800">
                  {success}
                </AlertDescription>
              </Alert>
            )}

            <Button
              onClick={handleSubmit}
              disabled={isLoading || otp.join("").length !== 6}
              className="w-full py-6 text-base font-medium bg-primary"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify OTP"
              )}
            </Button>

            <div className="text-center text-sm text-gray-600">
              <p className="text-muted-foreground">Didn&apos;t receive the code?</p>
              <Button
                variant="link"
                onClick={handleResendOTP}
                disabled={countdown > 0 || isLoading}
                className="text-muted-foreground p-0 h-auto"
              >
                {countdown > 0 ? `Resend in ${countdown}s` : "Resend OTP"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}