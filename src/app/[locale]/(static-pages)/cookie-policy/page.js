import { CookieIcon } from "@/components/icons/cookie-icon"
import { Card, CardContent } from "@/components/ui/card"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <CookieIcon className="text-primary w-24 h-24" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Cookie Policy</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Understanding how we use cookies to enhance your Astroway experience
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
              <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us
                provide you with a better experience by remembering your preferences and improving our services.
              </p>
              <p className="text-foreground leading-relaxed">
                At Astroway, we use cookies responsibly to enhance your cosmic journey while respecting your privacy and
                maintaining the confidentiality that&apos;s essential to our astrological consultations.
              </p>
            </CardContent>
          </Card>

          {/* Types of Cookies */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies are necessary for our website to function properly. They enable core functionality
                    such as:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>User authentication and session management</li>
                    <li>Security features and fraud prevention</li>
                    <li>Basic website functionality and navigation</li>
                    <li>Maintaining your consultation preferences</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Preference Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies remember your choices and preferences to personalize your experience:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Language and region settings</li>
                    <li>Theme preferences (light/dark mode)</li>
                    <li>Consultation type preferences</li>
                    <li>Astrologer selection history</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Analytics Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies help us understand how visitors interact with our website:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Page views and user journey tracking</li>
                    <li>Popular consultation types and services</li>
                    <li>Website performance and error monitoring</li>
                    <li>Aggregated usage statistics (anonymized)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground mb-2">
                    These cookies help us provide relevant content and advertisements:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Personalized content recommendations</li>
                    <li>Relevant astrology insights and articles</li>
                    <li>Social media integration features</li>
                    <li>Email marketing preferences</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Managing Cookies */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-foreground leading-relaxed mb-4">
                You have full control over your cookie preferences. Here&apos;s how you can manage them:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Browser Settings</h3>
                  <p className="text-muted-foreground">
                    Most web browsers allow you to control cookies through their settings. You can choose to accept all
                    cookies, reject all cookies, or be notified when a cookie is set.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Cookie Consent Banner</h3>
                  <p className="text-muted-foreground">
                    When you first visit our website, you&apos;ll see a cookie consent banner where you can choose which
                    types of cookies to accept or reject.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Account Settings</h3>
                  <p className="text-muted-foreground">
                    Logged-in users can manage their cookie preferences through their account settings at any time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We may use trusted third-party services that set their own cookies. These include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Google Analytics:</strong> For website analytics and performance monitoring
                </li>
                <li>
                  <strong>Payment Processors:</strong> For secure payment processing during consultations
                </li>
                <li>
                  <strong>Communication Tools:</strong> For live chat and video consultation features
                </li>
                <li>
                  <strong>Content Delivery Networks:</strong> For faster website loading and performance
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Privacy Matters</h2>
              <p className="text-foreground leading-relaxed mb-4">
                At Astroway, we understand that privacy is paramount, especially when seeking spiritual and personal
                guidance. Our cookie policy aligns with our commitment to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Maintaining complete confidentiality of your consultations</li>
                <li>Protecting your personal information and preferences</li>
                <li>Being transparent about data collection and usage</li>
                <li>Giving you control over your digital experience</li>
                <li>Complying with international privacy regulations (GDPR, CCPA)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Our Cookie Policy?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you have any questions about our use of cookies or need assistance managing your preferences, please
                don&apos;t hesitate to contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Email:</strong> privacy@astroway.com
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

          {/* Updates */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
              <p className="text-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and
                regulatory reasons. We&apos;ll notify you of any significant changes by posting the updated policy on our
                website and updating the &quot;Last Updated&quot; Last date above.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
