import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "graphos • mystik | Graphology Analysis & Handwriting Insights",
  description:
    "Unlock the secrets of personality and potential through the science of handwriting. Blending ancient principles with modern cognitive analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-[#111113] text-[#e8e4dc] font-sans antialiased selection:bg-[#8b1e2d] selection:text-white">
        {children}
      </body>
    </html>
  );
}
