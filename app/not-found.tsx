import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export default function NotFound() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: "#0B1628", color: "white" }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 40%, rgba(245,163,32,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* 404 number */}
        <p
          className="font-sora mb-2 text-9xl font-extrabold leading-none tracking-tighter md:text-[180px] text-gradient-gold"
        >
          404
        </p>

        <h1 className="font-sora mb-4 text-2xl font-bold md:text-3xl">
          Página no encontrada
        </h1>

        <p
          className="mx-auto mb-10 max-w-md text-base leading-relaxed"
          style={{ color: "#B0BEC5" }}
        >
          La página que buscas no existe o fue movida. Regresa al inicio o contáctanos directamente.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F5A320] px-8 py-4 font-sora text-base font-semibold text-[#0B1628] transition-all duration-200 hover:scale-105 hover:bg-[#D4891A] gold-glow"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 12L12 3l9 9" />
              <path d="M9 21V12h6v9" />
              <path d="M3 12h18" strokeOpacity={0} />
            </svg>
            Volver al inicio
          </Link>

          <a
            href={getWhatsAppUrl("home")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border px-8 py-4 font-sora text-base font-semibold transition-all duration-200 hover:border-[rgba(245,163,32,0.6)] hover:bg-white/[0.04]"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.523 5.847L0 24l6.338-1.502A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.587-.5-5.082-1.37l-.363-.214-3.763.893.944-3.659-.236-.376A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
