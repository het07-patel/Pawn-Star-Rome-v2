const META_TITLE =
  "Buy & Sell Gold and Silver Bullion";
const META_DESCRIPTION =
  "Trusted bullion buying and selling made easy. We evaluate gold and silver bars, coins, and rounds with transparent pricing and fast payouts.";
const META_KEYWORDS =
  "buy bullion, sell bullion, gold bars, silver rounds, platinum coins, bullion buyers, gold bullion";
const CANONICAL_URL = " https://pawnstarsrome.com/bullion";
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
    siteName: "Pawn Star Rome | Bullion",
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

export default function BullionLayout({ children }) {
  return children;
}
