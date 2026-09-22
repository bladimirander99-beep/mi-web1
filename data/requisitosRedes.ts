export interface Requisito {
  icono: string;
  name: string;
  detalle: string;
}

export interface FormaRed {
  emoji: string;
  name: string;
  facilidad: "alta" | "media" | "avanzada";
  comoFunciona: string;
  potencial: string;
}

export const REQUISITOS_REDES: Record<string, Requisito[]> = {
  YouTube: [
    { icono: "✅", name: "Edad", detalle: "+18 años o tutor legal." },
    { icono: "✅", name: "Verificación", detalle: "2 pasos activa en tu cuenta." },
    { icono: "✅", name: "Normas", detalle: "Sin strikes activos por incumplimiento." },
    { icono: "✅", name: "AdSense", detalle: "Cuenta vinculada y aprobada." },
    { icono: "⭐", name: "Nivel básico (acceso temprano)", detalle: "500 subs + 3,000 horas + 3 videos públicos." },
    { icono: "⭐", name: "Suscriptores completos", detalle: "1,000 suscriptores reales." },
    { icono: "⭐", name: "Horas de visualización", detalle: "4,000 horas públicas en los últimos 12 meses." },
    { icono: "⭐", name: "Alternativa Shorts", detalle: "1,000 subs + 10 millones de vistas de Shorts en 90 días." },
  ],
  TikTok: [
    { icono: "✅", name: "Edad", detalle: "+18 años (19 en Corea del Sur)." },
    { icono: "✅", name: "Normas", detalle: "Sin infracciones graves de normas comunitarias." },
    { icono: "✅", name: "País", detalle: "Residir en un país elegible para el programa." },
    { icono: "⭐", name: "Seguidores", detalle: "10,000 seguidores reales." },
    { icono: "⭐", name: "Visualizaciones", detalle: "100,000 reproducciones en los últimos 30 días." },
    { icono: "⭐", name: "Contenido", detalle: "Videos originales de +1 minuto para recompensas máximas." },
  ],
  Facebook: [
    { icono: "✅", name: "Edad", detalle: "+18 años." },
    { icono: "✅", name: "Normas", detalle: "Políticas de monetización para socios + normas comunitarias." },
    { icono: "✅", name: "País", detalle: "País admitido por Meta." },
    { icono: "✅", name: "Reels", detalle: "Mínimo 10 segundos de duración." },
    { icono: "⭐", name: "Seguidores", detalle: "5,000 para anuncios in-stream." },
    { icono: "⭐", name: "Minutos vistos", detalle: "60,000 minutos en los últimos 60 días." },
    { icono: "⭐", name: "Videos activos", detalle: "Mínimo 5 videos publicados." },
    { icono: "⭐", name: "Nivel avanzado", detalle: "10,000 seguidores + 600,000 minutos." },
  ],
  Instagram: [
    { icono: "✅", name: "Normas", detalle: "Políticas de monetización de socios de Meta." },
    { icono: "✅", name: "País", detalle: "Funciones disponibles según región." },
    { icono: "✅", name: "Regalos en Reels", detalle: "Cuenta profesional + cumplir normas comunitarias." },
    { icono: "⭐", name: "Suscripciones", detalle: "+18 años, cuenta profesional, audiencia comprometida." },
    { icono: "⭐", name: "Contenido de marca", detalle: "Sin mínimo oficial; marcas piden desde 1,000-5,000 seguidores." },
    { icono: "⭐", name: "Bonos de Reels", detalle: "Solo por invitación de Meta (no hay solicitud abierta)." },
  ],
  "X (Twitter)": [
    { icono: "✅", name: "Edad", detalle: "+18 años." },
    { icono: "✅", name: "Normas", detalle: "Estándares de monetización para creadores de X." },
    { icono: "✅", name: "País", detalle: "País donde estén disponibles los programas." },
    { icono: "✅", name: "Perfil", detalle: "Completo con email verificado." },
    { icono: "⭐", name: "Suscripción", detalle: "Ser suscriptor de X Premium." },
    { icono: "⭐", name: "Seguidores verificados", detalle: "500 seguidores con X Premium." },
    { icono: "⭐", name: "Impresiones", detalle: "5 millones de impresiones orgánicas en 3 meses." },
  ],
  Snapchat: [
    { icono: "✅", name: "Edad", detalle: "+18 años." },
    { icono: "✅", name: "Normas", detalle: "Cumplir política de monetización de creadores." },
    { icono: "⭐", name: "Estado", detalle: "Ser Snap Star." },
    { icono: "⭐", name: "Spotlight View Time", detalle: "100 horas de vistas en Spotlight en 28 días para pago máximo." },
    { icono: "⭐", name: "Seguidores", detalle: "50,000 seguidores." },
    { icono: "⭐", name: "Tiempo de vistas", detalle: "15,000 horas de vistas en los últimos 28 días." },
    { icono: "⭐", name: "Vistas Spotlight", detalle: "Mínimo 3,000 horas de esas 15,000 deben ser de Spotlight." },
  ],
};

export const FORMAS_REDES: Record<string, FormaRed[]> = {
  YouTube: [
    { emoji: "📺", name: "Anuncios (AdSense)", facilidad: "alta", comoFunciona: "YouTube pone anuncios; cobras por cada 1,000 vistas (RPM $1-$10).", potencial: "$100-$5,000/mes" },
    { emoji: "👥", name: "Miembros del canal", facilidad: "alta", comoFunciona: "Suscriptores pagan mensual por contenido exclusivo y badges.", potencial: "$50-$2,000/mes" },
    { emoji: "💬", name: "Super Chat y Stickers", facilidad: "alta", comoFunciona: "Tu audiencia paga en lives para destacar mensajes.", potencial: "$20-$500/live" },
    { emoji: "🛍️", name: "Estante de productos", facilidad: "alta", comoFunciona: "Vendes tu merch directo desde la página del video.", potencial: "Variable" },
    { emoji: "🔗", name: "Afiliados en descripción", facilidad: "alta", comoFunciona: "Links de afiliado; ganas comisión por cada compra.", potencial: "$50-$3,000/mes" },
    { emoji: "🤝", name: "Patrocinios de marcas", facilidad: "media", comoFunciona: "Marcas te pagan por mencionarlas en tus videos.", potencial: "$100-$10,000/video" },
    { emoji: "📚", name: "Cursos y productos propios", facilidad: "media", comoFunciona: "Vendes tu curso, ebook o servicio desde tu audiencia.", potencial: "$200-$20,000/mes" },
  ],
  TikTok: [
    { emoji: "🎬", name: "Programa de Recompensas", facilidad: "alta", comoFunciona: "TikTok paga por vistas de videos de +1 min (RPM $0.20-$1.00).", potencial: "$200-$2,000/mes" },
    { emoji: "🎁", name: "Regalos en LIVE", facilidad: "alta", comoFunciona: "Tu audiencia envía regalos virtuales que conviertes a dinero.", potencial: "$50-$1,000/live" },
    { emoji: "📋", name: "Serie (contenido premium)", facilidad: "alta", comoFunciona: "Cobras acceso a series exclusivas de videos.", potencial: "$20-$500/mes" },
    { emoji: "💡", name: "Efectos creativos", facilidad: "alta", comoFunciona: "Creas efectos/filtros; TikTok paga por uso.", potencial: "$100-$2,000/efecto" },
    { emoji: "📣", name: "TikTok Ads Affiliate", facilidad: "alta", comoFunciona: "Refieres negocios a TikTok Ads; ganas 20% de su inversión.", potencial: "$100-$3,000/mes" },
    { emoji: "🛒", name: "TikTok Shop", facilidad: "media", comoFunciona: "Vendes productos directamente desde tus videos y lives.", potencial: "$100-$10,000/mes" },
    { emoji: "🤝", name: "Creator Marketplace", facilidad: "media", comoFunciona: "Marcas te encuentran y pagan por contenido patrocinado.", potencial: "$50-$5,000/video" },
  ],
  Facebook: [
    { emoji: "📺", name: "Anuncios in-stream", facilidad: "alta", comoFunciona: "Facebook inserta anuncios en tus videos de +1 min.", potencial: "$100-$3,000/mes" },
    { emoji: "⭐", name: "Estrellas", facilidad: "alta", comoFunciona: "Tu audiencia envía estrellas en lives y Reels ($0.01/estrella).", potencial: "$20-$500/mes" },
    { emoji: "📋", name: "Suscripciones", facilidad: "alta", comoFunciona: "Fans pagan mensual por contenido exclusivo.", potencial: "$30-$800/mes" },
    { emoji: "🎮", name: "Juegos instantáneos", facilidad: "alta", comoFunciona: "Monetizas mini-juegos con anuncios intersticiales.", potencial: "$10-$200/mes" },
    { emoji: "🎬", name: "Bonos de Reels", facilidad: "media", comoFunciona: "Meta paga bonos por rendimiento de tus Reels (por invitación).", potencial: "$50-$1,500/mes" },
    { emoji: "🤝", name: "Colaboraciones de marca", facilidad: "media", comoFunciona: "Marcas pagan por menciones en tu página.", potencial: "$50-$3,000/post" },
    { emoji: "🛍️", name: "Tienda de Facebook", facilidad: "media", comoFunciona: "Vendes productos desde tu página sin salir de Facebook.", potencial: "Variable" },
  ],
  Instagram: [
    { emoji: "🎁", name: "Regalos en Reels", facilidad: "alta", comoFunciona: "Tu audiencia envía regalos virtuales en tus Reels.", potencial: "$20-$300/mes" },
    { emoji: "📋", name: "Suscripciones", facilidad: "alta", comoFunciona: "Fans pagan mensual por Stories, Reels y chats exclusivos.", potencial: "$30-$1,000/mes" },
    { emoji: "🔗", name: "Afiliados", facilidad: "alta", comoFunciona: "Compartes links de afiliado en bio y Stories.", potencial: "$30-$2,000/mes" },
    { emoji: "💰", name: "Bonos de Reels", facilidad: "media", comoFunciona: "Meta te paga por rendimiento (solo si te invitan).", potencial: "$50-$2,000/mes" },
    { emoji: "🤝", name: "Contenido de marca", facilidad: "media", comoFunciona: "Marcas pagan por posts, Reels y Stories patrocinados.", potencial: "$50-$5,000/post" },
    { emoji: "🛍️", name: "Instagram Shopping", facilidad: "media", comoFunciona: "Vendes productos etiquetados en tus fotos y Reels.", potencial: "Variable" },
    { emoji: "🎓", name: "Venta de cursos/servicios", facilidad: "media", comoFunciona: "Diriges tráfico a tu landing page desde tu bio.", potencial: "$100-$10,000/mes" },
  ],
  "X (Twitter)": [
    { emoji: "💰", name: "Reparto de ingresos por anuncios", facilidad: "alta", comoFunciona: "X comparte ingresos de anuncios en las respuestas a tus posts.", potencial: "$20-$2,000/mes" },
    { emoji: "📋", name: "Suscripciones", facilidad: "alta", comoFunciona: "Fans pagan mensual por contenido exclusivo.", potencial: "$20-$800/mes" },
    { emoji: "🎁", name: "Propinas (Tips)", facilidad: "alta", comoFunciona: "Tu audiencia envía dinero directo vía Stripe/PayPal.", potencial: "$10-$300/mes" },
    { emoji: "🔗", name: "Afiliados en hilos", facilidad: "alta", comoFunciona: "Hilos de valor con links de afiliado.", potencial: "$20-$1,500/mes" },
    { emoji: "🏠", name: "Spaces con tickets", facilidad: "alta", comoFunciona: "Cobras entrada a tus Spaces en vivo.", potencial: "$10-$500/evento" },
    { emoji: "🤝", name: "Posts patrocinados", facilidad: "media", comoFunciona: "Marcas pagan por tweets promocionales.", potencial: "$30-$3,000/tweet" },
    { emoji: "📚", name: "Venta de info-productos", facilidad: "media", comoFunciona: "Hilos que dirigen a tu curso/ebook/newsletter.", potencial: "$50-$5,000/mes" },
  ],
  Snapchat: [
    { emoji: "🌟", name: "Spotlight Rewards", facilidad: "alta", comoFunciona: "Snapchat paga por vistas de tus Snaps ($0.10-$0.30/1K vistas).", potencial: "$50-$2,000/mes" },
    { emoji: "🎁", name: "Gifts en Spotlight", facilidad: "alta", comoFunciona: "Tu audiencia envía regalos en tus Snaps.", potencial: "$10-$200/mes" },
    { emoji: "🔗", name: "Links de afiliado", facilidad: "alta", comoFunciona: "Compartes links en tus Stories y bio.", potencial: "$10-$500/mes" },
    { emoji: "📺", name: "Creator Midroll Ads", facilidad: "media", comoFunciona: "Anuncios insertados en tus Stories largas.", potencial: "$20-$500/mes" },
    { emoji: "🤝", name: "Contenido de marca", facilidad: "media", comoFunciona: "Marcas pagan por Snaps y Lenses patrocinados.", potencial: "$100-$5,000/campaña" },
    { emoji: "🎭", name: "Lenses personalizados", facilidad: "media", comoFunciona: "Creas filtros AR para marcas; cobran por diseño.", potencial: "$200-$3,000/lens" },
  ],
};

export const FACILIDAD_LABEL: Record<string, { chip: string; label: string }> = {
  alta: { chip: "rgba(34,197,94,0.12)", label: "⭐ Fácil" },
  media: { chip: "rgba(247,196,73,0.12)", label: "⭐⭐ Medio" },
  avanzada: { chip: "rgba(168,85,247,0.12)", label: "⭐⭐⭐ Avanzado" },
};