import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Staatliches } from "next/font/google";
import BackgroundAnimation from "./BackgroundAnimation";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Justin Kahrs",
  description: "Senior Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <BackgroundAnimation />
        <main className="content">{children}</main>
      </body>
    </html>
  );
}
