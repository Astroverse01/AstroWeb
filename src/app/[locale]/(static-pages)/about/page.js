import { StarsIcon } from "@/components/icons/stars-icon"
import { ChatIcon } from "@/components/icons/chat-icon"
import { VideoIcon } from "@/components/icons/video-icon"
import { KundliIcon } from "@/components/icons/kundli-icon"
import { NumerologyIcon } from "@/components/icons/numerology-icon"
import { VerifiedIcon } from "@/components/icons/verified-icon"
import { TrustIcon } from "@/components/icons/trust-icon"
import { TechIcon } from "@/components/icons/tech-icon"
import { VisionIcon } from "@/components/icons/vision-icon"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
 
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <StarsIcon className="text-primary w-32 h-32" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">About Us — Astroway</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Guiding You Through the Stars with Trust and Insight
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-foreground leading-relaxed text-center">
            At Astroway, we merge the timeless art of astroscience with modern accessibility to give you clarity,
            confidence, and cosmic connection. We offer comprehensive support through chats, audio, and video
            consultations, detailed Kundli (birth chart) insights, and numerology readings—all delivered by our
            carefully verified astrologers.
          </p>
        </div>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <ChatIcon className="text-primary w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Live Chats & Calls</h3>
                <p className="text-muted-foreground">Instant consultations when life&apos;s questions call.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <VideoIcon className="text-primary w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Audio & Video Sessions</h3>
                <p className="text-muted-foreground">Deep, real-time conversations with expert astrologers.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <KundliIcon className="text-primary w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Kundli Analysis</h3>
                <p className="text-muted-foreground">
                  Personalized interpretations of your birth chart to understand life&apos;s patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <NumerologyIcon className="text-primary w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Numerology Readings</h3>
                <p className="text-muted-foreground">
                  Explore the significance of your name and birth date to uncover your strengths and purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <VerifiedIcon className="text-primary w-20 h-20" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Verified Astrologers</h3>
                <p className="text-muted-foreground">
                  Confidence in every session: our astrologers are vetted for expertise, authenticity, and integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why We're Unique */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Why Astroway Is Unique</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 flex items-start gap-4">
                <TrustIcon className="text-primary w-12 h-12 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Trust Builds Everything</h3>
                  <p className="text-muted-foreground">
                    Every astrologer on Astroway is verified to ensure insightful and authentic guidance.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-6 flex items-start gap-4">
                <TechIcon className="text-primary w-12 h-12 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Modern Tech, Traditional Wisdom</h3>
                  <p className="text-muted-foreground">
                    Our platform is designed for seamless, secure consultations—rooted in the depth of ancient
                    astroscience.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Purpose Over Predictions</h3>
                <p className="text-muted-foreground">
                  We provide clarity, not certainty—empowering you with cosmic context, not dire forecasts.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Privacy as a Priority</h3>
                <p className="text-muted-foreground">
                  All interactions are confidential and handled with respect and discretion.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Inclusive by Design</h3>
                <p className="text-muted-foreground">
                  Whether you&apos;re new to astrology or seeking deeper exploration, you&apos;ll find a welcoming, judgment-free
                  environment here.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Our Vision</h2>
          <div className="flex justify-center mb-8">
            <VisionIcon className="text-primary w-24 h-24" />
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">
              Astroway aspires to be a digitally trusted haven for astroscience seekers—where ancient guidance meets
              modern technology, and every interaction fosters clarity, connection, and cosmic insight.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
