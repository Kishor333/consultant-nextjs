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
    id: "vray",
    name: "V RAY",
    category: "Rendering",
    imageSrc: "/image/software/vray.svg",
    imageAlt: "V-Ray logo",
  },
  {
    id: "d5",
    name: "D5",
    category: "Rendering",
    imageSrc: "/image/software/d5.svg",
    imageAlt: "D5 Render logo",
  },
  {
    id: "photoshop",
    name: "PHOTOSHOP",
    category: "Post Production",
    imageSrc: "/image/software/photo-shop.svg",
    imageAlt: "Photoshop logo",
  },
  {
    id: "premierepro",
    name: "PREMIEREPRO",
    category: "Videography",
    imageSrc: "/image/software/primere.svg",
    imageAlt: "Premiere Pro logo",
  },
  {
    id: "illustrator",
    name: "ILLUSTRATOR",
    category: "Diagraming",
    imageSrc: "/image/software/illustrator.svg",
    imageAlt: "Illustrator logo",
  },
  {
    id: "indesign",
    name: "INDESIGN",
    category: "Layout and Publishing",
    imageSrc: "/image/software/indesign.svg",
    imageAlt: "InDesign logo",
  },
  {
    id: "arcgis",
    name: "ArcGIS",
    category: "Technical Drawing",
    imageSrc: "/image/software/arc-gis.svg",
    imageAlt: "ArcGIS logo",
  },
  {
    id: "epanet",
    name: "EPANET",
    category: "Technical Drawing",
    imageSrc: "/image/software/panet.svg",
    imageAlt: "EPANET logo",
  },
  {
    id: "ms-office-suite",
    name: "MS OFFICE SUITE",
    category: "Documentation",
    imageSrc: "/image/software/office-suit.svg",
    imageAlt: "MS Office Suite logo",
  },
  {
    id: "statpro",
    name: "STATPRO",
    category: "Statistical analysis",
    imageSrc: "/image/software/statpro.svg",
    imageAlt: "StatPro logo",
  },
  {
    id: "sewercad",
    name: "SewerCAD",
    category: "Drainage Planning",
    imageSrc: "/image/software/sewer-cad.svg",
    imageAlt: "SewerCAD logo",
  },
];

export const SOFTWARE_BG = "/image/software/dark_background.svg";

/** Number of cards visible on desktop per "page" */
export const DESKTOP_VISIBLE = 5;
/** Number of cards visible on mobile per "page" */
export const MOBILE_VISIBLE = 1;
