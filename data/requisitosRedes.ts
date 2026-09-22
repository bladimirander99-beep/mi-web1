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

export const FACILIDAD_LABEL: Record<string, { chip: string; label: string }> = {
  alta: { chip: "rgba(34,197,94,0.12)", label: "⭐ Fácil" },
  media: { chip: "rgba(247,196,73,0.12)", label: "⭐⭐ Medio" },
  avanzada: { chip: "rgba(168,85,247,0.12)", label: "⭐⭐⭐ Avanzado" },
};

export const REQUISITOS_REDES: Record<string, Requisito[]> = {
  YouTube: [
    { icono: "✅", name: "Edad", detalle: "+18 años o tutor legal." },
    { icono: "✅", name: "Verificación", detalle: "2 pasos activa en tu cuenta." },
    { icono: "✅", name: "Normas", detalle: "Sin strikes activos." },
    { icono: "✅", name: "AdSense", detalle: "Cuenta vinculada y aprobada." },
    { icono: "⭐", name: "Nivel básico", detalle: "500 subs + 3,000 horas + 3 videos públicos." },
    { icono: "⭐", name: "Suscriptores", detalle: "1,000 suscriptores reales." },
    { icono: "⭐", name: "Horas", detalle: "4,000 horas públicas en 12 meses." },
    { icono: "⭐", name: "Alt. Shorts", detalle: "1,000 subs + 10M vistas Shorts en 90 días." },
  ],
  TikTok: [
    { icono: "✅", name: "Edad", detalle: "+18 años." },
    { icono: "✅", name: "Normas", detalle: "Sin infracciones graves." },
    { icono: "✅", name: "País", detalle: "País elegible para el programa." },
    { icono: "⭐", name: "Seguidores", detalle: "10,000 seguidores reales." },
    { icono: "⭐", name: "Visualizaciones", detalle: "100,000 reproducciones en 30 días." },
    { icono: "⭐", name: "Contenido", detalle: "Videos originales de +1 minuto." },
  ],
  Facebook: [
    { icono: "✅", name: "Edad", detalle: "+18 años." },
    { icono: "✅", name: "Normas", detalle: "Políticas de socios + normas comunitarias." },
    { icono: "✅", name: "País", detalle: "País admitido por Meta." },
    { icono: "✅", name: "Reels", detalle: "Mínimo 10 segundos de duración." },
    { icono: "⭐", name: "Seguidores", detalle: "5,000 para anuncios in-stream." },
    { icono: "⭐", name: "Minutos", detalle: "60,000 minutos en 60 días." },
    { icono: "⭐", name: "Videos", detalle: "Mínimo 5 videos publicados." },
    { icono: "⭐", name: "Avanzado", detalle: "10,000 seguidores + 600,000 minutos." },
  ],
  Instagram: [
    { icono: "✅", name: "Normas", detalle: "Políticas de socios de Meta." },
    { icono: "✅", name: "País", detalle: "Funciones según región." },
    { icono: "✅", name: "Regalos", detalle: "Cuenta profesional + normas." },
    { icono: "⭐", name: "Suscripciones", detalle: "+18, cuenta profesional, audiencia." },
    { icono: "⭐", name: "Marcas", detalle: "Marcas piden 1,000-5,000 seguidores." },
    { icono: "⭐", name: "Bonos", detalle: "Solo por invitación de Meta." },
  ],
  "X (Twitter)": [
    { icono: "✅", name: "Edad", detalle: "+18 años." },
    { icono: "✅", name: "Normas", detalle: "Estándares de monetización de X." },
    { icono: "✅", name: "País", detalle: "País con programas disponibles." },
    { icono: "✅", name: "Perfil", detalle: "Completo con email verificado." },
    { icono: "⭐", name: "Premium", detalle: "Ser suscriptor de X Premium." },
    { icono: "⭐", name: "Seguidores", detalle: "500 seguidores con X Premium." },
    { icono: "⭐", name: "Impresiones", detalle: "5M impresiones orgánicas en 3 meses." },
  ],
  Snapchat: [
    { icono: "✅", name: "Edad", detalle: "+18 años." },
    { icono: "✅", name: "Normas", detalle: "Política de monetización de creadores." },
    { icono: "⭐", name: "Snap Star", detalle: "Ser Snap Star verificado." },
    { icono: "⭐", name: "Spotlight", detalle: "100h vistas Spotlight en 28 días." },
    { icono: "⭐", name: "Seguidores", detalle: "50,000 seguidores." },
    { icono: "⭐", name: "Vistas", detalle: "15,000 horas en 28 días (3,000 de Spotlight)." },
  ],
  Pinterest: [
    { icono: "✅", name: "Cuenta", detalle: "Cuenta de empresa activa." },
    { icono: "✅", name: "Contenido", detalle: "Pines originales con palabras clave." },
    { icono: "⭐", name: "Tráfico", detalle: "Tráfico constante a tu sitio o afiliados." },
    { icono: "⭐", name: "Afiliados", detalle: "Links de afiliado en cada pin." },
  ],
  LinkedIn: [
    { icono: "✅", name: "Modo creador", detalle: "Activar modo creador en tu perfil." },
    { icono: "✅", name: "Contenido", detalle: "Posts regulares de tu nicho." },
    { icono: "⭐", name: "Seguidores", detalle: "Audiencia activa para Creator Marketplace." },
    { icono: "⭐", name: "Impresiones", detalle: "Impresiones constantes para reparto de ingresos." },
  ],
  Reddit: [
    { icono: "✅", name: "Karma", detalle: "Más de 5,000 karma acumulado." },
    { icono: "✅", name: "Antigüedad", detalle: "Cuenta con +12 meses de actividad." },
    { icono: "⭐", name: "Contribuciones", detalle: "Colaboraciones cualificadas en el último año." },
    { icono: "⭐", name: "Mínimo", detalle: "Al menos $10 en ingresos para cobrar." },
  ],
  Twitch: [
    { icono: "✅", name: "Seguidores", detalle: "25 seguidores." },
    { icono: "✅", name: "Horas", detalle: "4 horas de stream total." },
    { icono: "✅", name: "Días", detalle: "Stream en 4 días distintos." },
    { icono: "⭐", name: "Espectadores", detalle: "Promedio de 3 espectadores concurrentes." },
  ],
  Kick: [
    { icono: "✅", name: "Horas", detalle: "5 horas de stream en 30 días." },
    { icono: "✅", name: "Seguidores", detalle: "75 seguidores." },
    { icono: "⭐", name: "Suscripciones", detalle: "Se habilitan al cumplir los requisitos." },
    { icono: "⭐", name: "Equipo", detalle: "PC i5/Ryzen 5, 8GB RAM, 5Mbps subida." },
  ],
  Discord: [
    { icono: "✅", name: "Miembros", detalle: "100+ miembros en tu servidor." },
    { icono: "✅", name: "Antigüedad", detalle: "Servidor con +90 días de creado." },
    { icono: "✅", name: "Estado", detalle: "Servidor en regla sin violaciones." },
    { icono: "⭐", name: "Edad", detalle: "+18 años y cuenta verificada." },
  ],
  "Telegram Canal": [
    { icono: "✅", name: "Suscriptores", detalle: "1,000 suscriptores para ads oficiales." },
    { icono: "✅", name: "Canal público", detalle: "Tu canal debe ser público." },
    { icono: "⭐", name: "Contenido", detalle: "Publicaciones regulares y originales." },
    { icono: "⭐", name: "Ingresos", detalle: "50% de los ingresos de anuncios para ti." },
  ],
  "WhatsApp Status": [
    { icono: "✅", name: "Business", detalle: "Cuenta WhatsApp Business verificada." },
    { icono: "✅", name: "Contactos", detalle: "Lista de contactos activa y segmentada." },
    { icono: "⭐", name: "Estados", detalle: "Estados diarios con ofertas y valor." },
    { icono: "⭐", name: "Ventas", detalle: "Cierre de ventas por chat directo." },
  ],
  Substack: [
    { icono: "✅", name: "Cuenta", detalle: "Cuenta gratuita activa." },
    { icono: "✅", name: "Newsletter", detalle: "Al menos 1 publicación semanal." },
    { icono: "⭐", name: "Suscriptores", detalle: "Base gratis que convierte a paga." },
    { icono: "⭐", name: "Recomendaciones", detalle: "Red de escritores que te recomiendan." },
  ],
  Medium: [
    { icono: "✅", name: "Partner Program", detalle: "Unirte al programa (gratis)." },
    { icono: "✅", name: "Artículos", detalle: "Publicar contenido original regularmente." },
    { icono: "⭐", name: "Lecturas", detalle: "Tiempo de lectura acumulado de tus artículos." },
    { icono: "⭐", name: "Seguidores", detalle: "Seguidores que leen tus publicaciones." },
  ],
  "Amazon KDP": [
    { icono: "✅", name: "Cuenta", detalle: "Cuenta KDP gratuita (sin costo)." },
    { icono: "✅", name: "Contenido", detalle: "Ebook o libro de bajo contenido propio." },
    { icono: "⭐", name: "Royalties", detalle: "70% en ebooks de $2.99-$9.99." },
    { icono: "⭐", name: "Palabras clave", detalle: "Optimización SEO para aparecer en búsquedas." },
  ],
  Patreon: [
    { icono: "✅", name: "Cuenta", detalle: "Crear página de creador (gratis)." },
    { icono: "✅", name: "Contenido", detalle: "Contenido exclusivo para miembros." },
    { icono: "⭐", name: "Niveles", detalle: "Definir tiers de membresía con beneficios." },
    { icono: "⭐", name: "Audiencia", detalle: "Fans fieles dispuestos a pagar mensual." },
  ],
  "Ko-fi": [
    { icono: "✅", name: "Cuenta", detalle: "Crear página gratis en segundos." },
    { icono: "✅", name: "Enlace", detalle: "Enlazar en todas tus redes sociales." },
    { icono: "⭐", name: "Productos", detalle: "Subir productos digitales opcionales." },
    { icono: "⭐", name: "Comisiones", detalle: "0% comisiones en propinas directas." },
  ],
  "Buy Me a Coffee": [
    { icono: "✅", name: "Cuenta", detalle: "Crear página gratis." },
    { icono: "✅", name: "Enlace", detalle: "Compartir en bio y contenido." },
    { icono: "⭐", name: "Extras", detalle: "Ofrecer contenido extra por apoyo." },
    { icono: "⭐", name: "Membresías", detalle: "Activar membresías mensuales opcionales." },
  ],
  Whop: [
    { icono: "✅", name: "Cuenta", detalle: "Crear marketplace gratis." },
    { icono: "✅", name: "Producto", detalle: "Comunidad, señales o acceso premium." },
    { icono: "⭐", name: "Pagos", detalle: "Pagos automáticos configurados." },
    { icono: "⭐", name: "Audiencia", detalle: "Audiencia dispuesta a pagar por acceso." },
  ],
  Gumroad: [
    { icono: "✅", name: "Cuenta", detalle: "Crear cuenta gratis." },
    { icono: "✅", name: "Producto", detalle: "Ebook, plantilla, preset o curso." },
    { icono: "⭐", name: "Precio", detalle: "Desde $5 con entrega automática." },
    { icono: "⭐", name: "Tráfico", detalle: "Llevar tráfico desde tus redes." },
  ],
  Teachable: [
    { icono: "✅", name: "Cuenta", detalle: "Plan gratuito o Starter ($29/mes)." },
    { icono: "✅", name: "Curso", detalle: "Grabar módulos con contenido de valor." },
    { icono: "⭐", name: "Página de venta", detalle: "Teachable la genera automáticamente." },
    { icono: "⭐", name: "Tráfico", detalle: "Llevar alumnos desde tus redes o email." },
  ],
  Skillshare: [
    { icono: "✅", name: "Cuenta", detalle: "Aplicar como profesor (gratis)." },
    { icono: "✅", name: "Clase", detalle: "Mínimo 20 minutos de contenido." },
    { icono: "⭐", name: "Minutos vistos", detalle: "Pago proporcional a minutos consumidos." },
    { icono: "⭐", name: "Consistencia", detalle: "Publicar clases nuevas regularmente." },
  ],
  Etsy: [
    { icono: "✅", name: "Tienda", detalle: "Abrir tienda gratis (sin licencia)." },
    { icono: "✅", name: "Productos", detalle: "Digitales o printables listos para vender." },
    { icono: "⭐", name: "SEO", detalle: "Palabras clave con baja competencia." },
    { icono: "⭐", name: "Reseñas", detalle: "Reseñas de 5 estrellas suben tu ranking." },
  ],
  Fiverr: [
    { icono: "✅", name: "Edad", detalle: "+18 años." },
    { icono: "✅", name: "Perfil", detalle: "Perfil verificado con identidad." },
    { icono: "⭐", name: "Gigs", detalle: "Crear gigs de lo que ya sabes hacer." },
    { icono: "⭐", name: "Reseñas", detalle: "Reseñas de 5 estrellas suben tu precio." },
  ],
  Upwork: [
    { icono: "✅", name: "Perfil", detalle: "Perfil optimizado con portafolio." },
    { icono: "✅", name: "Propuestas", detalle: "5 propuestas semanales con Connects." },
    { icono: "⭐", name: "Connects", detalle: "$0.15 por Connect (crédito de propuesta)." },
    { icono: "⭐", name: "Fee", detalle: "0%-15% por contrato según negociación." },
  ],
  Freelancer: [
    { icono: "✅", name: "Cuenta", detalle: "Crear perfil gratis." },
    { icono: "✅", name: "Concursos", detalle: "Participar en concursos para reputación." },
    { icono: "⭐", name: "Portafolio", detalle: "Mostrar trabajos anteriores." },
    { icono: "⭐", name: "Reseñas", detalle: "Reseñas positivas suben tu ranking." },
  ],
  Shutterstock: [
    { icono: "✅", name: "Edad", detalle: "+18 años con ID válido." },
    { icono: "✅", name: "Resolución", detalle: "Mínimo 4MP en JPEG sin marcas de agua." },
    { icono: "⭐", name: "Formulario fiscal", detalle: "Formulario de impuestos aprobado." },
    { icono: "⭐", name: "Niveles", detalle: "15%-40% según nivel de descargas." },
  ],
  "Adobe Stock": [
    { icono: "✅", name: "Cuenta", detalle: "Cuenta Adobe con perfil de contribuidor." },
    { icono: "✅", name: "Contenido", detalle: "Fotos, vectores o video originales." },
    { icono: "⭐", name: "Royalties", detalle: "33% en fotos, 35% en vectores, 35% en video." },
    { icono: "⭐", name: "Calidad", detalle: "Contenido que pase revisión de calidad." },
  ],
  Envato: [
    { icono: "✅", name: "Cuenta", detalle: "Cuenta de autor en Envato Market." },
    { icono: "✅", name: "Item", detalle: "Template o gráfico que pase revisión." },
    { icono: "⭐", name: "Comisión", detalle: "37.5%-55% según exclusividad." },
    { icono: "⭐", name: "Soporte", detalle: "Dar soporte a compradores de tu item." },
  ],
  Spotify: [
    { icono: "✅", name: "Distribuidora", detalle: "Subir vía DistroKid, Ditto o similar." },
    { icono: "✅", name: "Originalidad", detalle: "Contenido 100% original y propio." },
    { icono: "⭐", name: "Reproducciones", detalle: "1,000 streams en 12 meses por track." },
    { icono: "⭐", name: "Catálogo", detalle: "Más tracks = más ingreso pasivo." },
  ],
  SoundCloud: [
    { icono: "✅", name: "Plan", detalle: "SoundCloud for Artists ($3.25/mes) o Next Pro." },
    { icono: "✅", name: "Tracks", detalle: "Tracks elegibles conectados a monetización." },
    { icono: "⭐", name: "Escuchas", detalle: "30+ segundos por reproducción monetizada." },
    { icono: "⭐", name: "Países", detalle: "Monetización en países elegibles." },
  ],
  Audiomack: [
    { icono: "✅", name: "Cuenta", detalle: "Cuenta autenticada de artista." },
    { icono: "✅", name: "Seguidores", detalle: "100 seguidores + 50,000 plays en 6 meses." },
    { icono: "⭐", name: "Pro", detalle: "Audiomack Pro salta los requisitos estándar." },
    { icono: "⭐", name: "Originalidad", detalle: "Solo canciones originales (no covers)." },
  ],
};

export const FORMAS_REDES: Record<string, FormaRed[]> = {
  YouTube: [
    { emoji: "📺", name: "Anuncios (AdSense)", facilidad: "alta", comoFunciona: "YouTube pone anuncios; cobras por cada 1,000 vistas.", potencial: "$100-$5,000/mes" },
    { emoji: "👥", name: "Miembros del canal", facilidad: "alta", comoFunciona: "Suscriptores pagan mensual por contenido exclusivo.", potencial: "$50-$2,000/mes" },
    { emoji: "💬", name: "Super Chat", facilidad: "alta", comoFunciona: "Tu audiencia paga en lives para destacar mensajes.", potencial: "$20-$500/live" },
    { emoji: "🛍️", name: "Merch", facilidad: "alta", comoFunciona: "Vendes tu merch desde la página del video.", potencial: "Variable" },
    { emoji: "🔗", name: "Afiliados", facilidad: "alta", comoFunciona: "Links de afiliado en descripción.", potencial: "$50-$3,000/mes" },
    { emoji: "🤝", name: "Patrocinios", facilidad: "media", comoFunciona: "Marcas pagan por mencionarlas.", potencial: "$100-$10,000/video" },
    { emoji: "📚", name: "Cursos propios", facilidad: "media", comoFunciona: "Vendes tu curso desde tu audiencia.", potencial: "$200-$20,000/mes" },
  ],
  TikTok: [
    { emoji: "🎬", name: "Recompensas", facilidad: "alta", comoFunciona: "TikTok paga por vistas de videos +1 min.", potencial: "$200-$2,000/mes" },
    { emoji: "🎁", name: "Regalos LIVE", facilidad: "alta", comoFunciona: "Regalos virtuales convertibles a dinero.", potencial: "$50-$1,000/live" },
    { emoji: "📋", name: "Series premium", facilidad: "alta", comoFunciona: "Cobras acceso a series exclusivas.", potencial: "$20-$500/mes" },
    { emoji: "💡", name: "Efectos creativos", facilidad: "alta", comoFunciona: "Creas filtros; TikTok paga por uso.", potencial: "$100-$2,000/efecto" },
    { emoji: "📣", name: "Ads Affiliate", facilidad: "alta", comoFunciona: "20% de la inversión de negocios referidos.", potencial: "$100-$3,000/mes" },
    { emoji: "🛒", name: "TikTok Shop", facilidad: "media", comoFunciona: "Vendes productos desde tus videos.", potencial: "$100-$10,000/mes" },
    { emoji: "🤝", name: "Creator Marketplace", facilidad: "media", comoFunciona: "Marcas te pagan por contenido.", potencial: "$50-$5,000/video" },
  ],
  Facebook: [
    { emoji: "📺", name: "Anuncios in-stream", facilidad: "alta", comoFunciona: "Anuncios en tus videos de +1 min.", potencial: "$100-$3,000/mes" },
    { emoji: "⭐", name: "Estrellas", facilidad: "alta", comoFunciona: "Tu audiencia envía estrellas ($0.01 c/u).", potencial: "$20-$500/mes" },
    { emoji: "📋", name: "Suscripciones", facilidad: "alta", comoFunciona: "Fans pagan mensual por contenido.", potencial: "$30-$800/mes" },
    { emoji: "🎮", name: "Juegos instantáneos", facilidad: "alta", comoFunciona: "Mini-juegos con anuncios.", potencial: "$10-$200/mes" },
    { emoji: "🎬", name: "Bonos Reels", facilidad: "media", comoFunciona: "Meta paga bonos por rendimiento.", potencial: "$50-$1,500/mes" },
    { emoji: "🤝", name: "Colaboraciones", facilidad: "media", comoFunciona: "Marcas pagan por menciones.", potencial: "$50-$3,000/post" },
    { emoji: "🛍️", name: "Tienda", facilidad: "media", comoFunciona: "Vendes desde tu página.", potencial: "Variable" },
  ],
  Instagram: [
    { emoji: "🎁", name: "Regalos Reels", facilidad: "alta", comoFunciona: "Regalos virtuales en tus Reels.", potencial: "$20-$300/mes" },
    { emoji: "📋", name: "Suscripciones", facilidad: "alta", comoFunciona: "Fans pagan por contenido exclusivo.", potencial: "$30-$1,000/mes" },
    { emoji: "🔗", name: "Afiliados", facilidad: "alta", comoFunciona: "Links de afiliado en bio y Stories.", potencial: "$30-$2,000/mes" },
    { emoji: "💰", name: "Bonos Reels", facilidad: "media", comoFunciona: "Meta paga por rendimiento (invitación).", potencial: "$50-$2,000/mes" },
    { emoji: "🤝", name: "Marcas", facilidad: "media", comoFunciona: "Posts y Reels patrocinados.", potencial: "$50-$5,000/post" },
    { emoji: "🛍️", name: "Shopping", facilidad: "media", comoFunciona: "Productos etiquetados en fotos.", potencial: "Variable" },
    { emoji: "🎓", name: "Cursos/servicios", facilidad: "media", comoFunciona: "Tráfico a tu landing desde bio.", potencial: "$100-$10,000/mes" },
  ],
  "X (Twitter)": [
    { emoji: "💰", name: "Revenue sharing", facilidad: "alta", comoFunciona: "X comparte ingresos de anuncios en respuestas.", potencial: "$20-$2,000/mes" },
    { emoji: "📋", name: "Suscripciones", facilidad: "alta", comoFunciona: "Fans pagan mensual por contenido.", potencial: "$20-$800/mes" },
    { emoji: "🎁", name: "Propinas", facilidad: "alta", comoFunciona: "Dinero directo vía Stripe/PayPal.", potencial: "$10-$300/mes" },
    { emoji: "🔗", name: "Afiliados en hilos", facilidad: "alta", comoFunciona: "Hilos con links de afiliado.", potencial: "$20-$1,500/mes" },
    { emoji: "🏠", name: "Spaces con tickets", facilidad: "alta", comoFunciona: "Cobras entrada a Spaces en vivo.", potencial: "$10-$500/evento" },
    { emoji: "🤝", name: "Posts patrocinados", facilidad: "media", comoFunciona: "Marcas pagan por tweets.", potencial: "$30-$3,000/tweet" },
    { emoji: "📚", name: "Info-productos", facilidad: "media", comoFunciona: "Hilos que dirigen a tu curso.", potencial: "$50-$5,000/mes" },
  ],
  Snapchat: [
    { emoji: "🌟", name: "Spotlight Rewards", facilidad: "alta", comoFunciona: "Pago por vistas ($0.10-$0.30/1K).", potencial: "$50-$2,000/mes" },
    { emoji: "🎁", name: "Gifts", facilidad: "alta", comoFunciona: "Regalos en tus Snaps.", potencial: "$10-$200/mes" },
    { emoji: "🔗", name: "Afiliados", facilidad: "alta", comoFunciona: "Links en Stories y bio.", potencial: "$10-$500/mes" },
    { emoji: "📺", name: "Midroll Ads", facilidad: "media", comoFunciona: "Anuncios en Stories largas.", potencial: "$20-$500/mes" },
    { emoji: "🤝", name: "Marcas", facilidad: "media", comoFunciona: "Snaps y Lenses patrocinados.", potencial: "$100-$5,000/campaña" },
    { emoji: "🎭", name: "Lenses AR", facilidad: "media", comoFunciona: "Filtros AR para marcas.", potencial: "$200-$3,000/lens" },
  ],
  Pinterest: [
    { emoji: "🔗", name: "Afiliados", facilidad: "alta", comoFunciona: "Links de afiliado en cada pin.", potencial: "$30-$400/mes" },
    { emoji: "📝", name: "Tráfico a blog", facilidad: "alta", comoFunciona: "Pines llevan visitas a tu blog monetizado.", potencial: "$20-$300/mes" },
    { emoji: "🛍️", name: "Pines de producto", facilidad: "media", comoFunciona: "Venta directa desde pins.", potencial: "$50-$500/mes" },
    { emoji: "🤝", name: "Colaboraciones", facilidad: "media", comoFunciona: "Marcas pagan por pines patrocinados.", potencial: "$30-$300/pin" },
  ],
  LinkedIn: [
    { emoji: "💼", name: "Consultorías", facilidad: "alta", comoFunciona: "Posts atraen clientes B2B.", potencial: "$100-$1,500/mes" },
    { emoji: "💰", name: "Creator Marketplace", facilidad: "media", comoFunciona: "Marcas pagan por posts patrocinados.", potencial: "$50-$500/post" },
    { emoji: "📋", name: "Newsletter", facilidad: "media", comoFunciona: "Newsletter con suscriptores premium.", potencial: "$30-$300/mes" },
    { emoji: "🔗", name: "Afiliados B2B", facilidad: "alta", comoFunciona: "Links de software SaaS en posts.", potencial: "$20-$500/mes" },
  ],
  Reddit: [
    { emoji: "💰", name: "Programa Contribuidores", facilidad: "media", comoFunciona: "Reddit paga por contribuciones cualificadas.", potencial: "$10-$200/mes" },
    { emoji: "🔗", name: "Tráfico a sitio", facilidad: "alta", comoFunciona: "Respuestas con valor llevan tráfico.", potencial: "$10-$100/mes" },
    { emoji: "🤝", name: "Patrocinios en subreddits", facilidad: "media", comoFunciona: "Mods cobran por posts patrocinados.", potencial: "$20-$300/mes" },
  ],
  Twitch: [
    { emoji: "⭐", name: "Suscripciones", facilidad: "alta", comoFunciona: "Fans pagan mensual por emotes y badges.", potencial: "$30-$800/mes" },
    { emoji: "💎", name: "Bits", facilidad: "alta", comoFunciona: "Tu audiencia dona bits durante el stream.", potencial: "$10-$300/mes" },
    { emoji: "📺", name: "Anuncios", facilidad: "alta", comoFunciona: "Anuncios durante tu stream.", potencial: "$10-$200/mes" },
    { emoji: "🤝", name: "Patrocinios", facilidad: "media", comoFunciona: "Marcas pagan por menciones en vivo.", potencial: "$50-$1,000/stream" },
  ],
  Kick: [
    { emoji: "⭐", name: "Suscripciones (95%)", facilidad: "alta", comoFunciona: "Te quedas con el 95% de cada sub.", potencial: "$50-$1,500/mes" },
    { emoji: "💎", name: "Propinas", facilidad: "alta", comoFunciona: "Donaciones directas durante el stream.", potencial: "$20-$500/mes" },
    { emoji: "🤝", name: "Patrocinios", facilidad: "media", comoFunciona: "Marcas pagan por menciones.", potencial: "$50-$500/stream" },
  ],
  Discord: [
    { emoji: "📋", name: "Server Subs", facilidad: "media", comoFunciona: "Miembros pagan mensual por canales premium.", potencial: "$30-$1,000/mes" },
    { emoji: "🔗", name: "Patreon/Whop", facilidad: "alta", comoFunciona: "Conectas membresía externa al servidor.", potencial: "$20-$800/mes" },
    { emoji: "🤝", name: "Patrocinios", facilidad: "media", comoFunciona: "Marcas pagan por acceso a tu comunidad.", potencial: "$50-$500/mes" },
  ],
  "Telegram Canal": [
    { emoji: "📢", name: "Ads oficiales (50%)", facilidad: "alta", comoFunciona: "Telegram comparte 50% de ingresos de anuncios.", potencial: "$50-$1,000/mes" },
    { emoji: "🤝", name: "Posts patrocinados", facilidad: "media", comoFunciona: "Marcas pagan por post en tu canal.", potencial: "$20-$500/post" },
    { emoji: "🔗", name: "Afiliados", facilidad: "alta", comoFunciona: "Links de afiliado fijados en el canal.", potencial: "$30-$500/mes" },
    { emoji: "📋", name: "Suscripciones premium", facilidad: "media", comoFunciona: "Canal privado con contenido de pago.", potencial: "$50-$1,000/mes" },
  ],
  "WhatsApp Status": [
    { emoji: "🛍️", name: "Ventas directas", facilidad: "alta", comoFunciona: "Estados con ofertas cierran ventas por chat.", potencial: "$30-$400/mes" },
    { emoji: "🔗", name: "Afiliados", facilidad: "alta", comoFunciona: "Links de afiliado en estados diarios.", potencial: "$10-$200/mes" },
    { emoji: "🤝", name: "Patrocinios", facilidad: "media", comoFunciona: "Marcas pagan por estados patrocinados.", potencial: "$20-$300/mes" },
  ],
  Substack: [
    { emoji: "📋", name: "Suscripciones pagas", facilidad: "media", comoFunciona: "Lectores pagan mensual por contenido premium.", potencial: "$30-$1,500/mes" },
    { emoji: "🔗", name: "Afiliados", facilidad: "alta", comoFunciona: "Links de afiliado en tus newsletters.", potencial: "$10-$300/mes" },
    { emoji: "🤝", name: "Patrocinios", facilidad: "media", comoFunciona: "Marcas pagan por mención en newsletter.", potencial: "$20-$500/edición" },
  ],
  Medium: [
    { emoji: "💰", name: "Partner Program", facilidad: "alta", comoFunciona: "Pago por tiempo de lectura de tus artículos.", potencial: "$10-$300/mes" },
    { emoji: "🔗", name: "Afiliados", facilidad: "alta", comoFunciona: "Links de afiliado dentro de artículos.", potencial: "$10-$200/mes" },
    { emoji: "📋", name: "Publicaciones propias", facilidad: "media", comoFunciona: "Creas publicación y cobras membresía.", potencial: "$10-$100/mes" },
  ],
  "Amazon KDP": [
    { emoji: "📚", name: "Ebooks", facilidad: "alta", comoFunciona: "Royalties 70% por cada ebook vendido.", potencial: "$30-$1,500/mes" },
    { emoji: "📓", name: "Bajo contenido", facilidad: "alta", comoFunciona: "Cuadernos, planners creados con IA.", potencial: "$20-$500/mes" },
    { emoji: "📖", name: "Kindle Unlimited", facilidad: "media", comoFunciona: "Pago por páginas leídas en KU.", potencial: "$10-$300/mes" },
  ],
  Patreon: [
    { emoji: "📋", name: "Membresías", facilidad: "media", comoFunciona: "Fans pagan mensual por contenido exclusivo.", potencial: "$50-$2,500/mes" },
    { emoji: "🛍️", name: "Tienda integrada", facilidad: "media", comoFunciona: "Vendes productos digitales a miembros.", potencial: "$20-$500/mes" },
    { emoji: "🤝", name: "Patrocinios", facilidad: "media", comoFunciona: "Marcas pagan por acceso a tu comunidad.", potencial: "$30-$500/mes" },
  ],
  "Ko-fi": [
    { emoji: "☕", name: "Propinas", facilidad: "alta", comoFunciona: "Apoyos de $3-$5 sin comisiones.", potencial: "$10-$200/mes" },
    { emoji: "🛍️", name: "Productos digitales", facilidad: "alta", comoFunciona: "Vendes ebooks, presets, plantillas.", potencial: "$10-$300/mes" },
    { emoji: "📋", name: "Membresías", facilidad: "media", comoFunciona: "Suscripción mensual con contenido extra.", potencial: "$10-$200/mes" },
  ],
  "Buy Me a Coffee": [
    { emoji: "☕", name: "Cafés de apoyo", facilidad: "alta", comoFunciona: "Fans compran cafés de $5 como apoyo.", potencial: "$10-$200/mes" },
    { emoji: "📋", name: "Membresías", facilidad: "media", comoFunciona: "Suscripción mensual con perks.", potencial: "$10-$300/mes" },
    { emoji: "🛍️", name: "Extras", facilidad: "alta", comoFunciona: "Contenido extra por apoyo.", potencial: "$5-$100/mes" },
  ],
  Whop: [
    { emoji: "🏠", name: "Comunidades de pago", facilidad: "media", comoFunciona: "Vendes acceso a comunidad premium.", potencial: "$50-$3,000/mes" },
    { emoji: "📊", name: "Señales de trading", facilidad: "media", comoFunciona: "Vendes señales con suscripción automática.", potencial: "$50-$2,000/mes" },
    { emoji: "📚", name: "Cursos y acceso", facilidad: "media", comoFunciona: "Vendes cursos con pagos automáticos.", potencial: "$50-$1,000/mes" },
  ],
  Gumroad: [
    { emoji: "📚", name: "Ebooks", facilidad: "alta", comoFunciona: "Vendes ebooks con entrega automática.", potencial: "$20-$1,000/mes" },
    { emoji: "🎨", name: "Plantillas y presets", facilidad: "alta", comoFunciona: "Templates desde $5 con descarga auto.", potencial: "$20-$800/mes" },
    { emoji: "📋", name: "Membresías", facilidad: "media", comoFunciona: "Suscripción mensual con contenido.", potencial: "$10-$500/mes" },
  ],
  Teachable: [
    { emoji: "🎓", name: "Cursos online", facilidad: "media", comoFunciona: "Grabas una vez, vendes para siempre.", potencial: "$50-$2,500/mes" },
    { emoji: "📋", name: "Membresías", facilidad: "media", comoFunciona: "Acceso mensual a biblioteca de cursos.", potencial: "$30-$1,000/mes" },
    { emoji: "🎯", name: "Coaching 1:1", facilidad: "media", comoFunciona: "Sesiones individuales con pago integrado.", potencial: "$50-$500/mes" },
  ],
  Skillshare: [
    { emoji: "🎬", name: "Clases por minutos", facilidad: "alta", comoFunciona: "Pago proporcional a minutos vistos.", potencial: "$10-$500/mes" },
    { emoji: "🛍️", name: "Productos digitales", facilidad: "media", comoFunciona: "Vendes recursos complementarios.", potencial: "$10-$300/mes" },
    { emoji: "🎯", name: "Sesiones 1:1", facilidad: "media", comoFunciona: "Clases individuales con alumnos.", potencial: "$10-$200/mes" },
  ],
  Etsy: [
    { emoji: "🎨", name: "Digitales", facilidad: "alta", comoFunciona: "Plantillas, printables con tráfico propio.", potencial: "$50-$1,500/mes" },
    { emoji: "👕", name: "Print on demand", facilidad: "media", comoFunciona: "Diseños en camisetas sin stock.", potencial: "$30-$500/mes" },
    { emoji: "🛍️", name: "Físicos artesanales", facilidad: "media", comoFunciona: "Productos hechos a mano enviados.", potencial: "$50-$1,000/mes" },
  ],
  Fiverr: [
    { emoji: "💼", name: "Gigs de servicios", facilidad: "alta", comoFunciona: "Vendes lo que ya sabes hacer.", potencial: "$50-$2,500/mes" },
    { emoji: "⭐", name: "Niveles de vendedor", facilidad: "media", comoFunciona: "Más reseñas = nivel superior = más precio.", potencial: "Escalable" },
    { emoji: "📦", name: "Paquetes premium", facilidad: "media", comoFunciona: "Upsell con entregas express y extras.", potencial: "$50-$500/gig" },
  ],
  Upwork: [
    { emoji: "💼", name: "Proyectos por hora", facilidad: "media", comoFunciona: "Cobro por hora protegido por Upwork.", potencial: "$100-$4,000/mes" },
    { emoji: "📦", name: "Proyectos fijos", facilidad: "media", comoFunciona: "Precio cerrado por entregable.", potencial: "$50-$2,000/proyecto" },
    { emoji: "🔄", name: "Contratos recurrentes", facilidad: "media", comoFunciona: "Clientes que te contratan mes a mes.", potencial: "$200-$3,000/mes" },
  ],
  Freelancer: [
    { emoji: "🏆", name: "Concursos", facilidad: "alta", comoFunciona: "Ganas premios por entregar el mejor trabajo.", potencial: "$20-$500/concurso" },
    { emoji: "💼", name: "Proyectos", facilidad: "media", comoFunciona: "Aplicas a proyectos con presupuesto fijo.", potencial: "$50-$1,500/proyecto" },
    { emoji: "⭐", name: "Reputación", facilidad: "media", comoFunciona: "Reseñas suben tu ranking y precio.", potencial: "Escalable" },
  ],
  Shutterstock: [
    { emoji: "📸", name: "Fotos stock", facilidad: "alta", comoFunciona: "Royalties 15%-40% por descarga.", potencial: "$20-$500/mes" },
    { emoji: "🎬", name: "Video stock", facilidad: "media", comoFunciona: "Clips cortos con royalties por descarga.", potencial: "$30-$500/mes" },
    { emoji: "🎵", name: "Música stock", facilidad: "media", comoFunciona: "Tracks con royalties por licencia.", potencial: "$10-$200/mes" },
  ],
  "Adobe Stock": [
    { emoji: "📸", name: "Fotos", facilidad: "alta", comoFunciona: "33% de royalties por descarga.", potencial: "$20-$500/mes" },
    { emoji: "🎨", name: "Vectores", facilidad: "media", comoFunciona: "35% de royalties por descarga.", potencial: "$20-$400/mes" },
    { emoji: "🎬", name: "Video", facilidad: "media", comoFunciona: "35% de royalties por licencia.", potencial: "$30-$600/mes" },
  ],
  Envato: [
    { emoji: "🎨", name: "Templates ThemeForest", facilidad: "media", comoFunciona: "Un buen template vende durante años.", potencial: "$50-$1,500/mes" },
    { emoji: "🖼️", name: "Gráficos GraphicRiver", facilidad: "alta", comoFunciona: "Icons, mockups, presentaciones.", potencial: "$20-$500/mes" },
    { emoji: "🔗", name: "Afiliado Envato", facilidad: "alta", comoFunciona: "Comisión por cada venta referida.", potencial: "$10-$300/mes" },
  ],
  Spotify: [
    { emoji: "🎵", name: "Royalties por stream", facilidad: "alta", comoFunciona: "Pago por reproducción vía distribuidora.", potencial: "$20-$500/mes" },
    { emoji: "📋", name: "Playlist pitching", facilidad: "media", comoFunciona: "Entrar en playlists editoriales multiplica streams.", potencial: "$10-$300/mes" },
    { emoji: "🎙️", name: "Podcasts", facilidad: "media", comoFunciona: "Monetización con suscripciones y ads.", potencial: "$10-$200/mes" },
  ],
  SoundCloud: [
    { emoji: "🎵", name: "Fan-powered royalties", facilidad: "alta", comoFunciona: "Pago por escuchas de +30 segundos.", potencial: "$10-$200/mes" },
    { emoji: "📋", name: "Reposts patrocinados", facilidad: "media", comoFunciona: "Cobras por repostear tracks de otros.", potencial: "$5-$100/mes" },
    { emoji: "🔗", name: "Links externos", facilidad: "alta", comoFunciona: "Diriges tráfico a tu tienda o afiliados.", potencial: "$5-$100/mes" },
  ],
  Audiomack: [
    { emoji: "🎵", name: "AMP (monetización)", facilidad: "alta", comoFunciona: "Pago por stream mejor que Spotify para nuevos.", potencial: "$10-$200/mes" },
    { emoji: "📋", name: "Audiomack Pro", facilidad: "media", comoFunciona: "Salta requisitos y accede directo a monetización.", potencial: "$10-$150/mes" },
    { emoji: "🔗", name: "Tráfico externo", facilidad: "alta", comoFunciona: "Diriges oyentes a tu tienda o afiliados.", potencial: "$5-$100/mes" },
  ],
};