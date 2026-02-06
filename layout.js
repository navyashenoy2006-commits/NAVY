import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "You're the best!",
  description: "A cute little website filled with compliments, surprises, and a heartfelt message made just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} bg-rose-50 antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
