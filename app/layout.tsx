import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CTFProvider } from "@/context/CTFContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "CyberMatrix Academy // Tactical Cybersecurity",
  description: "Next-Gen Cyber Security & DFIR Practical Lab Arena by Ninad Pawar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} bg-zinc-950 font-mono text-zinc-100 antialiased`}>
        <CTFProvider>
          {children}
        </CTFProvider>
      </body>
    </html>
  );
}
