import SingleArticle from "@/components/Pages/SingleArticle";
import { getArticleById } from "@/lib/articles";

const ArticlePage = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleById(params.slug);

  return (
    <div className="mt-10">
      <SingleArticle article={articleData} />
    </div>
  );
};

export default ArticlePage;
