import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noted, an innovative 📓-taking app",
  description: "Noted is a note-taking app that is innovative and easy to use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
