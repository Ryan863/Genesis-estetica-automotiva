import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gênesis Estética Automotiva | Detalhamento & Vitrificação em Francisco Beltrão - PR",
  description:
    "Estética automotiva de alta precisão em Francisco Beltrão. Polimento técnico, vitrificação cerâmica, higienização interna e proteção de pintura com atendimento exclusivo por hora marcada no bairro São Miguel. Avaliação 5.0 ★ no Google.",
  keywords: [
    "estética automotiva francisco beltrão",
    "vitrificação de pintura francisco beltrão",
    "polimento técnico são miguel",
    "detalhamento automotivo pr",
    "gênesis estética automotiva",
    "higienização interna de veículos",
    "proteção cerâmica automotiva",
  ],
  authors: [{ name: "Gênesis Estética Automotiva" }],
  creator: "Gênesis Estética Automotiva",
  publisher: "Gênesis Estética Automotiva",
  metadataBase: new URL("https://genesis-estetica-automotiva.vercel.app"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://genesis-estetica-automotiva.vercel.app",
    title: "Gênesis Estética Automotiva | Francisco Beltrão - PR",
    description:
      "A restauração minuciosa e a proteção definitiva para o seu veículo. Cuidado artesanal com atendimento por hora marcada. Avaliação 5.0 ★★★★★ no Google.",
    siteName: "Gênesis Estética Automotiva",
    images: [
      {
        url: "/images/hero-car-desktop.png",
        width: 1920,
        height: 1080,
        alt: "Gênesis Estética Automotiva - Detalhamento e Vitrificação de Alto Padrão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gênesis Estética Automotiva | Detalhamento de Elite",
    description:
      "Polimento técnico, vitrificação cerâmica e higienização detalhada em Francisco Beltrão - PR.",
    images: ["/images/hero-car-desktop.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "Gênesis Estética Automotiva",
    image: "https://genesis-estetica-automotiva.vercel.app/images/hero-car-desktop.png",
    "@id": "https://genesis-estetica-automotiva.vercel.app/#business",
    url: "https://genesis-estetica-automotiva.vercel.app",
    telephone: "+5546988214928",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Progresso, 244",
      addressLocality: "Francisco Beltrão",
      addressRegion: "PR",
      postalCode: "85602-100",
      addressCountry: "BR",
      neighborhood: "São Miguel",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -26.0792,
      longitude: -53.0568,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "67",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090B] text-[#F8FAFC] font-sans selection:bg-sky-500/25 selection:text-sky-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
