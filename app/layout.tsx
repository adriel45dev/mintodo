import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minimalist TO-DO",
  description: "Streamline your productivity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 select-none md:bg-blue-300">
        {/* NAVBAR */}

        <Navbar />

        {children}
        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
