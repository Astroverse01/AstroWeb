"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "../i18n/routing"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { ChevronDownIcon, GlobeIcon } from "lucide-react"

const options = [
  { code: "en", label: "English", flag: "🇺🇸", nativeName: "English" },
  { code: "hi", label: "हिंदी", flag: "🇮🇳", nativeName: "हिंदी" },
  { code: "gu", label: "ગુજરાતી", flag: "🇮🇳", nativeName: "ગુજરાતી" },
  { code: "kn", label: "ಕನ್ನಡ", flag: "🇮🇳", nativeName: "ಕನ್ನಡ" },
  { code: "ta", label: "தமிழ்", flag: "🇮🇳", nativeName: "தமிழ்" },
  { code: "te", label: "తెలుగు", flag: "🇮🇳", nativeName: "తెలుగు" },
  { code: "ml", label: "മലയാളം", flag: "🇮🇳", nativeName: "മലയാളം" },
  { code: "mr", label: "मराठी", flag: "🇮🇳", nativeName: "मराठी" }
];

export default function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)

  const currentOption = options.find((option) => option.code === locale) || options[0]

  const switchTo = (next) => {
    setIsOpen(false)

    // Preserve query string & hash, and let next-intl handle the prefixing
    const qs = searchParams?.toString()
    const href = qs ? `${pathname}?${qs}` : pathname

    // next-intl wrapper lets you pass { locale }
    router.replace(href, { locale: next })
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <GlobeIcon className="w-4 h-4" />
        <span className="flex items-center gap-2">
          <span className="text-base" role="img" aria-label={`${currentOption.nativeName} flag`}>
            {currentOption.flag}
          </span>
          <span className="hidden sm:inline">{currentOption.nativeName}</span>
          <span className="sm:hidden">{currentOption.code.toUpperCase()}</span>
        </span>
        <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div className="fixed inset-0 z-10 sm:hidden" onClick={() => setIsOpen(false)} aria-hidden="true" />

          <div className="absolute right-0 z-20 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95 duration-200">
            <div className="py-1" role="listbox" aria-label="Language options">
              {options.map(({ code, label, flag, nativeName }) => (
                <button
                  key={code}
                  onClick={() => switchTo(code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150 ${
                    code === locale ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700"
                  }`}
                  role="option"
                  aria-selected={code === locale}
                  aria-label={`Switch to ${nativeName}`}
                >
                  <span className="text-lg" role="img" aria-label={`${nativeName} flag`}>
                    {flag}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-medium">{nativeName}</span>
                    {nativeName !== label && <span className="text-xs text-gray-500">{label}</span>}
                  </div>
                  {code === locale && (
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" aria-hidden="true" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
