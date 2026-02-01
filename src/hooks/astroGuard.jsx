"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";
import { getAstroToken, AUTH_EVENT } from "@/utils/astroUtils";

/** Require token only (use this for onboarding-step pages after OTP) */
export function RequireAstroAuth({
  children,
  toRegister = "/register",
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  const check = () => {
    const token = getAstroToken();
    if (!token) {
      router.push(toRegister);
    } else {
      setChecking(false);
    }
  };

  useEffect(() => {
    check();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // react to same-tab auth changes
  useEffect(() => {
    const handler = () => check();
    window.addEventListener(AUTH_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(AUTH_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-border mx-auto"></div>
          <p className="text-foreground mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return children;
}

/** Require token + onboarding complete (use this for all “after login” app screens) */
export function RequireAstroComplete({
  children,
  toRegister = "/register",
  toOnboarding = "/astro-info",
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  const check = () => {
    const token = getAstroToken();
    const complete = localStorage.getItem("astroOnboardingComplete");
    if (!token) {
      router.push(toRegister);
    } else if (!complete) {
      router.push(toOnboarding);
    } else {
      setChecking(false);
    }
  };

  useEffect(() => {
    check();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // react to same-tab auth changes & cross-tab storage
  useEffect(() => {
    const handler = () => check();
    window.addEventListener(AUTH_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(AUTH_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-border mx-auto"></div>
          <p className="text-foreground mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return children;
}
