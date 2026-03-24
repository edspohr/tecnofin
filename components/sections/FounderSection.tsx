"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "1990", label: "Inicio carrera" },
  { year: "2000", label: "Diners Club" },
  { year: "2008", label: "CFN" },
  { year: "2016", label: "LATAM" },
  { year: "2022", label: "Tecnofin" },
];

const credentials = [
  "MIT Sloan",
  "MBA Monterrey",
  "ITIL",
  "Scrum",
  "CFN",
  "Diners Club",
];

export default function FounderSection() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "#0B1628" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Photo / visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Photo placeholder */}
            {/* TODO: Replace with real photo */}
            <div
              className="relative mb-8 flex h-72 w-72 items-center justify-center overflow-hidden rounded-3xl md:h-80 md:w-80"
              style={{
                background:
                  "linear-gradient(135deg, #112240 0%, #1a2f52 50%, #112240 100%)",
                border: "2px solid rgba(245,163,32,0.2)",
                boxShadow: "0 0 40px rgba(245,163,32,0.08)",
              }}
            >
              {/* Geometric background decoration */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(245,163,32,0.1) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,212,255,0.06) 0%, transparent 50%)",
                }}
              />
              {/* Initials */}
              <span
                className="font-sora relative z-10 text-5xl font-bold"
                style={{ color: "#F5A320" }}
              >
                ES
              </span>
              {/* Decorative circle */}
              <div
                className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full opacity-20"
                style={{
                  background: "linear-gradient(135deg, #F5A320, #D4891A)",
                }}
              />
            </div>

            {/* Name & title */}
            <div className="text-center lg:text-left">
              <h3 className="font-sora mb-1 text-2xl font-bold text-white">
                Edison Santiago
              </h3>
              <p className="mb-6 text-sm font-medium" style={{ color: "#F5A320" }}>
                CEO & Fundador — Tecnofin
              </p>
            </div>

            {/* Timeline */}
            <div className="w-full overflow-x-auto pb-2">
              <div className="flex min-w-max items-center gap-0 lg:min-w-0">
                {timeline.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className="mb-2 flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold"
                        style={{
                          backgroundColor:
                            i === timeline.length - 1
                              ? "#F5A320"
                              : "rgba(245,163,32,0.15)",
                          color: i === timeline.length - 1 ? "#0B1628" : "#F5A320",
                          border: "1px solid rgba(245,163,32,0.3)",
                        }}
                      >
                        {item.year.slice(2)}
                      </div>
                      <p
                        className="text-center text-xs"
                        style={{ color: "#B0BEC5", maxWidth: "56px" }}
                      >
                        {item.year}
                      </p>
                      <p
                        className="text-center text-xs"
                        style={{ color: "rgba(176,190,197,0.6)", maxWidth: "56px" }}
                      >
                        {item.label}
                      </p>
                    </div>
                    {i < timeline.length - 1 && (
                      <div
                        className="mx-1 h-px w-8"
                        style={{ backgroundColor: "rgba(245,163,32,0.2)" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p
              className="font-sora mb-4 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#F5A320" }}
            >
              La historia detrás de Tecnofin
            </p>
            <h2 className="font-sora mb-8 text-3xl font-bold text-white md:text-4xl">
              Por qué fundé Tecnofin
            </h2>

            <div className="space-y-5 text-base leading-relaxed" style={{ color: "#B0BEC5" }}>
              <p>
                Pasé más de 30 años dentro de las instituciones financieras más importantes del
                Ecuador y LATAM. En Grupo Popular, en Diners Club, en la CFN. Vi de primera mano
                cómo el software obsoleto ralentizaba las decisiones, cómo las implementaciones
                eternas consumían recursos, cómo los errores operativos erosionaban la confianza
                de los socios.
              </p>
              <p>
                Cada vez que proponía una solución más ágil, más adaptable, me decían que era muy
                costosa o muy compleja. Que era para los bancos grandes. Que las cooperativas
                tenían que esperar.
              </p>
              <p>
                Decidí que eso no tenía que ser así. Fundé Tecnofin para dar a las cooperativas e
                instituciones financieras medianas acceso a la misma calidad tecnológica que los
                grandes bancos — pero adaptada a su realidad, implementada en semanas, y con el
                respaldo de alguien que ha estado en su lugar.
              </p>
              <p
                className="font-sora text-lg font-semibold"
                style={{ color: "white" }}
              >
                No vendo tecnología. Entrego resultados.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-wider" style={{ color: "rgba(176,190,197,0.6)" }}>
                Credenciales y experiencia
              </p>
              <div className="flex flex-wrap gap-2">
                {credentials.map((cred) => (
                  <span
                    key={cred}
                    className="rounded-full border px-3 py-1 text-xs font-medium"
                    style={{
                      borderColor: "rgba(245,163,32,0.2)",
                      backgroundColor: "rgba(245,163,32,0.06)",
                      color: "#F7B84B",
                    }}
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
