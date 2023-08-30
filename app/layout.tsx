import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Provider from "./components/Provider";
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
      <body className="bg-slate-900 select-none">
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
