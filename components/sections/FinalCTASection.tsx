"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-24 px-4">
      {/* Gold gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,163,32,0.12) 0%, rgba(212,137,26,0.08) 40%, rgba(11,22,40,0) 70%)",
          backgroundColor: "#0B1628",
        }}
      />

      {/* Subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(245,163,32,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 50%, rgba(245,163,32,0.05) 0%, transparent 40%)",
        }}
      />

      {/* Top border */}
      <div
        className="absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(245,163,32,0.3) 30%, rgba(245,163,32,0.5) 50%, rgba(245,163,32,0.3) 70%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider"
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
            Conversemos
          </div>

          <h2 className="font-sora mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            ¿Listo para transformar tu{" "}
            <span className="text-gradient-gold">gestión crediticia?</span>
          </h2>

          <p className="mb-10 text-lg leading-relaxed" style={{ color: "#B0BEC5" }}>
            Agenda una reunión con Edison y en 30 minutos te mostramos cómo Tecnofin puede
            adaptarse a tu institución.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={getWhatsAppUrl("contacto")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl px-8 py-4 text-base font-semibold font-sora transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #F5A320 0%, #D4891A 100%)",
                color: "#0B1628",
                boxShadow: "0 0 30px rgba(245,163,32,0.4)",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L0 24l6.338-1.502A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.587-.5-5.082-1.37l-.363-.214-3.763.893.944-3.659-.236-.376A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Agendar reunión por WhatsApp
            </a>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 rounded-xl border px-8 py-4 text-base font-semibold font-sora transition-all duration-200 hover:scale-105"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                color: "white",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(245,163,32,0.5)";
                e.currentTarget.style.backgroundColor = "rgba(245,163,32,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {SITE_CONFIG.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
