"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/config";

const trustBadges = [
  "MIT Sloan",
  "MBA Tec de Monterrey",
  "30+ años",
  "Ecuador",
  "Colombia",
  "Venezuela",
];

export default function HeroSection() {
  return (
    <section
      className="circuit-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24"
      style={{ backgroundColor: "#0B1628" }}
    >
      {/* Animated grid lines background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Horizontal lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute w-full"
            style={{
              top: `${(i + 1) * 12}%`,
              height: "1px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.06) 30%, rgba(0,212,255,0.12) 50%, rgba(0,212,255,0.06) 70%, transparent 100%)",
            }}
          />
        ))}
        {/* Vertical lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute h-full"
            style={{
              left: `${(i + 1) * 9}%`,
              width: "1px",
              background:
                "linear-gradient(180deg, transparent 0%, rgba(245,163,32,0.04) 30%, rgba(245,163,32,0.08) 50%, rgba(245,163,32,0.04) 70%, transparent 100%)",
            }}
          />
        ))}
        {/* Glowing nodes at intersections */}
        {[
          { top: "24%", left: "18%" },
          { top: "36%", left: "54%" },
          { top: "60%", left: "27%" },
          { top: "48%", left: "81%" },
          { top: "72%", left: "63%" },
        ].map((pos, i) => (
          <div
            key={`node-${i}`}
            className="absolute rounded-full"
            style={{
              top: pos.top,
              left: pos.left,
              width: "6px",
              height: "6px",
              backgroundColor: i % 2 === 0 ? "rgba(0,212,255,0.4)" : "rgba(245,163,32,0.4)",
              boxShadow:
                i % 2 === 0
                  ? "0 0 12px rgba(0,212,255,0.4)"
                  : "0 0 12px rgba(245,163,32,0.4)",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        {/* Large radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,212,255,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
          style={{
            borderColor: "rgba(0,212,255,0.3)",
            backgroundColor: "rgba(0,212,255,0.06)",
            color: "#00D4FF",
          }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: "#00D4FF", boxShadow: "0 0 8px #00D4FF" }}
          />
          Tecnología financiera para LATAM
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sora mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
        >
          30 años de experiencia financiera,{" "}
          <span className="text-gradient-gold">ahora potenciados</span> por
          Inteligencia Artificial
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed md:text-xl"
          style={{ color: "#B0BEC5" }}
        >
          Ayudamos a cooperativas e instituciones financieras a gestionar créditos con
          mayor eficiencia, menos errores y tecnología que realmente se adapta a su
          negocio.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            variant="primary"
            href={getWhatsAppUrl("home")}
            external
            size="lg"
            className="min-w-[200px]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L0 24l6.338-1.502A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.587-.5-5.082-1.37l-.363-.214-3.763.893.944-3.659-.236-.376A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Habla con Edison
          </Button>
          <Button
            variant="ghost"
            href="/cartera-365"
            size="lg"
            className="min-w-[200px]"
          >
            Ver Cartera 365 →
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {trustBadges.map((badge, i) => (
            <span
              key={i}
              className="rounded-full border px-3 py-1 text-xs font-medium"
              style={{
                borderColor: "rgba(245,163,32,0.25)",
                backgroundColor: "rgba(245,163,32,0.06)",
                color: "#F7B84B",
              }}
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 p-1"
          style={{ borderColor: "rgba(255,255,255,0.2)" }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
