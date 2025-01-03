import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/theme/theme-provider";
import HeaderNavigation from "@/components/navigation/header/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "React-reuse",
  description:
    "React-reuse is a reuseable library of hooks, utilities, components and animations.",
  icons: {
    icon: "./icon.svg",
  },
};

interface rootLayoutProps {
  children: React.ReactNode;
}

/**
 * RootLayout component serves as the main layout for pages.
 *
 * Props:
 * - children (React.ReactNode): Layout children (readonly).
 *
 * @param {rootLayoutProps} props - Layout props.
 * @returns {JSX.Element} - The structured layout of the page.
 */
export default async function RootLayout({
  children,
}: Readonly<rootLayoutProps>): Promise<JSX.Element> {
  const messages = await getMessages();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <HeaderNavigation />
            {children}
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
