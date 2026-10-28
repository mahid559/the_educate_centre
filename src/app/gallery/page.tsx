import type { Metadata } from "next";
import GalleryClientView from "./GalleryClientView";

export const metadata: Metadata = {
  title: "Photo Gallery & Moments | The Educatee Centre, Feni",
  description:
    "Explore photo archives of graduation ceremonies, CEO Award presentations, interactive speaking workshops, computer labs, and vibrant student moments at The Educatee Centre in Feni.",
  keywords: [
    "The Educatee Centre Gallery",
    "Feni Spoken English photos",
    "CEO Award Educatee Feni",
    "Appayan Afroz Tower coaching gallery",
    "IELTS batch celebrations Feni",
    "computer training classroom Feni",
  ],
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Photo Gallery & Moments | The Educatee Centre, Feni",
    description:
      "Explore photo archives of graduation ceremonies, CEO Award presentations, interactive speaking workshops, and vibrant student moments in Feni.",
    url: "https://theeducatee.com/gallery",
    siteName: "The Educatee Centre",
    images: [
      {
        url: "/images/events/graduation-1.jpg",
        width: 1200,
        height: 630,
        alt: "The Educatee Centre Student Moments & Celebrations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function GalleryPage() {
  return <GalleryClientView />;
}
