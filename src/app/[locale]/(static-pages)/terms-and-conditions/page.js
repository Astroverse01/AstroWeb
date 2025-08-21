import { TermsIcon } from "@/components/icons/terms-icon"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <TermsIcon className="text-primary w-24 h-24" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Terms & Conditions</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Understanding the terms of service for your Astroway experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Last Updated */}
          <Card>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> January 2025
              </p>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Welcome to Astroway</h2>
              <p className="text-foreground leading-relaxed mb-4">
                These Terms and Conditions ("Terms") govern your use of the Astroway website and services. By accessing
                our website at{" "}
                <a href="https://astroway.com" className="text-primary hover:underline">
                  astroway.com
                </a>{" "}
                or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-foreground leading-relaxed">
                Please read these Terms carefully before using our services. If you do not agree with any part of these
                Terms, you should not use our website or services.
              </p>
            </CardContent>
          </Card>

          {/* Acceptance of Terms */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-foreground leading-relaxed mb-4">
                By creating an account, booking a consultation, or using any part of our website, you acknowledge that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>You have read and understood these Terms and Conditions</li>
                <li>You agree to comply with all applicable laws and regulations</li>
                <li>You are at least 18 years old or have parental consent</li>
                <li>You provide accurate and truthful information</li>
                <li>You understand that astrological services are for entertainment and guidance purposes</li>
              </ul>
            </CardContent>
          </Card>

          {/* Services Description */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Astroway provides astrological consultation services including:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Personal Consultations</h3>
                  <p className="text-muted-foreground">
                    One-on-one sessions with certified astrologers via chat, phone, or video call.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Birth Chart Analysis</h3>
                  <p className="text-muted-foreground">
                    Detailed natal chart readings and personalized astrological reports.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Compatibility Reports</h3>
                  <p className="text-muted-foreground">
                    Relationship compatibility analysis and synastry chart interpretations.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Predictive Astrology</h3>
                  <p className="text-muted-foreground">Transit forecasts, solar return charts, and timing guidance.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Use License */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">License to Use</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We grant you a limited, non-exclusive, non-transferable license to use our website and services for
                personal, non-commercial purposes, subject to these Terms. This license does not include the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Modify, copy, or distribute our content without written permission</li>
                <li>Use our services for commercial purposes or resale</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Remove copyright notices or proprietary markings</li>
                <li>Use automated systems to access our services (bots, scrapers, etc.)</li>
                <li>Share your account credentials with others</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Responsibilities</h2>
              <p className="text-foreground leading-relaxed mb-4">As a user of Astroway services, you agree to:</p>
              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Respectful Conduct</h3>
                  <p className="text-muted-foreground">
                    Treat our astrologers and staff with respect and courtesy during all interactions.
                  </p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Accurate Information</h3>
                  <p className="text-muted-foreground">
                    Provide accurate birth details and personal information for the most precise readings.
                  </p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Payment Obligations</h3>
                  <p className="text-muted-foreground">
                    Pay all fees promptly and maintain valid payment information in your account.
                  </p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Account Security</h3>
                  <p className="text-muted-foreground">
                    Keep your login credentials secure and notify us immediately of any unauthorized access.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Important Disclaimer</h2>
              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-6 rounded-lg">
                <p className="text-foreground leading-relaxed mb-4">
                  <strong>Entertainment and Guidance Purpose:</strong> Astrological services provided by Astroway are
                  for entertainment, self-reflection, and guidance purposes only. They should not be considered as:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                  <li>Medical, legal, financial, or professional advice</li>
                  <li>Guaranteed predictions of future events</li>
                  <li>Substitute for professional counseling or therapy</li>
                  <li>Basis for making major life decisions without consultation with appropriate professionals</li>
                </ul>
                <p className="text-foreground leading-relaxed">
                  We encourage you to use astrological insights as one tool among many for self-understanding and
                  personal growth.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Payment & Refund Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Payment Processing</h3>
                  <p className="text-muted-foreground">
                    All payments are processed securely through encrypted payment gateways. We accept major credit
                    cards, PayPal, and other approved payment methods.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Refund Policy</h3>
                  <p className="text-muted-foreground mb-2">We offer refunds under the following conditions:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Technical issues preventing service delivery (full refund)</li>
                    <li>Cancellation 24+ hours before scheduled consultation (full refund)</li>
                    <li>Unsatisfactory service quality (case-by-case review)</li>
                    <li>Duplicate charges or billing errors (immediate correction)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-foreground leading-relaxed mb-4">
                To the fullest extent permitted by law, Astroway and its astrologers shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
              <p className="text-muted-foreground">
                Our total liability for any claims related to our services shall not exceed the amount you paid for the
                specific service in question.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions About These Terms?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions or need clarification on any aspect of our
                services, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:legal@astroway.com" className="text-primary hover:underline">
                    legal@astroway.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong> +1 (555) 123-STAR
                </p>
                <p>
                  <strong>Address:</strong> 123 Cosmic Avenue, Starlight City, SC 12345
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Updates to Terms */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to These Terms</h2>
              <p className="text-foreground leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. We will notify users of
                significant changes via email or website notification. Continued use of our services after changes
                constitutes acceptance of the updated Terms. We recommend reviewing these Terms periodically to stay
                informed of any updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
