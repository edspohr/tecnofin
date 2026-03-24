"use client";

import { useMemo } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/config";

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L0 24l6.338-1.502A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.587-.5-5.082-1.37l-.363-.214-3.763.893.944-3.659-.236-.376A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

interface SliderProps {
  label: string;
  name: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (val: number) => void;
  format?: (val: number) => string;
  unit?: string;
}

function Slider({ label, name, min, max, step, value, onChange, format, unit }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  const display = format ? format(value) : `${value}${unit || ""}`;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <label className="text-sm font-medium" style={{ color: "#B0BEC5" }}>{label}</label>
        <span className="font-sora rounded-lg border px-3 py-1 text-sm font-bold" style={{ color: "#F5A320", borderColor: "rgba(245,163,32,0.25)", backgroundColor: "rgba(245,163,32,0.07)" }}>
          {display}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          id={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full cursor-pointer appearance-none rounded-full"
          style={{
            height: "6px",
            background: `linear-gradient(to right, #F5A320 0%, #F5A320 ${pct}%, rgba(255,255,255,0.12) ${pct}%, rgba(255,255,255,0.12) 100%)`,
            outline: "none",
          }}
        />
        <style>{`
          input[type='range']::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #F5A320;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(245,163,32,0.4);
            border: 2px solid #0B1628;
          }
          input[type='range']::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #F5A320;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(245,163,32,0.4);
            border: 2px solid #0B1628;
          }
        `}</style>
        <div className="mt-1 flex justify-between text-xs" style={{ color: "rgba(176,190,197,0.4)" }}>
          <span>{format ? format(min) : `${min}${unit || ""}`}</span>
          <span>{format ? format(max) : `${max}${unit || ""}`}</span>
        </div>
      </div>
    </div>
  );
}

const fmt = (n: number) =>
  new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CalculadoraClient() {
  const [solicitudes, setSolicitudes] = useState(200);
  const [tiempoEval, setTiempoEval] = useState(2);
  const [costoHora, setCostoHora] = useState(12);
  const [pctErrores, setPctErrores] = useState(8);

  const COSTO_ERROR = 45;

  const calc = useMemo(() => {
    const costoActual = solicitudes * tiempoEval * costoHora;
    const ahorroOperativo = costoActual * 0.4;
    const costoConCartera = costoActual * 0.6;
    const erroresEvitados = solicitudes * (pctErrores / 100) * 0.3;
    const ahorroErrores = erroresEvitados * COSTO_ERROR;
    const ahorroTotal = ahorroOperativo + ahorroErrores;
    const ahorroAnual = ahorroTotal * 12;
    return { costoActual, ahorroOperativo, costoConCartera, ahorroErrores, ahorroTotal, ahorroAnual };
  }, [solicitudes, tiempoEval, costoHora, pctErrores]);

  const barMax = calc.costoActual || 1;
  const pctActual = 100;
  const pctConCartera = (calc.costoConCartera / barMax) * 100;

  const waMsg = encodeURIComponent(
    `Hola, calculé un ahorro potencial de ${fmt(calc.ahorroTotal)} por mes con Cartera 365 y quiero validarlo con su equipo`
  );
  const waUrl = `${SITE_CONFIG.whatsapp.base}?text=${waMsg}`;

  return (
    <main style={{ backgroundColor: "#0B1628", color: "white" }}>
      {/* ── HERO ── */}
      <section
        className="circuit-bg relative flex min-h-[45vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
        style={{ backgroundColor: "#0B1628" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(245,163,32,0.05) 0%, transparent 70%)" }}
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
            Estimación basada en casos reales de clientes Tecnofin
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-sora mb-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            ¿Cuánto podrías <span className="text-gradient-gold">ahorrar</span> con Cartera 365?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl leading-relaxed"
            style={{ color: "#B0BEC5" }}
          >
            Ajusta los parámetros de tu operación y calcula el impacto económico en tiempo real.
          </motion.p>
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section className="section-padding px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Inputs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-3xl border p-8"
              style={{ backgroundColor: "#112240", borderColor: "rgba(255,255,255,0.1)" }}
            >
              <h2 className="font-sora mb-7 text-xl font-bold">Parámetros de tu operación</h2>

              <div className="space-y-8">
                <Slider
                  label="Solicitudes de crédito por mes"
                  name="solicitudes"
                  min={50}
                  max={2000}
                  step={10}
                  value={solicitudes}
                  onChange={setSolicitudes}
                  unit=" solicitudes"
                />

                <Slider
                  label="Tiempo promedio de evaluación por solicitud"
                  name="tiempoEval"
                  min={0.5}
                  max={8}
                  step={0.5}
                  value={tiempoEval}
                  onChange={setTiempoEval}
                  format={(v) => `${v} ${v === 1 ? "hora" : "horas"}`}
                />

                <Slider
                  label="Costo hora del equipo de crédito"
                  name="costoHora"
                  min={5}
                  max={50}
                  step={1}
                  value={costoHora}
                  onChange={setCostoHora}
                  format={(v) => `$${v}/h`}
                />

                <Slider
                  label="Porcentaje estimado de errores operativos"
                  name="pctErrores"
                  min={1}
                  max={20}
                  step={1}
                  value={pctErrores}
                  onChange={setPctErrores}
                  format={(v) => `${v}%`}
                />
              </div>

              {/* Assumptions note */}
              <div
                className="mt-8 rounded-xl border p-4 text-xs leading-relaxed"
                style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(0,0,0,0.2)", color: "rgba(176,190,197,0.6)" }}
              >
                <p className="mb-1 font-semibold" style={{ color: "rgba(176,190,197,0.8)" }}>Supuestos del cálculo:</p>
                <ul className="space-y-1">
                  <li>• Reducción de costos operativos: 40% (promedio en clientes)</li>
                  <li>• Reducción de errores: 30% de los errores actuales</li>
                  <li>• Costo promedio por error operativo: $45 USD</li>
                </ul>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 } } }}
              className="flex flex-col gap-6"
            >
              {/* Main savings number */}
              <div
                className="rounded-3xl border p-8 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(245,163,32,0.1) 0%, rgba(17,34,64,0.95) 100%)",
                  borderColor: "rgba(245,163,32,0.3)",
                }}
              >
                <p className="mb-2 text-sm font-medium uppercase tracking-widest" style={{ color: "#B0BEC5" }}>
                  Ahorro mensual estimado
                </p>
                <motion.p
                  key={calc.ahorroTotal}
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-sora text-5xl font-bold md:text-6xl text-gradient-gold"
                >
                  {fmt(calc.ahorroTotal)}
                </motion.p>
                <p className="mt-2 text-sm" style={{ color: "#B0BEC5" }}>por mes</p>

                <div
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl border px-4 py-3"
                  style={{ borderColor: "rgba(40,202,65,0.25)", backgroundColor: "rgba(40,202,65,0.06)" }}
                >
                  <span className="font-sora text-2xl font-bold" style={{ color: "#28CA41" }}>{fmt(calc.ahorroAnual)}</span>
                  <span className="text-sm" style={{ color: "#B0BEC5" }}>proyección anual</span>
                </div>
              </div>

              {/* Breakdown */}
              <div
                className="rounded-3xl border p-6"
                style={{ backgroundColor: "#112240", borderColor: "rgba(255,255,255,0.1)" }}
              >
                <h3 className="font-sora mb-5 font-semibold">Desglose del ahorro</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#B0BEC5" }}>Costo mensual actual</span>
                    <span className="font-semibold" style={{ color: "#ff6b6b" }}>{fmt(calc.costoActual)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#B0BEC5" }}>Ahorro en costos operativos (40%)</span>
                    <span className="font-semibold" style={{ color: "#28CA41" }}>+{fmt(calc.ahorroOperativo)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#B0BEC5" }}>Ahorro por reducción de errores (30%)</span>
                    <span className="font-semibold" style={{ color: "#28CA41" }}>+{fmt(calc.ahorroErrores)}</span>
                  </div>
                  <div
                    className="flex justify-between border-t pt-4 text-sm font-bold"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    <span>Costo mensual con Cartera 365</span>
                    <span style={{ color: "#F5A320" }}>{fmt(calc.costoConCartera)}</span>
                  </div>
                </div>
              </div>

              {/* Bar chart */}
              <div
                className="rounded-3xl border p-6"
                style={{ backgroundColor: "#112240", borderColor: "rgba(255,255,255,0.1)" }}
              >
                <h3 className="font-sora mb-5 font-semibold">Comparación visual</h3>
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex justify-between text-xs" style={{ color: "#B0BEC5" }}>
                      <span>Sin Cartera 365</span>
                      <span style={{ color: "#ff6b6b" }}>{fmt(calc.costoActual)}/mes</span>
                    </div>
                    <div className="h-8 overflow-hidden rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                      <motion.div
                        animate={{ width: `${pctActual}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #ff6b6b, #ff4757)" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex justify-between text-xs" style={{ color: "#B0BEC5" }}>
                      <span>Con Cartera 365</span>
                      <span style={{ color: "#28CA41" }}>{fmt(calc.costoConCartera)}/mes</span>
                    </div>
                    <div className="h-8 overflow-hidden rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
                      <motion.div
                        animate={{ width: `${pctConCartera}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #28CA41, #20b038)" }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="mt-4 flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-center"
                  style={{ borderColor: "rgba(245,163,32,0.2)", backgroundColor: "rgba(245,163,32,0.05)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A320" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: "#F5A320" }}>
                    {calc.costoActual > 0 ? Math.round((calc.ahorroTotal / calc.costoActual) * 100) : 0}% de ahorro total estimado
                  </span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div
                className="rounded-3xl border p-6 text-center"
                style={{
                  background: "linear-gradient(135deg, rgba(37,211,102,0.07) 0%, rgba(17,34,64,0.9) 100%)",
                  borderColor: "rgba(37,211,102,0.2)",
                }}
              >
                <p className="font-sora mb-2 font-bold">¿Los números te convencen?</p>
                <p className="mb-5 text-sm" style={{ color: "#B0BEC5" }}>
                  Valida esta estimación con nuestro equipo con datos reales de tu institución.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: "#25D366", color: "white" }}
                >
                  <WaIcon />
                  Validar mi ahorro de {fmt(calc.ahorroTotal)}/mes
                </a>
              </div>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-10 text-center text-xs"
            style={{ color: "rgba(176,190,197,0.5)" }}
          >
            Estimación referencial basada en casos de clientes Tecnofin. Los resultados reales pueden variar según la institución, el volumen de operaciones y los procesos existentes.
          </motion.p>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
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
            ¿Quieres ver <span className="text-gradient-gold">Cartera 365</span> en acción?
          </h2>
          <p className="mb-8 text-lg" style={{ color: "#B0BEC5" }}>
            Agenda una demo gratuita y te mostramos la plataforma con datos similares a los de tu institución.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="primary" href={waUrl} external size="lg">
              <WaIcon /> Quiero una demo
            </Button>
            <Button variant="ghost" href="/cartera-365" size="lg">
              Conocer Cartera 365 →
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
