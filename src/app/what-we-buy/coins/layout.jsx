const META_TITLE =
  "Buy and Sell Coins with Confidence";
const META_DESCRIPTION =
  "We buy and sell all types of coins including rare, collectible, silver, and gold coins. Transparent process with top value guaranteed.";
const META_KEYWORDS =
  "coin buyers, sell coins, buy coins, rare coin buyers, silver coins, gold coins, coin appraisal";
const CANONICAL_URL = " https://pawnstarsrome.com/what-we-buy/coins";
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
    siteName: "Pawn Star Rome | Coins",
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

export default function CoinsLayout({ children }) {
  return children;
}
