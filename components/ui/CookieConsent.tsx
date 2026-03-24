"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("tecnofin_cookie_consent");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(!consent);
  }, []);

  const accept = () => {
    localStorage.setItem("tecnofin_cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("tecnofin_cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 md:left-auto md:right-24 md:max-w-sm z-40 bg-[#112240] border border-white/20 rounded-2xl p-5 shadow-2xl">
      <p className="text-white text-sm font-semibold mb-1">Usamos cookies</p>
      <p className="text-[#B0BEC5] text-xs leading-relaxed mb-4">
        Utilizamos cookies para mejorar tu experiencia y analizar el uso del sitio. Puedes aceptar o rechazar el uso de cookies no esenciales.
      </p>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 bg-[#F5A320] hover:bg-[#D4891A] text-[#0B1628] text-xs font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Aceptar
        </button>
        <button
          onClick={decline}
          className="flex-1 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
