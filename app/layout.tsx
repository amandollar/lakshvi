import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakshvi | Soft Everyday Ethnicwear",
  description:
    "A minimal fashion e-commerce homepage for Lakshvi, a Gen Z clothing label.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
