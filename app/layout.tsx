import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import NextTopLoader from 'nextjs-toploader';

import style from "@/app/ilitterless.module.css";

import { Providers } from "./providers";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iLitterless Indonesia - #PilahSampahItuMudah",
  description:
    "iLitterless Indonesia, sebuah Organisasi Non-Pemerintah (NGO) yang beroperasi di bawah naungan Yayasan Insan Lestari Indonesia (YILI), didirikan pada tahun 2021 dengan basis di Kota Malang, Jawa Timur, Indonesia. Nama 'iLitterless' diambil dari bahasa Inggris, terdiri dari kata 'i' (saya) dan 'Litter less' (minim sampah), yang secara harfiah diterjemahkan sebagai 'Saya Minim Sampah' dalam bahasa Indonesia.",
  other: {
    "theme-color": "#ffffff",
    "color-scheme": "light-only",
    "twitter:title": "iLitterless Indonesia - #PilahSampahItuMudah",
    "twitter:description":
      "iLitterless Indonesia, sebuah Organisasi Non-Pemerintah (NGO) yang beroperasi di bawah naungan Yayasan Insan Lestari Indonesia (YILI), didirikan pada tahun 2021 dengan basis di Kota Malang, Jawa Timur, Indonesia. Nama 'iLitterless' diambil dari bahasa Inggris, terdiri dari kata 'i' (saya) dan 'Litter less' (minim sampah), yang secara harfiah diterjemahkan sebagai 'Saya Minim Sampah' dalam bahasa Indonesia.",
    "twitter:image": "https://staging-ilitterless.vercel.app/open-graph.png",
    "twitter:card": "summary_large_image",
    "og:title": "iLitterless Indonesia - #PilahSampahItuMudah",
    "og:description":
      "iLitterless Indonesia, sebuah Organisasi Non-Pemerintah (NGO) yang beroperasi di bawah naungan Yayasan Insan Lestari Indonesia (YILI), didirikan pada tahun 2021 dengan basis di Kota Malang, Jawa Timur, Indonesia. Nama 'iLitterless' diambil dari bahasa Inggris, terdiri dari kata 'i' (saya) dan 'Litter less' (minim sampah), yang secara harfiah diterjemahkan sebagai 'Saya Minim Sampah' dalam bahasa Indonesia.",
    "og:url": "staging-ilitterless.vercel.app",
    "og:image": "https://staging-ilitterless.vercel.app/open-graph.png",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${style.body} ${montserrat.variable}`}>
        <Providers>
        <NextTopLoader
  color="#007375"
  initialPosition={0.08}
  crawlSpeed={200}
  height={3}
  crawl={true}
  easing="ease"
  speed={200}
  shadow="0 0 10px #007375,0 0 5px #007375"
  template='<div class="bar" role="bar">
  <div class="peg">
  </div>
  </div> '
  zIndex={1600}
  showAtBottom={false}
/>
        <div className="fixed bottom-20 -left-3 -rotate-90 z-[9999]">
        <div className="font-semibold flex gap-1 items-center text-sm opacity-35">sparkle.re 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
          </svg>
          </div> 
        </div>
        {children}
        </Providers>
      </body>
    </html>
  );
}
