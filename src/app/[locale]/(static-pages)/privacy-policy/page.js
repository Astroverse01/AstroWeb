import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "privacyPolicy.meta" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://astroway.com/privacy",
      siteName: "Astroway"
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description")
    }
  };
}

export default function PrivacyPolicy() {
  const t = useTranslations("privacyPolicy");

  return (
    <div className="min-h-screen bg-[#181a20]">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-[#23252b] rounded-xl p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t("title")}
          </h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              {t("intro")}{" "}
              <a
                href="https://astroway.com"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#b3e0ff] hover:underline"
              >
                astroway.com
              </a>
              .
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-300 mb-8">
              <li>{t("points.confidentiality")}</li>
              <li>{t("points.noMisuse")}</li>
              <li>{t("points.profileAccess")}</li>
              <li>{t("points.noSell")}</li>
            </ul>

            <div className="bg-[#1a1c22] p-4 rounded-lg mb-8">
              <p className="text-sm text-gray-400">
                {t("note")}
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">
              {t("sections.whatWeCollect")}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-[#b3e0ff] mb-3">
                  {t("sections.registrationData.title")}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("sections.registrationData.desc")}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#b3e0ff] mb-3">
                  {t("sections.security.title")}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("sections.security.desc")}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#b3e0ff] mb-3">
                  {t("sections.contact.title")}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t("sections.contact.desc")}{" "}
                  <a
                    href={`mailto:${t("sections.contact.email")}`}
                    className="text-[#b3e0ff] hover:underline"
                  >
                    {t("sections.contact.email")}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
