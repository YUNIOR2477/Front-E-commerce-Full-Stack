import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BannerProducts from "@/components/banner-products";
import { Toaster } from "@/components/ui/toaster";
import NextTopLoader from "nextjs-toploader";
import ThemeProvider from "@/components/theme-provider";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Welcome to my e-comerce from YUNIOR2477",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased p-2`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
            zIndex={1600}
            showAtBottom={false}
          />
          <Navbar />
          {children}
          <Toaster />
          <BannerProducts />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
