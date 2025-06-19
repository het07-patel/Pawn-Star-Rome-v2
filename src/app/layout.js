import "./globals.css";
import Layout from "@/components/layout";
import { generateCurrentTimeAndDate } from "@/utils/common";
import { sourceSansPro, gelasio } from "@/app/font";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  googleAnalyticsId,
  // googleSiteVerification,
} from "@/utils/environments";

const BASE_URL = "https://pawnstarsrome.com";

const META_TITLE = "Pawn Gold, Silver & Coins in Rome | Trusted Pawn Shop";
const META_DESCRIPTION =
  "Rome’s top pawn shop for gold, silver, coins, electronics, tools, and antiques. Buy, sell, exchange, or get loans with trusted service.";
const META_KEYWORDS =
  "pawn shop Rome, sell gold Rome, buy silver Rome, gold buyer Rome, silver buyer Rome, pawn coins Rome, antique buyer Rome, bullion pawn Rome, pawn broken jewelry Rome, sell electronics Rome, pawn watches Rome, pawn power tools Rome, collateral loans Rome, gold and silver exchange Rome, best pawn shop Rome, trusted pawn services Rome, diamond buyer Rome, pawn bullion Rome, sell antiques Rome, cash for gold Rome, pawn jewelry Rome, gold loans Rome, sell diamonds Rome, coin buyer Rome, sell collectibles Rome, pawn fine jewelry Rome.";
const CANONICAL_URL = "https://pawnstarsrome.com";
const OPEN_GRAPH_IMAGE = "/opengraph-image.png";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  viewport: "width=device-width, initial-scale=1",
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL_URL,
    siteName: "Pawn Star Rome",
    images: [
      {
        url: OPEN_GRAPH_IMAGE,
        width: 1200,
        height: 630,
        alt: "Pawn Star Rome",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [OPEN_GRAPH_IMAGE],
  },
  // verification: {
  //   google: googleSiteVerification,
  // },
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon/favicon.ico"],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-title": "Pawn Star Rome",
    "article:modified_time": generateCurrentTimeAndDate(),
    profile: "https://gmpg.org/xfn/11",
    generator:
      "Elementor 3.18.3; features: e_dom_optimization, e_optimized_assets_loading, additional_custom_breakpoints, block_editor_assets_optimize, e_image_loading_optimization; settings: css_print_method-external, google_font-enabled, font_display-auto",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Pawn Star Rome" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${sourceSansPro?.className}  ${gelasio.variable} `}>
        <Layout>{children}</Layout>
      </body>
      <GoogleAnalytics gaId={googleAnalyticsId} />
    </html>
  );
}
