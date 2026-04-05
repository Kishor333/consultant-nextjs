export interface AffiliationItem {
  id: string;
  name: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
}

export const AFFILIATIONS: AffiliationItem[] = [
  {
    id: "bhutan-hydromaster",
    name: "Bhutan Hydromaster",
    description: "affiliation.hydromaster",
    logoSrc: "/image/affiliation/hydro-master.svg",
    logoAlt: "Bhutan Hydromaster logo",
    logoWidth: 240,
    logoHeight: 80,
  },
  {
    id: "radical-infraventures",
    name: "Radical Infraventures",
    description: "affiliation.radical",
    logoSrc: "/image/affiliation/radical.svg",
    logoAlt: "Radical Infraventures logo",
    logoWidth: 240,
    logoHeight: 80,
  },
  {
    id: "yangchenma",
    name: "Yangchenma",
    description: "affiliation.yangchenma",
    logoSrc: "/image/affiliation/yangchenma.svg",
    logoAlt: "yangchenma logo",
    logoWidth: 240,
    logoHeight: 80,
  },
  {
    id: "Jun02",
    name: "Jun02 Design Studio",
    description: "affiliation.Jun02",
    logoSrc: "/image/affiliation/Jun02.svg",
    logoAlt: "Jun02 Design Studio logo",
    logoWidth: 240,
    logoHeight: 80,
  },
];
