import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Consult2T — Urban Planning & Architecture in Bhutan",
    short_name: "Consult2T",
    description:
      "Thimphu-based urban planning and architecture firm shaping sustainable, culturally rooted environments across Bhutan.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#cda942",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
