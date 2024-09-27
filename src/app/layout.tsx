import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { ACTIVE_CATEGORIES } from "@/app/blog/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Blog",
    "Frontend",
    "Javascript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
  authors: [
    {
      name: "Anis Benamara",
      url: "https://github.com/anis-benamara",
    },
  ],
  creator: "Anis Ben Amara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og`],
    creator: "@AnisAmara",
  },
  icons: {
    shortcut: "/favicon.ico",
    icon: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-between`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer activeCategories={ACTIVE_CATEGORIES} />
        </ThemeProvider>
      </body>
    </html>
  );
}
