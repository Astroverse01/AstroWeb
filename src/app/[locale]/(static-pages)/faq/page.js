"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  ChevronDown,
  Search,
  Star,
  Users,
  Calendar,
  MessageCircle,
  Phone,
  Video,
  CreditCard,
  Shield,
  BookOpen,
  Heart,
  Briefcase,
  Moon,
  Sun,
  Sparkles,
  HelpCircle,
  Mail,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const t = useTranslations("FAQ");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // FAQ Categories
  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle, count: 32 },
    { id: "general", name: "General", icon: Star, count: 6 },
    { id: "services", name: "Services", icon: MessageCircle, count: 8 },
    { id: "payments", name: "Payments & Pricing", icon: CreditCard, count: 5 },
    { id: "technical", name: "Technical", icon: Shield, count: 4 },
    { id: "privacy", name: "Privacy & Security", icon: Shield, count: 3 },
    { id: "astrology", name: "Astrology Basics", icon: Moon, count: 6 },
  ];

  // FAQ Items Data
  const faqItems = [
    // General Category
    {
      id: 1,
      question: "What is Astrosway and how does it work?",
      answer:
        "Astrosway is an online platform that connects you with verified professional astrologers for personalized consultations. You can choose from hundreds of expert astrologers and connect via chat, call, or video based on your preference. Simply sign up, browse astrologers by expertise, and start your session instantly.",
      category: "general",
      popular: true,
    },
    {
      id: 2,
      question: "Are the astrologers on your platform verified?",
      answer:
        "Yes, absolutely! Every astrologer on Astrosway goes through a rigorous verification process. We verify their credentials, experience, and conduct background checks. We also regularly monitor their consultations and collect client feedback to maintain high quality standards.",
      category: "general",
      popular: true,
    },
    {
      id: 3,
      question: "How do I choose the right astrologer for me?",
      answer:
        "You can browse astrologers based on their expertise (love, career, health, etc.), languages spoken, experience level, and client ratings. Each astrologer has a detailed profile with their specialties, pricing, and client reviews. You can also take our quick recommendation quiz to find the best match for your needs.",
      category: "general",
    },
    {
      id: 4,
      question: "Do I need to create an account to use Astrosway?",
      answer:
        "Yes, you need to create a free account to book consultations. This helps us maintain your session history, save your preferences, and provide personalized recommendations. Registration is quick and only takes a minute.",
      category: "general",
    },
    {
      id: 5,
      question: "Can I use Astrosway on my mobile phone?",
      answer:
        "Absolutely! Astrosway is fully responsive and works perfectly on all devices - smartphones, tablets, and desktops. You can access our services through any web browser, and we also have dedicated mobile apps for iOS and Android available for download.",
      category: "general",
    },
    {
      id: 6,
      question: "What languages are supported on your platform?",
      answer:
        "We support multiple languages including English, Hindi, Tamil, Telugu, Bengali, Marathi, and more. You can filter astrologers by the languages they speak to ensure comfortable communication during your session.",
      category: "general",
    },

    // Services Category
    {
      id: 7,
      question: "What types of astrology services do you offer?",
      answer:
        "We offer a wide range of services including: Vedic Astrology, Tarot Reading, Numerology, Palmistry, Kundli Matching, Birth Chart Analysis, Career Astrology, Love & Relationship Guidance, Health Astrology, and much more. You can also get daily, weekly, and monthly horoscope predictions.",
      category: "services",
      popular: true,
    },
    {
      id: 8,
      question: "How do chat consultations work?",
      answer:
        "Chat consultations allow you to text with your astrologer in real-time. You can ask questions, share concerns, and get detailed responses. The chat history is saved in your account for future reference. Chat sessions are billed per minute with no minimum time commitment.",
      category: "services",
    },
    {
      id: 9,
      question: "What's the difference between call and video consultations?",
      answer:
        "Call consultations are audio-only sessions where you speak directly with your astrologer. Video consultations include face-to-face interaction through video call, which some users prefer for a more personal connection. Both options offer the same quality of guidance - choose based on your comfort level.",
      category: "services",
    },
    {
      id: 10,
      question: "How long is a typical consultation session?",
      answer:
        "Session duration varies based on your needs and the astrologer's availability. Most consultations last between 15-30 minutes, but you can book longer sessions if needed. There's no minimum commitment - you're billed only for the time you use.",
      category: "services",
    },
    {
      id: 11,
      question: "Can I consult multiple astrologers for the same question?",
      answer:
        "Yes, you can consult different astrologers to get multiple perspectives on your question. Many users find this helpful to gain deeper insights. Each astrologer may provide unique insights based on their expertise and methodology.",
      category: "services",
    },
    {
      id: 12,
      question: "Do you offer free horoscope readings?",
      answer:
        "Yes! We provide free daily, weekly, and monthly horoscopes for all zodiac signs. You can also access free birth chart basics and compatibility reports. For detailed personalized readings, you can consult our expert astrologers.",
      category: "services",
      popular: true,
    },
    {
      id: 13,
      question: "What is Kundli matching and how does it work?",
      answer:
        "Kundli matching (also known as Gun Milan) is a Vedic astrology practice used to assess compatibility between partners for marriage. Our astrologers analyze both birth charts to evaluate 36 gunas (qualities) and provide detailed compatibility insights along with remedies if needed.",
      category: "services",
    },
    {
      id: 14,
      question: "Can astrologers help with career decisions?",
      answer:
        "Absolutely! Our career astrology experts analyze your birth chart to identify favorable career paths, ideal timing for job changes, and potential challenges. They provide guidance on professional growth, business decisions, and work-life balance based on planetary positions.",
      category: "services",
    },

    // Payments & Pricing Category
    {
      id: 15,
      question: "How much does an astrology consultation cost?",
      answer:
        "Consultation rates vary by astrologer based on their experience, expertise, and demand. Prices typically range from $1.99 to $9.99 per minute. Each astrologer's profile displays their exact rate. You only pay for the time you use, with no hidden fees.",
      category: "payments",
      popular: true,
    },
    {
      id: 16,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit/debit cards (Visa, MasterCard, American Express), PayPal, Google Pay, Apple Pay, and various local payment methods depending on your country. All payments are processed securely through encrypted payment gateways.",
      category: "payments",
    },
    {
      id: 17,
      question: "How does billing work for consultations?",
      answer:
        "You add funds to your Astrosway wallet, which is used to pay for sessions. The system deducts per-minute charges in real-time during your consultation. You can track your spending and set daily/weekly limits. Unused balance remains in your wallet for future sessions.",
      category: "payments",
    },
    {
      id: 18,
      question: "Is there a refund policy if I'm not satisfied?",
      answer:
        "Yes, we have a satisfaction guarantee. If you're not happy with your consultation, you can request a refund within 24 hours. Each request is reviewed individually. We also have a rating system to help maintain quality standards.",
      category: "payments",
    },
    {
      id: 19,
      question: "Are there any subscription plans available?",
      answer:
        "Yes, we offer monthly and annual subscription plans that provide benefits like discounted rates, priority booking with top astrologers, free monthly reports, and exclusive content. Check our Pricing page for current subscription options.",
      category: "payments",
    },

    // Technical Category
    {
      id: 20,
      question: "What internet connection do I need for video calls?",
      answer:
        "For smooth video consultations, we recommend a minimum internet speed of 2 Mbps for upload and download. For audio-only calls, 1 Mbps is sufficient. The platform automatically adjusts video quality based on your connection strength to minimize disruptions.",
      category: "technical",
    },
    {
      id: 21,
      question: "Why is my video/audio not working during consultation?",
      answer:
        "Common issues include: browser permissions not granted for camera/microphone, outdated browser, or slow internet connection. Check your browser settings, ensure you've granted necessary permissions, and try refreshing the page. Our support team is available 24/7 to help troubleshoot.",
      category: "technical",
      popular: true,
    },
    {
      id: 22,
      question: "Which browsers are supported?",
      answer:
        "Astrosway works best on the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience. The mobile app is available for iOS and Android devices.",
      category: "technical",
    },
    {
      id: 23,
      question: "Can I access my consultation history?",
      answer:
        "Yes, all your past chat transcripts and consultation records are saved in your account dashboard. You can review them anytime, which is helpful for tracking advice and progress over time.",
      category: "technical",
    },

    // Privacy & Security Category
    {
      id: 24,
      question: "Is my personal information kept private?",
      answer:
        "Absolutely! We take privacy very seriously. All consultations are confidential and encrypted. Your personal information is never shared with third parties. You can read our detailed Privacy Policy for more information about data protection.",
      category: "privacy",
      popular: true,
    },
    {
      id: 25,
      question: "Are my chat conversations with astrologers secure?",
      answer:
        "Yes, all communications on our platform are encrypted using industry-standard SSL/TLS protocols. Chat histories are stored securely and are only accessible to you and the astrologer you consulted. We never monitor or share your private conversations.",
      category: "privacy",
    },
    {
      id: 26,
      question: "Can I delete my account and data?",
      answer:
        "Yes, you can delete your account at any time through account settings. Upon deletion, we remove all personal information from our active databases, though some information may be retained as required by law. Contact support if you need assistance with account deletion.",
      category: "privacy",
    },

    // Astrology Basics Category
    {
      id: 27,
      question: "What's the difference between Vedic and Western astrology?",
      answer:
        "Vedic astrology (Jyotish) originated in ancient India and uses the sidereal zodiac based on fixed constellations. Western astrology uses the tropical zodiac based on seasons. Vedic astrology places more emphasis on the moon sign and nakshatras, while Western focuses more on the sun sign. Both systems offer valuable insights.",
      category: "astrology",
      popular: true,
    },
    {
      id: 28,
      question: "What is my birth chart and why is it important?",
      answer:
        "Your birth chart (also called Kundli or natal chart) is a map of where all planets were positioned at your exact time and place of birth. It reveals your personality traits, life patterns, strengths, challenges, and potential life path. It's the foundation for personalized astrological guidance.",
      category: "astrology",
    },
    {
      id: 29,
      question: "How do I find my moon sign and why does it matter?",
      answer:
        "Your moon sign is determined by the moon's position at your birth. It represents your emotional nature, inner self, and how you process feelings. While your sun sign shows your outward personality, the moon sign reveals your emotional needs and reactions. You can find it by creating your free birth chart on our platform.",
      category: "astrology",
    },
    {
      id: 30,
      question: "What are planetary transits and how do they affect me?",
      answer:
        "Planetary transits refer to the current movement of planets as they interact with your birth chart. These transits can influence different areas of your life. For example, Jupiter's transit might bring growth opportunities, while Saturn's transit might present challenges that lead to maturity and learning.",
      category: "astrology",
    },
    {
      id: 31,
      question: "Can astrology predict the future accurately?",
      answer:
        "Astrology offers insights into potential trends and influences, not absolute predictions. Think of it as a guidance tool that shows favorable timing and possible outcomes based on planetary positions. Free will and personal choices always play a crucial role in shaping your future.",
      category: "astrology",
    },
    {
      id: 32,
      question: "What are astrological remedies and do they work?",
      answer:
        "Astrological remedies are suggested actions to harmonize planetary influences. These may include mantras, gemstones, rituals, or lifestyle changes. Their effectiveness varies by individual and should be followed under expert guidance. Our astrologers provide personalized remedies based on your birth chart.",
      category: "astrology",
    },
  ];

  // Filter FAQs based on search and category
  const filteredFAQs = faqItems.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Get popular FAQs
  const popularFAQs = faqItems.filter((item) => item.popular).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 px-4 py-1 text-sm" variant="secondary">
              <HelpCircle className="h-4 w-4 mr-1" />
              Got Questions?
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg mb-8">
              Find answers to common questions about our astrology services,
              consultations, payments, and more. Can&apos;t find what
              you&apos;re looking for? Contact our support team.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search your question..."
                className="pl-12 pr-4 py-6 text-base rounded-full border-2 focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Popular Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {popularFAQs.map((faq) => (
              <Link
                key={faq.id}
                href={`#faq-${faq.id}`}
                className="group"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(`faq-${faq.id}`)?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <HelpCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base mb-2 group-hover:text-primary transition-colors">
                          {faq.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                          {faq.answer}
                        </p>
                        <div className="mt-2 text-xs text-primary font-medium flex items-center gap-1">
                          Read answer
                          <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Categories */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-4">
                <h3 className="font-semibold text-lg mb-4">Categories</h3>
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap lg:whitespace-normal transition-colors ${
                        activeCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      }`}
                    >
                      <category.icon className="h-4 w-4" />
                      <span className="text-sm">{category.name}</span>
                      <Badge
                        variant={
                          activeCategory === category.id
                            ? "secondary"
                            : "outline"
                        }
                        className="ml-auto text-xs"
                      >
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="flex-1">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <Card
                      key={faq.id}
                      id={`faq-${faq.id}`}
                      className="scroll-mt-24"
                    >
                      <CardContent className="p-0">
                        <Accordion type="single" collapsible>
                          <AccordionItem
                            value={`item-${faq.id}`}
                            className="border-none"
                          >
                            <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors">
                              <div className="flex items-start gap-3 text-left">
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <HelpCircle className="h-3 w-3 text-primary" />
                                </div>
                                <span className="font-medium text-sm sm:text-base">
                                  {faq.question}
                                </span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 sm:px-6 pb-4">
                              <div className="pl-9">
                                <p className="text-muted-foreground text-sm sm:text-base">
                                  {faq.answer}
                                </p>
                                {faq.category === "payments" && (
                                  <div className="mt-4 flex gap-2">
                                    <Badge variant="secondary">
                                      Secure Payment
                                    </Badge>
                                    <Badge variant="secondary">
                                      Instant Refund
                                    </Badge>
                                  </div>
                                )}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <Search className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    No results found
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We couldn&apos;t find any FAQs matching your search.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("all");
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground">
                Can&apos;t find the answer you&apos;re looking for? Reach out to
                our support team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Email Support */}
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    support@astrosway.com
                  </p>
                  <Link href="mailto:support@astrosway.com">
                    <Button size="sm" variant="outline" className="w-full">
                      Send Email
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Phone Support */}
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Mon-Fri, 9am-6pm
                  </p>
                  <Link href="tel:+918941841284">
                    <Button size="sm" variant="outline" className="w-full">
                      +91 8941841284
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Help Center */}
              <Card className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Help Center</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Guides & tutorials
                  </p>
                  <Link href="/contact">
                    <Button size="sm" variant="outline" className="w-full">
                      Visit Help Center
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
