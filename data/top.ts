import type { TopPlatform } from "@/types";

export const TOP_MONTH = "Agosto 2026";

export const TOP_PLATFORMS: TopPlatform[] = [
  {
    name: "Binance",
    score: 9.8,
    bonus: "Hasta $100 USDT",
    bestFor: "Principiantes y ingreso por referidos",
    why: "El exchange más grande del mundo (200M+ usuarios). Es la mejor puerta de entrada a cripto en Latinoamérica: compras con moneda local, retiras por P2P y su programa de referidos paga comisiones de por vida. Nuestra #1 indiscutible este mes.",
    pros: ["Mayor liquidez y seguridad del mercado", "Referidos con comisión de por vida", "Binance Earn: hasta 10% anual en staking"],
    cons: ["KYC obligatorio", "Tantas funciones que abruma al inicio"],
  },
  {
    name: "Bybit",
    score: 9.5,
    bonus: "Hasta $5,050 USDT",
    bestFor: "Trading de futuros y copy trading",
    why: "Top 3 mundial en derivados. Su CopyTrade te permite copiar operaciones de traders profesionales automáticamente: ideal si quieres operar sin experiencia. Los bonos de bienvenida de este mes son de los más altos del mercado.",
    pros: ["Copy trading de elite", "Bonos agresivos para cuentas nuevas", "App móvil excelente"],
    cons: ["Futuros = alto riesgo sin stop-loss", "No disponible en algunos países de la UE"],
  },
  {
    name: "Pionex",
    score: 9.3,
    bonus: "Hasta $10,000 USDT",
    bestFor: "Ingreso pasivo con bots automáticos",
    why: "16 bots de trading gratuitos que operan 24/7 por ti. El bot Grid Trading con $50 genera entre 1% y 5% mensual en mercados laterales, sin que toques la pantalla. La opción favorita de quien busca automatización total.",
    pros: ["Bots gratis incluidos", "Opera 24/7 sin experiencia", "Cuenta demo disponible"],
    cons: ["Menos monedas que Binance", "Requiere entender la configuración del grid"],
  },
  {
    name: "ElevenLabs",
    score: 9.2,
    bonus: "10,000 créditos gratis",
    bestFor: "Ganar con IA sin invertir",
    why: "La IA de voz más realista del mercado. Con los créditos gratis puedes crear tu portafolio y vender narración, doblaje y audiolibros desde $20 por proyecto. La herramienta de IA con retorno más rápido en 2026.",
    pros: ["Calidad de voz indistinguible de un humano", "Empiezas gratis con 10k créditos", "Mercado enorme de clientes potenciales"],
    cons: ["Los créditos gratis se agotan rápido", "Necesitas ofrecer el servicio activamente"],
  },
  {
    name: "CapCut",
    score: 9.0,
    bonus: "Pro gratis 7 días",
    bestFor: "Creadores de contenido y referidos en redes",
    why: "El editor detrás del 90% de los videos virales de TikTok. Plantillas, subtítulos automáticos y efectos gratis. Combinado con tus links de referido en cada video, es la herramienta que convierte vistas en comisiones.",
    pros: ["Gratis y desde el móvil", "Subtítulos automáticos en español", "Plantillas virales listas para usar"],
    cons: ["La versión Pro es de pago tras la prueba", "Exportar en 4K requiere Pro"],
  },
];