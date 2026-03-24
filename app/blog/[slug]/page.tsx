import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getAllArticles, getRelatedArticles } from "@/lib/blog";
import ArticleCard from "@/components/blog/ArticleCard";
import { getWhatsAppUrl } from "@/lib/config";
import MDXContent from "@/components/blog/MDXContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, article.category);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Tecnofin",
      url: "https://tecnofin.ec",
    },
  };

  return (
    <div className="min-h-screen bg-[#0B1628] pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-[#F5A320] bg-[#F5A320]/10 border border-[#F5A320]/30 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-[#B0BEC5] text-sm">{article.readingTime}</span>
          </div>
          <h1 className="font-sora text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            {article.title}
          </h1>
          <p className="text-[#B0BEC5] text-lg leading-relaxed mb-6">
            {article.description}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pb-6 border-b border-white/10">
            <div className="w-10 h-10 rounded-full bg-[#F5A320]/10 border border-[#F5A320]/30 flex items-center justify-center text-sm font-bold text-[#F5A320]">
              ES
            </div>
            <div>
              <div className="text-white font-medium text-sm">{article.author}</div>
              <div className="text-[#B0BEC5] text-xs">CEO &amp; Co-Founder, Tecnofin</div>
            </div>
            <div className="ml-auto text-[#B0BEC5] text-sm">
              {new Date(article.date).toLocaleDateString("es-EC", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose-tecnofin mb-12">
          <MDXContent source={article.content} />
        </div>

        {/* End CTA */}
        <div className="bg-[#112240] border border-[#F5A320]/30 rounded-2xl p-8 text-center mb-12">
          <h3 className="font-sora text-xl font-bold text-white mb-2">
            ¿Te resultó útil este artículo?
          </h3>
          <p className="text-[#B0BEC5] mb-6">
            Si quieres aplicar estos conceptos en tu cooperativa o institución financiera, habla con Edison directamente.
          </p>
          <a
            href={getWhatsAppUrl("blog")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5C] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Habla con Edison sobre esto
          </a>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div>
            <h2 className="font-sora text-xl font-bold text-white mb-6">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
