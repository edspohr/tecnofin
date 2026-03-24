"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Velocidad de implementación",
    description:
      "De semanas, no meses. Nuestro proceso de onboarding está diseñado para que tu equipo opere el sistema desde el primer día.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Adaptabilidad",
    description:
      "Cada institución tiene procesos únicos. Nuestro software se moldea a tu operación, no al revés.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Experiencia sectorial",
    description:
      "30 años dentro de las instituciones financieras más importantes del Ecuador y LATAM. Hablamos tu idioma.",
  },
];

export default function SolutionSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "#112240" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
            Tecnofin nació para{" "}
            <span className="text-gradient-gold">resolver exactamente eso</span>
          </h2>
        </motion.div>

        {/* Blockquote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-16 mx-auto max-w-3xl"
        >
          <div
            className="relative rounded-2xl p-8 md:p-10"
            style={{
              backgroundColor: "rgba(11,22,40,0.8)",
              border: "1px solid rgba(245,163,32,0.2)",
            }}
          >
            {/* Gold left accent line */}
            <div
              className="absolute left-0 top-6 bottom-6 w-1 rounded-full"
              style={{ backgroundColor: "#F5A320" }}
            />

            {/* Large quote mark */}
            <div
              className="font-sora mb-4 text-7xl font-bold leading-none"
              style={{ color: "rgba(245,163,32,0.2)" }}
            >
              &ldquo;
            </div>

            <blockquote className="font-sora mb-6 text-xl font-semibold leading-relaxed text-white md:text-2xl">
              No vendo tecnología. Entrego resultados medibles y sostenibles.
            </blockquote>

            <cite className="flex items-center gap-3 not-italic">
              <div
                className="h-10 w-10 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #F5A320 0%, #D4891A 100%)",
                }}
              />
              <div>
                <p className="font-sora font-semibold text-white">Edison Santiago</p>
                <p className="text-sm" style={{ color: "#B0BEC5" }}>
                  CEO & Fundador, Tecnofin
                </p>
              </div>
            </cite>
          </div>
        </motion.div>

        {/* Value pillars */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(26,47,82,0.5)",
                border: "1px solid rgba(245,163,32,0.12)",
              }}
            >
              <div
                className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: "rgba(245,163,32,0.1)",
                  color: "#F5A320",
                }}
              >
                {pillar.icon}
              </div>
              <h3 className="font-sora mb-3 text-lg font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
