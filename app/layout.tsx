import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Provider from "./components/Provider";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minimalist TO-DO",
  description: "Streamline your productivity",
  icons: {
    icon: "/public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />

        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="bg-slate-900 select-none">
        <Provider>
          {/* <Navbar /> */}
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
