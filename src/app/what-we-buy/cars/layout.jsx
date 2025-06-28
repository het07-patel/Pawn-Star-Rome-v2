const META_TITLE =
  "Sell or Trade Your Used Car Today";
const META_DESCRIPTION =
  "We buy used cars of all makes and models. Fast, fair appraisals with a smooth, no-pressure experience tailored to your needs.";
const META_KEYWORDS =
  "used car buyers, sell car, buy here pay here, used car sale, car appraisal, car pawn";
const CANONICAL_URL = " https://pawnstarsrome.com/cars";
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
    siteName: "Pawn Star Rome | Cars",
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

export default function CarLayout({ children }) {
  return children;
}
