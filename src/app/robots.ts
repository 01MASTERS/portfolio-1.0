import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/private", "/docs/"],
      },
    ],
    sitemap: "https://rittiksharma.vercel.app/sitemap.xml",
  };
}
