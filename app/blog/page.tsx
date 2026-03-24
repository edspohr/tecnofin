import { Metadata } from "next";
import { getAllArticles } from "@/lib/blog";
import ArticleCard from "@/components/blog/ArticleCard";

export const metadata: Metadata = {
  title: "Blog | Tecnofin — Fintech y Gestión Crediticia",
  description:
    "Artículos sobre software crediticio, transformación digital, inteligencia artificial y gestión de cooperativas en Ecuador y LATAM.",
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-[#0B1628] pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#F5A320] uppercase mb-4">
            Blog &amp; Recursos
          </span>
          <h1 className="font-sora text-4xl md:text-5xl font-bold text-white mb-4">
            Insights de Tecnofin
          </h1>
          <p className="text-[#B0BEC5] text-lg max-w-2xl mx-auto">
            Reflexiones y guías prácticas sobre tecnología financiera, gestión crediticia e innovación para cooperativas e instituciones financieras en LATAM.
          </p>
        </div>

        {/* Articles Grid */}
        {articles.length === 0 ? (
          <div className="text-center text-[#B0BEC5] py-20">
            <p>Los artículos estarán disponibles próximamente.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
