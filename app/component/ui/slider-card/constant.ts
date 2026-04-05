export type CardLayout = "single" | "grid-2x2" | "stack-2";

export interface SlideCard {
  layout: CardLayout;
  /** Image paths relative to /public */
  images: string[];
  alts: string[];
  description?: string;
}

export interface SliderCategory {
  id: string;
  /** Icon path relative to /public (e.g. /image/icons/interior-icon.svg) */
  iconSrc: string;
  title: string;
  learnMoreHref: string;
  slides: SlideCard[];
}

export const PROJECT_SLIDER_CATEGORIES: SliderCategory[] = [
  {
    id: "interior",
    iconSrc: "/image/project/construction.svg",
    title: "Interior",
    learnMoreHref: "/interior",
    slides: [
      {
        layout: "single",
        images: ["/image/project/interior/interior-1.png"],
        alts: ["Modern bedroom interior design"],
        description:
          "At Consult2T, we proactively shape sustainable and inclusive urban environments throughout Bhutan, with an unwavering commitment to respecting cultural heritage, upholding vital environmental values, and enhancing the collective well-being of its people.",
      },
      {
        layout: "single",
        images: ["/image/project/interior/interior-2.png"],
        alts: ["Modern kitchen interior design"],
        description: "Modern kitchen interior design",
      },
      {
        layout: "single",
        images: ["/image/project/interior/interior-3.png"],
        alts: ["Modern bedroom interior design"],
        description: "yoga/meditation",
      },
      {
        layout: "single",
        images: ["/image/project/interior/interior-4.png"],
        alts: ["Blue print"],
        description: "Interior design blue print",
      },
      {
        layout: "single",
        images: ["/image/project/interior/interior-5.png"],
        alts: ["Sitting room"],
        description: "Modern sitting room interior design",
      },
      {
        layout: "single",
        images: ["/image/project/interior/interior-6.png"],
        alts: ["Study room"],
        description: "Modern study room interior design",
      },
    ],
  },
  {
    id: "urban_planning",
    iconSrc: "/image/project/construction.svg",
    title: "Urban Planning",
    learnMoreHref: "/up",
    slides: [
      {
        layout: "single",
        images: ["/image/project/up/up-1.png"],
        alts: ["Planning design"],
        description: "Urban planning design",
      },
      {
        layout: "single",
        images: ["/image/project/up/up-2.png"],
        alts: ["Plan executed"],
        description: "Urban planning in action",
      },
      {
        layout: "single",
        images: ["/image/project/up/up-3.png"],
        alts: ["Planning design"],
        description: "Urban planning design",
      },
      {
        layout: "single",
        images: ["/image/project/up/up-4.png"],
        alts: ["Planning road side"],
        description: "Urban planning in action",
      },
      {
        layout: "single",
        images: ["/image/project/up/up-5.png"],
        alts: ["design sketch"],
        description: "Urban planning design and sketch",
      },
      {
        layout: "single",
        images: ["/image/project/up/up-6.png"],
        alts: ["Planning map"],
        description: "Urban planning map and modal",
      },
    ],
  },
  {
    id: "architecture",
    iconSrc: "/image/project/construction.svg",
    title: "Architecture",
    learnMoreHref: "/architecture",
    slides: [
      {
        layout: "single",
        images: ["/image/project/architecture/architecture-1.png"],
        alts: ["Modern office architecture"],
        description: "Modern office architecture with bhutanese touch",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/architecture-2.png"],
        alts: ["Modern office architecture"],
        description: "Modern office architecture with bhutanese touch",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/architecture-3.png"],
        alts: ["Modern building architecture"],
        description: "Modern building architecture with bhutanese touch",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/architecture-4.png"],
        alts: ["Modern office architecture modal"],
        description: "Modern office architecture with bhutanese touch modal",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/architecture-5.png"],
        alts: ["Modern office architecture"],
        description: "Modern office architecture with bhutanese touch",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/architecture-6.png"],
        alts: ["Modern bridge architecture"],
        description: "Modern bridge architecture with bhutanese touch",
      },
    ],
  },
  {
    id: "construction",
    iconSrc: "/image/project/construction.svg",
    title: "Construction",
    learnMoreHref: "/construction",
    slides: [
      {
        layout: "single",
        images: ["/image/project/construction/construction-1.png"],
        alts: ["construction site"],
        description: "Construction site",
      },
      {
        layout: "single",
        images: ["/image/project/construction/construction-2.png"],
        alts: ["building"],
        description: "modern building",
      },
      {
        layout: "single",
        images: ["/image/project/construction/construction-1.png"],
        alts: ["room layout"],
        description: "Modern layout of an house",
      },
    ],
  },
  {
    id: "heritage",
    iconSrc: "/image/project/construction.svg",
    title: "Heritage",
    learnMoreHref: "/heritage",
    slides: [
      {
        layout: "single",
        images: ["/image/project/heritage/heritage-1.png"],
        alts: ["traditional building"],
        description: "Traditional building",
      },
      {
        layout: "single",
        images: ["/image/project/heritage/heritage-2.png"],
        alts: ["dzong modal"],
        description: "Dzong modal",
      },
      {
        layout: "single",
        images: ["/image/project/heritage/heritage-3.png"],
        alts: ["Traditional temple"],
        description: "Temples",
      },
      {
        layout: "single",
        images: ["/image/project/heritage/heritage-4.png"],
        alts: ["building modal"],
        description: "modern house modal",
      },
      {
        layout: "single",
        images: ["/image/project/heritage/heritage-2.png"],
        alts: ["house"],
        description: "Modern house",
      },
      {
        layout: "single",
        images: ["/image/project/heritage/heritage-2.png"],
        alts: ["Bridge"],
        description: "bridge",
      },
    ],
  },
  //   {
  //     id: "urban-planning",
  //     iconSrc: "/image/icons/urban-icon.svg",
  //     title: "Urban Planning",
  //     learnMoreHref: "/urban-planning",
  //     slides: [
  //       {
  //         layout: "grid-2x2",
  //         images: [
  //           "/image/slider/urban/img-1a.jpg",
  //           "/image/slider/urban/img-1b.jpg",
  //           "/image/slider/urban/img-1c.jpg",
  //           "/image/slider/urban/img-1d.jpg",
  //         ],
  //         alts: [
  //           "Site plan top-left",
  //           "Site plan top-right",
  //           "Elevation view bottom-left",
  //           "Elevation view bottom-right",
  //         ],
  //       },
  //       {
  //         layout: "stack-2",
  //         images: [
  //           "/image/slider/urban/img-2a.jpg",
  //           "/image/slider/urban/img-2b.jpg",
  //         ],
  //         alts: ["Riverside pathway", "Rural landscape"],
  //       },
  //       {
  //         layout: "grid-2x2",
  //         images: [
  //           "/image/slider/urban/img-3a.jpg",
  //           "/image/slider/urban/img-3b.jpg",
  //           "/image/slider/urban/img-3c.jpg",
  //           "/image/slider/urban/img-3d.jpg",
  //         ],
  //         alts: [
  //           "Site plan top-left",
  //           "Site plan top-right",
  //           "Elevation view bottom-left",
  //           "Elevation view bottom-right",
  //         ],
  //       },
  //     ],
  //   },
];
