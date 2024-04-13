import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Transition from "./components/Transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KeamInwza007",
  description: "Meow Meow meow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
