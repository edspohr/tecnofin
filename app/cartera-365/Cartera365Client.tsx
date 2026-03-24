"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/config";

// WhatsApp SVG icon
const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L0 24l6.338-1.502A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.587-.5-5.082-1.37l-.363-.214-3.763.893.944-3.659-.236-.376A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
    title: "Gestión del ciclo de crédito completo",
    desc: "Desde la originación hasta la recuperación. Solicitudes, evaluación, aprobación, desembolso, seguimiento y cobranza en una sola plataforma integrada.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Evaluación automatizada con Inteligencia Artificial",
    desc: "Modelos de scoring crediticio que aprenden de tu cartera. Reduce el tiempo de evaluación y mejora la precisión en la toma de decisiones.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M6 8h2v5H6zM11 6h2v7h-2zM16 9h2v4h-2z" />
      </svg>
    ),
    title: "Reportería y dashboards en tiempo real",
    desc: "Visibilidad completa sobre tu cartera. Indicadores de mora, tendencias, alertas tempranas y reportes regulatorios listos para exportar.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Configuración por institución",
    desc: "Cartera 365 se adapta a tus flujos, no al revés. Parámetros, productos, condiciones y aprobaciones configurables sin necesidad de desarrollo adicional.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Onboarding y soporte incluido",
    desc: "Implementación guiada, capacitación para tu equipo y soporte técnico continuo. No te dejamos solo después de la entrega.",
  },
];

const comparisonRows = [
  { aspect: "Tiempo de evaluación", without: "2–4 días", with: "Horas" },
  { aspect: "Errores operativos", without: "Frecuentes", with: "−30% comprobado" },
  { aspect: "Reportes regulatorios", without: "Proceso manual", with: "Automáticos" },
  { aspect: "Adaptación al negocio", without: "Costosa y lenta", with: "Configuración nativa" },
  { aspect: "Tiempo de implementación", without: "6–18 meses", with: "4–8 semanas" },
  { aspect: "Costo de desarrollo", without: "Alto", with: "−40% vs. desarrollo a medida" },
];

const timelineSteps = [
  { week: "Semana 1", label: "Descubrimiento y configuración inicial" },
  { week: "Semana 2", label: "Parametrización y pruebas" },
  { week: "Semana 3", label: "Capacitación del equipo" },
  { week: "Semana 4", label: "Go-live y acompañamiento" },
];

const faqs = [
  {
    q: "¿Cartera 365 funciona para cualquier tipo de cooperativa?",
    a: "Sí. Cartera 365 fue diseñado con flexibilidad desde el primer día. Se adapta a cooperativas de ahorro y crédito de cualquier tamaño, desde las más pequeñas hasta las de mayor escala en Ecuador. Los parámetros de productos, políticas de crédito y flujos de aprobación se configuran según las necesidades específicas de cada institución.",
  },
  {
    q: "¿Cuánto tiempo toma la implementación?",
    a: "El proceso estándar de implementación de Cartera 365 toma entre 4 y 8 semanas, dependiendo de la complejidad de los productos crediticios y la cantidad de integraciones requeridas. Esto incluye configuración, capacitación y acompañamiento en el arranque.",
  },
  {
    q: "¿Cómo se integra con nuestros sistemas actuales?",
    a: "Cartera 365 cuenta con APIs abiertas y conectores nativos para los principales sistemas contables y core bancarios utilizados en Ecuador. Durante la fase de descubrimiento, evaluamos tu arquitectura actual y diseñamos la estrategia de integración más eficiente.",
  },
  {
    q: "¿Qué tipo de soporte ofrecen post-implementación?",
    a: "Incluimos soporte técnico por 90 días posterior al go-live, con un canal directo de atención para el equipo de sistemas y un canal separado para los usuarios finales. Después de ese período, ofrecemos planes de mantenimiento y soporte continuo.",
  },
  {
    q: "¿En qué se diferencia Cartera 365 de otras plataformas del mercado?",
    a: "Tres diferencias clave: primero, está diseñado específicamente para la realidad operativa de las cooperativas ecuatorianas — no es un producto genérico adaptado. Segundo, la implementación es significativamente más rápida que cualquier alternativa comparable. Tercero, está respaldado por un equipo con más de 30 años de experiencia en el sector financiero ecuatoriano.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Cartera365Client() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main style={{ backgroundColor: "#0B1628", color: "white" }}>
      {/* ── HERO ── */}
      <section
        className="circuit-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-28 text-center"
        style={{ backgroundColor: "#0B1628" }}
      >
        {/* Background grid */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute w-full"
              style={{
                top: `${(i + 1) * 16}%`,
                height: "1px",
                background: "linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.05) 40%, rgba(0,212,255,0.1) 50%, rgba(0,212,255,0.05) 60%, transparent 100%)",
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute h-full"
              style={{
                left: `${(i + 1) * 11}%`,
                width: "1px",
                background: "linear-gradient(180deg, transparent 0%, rgba(245,163,32,0.04) 40%, rgba(245,163,32,0.08) 50%, rgba(245,163,32,0.04) 70%, transparent 100%)",
              }}
            />
          ))}
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(0,212,255,0.05) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Product badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
            style={{ borderColor: "rgba(245,163,32,0.35)", backgroundColor: "rgba(245,163,32,0.07)", color: "#F7B84B" }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#F5A320", boxShadow: "0 0 8px #F5A320" }} />
            Plataforma de gestión crediticia
          </motion.div>

          {/* Product name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sora mb-4 text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl text-gradient-gold"
          >
            Cartera 365
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed md:text-2xl"
            style={{ color: "#B0BEC5" }}
          >
            La plataforma de gestión crediticia diseñada para cooperativas ecuatorianas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button variant="primary" href={getWhatsAppUrl("cartera365")} external size="lg">
              <WaIcon /> Quiero una demo
            </Button>
            <Button variant="ghost" href="#features" size="lg">
              Ver funcionalidades →
            </Button>
          </motion.div>

          {/* Animated dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mx-auto max-w-2xl"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <div
              className="rounded-2xl border p-5 text-left"
              style={{ backgroundColor: "#0d1e38", borderColor: "rgba(0,212,255,0.18)", boxShadow: "0 0 60px rgba(0,212,255,0.08), 0 0 100px rgba(245,163,32,0.04)" }}
            >
              {/* Window chrome */}
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#FFBD2E" }} />
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#28CA41" }} />
                <span className="ml-4 text-xs" style={{ color: "rgba(176,190,197,0.5)" }}>cartera365.app — Dashboard Principal</span>
              </div>
              {/* Metrics row */}
              <div className="mb-4 grid grid-cols-3 gap-3">
                {[
                  { label: "Cartera activa", value: "$2.4M", color: "#00D4FF" },
                  { label: "Mora actual", value: "1.8%", color: "#28CA41" },
                  { label: "Solicitudes hoy", value: "47", color: "#F5A320" },
                ].map((m, i) => (
                  <div key={i} className="rounded-lg p-3" style={{ backgroundColor: "#112240", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <p className="mb-1 text-xs" style={{ color: "#B0BEC5" }}>{m.label}</p>
                    <p className="font-sora text-xl font-bold" style={{ color: m.color }}>{m.value}</p>
                  </div>
                ))}
              </div>
              {/* Bar chart rows */}
              <div className="mb-4 rounded-lg p-4" style={{ backgroundColor: "#112240", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="mb-3 text-xs font-semibold" style={{ color: "#B0BEC5" }}>Desembolsos por mes (USD)</p>
                <div className="flex items-end gap-2" style={{ height: "60px" }}>
                  {[45, 60, 38, 72, 55, 80, 65].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: i === 5 ? "#F5A320" : "rgba(0,212,255,0.3)" }} />
                  ))}
                </div>
              </div>
              {/* Status list */}
              <div className="space-y-2">
                {[
                  { label: "Solicitud #4821 — Mario Tipán", status: "Aprobado", color: "#28CA41" },
                  { label: "Solicitud #4820 — Rosa Chimbo", status: "En evaluación", color: "#F5A320" },
                  { label: "Solicitud #4819 — Luis Cando", status: "Desembolsado", color: "#00D4FF" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg px-3 py-2" style={{ backgroundColor: "#112240", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-xs" style={{ color: "#B0BEC5" }}>{row.label}</span>
                    <span className="rounded-full px-2 py-0.5 text-xs font-semibold" style={{ color: row.color, backgroundColor: `${row.color}18` }}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="section-padding mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
            Todo lo que necesitas en{" "}
            <span className="text-gradient-gold">una sola plataforma</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg" style={{ color: "#B0BEC5" }}>
            Cartera 365 cubre el ciclo crediticio de punta a punta, con tecnología que se adapta a tu institución.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08 } } }}
              className="card-dark p-6 transition-all duration-300 hover:border-[rgba(245,163,32,0.35)]"
              style={{ borderColor: "rgba(255,255,255,0.09)" }}
            >
              <div
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: "rgba(245,163,32,0.1)", color: "#F5A320" }}
              >
                {f.icon}
              </div>
              <h3 className="font-sora mb-2 text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>{f.desc}</p>
            </motion.div>
          ))}

          {/* Stats card spanning remaining space */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.4 } } }}
            className="card-dark p-6 md:col-span-2 lg:col-span-1"
            style={{ background: "linear-gradient(135deg, rgba(245,163,32,0.08) 0%, rgba(17,34,64,1) 60%)", borderColor: "rgba(245,163,32,0.2)" }}
          >
            <p className="font-sora mb-6 text-sm font-semibold uppercase tracking-widest" style={{ color: "#F5A320" }}>Resultados comprobados</p>
            <div className="space-y-5">
              {[
                { label: "Reducción de costos operativos", value: "40%", icon: "↓" },
                { label: "Reducción de errores", value: "30%", icon: "↓" },
                { label: "Tiempo de implementación", value: "4–8 sem.", icon: "⚡" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="font-sora text-3xl font-bold text-gradient-gold">{s.icon}{s.value}</span>
                  <span className="text-sm" style={{ color: "#B0BEC5" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="section-padding" style={{ backgroundColor: "#0d1e38" }}>
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-12 text-center"
          >
            <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
              ¿Qué cambia con <span className="text-gradient-gold">Cartera 365</span>?
            </h2>
            <p style={{ color: "#B0BEC5" }}>La diferencia entre operar manualmente y operar con tecnología diseñada para tu sector.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="overflow-hidden rounded-2xl border"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            {/* Header */}
            <div className="grid grid-cols-3 text-sm font-semibold" style={{ backgroundColor: "#112240" }}>
              <div className="border-r px-6 py-4 font-sora" style={{ borderColor: "rgba(255,255,255,0.1)", color: "#B0BEC5" }}>Aspecto</div>
              <div className="border-r px-6 py-4 font-sora text-center" style={{ borderColor: "rgba(255,255,255,0.1)", color: "#B0BEC5" }}>Sin Cartera 365</div>
              <div className="px-6 py-4 font-sora text-center" style={{ color: "#F5A320" }}>Con Cartera 365</div>
            </div>

            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-t text-sm"
                style={{ borderColor: "rgba(255,255,255,0.07)", backgroundColor: i % 2 === 0 ? "rgba(17,34,64,0.4)" : "rgba(11,22,40,0.6)" }}
              >
                <div className="border-r px-6 py-4 font-medium" style={{ borderColor: "rgba(255,255,255,0.07)" }}>{row.aspect}</div>
                <div className="border-r px-6 py-4 text-center" style={{ borderColor: "rgba(255,255,255,0.07)", color: "#B0BEC5" }}>{row.without}</div>
                <div className="px-6 py-4 text-center font-semibold" style={{ color: "#28CA41" }}>{row.with}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── IMPLEMENTATION TIMELINE ── */}
      <section className="section-padding mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
            Operativo en <span className="text-gradient-gold">4 semanas</span>
          </h2>
          <p style={{ color: "#B0BEC5" }}>Un proceso estructurado que minimiza la disrupción operativa y maximiza la adopción.</p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div
            className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 md:block"
            style={{ background: "linear-gradient(180deg, rgba(245,163,32,0.5) 0%, rgba(245,163,32,0.1) 100%)" }}
          />

          <div className="space-y-8">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, x: i % 2 === 0 ? -40 : 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, delay: i * 0.1 } } }}
                className={`flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="card-dark p-6">
                    <span className="font-sora mb-2 block text-sm font-bold" style={{ color: "#F5A320" }}>{step.week}</span>
                    <p className="font-semibold">{step.label}</p>
                  </div>
                </div>
                {/* Center node */}
                <div className="hidden w-2/12 justify-center md:flex">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full font-sora text-sm font-bold"
                    style={{ backgroundColor: "#F5A320", color: "#0B1628", boxShadow: "0 0 20px rgba(245,163,32,0.4)" }}
                  >
                    {i + 1}
                  </div>
                </div>
                <div className="hidden w-5/12 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="section-padding" style={{ backgroundColor: "#0d1e38" }}>
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-12 text-center"
          >
            <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
              Preguntas <span className="text-gradient-gold">frecuentes</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.07 } } }}
                className="overflow-hidden rounded-xl border"
                style={{ borderColor: openFaq === i ? "rgba(245,163,32,0.4)" : "rgba(255,255,255,0.1)", backgroundColor: "#112240" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 hover:bg-white/[0.03]"
                >
                  <span className="font-sora pr-4 font-semibold">{faq.q}</span>
                  <span
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{ color: "#F5A320", transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t px-6 pb-5 pt-4 text-sm leading-relaxed" style={{ borderColor: "rgba(255,255,255,0.07)", color: "#B0BEC5" }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHATSAPP CTA ── */}
      <section className="section-padding px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mx-auto max-w-3xl rounded-3xl border p-10 text-center"
          style={{ background: "linear-gradient(135deg, rgba(245,163,32,0.07) 0%, rgba(17,34,64,0.9) 100%)", borderColor: "rgba(245,163,32,0.25)" }}
        >
          <div
            className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
            style={{ backgroundColor: "rgba(245,163,32,0.12)", color: "#F5A320" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" />
            </svg>
          </div>
          <h2 className="font-sora mb-3 text-3xl font-bold md:text-4xl">
            ¿Quieres ver Cartera 365 <span className="text-gradient-gold">en acción</span>?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "#B0BEC5" }}>
            Te mostramos la plataforma funcionando con datos reales de cooperativas similares a la tuya. Sin compromiso, sin presión.
          </p>
          <Button variant="primary" href={getWhatsAppUrl("cartera365")} external size="lg">
            <WaIcon /> Agenda tu demo ahora
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
