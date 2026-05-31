import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Raleway } from "next/font/google";



export const metadata: Metadata = {
  title: 'VERMA TUTORIAL - Expert Coaching for Academic Success',
  description: 'Unlock your potential with VERMA TUTORIAL. We provide expert coaching for JEE, NEET, CBSE, ICSE, and Foundation courses. Achieve academic excellence with our experienced faculty and proven methodologies.',
  keywords: ["VERMA TUTORIAL, coaching center, JEE coaching, NEET coaching, CBSE coaching, ICSE coaching, foundation courses, academic success, competitive exams, best coaching"],
  openGraph: {
    "title": "VERMA TUTORIAL - Expert Coaching for Academic Success",
    "description": "Unlock your potential with VERMA TUTORIAL. We provide expert coaching for JEE, NEET, CBSE, ICSE, and Foundation courses.",
    "url": "https://vermatutorial.com",
    "siteName": "VERMA TUTORIAL",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/school-scene-with-queer-teens_23-2150379415.jpg",
        "alt": "Students studying at VERMA TUTORIAL"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "VERMA TUTORIAL - Expert Coaching for Academic Success",
    "description": "Unlock your potential with VERMA TUTORIAL. We provide expert coaching for JEE, NEET, CBSE, ICSE, and Foundation courses.",
    "images": [
      "http://img.b2bpic.net/free-photo/school-scene-with-queer-teens_23-2150379415.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${raleway.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
