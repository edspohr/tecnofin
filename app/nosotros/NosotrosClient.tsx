"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L0 24l6.338-1.502A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.587-.5-5.082-1.37l-.363-.214-3.763.893.944-3.659-.236-.376A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const timelineEvents = [
  { year: "1990", label: "Inicio en tecnología de sistemas financieros" },
  { year: "2000", label: "Liderazgo en implementaciones para banca regional en LATAM" },
  { year: "2008", label: "Director de tecnología en POINTEC Business Solutions" },
  { year: "2016", label: "Experiencia en CFN y Diners Club Ecuador" },
  { year: "2022", label: "Fundación de Tecnofin" },
];

const values = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Resultados sobre promesas",
    desc: "Medimos nuestro éxito por el impacto en tu operación, no por las características del software que entregamos.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
    title: "Adaptabilidad",
    desc: "Cada institución es diferente. Empezamos escuchando, no vendiendo.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 10-16 0" />
      </svg>
    ),
    title: "Experiencia sectorial",
    desc: "30 años en el sector no son un número en un CV. Son la diferencia entre una solución que funciona y una que promete.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
      </svg>
    ),
    title: "Transparencia",
    desc: "Precios claros, cronogramas reales, comunicación directa. Sin sorpresas.",
  },
];

const countries = [
  { flag: "🇪🇨", name: "Ecuador", desc: "Sede principal. Servimos a cooperativas de ahorro y crédito en todo el territorio nacional." },
  { flag: "🇨🇴", name: "Colombia", desc: "Implementaciones en entidades financieras regionales y cooperativas del sector solidario." },
  { flag: "🇻🇪", name: "Venezuela", desc: "Proyectos de transformación digital en instituciones bancarias y financieras." },
];

const certifications = [
  { label: "MIT Sloan Executive Education", icon: "🎓" },
  { label: "MBA Tecnológico de Monterrey", icon: "🏫" },
  { label: "ITIL Foundation", icon: "📋" },
  { label: "Scrum Master Certified", icon: "⚡" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function NosotrosClient() {
  return (
    <main style={{ backgroundColor: "#0B1628", color: "white" }}>
      {/* ── HERO ── */}
      <section
        className="circuit-bg relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-28 text-center"
        style={{ backgroundColor: "#0B1628" }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,212,255,0.04) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
            style={{ borderColor: "rgba(245,163,32,0.35)", backgroundColor: "rgba(245,163,32,0.07)", color: "#F7B84B" }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#F5A320", boxShadow: "0 0 8px #F5A320" }} />
            Fundada en 2022 · 30+ años de experiencia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sora mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            La experiencia que{" "}
            <span className="text-gradient-gold">hace la diferencia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl leading-relaxed"
            style={{ color: "#B0BEC5" }}
          >
            Tecnofin nació de décadas en el sector financiero ecuatoriano. Conocemos los problemas porque los hemos vivido desde adentro.
          </motion.p>
        </div>
      </section>

      {/* ── EDISON BIO ── */}
      <section className="section-padding px-4" style={{ backgroundColor: "#0d1e38" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid items-start gap-12 md:grid-cols-5">
            {/* Photo placeholder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}
              className="md:col-span-2"
            >
              <div
                className="relative mx-auto flex max-w-xs flex-col items-center overflow-hidden rounded-3xl border"
                style={{ backgroundColor: "#112240", borderColor: "rgba(245,163,32,0.2)" }}
              >
                {/* Avatar placeholder */}
                <div
                  className="flex w-full items-center justify-center"
                  style={{ height: "320px", background: "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(245,163,32,0.08) 100%)" }}
                >
                  <div className="text-center">
                    <div
                      className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(245,163,32,0.12)", border: "2px solid rgba(245,163,32,0.3)" }}
                    >
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#F5A320" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <p className="font-sora text-sm font-semibold" style={{ color: "#F5A320" }}>Edison S. Saavedra</p>
                    <p className="text-xs" style={{ color: "#B0BEC5" }}>Fundador & CEO</p>
                  </div>
                </div>

                {/* Credentials under photo */}
                <div className="w-full border-t p-5" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <div className="space-y-2 text-xs" style={{ color: "#B0BEC5" }}>
                    <div className="flex items-center gap-2">
                      <span style={{ color: "#F5A320" }}>▸</span> MIT Sloan Executive Education
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ color: "#F5A320" }}>▸</span> MBA Tec de Monterrey
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ color: "#F5A320" }}>▸</span> 30+ años en fintech LATAM
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}
              className="md:col-span-3"
            >
              <h2 className="font-sora mb-6 text-3xl font-bold">
                Edison Santiago Saavedra
              </h2>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#B0BEC5" }}>
                <p>
                  Edison Santiago Saavedra comenzó su carrera en tecnología financiera cuando los sistemas bancarios corrían en mainframes y los créditos se procesaban en papel. Más de tres décadas después, ha vivido desde adentro todas las transformaciones del sector: la digitalización, la era del internet, el mobile banking, y ahora la inteligencia artificial.
                </p>
                <p>
                  Durante más de 15 años en POINTEC Business Solutions, lideró implementaciones tecnológicas para algunas de las instituciones financieras más importantes de Colombia, Venezuela y Ecuador. Luego, en Grupo Popular, pasó una década más entendiendo cómo las grandes entidades gestionan el crédito a escala.
                </p>
                <p>
                  Su paso por Diners Club Ecuador y la Corporación Financiera Nacional (CFN) le dio una perspectiva única: vio cómo las instituciones más grandes del país invertían millones en tecnología que nunca terminaba de adaptarse a la realidad del negocio.
                </p>
                <p>
                  Edison se dio cuenta de que las cooperativas de ahorro y crédito — instituciones que sirven a millones de ecuatorianos — merecían acceso a la misma calidad tecnológica, pero sin los costos prohibitivos y los tiempos de implementación eternos.
                </p>
                <p>
                  En 2022, fundó Tecnofin con una misión clara:{" "}
                  <span style={{ color: "white", fontWeight: 500 }}>
                    entregar soluciones de crédito que realmente funcionen, que se implementen en semanas, y que evolucionen con el negocio del cliente.
                  </span>
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Button variant="primary" href={getWhatsAppUrl("nosotros")} external size="md">
                  <WaIcon /> Hablar con Edison
                </Button>
                <Button variant="ghost" href={SITE_CONFIG.linkedin} external size="md">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-padding mx-auto max-w-5xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
            Una trayectoria construida{" "}
            <span className="text-gradient-gold">año a año</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line on desktop */}
          <div
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 md:block"
            style={{ background: "linear-gradient(180deg, rgba(245,163,32,0.5) 0%, rgba(245,163,32,0.05) 100%)" }}
          />

          <div className="space-y-8">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
                className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div
                    className="rounded-2xl border p-5"
                    style={{ backgroundColor: "#112240", borderColor: "rgba(245,163,32,0.15)" }}
                  >
                    <span className="font-sora mb-1 block text-2xl font-bold text-gradient-gold">{event.year}</span>
                    <p className="text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>{event.label}</p>
                  </div>
                </div>
                {/* Center dot */}
                <div className="hidden w-2/12 justify-center md:flex">
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: "#F5A320", boxShadow: "0 0 16px rgba(245,163,32,0.5)" }}
                  />
                </div>
                <div className="hidden w-5/12 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-padding px-4" style={{ backgroundColor: "#0d1e38" }}>
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-12 text-center"
          >
            <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
              Cómo <span className="text-gradient-gold">trabajamos</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } } }}
                className="flex gap-5 rounded-2xl border p-6"
                style={{ backgroundColor: "#112240", borderColor: "rgba(245,163,32,0.12)" }}
              >
                <div
                  className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(245,163,32,0.1)", color: "#F5A320" }}
                >
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-sora mb-2 font-bold">{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GEOGRAPHIC PRESENCE ── */}
      <section className="section-padding mx-auto max-w-5xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
            Presencia <span className="text-gradient-gold">regional</span>
          </h2>
          <p style={{ color: "#B0BEC5" }}>Experiencia comprobada en tres países con realidades financieras distintas.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {countries.map((c, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.12 } } }}
              className="card-dark p-7 text-center"
            >
              <span className="mb-4 block text-5xl">{c.flag}</span>
              <h3 className="font-sora mb-3 text-xl font-bold">{c.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="section-padding px-4" style={{ backgroundColor: "#0d1e38" }}>
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-10 text-center"
          >
            <h2 className="font-sora mb-2 text-2xl font-bold md:text-3xl">
              Formación y <span className="text-gradient-gold">credenciales</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.08 } } }}
                className="flex items-center gap-3 rounded-xl border px-5 py-3"
                style={{ backgroundColor: "#112240", borderColor: "rgba(245,163,32,0.2)" }}
              >
                <span className="text-xl">{cert.icon}</span>
                <span className="font-sora text-sm font-semibold" style={{ color: "#F7B84B" }}>{cert.label}</span>
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
          <h2 className="font-sora mb-3 text-3xl font-bold md:text-4xl">
            ¿Quieres conocer{" "}
            <span className="text-gradient-gold">nuestras soluciones</span>?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "#B0BEC5" }}>
            Edison responde personalmente. Una conversación directa con quien lleva más de 30 años en el sector.
          </p>
          <Button variant="primary" href={getWhatsAppUrl("nosotros")} external size="lg">
            <WaIcon /> Hablar con el equipo
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
