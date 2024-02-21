import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

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
    "twitter:image": "https://ilitterlessindonesia.org/open-graph.png",
    "twitter:card": "summary_large_image",
    "og:title": "iLitterless Indonesia - #PilahSampahItuMudah",
    "og:description":
      "iLitterless Indonesia, sebuah Organisasi Non-Pemerintah (NGO) yang beroperasi di bawah naungan Yayasan Insan Lestari Indonesia (YILI), didirikan pada tahun 2021 dengan basis di Kota Malang, Jawa Timur, Indonesia. Nama 'iLitterless' diambil dari bahasa Inggris, terdiri dari kata 'i' (saya) dan 'Litter less' (minim sampah), yang secara harfiah diterjemahkan sebagai 'Saya Minim Sampah' dalam bahasa Indonesia.",
    "og:url": "ilitterlessindonesia.org",
    "og:image": "https://ilitterlessindonesia.org/open-graph.png",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
