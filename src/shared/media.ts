export type MediaType = "pdf" | "video" | "audio" | "image";

export interface MediaItem {
  index: number;
  title: string;
  description: string;
  src: string;
  type: MediaType;
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
    index: 2,
    title: "A Review of Recent Advances and Future Trends in WAAM",
    description:
      "Article UL – A review of recent advances and future trends in Wire Arc Additive Manufacturing",
    src: "/media/Article UL-A review of recent advances and future trends in WAAM.pdf",
    type: "pdf",
  },
  {
    index: 3,
    title: "Pollutant Emissions in Additive Manufacturing",
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
    index: 5,
    title: "Sustainability of Maritime and Inland Ports",
    description:
      "Article UZ – Sustainability of Maritime and Inland Ports (CogMob 2024)",
    src: "/media/Article UZ-Sustainability of Maritime and Inland Ports-CogMob_2024_paper_82 (9).pdf",
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
    index: 7,
    title: "Sustainability – September 2024",
    description: "Article UZ+UCV – Sustainability Sept 2024 Vol. 3, No. 3",
    src: "/media/Article UZ+UCV-SustainabilitySept 2024 Vol. 3. No. 3.pdf",
    type: "pdf",
  },
  {
    index: 8,
    title: "Sustainability of the Shipyards",
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
    src: "/media/TV release.mp4",
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
];
