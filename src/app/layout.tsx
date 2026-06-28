import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Photo",
  description: "摄影作品",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-[#1a1a1a] text-[#e8e8e8]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
