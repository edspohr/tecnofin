import { Metadata } from "next";
import CalculadoraClient from "./CalculadoraClient";

export const metadata: Metadata = {
  title: "Calculadora de Ahorro ROI | Cartera 365 - Tecnofin",
  description:
    "Calcula cuánto podría ahorrar tu cooperativa con Cartera 365. Estimación gratuita basada en costos reales de gestión crediticia.",
};

export default function CalculadoraPage() {
  return <CalculadoraClient />;
}
