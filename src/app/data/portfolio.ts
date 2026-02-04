import type { StaticImageData } from "next/image";

import tattooWork1 from "../assets/WhatsApp Image 2026-02-03 at 11.45.38 (1).jpeg";
import tattooWork2 from "../assets/WhatsApp Image 2026-02-03 at 11.45.38 (2).jpeg";
import tattooWork3 from "../assets/WhatsApp Image 2026-02-03 at 11.45.38 (3).jpeg";
import tattooWork4 from "../assets/WhatsApp Image 2026-02-03 at 11.45.38 (4).jpeg";
import tattooWork5 from "../assets/WhatsApp Image 2026-02-03 at 11.45.38.jpeg";
import tattooWork6 from "../assets/WhatsApp Image 2026-02-03 at 11.45.39 (1).jpeg";
import tattooWork7 from "../assets/WhatsApp Image 2026-02-03 at 11.45.39 (2).jpeg";
import tattooWork8 from "../assets/WhatsApp Image 2026-02-03 at 11.45.39.jpeg";
import tattooWork9 from "../assets/WhatsApp Image 2026-02-03 at 11.45.40 (1).jpeg";
import tattooWork10 from "../assets/WhatsApp Image 2026-02-03 at 11.45.40 (2).jpeg";
import tattooWork11 from "../assets/WhatsApp Image 2026-02-03 at 11.45.40 (3).jpeg";
import tattooWork12 from "../assets/WhatsApp Image 2026-02-03 at 11.45.40 (4).jpeg";
import tattooWork13 from "../assets/WhatsApp Image 2026-02-03 at 11.45.40.jpeg";
import tattooWork14 from "../assets/WhatsApp Image 2026-02-03 at 11.45.41 (1).jpeg";
import tattooWork15 from "../assets/WhatsApp Image 2026-02-03 at 11.45.41 (2).jpeg";
import tattooWork16 from "../assets/WhatsApp Image 2026-02-03 at 11.45.41 (3).jpeg";
import tattooWork17 from "../assets/WhatsApp Image 2026-02-03 at 11.45.41.jpeg";

export const CATEGORIES = [
  { value: "todos", label: "Todos" },
  { value: "tatuagem", label: "Tattoo" },
  { value: "arte", label: "Arte" },
] as const;

export type Category = (typeof CATEGORIES)[number]["value"];
export type ItemCategory = Exclude<Category, "todos">;

export type PortfolioItem = {
  id: number;
  image: StaticImageData;
  title: string;
  category: ItemCategory;
};

export const portfolioItems = [
  { id: 1, image: tattooWork1, title: "Botânica Delicada", category: "tatuagem" },
  { id: 2, image: tattooWork2, title: "Peônia Clássica", category: "tatuagem" },
  { id: 3, image: tattooWork3, title: "Tattoo 03", category: "tatuagem" },
  { id: 4, image: tattooWork4, title: "Tattoo 04", category: "tatuagem" },
  { id: 5, image: tattooWork5, title: "Tattoo 05", category: "tatuagem" },
  { id: 6, image: tattooWork6, title: "Tattoo 06", category: "tatuagem" },
  { id: 7, image: tattooWork7, title: "Tattoo 07", category: "tatuagem" },
  { id: 8, image: tattooWork8, title: "Tattoo 08", category: "tatuagem" },
  { id: 9, image: tattooWork9, title: "Tattoo 09", category: "tatuagem" },
  { id: 10, image: tattooWork10, title: "Tattoo 10", category: "tatuagem" },
  { id: 11, image: tattooWork11, title: "Tattoo 11", category: "tatuagem" },
  { id: 12, image: tattooWork12, title: "Tattoo 12", category: "tatuagem" },
  { id: 13, image: tattooWork13, title: "Tattoo 13", category: "tatuagem" },
  { id: 14, image: tattooWork14, title: "Tattoo 14", category: "tatuagem" },
  { id: 15, image: tattooWork15, title: "Tattoo 15", category: "tatuagem" },
  { id: 16, image: tattooWork16, title: "Tattoo 16", category: "tatuagem" },
  { id: 17, image: tattooWork17, title: "Tattoo 17", category: "tatuagem" },
] satisfies readonly PortfolioItem[];
