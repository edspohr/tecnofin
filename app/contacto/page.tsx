import { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto | Tecnofin Ecuador",
  description:
    "Habla con el equipo de Tecnofin. Consulta sobre Cartera 365 o proyectos de desarrollo a medida. Respondemos en menos de 24 horas.",
};

export default function ContactoPage() {
  return <ContactoClient />;
}
