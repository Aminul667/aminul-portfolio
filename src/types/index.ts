import { StaticImageData } from "next/image";

export type TArticleItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  image: string | StaticImageData;
};
