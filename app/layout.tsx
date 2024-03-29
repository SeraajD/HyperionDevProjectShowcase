import "./globals.css"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: "HD Showcase",
  description: "HyperionDev Project Showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Navbar />
        <main className={montserrat.className}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
