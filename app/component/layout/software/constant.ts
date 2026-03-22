export interface SoftwareItem {
  id: string;
  name: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
}

export const SOFTWARE_ITEMS: SoftwareItem[] = [
  {
    id: "autocad",
    name: "AutoCAD",
    category: "Technical Drawing",
    imageSrc: "/image/software/auto_cad.svg",
    imageAlt: "AutoCAD logo",
  },
  {
    id: "revit",
    name: "REVIT",
    category: "3D modeling",
    imageSrc: "/image/software/revit.svg",
    imageAlt: "Revit logo",
  },
  {
    id: "sketchup",
    name: "SKETCHUP",
    category: "3D modeling",
    imageSrc: "/image/software/sketchup.svg",
    imageAlt: "SketchUp logo",
  },
  {
    id: "lumion",
    name: "LUMION",
    category: "Rendering",
    imageSrc: "/image/software/lumion.svg",
    imageAlt: "Lumion logo",
  },
  {
    id: "enscape",
    name: "ENSCAPE",
    category: "Rendering",
    imageSrc: "/image/software/enscape.svg",
    imageAlt: "Enscape logo",
  },
  {
    id: "enscapepp",
    name: "ENSCAPE",
    category: "Rendering",
    imageSrc: "/image/software/enscape.svg",
    imageAlt: "Enscape logo",
  },
  {
    id: "enscapeoo",
    name: "ENSCAPE",
    category: "Rendering",
    imageSrc: "/image/software/enscape.svg",
    imageAlt: "Enscape logo",
  },
];

export const SOFTWARE_BG = "/image/software/dark_background.svg";

/** Number of cards visible on desktop per "page" */
export const DESKTOP_VISIBLE = 5;
/** Number of cards visible on mobile per "page" */
export const MOBILE_VISIBLE = 1;
