import { PrivacyIcon } from "@/components/icons/privacy-icon"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <PrivacyIcon className="text-primary w-24 h-24" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your privacy and confidentiality are our highest priorities at Astroway
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-foreground leading-relaxed mb-4">
                At Astroway, we understand that seeking astrological guidance is deeply personal. Your trust is sacred
                to us, and we are committed to protecting your privacy with the highest standards of confidentiality and
                security.
              </p>
              <p className="text-foreground leading-relaxed">
                This Privacy Policy explains how we collect, use, protect, and handle your personal information when you
                visit our website at{" "}
                <a href="https://astroway.com" className="text-primary hover:underline">
                  astroway.com
                </a>{" "}
                and use our services.
              </p>
            </CardContent>
          </Card>

          {/* Key Principles */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Privacy Principles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Complete Confidentiality</h3>
                  <p className="text-muted-foreground">
                    Your consultations and personal information remain strictly confidential between you and your
                    astrologer.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Data Misuse</h3>
                  <p className="text-muted-foreground">
                    We never use your personal information for unauthorized purposes or share it without your consent.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Secure Access</h3>
                  <p className="text-muted-foreground">
                    Only you and authorized personnel have access to your profile and consultation history.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Never Sold</h3>
                  <p className="text-muted-foreground">
                    Your personal data is never sold, rented, or shared with third parties for marketing purposes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Information We Collect</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Registration Information</h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    When you create an account with Astroway, we collect:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Birth details (date, time, and place of birth for accurate readings)</li>
                    <li>Account preferences and consultation history</li>
                    <li>Payment information (processed securely through encrypted channels)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Consultation Data</h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    To provide accurate astrological guidance, we may collect:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Questions and concerns you share during consultations</li>
                    <li>Feedback and ratings for our astrologers</li>
                    <li>Communication preferences and scheduling information</li>
                    <li>Session recordings (only with your explicit consent)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Technical Information</h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    For website functionality and security, we automatically collect:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>IP address and browser information</li>
                    <li>Device type and operating system</li>
                    <li>Website usage patterns and page views</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">How We Use Your Information</h2>

              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Providing Services</h3>
                  <p className="text-muted-foreground">
                    We use your information to deliver personalized astrological consultations, maintain your account,
                    and process payments securely.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Communication</h3>
                  <p className="text-muted-foreground">
                    We may contact you about appointments, service updates, and important account information. Marketing
                    communications are always opt-in.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Improvement & Security</h3>
                  <p className="text-muted-foreground">
                    We analyze usage patterns to improve our services and maintain security measures to protect your
                    data from unauthorized access.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security & Protection</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>SSL encryption for all data transmission</li>
                <li>Secure servers with regular security updates</li>
                <li>Limited access controls for authorized personnel only</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Secure backup systems with encryption at rest</li>
                <li>Compliance with GDPR, CCPA, and other privacy regulations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Privacy Rights</h2>
              <p className="text-foreground leading-relaxed mb-4">
                You have complete control over your personal information. Your rights include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal data at any time</li>
                  <li>Correct or update your information</li>
                  <li>Delete your account and associated data</li>
                  <li>Export your data in a portable format</li>
                </ul>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Opt-out of marketing communications</li>
                  <li>Restrict certain data processing</li>
                  <li>Object to automated decision-making</li>
                  <li>File complaints with regulatory authorities</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Our Privacy Team</h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or need assistance with your privacy rights, please
                contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@astroway.com" className="text-primary hover:underline">
                    privacy@astroway.com
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

          {/* Updates */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
              <p className="text-foreground leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal
                requirements. We'll notify you of significant changes via email or website notification, and the updated
                policy will include a new "Last Updated" date.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
