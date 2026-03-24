import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { ArticleMeta } from "@/lib/blog";

interface ArticleCardProps {
  article: ArticleMeta;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <article className="h-full bg-[#112240] rounded-2xl border border-white/10 p-6 hover:border-[#F5A320]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#F5A320]/5">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="gold">{article.category}</Badge>
          <span className="text-[#B0BEC5] text-xs">{article.readingTime}</span>
        </div>
        <h2 className="font-sora font-semibold text-white text-lg leading-snug mb-3 group-hover:text-[#F5A320] transition-colors">
          {article.title}
        </h2>
        <p className="text-[#B0BEC5] text-sm leading-relaxed mb-4 line-clamp-3">
          {article.description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#F5A320]/10 border border-[#F5A320]/30 flex items-center justify-center text-xs font-bold text-[#F5A320]">
              ES
            </div>
            <span className="text-[#B0BEC5] text-xs">{article.author}</span>
          </div>
          <span className="text-[#B0BEC5] text-xs">
            {new Date(article.date).toLocaleDateString("es-EC", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </article>
    </Link>
  );
}
