"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Settings, LogOut, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AppIcon from "@/components/icons/app-icon";
import LocaleSwitcher from "@/components/lang-switcher";
import ModeToggle from "@/components/mode-toggle";

/* ASTRO utils */
import {
  getAstroToken,
  getAstroId,
  clearAstroAuthData,
  fetchAstroOnboardingInfo, // GET /astro/info with RAW token
  AUTH_EVENT as ASTRO_AUTH_EVENT,
} from "@/utils/astroUtils";

/* USER utils */
import {
  getUserToken,
  clearUserAuthData,
  fetchUserProfileFromAPI, // GET /Onboarding/info with RAW token
  USER_AUTH_EVENT,
} from "@/utils/userUtils";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null); // "astro" | "user" | null
  const [userData, setUserData] = useState(null); // { name, profilePic }

  const readJson = (key) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  };

  const deriveInitials = (name) =>
    name && name.trim().length ? name.trim().slice(0, 1).toUpperCase() : "U";

  const hydrateFromStorageOrAPI = useCallback(async () => {
    // detect current role
    const astroToken = getAstroToken();
    const astroId = getAstroId();
    const userToken = getUserToken();

    let currentRole = null;
    if (astroToken && astroId) currentRole = "astro";
    else if (userToken) currentRole = "user";

    setRole(currentRole);

    if (!currentRole) {
      setIsLoggedIn(false);
      setUserData(null);
      return;
    }

    setIsLoggedIn(true);

    if (currentRole === "astro") {
      // 1) cached
      let profile = readJson("astroProfile");
      // 2) fetch if missing
      if (!profile) {
        const apiProfile = await fetchAstroOnboardingInfo(); // expects raw token
        if (apiProfile) {
          profile = {
            name: apiProfile.fullName || apiProfile.name || "Astrologer",
            profilePic: apiProfile.profilePic || "",
          };
          try {
            localStorage.setItem("astroProfile", JSON.stringify(profile));
          } catch {}
        }
      } else {
        // normalize
        profile = {
          name: profile.fullName || profile.name || "Astrologer",
          profilePic: profile.profilePic || "",
        };
      }
      setUserData(profile || { name: "Astrologer", profilePic: "" });
      return;
    }

    // user
    if (currentRole === "user") {
      // 1) cached (prefer userProfile; fallback userDetails)
      let profile = readJson("userProfile") || readJson("userDetails"); // your OTP/profile page may only write userDetails

      // 2) fetch if missing name
      if (!profile?.fullName && userToken) {
        const api = await fetchUserProfileFromAPI(); // expects raw token
        if (api) {
          // normalize just enough for header
          profile = {
            fullName: api.fullName || api.name || "User",
            profilePic: api.profilePic || "",
          };
          try {
            localStorage.setItem("userProfile", JSON.stringify(profile));
          } catch {}
        }
      } else if (profile) {
        profile = {
          fullName: profile.fullName || profile.name || "User",
          profilePic: profile.profilePic || "",
        };
      }

      setUserData(
        profile
          ? { name: profile.fullName, profilePic: profile.profilePic }
          : { name: "User", profilePic: "" }
      );
    }
  }, []);

  // initial mount
  useEffect(() => {
    hydrateFromStorageOrAPI();
  }, [hydrateFromStorageOrAPI]);

  // listen to both auth events (same-tab)
  useEffect(() => {
    const handler = () => hydrateFromStorageOrAPI();
    window.addEventListener(ASTRO_AUTH_EVENT, handler);
    window.addEventListener(USER_AUTH_EVENT, handler);
    return () => {
      window.removeEventListener(ASTRO_AUTH_EVENT, handler);
      window.removeEventListener(USER_AUTH_EVENT, handler);
    };
  }, [hydrateFromStorageOrAPI]);

  // also rehydrate on route change
  useEffect(() => {
    hydrateFromStorageOrAPI();
  }, [pathname, hydrateFromStorageOrAPI]);

  // cross-tab sync
  useEffect(() => {
    const onStorage = (e) => {
      if (
        [
          "astroToken",
          "astroId",
          "astroProfile",
          "astroOnboardingComplete",
          "userToken",
          "userId",
          "userProfile",
          "userOnboardingComplete",
        ].includes(String(e.key))
      ) {
        hydrateFromStorageOrAPI();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [hydrateFromStorageOrAPI]);

  const handleLogout = () => {
    if (role === "astro") {
      clearAstroAuthData();
    } else if (role === "user") {
      clearUserAuthData();
    }
    setIsLoggedIn(false);
    setUserData(null);
    setRole(null);
    router.push("/");
  };

  // role-aware routes/labels
  const homeHref = role === "user" ? "/profile" : "/home";
  const settingsHref = role === "user" ? "/user-settings" : "/astro-settings";
  const subtitle =
    role === "user" ? "Astroway Member" : "Professional Astrologer";
  const displayName =
    userData?.name || (role === "user" ? "User" : "Astrologer");

  return (
    <header className="w-full bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl md:text-2xl text-foreground tracking-wide">
            <AppIcon className="w-8 h-8 text-primary" />
            <Link
              href="/"
              className="hover:text-primary transition-colors duration-200"
            >
              Astroway
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <div className="hidden sm:block">
              <LocaleSwitcher />
            </div>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={userData?.profilePic || ""}
                        alt={displayName}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                        {deriveInitials(displayName)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{displayName}</p>
                      <p className="text-xs text-muted-foreground">
                        {subtitle}
                      </p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link
                      href={homeHref}
                      className="flex items-center cursor-pointer"
                    >
                      <Home className="mr-2 h-4 w-4" />
                      <span>Home</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href={settingsHref}
                      className="flex items-center cursor-pointer"
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="flex items-center cursor-pointer text-red-600 focus:text-red-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/register">
                  <Button
                    variant="outline"
                    size="lg"
                    className="cursor-pointer"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-4">
              <nav className="space-y-2">
                <Link
                  href="/"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              {/* Language */}
              <div className="pt-4 border-t border-border">
                <LocaleSwitcher />
              </div>

              {/* Mobile auth sections */}
              {!isLoggedIn && (
                <div className="flex flex-col gap-2 pt-4 border-t border-border cursor-pointer">
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full cursor-pointer">
                      Login
                    </Button>
                  </Link>
                </div>
              )}

              {isLoggedIn && (
                <div className="pt-4 border-t border-border space-y-2">
                  <Link
                    href={homeHref}
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href={settingsHref}
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full text-red-600 border-red-200 hover:bg-red-50 dark:hover:bg-red-950/30"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
