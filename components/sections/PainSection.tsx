"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Implementaciones que duran meses",
    body: "Cada semana de retraso cuesta operaciones reales. Mientras tu software no está listo, los socios esperan.",
    accent: "#F5A320",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="21" y2="15" />
      </svg>
    ),
    title: "Software rígido que no se adapta",
    body: "Tu proceso de crédito es único. Tu plataforma debería serlo también. La rigidez del software no puede dictar cómo trabajas.",
    accent: "#F5A320",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Errores operativos que dañan la confianza",
    body: "Un error en el proceso crediticio puede costar un socio para siempre. La confianza se construye en años y se pierde en minutos.",
    accent: "#ef4444",
  },
];

export default function PainSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "#0B1628" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
            ¿Tu cooperativa sigue trabajando con{" "}
            <span className="text-gradient-gold">software que no evoluciona?</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-dark group relative overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: `rgba(${point.accent === "#ef4444" ? "239,68,68" : "245,163,32"},0.15)`,
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute left-0 top-0 h-1 w-full rounded-t-2xl"
                style={{ backgroundColor: point.accent, opacity: 0.7 }}
              />

              {/* Icon */}
              <div
                className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                style={{
                  backgroundColor:
                    point.accent === "#ef4444"
                      ? "rgba(239,68,68,0.1)"
                      : "rgba(245,163,32,0.1)",
                  color: point.accent,
                }}
              >
                {point.icon}
              </div>

              <h3 className="font-sora mb-3 text-xl font-bold text-white">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
