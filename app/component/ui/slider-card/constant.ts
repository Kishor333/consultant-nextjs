export type CardLayout = "single" | "grid-2x2" | "stack-2";

export interface SlideCard {
  layout: CardLayout;
  /** Image paths relative to /public */
  images: string[];
  alts: string[];
}

export interface SliderCategory {
  id: string;
  /** Icon path relative to /public (e.g. /image/icons/interior-icon.svg) */
  iconSrc: string;
  title: string;
  learnMoreHref: string;
  slides: SlideCard[];
}

export const SLIDER_CATEGORIES: SliderCategory[] = [
  {
    id: "interior",
    iconSrc: "next.svg",
    title: "Interior",
    learnMoreHref: "/interior",
    slides: [
      {
        layout: "single",
        images: ["/image/interior/interor.png"],
        alts: ["Modern bedroom interior design"],
      },
      {
        layout: "single",
        images: ["/image/interior/interor.png"],
        alts: ["Modern bedroom interior design"],
      },
      {
        layout: "single",
        images: ["/image/interior/interor.png"],
        alts: ["Modern bedroom interior design"],
      },
      {
        layout: "single",
        images: ["/image/interior/interor.png"],
        alts: ["Modern bedroom interior design"],
      },
      {
        layout: "single",
        images: ["/image/interior/interor.png"],
        alts: ["Modern bedroom interior design"],
      },
      {
        layout: "single",
        images: ["/image/interior/interor.png"],
        alts: ["Modern bedroom interior design"],
      },
      {
        layout: "single",
        images: ["/image/interior/interor.png"],
        alts: ["Modern bedroom interior design"],
      },
      {
        layout: "single",
        images: ["/image/interior/interor.png"],
        alts: ["Modern bedroom interior design"],
      },
      //   {
      //     layout: "stack-2",
      //     images: ["/image/interior/interor.png", "/image/interior/interor.png"],
      //     alts: ["Bedroom overview", "Kitchen design"],
      //   },
      //   {
      //     layout: "single",
      //     images: ["/image/slider/interior/img-3.jpg"],
      //     alts: ["Mountain view through window"],
      //   },
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
