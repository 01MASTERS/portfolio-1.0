import type { Metadata } from "next";

import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Rittik Sharma",
  description:
    "View and download Rittik Sharma's professional resume. Student developer with expertise in React, Next.js, and full-stack development.",
  keywords: ["Rittik Sharma resume", "Rittik Sharma CV", "Full Stack Developer resume", "Student Developer resume India"],
  openGraph: {
    title: "Resume - Rittik Sharma",
    description:
      "View and download Rittik Sharma's professional resume featuring his experience and skills as a student developer.",
    url: "https://rittiksharma.vercel.app/resume",
    siteName: "Rittik Sharma",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Rittik Sharma Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Rittik Sharma",
    description:
      "View Rittik Sharma's professional resume and experience as a student developer.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      <link
        rel="preload"
        href="/docs/Resume_rittik.pdf"
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
