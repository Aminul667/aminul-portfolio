import SingleArticle from "@/components/Pages/SingleArticle";
import { getArticleById } from "@/lib/articles";

const ArticlePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const articleData = await getArticleById(slug);

  return (
    <div className="mt-10">
      <SingleArticle article={articleData} />
    </div>
  );
};

export default ArticlePage;
