"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Body() {
  const t = useTranslations("Hero");

  const scrollToFeedback = () => {
    document.getElementById("feedback")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto my-8 rounded-2xl overflow-hidden bg-[#23252b]">
      {/* Hero Background */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src="/assets/images/space-hero.svg?height=500&width=1200"
          alt="Mystical starry night sky"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

        {/* Hero Content */}
        <div className="absolute top-1/2 left-4 md:left-16 -translate-y-1/2 text-white max-w-md">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed">
            {t("description")}
          </p>
          <button
            onClick={scrollToFeedback}
            className="bg-[#e0ecff] text-black font-bold px-8 py-3 rounded-full hover:bg-[#c6dafd] transition-colors duration-300 text-lg"
          >
            {t("button")}
          </button>
        </div>
      </div>
    </section>
  );
}
