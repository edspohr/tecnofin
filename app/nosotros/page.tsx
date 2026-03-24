import { Metadata } from "next";
import NosotrosClient from "./NosotrosClient";
import PersonSchema from "@/components/seo/PersonSchema";

export const metadata: Metadata = {
  title: "Nosotros | Tecnofin - 30 Años en Tecnología Financiera",
  description:
    "Edison Santiago Saavedra y el equipo de Tecnofin: 30+ años de experiencia en software financiero. Fundadores de Cartera 365. Ecuador, Colombia, Venezuela.",
};

export default function NosotrosPage() {
  return (
    <>
      <PersonSchema />
      <NosotrosClient />
    </>
  );
}
