import { SITE_CONFIG } from "@/lib/config";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Edison Santiago Saavedra",
    jobTitle: "CEO & Co-Founder",
    worksFor: {
      "@type": "Organization",
      name: "Tecnofin",
      url: SITE_CONFIG.url,
    },
    description:
      "30+ años de experiencia en soluciones tecnológicas para el sector financiero en Ecuador, Colombia y Venezuela. Certificaciones: MIT Sloan, MBA Tec de Monterrey, ITIL, Scrum Master.",
    sameAs: [SITE_CONFIG.linkedin],
    knowsAbout: [
      "Gestión crediticia",
      "Software financiero",
      "Cooperativas de ahorro y crédito",
      "Transformación digital",
      "Inteligencia artificial en finanzas",
    ],
    alumniOf: [
      {
        "@type": "Organization",
        name: "MIT Sloan School of Management",
      },
      {
        "@type": "Organization",
        name: "Tecnológico de Monterrey",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
