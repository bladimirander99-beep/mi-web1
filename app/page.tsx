"use client";
import Navbar from "./components/Navbar";
import { useState, useCallback } from "react";
import Image from "next/image";

/* ── TYPES ── */
interface RefItem { name: string; href: string; badge: string; hot?: boolean; videoId?: string; desc?: string; }
interface Category {
  id: string; icon: string; title: string; subtitle: string; hot?: boolean;
  links: RefItem[];
  manualLabel: string;
  steps: { title: string; desc: string }[];
  tip: string;
}

/* ── DATA ── */
const CATEGORIES: Category[] = [
  {
    id: "exchange", icon: "📈", title: "Exchange de Criptomonedas",
    subtitle: "Compra, vende e intercambia cripto", hot: true,
    links: [
      { name: "Binance", href: "https://www.binance.com/referral/earn-together/refer2earn-usdc/claim?hl=es&ref=GRO_28502_Z3JGY&utm_source=referral_entrance", badge: "Hasta $100 USDT", hot: true, desc: "El exchange #1 del mundo. Compra, vende y gana comisiones por cada persona que invites a operar." },
      { name: "CoinEx",  href: "https://www.coinex.com/register?rc=tm3rg&channel=Referral", badge: "Hasta $100 + 20% fee", desc: "Exchange con más de 700 monedas. Gana el 20% de las comisiones de cada referido de por vida." },
      { name: "Margex",  href: "https://margex.com/?rid=85014048", badge: "$50 registro + 20% depósito", desc: "Plataforma de futuros con staking integrado. Gana intereses sobre tu cripto mientras operas." },
      { name: "Bybit",   href: "https://www.bybit.com/invite?ref=DAN9B0Y&medium=referral&utm_campaign=evergreen&share_to=link", badge: "Hasta $5,050 USDT", desc: "Exchange de futuros top 3 mundial. Opera con apalancamiento y gana hasta 30% de comisión por referido." },
      { name: "MEXC",    href: "https://promote.mexc.com/r/zADNeckgHG", badge: "Hasta $8,000 USDT", desc: "0% de comisión en spot. Ideal para operar altcoins nuevas con potencial de 10x antes que nadie." },
      { name: "BingX",   href: "https://bingxdao.com/invite/PKG0CK/", badge: "Hasta $6,000 USDT", desc: "Exchange con copy trading integrado. Copia a los mejores traders y gana sin necesitar experiencia." },
      { name: "Próximamente #1", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #2", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #3", href: "#", badge: " Próximo" },
      { name: "Próximamente #4", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #5", href: "#", badge: "🔒 Próximo" },
    ],
    manualLabel: "MANUAL: CÓMO GANAR CON EXCHANGES",
    steps: [
      { title: "¡Regístrate ahora y activa tu bono!", desc: "Crea tu cuenta usando el link exclusivo. Activa tu bono de bienvenida y descuento en comisiones desde el día 1." },
      { title: "Completa la verificación KYC", desc: "Sube tu documento de identidad para desbloquear todos los límites de retiro y funciones completas." },
      { title: "💸 Obtén tu link exclusivo y empieza a ganar", desc: "Ve a la sección Referidos del exchange. Copia tu link y compártelo en redes, grupos y amigos." },
      { title: "Deposita desde $10 y opera", desc: "Empieza con USDT para aprender. Cada vez que operas acumulas experiencia y ganas comisiones de tus referidos." },
      { title: "Retira tus ganancias", desc: "Usa P2P o transferencia bancaria. Binance y Bybit permiten retirar a cuentas locales en Latinoamérica." },
    ],
    tip: "Publica 1 video corto por semana mostrando la plataforma y agrega tu link. Las comisiones se acumulan mientras duermes.",
  },
  {
    id: "wallets", icon: "👛", title: "Wallets / Billeteras Digitales",
    subtitle: "Guarda y gestiona tus activos digitales",
    links: [
      { name: "Uphold",       href: "https://wallet.uphold.com/signup?referral=3822c3b41e&campaign=uw_p_d_w_acq_raf&utm_source=raf&utm_medium=referafriend", badge: "$20 BTC al registrarte", desc: "Plataforma todo-en-uno: cripto, acciones y metales. Gana intereses del 6% anual en staking." },
      { name: "AirTM",        href: "https://app.airtm.com/ivt/bladimir2025", badge: "Bono en primera transacción", desc: "Wallet para recibir pagos internacionales en dólares. Ideal para freelancers en Latinoamérica." },
      { name: "Speed Wallet", href: "https://links.speed.app/referral?referral_code=1BX8DC", badge: "Crypto gratis al registrar", desc: "Wallet Bitcoin Lightning ultra rápida. Envía y recibe BTC al instante con comisiones casi cero." },
      { name: "Base",         href: "https://base.app/invite/friends/52MTC2PC", badge: "Gratis en L2 Ethereum", desc: "Red Layer 2 de Coinbase. Opera en Ethereum con comisiones 100x más baratas y velocidad máxima." },
      { name: "NC Wallet",    href: "https://ncwallet.net/invite/H5UN4SMU?lang=es", badge: "Sin comisiones + % referido", desc: "La única wallet sin comisiones de red. Gana un % de cada transacción que hagan tus referidos." },
      { name: "Sweat Wallet", href: "https://swe.at/c/l0G2MLlPdR", badge: "5 SWEAT al unirte", desc: "Convierte tus pasos en cripto real. Camina diariamente y acumula tokens SWEAT canjeables por dinero." },
      { name: "Telegram Wallet", href: "https://telegram.me/wallet/start?startapp=ref-3-icDPRAaAVWY", badge: "Crypto en Telegram", desc: "Wallet oficial de Telegram. Envía, recibe y guarda cripto directamente desde tu chat sin apps externas." },
      { name: "Próximamente #1", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #2", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #3", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #4", href: "#", badge: " Próximo" },
    ],
    manualLabel: "MANUAL: CONFIGURA TU WALLET",
    steps: [
      { title: "Descarga una wallet confiable", desc: "Usa MetaMask o Trust Wallet. Descarga solo desde la web oficial o app store oficial." },
      { title: "Guarda tu frase semilla", desc: "12 palabras secretas. Escríbelas en papel y guárdalas en un lugar seguro. Nunca las compartas con nadie." },
      { title: "Conecta tu wallet al exchange", desc: "Retira cripto del exchange a tu wallet para tener control total. Usa la red correcta (BEP20, ERC20, etc.)." },
      { title: "Explora DeFi y staking", desc: "Con tu wallet puedes hacer staking de monedas y ganar intereses del 5% al 20% anual sin intermediarios." },
    ],
    tip: "Seguridad: nunca ingreses tu frase semilla en ningún sitio web. Esa frase es tu dinero completo.",
  },
  {
    id: "trading", icon: "📊", title: "Trading & Análisis Técnico",
    subtitle: "Opera mercados y genera ingresos activos",
    links: [
      { name: "Pionex",       href: "https://accounts.pionex.com/en/signUp?r=0vApPMDEYyi", badge: "Hasta $10,000 USDT", hot: true, desc: "Exchange con 16 bots de trading gratuitos. Automatiza tus ganancias 24/7 sin ser experto en trading." },
      { name: "Bitget",       href: "https://share.bitget.com/u/8NB11A57", badge: "Hasta $6,200 + 50% fee", desc: "Top 5 mundial en futuros. Copy trading de elite: replica estrategias de traders profesionales." },
      { name: "Pocket IA",   href: "https://pocket-friends.co/r/asms7iaoax", badge: "Bono al registrarte", desc: "Trading potenciado con inteligencia artificial. Señales automáticas para maximizar tus operaciones." },
      { name: "RoboForex",   href: "https://my.roboforex.com/es/?a=gyqnr", badge: "Hasta $30 bono", desc: "Broker Forex regulado con 30 años de trayectoria. Opera divisas, acciones y cripto con spreads desde 0." },
      { name: "Rinfinity",   href: "https://rinfinity.com/a/gyqnr", badge: "Bono al registrarte", desc: "Plataforma de inversión automatizada. Genera rendimientos pasivos con bots de trading profesionales." },
      { name: "Weltrade",    href: "https://track.gowt.me/visit/?bta=74709&brand=weltrade", badge: "Bono al registrarte", desc: "Broker Forex internacional regulado. Opera divisas y metales con spreads competitivos y retiros rápidos." },
      { name: "XM",          href: "https://www.xmglobal.com/referral?token=1jVIbOJXgELIltVKpTyjZg", badge: "Bono $30 sin depósito", desc: "Broker Forex regulado globalmente. Opera 1,000+ instrumentos con bono de $30 sin necesidad de depositar." },
      { name: "Deriv Trader", href: "https://deriv.partners/rx?sidc=15BA3885-70AD-45FF-955A-F3726D7C4884&utm_campaign=dynamicworks&utm_medium=affiliate&utm_source=CU74704", badge: "Cuenta demo gratis", desc: "Opera forex, opciones y sintéticos en la plataforma web de Deriv. Demo ilimitada sin depósito." },
      { name: "Próximamente #1", href: "#", badge: " Próximo" },
      { name: "Próximamente #2", href: "#", badge: "🔒 Próximo" },
    ],
    manualLabel: "MANUAL: TU PRIMER TRADE RENTABLE",
    steps: [
      { title: "Estudia análisis técnico básico", desc: "Aprende soporte/resistencia, tendencias y los indicadores RSI y MACD en TradingView. Hay tutoriales gratis en YouTube." },
      { title: "Practica en cuenta demo 30 días", desc: "Pionex y Deriv tienen demos gratuitas. Opera con dinero ficticio hasta lograr 3 semanas consecutivas en positivo." },
      { title: "Define tu estrategia de riesgo", desc: "Regla de oro: arriesga máximo 2% de tu capital por operación. Siempre usa stop-loss sin excepciones." },
      { title: "Empieza con $20 a $50 reales", desc: "Opera pares como BTC/USDT o ETH/USDT en spot. Sin apalancamiento al principio." },
      { title: "Lleva un diario de trades", desc: "Anota cada operación: entrada, salida, razonamiento y resultado. Eso te hace mejorar 10x más rápido." },
    ],
    tip: "El 80% pierde por falta de disciplina, no de conocimiento. El plan importa más que el análisis.",
  },
  {
    id: "apps", icon: "📱", title: "Apps de Ganancias Pasivas",
    subtitle: "Gana dinero real usando tu teléfono",
    links: [
      { name: "Pi Network", href: "https://minepi.com/abundante1999", badge: "Pi gratis al minar", hot: true, desc: "Mina Pi Network desde el móvil sin gastar batería. Acumula coins antes del lanzamiento en exchanges." },
      { name: "Degoo",      href: "https://cloud.degoo.com/drive-y7_y8haoh_-f", badge: "100 GB gratis", desc: "Almacenamiento en la nube con IA. Gana espacio extra invitando amigos y protege tus archivos de forma segura." },
      { name: "Reental",    href: "#", badge: "🔒 Próximamente", desc: "Inversión en bienes raíces tokenizados. Gana rentabilidad mensual en cripto sin comprar propiedades físicas." },
      { name: "RealT",      href: "#", badge: "🔒 Próximamente", desc: "Plataforma de real estate tokenizado en USA. Recibe ingresos por alquiler en DAI directamente a tu wallet." },
      { name: "Terabox", href: "https://www.nephobox.com/referral/4398193446742", badge: "1TB gratis + gana", desc: "1TB de almacenamiento gratis en la nube. Invita amigos y gana recompensas. Accede a contenido exclusivo compartido." },
      { name: "Próximamente #1", href: "#", badge: "🔒 Próximo" },
    ],
    manualLabel: "MANUAL: INGRESO PASIVO CON APPS",
    steps: [
      { title: "Empieza con Pi Network", desc: "Mina gratis desde el móvil. Abre la app una vez al día para activar la minería. Sin consumo de batería." },
      { title: "Activa Degoo y gana espacio", desc: "Almacena tus archivos gratis y gana GB extra invitando amigos. Acumula referidos y cobra comisiones." },
      { title: "Usa tu código de referido", desc: "Cada app te da un código único. Compártelo con amigos y gana un bono por cada persona que se active." },
      { title: "Combina varias apps en paralelo", desc: "Por separado ganan poco, juntas pueden sumar $40 a $100/mes sin esfuerzo activo. La clave es la acumulación." },
    ],
    tip: "Publica una reseña de cada app en TikTok con tu link. Un solo video viral puede darte cientos de referidos.",
  },
  {
    id: "ia", icon: "🤖", title: "Apps de Inteligencia Artificial",
    subtitle: "Usa la IA para crear, vender y automatizar", hot: true,
    links: [
      { name: "ElevenLabs", href: "https://try.elevenlabs.io/up7wrcbk6uh9", badge: "10,000 créditos gratis", desc: "Clona y sintetiza voces con IA. Ofrece servicios de narración, doblaje y podcasts a clientes." },
      { name: "Jasper IA",  href: "TU_LINK_JASPER", badge: "7 días gratis", desc: "Redacción con IA para negocios. Crea blogs, anuncios y emails que venden, y ofrécelo como servicio." },
      { name: "Dolphin Anty", href: "https://dolphin-anty.net/a/5087851/NoZVL05", badge: "3 perfiles gratis", desc: "Navegador anti-detección con IA. Gestiona múltiples cuentas de redes sociales y exchanges sin ser bloqueado." },
      { name: "Próximamente #1", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #2", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #3", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #4", href: "#", badge: "🔒 Próximo" },
    ],
    manualLabel: "MANUAL: GANA DINERO CON IA",
    steps: [
      { title: "Domina ChatGPT y Claude", desc: "Aprende a escribir buenos prompts. Con IA puedes crear artículos, scripts de video, emails y publicaciones en minutos." },
      { title: "Ofrece servicios en Fiverr o Upwork", desc: "Crea voces con ElevenLabs o textos con Jasper. Cobra $20 a $200 por proyecto sin ser experto." },
      { title: "Crea contenido para redes con IA", desc: "Usa IA para generar guiones de TikTok, miniaturas de YouTube y copys de Instagram. Publica con tus links." },
      { title: "Afíliate a las plataformas de IA", desc: "Jasper, Copy.ai y otras pagan hasta 40% de comisión recurrente mensual por cada suscriptor que refieras." },
      { title: "Automatiza tu negocio con IA", desc: "Usa n8n o Make con IA para automatizar respuestas, publicaciones y reportes. Vende esto como servicio." },
    ],
    tip: "La IA no te reemplaza, te hace 10x más productivo. Quien la domine primero tendrá ventaja competitiva enorme.",
  },
  {
    id: "video", icon: "🎬", title: "Edición de Video & Contenido",
    subtitle: "Crea contenido y monetiza tu creatividad",
    links: [
      { name: "CapCut",     href: "https://www.capcut.com/capcut_pc_web/fission_receive?code=486tyE26476846&lng=es-LA", badge: "Pro gratis 7 días", hot: true, desc: "Editor de video viral para TikTok y Reels. Crea contenido profesional desde el móvil y monetiza." },
      { name: "Canva Pro",  href: "TU_LINK_CANVA", badge: "30 días Pro gratis", desc: "Diseño gráfico sin ser diseñador. Crea miniaturas, posts y presentaciones que atraen clientes." },
      { name: "InVideo IA", href: "TU_LINK_INVIDEO", badge: "Plan gratis incluido", desc: "Convierte texto en video con IA. Crea videos para YouTube automáticamente y activa AdSense." },
      { name: "InShot",     href: "https://v.inshot.com/invite", badge: "Gratis + Pro con descuento", desc: "Edita videos y fotos desde el móvil. Publica contenido diario en redes y crece tu audiencia rápido." },
      { name: "Próximamente #1", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #2", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #3", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #4", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #5", href: "#", badge: "🔒 Próximo" },
    ],
    manualLabel: "MANUAL: DE CREADOR A GENERADOR DE INGRESOS",
    steps: [
      { title: "Elige tu nicho y crea tu canal", desc: "Finanzas, cripto, tecnología o estilo de vida. Crea cuentas en TikTok, YouTube Shorts e Instagram Reels." },
      { title: "Graba con tu teléfono y edita en CapCut", desc: "No necesitas cámara profesional. CapCut tiene plantillas virales, subtítulos automáticos y efectos gratis." },
      { title: "Incluye tus links en cada video", desc: "Comparte tu link de ganancias en el video y ponlo en la bio. Cada vista es un potencial registro con comisión." },
      { title: "Publica el mismo video en 3 plataformas", desc: "TikTok + YouTube Shorts + Instagram Reels. El mismo contenido triplica tu alcance sin esfuerzo extra." },
      { title: "Activa monetización directa", desc: "YouTube: 1,000 subs + 4,000 hrs. TikTok: 10,000 seguidores. Mientras llegas, los referidos ya pagan." },
    ],
    tip: "1 video diario por 90 días. La consistencia le gana al talento siempre en redes sociales.",
  },
  {
    id: "juegos", icon: "🎮", title: "Juegos Play-to-Earn",
    subtitle: "Juega y gana criptomonedas reales",
    links: [
      { name: "Sweatcoin",    href: "https://swcapp.com/i/deividcotacachi", badge: "5 SWC al registrarte", hot: true, desc: "Camina y gana. Cada paso que das se convierte en monedas canjeables por dinero o productos reales." },
      { name: "An Earn App",  href: "https://crrnt.me/EYOj8s1jE4b", badge: "Bono de bienvenida", desc: "Completa tareas, ve anuncios y gana dinero real. Retira por PayPal, cripto o tarjeta de regalo." },
      { name: "Faucet Crypto", href: "https://faucetcrypto.com/r/315063", badge: "Crypto gratis cada hora", desc: "Reclama cripto gratis cada hora. Acumula BTC, ETH y más sin invertir un solo centavo." },
      { name: "Shappi",       href: "https://app.shappi.com/?redirection_type=COUPON&type=REFERRED&coupon=BLAC4", badge: "Bono al registrarte", desc: "App de delivery que premia a sus usuarios. Gana cripto por cada compra y por referir amigos." },
      { name: "RollerCoin",   href: "https://rollercoin.com/?r=mak43y4r", badge: "Bonos de minería gratis", desc: "Juego de minería virtual de cripto. Completa misiones, juega minijuegos y gana BTC, ETH y DOGE reales." },
      { name: "1Win",         href: "https://1win.com/?p=ww9t", badge: "Bono 500% primer depósito", desc: "Casino y apuestas deportivas online. Bono de bienvenida del 500% en tu primer depósito. +10,000 juegos." },
      { name: "1Win Token Bot", href: "https://t.me/OneWinTokenBot/start?startapp=refId7650250863", badge: "Gana tokens gratis", desc: "Bot de Telegram de 1Win. Completa misiones diarias, acumula tokens y conviértelos en dinero real." },
      { name: "Próximamente #1", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #2", href: "#", badge: "🔒 Próximo" },
      { name: "Próximamente #3", href: "#", badge: "🔒 Próximo" },
    ],
    manualLabel: "MANUAL: JUEGA Y CONVIERTE EN DINERO",
    steps: [
      { title: "Empieza con juegos gratis", desc: "Sweatcoin y Faucet Crypto no requieren inversión. Ideal para aprender cómo funcionan los tokens." },
      { title: "Conecta tu wallet al juego", desc: "Usa MetaMask o Trust Wallet. Los tokens que ganas van directo a tu wallet, no a una cuenta del juego." },
      { title: "Completa misiones diarias", desc: "Los juegos P2E recompensan la constancia. Las misiones diarias y eventos especiales dan los mejores rewards." },
      { title: "Transfiere tokens al exchange y vende", desc: "Cuando el precio sea favorable, envía tus tokens al exchange y vende por USDT. Luego retira a tu cuenta bancaria." },
    ],
    tip: "Alerta: investiga SIEMPRE antes de invertir dinero en un juego P2E. Empieza solo con los que no requieren inversión inicial.",
  },
];

const EARNINGS = [
  { source: "Referidos de exchange",   amount: "$50-$500",    period: "por mes" },
  { source: "Trading (intermedio)",     amount: "$100-$1,000", period: "por mes" },
  { source: "Apps pasivas",             amount: "$20-$100",    period: "por mes" },
  { source: "Servicios con IA",         amount: "$200-$2,000", period: "por mes" },
  { source: "Contenido + referidos",    amount: "$300-$2,000", period: "por mes" },
  { source: "Juegos P2E",              amount: "$30-$300",    period: "por mes" },
  { source: "Edición freelance",        amount: "$300-$1,500", period: "por mes" },
  { source: "Redes sociales (90 días)",amount: "$300-$800",   period: "por mes" },
];

const MODULOS = [
  { n:"01", title:"Elige tu nicho rentable",             desc:"Finanzas, cripto, tech, lifestyle. Cómo encontrar el nicho que combina tu interés con demanda real de mercado." },
  { n:"02", title:"Configura tus perfiles",              desc:"Bio optimizada, foto de perfil, links en bio, y la estrategia de nombre de usuario que posiciona en buscadores." },
  { n:"03", title:"Crea contenido que vende",            desc:"Estructura de video viral, hooks que detienen el scroll, y cómo insertar tus links de ganancias de forma natural." },
  { n:"04", title:"Estrategia de publicación",           desc:"Horarios óptimos, frecuencia ideal, y cómo reutilizar 1 video en TikTok, YouTube Shorts, Instagram y Facebook." },
  { n:"05", title:"Monetización con referidos",          desc:"Cómo estructurar tus links, usar Linktree, y rastrear cuáles plataformas te generan más comisiones." },
  { n:"06", title:"Crece tu comunidad rápido",           desc:"Colaboraciones, comentarios estratégicos, duetos en TikTok y cómo usar tendencias sin perder tu identidad." },
  { n:"07", title:"Brand deals y patrocinios",           desc:"Cómo contactar marcas, cuánto cobrar según tus seguidores, y cómo crear tu media kit profesional." },
  { n:"08", title:"Escala a ingreso de tiempo completo", desc:"Automatización con IA, delegación, creación de tu propio curso o comunidad de pago. El siguiente nivel." },
];

const PLATAFORMAS = [
  { name:"TikTok",          earn:"$200-$2,000/mes" },
  { name:"YouTube Shorts",  earn:"$100-$1,500/mes" },
  { name:"Instagram Reels", earn:"$150-$1,200/mes" },
  { name:"Facebook",        earn:"$50-$800/mes" },
  { name:"Telegram Canal",  earn:"$100-$3,000/mes" },
  { name:"WhatsApp Status", earn:"$50-$500/mes" },
];

/* ── DONACIONES ── */
const DONACIONES = [
  { icon:"🏦", name:"Banco Pichincha",    detail:"Cuenta: 2212006044",               href:"",                                        color:"#00C6FF" },
  { icon:"💳", name:"PayPal",             detail:"Donar desde $1 dólar",             href:"https://www.paypal.me/BladimirSantacruz", color:"#003087" },
  { icon:"", name:"Binance Pay",        detail:"Próximamente",                     href:"",                                        color:"#F0B90B" },
  { icon:"🔼", name:"Uphold",             detail:"Próximamente",                     href:"",                                        color:"#00C6FF" },
  { icon:"🏦", name:"Banco Bolivariano",  detail:"Próximamente",                     href:"",                                        color:"#00C6FF" },
  { icon:"🏦", name:"Banco Guayaquil",    detail:"Próximamente",                     href:"",                                        color:"#00C6FF" },
  { icon:"🏦", name:"Produbanco",         detail:"Próximamente",                     href:"",                                        color:"#00C6FF" },
  { icon:"🏦", name:"Banco Internacional",detail:"Próximamente",                     href:"",                                        color:"#00C6FF" },
  { icon:"📲", name:"Peigo",              detail:"Próximamente",                     href:"",                                        color:"#00E676" },
  { icon:"📱", name:"De Una App",         detail:"Próximamente",                     href:"",                                        color:"#00E676" },
];

/* ── UTILS ── */
function extractYouTubeId(url: string): string | null {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
  ];
  for (const p of patterns) { const m = url.match(p); if (m) return m[1]; }
  return null;
}

/* ── VIDEO PLAYER ── */
function VideoPlayer() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const load = () => {
    const id = extractYouTubeId(input.trim());
    if (!id) { alert("Link de YouTube no reconocido."); return; }
    setVideoId(id);
  };

  return (
    <div style={{ borderTop:"0.5px solid var(--dark4)" }}>
      <button onClick={() => setOpen(o => !o)} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%", padding:"7px 12px", background:"var(--dark3)", border:"none", cursor:"pointer", fontSize:12, color:"var(--text-muted)", fontFamily:"inherit" }}>
        <span style={{ display:"flex", alignItems:"center", gap:6 }}><span>{"▶"}</span> Video instructivo</span>
        <span style={{ fontSize:10, transform: open ? "rotate(180deg)" : "none", transition:"transform .25s" }}>{"▼"}</span>
      </button>
      {open && (
        <div style={{ background:"var(--dark)" }}>
          {videoId ? (
            <div style={{ position:"relative", paddingBottom:"56.25%", height:0, overflow:"hidden" }}>
              <iframe src={`https://www.youtube.com/embed/${videoId}?rel=0`} allowFullScreen style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", border:"none" }} />
            </div>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:10, padding:"1.25rem", textAlign:"center" }}>
              <div style={{ fontSize:30, opacity:.4 }}>{"🎬"}</div>
              <div style={{ fontSize:12, color:"var(--text-muted)" }}>Pega tu link de YouTube cuando tengas el video</div>
              <div style={{ display:"flex", gap:6, width:"100%", maxWidth:340 }}>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder="https://youtube.com/watch?v=..." style={{ flex:1, background:"var(--dark3)", border:"0.5px solid var(--dark4)", color:"var(--text)", padding:"7px 10px", borderRadius:6, fontSize:12, fontFamily:"inherit" }} />
                <button onClick={load} style={{ background:"var(--gold)", color:"var(--dark)", border:"none", padding:"7px 12px", borderRadius:6, fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap" }}>Cargar</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ── APP LOGO DOMAINS ── */
const APP_DOMAINS: Record<string, string> = {
  "Binance":"binance.com","CoinEx":"coinex.com","Margex":"margex.com","Bybit":"bybit.com",
  "MEXC":"mexc.com","BingX":"bingx.com","Uphold":"uphold.com","AirTM":"airtm.com",
  "Speed Wallet":"speed-wallet.io","Base":"base.org","NC Wallet":"ncwallet.net",
  "Sweat Wallet":"sweateconomy.com","Pionex":"pionex.com","Bitget":"bitget.com",
  "Pocket IA":"pocketoption.com","RoboForex":"roboforex.com","Rinfinity":"rinfinity.com",
  "Weltrade":"weltrade.com","XM":"xm.com","Deriv Trader":"deriv.com",
  "ElevenLabs":"elevenlabs.io","Dolphin Anty":"dolphin-anty.com","Jasper IA":"jasper.ai","CapCut":"capcut.com",
  "Canva Pro":"canva.com","InVideo IA":"invideo.io","InShot":"inshot.com",
  "Sweatcoin":"sweatco.in","An Earn App":"anearnapp.com","Faucet Crypto":"faucetcrypto.com",
  "Shappi":"shappi.io","RollerCoin":"rollercoin.com","1Win":"1win.com",
  "Degoo":"degoo.com","Reental":"reental.co","RealT":"realt.co","Pi Network":"minepi.com","Telegram Wallet":"telegram.org","Terabox":"terabox.com","1Win Token Bot":"t.me",
};

// Mapa de nombre de app → nombre de archivo real en public/imagenes/
const IMAGE_FILES: Record<string, string> = {
  "Binance":        "binance",
  "CoinEx":         "coinex",
  "Margex":         "margex",
  "Bybit":          "bybit",
  "MEXC":           "mexc",
  "BingX":          "bingx",
  "Uphold":         "uphold",
  "AirTM":          "airtm",
  "Speed Wallet":   "speed-wallet",
  "Base":           "base-wallet",
  "NC Wallet":      "nc-wallet",
  "Sweat Wallet":   "sweat-wallet",
  "Telegram Wallet":"telegram-wallet",
  "Pionex":         "pionex",
  "Bitget":         "bitget",
  "Pocket IA":      "pocket-ia",
  "RoboForex":      "roboforex",
  "Rinfinity":      "rinfinity",
  "Weltrade":       "weltrade",
  "XM":             "xm",
  "Deriv Trader":   "deriv",
  "Pi Network":     "pi-network",
  "Degoo":          "degoo",
  "Reental":        "reental",
  "Terabox":        "terabox",
  "ElevenLabs":     "eleven-labs",
  "Jasper IA":      "jasper-ia",
  "Dolphin Anty":   "dolphin-anty",
  "CapCut":         "Capcut-Logo",
  "Canva Pro":      "canva-pro",
  "InVideo IA":     "invideo",
  "InShot":         "inshot",
  "Sweatcoin":      "sweatcoin",
  "An Earn App":    "earn",
  "Faucet Crypto":  "faucet",
  "Shappi":         "shappi",
  "RollerCoin":     "rollercoin",
  "1Win":           "1win",
  "1Win Token Bot": "1win",
};

function getImageSlug(name: string): string {
  return IMAGE_FILES[name] || name.toLowerCase().replace(/ /g, "-").replace(/[^a-z0-9-]/g, "");
}

function getLogoUrl(name: string) { const d = APP_DOMAINS[name]; return d ? `https://logo.clearbit.com/${d}` : ""; }
function getFaviconUrl(name: string) { const d = APP_DOMAINS[name]; return d ? `https://www.google.com/s2/favicons?domain=${d}&sz=64` : ""; }

/* ── EARNING TIPS por plataforma ── */
const EARNING_TIPS: Record<string, string> = {
  "Binance":        "💡 Copia las operaciones de traders top en Binance Copy Trading. Sin experiencia previa.",
  "CoinEx":         "💡 Usa el mercado de futuros en CoinEx: opera con $10 y aplica apalancamiento x5 para maximizar ganancias.",
  "Margex":         " Activa el staking en Margex mientras tienes posiciones abiertas. Ganas intereses sin hacer nada extra.",
  "Bybit":          "💡 Copia traders profesionales en Bybit CopyTrade. Ellos operan, tú ganas % de sus beneficios.",
  "MEXC":           "💡 En MEXC compra altcoins nuevas antes del listado oficial. El precio puede subir 5x en horas.",
  "BingX":          "💡 Activa el Copy Trading de BingX: selecciona un trader con +80% win rate y copia sus trades automáticamente.",
  "Uphold":         "💡 Deposita USDT en Uphold y activa el staking. Gana hasta 6% anual sin mover un dedo.",
  "AirTM":          "💡 Conviértete en cajero P2P en AirTM. Compra y vende dólares digitales y cobra comisión por cada transacción.",
  "Speed Wallet":   "💡 Recibe pagos en Bitcoin Lightning al instante. Cobra servicios freelance sin comisiones bancarias.",
  "Base":           "💡 Usa la red Base para acceder a DeFi barato. Liquidity pools con rendimientos del 10% al 40% mensual.",
  "NC Wallet":      "💡 Invita amigos a NC Wallet y gana % de cada transacción que hagan. Sin límite de referidos.",
  "Sweat Wallet":   " Camina 10,000 pasos al día y acumula SWEAT. Cambia tus tokens por dinero real en el exchange.",
  "Telegram Wallet":"💡 Recibe cripto directo en Telegram. Pide donaciones o pagos a tu comunidad sin salir del chat.",
  "Pionex":         " Activa el bot Grid Trading de Pionex con $50. Opera 24/7 automáticamente y genera entre 1% y 5% mensual.",
  "Bitget":         "💡 Copia al trader #1 de Bitget CopyTrade. Con $100 puedes ganar lo mismo que un profesional.",
  "Pocket IA":      "💡 Sigue las señales de IA de Pocket Option. La IA analiza el mercado y te dice cuándo entrar y salir.",
  "RoboForex":      "💡 Abre cuenta PAMM en RoboForex: invierte en cuentas de traders profesionales y gana % de sus ganancias.",
  "Rinfinity":      "💡 Activa los bots de Rinfinity con $50 mínimo. Los algoritmos operan forex 24/7 mientras tú descansas.",
  "Weltrade":       "💡 Usa la cuenta Cent de Weltrade para practicar con dinero real desde $1. Aprende sin arriesgar.",
  "XM":             "💡 Reclama el bono de $30 sin depósito de XM. Opera forex real sin poner dinero propio al inicio.",
  "Deriv Trader":   "💡 Prueba las opciones binarias de Deriv con la cuenta demo. Cuando domines la estrategia, opera real.",
  "Pi Network":     " Mina Pi gratis una vez al día. Invita amigos para multiplicar tu velocidad de minería x3.",
  "Degoo":          "💡 Invita 3 amigos a Degoo y consigue 1TB extra gratis. Ofrece almacenamiento a clientes como servicio.",
  "Reental":        "💡 Invierte desde €100 en propiedades tokenizadas. Recibe renta mensual en cripto sin ser propietario.",
  "RealT":          "💡 Compra fracciones de casas en USA desde $50. Recibe alquiler semanal en DAI directo a tu wallet.",
  "Terabox":        "💡 Comparte tus archivos públicos en Terabox y gana recompensas por cada descarga de tu contenido.",
  "ElevenLabs":     "💡 Clona tu voz en ElevenLabs y vende narración de audiolibros en ACX. Cobras por cada hora de audio.",
  "Jasper IA":      "💡 Escribe artículos SEO con Jasper en 10 minutos. Véndelos en Fiverr a $20-$50 cada uno.",
  "Dolphin Anty":   "💡 Crea múltiples cuentas de redes sociales con Dolphin Anty. Multiplica tus referidos x10 sin ser detectado.",
  "CapCut":         "💡 Crea 3 videos cortos al día con CapCut. Publica en TikTok, Reels y Shorts para triplicar tu alcance.",
  "Canva Pro":      "💡 Diseña packs de templates en Canva y véndelos en Etsy o Gumroad. Un pack puede valer $15-$50.",
  "InVideo IA":     "💡 Escribe un prompt en InVideo y genera un video de YouTube en 5 minutos. Activa AdSense y genera ingresos pasivos.",
  "InShot":         "💡 Edita Reels virales con InShot en el móvil. La clave: subtítulos automáticos + música trending.",
  "Sweatcoin":      "💡 Camina 10,000 pasos diarios y acumula SWC. Canjéalos por PayPal, Amazon o cripto real.",
  "An Earn App":    "💡 Completa las tareas diarias de An Earn App en 15 minutos. Retira por PayPal cuando llegues al mínimo.",
  "Faucet Crypto":  "💡 Reclama cripto cada hora en Faucet Crypto. Con referidos activos puedes ganar el doble de rewards.",
  "Shappi":         "💡 Compra con Shappi y gana cripto de cashback. Invita amigos y gana % de sus compras de por vida.",
  "RollerCoin":     "💡 Juega los minijuegos de RollerCoin 30 min al día. Acumula poder de minería y gana BTC, ETH y DOGE reales.",
  "1Win":           "💡 Usa la estrategia Martingala con control en 1Win. Apuesta al equipo favorito con análisis previo.",
  "1Win Token Bot": " Completa las misiones del bot diariamente. Acumula tokens y espera el listing para venderlos al mejor precio.",
};

/* ── REF ITEM (OPTIMIZADO: SOLO .JPG) ─ */
function RefItem({ item }: { item: RefItem }) {
  const [imgFormat, setImgFormat] = useState<"jpg" | "remote" | "favicon" | "none">("jpg");
  const [bannerError, setBannerError] = useState(false);
  const logoUrl = getLogoUrl(item.name);
  const faviconUrl = getFaviconUrl(item.name);
  const isPending = item.href === "#";
  const slug = getImageSlug(item.name);

  const renderIcon = () => {
    if (imgFormat === "jpg") return (
      <img src={`/imagenes/${slug}.jpg`} alt={item.name} width={28} height={28}
        onError={() => setImgFormat("remote")}
        style={{ borderRadius:6, objectFit:"contain", background:"white", padding:2, flexShrink:0 }} />
    );
    if (imgFormat === "remote" && logoUrl) return (
      <img src={logoUrl} alt={item.name} width={28} height={28}
        onError={() => setImgFormat("favicon")}
        style={{ borderRadius:6, objectFit:"contain", background:"white", padding:2, flexShrink:0 }} />
    );
    if (imgFormat === "favicon" && faviconUrl) return (
      <img src={faviconUrl} alt={item.name} width={28} height={28}
        style={{ borderRadius:6, objectFit:"contain", flexShrink:0 }} />
    );
    return <div style={{ width:28, height:28, borderRadius:6, background:"var(--dark4)", flexShrink:0 }} />;
  };

  return (
    <div style={{ border:`0.5px solid ${item.hot ? "var(--gold-dark)" : "var(--dark4)"}`, borderRadius:8, overflow:"hidden", opacity: isPending ? 0.5 : 1 }}>
      <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={isPending ? e => e.preventDefault() : undefined}
        style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 12px", textDecoration:"none", background:"var(--dark3)", color:"var(--text)", fontSize:13, borderBottom:"0.5px solid var(--dark4)" }}>
        {renderIcon()}
        <span style={{ flex:1, fontWeight:500 }}>{item.name}</span>
        <span style={{ fontSize:11, padding:"2px 8px", borderRadius:10, whiteSpace:"nowrap", background: item.hot ? "rgba(0,198,255,0.15)" : "var(--dark4)", color: item.hot ? "var(--gold-light)" : "var(--gold)", border:`0.5px solid ${item.hot ? "var(--gold)" : "var(--gold-dark)"}` }}>
          {item.badge}
        </span>
      </a>
      {!isPending && EARNING_TIPS[item.name] && (
        <div style={{ display:"flex", alignItems:"flex-start", gap:12, padding:"12px 14px", background:"linear-gradient(135deg, #0A1628 0%, #0F2040 100%)", borderBottom:"0.5px solid var(--dark4)" }}>
          <img
            src={`/imagenes/${slug}.jpg`}
            alt={item.name}
            width={44} height={44}
            onError={(e) => {
              const t = e.currentTarget;
              if (t.src.endsWith(".jpg") && logoUrl) { t.src = logoUrl; }
              else { t.style.display = "none"; }
            }}
            style={{ objectFit:"contain", background:"white", borderRadius:8, padding:"4px", flexShrink:0 }}
          />
          <div style={{ flex:1 }}>
            <div style={{ fontSize:10, fontWeight:700, color:"var(--gold)", letterSpacing:"1px", marginBottom:3 }}>
              {" CÓMO GANAR CON " + item.name.toUpperCase()}
            </div>
            <p style={{ fontSize:12, color:"#B8D5EA", lineHeight:1.6, margin:0 }}>
              {EARNING_TIPS[item.name]}
            </p>
            <a href={item.href} target="_blank" rel="noopener noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:4, marginTop:6, fontSize:11, color:"var(--gold)", textDecoration:"none", background:"rgba(0,198,255,0.1)", border:"0.5px solid var(--gold-dark)", borderRadius:20, padding:"3px 10px" }}>
              {"🚀 Registrarte ahora →"}
            </a>
          </div>
        </div>
      )}
      {!isPending && item.desc && (
        <div style={{ padding:"10px 14px", background:"var(--dark2)", borderBottom:"0.5px solid var(--dark4)" }}>
          <p style={{ fontSize:12, color:"var(--text-muted)", lineHeight:1.6, marginBottom:8 }}>{item.desc}</p>
          <div style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:11, color:"var(--gold)", background:"rgba(0,198,255,0.08)", border:"0.5px solid var(--gold-dark)", borderRadius:20, padding:"3px 12px" }}>
            <span>{"🎬"}</span><span>{"¡Aquí está el video instructivo! Ábrelo abajo 👇"}</span>
          </div>
        </div>
      )}
      {!isPending && <VideoPlayer />}
    </div>
  );
}

/* ── CATEGORY CARD (CON BINANCE Y COINEX EN 2 COLUMNAS) ── */
function CategoryCard({ cat, onAddLink }: { cat: Category; onAddLink: (id: string) => void }) {
  const [links] = useState<RefItem[]>(cat.links);
  return (
    <div id={cat.id} style={{ background:"var(--dark2)", border:"0.5px solid var(--dark4)", borderRadius:10, marginBottom:"2rem", overflow:"hidden" }}>
      <div style={{ display:"flex", alignItems:"center", gap:12, padding:"1rem 1.5rem", borderBottom:"0.5px solid var(--dark4)", background:"var(--dark3)" }}>
        <span style={{ fontSize:22 }}>{cat.icon}</span>
        <div>
          <div style={{ fontSize:16, fontWeight:600, color:"var(--gold)" }}>{cat.title}</div>
          <div style={{ fontSize:12, color:"var(--text-muted)" }}>{cat.subtitle}</div>
        </div>
        {cat.hot && <span style={{ marginLeft:"auto", fontSize:11, padding:"2px 10px", borderRadius:20, background:"rgba(0,198,255,0.15)", color:"var(--gold-light)", border:"0.5px solid var(--gold)" }}>{cat.id === "ia" ? "Tendencia 2025" : "Más popular"}</span>}
      </div>
      <div className="cat-body" style={{ display:"grid", gridTemplateColumns:"1fr 1fr" }}>
        <div className="cat-left-col" style={{ padding:"1.5rem", borderRight:"0.5px solid var(--dark4)" }}>
          <span style={{ fontSize:11, letterSpacing:"1.5px", color:"var(--gold-dark)", marginBottom:"0.6rem", display:"block" }}>{"🚀 ACCEDE · REGÍSTRATE · GANA"}</span>
          <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
            
            {/* 👇 AQUÍ ESTÁ LA MAGIA: 2 COLUMNAS SOLO PARA EXCHANGE */}
            {cat.id === "exchange" ? (
              <>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:6 }}>
                  {links.slice(0, 2).map((lnk, i) => <RefItem key={`ex-top-${i}`} item={lnk} />)}
                </div>
                {links.slice(2).map((lnk, i) => <RefItem key={`ex-rest-${i}`} item={lnk} />)}
              </>
            ) : (
              links.map((lnk, i) => <RefItem key={i} item={lnk} />)
            )}
            {/* 👆 FIN DE LA MAGIA */}

            <button onClick={() => onAddLink(cat.id)} style={{ display:"flex", alignItems:"center", gap:6, background:"transparent", border:"0.5px dashed var(--dark4)", borderRadius:6, padding:"8px 12px", color:"var(--text-muted)", fontSize:13, cursor:"pointer", width:"100%", fontFamily:"inherit", marginTop:2 }}>
              + Agregar plataforma
            </button>
          </div>
        </div>
        <div style={{ padding:"1.5rem" }}>
          <span style={{ fontSize:11, letterSpacing:"1.5px", color:"var(--gold-dark)", marginBottom:"0.75rem", display:"block" }}>{cat.manualLabel}</span>
          {cat.steps.map((s, i) => (
            <div key={i} style={{ display:"flex", gap:10, marginBottom:12, alignItems:"flex-start" }}>
              <div style={{ width:22, height:22, borderRadius:"50%", background:"var(--dark4)", border:"0.5px solid var(--gold-dark)", color:"var(--gold)", fontSize:11, fontWeight:600, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>{i + 1}</div>
              <div>
                <strong style={{ display:"block", fontSize:13, fontWeight:500, color:"var(--text)", marginBottom:1 }}>{s.title}</strong>
                <p style={{ fontSize:12, color:"var(--text-muted)", lineHeight:1.55 }}>{s.desc}</p>
              </div>
            </div>
          ))}
          <div style={{ display:"flex", alignItems:"flex-start", gap:8, background:"rgba(0,198,255,0.07)", border:"0.5px solid var(--gold-dark)", borderRadius:8, padding:"10px 12px", marginTop:10, fontSize:12, color:"var(--gold-light)", lineHeight:1.5 }}>
            <span style={{ color:"var(--gold)", flexShrink:0 }}>{"★"}</span>{cat.tip}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── ADD LINK MODAL ── */
function AddLinkModal({ catId, onClose, onSave }: { catId: string; onClose: () => void; onSave: (catId: string, item: RefItem) => void; }) {
  const [name, setName] = useState(""); const [url, setUrl] = useState(""); const [badge, setBadge] = useState("");
  const save = () => { if (!name || !url) { alert("Nombre y URL son requeridos."); return; } onSave(catId, { name, href: url, badge }); onClose(); };
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.8)", zIndex:200, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ background:"var(--dark2)", border:"0.5px solid var(--gold-dark)", borderRadius:10, padding:"2rem", width:"90%", maxWidth:400 }}>
        <h3 style={{ color:"var(--gold)", marginBottom:"1rem", fontSize:16 }}>Agregar plataforma</h3>
        {[{val:name,set:setName,ph:"Nombre de la plataforma"},{val:url,set:setUrl,ph:"https://tu-link.com"},{val:badge,set:setBadge,ph:"Badge (ej: Bono $50)"}].map(({val,set,ph},i) => (
          <input key={i} value={val} onChange={e => set(e.target.value)} placeholder={ph} style={{ width:"100%", background:"var(--dark3)", border:"0.5px solid var(--dark4)", color:"var(--text)", padding:"10px 14px", borderRadius:8, fontSize:14, marginBottom:10, fontFamily:"inherit", outline:"none" }} />
        ))}
        <div style={{ display:"flex", gap:10, marginTop:4 }}>
          <button onClick={save} style={{ background:"var(--gold)", color:"var(--dark)", border:"none", padding:"8px 18px", borderRadius:8, fontSize:14, cursor:"pointer", fontFamily:"inherit" }}>Guardar</button>
          <button onClick={onClose} style={{ background:"transparent", color:"var(--gold)", border:"1px solid var(--gold-dark)", padding:"8px 18px", borderRadius:8, fontSize:14, cursor:"pointer", fontFamily:"inherit" }}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

/* ── CURSO REDES ── */
const PLAN_90 = [
  { n:1, t:"Días 1 al 10: Configura todo",       d:"Perfiles activos, bonos reclamados y primeros 3 videos publicados." },
  { n:2, t:"Días 11 al 30: Consistencia diaria", d:"1 video por día. Analiza qué formato tiene más vistas y doble apuesta en ese estilo." },
  { n:3, t:"Días 31 al 60: Optimizar y crecer",  d:"Colabora con otros creadores, responde comentarios, usa IA para acelerar la producción." },
  { n:4, t:"Días 61 al 90: Monetización activa", d:"Ya tienes audiencia. Activa AdSense, busca brand deals y tus referidos ya generan ingresos pasivos." },
];

function CursoRedes() {
  return (
    <div id="redes" style={{ background:"var(--dark3)", borderTop:"0.5px solid var(--dark4)", borderBottom:"0.5px solid var(--dark4)", padding:"3.5rem 2rem" }}>
      <div style={{ maxWidth:1060, margin:"0 auto" }}>
        <span style={{ fontSize:11, letterSpacing:2, color:"var(--gold)", marginBottom:"0.4rem", display:"block" }}>CURSO COMPLETO</span>
        <h2 style={{ fontSize:26, fontWeight:600, marginBottom:"0.4rem" }}>Monetización de Redes Sociales</h2>
        <p style={{ color:"var(--text-muted)", marginBottom:"2.5rem", fontSize:15 }}>De cero seguidores a ingresos reales. Un curso completo incluido en este sitio, sin costo.</p>
        <div style={{ background:"var(--dark2)", border:"1px solid var(--gold-dark)", borderRadius:10, overflow:"hidden" }}>
          <div style={{ background:"var(--dark3)", padding:"1.25rem 1.5rem", borderBottom:"0.5px solid var(--dark4)", display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ fontSize:22 }}>{""}</span>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:16, fontWeight:600, color:"var(--gold)" }}>{"Curso: Gana dinero con tus redes sociales"}</div>
              <div style={{ fontSize:12, color:"var(--text-muted)" }}>{"8 módulos · Bilingüe · Aplica desde hoy"}</div>
            </div>
            <span style={{ background:"var(--gold)", color:"var(--dark)", fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:20 }}>GRATIS</span>
          </div>
          <div className="curso-body" style={{ display:"grid", gridTemplateColumns:"1fr 1fr" }}>
            <div style={{ padding:"1.5rem", borderRight:"0.5px solid var(--dark4)" }}>
              <span style={{ fontSize:11, letterSpacing:"1.5px", color:"var(--gold-dark)", marginBottom:"0.75rem", display:"block" }}>MÓDULOS DEL CURSO</span>
              {MODULOS.map((m, i) => (
                <div key={i} style={{ display:"flex", gap:12, marginBottom:"1rem", paddingBottom:"1rem", borderBottom: i < MODULOS.length-1 ? "0.5px solid var(--dark4)" : "none" }}>
                  <div style={{ width:32, height:32, borderRadius:8, background:"var(--dark4)", border:"0.5px solid var(--gold-dark)", color:"var(--gold)", fontSize:13, fontWeight:600, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{m.n}</div>
                  <div>
                    <div style={{ fontSize:13, fontWeight:500, color:"var(--text)", marginBottom:2 }}>{m.title}</div>
                    <div style={{ fontSize:12, color:"var(--text-muted)", lineHeight:1.5 }}>{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding:"1.5rem" }}>
              <span style={{ fontSize:11, letterSpacing:"1.5px", color:"var(--gold-dark)", marginBottom:"0.75rem", display:"block" }}>PLATAFORMAS Y SU POTENCIAL</span>
              <div className="plat-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:"1rem" }}>
                {PLATAFORMAS.map((p, i) => (
                  <div key={i} style={{ background:"var(--dark3)", border:"0.5px solid var(--dark4)", borderRadius:8, padding:"10px 12px" }}>
                    <div style={{ fontSize:13, fontWeight:500, color:"var(--text)", marginBottom:2 }}>{p.name}</div>
                    <div style={{ fontSize:12, color:"var(--green)" }}>{p.earn}</div>
                  </div>
                ))}
              </div>
              <span style={{ fontSize:11, letterSpacing:"1.5px", color:"var(--gold-dark)", marginBottom:"0.75rem", display:"block" }}>PLAN DE ACCIÓN: 90 DÍAS</span>
              {PLAN_90.map(s => (
                <div key={s.n} style={{ display:"flex", gap:10, marginBottom:12 }}>
                  <div style={{ width:22, height:22, borderRadius:"50%", background:"var(--dark4)", border:"0.5px solid var(--gold-dark)", color:"var(--gold)", fontSize:11, fontWeight:600, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{s.n}</div>
                  <div>
                    <strong style={{ display:"block", fontSize:13, fontWeight:500, color:"var(--text)" }}>{s.t}</strong>
                    <p style={{ fontSize:12, color:"var(--text-muted)" }}>{s.d}</p>
                  </div>
                </div>
              ))}
              <div style={{ display:"flex", gap:8, background:"rgba(0,198,255,0.07)", border:"0.5px solid var(--gold-dark)", borderRadius:8, padding:"10px 12px", fontSize:12, color:"var(--gold-light)" }}>
                <span style={{ color:"var(--gold)" }}>{"★"}</span>
                <span>{"Meta realista: $300 a $800/mes al día 90 combinando referidos + monetización + 1 brand deal."}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── DONACIONES ── */
function SeccionDonaciones() {
  const [copied, setCopied] = useState("");
  const copy = (text: string, name: string) => {
    navigator.clipboard.writeText(text).then(() => { setCopied(name); setTimeout(() => setCopied(""), 2000); });
  };
  return (
    <div style={{ background:"var(--dark2)", borderTop:"0.5px solid var(--dark4)", borderBottom:"0.5px solid var(--dark4)", padding:"3.5rem 2rem" }}>
      <div style={{ maxWidth:1060, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"2.5rem" }}>
          <span style={{ fontSize:11, letterSpacing:2, color:"var(--gold)", display:"block", marginBottom:"0.4rem" }}>APOYA ESTE PROYECTO</span>
          <h2 style={{ fontSize:26, fontWeight:700, marginBottom:"0.75rem" }}>
            {"☕ Apóyame con tu voluntad"}
          </h2>
          <p style={{ color:"var(--text-muted)", fontSize:15, maxWidth:600, margin:"0 auto" }}>
            Si este contenido te ha ayudado a dar el primer paso hacia tu libertad financiera, considera apoyarme con tan solo <strong style={{ color:"var(--gold)" }}>$1 dólar</strong>. Tu gesto me ayuda a seguir creando contenido gratuito para ti.
          </p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:"1rem" }}>
          {DONACIONES.map((d, i) => (
            <div key={i} style={{ background:"var(--dark3)", border:`0.5px solid ${d.detail === "Próximamente" ? "var(--dark4)" : "var(--gold-dark)"}`, borderRadius:10, padding:"1.25rem", opacity: d.detail === "Próximamente" ? 0.55 : 1 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                <span style={{ fontSize:22 }}>{d.icon}</span>
                <div>
                  <div style={{ fontSize:14, fontWeight:600, color:"var(--text)" }}>{d.name}</div>
                  <div style={{ fontSize:12, color: d.detail === "Próximamente" ? "var(--text-muted)" : "var(--gold)", marginTop:2 }}>{d.detail}</div>
                </div>
              </div>
              {d.detail !== "Próximamente" && (
                <button
                  onClick={() => copy(d.detail.replace("Cuenta: ", ""), d.name)}
                  style={{ width:"100%", marginTop:6, background: copied === d.name ? "var(--green)" : "rgba(0,198,255,0.12)", border:`0.5px solid ${copied === d.name ? "var(--green)" : "var(--gold-dark)"}`, color: copied === d.name ? "#000" : "var(--gold)", borderRadius:8, padding:"8px 12px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"inherit", transition:"all .2s" }}
                >
                  {copied === d.name ? "✓ ¡Copiado!" : "Copiar número"}
                </button>
              )}
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:"2rem", padding:"1.25rem", background:"rgba(0,198,255,0.06)", border:"0.5px solid var(--gold-dark)", borderRadius:12 }}>
          <p style={{ fontSize:13, color:"var(--text-muted)" }}>
            {"💙 Cada aporte, por pequeño que sea, hace posible que este sitio siga siendo "}<strong style={{ color:"var(--gold)" }}>100% gratuito</strong>{" para todos. ¡Gracias por tu generosidad!"}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── MAIN PAGE ── */
export default function Page() {
  const [categories, setCategories] = useState<Category[]>(CATEGORIES);
  const [modalCat, setModalCat] = useState<string | null>(null);
  const handleAddLink = useCallback((catId: string) => setModalCat(catId), []);
  const handleSave = useCallback((catId: string, item: RefItem) => {
    setCategories(prev => prev.map(c => c.id === catId ? { ...c, links: [...c.links, item] } : c));
  }, []);

  return (
    <>
      <style>{`
        :root {
          --gold:#00C6FF; --gold-light:#80E8FF; --gold-dark:#0077AA;
          --dark:#050D18; --dark2:#0A1628; --dark3:#0F1F38; --dark4:#162840;
          --text:#E8F4FF; --text-muted:#7AAAC8; --green:#00E676; --radius:10px;
        }
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { background:var(--dark); color:var(--text); font-family:'Segoe UI',system-ui,sans-serif; }
        a:hover { color:var(--gold) !important; }
        @media (max-width:900px){
          .desktop-menu { display:none !important; }
          .mobile-button { display:block !important; background:none; border:none; color:white; font-size:30px; cursor:pointer; }
          .cat-body { grid-template-columns:1fr !important; }
          .cat-left-col { border-right:none !important; border-bottom:1px solid var(--dark4) !important; }
          .curso-body { grid-template-columns:1fr !important; }
          .plat-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      <Navbar />

      {/* HERO */}
      <section style={{ position:"relative", overflow:"hidden", padding:"7rem 2rem", textAlign:"center", background:"linear-gradient(135deg,#050D18 0%,#081729 40%,#102B4A 100%)" }}>
        <div style={{ position:"absolute", width:500, height:500, background:"#00C6FF22", borderRadius:"50%", filter:"blur(140px)", top:-180, right:-150 }} />
        <div style={{ position:"absolute", width:350, height:350, background:"#00E67622", borderRadius:"50%", filter:"blur(130px)", bottom:-150, left:-100 }} />
        <div style={{ position:"relative", maxWidth:1100, margin:"auto", zIndex:2 }}>
          <div style={{ display:"inline-block", padding:"8px 18px", borderRadius:40, background:"rgba(0,198,255,.15)", color:"#00C6FF", border:"1px solid #00C6FF", fontWeight:600, marginBottom:25 }}>
            {"🚀 Más de 30 plataformas para ganar dinero online"}
          </div>
          <h1 style={{ fontSize:"clamp(2.7rem,7vw,5rem)", fontWeight:800, lineHeight:1.1, marginBottom:25 }}>
            {"Construye múltiples"}<br /><span style={{ color:"#00C6FF" }}>{"fuentes de ingresos"}</span>
          </h1>
          <p style={{ maxWidth:780, margin:"auto", fontSize:20, color:"#B8D5EA", lineHeight:1.8 }}>
            {"Aprende criptomonedas, trading, inteligencia artificial, billeteras digitales, creación de contenido y herramientas para generar ingresos desde Internet."}
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:20, flexWrap:"wrap", marginTop:45 }}>
            <a href="#exchange" style={{ background:"#00C6FF", color:"#000", padding:"16px 35px", borderRadius:12, fontWeight:700, textDecoration:"none" }}>{"💰 Ver Plataformas"}</a>
            <a href="#redes" style={{ border:"1px solid #00C6FF", color:"#00C6FF", padding:"16px 35px", borderRadius:12, textDecoration:"none", fontWeight:700 }}>{"🎓 Curso Gratis"}</a>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))", gap:25, marginTop:70 }}>
            {[["30+","Plataformas"],["8","Categorías"],["100%","Gratis"],["24/7","Disponible"]].map(([n,t]) => (
              <div key={t} style={{ background:"rgba(255,255,255,.05)", border:"1px solid rgba(255,255,255,.08)", padding:25, borderRadius:15 }}>
                <h2 style={{ color:"#00C6FF", fontSize:34, marginBottom:8 }}>{n}</h2>
                <p style={{ color:"#A5C4DA", fontSize:15 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))", gap:1, background:"var(--dark4)" }}>
        {[["8","Categorías"],["30+","Plataformas"],["$0","Para empezar"],["1","Curso incluido"],["24/7","Ingresos pasivos"]].map(([n,l]) => (
          <div key={l} style={{ background:"var(--dark2)", padding:"1.5rem", textAlign:"center" }}>
            <div style={{ fontSize:28, fontWeight:700, color:"var(--gold)" }}>{n}</div>
            <div style={{ fontSize:12, color:"var(--text-muted)", marginTop:4 }}>{l}</div>
          </div>
        ))}
      </div>

      {/* CATEGORIES */}
      <div style={{ maxWidth:1060, margin:"0 auto", padding:"3.5rem 2rem" }}>
        <span style={{ fontSize:11, letterSpacing:2, color:"var(--gold)", marginBottom:"0.4rem", display:"block" }}>PLATAFORMAS Y MANUALES</span>
        <h2 style={{ fontSize:26, fontWeight:600, marginBottom:"0.4rem" }}>Todas las categorías</h2>
        <p style={{ color:"var(--text-muted)", marginBottom:"2.5rem", fontSize:15 }}>
          {"💰 Cada plataforma es una oportunidad. Regístrate, reclama tu bono y activa tu fuente de ingresos."}
        </p>
        {categories.map(cat => <CategoryCard key={cat.id} cat={cat} onAddLink={handleAddLink} />)}
      </div>

      <CursoRedes />

      {/* GANANCIAS */}
      <div style={{ maxWidth:1060, margin:"0 auto", padding:"3.5rem 2rem" }}>
        <span style={{ fontSize:11, letterSpacing:2, color:"var(--gold)", marginBottom:"0.4rem", display:"block" }}>POTENCIAL DE INGRESOS</span>
        <h2 style={{ fontSize:26, fontWeight:600, marginBottom:"0.4rem" }}>¿Cuánto puedes ganar?</h2>
        <p style={{ color:"var(--text-muted)", marginBottom:"2rem", fontSize:15 }}>Estimados reales de la comunidad. Resultados varían según dedicación y estrategia.</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"0.75rem" }}>
          {EARNINGS.map((e, i) => (
            <div key={i} style={{ background:"var(--dark2)", border:"0.5px solid var(--dark4)", borderRadius:10, padding:"1rem" }}>
              <div style={{ fontSize:12, color:"var(--text-muted)", marginBottom:4 }}>{e.source}</div>
              <div style={{ fontSize:20, fontWeight:600, color:"var(--green)" }}>{e.amount}</div>
              <div style={{ fontSize:11, color:"var(--text-muted)" }}>{e.period}</div>
            </div>
          ))}
        </div>
      </div>

      {/* DONACIONES */}
      <SeccionDonaciones />

      {/* FOOTER */}
      <footer style={{ background:"var(--dark2)", borderTop:"0.5px solid var(--dark4)", padding:"2rem", textAlign:"center", color:"var(--text-muted)", fontSize:13 }}>
        <div style={{ fontSize:20, fontWeight:700, color:"var(--gold)", marginBottom:"0.5rem" }}>
          Dinero<span style={{ color:"var(--text)", fontWeight:400 }}> Abundante</span>
        </div>
        <p>{"De la escasez a la abundancia — cada plataforma que activas es un paso hacia tu libertad financiera. Juntos construimos riqueza real."}</p>
        <p style={{ marginTop:"0.4rem", fontSize:12, color:"#1e3a52" }}>Las ganancias mostradas son estimadas y no garantizadas. Invierte solo lo que puedas permitirte perder.</p>
      </footer>

      {modalCat && <AddLinkModal catId={modalCat} onClose={() => setModalCat(null)} onSave={handleSave} />}
    </>
  );
}