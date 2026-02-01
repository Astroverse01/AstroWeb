"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Body() {
  const t = useTranslations("Hero");

  const scrollToFeedback = () => {
    document.getElementById("feedback")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="container mx-auto py-10 px-4 md:py-16 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Content Section - Left Side */}
        <div className="text-left space-y-6 order-2 lg:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {t("title")}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("description")}
          </p>

          {/* QR + Button Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Light Mode QR */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.astrowayuser&color=000000&bgcolor=ffffff"
              alt="QR - Light Mode"
              className="rounded-md w-[140px] h-[140px] block dark:hidden"
            />

            {/* Dark Mode QR */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.astrowayuser&color=ffffff&bgcolor=000000"
              alt="QR - Dark Mode"
              className="rounded-md w-[140px] h-[140px] hidden dark:block"
            />

            {/* Download Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.astrowayuser"
              target="_blank"
              className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300 text-lg shadow-lg"
            >
              {t("button")}
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            Scan the QR or tap the button to download the app.
          </p>
        </div>

        {/* Video Section - Right Side */}

        <div className="flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative max-w-sm lg:max-w-md xl:max-w-lg w-full">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <video
                src="/video/video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />

              {/* THEME-FRIENDLY OVERLAY */}
              <div className="absolute inset-0 bg-black/40" />

              {/* SUBTLE BOTTOM GRADIENT LIKE SPLASH */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 dark:from-black/90 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
