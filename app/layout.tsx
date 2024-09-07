import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styels/globals.css";
import Nav from "@/components/Nav";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import Providers from "./providers/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gookway",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          {children}
          <ToastContainer style={{ zIndex: 9999999999 }} />
          {/* <ToastContainer /> */}
        </body>
      </Providers>
    </html>
  );
}
