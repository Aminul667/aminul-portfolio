import fs from "fs";
import matter from "gray-matter";
import path from "path";
import moment from "moment";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { TArticleItem } from "@/types";

const articlesDirectory = path.join(process.cwd(), "src/articles");

const getSortedArticles = (): TArticleItem[] => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      excerpt: matterResult.data.excerpt,
      date: matterResult.data.date,
      category: matterResult.data.category,
      tags: matterResult.data.tags ?? [],
      featured: matterResult.data.featured ?? false,
      image: matterResult.data.image ?? "",
    };
  });

  return allArticlesData.sort((a, b) => {
    const format = "DD-MM-YYYY";
    return moment(b.date, format).diff(moment(a.date, format));
  });
};

export const getAllArticles = (): TArticleItem[] => {
  return getSortedArticles();
};

export const getCategorizedArticles = (): Record<string, TArticleItem[]> => {
  const sortedArticles = getSortedArticles();
  const categorizedArticles: Record<string, TArticleItem[]> = {};

  sortedArticles.forEach((article) => {
    if (!categorizedArticles[article.category]) {
      categorizedArticles[article.category] = [];
    }
    categorizedArticles[article.category].push(article);
  });

  return categorizedArticles;
};

export const getArticleById = async (id: string) => {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    excerpt: matterResult.data.excerpt,
    category: matterResult.data.category,
    date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
    tags: matterResult.data.tags ?? [],
    featured: matterResult.data.featured ?? false,
    image: matterResult.data.image ?? "",
  };
};
