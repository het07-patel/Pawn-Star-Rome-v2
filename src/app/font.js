import { Source_Sans_3, Gelasio } from "next/font/google";

export const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const gelasio = Gelasio({
  subsets: ["latin"], // Include subsets as required
  weight: ["400", "700"], // Specify the weights you need
  variable: "--font-gelasio", // Use a custom CSS variable
});
