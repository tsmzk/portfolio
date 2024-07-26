import "../styles/globals.css";
import type { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata = {
  title: "tsmzk portfolio",
  description: "tsmzk's portfolio site",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}