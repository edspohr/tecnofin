export const SITE_CONFIG = {
  name: "Tecnofin",
  tagline: "Entregamos soluciones de crédito para tus clientes",
  url: "https://tecnofin.ec",
  phone: "+593XXXXXXXXX",
  phoneDisplay: "+593 XX XXX XXXX",
  email: "info@tecnofin.ec",
  linkedin: "https://www.linkedin.com/in/edison-santiago-saavedra",
  whatsapp: {
    base: "https://wa.me/593XXXXXXXXX",
    messages: {
      home: "Hola%2C%20me%20interesa%20conocer%20las%20soluciones%20de%20Tecnofin%20para%20mi%20institución",
      cartera365: "Hola%2C%20quiero%20una%20demo%20de%20Cartera%20365%20para%20nuestra%20cooperativa",
      desarrollo: "Hola%2C%20tengo%20un%20proyecto%20de%20desarrollo%20a%20medida%20y%20quiero%20conversarlo%20con%20el%20equipo",
      nosotros: "Hola%2C%20me%20gustaría%20conocer%20más%20sobre%20Tecnofin%20y%20sus%20soluciones",
      contacto: "Hola%2C%20me%20gustaría%20contactarme%20con%20el%20equipo%20de%20Tecnofin",
      blog: "Hola%2C%20leí%20un%20artículo%20en%20el%20blog%20de%20Tecnofin%20y%20me%20gustaría%20más%20información",
      calculadora: "Hola%2C%20calculé%20mi%20ahorro%20potencial%20con%20Cartera%20365%20y%20quiero%20validarlo",
    },
  },
};

export function getWhatsAppUrl(context: keyof typeof SITE_CONFIG.whatsapp.messages = "home"): string {
  return `${SITE_CONFIG.whatsapp.base}?text=${SITE_CONFIG.whatsapp.messages[context]}`;
}
