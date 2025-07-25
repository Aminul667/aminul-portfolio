import "highlight.js/styles/github.css";
import "../../Components/Pages/Blog/blog-content.css";

import { getArticleById } from "@/lib/articles";
import { ArrowRight, CalendarDays, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TArticle = {
  id: string;
  contentHtml: string;
  title: string;
  category: string;
  date: string;
  tags: string[];
  featured: boolean;
  image: string;
};

const PostPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const article: TArticle = await getArticleById(postId);

  console.log("Article", article);

  return (
    <main className="relative">
      <article className="py-20 bg-gradient-to-br from-[#EFEAD8] via-[#D0C9C0]/20 to-[#EFEAD8] min-h-screen pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl shadow-xl border border-[#D0C9C0]/40 p-6 md:p-10">
          {/* Post Header */}
          <header className="mb-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#5F7161] mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center justify-center text-sm text-[#5F7161]/70 space-x-4 mb-4">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                <span>Md Aminul Islam</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="w-4 h-4 mr-1" />
                <span>{article.date}</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gradient-to-r from-[#D0C9C0]/30 to-[#6D8B74]/20 text-[#5F7161] text-xs rounded-full border border-[#D0C9C0]/30 flex items-center"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Post Image */}
          {article.image && (
            <div className="mb-8 max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border border-[#D0C9C0]/30">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={800}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Post Content */}
          <div
            className="text-lg leading-relaxed space-y-6 blog-content"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          ></div>

          {/* Back to Blog Button */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#5F7161] to-[#6D8B74] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5 mr-2 rotate-180" /> Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default PostPage;

{
  //    <div className="mt-10">
  //   <h2>This is blog post page {article.title}</h2>
  //   <div
  //     className="prose prose-lg max-w-none dark:prose-invert blog-content"
  //     dangerouslySetInnerHTML={{ __html: article.contentHtml }}
  //   />
  // </div>;
}

// {
//   post.content.map((block, index) => {
//     if (block.type === "paragraph") {
//       return <p key={index}>{block.text}</p>;
//     } else if (block.type === "heading") {
//       if (block.level === 2) {
//         return (
//           <h2
//             key={index}
//             className="text-3xl font-bold text-[#5F7161] mt-8 mb-4"
//           >
//             {block.text}
//           </h2>
//         );
//       } else if (block.level === 3) {
//         return (
//           <h3
//             key={index}
//             className="text-2xl font-semibold text-[#5F7161] mt-6 mb-3"
//           >
//             {block.text}
//           </h3>
//         );
//       }
//     } else if (block.type === "code") {
//       return (
//         <pre
//           key={index}
//           className="bg-gray-900 text-gray-300 rounded-lg p-4 text-sm overflow-x-auto border border-[#5F7161]/30"
//         >
//           <code>{block.text}</code>
//         </pre>
//       );
//     } else if (block.type === "image") {
//       return (
//         <div
//           key={index}
//           className="my-8 rounded-lg overflow-hidden shadow-md border border-[#D0C9C0]/30"
//         >
//           <Image
//             src={block.src || "/placeholder.svg"}
//             alt={block.alt}
//             width={600}
//             height={300}
//             className="w-full h-auto object-cover"
//           />
//           {block.alt && (
//             <p className="text-center text-sm text-[#5F7161]/60 mt-2">
//               {block.alt}
//             </p>
//           )}
//         </div>
//       );
//     }
//     return null;
//   });
// }
