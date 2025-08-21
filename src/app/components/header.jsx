// "use client"
// import { Link } from "@/i18n/routing"
// import { useState } from "react"
// import LocaleSwitcher from "../../components/lang-switcher"
// import ModeToggle from "../../components/mode-toggle"

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const scrollToFeedback = () => {
//     document.getElementById("feedback")?.scrollIntoView({ behavior: "smooth" })
//   }

//   return (
//     <nav className="flex items-center justify-between bg-[#23252b] px-4 md:px-8 py-4 border-b-2 border-[#222] flex-wrap">
//       <div className="logo font-bold text-xl md:text-2xl text-white tracking-wide">
//         <Link href="/">Astroway</Link>
//       </div>

//       <button className="md:hidden text-white text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//         ☰
//       </button>

//       <ul
//         className={`nav-links list-none flex gap-4 md:gap-8 m-0 p-0 flex-wrap ${isMenuOpen ? "flex" : "hidden md:flex"} w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0`}
//       >
//         <li>
//           <Link
//             href="/"
//             className="text-white no-underline text-base hover:text-[#b3e0ff] transition-colors duration-200"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/privacy-policy"
//             className="text-white no-underline text-base hover:text-[#b3e0ff] transition-colors duration-200"
//           >
//             Privacy
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/terms-and-conditions"
//             className="text-white no-underline text-base hover:text-[#b3e0ff] transition-colors duration-200"
//           >
//             Terms
//           </Link>
//         </li>
//       </ul>

//       <div className="flex items-center gap-3 mt-4 md:mt-0">
//         <ModeToggle />
//         <LocaleSwitcher />
//         <button
//           onClick={scrollToFeedback}
//           className="explore-btn bg-[#dbeafe] text-[#222] border-none rounded-full px-5 py-2 font-semibold cursor-pointer hover:bg-[#b3e0ff] transition-colors duration-200"
//         >
//           Get Started
//         </button>
//       </div>
//     </nav>
//   )
// }


"use client"
import { Link } from "@/i18n/routing"
import { useState } from "react"
import LocaleSwitcher from "../../components/lang-switcher"
import ModeToggle from "../../components/mode-toggle"
import AppIcon from "@/components/icons/app-icon"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToFeedback = () => {
    document.getElementById("feedback")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="flex items-center justify-between bg-background px-4 md:px-8 py-4 border-b border-border shadow-sm">
      <div className="flex items-center gap-2 font-bold text-xl md:text-2xl text-foreground tracking-wide">
        <AppIcon className="w-8 h-8 text-primary" />
        <Link href="/" className="hover:text-primary transition-colors duration-200">
          Astroway
        </Link>
      </div>

      <button
        className="md:hidden text-foreground text-2xl p-2 hover:text-primary transition-colors duration-200"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul
        className={`nav-links list-none flex gap-4 md:gap-8 m-0 p-0 flex-wrap ${
          isMenuOpen ? "flex" : "hidden md:flex"
        } w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0 ${
          isMenuOpen ? "flex-col md:flex-row items-center" : ""
        }`}
      >
        <li>
          <Link
            href="/"
            className="text-foreground no-underline text-base hover:text-primary transition-colors duration-200 py-2 md:py-0"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-foreground no-underline text-base hover:text-primary transition-colors duration-200 py-2 md:py-0"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-foreground no-underline text-base hover:text-primary transition-colors duration-200 py-2 md:py-0"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-3 mt-4 md:mt-0">
        <ModeToggle />
        <LocaleSwitcher />
        <button
          onClick={scrollToFeedback}
          className="explore-btn bg-primary text-primary-foreground border-none rounded-full px-5 py-2 font-semibold cursor-pointer hover:bg-primary/90 transition-colors duration-200 whitespace-nowrap"
        >
          Get Started
        </button>
      </div>
    </nav>
  )
}
