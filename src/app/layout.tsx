import type { Metadata, Viewport } from "next";
import { Ubuntu, Nunito, Open_Sans, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/content";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
});

const nunito = Nunito({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#4F67FF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://theeducatee.com"),
  title: {
    default: "The Educatee Centre | Spoken English, IELTS & IT Training in Feni",
    template: "%s | The Educatee Centre",
  },
  description:
    "Feni's premier English language & IT institute. Master Spoken English (separate Girls batch & evening Professional batch), IELTS preparation with free mock tests (max 16 students), and practical computer training.",
  keywords: [
    "The Educatee Centre",
    "Educatee Feni",
    "Spoken English Feni",
    "IELTS Feni",
    "Computer Training Feni",
    "Zahir Uddin Babar",
    "English language institute Feni",
    "Girls spoken english batch Feni",
  ],
  authors: [{ name: "Engr. Zahir Uddin Babar" }],
  creator: "The Educatee Centre",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theeducatee.com",
    title: "The Educatee Centre | Spoken English, IELTS & IT Training in Feni",
    description:
      "Overcome Your Fear of English. Build Your Global Future with friendly mentorship, small batches, and practical learning.",
    siteName: "The Educatee Centre",
    images: [
      {
        url: "/images/hero/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Students learning at The Educatee Centre, Feni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Educatee Centre | Spoken English, IELTS & IT Training in Feni",
    description:
      "Overcome Your Fear of English. Build Your Global Future with friendly mentorship, small batches, and practical learning.",
    images: ["/images/hero/hero.jpg"],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ubuntu.variable} ${nunito.variable} ${openSans.variable} ${hindSiliguri.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#54595F] selection:bg-[#4F67FF] selection:text-white">
        {/* Top Announcement Bar */}
        <AnnouncementBar />

        {/* Global Site Header */}
        <Header />

        {/* Main Page Content */}
        <main className="flex-1">{children}</main>

        {/* Global Site Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Connect Button */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
