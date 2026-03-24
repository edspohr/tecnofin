"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/config";

const areas = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    title: "Fintech",
    description:
      "Sistemas de pago, plataformas de crédito, wallets digitales y herramientas de análisis financiero a medida.",
    tags: ["Sistemas de pago", "Plataformas de crédito", "Core bancario"],
    accent: "#F5A320",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 4v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Transporte",
    description:
      "Gestión de flotas, sistemas de logística, trazabilidad en tiempo real y optimización de rutas.",
    tags: ["Gestión de flotas", "Logística", "Trazabilidad"],
    accent: "#00D4FF",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "Automatización con IA",
    description:
      "Flujos de trabajo inteligentes, procesamiento de documentos, automatización de decisiones y análisis predictivo.",
    tags: ["Workflows IA", "Automatización", "Análisis predictivo"],
    accent: "#F5A320",
  },
];

export default function CustomDevSection() {
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
          className="mb-4 text-center"
        >
          <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
            ¿Necesitas algo más específico?{" "}
            <span className="text-gradient-gold">Desarrollamos a tu medida.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-14 max-w-2xl text-center text-lg leading-relaxed"
          style={{ color: "#B0BEC5" }}
        >
          Combinamos plataformas low-code con desarrollo impulsado por IA para entregar
          soluciones personalizadas en una fracción del tiempo y costo tradicional.
        </motion.p>

        {/* Area cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-dark group relative overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Top accent */}
              <div
                className="absolute left-0 top-0 h-1 w-0 rounded-t-2xl transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: area.accent }}
              />

              <div
                className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `rgba(${area.accent === "#00D4FF" ? "0,212,255" : "245,163,32"},0.1)`,
                  color: area.accent,
                }}
              >
                {area.icon}
              </div>

              <h3 className="font-sora mb-3 text-xl font-bold text-white">
                {area.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>
                {area.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: `rgba(${area.accent === "#00D4FF" ? "0,212,255" : "245,163,32"},0.08)`,
                      color: area.accent,
                      border: `1px solid rgba(${area.accent === "#00D4FF" ? "0,212,255" : "245,163,32"},0.2)`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            variant="primary"
            href={getWhatsAppUrl("desarrollo")}
            external
            size="lg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L0 24l6.338-1.502A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.587-.5-5.082-1.37l-.363-.214-3.763.893.944-3.659-.236-.376A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Hablemos de tu proyecto
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
