"use client";

import { motion } from "framer-motion";

const aiFeatures = [
  {
    title: "Evaluación Automatizada",
    description:
      "Análisis automático de solicitudes de crédito con scoring en tiempo real basado en múltiples variables financieras y comportamentales.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Análisis de Riesgo",
    description:
      "Detección de patrones en la cartera, identificación temprana de mora potencial y recomendaciones de gestión preventiva.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Automatización de Procesos",
    description:
      "Flujos de aprobación inteligentes, notificaciones automáticas, gestión de cobranza y reportes regulatorios sin intervención manual.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function AISection() {
  return (
    <section
      className="section-padding circuit-bg relative overflow-hidden"
      style={{ backgroundColor: "#0B1628" }}
    >
      {/* Abstract geometric background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large circuit-like SVG pattern */}
        <svg
          className="absolute right-0 top-0 h-full w-1/2 opacity-5"
          viewBox="0 0 500 800"
          fill="none"
        >
          <circle cx="400" cy="100" r="120" stroke="#00D4FF" strokeWidth="1" />
          <circle cx="400" cy="100" r="80" stroke="#F5A320" strokeWidth="0.5" />
          <circle cx="400" cy="100" r="40" stroke="#00D4FF" strokeWidth="1" />
          <line x1="400" y1="100" x2="200" y2="300" stroke="#00D4FF" strokeWidth="0.5" />
          <line x1="400" y1="100" x2="450" y2="350" stroke="#F5A320" strokeWidth="0.5" />
          <line x1="200" y1="300" x2="100" y2="500" stroke="#00D4FF" strokeWidth="0.5" />
          <circle cx="200" cy="300" r="6" fill="#00D4FF" />
          <circle cx="450" cy="350" r="4" fill="#F5A320" />
          <circle cx="100" cy="500" r="8" stroke="#00D4FF" strokeWidth="1" />
          <rect x="350" y="450" width="100" height="60" rx="4" stroke="#00D4FF" strokeWidth="0.5" />
          <line x1="100" y1="500" x2="350" y2="480" stroke="#00D4FF" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor: "rgba(0,212,255,0.08)",
              color: "#00D4FF",
              border: "1px solid rgba(0,212,255,0.2)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "#00D4FF", boxShadow: "0 0 6px #00D4FF" }}
            />
            Inteligencia Artificial
          </div>

          <h2 className="font-sora mb-5 text-3xl font-bold md:text-4xl">
            La IA no reemplaza la experiencia.{" "}
            <span style={{ color: "#00D4FF" }}>La amplifica.</span>
          </h2>

          <p className="text-lg leading-relaxed" style={{ color: "#B0BEC5" }}>
            En Tecnofin, integramos inteligencia artificial en los procesos crediticios no como
            una moda, sino como una herramienta real. Evaluaciones automatizadas, análisis
            inteligente de riesgo, detección de patrones en la cartera — todo respaldado por 30
            años de conocimiento del sector financiero ecuatoriano y latinoamericano.
          </p>
        </motion.div>

        {/* AI Feature cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {aiFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-dark group relative overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                borderColor: "rgba(0,212,255,0.15)",
              }}
            >
              {/* Cyan glow on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.06) 0%, transparent 70%)",
                }}
              />

              {/* Icon */}
              <div
                className="relative z-10 mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: "rgba(0,212,255,0.1)",
                  color: "#00D4FF",
                  boxShadow: "0 0 20px rgba(0,212,255,0.1)",
                }}
              >
                {feature.icon}
              </div>

              <h3 className="font-sora relative z-10 mb-3 text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="relative z-10 text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: "#00D4FF", opacity: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
