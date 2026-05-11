import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vitral.software';

const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Vitral — Software house brasileira | Sistemas sob medida',
    template: '%s | Vitral',
  },
  description:
    'Estúdio de software brasileiro. Projetamos, desenvolvemos, integramos e mantemos plataformas digitais para empresas que tratam software como núcleo do negócio. Resposta em até 2 dias úteis.',
  applicationName: 'Vitral',
  keywords: [
    'software house',
    'desenvolvimento de software',
    'software sob medida',
    'desenvolvimento web',
    'desenvolvimento mobile',
    'integração de APIs',
    'SaaS',
    'arquitetura de software',
    'Next.js',
    'Angular',
    'Flutter',
    'Brasil',
    'estúdio de software',
    'Vitral',
  ],
  authors: [{ name: 'Vitral' }],
  creator: 'Vitral',
  publisher: 'Vitral',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Vitral',
    title: 'Vitral — Sistemas completos, construídos como infraestrutura',
    description:
      'Software house brasileira. Do primeiro diagrama ao monitoramento em produção — agenda 2026 aberta.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitral — Software House',
    description:
      'Sistemas completos, construídos como infraestrutura. Agenda 2026 aberta.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E85002',
  colorScheme: 'dark',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vitral',
  alternateName: 'Vitral Software',
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  description:
    'Estúdio de software brasileiro. Projetamos, desenvolvemos, integramos e mantemos plataformas digitais.',
  foundingDate: '2026',
  founders: [
    { '@type': 'Person', name: 'Vitor Henrique', jobTitle: 'Engenheiro de software' },
    { '@type': 'Person', name: 'Rafael', jobTitle: 'Engenheiro de software' },
    { '@type': 'Person', name: 'Luiz', jobTitle: 'Desenvolvedor mobile' },
  ],
  email: 'projetos@vitral.software',
  areaServed: { '@type': 'Country', name: 'Brasil' },
  knowsAbout: [
    'Desenvolvimento de produto',
    'Integração de APIs e sistemas',
    'Deploy e infraestrutura',
    'Automação de processos',
    'Manutenção e SRE',
    'Discovery e arquitetura',
  ],
  sameAs: [],
};

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Vitral',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  priceRange: '$$',
  areaServed: 'Brasil',
  serviceType: [
    'Desenvolvimento de software sob medida',
    'Integração de APIs e sistemas',
    'Deploy e infraestrutura em nuvem',
    'Automação de processos',
    'Manutenção e SRE',
    'Discovery e arquitetura de software',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
      </body>
    </html>
  );
}
