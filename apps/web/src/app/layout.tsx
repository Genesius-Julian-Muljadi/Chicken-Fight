import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Footer, Layout } from "@/components";
import { ThemeProviders } from "./theme-providers";
import homeData from "@/data/home/homeData";
import CookieManager from "@/cookies/cookieManager";
import HeaderServer from "@/components/imported/HeaderServer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: homeData.homeTitle || "homeTitle",
  description: homeData.homeMetaDescription || "homeMetaDescription",
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
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <ThemeProviders>
          <Layout>
            <CookieManager />
            <HeaderServer />
            <div className="-mt-20">{children}</div>
            <Footer />
          </Layout>
        </ThemeProviders>
      </body>
    </html>
  );
}
