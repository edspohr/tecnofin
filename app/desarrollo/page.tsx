import { Metadata } from "next";
import DesarrolloClient from "./DesarrolloClient";

export const metadata: Metadata = {
  title: "Desarrollo de Software Financiero a Medida | Tecnofin Ecuador",
  description:
    "Desarrollamos soluciones tecnológicas para fintech, transporte y automatización. Low-code + IA. Implementaciones más rápidas y económicas para tu institución.",
};

export default function DesarrolloPage() {
  return <DesarrolloClient />;
}
