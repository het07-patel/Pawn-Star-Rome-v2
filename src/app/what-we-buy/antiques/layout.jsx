const META_TITLE =
  "We Buy Antiques of All Kinds";
const META_DESCRIPTION =
  "Sell your antiques to trusted experts. From heirlooms to rare collectibles, we offer honest evaluations and immediate payment.";
const META_KEYWORDS =
  "sell antiques, estate buyers, antique buyers, buy antiques, vintage collectibles, rare antiques";
const CANONICAL_URL = " https://pawnstarsrome.com/what-we-buy/antiques";
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
    siteName: "Pawn Star Rome | Antiques",
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

export default function AntiquesLayout({ children }) {
  return children;
}
