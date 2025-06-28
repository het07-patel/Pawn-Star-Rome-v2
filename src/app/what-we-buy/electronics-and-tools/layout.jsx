const META_TITLE =
  "Buy & Sell Electronics and Tools Easily ";
const META_DESCRIPTION =
  "Get instant value for used electronics and tools. Laptops, smartphones, power tools, and more — we buy it all with fast service and fair offers.";
const META_KEYWORDS =
  "buy electronics, sell electronics, tool buyers, smartphone buyers, sell laptops, sell power tools";
const CANONICAL_URL = " https://pawnstarsrome.com/electronics-and-tools";
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
    siteName: "Pawn Star Rome | Electronics and Tools",
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

export default function ElectronicsandToolsLayout({ children }) {
  return children;
}
