import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "Sediment",

  description:
    "The bank account that manages your money for you, with checking account budgets, purpose-driven savings, and AI-powered insights.",

  twitter: {
    card: "summary_large_image",
    title: "Sediment",
    description: "The bank account that manages your money for you",
    creator: "@kylerummens",
  },

  metadataBase: new URL("https://sediment.money"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-blue-50 via-white to-peach-100" />
        <Navbar />
        <main className="min-h-screen w-full">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}

export const viewport = {
  themeColor: "#FFF",
};
