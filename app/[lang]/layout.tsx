import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import I18nProvider from "@/providers/I18nProvider";
import { Locale } from "@/types";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
};

const WEBSITE_URL = "https://studio.maxiruti.com";

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

const metaTranslations = {
  es: {
    title: {
      default: "Maxi Ruti Studio | Aplicaciones y Herramientas",
      template: "%s | Maxi Ruti Studio",
    },
    description:
      "Explora aplicaciones y herramientas digitales independientes creadas por Maxi Ruti con calma, intención y detalle para iOS, Android y Web.",
    keywords: [
      "Maxi Ruti",
      "Studio",
      "iOS apps",
      "Android apps",
      "indie developer",
      "aplicaciones móviles",
      "software independiente",
    ],
    ogTitle: "Maxi Ruti Studio | Aplicaciones Independientes",
    ogDescription:
      "Aplicaciones y herramientas digitales enfocadas en rutinas diarias, productividad y bienestar.",
    twitterDescription:
      "Herramientas y aplicaciones independientes creadas con dedicación y diseño intencional.",
    locale: "es_ES",
    ogImage: "/thumbnails/og-studio.png",
    ogImageAlt: "Maxi Ruti Studio - Showcase de aplicaciones",
  },
  en: {
    title: {
      default: "Maxi Ruti Studio | Focused Apps & Tools",
      template: "%s | Maxi Ruti Studio",
    },
    description:
      "Explore independent digital tools and apps crafted by Maxi Ruti with care and intent for iOS, Android, and Web.",
    keywords: [
      "Maxi Ruti",
      "Studio",
      "iOS apps",
      "Android apps",
      "indie developer",
      "mobile apps",
      "clean software",
    ],
    ogTitle: "Maxi Ruti Studio | Independent Apps",
    ogDescription:
      "Focused apps and tools for daily rituals, learning, and productivity.",
    twitterDescription:
      "Independent tools & apps crafted with care and intent.",
    locale: "en_US",
    ogImage: "/thumbnails/og-studio.png",
    ogImageAlt: "Maxi Ruti Studio - Apps Showcase",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "es" ? "es" : "en";
  const t = metaTranslations[lang];

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: "Maxi Ruti" }],
    creator: "Maxi Ruti",
    metadataBase: new URL(WEBSITE_URL),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "es-ES": "/es",
        "en-US": "/en",
      },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: `${WEBSITE_URL}/${lang}`,
      siteName: "Maxi Ruti Studio",
      images: [
        {
          url: t.ogImage,
          width: 1200,
          height: 630,
          alt: t.ogImageAlt,
        },
      ],
      locale: t.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.ogTitle,
      description: t.twitterDescription,
      images: [t.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === "es" ? "es" : "en";
  const dict = lang === "es" ? es : en;
  const meta = metaTranslations[lang];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: meta.title.default,
    description: meta.description,
    url: `${WEBSITE_URL}/${lang}`,
    inLanguage: lang,
  };

  return (
    <html lang={lang}>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-canvas text-primary-dark min-h-screen flex flex-col`}
      >
        <I18nProvider locale={lang}>
          <Navbar
            currentLocale={lang}
            portfolioLabel={dict.site.portfolioLink}
          />
          <main className='flex-1'>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
