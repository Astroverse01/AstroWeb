"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

export default function Body() {
  const t = useTranslations("Hero")

  const scrollToFeedback = () => {
    document.getElementById("feedback")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="container mx-auto py-10 px-4 md:py-16 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Content Section - Left Side */}
        <div className="text-left space-y-6 order-2 lg:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">{t("title")}</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t("description")}</p>
          <div>
            {/* <button
              onClick={scrollToFeedback}
              className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300 text-lg"
            >
              {t("button")}
            </button> */}
            <a
              href="/apk/astroway.apk" // replace with your actual APK file path or download link
              download
              className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300 text-lg"
            >{t("button")}</a>
          </div>
        </div>

        {/* Image Section - Right Side */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative max-w-sm lg:max-w-md xl:max-w-lg w-full">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/assets/images/space-hero.svg?height=500&width=500"
                alt="Mystical starry night sky"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
