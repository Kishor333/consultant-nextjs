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
    description:
      "Hydromaster Solutions, a company situated in Thimphu, Bhutan, and connected to Hydro-master International, Singapore, is a valued partner of Consult2T. With a focus on cutting-edge water and wastewater treatment technologies, including UF, NF, RO, and MBR systems, Hydromaster provides sustainable, tailored solutions for a range of water treatment needs across Bhutan and the wider region.",
    logoSrc: "/image/app_logo.svg",
    logoAlt: "Bhutan Hydromaster logo",
    logoWidth: 240,
    logoHeight: 80,
  },
  {
    id: "partner-two",
    name: "Partner Two",
    description:
      "A valued strategic partner of Consult2T, contributing expertise and innovation across a range of infrastructure and environmental projects throughout the region. Their collaborative approach and technical depth make them an integral part of our extended team.",
    logoSrc: "/image/app_logo.svg",
    logoAlt: "Partner Two logo",
    logoWidth: 240,
    logoHeight: 80,
  },
  {
    id: "partner-three",
    name: "Partner Three",
    description:
      "Bringing decades of experience in sustainable development and urban planning, this partner works alongside Consult2T to deliver high-impact solutions that respect cultural heritage and promote long-term community well-being.",
    logoSrc: "/image/app_logo.svg",
    logoAlt: "Partner Three logo",
    logoWidth: 240,
    logoHeight: 80,
  },
  {
    id: "partner-four",
    name: "Partner Four",
    description:
      "Specialising in environmental assessment and green infrastructure, this partner helps Consult2T uphold the highest environmental standards on every project, ensuring outcomes that are both ambitious and ecologically responsible.",
    logoSrc: "/image/app_logo.svg",
    logoAlt: "Partner Four logo",
    logoWidth: 240,
    logoHeight: 80,
  },
];
