const META_TITLE = "Pawn Your Items Easily in Rome | Simple & Quick Process";
const META_DESCRIPTION =
  "Experience a fast, easy pawn process in Rome. Get fair evaluations, quick loans, and cash for your valuables like gold, silver, electronics, and more.";
const META_KEYWORDS =
  "pawn shop Rome, sell gold Rome, buy silver Rome, gold buyer Rome, silver buyer Rome, pawn coins Rome, antique buyer Rome, bullion pawn Rome, pawn broken jewelry Rome, sell electronics Rome, pawn watches Rome, pawn power tools Rome, collateral loans Rome, gold and silver exchange Rome, best pawn shop Rome, trusted pawn services Rome, diamond buyer Rome, pawn bullion Rome, sell antiques Rome, cash for gold Rome, pawn jewelry Rome, gold loans Rome, sell diamonds Rome, coin buyer Rome, sell collectibles Rome, pawn fine jewelry Rome.";
const CANONICAL_URL = "https://pawnstarsrome.com/pawn-process";
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
    siteName: "Pawn Star Rome | Pawn Process",
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

export default function PawnProcessLayout({ children }) {
  return children;
}
