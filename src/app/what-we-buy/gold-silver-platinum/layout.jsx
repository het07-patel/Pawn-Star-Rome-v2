const META_TITLE =
  "Sell Gold, Silver & Platinum for Top Value";
const META_DESCRIPTION =
  "Get the best price for your gold, silver, and platinum. Trusted evaluations, instant cash offers, and a secure, simple process you can count on.";
const META_KEYWORDS =
  "sell gold, silver buyers, platinum buyers, gold for cash, scrap jewelry buyers, precious metal buyers";
const CANONICAL_URL = " https://pawnstarsrome.com/what-we-buy/gold-silver-platinum";
const OPEN_GRAPH_IMAGE = "/opengraph-image.png";

export const metadata = {
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
    siteName: "Pawn Star Rome | Gold,Silver and Platinum",
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
};

export default function GoldSilverPlatinumLayout({ children }) {
  return children;
}
