import { useTranslations } from "next-intl";

export async function generateMetadata() {
  return {
    title: "Terms and Conditions | Astroway",
    description:
      "Read Astroway's Terms and Conditions to understand the rules, usage rights, disclaimers, and contact details regarding our services and website.",
    openGraph: {
      title: "Terms and Conditions | Astroway",
      description:
        "Read Astroway's Terms and Conditions to understand the rules, usage rights, disclaimers, and contact details regarding our services and website.",
      url: "https://astroway.com/terms",
      siteName: "Astroway"
    },
    twitter: {
      card: "summary_large_image",
      title: "Terms and Conditions | Astroway",
      description:
        "Read Astroway's Terms and Conditions to understand the rules, usage rights, disclaimers, and contact details regarding our services and website."
    }
  };
}


export default function TermsAndConditions() {
  const t = useTranslations("terms");

  return (
    <div className="min-h-screen bg-[#181a20]">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-[#23252b] rounded-xl p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t("title")}
          </h1>

          <p className="text-gray-300 leading-relaxed mb-6">{t("intro")}</p>

          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">{t("sections.acceptance.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("sections.acceptance.desc")}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">{t("sections.useLicense.title")}</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{t("sections.useLicense.desc")}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>{t("sections.useLicense.bullets.licenseNotTitleTransfer")}</li>
                <li>{t("sections.useLicense.bullets.noModifyCopy")}</li>
                <li>{t("sections.useLicense.bullets.noCommercialPublicDisplay")}</li>
                <li>{t("sections.useLicense.bullets.noReverseEngineering")}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">{t("sections.disclaimer.title")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("sections.disclaimer.desc")}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">{t("sections.contact.title")}</h2>
              <p className="text-gray-300 leading-relaxed">
                {t("sections.contact.desc")}{" "}
                <a href={`mailto:${t("sections.contact.email")}`} className="text-[#b3e0ff] hover:underline">
                  {t("sections.contact.email")}
                </a>.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
