"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  "Gestión completa del ciclo de crédito (originación a recuperación)",
  "Adaptable a los flujos específicos de tu institución",
  "Onboarding rápido con capacitación incluida",
  "Integración con sistemas existentes sin disrupciones",
];

const metrics = [
  { value: "-40%", label: "Costos de desarrollo" },
  { value: "-30%", label: "Errores operativos" },
  { value: "Semanas", label: "Tiempo de implementación" },
];

export default function Cartera365Spotlight() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "#0B1628" }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl p-8 md:p-12"
          style={{
            backgroundColor: "#112240",
            border: "1px solid rgba(245,163,32,0.25)",
            boxShadow:
              "0 0 60px rgba(245,163,32,0.08), 0 0 120px rgba(245,163,32,0.04)",
          }}
        >
          {/* Background glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(245,163,32,0.06) 0%, transparent 60%)",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left column */}
            <div>
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: "rgba(245,163,32,0.12)",
                  color: "#F5A320",
                  border: "1px solid rgba(245,163,32,0.3)",
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#F5A320", boxShadow: "0 0 6px #F5A320" }}
                />
                Producto Principal
              </div>

              <h2 className="font-sora mb-2 text-3xl font-bold text-white md:text-4xl">
                Cartera 365
              </h2>
              <p className="mb-8 text-base leading-relaxed" style={{ color: "#B0BEC5" }}>
                La plataforma de gestión crediticia diseñada para cooperativas ecuatorianas
              </p>

              {/* Benefits */}
              <ul className="mb-10 space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(245,163,32,0.15)" }}
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 10"
                        fill="none"
                      >
                        <path
                          d="M1 5L4.5 8.5L11 1"
                          stroke="#F5A320"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-white">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <Link
                href="/cartera-365"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold font-sora transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #F5A320 0%, #D4891A 100%)",
                  color: "#0B1628",
                  boxShadow: "0 0 20px rgba(245,163,32,0.3)",
                }}
              >
                Conoce Cartera 365
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Right column: Mock data visualization */}
            <div className="flex flex-col gap-6">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="rounded-xl p-4 text-center"
                    style={{
                      backgroundColor: "rgba(11,22,40,0.8)",
                      border: "1px solid rgba(245,163,32,0.15)",
                    }}
                  >
                    <p
                      className="font-sora mb-1 text-2xl font-bold"
                      style={{ color: "#F5A320" }}
                    >
                      {metric.value}
                    </p>
                    <p className="text-xs leading-tight" style={{ color: "#B0BEC5" }}>
                      {metric.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CSS chart mock */}
              <div
                className="relative overflow-hidden rounded-2xl p-6"
                style={{
                  backgroundColor: "rgba(11,22,40,0.8)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="font-sora mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: "#B0BEC5" }}>
                  Cartera activa — últimos 12 meses
                </p>
                {/* Bar chart mock */}
                <div className="flex items-end gap-2 h-24">
                  {[45, 60, 52, 70, 65, 80, 75, 88, 82, 95, 90, 100].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 + i * 0.05 }}
                        className="rounded-t"
                        style={{
                          height: `${h}%`,
                          transformOrigin: "bottom",
                          background:
                            i === 11
                              ? "linear-gradient(180deg, #F5A320 0%, #D4891A 100%)"
                              : "rgba(245,163,32,0.25)",
                        }}
                      />
                    </div>
                  ))}
                </div>
                {/* X-axis labels */}
                <div className="mt-2 flex justify-between">
                  {["Ene", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
                    <span key={m} className="text-xs" style={{ color: "rgba(176,190,197,0.5)" }}>
                      {m}
                    </span>
                  ))}
                </div>

                {/* Trend line overlay */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 300 100"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      points="10,80 35,64 60,72 85,48 110,55 135,38 160,42 185,26 210,32 235,14 260,18 285,8"
                      fill="none"
                      stroke="rgba(0,212,255,0.4)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
