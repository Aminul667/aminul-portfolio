"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TArticleItem } from "@/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ArticleCard = ({ article }: { article: TArticleItem }) => {
  const router = useRouter();
  return (
    <div
      className="grid md:grid-cols-3 gap-8 items-center cursor-pointer"
      onClick={() => router.push(`/blog/${article.id}`)}
    >
      <div className="md:col-span-2">
        <Card className="p-0 group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-1 bg-white/90 backdrop-blur-sm">
          <div className="relative overflow-hidden">
            <Image
              src={article.image}
              alt="Brand Identity Project"
              width={600}
              height={300}
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <Button
                size="sm"
                className="bg-white/90 text-slate-800 hover:bg-white rounded-full shadow-lg"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
      <div className="space-y-4">
        <h4 className="text-2xl font-serif text-slate-800">{article.title}</h4>
        <p className="text-slate-600 leading-relaxed">{article.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
