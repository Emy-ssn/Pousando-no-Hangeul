import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pousando no Hangeul",
  description: "guia completo para quem deseja aprender coreano do básico, especialmente desenvolvido para brasileiros.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Meta tags para compartilhar nas redes sociais */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/path/to/preview-image.jpg" />
        <meta property="og:url" content="https://www.seusite.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#e4effa]`}
      >
        <Suspense fallback={<div>Loading...</div>}>
        {children}
        </Suspense>
      </body>
    </html>
  );
}
