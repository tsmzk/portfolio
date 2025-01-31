import "../styles/globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { ReactNode } from "react";

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
