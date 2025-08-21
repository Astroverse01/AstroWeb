import AppIcon from "@/components/icons/app-icon"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <AppIcon size={48} className="flex-shrink-0 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Astroway</h3>
            </div>
            <p className="text-sm text-muted-foreground text-center sm:text-left max-w-xs">
              Discover your cosmic journey with personalized astrological insights and guidance.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="YouTube"
              >
                <Youtube size={22} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Newsletter</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">Get cosmic insights delivered to your inbox</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
              <button className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg transform hover:scale-[1.02]">
                <Mail size={16} />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">&copy; 2026 Astroway. All rights reserved.</p>
            <p className="text-muted-foreground text-sm">
              <a
                href="mailto:customercare@astroway.com"
                className="hover:text-primary transition-colors duration-200 font-medium"
              >
                customercare@astroway.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
