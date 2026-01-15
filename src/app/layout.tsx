import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SecondBrain - Automate the Small Tasks",
  description:
    "Your Second Brain, just a thought away. Automate tasks with your voice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable}`}
        style={{ background: "#FDFEFF" }}
      >
        {children}
      </body>
    </html>
  );
}
