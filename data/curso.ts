import type { Modulo, Plataforma, PlanStep } from "@/types";

export const MODULOS: Modulo[] = [
  { n: "01", title: "Elige tu nicho rentable", desc: "Finanzas, cripto, tech, lifestyle. Cómo encontrar el nicho que combina tu interés con demanda real de mercado." },
  { n: "02", title: "Configura tus perfiles", desc: "Bio optimizada, foto de perfil, links en bio, y la estrategia de nombre de usuario que posiciona en buscadores." },
  { n: "03", title: "Crea contenido que vende", desc: "Estructura de video viral, hooks que detienen el scroll, y cómo insertar tus links de ganancias de forma natural." },
  { n: "04", title: "Estrategia de publicación", desc: "Horarios óptimos, frecuencia ideal, y cómo reutilizar 1 video en TikTok, YouTube Shorts, Instagram y Facebook." },
  { n: "05", title: "Monetización con referidos", desc: "Cómo estructurar tus links, usar Linktree, y rastrear cuáles plataformas te generan más comisiones." },
  { n: "06", title: "Crece tu comunidad rápido", desc: "Colaboraciones, comentarios estratégicos, duetos en TikTok y cómo usar tendencias sin perder tu identidad." },
  { n: "07", title: "Brand deals y patrocinios", desc: "Cómo contactar marcas, cuánto cobrar según tus seguidores, y cómo crear tu media kit profesional." },
  { n: "08", title: "Escala a ingreso de tiempo completo", desc: "Automatización con IA, delegación, creación de tu propio curso o comunidad de pago. El siguiente nivel." },
];

export const PLATAFORMAS: Plataforma[] = [
  { name: "TikTok", earn: "$200-$2,000/mes" },
  { name: "YouTube Shorts", earn: "$100-$1,500/mes" },
  { name: "Instagram Reels", earn: "$150-$1,200/mes" },
  { name: "Facebook", earn: "$50-$800/mes" },
  { name: "Telegram Canal", earn: "$100-$3,000/mes" },
  { name: "WhatsApp Status", earn: "$50-$500/mes" },
];

export const PLAN_90: PlanStep[] = [
  { n: 1, t: "Días 1 al 10: Configura todo", d: "Perfiles activos, bonos reclamados y primeros 3 videos publicados." },
  { n: 2, t: "Días 11 al 30: Consistencia diaria", d: "1 video por día. Analiza qué formato tiene más vistas y doble apuesta en ese estilo." },
  { n: 3, t: "Días 31 al 60: Optimizar y crecer", d: "Colabora con otros creadores, responde comentarios, usa IA para acelerar la producción." },
  { n: 4, t: "Días 61 al 90: Monetización activa", d: "Ya tienes audiencia. Activa AdSense, busca brand deals y tus referidos ya generan ingresos pasivos." },
];