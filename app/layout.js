import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import "./globals.css";
import zalando from "../lib/fonts-imp/font";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bitlinks",
  description: "Bitlinks - Your Trustworthy URL Shortner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={zalando.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-teal-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
