"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/config";

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L0 24l6.338-1.502A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.587-.5-5.082-1.37l-.363-.214-3.763.893.944-3.659-.236-.376A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const verticals = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M7 15h2M12 15h3" />
      </svg>
    ),
    label: "Fintech",
    tagline: "Infraestructura financiera de clase institucional",
    desc: "Plataformas de crédito, sistemas de pagos, wallets digitales, gestión de riesgos, cumplimiento regulatorio. Experiencia en cooperativas, financieras y entidades bancarias en Ecuador, Colombia y Venezuela.",
    color: "#00D4FF",
    items: ["Plataformas de crédito", "Sistemas de pagos", "Wallets digitales", "Gestión de riesgos", "Cumplimiento regulatorio"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="1" y="11" width="22" height="6" rx="2" />
        <path d="M6 11V7a2 2 0 012-2h8a2 2 0 012 2v4" />
        <circle cx="6" cy="17" r="2" />
        <circle cx="18" cy="17" r="2" />
      </svg>
    ),
    label: "Transporte",
    tagline: "Tecnología para mover el mundo con eficiencia",
    desc: "Sistemas de gestión de flotas, plataformas de logistics, control de rutas y despacho, integración con GPS y telemática. Soluciones para empresas de transporte terrestre y logística regional.",
    color: "#F5A320",
    items: ["Gestión de flotas", "Plataformas logistics", "Control de rutas y despacho", "Integración GPS y telemática", "Logística regional"],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2a7 7 0 017 7c0 3.5-2 5.5-7 11C7 20.5 5 18.5 5 9a7 7 0 017-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    label: "Automatización Empresarial con IA",
    tagline: "Operaciones más inteligentes, equipos más enfocados",
    desc: "Workflows inteligentes, procesamiento automático de documentos, chatbots especializados, análisis predictivo y reportería automatizada. Reducimos la carga operativa sin eliminar el control humano.",
    color: "#28CA41",
    items: ["Workflows inteligentes", "Procesamiento automático de documentos", "Chatbots especializados", "Análisis predictivo", "Reportería automatizada"],
  },
];

const methodologyPoints = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Low-code como acelerador real",
    desc: "Usamos plataformas low-code estratégicamente para reducir tiempo en componentes estándar, liberando a nuestros desarrolladores senior para lo que realmente importa: la lógica de negocio y las integraciones complejas.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "IA para generar código y pruebas",
    desc: "Integramos inteligencia artificial en nuestro flujo de desarrollo: generación de código repetitivo, pruebas automatizadas y revisión de calidad. El resultado: más velocidad sin comprometer la robustez.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="3" y="13" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
      </svg>
    ),
    title: "Sprints cortos con demos semanales",
    desc: "Cada semana ves progreso real. Nuestros ciclos de desarrollo cortos garantizan que el producto evolucione en la dirección correcta y que puedas dar feedback antes de que el costo de cambio sea alto.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Equipo senior, no juniors aprendiendo",
    desc: "Tu proyecto no es un campo de entrenamiento. Cada persona que trabaja en tu solución tiene experiencia comprobada en el dominio financiero o tecnológico relevante.",
  },
];

const processPhases = [
  {
    phase: "01",
    title: "Discovery",
    duration: "1–2 semanas",
    desc: "Entendemos tu negocio, tu arquitectura actual y los resultados que necesitas. Definimos el alcance real, no el alcance optimista.",
    color: "#00D4FF",
  },
  {
    phase: "02",
    title: "Diseño",
    duration: "1–2 semanas",
    desc: "Arquitectura técnica, flujos de usuario y prototipo navegable. Validas antes de construir, eliminando sorpresas costosas.",
    color: "#F5A320",
  },
  {
    phase: "03",
    title: "Desarrollo",
    duration: "4–12 semanas",
    desc: "Sprints cortos con demos semanales. Código limpio, documentado y con pruebas automatizadas integradas al proceso.",
    color: "#28CA41",
  },
  {
    phase: "04",
    title: "Entrega",
    duration: "1–2 semanas",
    desc: "Despliegue en producción, capacitación del equipo y soporte en el arranque. Cerramos el proyecto cuando el sistema está funcionando.",
    color: "#F5A320",
  },
];

const aiSavings = [
  { reduction: "−30%", label: "tiempo de desarrollo", detail: "Generación automática de código repetitivo y scaffolding" },
  { reduction: "−40%", label: "bugs en producción", detail: "Testing automatizado con IA integrado al pipeline" },
  { reduction: "−25%", label: "tiempo en entregables", detail: "Documentación técnica generada automáticamente" },
  { reduction: "2×", label: "velocidad de prototipado", detail: "Validación con usuarios antes de construir la versión final" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DesarrolloClient() {
  return (
    <main style={{ backgroundColor: "#0B1628", color: "white" }}>
      {/* ── HERO ── */}
      <section
        className="circuit-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-28 text-center"
        style={{ backgroundColor: "#0B1628" }}
      >
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
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(245,163,32,0.04) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
            style={{ borderColor: "rgba(0,212,255,0.3)", backgroundColor: "rgba(0,212,255,0.06)", color: "#00D4FF" }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#00D4FF", boxShadow: "0 0 8px #00D4FF" }} />
            Desarrollo de software financiero a medida
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sora mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Soluciones tecnológicas a tu medida,{" "}
            <span className="text-gradient-gold">con IA desde el primer día</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed"
            style={{ color: "#B0BEC5" }}
          >
            Construimos software financiero, de transporte y automatización empresarial que realmente funciona — con inteligencia artificial integrada al desarrollo para entregar más rápido y con mejor calidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button variant="primary" href={getWhatsAppUrl("desarrollo")} external size="lg">
              <WaIcon /> Conversemos sobre tu proyecto
            </Button>
            <Button variant="ghost" href="#verticals" size="lg">
              Ver áreas de expertise →
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── 3 VERTICALS ── */}
      <section id="verticals" className="section-padding mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
            Nuestras <span className="text-gradient-gold">áreas de expertise</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg" style={{ color: "#B0BEC5" }}>
            Tres verticales donde tenemos experiencia real y resultados comprobados.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {verticals.map((v, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } } }}
              className="card-dark flex flex-col p-7"
              style={{ borderColor: `${v.color}25` }}
            >
              <div
                className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${v.color}12`, color: v.color }}
              >
                {v.icon}
              </div>
              <h3 className="font-sora mb-1 text-xl font-bold">{v.label}</h3>
              <p className="mb-4 text-sm font-medium" style={{ color: v.color }}>{v.tagline}</p>
              <p className="mb-5 text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>{v.desc}</p>
              <ul className="mt-auto space-y-2">
                {v.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: v.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="section-padding px-4" style={{ backgroundColor: "#0d1e38" }}>
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-14 text-center"
          >
            <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
              Nuestra metodología:{" "}
              <span className="text-gradient-gold">velocidad sin sacrificar calidad</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg" style={{ color: "#B0BEC5" }}>
              Combinamos las mejores herramientas del mercado con experiencia sectorial para entregar software que funciona en producción, no solo en demos.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {methodologyPoints.map((point, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } } }}
                className="flex gap-5 rounded-2xl border p-6"
                style={{ backgroundColor: "#112240", borderColor: "rgba(255,255,255,0.09)" }}
              >
                <div
                  className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(0,212,255,0.1)", color: "#00D4FF" }}
                >
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-sora mb-2 font-semibold">{point.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS TIMELINE ── */}
      <section className="section-padding mx-auto max-w-5xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
            De la idea al <span className="text-gradient-gold">sistema en producción</span>
          </h2>
          <p style={{ color: "#B0BEC5" }}>Un proceso claro, sin ambigüedades, con entregables definidos en cada etapa.</p>
        </motion.div>

        <div className="relative grid gap-6 md:grid-cols-4">
          {/* Connector line */}
          <div
            className="absolute left-0 right-0 top-8 hidden h-px md:block"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(245,163,32,0.3) 20%, rgba(245,163,32,0.3) 80%, transparent 100%)" }}
          />

          {processPhases.map((phase, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.12 } } }}
              className="relative"
            >
              {/* Phase number */}
              <div
                className="relative z-10 mb-5 flex h-16 w-16 items-center justify-center rounded-2xl font-sora text-2xl font-bold"
                style={{ backgroundColor: phase.color === "#00D4FF" ? "rgba(0,212,255,0.12)" : phase.color === "#F5A320" ? "rgba(245,163,32,0.12)" : "rgba(40,202,65,0.12)", color: phase.color, boxShadow: `0 0 24px ${phase.color}20` }}
              >
                {phase.phase}
              </div>
              <h3 className="font-sora mb-1 text-lg font-bold">{phase.title}</h3>
              <p className="mb-3 text-sm font-medium" style={{ color: phase.color }}>{phase.duration}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHY AI REDUCES COST ── */}
      <section className="section-padding px-4" style={{ backgroundColor: "#0d1e38" }}>
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-14 text-center"
          >
            <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
              Por qué la IA reduce{" "}
              <span className="text-gradient-gold">tu costo de desarrollo</span>
            </h2>
            <p className="mx-auto max-w-2xl" style={{ color: "#B0BEC5" }}>
              No usamos IA como buzzword. La tenemos integrada en cada paso de nuestro proceso con impacto medible.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {aiSavings.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, x: i % 2 === 0 ? -32 : 32 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55, delay: i * 0.1 } } }}
                className="flex items-start gap-5 rounded-2xl border p-6"
                style={{ backgroundColor: "#112240", borderColor: "rgba(245,163,32,0.15)" }}
              >
                <div className="flex-shrink-0">
                  <span className="font-sora text-3xl font-bold text-gradient-gold">{item.reduction}</span>
                </div>
                <div>
                  <p className="font-sora mb-1 font-semibold">{item.label}</p>
                  <p className="text-sm" style={{ color: "#B0BEC5" }}>{item.detail}</p>
                </div>
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
          style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(17,34,64,0.9) 100%)", borderColor: "rgba(0,212,255,0.2)" }}
        >
          <h2 className="font-sora mb-3 text-3xl font-bold md:text-4xl">
            Conversemos sobre{" "}
            <span className="text-gradient-gold">tu proyecto</span>
          </h2>
          <p className="mb-8 text-lg" style={{ color: "#B0BEC5" }}>
            Cuéntanos qué necesitas construir. En 30 minutos te damos una evaluación honesta de alcance, tiempo y costo — sin compromiso.
          </p>
          <Button variant="primary" href={getWhatsAppUrl("desarrollo")} external size="lg">
            <WaIcon /> Iniciar conversación
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
