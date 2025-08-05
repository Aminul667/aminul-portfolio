import SingleArticle from "@/components/Pages/SingleArticle";
import { getArticleById } from "@/lib/articles";

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleById(params.slug);

  return <SingleArticle article={articleData} />;
};

export default ArticlePage;
