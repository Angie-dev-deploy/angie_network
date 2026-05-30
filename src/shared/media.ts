export type MediaType = "pdf" | "video" | "audio" | "image";

export interface MediaItem {
  index: number;
  title: string;
  description: string;
  src: string;
  type: MediaType;
  section?: string;
}

export const mediaItems: MediaItem[] = [
  // PDFs
  {
    index: 0,
    title: "Angie Network Join Us Brochure 1",
    description: "Small marketing brochure",
    src: "/pdfs/ANGIE_1.pdf",
    type: "pdf",
  },
  {
    index: 1,
    title: "Angie Network Join Us Brochure 2",
    description: "Small marketing brochure",
    src: "/pdfs/ANGIE_2.pdf",
    type: "pdf",
  },
  {
    index: 3,
    title: "SUDURA 4-2024 – Pollutant Emissions in Additive Manufacturing",
    description:
      "SUDURA 4-2024 – Pollutant emissions in additive manufacturing",
    src: "/media/SUDURA_4-2024_Pollutant emissions in additive manufacturing.pdf",
    type: "pdf",
  },
  {
    index: 4,
    title: "Cronica Olteniei 2023",
    description: "2023 Cronica Olteniei publication",
    src: "/media/2023-Cronica_Olteniei.pdf",
    type: "pdf",
  },
  {
    index: 6,
    title: "Stirile Olteniei 2023",
    description: "2023 Stirile Olteniei publication",
    src: "/media/2023-Stirile_Olteniei.pdf",
    type: "pdf",
  },
  {
    index: 8,
    title: "SUDURA 3-2025 – Sustainability of the Shipyards",
    description:
      "Article UCV+UL+ULISBA+FHOO – Sustainability of the shipyards (SUDURA journal 3-2025)",
    src: "/media/2025.09.30 Article UCV+UL+ULISBA+FHOO-Sustainability of the shipyards-SUDURA journal 3-2025.pdf",
    type: "pdf",
  },
  // Video
  {
    index: 9,
    title: "TV Release",
    description: "ANGIE Network television release",
    src: "/media/TV_release.mp4",
    type: "video",
  },
  // Audio
  {
    index: 10,
    title: "Welding's Carbon Footprint and ESG Compliance",
    description:
      "Podcast – Welding's Carbon Footprint and ESG Compliance (2025)",
    src: "/media/Podcast-Welding_s_Carbon_Footprint_and_ESG_Compliance-2025.ogg",
    type: "audio",
  },
  {
    index: 11,
    title: "TNAP to Boost Education on Sustainability",
    description:
      "2026 Conference Paper – TNAP to boost education on sustainability",
    src: "/media/2026-Paper-Conference-TNAP to boost education on sustainability.pdf",
    type: "pdf",
  },
  {
    index: 12,
    title: "US Welding of Copper Wires",
    description: "2026 Conference Paper – US welding of copper wires",
    src: "/media/2026-Paper-Conference-US welding of copper wires.pdf",
    type: "pdf",
  },
  {
    index: 13,
    title:
      "SUDURA 4-2025 – Welding Coordination During the Transition to a Sustainable",
    description:
      "SUDURA 4-2025 – Welding coordination during the transition to a sustainable",
    src: "/media/2025-SUDURA 4-2025-Welding coordination during the transition to a sustainable.pdf",
    type: "pdf",
  },
  {
    index: 14,
    title: "Savu Danut – ADEM2025 Conference",
    description: "2025 Paper – Savu Danut ADEM2025 Conference (13.11.2025)",
    src: "/media/2025-Paper-SavuDanut_ADEM2025_Conference-13.11.2025.pdf",
    type: "pdf",
  },
  {
    index: 15,
    title: "Symposium Chisinau, Republic of Moldova",
    description:
      "2025 Paper – Symposium Chisinau, Republic of Moldova (01-03.10.2025)",
    src: "/media/2025-Paper-Symposium-Chisinau_RepMoldavia-01-03.10.20251.pdf",
    type: "pdf",
  },
];
