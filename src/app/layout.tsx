import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { STUDIO_INFO } from "@/data/site";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://machadostudio.com.br"),
  title: "MACHADO STUDIO | Estética Automotiva e Polimento em Umuarama - PR",
  description:
    "Eleve o nível de conservação e brilho do seu veículo no Machado Studio em Umuarama - PR. Liderado por Lucas Machado: polimento de alta performance, proteção de pintura, limpeza técnica detalhada, restauração de faróis e modalidade delivery. Nota 5.0 no Google.",
  keywords: [
    "Machado Studio",
    "Estética Automotiva Umuarama",
    "Polimento Automotivo Umuarama",
    "Lucas Machado Estética Automotiva",
    "Detalhamento Automotivo Umuarama",
    "Proteção de Pintura Umuarama",
    "Restauração de Faróis Umuarama",
    "Lavagem Detalhada Delivery Umuarama",
  ],
  authors: [{ name: "MACHADO STUDIO | Lucas Machado" }],
  creator: "MACHADO STUDIO | Estética Automotiva",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "MACHADO STUDIO | Estética Automotiva e Polimento em Umuarama - PR",
    description:
      "Mais de 50 opções de serviços especializados em estética automotiva, polimento de alta performance e proteção de pintura em Umuarama - PR. Atendimento exclusivo em estúdio ou delivery com Lucas Machado.",
    siteName: "MACHADO STUDIO | Estética Automotiva",
    images: [
      {
        url: "/images/hero-desktop.jpg",
        width: 1920,
        height: 1080,
        alt: "MACHADO STUDIO | Estética Automotiva de Alto Padrão em Umuarama - PR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MACHADO STUDIO | Estética Automotiva e Polimento em Umuarama - PR",
    description:
      "Polimento de alta performance, proteção de pintura, limpeza técnica e atendimento delivery em Umuarama - PR. Nota 5.0 no Google.",
    images: ["/images/hero-desktop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  name: STUDIO_INFO.fullTitle,
  description:
    "Estúdio de estética automotiva de alto padrão em Umuarama - PR, liderado por Lucas Machado. Polimento de alta performance, proteção de pintura, limpeza técnica detalhada, restauração de faróis e atendimento delivery.",
  image: "/images/hero-desktop.jpg",
  telephone: STUDIO_INFO.phoneSchema,
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: STUDIO_INFO.founder,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Imperatriz, 2099, Conjunto Córrego Longe",
    addressLocality: "Umuarama",
    addressRegion: "PR",
    postalCode: "87504-630",
    addressCountry: "BR",
  },
  openingHours: ["Mo-Fr 08:00-19:30", "Sa 08:00-18:00"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    ratingCount: "40",
  },
  sameAs: [STUDIO_INFO.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${plusJakartaSans.variable} dark`}
    >
      <body className="bg-[#09090B] text-[#E4E4E7] antialiased selection:bg-[#DC2626] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        {/* Camada de Granulação Cinematográfica SVG Noise (opacidade 0.03) */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        >
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="machado-studio-noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.82"
                numOctaves="4"
                stitchTiles="stitch"
              />
            </filter>
            <rect
              width="100%"
              height="100%"
              filter="url(#machado-studio-noise)"
            />
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}
