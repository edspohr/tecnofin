"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterCardProps {
  value: string;
  isNumeric: boolean;
  numericTarget: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay: number;
}

function CounterCard({
  value,
  isNumeric,
  numericTarget,
  label,
  suffix = "",
  prefix = "",
  delay,
}: CounterCardProps) {
  const [displayed, setDisplayed] = useState(isNumeric ? 0 : value);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const step = Math.ceil(numericTarget / 40);
      const interval = setInterval(() => {
        start += step;
        if (start >= numericTarget) {
          setDisplayed(numericTarget);
          clearInterval(interval);
        } else {
          setDisplayed(start);
        }
      }, 40);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, isNumeric, numericTarget, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="card-dark p-8 text-center"
    >
      <p
        className="font-sora mb-2 text-5xl font-bold"
        style={{ color: "#F5A320" }}
      >
        {prefix}
        {isNumeric ? displayed : value}
        {suffix}
      </p>
      <p className="text-base" style={{ color: "#B0BEC5" }}>
        {label}
      </p>
    </motion.div>
  );
}

const testimonials = [
  {
    quote:
      "Cartera 365 transformó nuestra gestión crediticia. Lo que antes tomaba semanas, ahora lo hacemos en días. Nuestro equipo adoptó el sistema sin resistencia.",
    author: "Director de Crédito",
    org: "Cooperativa Andina, Ecuador",
  },
  {
    quote:
      "Edison y su equipo entendieron nuestra operación desde el primer día. La implementación fue rápida y el soporte ha sido excepcional.",
    author: "Gerente General",
    org: "Institución Financiera, Colombia",
  },
  {
    quote:
      "Redujimos nuestros errores operativos en más del 25% en el primer trimestre. Los reportes en tiempo real cambiaron la forma en que tomamos decisiones.",
    author: "Jefa de Sistemas",
    org: "Cooperativa del Sur, Ecuador",
  },
];

export default function ResultsSection() {
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
          className="mb-14 text-center"
        >
          <h2 className="font-sora mb-4 text-3xl font-bold md:text-4xl">
            Lo que logran{" "}
            <span className="text-gradient-gold">nuestros clientes</span>
          </h2>
        </motion.div>

        {/* Counters */}
        <div className="mb-14 grid gap-6 sm:grid-cols-3">
          <CounterCard
            value="40"
            isNumeric={true}
            numericTarget={40}
            label="Reducción en costos de desarrollo"
            prefix="-"
            suffix="%"
            delay={0.1}
          />
          <CounterCard
            value="30"
            isNumeric={true}
            numericTarget={30}
            label="Reducción de errores operativos"
            prefix="-"
            suffix="%"
            delay={0.2}
          />
          <CounterCard
            value="Semanas"
            isNumeric={false}
            numericTarget={0}
            label="Tiempo promedio de implementación"
            delay={0.3}
          />
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-dark flex flex-col p-8"
            >
              {/* Quote icon */}
              <div className="mb-4" style={{ color: "#F5A320", opacity: 0.6 }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.33C7.33 11.79 8.79 10 10 10V8zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.67C21.33 11.79 22.79 10 24 10V8z" />
                </svg>
              </div>

              <p className="mb-6 flex-1 text-sm leading-relaxed" style={{ color: "#B0BEC5" }}>
                {t.quote}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(245,163,32,0.3), rgba(245,163,32,0.1))",
                    border: "1px solid rgba(245,163,32,0.3)",
                  }}
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs" style={{ color: "#B0BEC5" }}>
                    {t.org}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
