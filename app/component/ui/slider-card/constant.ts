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
        images: ["/image/project/interior/1.jpg"],
        alts: ["Proposed flower shop concept in Thimphu shopping mall"],
        description:
          "A proposed flower shop concept within a shopping mall in Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/interior/2.jpg"],
        alts: ["Flower shop with open displays and glass frontage"],
        description:
          "The design maximizes visibility through open displays and glass frontage, creating an inviting and vibrant retail experience.",
      },
      {
        layout: "single",
        images: ["/image/project/interior/3.jpg"],
        alts: ["Proposed Bhutanese textile shop interior in Thimphu"],
        description:
          "A proposed Bhutanese textile shop interior within a shopping mall in Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/interior/4.jpg"],
        alts: ["Bhutanese textile interior with timber displays"],
        description:
          "A warm and inviting Bhutanese textile interior, showcasing traditional fabrics through thoughtfully crafted timber displays and layered arrangements.",
      },
      {
        layout: "single",
        images: ["/image/project/interior/5.jpeg"],
        alts: ["Living space interior at Taba, Thimphu"],
        description:
          "A living space interior of a residential project at Taba, Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/interior/6.jpeg"],
        alts: ["Modular kitchen interior at Taba, Thimphu"],
        description:
          "A simple modular kitchen interior of a residential project at Taba, Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/interior/7.jpeg"],
        alts: ["Open-plan kitchen, living, and circulation interior"],
        description:
          "An open-plan interior seamlessly connecting the kitchen, living space, and circulation areas for a fluid and cohesive living experience.",
      },
      {
        layout: "single",
        images: ["/image/project/interior/8.jpg"],
        alts: ["Hot stone bath proposal overlooking Phobjikha Valley"],
        description:
          "A hot stone bath proposal overlooking the serene Phobjikha Valley, designed to create a tranquil experience framed by breathtaking natural views.",
      },
      {
        layout: "single",
        images: ["/image/project/interior/9.jpg"],
        alts: ["Hot stone bath interior at Phobjikha resort"],
        description:
          "A warm hot stone bath interior at a resort in Phobjikha, designed with rich timber finishes to create a calm environment.",
      },
      {
        layout: "single",
        images: ["/image/project/interior/10.jpg"],
        alts: ["Cozy resort interior in Phobjikha"],
        description:
          "A cozy resort interior in Phobjikha, designed with warm timber finishes and soft lighting.",
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
        images: ["/image/project/architecture/1.jpeg"],
        alts: ["Contemporary duplex residence in southern Thimphu"],
        description:
          "A contemporary duplex residence with a cut-out terrace, thoughtfully positioned on the gentle hills of southern Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/2.jpg"],
        alts: ["Real estate development with 3BHK and 4BHK apartments"],
        description:
          "A well-planned real estate development comprising four residential units, including two 3BHK and two 4BHK apartments.",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/3.jpg"],
        alts: ["Elevation design of Stilt+Ground+4+Jamthog at Taba, Thimphu"],
        description:
          "Elevation design of Stilt+Ground+4+Jamthog located at Taba, Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/4.jpg"],
        alts: ["Duplex units on a hilltop in Paro overlooking the airport"],
        description:
          "A pair of duplex units thoughtfully designed and positioned on the hilltop of Paro, offering panoramic views overlooking the international airport.",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/5.jpg"],
        alts: ["Completed duplex project in Nangzor, Monggar"],
        description:
          "A completed duplex architectural project located in Nangzor, Monggar, showcasing a harmonious blend of traditional Bhutanese design elements.",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/6.jpeg"],
        alts: ["Duplex residence in Hongtsho with integrated Mani Dungkhor"],
        description:
          "A duplex residential project located in Hongtsho, Thimphu, thoughtfully designed with a Mani Dungkhor seamlessly integrated into the building.",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/7.jpg"],
        alts: ["Five-storey residential development in Jungshina, Thimphu"],
        description:
          "A five-storey residential development in Jungshina, Thimphu, thoughtfully designed to combine efficient modern living with refined Bhutanese architectural character.",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/8.jpeg"],
        alts: ["Completed NMT bridge at Om Chhu, Phuentsholing"],
        description:
          "A completed NMT bridge project located at the end of Om Chhu in Phuentsholing, constructed by Kalika–Rigsar JV, with design modifications and lighting design undertaken by our team.",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/9.jpg"],
        alts: ["Residential project with three-unit apartment and duplex"],
        description:
          "A residential project combining a three-unit apartment on one side with a duplex unit on the other, creating a balanced blend of multi-family and private living.",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/10.jpg"],
        alts: ["Four-unit residential building in Zhemgang"],
        description:
          "A four-unit residential building located in Zhemgang, designed to offer comfortable multi-family living with a balanced blend of modern functionality.",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/11.jpeg"],
        alts: ["Conceptual pedestrian bridge proposal for the riverfront"],
        description:
          "A conceptual proposal for a pedestrian bridge enhancing the riverfront experience.",
      },
      {
        layout: "single",
        images: ["/image/project/architecture/12.jpeg"],
        alts: ["Conceptual pedestrian bridge proposal for the riverfront"],
        description:
          "A conceptual proposal for a pedestrian bridge enhancing the riverfront experience.",
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
        images: ["/image/project/up/1.jpg"],
        alts: ["Proposed plot reconfiguration plan for Shaba LAP, Paro"],
        description:
          "Proposed Plot Reconfiguration plan for Shaba Local Area Plan, Paro.",
      },
      {
        layout: "single",
        images: ["/image/project/up/2.jpg"],
        alts: ["Proposed precinct map for Shaba LAP"],
        description: "Proposed Precinct Map for Shaba LAP.",
      },
      {
        layout: "single",
        images: ["/image/project/up/3.jpeg"],
        alts: ["Existing settlement study of Shaba cluster"],
        description: "Existing Settlement Study of Shaba Cluster.",
      },
      {
        layout: "single",
        images: ["/image/project/up/4.jpg"],
        alts: ["Road typology — proposed 18m primary road, Shaba LAP"],
        description:
          "Road Typology – Proposed 18m primary road (Shaba LAP).",
      },
      {
        layout: "single",
        images: ["/image/project/up/5.jpg"],
        alts: ["Road typology — proposed 12m secondary road, Shaba LAP"],
        description:
          "Road Typology – Proposed 12m secondary road (Shaba LAP).",
      },
      {
        layout: "single",
        images: ["/image/project/up/6.jpg"],
        alts: ["Proposed plot reconfiguration plan for Lamgong LAP, Paro"],
        description:
          "Proposed Plot Reconfiguration plan for Lamgong Local Area Plan, Paro.",
      },
      {
        layout: "single",
        images: ["/image/project/up/7.jpg"],
        alts: ["Proposed precinct map for Lamgong LAP"],
        description: "Proposed Precinct Map for Lamgong LAP.",
      },
      {
        layout: "single",
        images: ["/image/project/up/8.jpeg"],
        alts: ["Existing settlement study of Lamgong cluster"],
        description: "Existing Settlement Study of Lamgong Cluster.",
      },
      {
        layout: "single",
        images: ["/image/project/up/9.jpg"],
        alts: ["Road typology — proposed 18m primary road, Lamgong LAP"],
        description:
          "Road Typology – Proposed 18m primary road (Lamgong LAP).",
      },
      {
        layout: "single",
        images: ["/image/project/up/10.jpg"],
        alts: ["Proposed precinct map of Khareyphu LAP, Phuentsholing Thromde"],
        description:
          "Proposed Precinct map of Khareyphu LAP, Phuentsholing Thromde.",
      },
      {
        layout: "single",
        images: ["/image/project/up/11.jpg"],
        alts: ["Proposed road classification of Khareyphu LAP"],
        description: "Proposed Road Classification of Khareyphu LAP.",
      },
      {
        layout: "single",
        images: ["/image/project/up/12.jpg"],
        alts: ["Road typology — proposed 10m primary road, Khareyphu LAP"],
        description:
          "Road Typology – Proposed 10m primary road (Kahreyphu LAP).",
      },
      {
        layout: "single",
        images: ["/image/project/up/13.jpg"],
        alts: ["Road typology — proposed 8m primary road, Khareyphu LAP"],
        description:
          "Road Typology – Proposed 8m primary road (Kahreyphu LAP).",
      },
      {
        layout: "single",
        images: ["/image/project/up/14.jpg"],
        alts: ["Urban design proposal, Khareyphu LAP"],
        description: "Urban Design Proposal (Khareyphu LAP).",
      },
      {
        layout: "single",
        images: ["/image/project/up/15.jpeg"],
        alts: ["Urban design proposal, Khareyphu LAP"],
        description: "Urban Design Proposal (Khareyphu LAP).",
      },
      {
        layout: "single",
        images: ["/image/project/up/16.jpeg"],
        alts: ["Base map for Sha Drugyeldhingkha LAP, Paro"],
        description:
          "Base Map for Sha Drugyeldhingkha LAP, Paro (Status – ongoing).",
      },
      {
        layout: "single",
        images: ["/image/project/up/17.jpeg"],
        alts: ["Existing plot size classification, Sha Drugyeldhingkha LAP"],
        description:
          "Existing Plot size classification (Sha Drugyeldhingkha LAP).",
      },
      {
        layout: "single",
        images: ["/image/project/up/18.jpeg"],
        alts: ["Existing land use pattern, Sha Drugyeldhingkha LAP"],
        description:
          "Existing Land use pattern (Sha Drugyeldhingkha LAP).",
      },
      {
        layout: "single",
        images: ["/image/project/up/19.jpeg"],
        alts: ["Proposed conceptual Norzin Lam urban design"],
        description: "Proposed conceptual Norzin Lam Urban Design.",
      },
      {
        layout: "single",
        images: ["/image/project/up/20.jpeg"],
        alts: ["Proposed conceptual Norzin Lam urban design"],
        description: "Proposed conceptual Norzin Lam Urban Design.",
      },
      {
        layout: "single",
        images: ["/image/project/up/21.jpeg"],
        alts: ["Proposed conceptual Norzin Lam urban design"],
        description: "Proposed conceptual Norzin Lam Urban Design.",
      },
      {
        layout: "single",
        images: ["/image/project/up/22.jpeg"],
        alts: ["Proposed conceptual Norzin Lam alley urban design"],
        description: "Proposed conceptual Norzin Lam alley Urban Design.",
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
        images: ["/image/project/construction/1.jpg"],
        alts: ["3D visualization of G+1+Jamthog residential project at Namselling, Thimphu"],
        description:
          "3D Visualization of G+1+Jamthog Residential project at Namselling, Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/construction/2.jpeg"],
        alts: ["Completed G+1+Jamthog residential project at Namselling"],
        description:
          "Completed construction of G+1+Jamthog Residential Project at Namselling.",
      },
      {
        layout: "single",
        images: ["/image/project/construction/3.jpeg"],
        alts: ["Modular kitchen of G+1+Jamthog residential project at Namselling"],
        description:
          "Modular Kitchen Of G+1+Jamthog Resediential Project at Namselling.",
      },
      {
        layout: "single",
        images: ["/image/project/construction/4.jpeg"],
        alts: ["3D visualization of Stilt+G+5+Jamthog at Taba, Thimphu"],
        description:
          "3D Visualization of Stilt+ G+5+Jamthog at Taba, Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/construction/5.jpeg"],
        alts: ["On-going construction of Stilt+G+5+Jamthog at Taba, Thimphu"],
        description:
          "On-going construction of Stilt+ G+5+Jamthog at Taba, Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/construction/6.jpeg"],
        alts: ["3D visualization of 1/2B+B+G+4+Jamthog above NPPF Colony, Thimphu"],
        description:
          "3D Visualization of 1/2B+B+G+4+Jamthog above NPPF Colony Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/construction/7.jpeg"],
        alts: ["On-going construction of 1/2B+B+G+4+Jamthog above NPPF Colony, Thimphu"],
        description:
          "On-going construction of 1/2B+B+G+4+Jamthog above NPPF Colony Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/construction/8.jpeg"],
        alts: ["3D visualization of S+G+4+Jamthog at Taba, Thimphu"],
        description:
          "3D Visualization of S+G+4+Jamthog at Taba, Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/construction/9.jpeg"],
        alts: ["On-going construction of S+G+4+Jamthog at Taba, Thimphu"],
        description:
          "On-going construction of S+G+4+Jamthog at Taba, Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/construction/10.jpeg"],
        alts: ["3D visualization of 1/2S+G+4+Jamthog at Changbangdu, Thimphu"],
        description:
          "3D Visualization of 1/2S+G+4+Jamthog at Changbangdu, Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/construction/11.jpeg"],
        alts: ["On-going construction of 1/2S+G+4+Jamthog at Taba, Thimphu"],
        description:
          "On-going construction of 1/2S+G+4+Jamthog at Taba, Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/construction/12.jpeg"],
        alts: ["3D visualization of S+G+4+Jamthog at Taba, Thimphu"],
        description:
          "3D Visualization of S+G+4+Jamthog at Taba, Thimphu.",
      },
      {
        layout: "single",
        images: ["/image/project/construction/13.jpeg"],
        alts: ["On-going construction of S+G+4+Jamthog at Taba, Thimphu"],
        description:
          "On-going construction of S+G+4+Jamthog at Taba, Thimphu.",
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
        images: ["/image/project/heritage/1.jpg"],
        alts: [
          "3D concept of two-storied residence at Kharchu Jampachoekhorling Nunnery, Nangzor, Monggar",
        ],
        description:
          "3D concept proposal of a 2 storied residence at Kharchu Jampachoekhorling Nunnery at Nangzor, Monggar.",
      },
      {
        layout: "single",
        images: ["/image/project/heritage/2.jpeg"],
        alts: [
          "Master plan proposal of Kharchu Jampachoekhorling Nunnery, Nangzor, Monggar",
        ],
        description:
          "Master Plan proposal of Kharchu Jampachoekhorling Nunnery at Nangzor, Monggar.",
      },
      {
        layout: "single",
        images: ["/image/project/heritage/3.jpeg"],
        alts: [
          "3D master plan visualization of Chodeypung Monastery at Chumey, Bumthang",
        ],
        description:
          "3D master plan visualization of Chodeypung Monastery at Chumey, Bumthang.",
      },
      {
        layout: "single",
        images: ["/image/project/heritage/4.jpg"],
        alts: [
          "Proposed office and karmey house of Lapsum Sang-ngag Rabten Ling Chhoetshog at Nangkor, Pemagathsel",
        ],
        description:
          "3D visualization of a proposed office and karmey house of Lapsum Sang-ngag Rabten Ling Chhoetshog at Nangkor, Pemagathsel.",
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
