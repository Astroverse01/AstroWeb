"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  getUserToken,
  getUserProfile,
  getUserDetails,
  fetchUserProfileFromAPI,
  saveUserSession,
  getFreeAstrologers,
  getOfferAstrologers,
  getPopularAstrologers,
  pickAstroDetails,
} from "@/utils/userUtils";
import { RequireUserComplete } from "@/hooks/userGuard";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import AriesLight from "@/svg/horoscopes/lightmode/Aries";
import TaurusLight from "@/svg/horoscopes/lightmode/Taurus";
import GeminiLight from "@/svg/horoscopes/lightmode/Gemini";
import CancerLight from "@/svg/horoscopes/lightmode/Cancer";
import LeoLight from "@/svg/horoscopes/lightmode/Leo";
import VirgoLight from "@/svg/horoscopes/lightmode/Virgo";
import LibraLight from "@/svg/horoscopes/lightmode/Libra";
import ScorpioLight from "@/svg/horoscopes/lightmode/Scorpio";
import SagittariusLight from "@/svg/horoscopes/lightmode/Sagittarius";
import CapricornLight from "@/svg/horoscopes/lightmode/Capricorn";
import AquariusLight from "@/svg/horoscopes/lightmode/Aquarius";
import PiscesLight from "@/svg/horoscopes/lightmode/Pisces";
import AriesDark from "@/svg/horoscopes/darkmode/Aries";
import TaurusDark from "@/svg/horoscopes/darkmode/Taurus";
import GeminiDark from "@/svg/horoscopes/darkmode/Gemini";
import CancerDark from "@/svg/horoscopes/darkmode/Cancer";
import LeoDark from "@/svg/horoscopes/darkmode/Leo";
import VirgoDark from "@/svg/horoscopes/darkmode/Virgo";
import LibraDark from "@/svg/horoscopes/darkmode/Libra";
import ScorpioDark from "@/svg/horoscopes/darkmode/Scorpio";
import SagittariusDarkTypo from "@/svg/horoscopes/darkmode/Sagarittus";
import CapricornDark from "@/svg/horoscopes/darkmode/Capricorn";
import AquariusDark from "@/svg/horoscopes/darkmode/Aquarius";
import PiscesDark from "@/svg/horoscopes/darkmode/Pisces";
import {
  Heart,
  Briefcase,
  HandHeart,
  PiggyBank,
  Activity,
  GraduationCap,
  Baby,
  Scale,
} from "lucide-react";

/* --------------------------------- DATA ----------------------------------- */
const ZODIAC = [
  { key: "Aries", slug: "aries", Light: AriesLight, Dark: AriesDark },
  { key: "Taurus", slug: "taurus", Light: TaurusLight, Dark: TaurusDark },
  { key: "Gemini", slug: "gemini", Light: GeminiLight, Dark: GeminiDark },
  { key: "Cancer", slug: "cancer", Light: CancerLight, Dark: CancerDark },
  { key: "Leo", slug: "leo", Light: LeoLight, Dark: LeoDark },
  { key: "Virgo", slug: "virgo", Light: VirgoLight, Dark: VirgoDark },
  { key: "Libra", slug: "libra", Light: LibraLight, Dark: LibraDark },
  { key: "Scorpio", slug: "scorpio", Light: ScorpioLight, Dark: ScorpioDark },
  {
    key: "Sagittarius",
    slug: "sagittarius",
    Light: SagittariusLight,
    Dark: SagittariusDarkTypo,
  },
  {
    key: "Capricorn",
    slug: "capricorn",
    Light: CapricornLight,
    Dark: CapricornDark,
  },
  {
    key: "Aquarius",
    slug: "aquarius",
    Light: AquariusLight,
    Dark: AquariusDark,
  },
  { key: "Pisces", slug: "pisces", Light: PiscesLight, Dark: PiscesDark },
];

export default function DashboardPage() {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const themeKey = resolvedTheme === "dark" ? "Dark" : "Light";
  const Slider = dynamic(() => import("react-slick"), { ssr: false });

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const initials = (name) =>
    (name || "U")
      .trim()
      .split(/\s+/)
      .map((p) => p[0]?.toUpperCase())
      .slice(0, 2)
      .join("") || "U";

  const hydrate = async () => {
    setError("");

    // Guard already ensures token + onboarding complete, so no redirects here
    const token = getUserToken();

    // 1) try cached (either normalized profile or raw details)
    let p = getUserProfile() || getUserDetails();

    // 2) fetch from API if missing/partial
    if (!p?.fullName) {
      try {
        const api = await fetchUserProfileFromAPI();
        if (api) {
          // cache + normalize via util (also emits user-auth-changed for header)
          saveUserSession({ token, userDetails: api });
          p = getUserProfile() || api;
        }
      } catch {
        setError("Could not load profile. Please try again.");
      }
    }

    setProfile(p || null);
    setLoading(false);
  };

  useEffect(() => {
    hydrate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 6,
      slidesToScroll: 3,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3200,
      responsive: [
        { breakpoint: 1536, settings: { slidesToShow: 6, slidesToScroll: 3 } }, // 2xl
        { breakpoint: 1280, settings: { slidesToShow: 5, slidesToScroll: 3 } }, // xl
        { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } }, // lg
        { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 2 } }, // md
        { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // sm
        { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // xs
        { breakpoint: 360, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // mobile
      ],
    }),
    []
  );

  const consultationSliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: true,
      responsive: [
        { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 2 } }, // xl
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } }, // lg
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // md
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // xs
      ],
    }),
    []
  );

  // Route mapping for Next.js paths (adjust if needed)
  const ROUTE_MAP = {
    AstroFlow: "/astro-flow",
    AstrologerList: "/astrologers",
  };

  // Config you provided, as a single object
  const CONSULTATION_OPTIONS = {
    marriage: [
      {
        key: "marriage_issue",
        label: "Marriage Issue",
        route: "AstroFlow",
        params: { kind: "issue", topic: "marriage" },
      },
      {
        key: "marriage_consultancy",
        label: "Marriage Consultancy",
        route: "AstrologerList",
        params: { kind: "consultancy", topic: "marriage" },
      },
    ],
    career: [
      {
        key: "career_issue",
        label: "Career Issue",
        route: "AstroFlow",
        params: { kind: "issue", topic: "career" },
      },
      {
        key: "career_consultancy",
        label: "Career Consultancy",
        route: "AstrologerList",
        params: { kind: "consultancy", topic: "career" },
      },
    ],
    relationship: [
      {
        key: "relationship_issue",
        label: "Relationship Issue",
        route: "AstroFlow",
        params: { kind: "issue", topic: "relationship" },
      },
      {
        key: "love_consultancy",
        label: "Love Consultancy",
        route: "AstrologerList",
        params: { kind: "consultancy", topic: "love" },
      },
    ],
    wealth: [
      {
        key: "wealth_issue",
        label: "Wealth Issue",
        route: "AstroFlow",
        params: { kind: "issue", topic: "wealth" },
      },
      {
        key: "wealth_consultancy",
        label: "Wealth Consultancy",
        route: "AstrologerList",
        params: { kind: "consultancy", topic: "wealth" },
      },
    ],
    health: [
      {
        key: "health_issue",
        label: "Health Issue",
        route: "AstroFlow",
        params: { kind: "issue", topic: "health" },
      },
      {
        key: "health_consultancy",
        label: "Health Consultancy",
        route: "AstrologerList",
        params: { kind: "consultancy", topic: "health" },
      },
    ],
    education: [
      {
        key: "education_issue",
        label: "Education Issue",
        route: "AstroFlow",
        params: { kind: "issue", topic: "education" },
      },
      {
        key: "education_consultancy",
        label: "Education Consultancy",
        route: "AstrologerList",
        params: { kind: "consultancy", topic: "education" },
      },
    ],
    kids: [
      {
        key: "kids_issue",
        label: "Kids Issue",
        route: "AstroFlow",
        params: { kind: "issue", topic: "kids" },
      },
      {
        key: "kids_consultancy",
        label: "Kids Consultancy",
        route: "AstrologerList",
        params: { kind: "consultancy", topic: "kids" },
      },
    ],
    legal: [
      {
        key: "legal_issue",
        label: "Legal Issue",
        route: "AstroFlow",
        params: { kind: "issue", topic: "legal" },
      },
      {
        key: "legal_consultancy",
        label: "Legal Consultancy",
        route: "AstrologerList",
        params: { kind: "consultancy", topic: "legal" },
      },
    ],
  };

  // Presentation: name + icon for each category
  const CONSULTATION_CATEGORIES = [
    { key: "marriage", label: "Marriage", Icon: HandHeart },
    { key: "career", label: "Career", Icon: Briefcase },
    { key: "relationship", label: "Relationship", Icon: Heart },
    { key: "wealth", label: "Wealth", Icon: PiggyBank },
    { key: "health", label: "Health", Icon: Activity },
    { key: "education", label: "Education", Icon: GraduationCap },
    { key: "kids", label: "Kids", Icon: Baby },
    { key: "legal", label: "Legal", Icon: Scale },
  ];

  // ADD THIS helper function inside your component (so it can use `router`)
  const goTo = (routeKey, params) => {
    const base = ROUTE_MAP[routeKey] || "/";
    const qs = new URLSearchParams(params).toString();
    // e.g. /astro-flow?kind=issue&topic=marriage
    router.push(`${base}?${qs}`);
  };

  const [freeAstros, setFreeAstros] = useState([]);
  const [offerAstros, setOfferAstros] = useState([]);
  const [popular, setPopular] = useState([]);

  const [freeLoading, setFreeLoading] = useState(true);
  const [offerLoading, setOfferLoading] = useState(true);
  const [popularLoading, setPopularLoading] = useState(true);

  // FREE
  useEffect(() => {
    let alive = true;
    (async () => {
      setFreeLoading(true);
      try {
        // pass serviceType exactly like your curl (video/chat/call)
        const json = await getFreeAstrologers({
          limit: 10,
          page: 1,
          serviceType: "video",
        });
        if (!alive) return;
        setFreeAstros(pickAstroDetails(json));
      } catch (_) {
        if (alive) setFreeAstros([]);
      } finally {
        if (alive) setFreeLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // OFFER
  useEffect(() => {
    let alive = true;
    (async () => {
      setOfferLoading(true);
      try {
        const json = await getOfferAstrologers({ limit: 10, page: 1 });
        if (!alive) return;
        setOfferAstros(pickAstroDetails(json));
      } catch (_) {
        if (alive) setOfferAstros([]);
      } finally {
        if (alive) setOfferLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  // POPULAR (unchanged, but now using pickAstroDetails)
  useEffect(() => {
    let alive = true;
    (async () => {
      setPopularLoading(true);
      try {
        const json = await getPopularAstrologers({ limit: 10, page: 1 });
        if (!alive) return;
        setPopular(pickAstroDetails(json));
      } catch (_) {
        if (alive) setPopular([]);
      } finally {
        if (alive) setPopularLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const astroSliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: (arrLen) => arrLen > 3,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: true,
      responsive: [
        { breakpoint: 1536, settings: { slidesToShow: 4, slidesToScroll: 2 } }, // 2xl
        { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 2 } }, // xl
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } }, // lg
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // md
        { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // sm
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // xs
        { breakpoint: 360, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // mobile
      ],
    }),
    []
  );

  // price label that works for both payloads
  const priceText = (item) => {
    if (item?.offerList?.[0]?.name) return `₹${item.offerList[0].name}/min`;
    const norm =
      item?.videoNormalPrice ?? item?.callNormalPrice ?? item?.chatNormalPrice;
    if (typeof norm === "number") return `₹${norm}/min`;
    return "free";
  };

  const AstroCard = ({ item, onClick }) => {
    const id = item.astroId ?? item.id;
    const imgSrc =
      typeof item?.photo === "string" && /^https?:\/\//i.test(item.photo)
        ? item.photo
        : "/placeholder-user.png";

    return (
      <div className="p-1 sm:p-2">
        <div
          className="relative rounded-xl sm:rounded-2xl bg-card dark:bg-gray-800 border border-border/60 shadow-sm hover:shadow-md transition-all overflow-hidden cursor-pointer"
          onClick={onClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onClick()}
        >
          {item.status === "online" && (
            <span className="absolute top-2 right-2 sm:top-3 sm:right-3 flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-500"></span>
              <span className="relative inline-flex h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-emerald-500" />
            </span>
          )}
          <div className="pt-4 sm:pt-6 lg:pt-8 px-2 sm:px-4 flex flex-col items-center">
            <div className="rounded-full p-0.5 bg-gradient-to-b from-violet-600 to-indigo-600">
              <div className="rounded-full p-0.5 bg-background">
                <img
                  src={imgSrc || "/placeholder.svg"}
                  alt={item.name || "Astrologer"}
                  width={64}
                  height={64}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="mt-2 sm:mt-3 font-semibold text-foreground text-center line-clamp-1 text-xs sm:text-sm lg:text-base">
              {item.name || "Astrologer"}
            </div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-muted-foreground">
              {priceText(item)}
            </div>
            <div className="mt-2 sm:mt-3 lg:mt-4 mb-2 sm:mb-3 lg:mb-4 w-full">
              <Button
                className="w-full text-xs sm:text-sm py-1 sm:py-2"
                size="sm"
              >
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <RequireUserComplete>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-primary" />
        </div>
      </RequireUserComplete>
    );
  }

  if (!profile) {
    return (
      <RequireUserComplete>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full space-y-4">
            <Alert variant="destructive">
              <AlertDescription>
                {error || "Profile not found. Please complete your profile."}
              </AlertDescription>
            </Alert>
            <Button
              className="w-full"
              onClick={() => router.replace("/user-details")}
            >
              Complete Profile
            </Button>
          </div>
        </div>
      </RequireUserComplete>
    );
  }

  return (
    <RequireUserComplete>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 lg:py-8">
          <Card className="mb-4 sm:mb-6 shadow-none border-0 bg-transparent">
            <CardHeader className="p-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <Avatar className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16">
                  <AvatarImage
                    src={profile.profilePic || ""}
                    alt={profile.fullName || "User"}
                  />
                  <AvatarFallback className="text-sm sm:text-base">
                    {initials(profile.fullName)}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0">
                  <CardTitle className="text-lg sm:text-2xl lg:text-3xl font-semibold tracking-tight text-balance">
                    Hey {(profile?.fullName || "User").split(" ")[0]} 👋
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base mt-1 text-pretty">
                    Discover your daily horoscope and connect with expert
                    astrologers.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <section className="mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
              Your Zodiac
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 text-pretty">
              Tap a sign to view today&apos;s horoscope.
            </p>

            <div className="zodiac-slider">
              <Slider {...sliderSettings}>
                {ZODIAC.map(({ key, slug, dates, Light, Dark }) => {
                  const Icon = themeKey === "Dark" ? Dark : Light;
                  return (
                    <div key={slug} className="p-1 sm:p-2">
                      <button
                        type="button"
                        onClick={() => router.push(`/horoscope/${slug}`)}
                        className="group w-full h-full"
                        aria-label={`${key} horoscope`}
                      >
                        <div className="bg-card dark:bg-gray-800 rounded-lg sm:rounded-xl border border-border/60 hover:shadow-md transition-all h-full">
                          <div className="flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 gap-2 sm:gap-3">
                            <div className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                              {Icon ? (
                                <Icon className="h-full w-full transition-transform group-hover:scale-105" />
                              ) : (
                                <div className="h-full w-full rounded-md bg-muted" />
                              )}
                            </div>
                            <div className="text-center">
                              <div className="font-semibold text-foreground leading-tight text-xs sm:text-sm lg:text-base">
                                {key}
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </section>

          <section className="mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
              Consultation
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 text-pretty">
              Pick a category and choose Issue or Consultancy.
            </p>

            <div className="consultation-slider">
              <Slider {...consultationSliderSettings}>
                {CONSULTATION_CATEGORIES.map(({ key, label, Icon }) => {
                  const actions = CONSULTATION_OPTIONS[key] || [];
                  return (
                    <div key={key} className="p-1 sm:p-2">
                      <div
                        className="group relative overflow-hidden rounded-lg sm:rounded-2xl bg-card dark:bg-gray-800 border border-border/60 shadow-sm hover:shadow-md transition-shadow h-full"
                        tabIndex={0}
                      >
                        {/* Base content */}
                        <div className="flex flex-col items-center justify-center p-4 sm:p-6 gap-2 sm:gap-3">
                          <div className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 flex items-center justify-center">
                            <Icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-foreground leading-tight text-xs sm:text-sm lg:text-base">
                              {label}
                            </div>
                          </div>
                        </div>

                        {/* Desktop overlay (md+): appear on hover/focus ONLY */}
                        <div
                          className="
                  absolute inset-0 hidden md:flex items-center justify-center
                  bg-background/80 backdrop-blur-sm
                  opacity-0 pointer-events-none transition-all duration-200
                  group-hover:opacity-100 group-hover:pointer-events-auto
                  group-focus-within:opacity-100 group-focus-within:pointer-events-auto
                "
                        >
                          <div className="w-full px-4">
                            <div className="mx-auto flex max-w-[220px] flex-col gap-2">
                              {actions.map((opt) => (
                                <Button
                                  key={opt.key}
                                  variant="secondary"
                                  size="sm"
                                  className="w-full"
                                  onClick={() => goTo(opt.route, opt.params)}
                                >
                                  {opt.label}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Mobile actions (show ALWAYS, no overlay to keep swipe smooth) */}
                        <div className="px-3 pb-4 md:hidden">
                          <div className="mx-auto flex max-w-[240px] flex-col gap-2">
                            {actions.map((opt) => (
                              <Button
                                key={opt.key}
                                variant="secondary"
                                size="sm"
                                className="w-full text-xs py-1.5"
                                onClick={() => goTo(opt.route, opt.params)}
                              >
                                {opt.label}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </section>

          {/* FREE */}
          <section className="mb-6 sm:mb-8 lg:mb-10">
            <div className="flex items-baseline justify-between mb-2 sm:mb-3">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Free Astrologers
              </h2>
              <span className="text-xs sm:text-sm text-muted-foreground">
                {freeAstros.length} found
              </span>
            </div>

            {freeLoading ? (
              <div className="h-20 sm:h-24 flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary" />
              </div>
            ) : freeAstros.length === 0 ? (
              <p className="text-sm sm:text-base text-muted-foreground">
                No free astrologers right now.
              </p>
            ) : (
              <div className="astrologer-slider">
                <Slider
                  {...{
                    ...astroSliderSettings,
                    infinite: astroSliderSettings.infinite(freeAstros.length),
                  }}
                >
                  {freeAstros.map((item, idx) => (
                    <AstroCard
                      key={item.astroId ?? idx}
                      item={item}
                      onClick={() =>
                        router.push(
                          `/astrologer-profile?id=${encodeURIComponent(
                            item.astroId ?? idx
                          )}`
                        )
                      }
                    />
                  ))}
                </Slider>
              </div>
            )}
          </section>

          {/* OFFER */}
          <section className="mb-6 sm:mb-8 lg:mb-10">
            <div className="flex items-baseline justify-between mb-2 sm:mb-3">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Astrologers in Offer
              </h2>
              <span className="text-xs sm:text-sm text-muted-foreground">
                {offerAstros.length} found
              </span>
            </div>

            {offerLoading ? (
              <div className="h-20 sm:h-24 flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary" />
              </div>
            ) : offerAstros.length === 0 ? (
              <p className="text-sm sm:text-base text-muted-foreground">
                No offers right now.
              </p>
            ) : (
              <div className="astrologer-slider">
                <Slider
                  {...{
                    ...astroSliderSettings,
                    infinite: astroSliderSettings.infinite(offerAstros.length),
                  }}
                >
                  {offerAstros.map((item, idx) => (
                    <AstroCard
                      key={item.astroId ?? idx}
                      item={item}
                      onClick={() =>
                        router.push(
                          `/astrologer-profile?id=${encodeURIComponent(
                            item.astroId ?? idx
                          )}`
                        )
                      }
                    />
                  ))}
                </Slider>
              </div>
            )}
          </section>

          {/* POPULAR */}
          <section className="mb-6 sm:mb-8 lg:mb-10">
            <div className="flex items-baseline justify-between mb-2 sm:mb-3">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Popular Astrologers
              </h2>
              <span className="text-xs sm:text-sm text-muted-foreground">
                {popular.length} found
              </span>
            </div>

            {popularLoading ? (
              <div className="h-20 sm:h-24 flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-primary" />
              </div>
            ) : popular.length === 0 ? (
              <p className="text-sm sm:text-base text-muted-foreground">
                No popular astrologers right now.
              </p>
            ) : (
              <div className="astrologer-slider">
                <Slider
                  {...{
                    ...astroSliderSettings,
                    infinite: astroSliderSettings.infinite(popular.length),
                  }}
                >
                  {popular.map((item, idx) => (
                    <AstroCard
                      key={item.astroId ?? idx}
                      item={item}
                      onClick={() =>
                        router.push(
                          `/astrologer-profile?id=${encodeURIComponent(
                            item.astroId ?? idx
                          )}`
                        )
                      }
                    />
                  ))}
                </Slider>
              </div>
            )}
          </section>
        </div>
      </div>
    </RequireUserComplete>
  );
}
