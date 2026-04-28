import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: "https://www.consult2t.studio/sitemap.xml",
    host: "https://www.consult2t.studio",
  };
}
