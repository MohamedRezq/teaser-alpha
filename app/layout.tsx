import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { APP_DESCRIPTION, APP_TITLE } from "@/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fontFamily = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontFamily.className} relative bg-mineshaft pb-20`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
