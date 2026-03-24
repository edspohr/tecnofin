import { Metadata } from "next";
import Cartera365Client from "./Cartera365Client";

export const metadata: Metadata = {
  title: "Cartera 365 | Plataforma de Gestión Crediticia para Cooperativas Ecuador",
  description:
    "Cartera 365: plataforma completa de gestión de crédito diseñada para cooperativas en Ecuador. Reduce costos 40%, errores 30%. Implementación en semanas, no meses.",
};

export default function Cartera365Page() {
  return <Cartera365Client />;
}
