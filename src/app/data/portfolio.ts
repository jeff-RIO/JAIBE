// src/data/portfolio.ts
import tattooWork1 from "@/assets/tattoo-work-1.png";
import tattooWork2 from "@/assets/tattoo-work-2.png";
import artWork1 from "@/assets/art-work-1.png";
import florCacau from "@/assets/flor-cacau.png";
import florMaracuja from "@/assets/flor-maracuja.png";

export const CATEGORIES = [
  { value: "todos", label: "Todos" },
  { value: "tatuagem", label: "Tattoo" },
  { value: "arte", label: "Arte" },
] as const;

export type Category = (typeof CATEGORIES)[number]["value"];
export type ItemCategory = Exclude<Category, "todos">;

export type PortfolioItem = {
  id: number;
  image: string;
  title: string;
  category: ItemCategory;
};

export const portfolioItems = [
  { id: 1, image: tattooWork1, title: "Botânica Delicada", category: "tatuagem" },
  { id: 2, image: tattooWork2, title: "Peônia Clássica", category: "tatuagem" },
  { id: 3, image: florCacau, title: "Flor de Cacau", category: "arte" },
  { id: 4, image: tattooWork1, title: "Ramo Minimalista", category: "tatuagem" },
  { id: 5, image: florMaracuja, title: "Flor de Maracujá", category: "arte" },
  { id: 6, image: artWork1, title: "Calêndulas", category: "arte" },
] satisfies readonly PortfolioItem[];
