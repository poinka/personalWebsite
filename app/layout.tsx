import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polina's personal website",
  description: "This is my personal website. Here you can find some information about me, labs that I study, and the Comic",
  authors: [{name: "Polina Korobeinikova"}] 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
