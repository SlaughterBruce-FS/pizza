import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from 'next/script'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yalas Pizza",
  description: "pizza landing page ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <Script id="gtag-script" async src="https://www.googletagmanager.com/gtag/js?id=G-76MKSYQ0EC"></Script>
        <Script id="gtag-inline-script">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-76MKSYQ0EC');
          `}
        </Script>

      </head>

      <body className='overflow-x-hidden'>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
