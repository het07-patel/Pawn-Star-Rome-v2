const META_TITLE =
  "Trusted Buyers of Luxury Watches ";
const META_DESCRIPTION =
  "We buy luxury watches from top brands. Get expert evaluation, fair pricing, and a secure process for selling your timepiece.";
const META_KEYWORDS =
  "watch buyer, sell watch, buy watches, luxury watch buyers, Rolex buyer, timepiece appraisal";
const CANONICAL_URL = " https://pawnstarsrome.com/watches";
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
    siteName: "Pawn Star Rome | Watches",
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

export default function WatchLayout({ children }) {
  return children;
}
