import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Blogs by Murtaza",
  description: "Discover trending dev articles, coding tips, and tech blogs powered by the Dev.to API. Stay updated with the latest in web development and programming.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
  <Script src="https://analytics.ahrefs.com/analytics.js" data-key="vjK2pDaxIWl1JKx+tgd83A" async strategy="afterInteractive" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
