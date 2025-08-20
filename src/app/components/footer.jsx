import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#23252b] text-white text-center py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#b3e0ff]">Astroway</h3>
            <p className="text-gray-300 text-sm">
              Your trusted source for personalized astrology readings and cosmic insights.
            </p>
          </div>

          <div>
            <h4 className="text-md font-medium mb-4 text-[#b3e0ff]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#b3e0ff] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-[#b3e0ff] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-gray-300 hover:text-[#b3e0ff] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-medium mb-4 text-[#b3e0ff]">Contact</h4>
            <p className="text-gray-300 text-sm">
              <a href="mailto:customercare@astroway.com" className="hover:text-[#b3e0ff] transition-colors">
                customercare@astroway.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-[#444] pt-4">
          <p className="text-gray-400 text-sm">&copy; 2025 Astroway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
