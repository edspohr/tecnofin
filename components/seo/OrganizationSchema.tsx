import { SITE_CONFIG } from "@/lib/config";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tecnofin",
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    description:
      "Tecnofin ofrece soluciones tecnológicas para gestión crediticia en cooperativas e instituciones financieras de Ecuador y LATAM.",
    foundingDate: "2022",
    areaServed: ["Ecuador", "Colombia", "Venezuela", "LATAM"],
    sameAs: [SITE_CONFIG.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      contactType: "sales",
      availableLanguage: "Spanish",
    },
    founder: {
      "@type": "Person",
      name: "Edison Santiago Saavedra",
      jobTitle: "CEO & Co-Founder",
      sameAs: SITE_CONFIG.linkedin,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
