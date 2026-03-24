"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L0 24l6.338-1.502A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.587-.5-5.082-1.37l-.363-.214-3.763.893.944-3.659-.236-.376A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const inputClass =
  "w-full rounded-xl border bg-transparent px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-[#F5A320] placeholder:text-[rgba(176,190,197,0.5)]";
const inputStyle = {
  backgroundColor: "rgba(17,34,64,0.7)",
  borderColor: "rgba(255,255,255,0.12)",
  color: "white",
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactoClient() {
  const [form, setForm] = useState({
    nombre: "",
    institucion: "",
    pais: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde Tecnofin.ec — ${form.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nInstitución: ${form.institucion}\nPaís: ${form.pais}\n\nMensaje:\n${form.mensaje}`
    );
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main style={{ backgroundColor: "#0B1628", color: "white" }}>
      {/* ── HEADER ── */}
      <section
        className="circuit-bg relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
        style={{ backgroundColor: "#0B1628" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,212,255,0.04) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
            style={{ borderColor: "rgba(245,163,32,0.35)", backgroundColor: "rgba(245,163,32,0.07)", color: "#F7B84B" }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#F5A320", boxShadow: "0 0 8px #F5A320" }} />
            Respuesta en menos de 24 horas hábiles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sora mb-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Hablemos de{" "}
            <span className="text-gradient-gold">tu proyecto</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl leading-relaxed"
            style={{ color: "#B0BEC5" }}
          >
            Escríbenos por WhatsApp o completa el formulario. Edison revisa personalmente cada mensaje.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTACT CONTENT ── */}
      <section className="section-padding px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: WhatsApp + badges */}
            <div className="space-y-6">
              {/* Primary WhatsApp card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-3xl border p-8"
                style={{
                  background: "linear-gradient(135deg, rgba(37,211,102,0.08) 0%, rgba(17,34,64,0.95) 100%)",
                  borderColor: "rgba(37,211,102,0.25)",
                }}
              >
                <div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "rgba(37,211,102,0.12)", color: "#25D366" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L0 24l6.338-1.502A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.587-.5-5.082-1.37l-.363-.214-3.763.893.944-3.659-.236-.376A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </div>

                <h2 className="font-sora mb-2 text-2xl font-bold">La forma más rápida</h2>
                <p className="mb-5 text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>
                  Edison responde personalmente cada mensaje de WhatsApp. Sin bots, sin scripts — una conversación real con quien conoce el sector.
                </p>

                <div className="mb-6 flex items-center gap-3 rounded-xl border px-4 py-3" style={{ borderColor: "rgba(37,211,102,0.2)", backgroundColor: "rgba(37,211,102,0.05)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z" />
                  </svg>
                  <span className="font-mono text-sm font-semibold" style={{ color: "#25D366" }}>{SITE_CONFIG.phoneDisplay}</span>
                </div>

                <a
                  href={getWhatsAppUrl("contacto")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 font-sora text-base font-semibold transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: "#25D366", color: "white" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L0 24l6.338-1.502A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.587-.5-5.082-1.37l-.363-.214-3.763.893.944-3.659-.236-.376A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Escribir por WhatsApp
                </a>
              </motion.div>

              {/* Response badge */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}
                className="flex items-center gap-4 rounded-2xl border px-6 py-4"
                style={{ borderColor: "rgba(0,212,255,0.2)", backgroundColor: "rgba(0,212,255,0.04)" }}
              >
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(0,212,255,0.12)", color: "#00D4FF" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <p className="font-sora font-bold" style={{ color: "#00D4FF" }}>Menos de 24 horas hábiles</p>
                  <p className="text-xs" style={{ color: "#B0BEC5" }}>Tiempo promedio de respuesta a formularios y correos</p>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } } }}
                className="rounded-2xl border p-6"
                style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "#112240" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "rgba(10,102,194,0.15)", color: "#0A66C2" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-sora font-semibold">LinkedIn de Edison Saavedra</p>
                    <p className="text-xs" style={{ color: "#B0BEC5" }}>Perfil profesional y trayectoria completa</p>
                  </div>
                  <a
                    href={SITE_CONFIG.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border px-4 py-2 text-sm font-semibold transition-colors duration-200 hover:border-[#0A66C2] hover:text-[#0A66C2]"
                    style={{ borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    Ver perfil →
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } } }}
                className="flex items-center gap-4 rounded-2xl border p-6"
                style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "#112240" }}
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(245,163,32,0.1)", color: "#F5A320" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="font-sora font-semibold">Correo electrónico</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm transition-colors hover:text-[#F5A320]"
                    style={{ color: "#B0BEC5" }}
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Contact form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}
            >
              <div
                className="rounded-3xl border p-8"
                style={{ backgroundColor: "#112240", borderColor: "rgba(255,255,255,0.1)" }}
              >
                <h2 className="font-sora mb-2 text-2xl font-bold">Formulario de contacto</h2>
                <p className="mb-7 text-sm" style={{ color: "#B0BEC5" }}>
                  Completa el formulario y te respondemos en menos de 24 horas hábiles.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: "#B0BEC5" }}>
                      Nombre completo <span style={{ color: "#F5A320" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: "#B0BEC5" }}>
                      Institución
                    </label>
                    <input
                      type="text"
                      name="institucion"
                      placeholder="Nombre de tu cooperativa o empresa"
                      value={form.institucion}
                      onChange={handleChange}
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: "#B0BEC5" }}>
                      País
                    </label>
                    <select
                      name="pais"
                      value={form.pais}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, appearance: "none" }}
                    >
                      <option value="" style={{ backgroundColor: "#112240" }}>Selecciona tu país</option>
                      <option value="Ecuador" style={{ backgroundColor: "#112240" }}>Ecuador</option>
                      <option value="Colombia" style={{ backgroundColor: "#112240" }}>Colombia</option>
                      <option value="Venezuela" style={{ backgroundColor: "#112240" }}>Venezuela</option>
                      <option value="Otro" style={{ backgroundColor: "#112240" }}>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium" style={{ color: "#B0BEC5" }}>
                      Mensaje <span style={{ color: "#F5A320" }}>*</span>
                    </label>
                    <textarea
                      name="mensaje"
                      required
                      rows={5}
                      placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                      value={form.mensaje}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, resize: "vertical" }}
                    />
                  </div>

                  <Button variant="primary" type="submit" size="lg" className="w-full justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22 11 13 2 9l20-7z" />
                    </svg>
                    Enviar mensaje
                  </Button>

                  <p className="text-center text-xs" style={{ color: "rgba(176,190,197,0.6)" }}>
                    Al enviar abrirá tu cliente de correo electrónico con el mensaje listo.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
