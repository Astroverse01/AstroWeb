import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/theme-provider";
import { getMessages } from "next-intl/server";
import Header from "../components/header";
import Footer from "../components/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Astrosway - Your Cosmic Journey Begins",
  description:
    "Discover the mysteries of the universe with Astrosway. Professional astrology services, cosmic insights, and personalized readings.",
  generator: "v0.app",
};

export default async function LocaleLayout({ children, params }) {
  // locale comes from the [locale] segment in /src/app/[locale]/
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main className="flex-1">{children}</main>
            <Toaster />
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
