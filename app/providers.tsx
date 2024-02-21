// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <SpeedInsights />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
