const META_TITLE =
  "Cash for Diamonds & Fine Jewelry";
const META_DESCRIPTION =
  "Turn your diamond and fine jewelry into fast cash. We offer fair market evaluations and expert service for all types of pieces.";
const META_KEYWORDS =
  "diamond buyers, sell jewelry, cash for diamonds, sell gold jewelry, customized jewelry, broken jewelry buyers";
const CANONICAL_URL = " https://pawnstarsrome.com/what-we-buy/diamond-and-jewelry";
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
    siteName: "Pawn Star Rome | Diamond and Jewelry",
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

export default function DiamondJewelryLayout({ children }) {
  return children;
}
