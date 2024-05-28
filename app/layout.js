import Logo from "./_components/Logo";

import "../app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Navigation from "./_components/Navigation";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s — The Wild Oasis",
    default: "Welcome — The Wild Oasis",
  },
  description:
    "Luxirious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautfiull mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={josefin}
        className={`bg-primary-950 text-primary-100 antialiased min-h-screen flex flex-col relative ${josefin.className}`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
