"use client";
import { useState } from "react";
import type { RefItem as RefItemType } from "@/types";
import { EARNING_TIPS } from "@/data/logos";
import { GUIAS, type Riesgo, type Forma } from "@/data/formas";
import { getImageSlug, getLogoUrl, getFaviconUrl } from "@/lib/utils";
import { trackReferralClick, trackEvent } from "@/lib/tracking";

interface Props {
  item: RefItemType;
  categoryId: string;
}

/* Descripciones cortas por plataforma (si una no está aquí, usa su desc original) */
const DESC_CORTAS: Record<string, string> = {
  Binance: "El exchange #1 del mundo: +350 criptos, comisiones bajas y más formas de ganar: Earn, referidos, airdrops y copy trading.",
  Bybit: "Líder en futuros y copy trading: bots gratis, Launchpad y hasta 50% de comisión por referidos.",
  CoinEx: "+700 monedas para cazar gemas y 20% de comisiones de tus referidos, de por vida.",
  Margex: "Futuros con staking integrado: tu cripto genera intereses mientras operas.",
  OKX: "Exchange top con Web3 wallet integrada: opera, stakea y usa dApps sin salir de la app.",
  KuCoin: "La casa de las gemas: lista tokens antes que nadie y gana con lending y referidos.",
  MEXC: "Cero comisiones en spot y los listados más rápidos: ideal para tokens recién nacidos.",
  "Gate.io": "Exchange veterano con +1,700 mercados: airdrops, startup y copy trading incluidos.",
  "Trust Wallet": "Wallet móvil multimoneda: tus claves, tus criptos. Staking y dApps en un toque.",
  MetaMask: "La puerta a Ethereum: conecta a miles de dApps, DeFi y NFTs desde tu navegador.",
  Exodus: "Wallet elegante para PC y móvil: swap integrado y soporte humano 24/7.",
  TradingView: "Gráficos pro y alertas en tiempo real: analiza el mercado como un institucional, gratis.",
  Bitget: "Copy trading líder: replica a traders top con un clic y controla el riesgo con TP/SL.",
  BingX: "Social trading con cuenta demo: practica sin riesgo y copia estrategias reales.",
  Honeygain: "Gana dólares pasivos vendiendo tu internet no usado: solo déjala encendida.",
  Freecash: "Tareas, encuestas y ofertas que pagan en cripto o PayPal desde $5.",
  ChatGPT: "Tu empleado IA 24/7: escribe, programa, resume y crea contenido por ti, gratis.",
  YouTube: "Sube videos y cobra con AdSense y patrocinios: el ingreso pasivo más grande de internet.",
  TikTok: "Videos cortos con alcance explosivo: el Creator Fund y las marcas pagan por tus vistas.",
};

const RIESGO: Record<Riesgo, { chip: string; label: string }> = {
  BAJO: { chip: "rgba(34,197,94,0.12)", label: "🟢 Riesgo bajo" },
  MEDIO: { chip: "rgba(247,196,73,0.12)", label: "🟡 Riesgo medio" },
  ALTO: { chip: "rgba(239,68,68,0.12)", label: "🔴 Riesgo alto" },
};

const videoDefault = (plat: string, name: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent("cómo usar " + name + " en " + plat + " paso a paso")}`;

/* Convierte un link de YouTube en URL embebible (para el modal) */
const embedUrl = (url?: string): string | null => {
  if (!url) return null;
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
};

export function RefItem({ item, categoryId }: Props) {
  const [imgFormat, setImgFormat] = useState<"jpg" | "remote" | "favicon" | "none">("jpg");
  const [showFormas, setShowFormas] = useState(false);
  const [videoForma, setVideoForma] = useState<Forma | null>(null);
  const logoUrl = getLogoUrl(item.name);
  const faviconUrl = getFaviconUrl(item.name);
  const isPending = item.href === "#";
  const slug = getImageSlug(item.name);
  const formas = GUIAS[item.name];

  // 🔑 CRÍTICO SEO: rel="sponsored" le dice a Google que es link de afiliado
  const affiliateRel = "sponsored noopener noreferrer";

  const handleClick = () => {
    if (!isPending) trackReferralClick(item.name, categoryId);
  };

  const renderIcon = () => {
    if (imgFormat === "jpg")
      return (
        <img
          src={`/imagenes/${slug}.jpg`}
          alt={`Logo de ${item.name}`}
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
          onError={() => setImgFormat("remote")}
          style={{ borderRadius: 6, objectFit: "contain", background: "white", padding: 2, flexShrink: 0 }}
        />
      );
    if (imgFormat === "remote" && logoUrl)
      return (
        <img
          src={logoUrl}
          alt={`Logo de ${item.name}`}
          width={28}
          height={28}
          loading="lazy"
          decoding="async"
          onError={() => setImgFormat("favicon")}
          style={{ borderRadius: 6, objectFit: "contain", background: "white", padding: 2, flexShrink: 0 }}
        />
      );
    if (imgFormat === "favicon" && faviconUrl)
      return (
        <img
          src={faviconUrl}
          alt={`Logo de ${item.name}`}
          width={28}
          height={28}
          loading="lazy"
          style={{ borderRadius: 6, objectFit: "contain", flexShrink: 0 }}
        />
      );
    return (
      <div
        style={{ width: 28, height: 28, borderRadius: 6, background: "var(--dark4)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--gold)" }}
        aria-hidden="true"
      >
        {item.name[0]}
      </div>
    );
  };

  return (
    <article
      style={{
        border: `0.5px solid ${item.hot ? "var(--gold-dark)" : "var(--dark4)"}`,
        borderRadius: 8,
        overflow: "hidden",
        opacity: isPending ? 0.5 : 1,
      }}
      aria-label={`Plataforma ${item.name}${isPending ? " (próximamente)" : ""}`}
    >
      {/* Link principal de afiliado */}
      <a
        href={isPending ? undefined : item.href}
        target="_blank"
        rel={affiliateRel}
        onClick={(e) => {
          if (isPending) e.preventDefault();
          else handleClick();
        }}
        aria-disabled={isPending}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 12px",
          textDecoration: "none",
          background: "var(--dark3)",
          color: "var(--text)",
          fontSize: 13,
          borderBottom: "0.5px solid var(--dark4)",
        }}
      >
        {renderIcon()}
        <span style={{ flex: 1, fontWeight: 500 }}>{item.name}</span>
        <span
          style={{
            fontSize: 11,
            padding: "2px 8px",
            borderRadius: 10,
            whiteSpace: "nowrap",
            background: item.hot ? "rgba(0,198,255,0.15)" : "var(--dark4)",
            color: item.hot ? "var(--gold-light)" : "var(--gold)",
            border: `0.5px solid ${item.hot ? "var(--gold)" : "var(--gold-dark)"}`,
          }}
        >
          {item.badge}
        </span>
      </a>

      {/* Sección "cómo ganar" */}
      {!isPending && EARNING_TIPS[item.name] && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            padding: "12px 14px",
            background: "linear-gradient(135deg, #0A1628 0%, #0F2040 100%)",
            borderBottom: "0.5px solid var(--dark4)",
          }}
        >
          <img
            src={`/imagenes/${slug}.jpg`}
            alt={`Logo de ${item.name}`}
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const t = e.currentTarget;
              if (t.src.endsWith(".jpg") && logoUrl) t.src = logoUrl;
              else t.style.display = "none";
            }}
            style={{ objectFit: "contain", background: "white", borderRadius: 8, padding: 4, flexShrink: 0 }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "var(--gold)",
                letterSpacing: "1px",
                marginBottom: 3,
              }}
            >
              💰 CÓMO GANAR CON {item.name.toUpperCase()}
            </div>
            <p style={{ fontSize: 12, color: "#B8D5EA", lineHeight: 1.6, margin: 0 }}>
              {EARNING_TIPS[item.name]}
            </p>
            <a
              href={item.href}
              target="_blank"
              rel={affiliateRel}
              onClick={handleClick}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                marginTop: 6,
                fontSize: 11,
                color: "var(--gold)",
                textDecoration: "none",
                background: "rgba(0,198,255,0.1)",
                border: "0.5px solid var(--gold-dark)",
                borderRadius: 20,
                padding: "3px 10px",
              }}
            >
              🚀 Registrarte ahora →
            </a>
          </div>
        </div>
      )}

      {/* Descripción corta */}
      {!isPending && (DESC_CORTAS[item.name] || item.desc) && (
        <div
          style={{
            padding: "10px 14px",
            background: "var(--dark2)",
            borderBottom: "0.5px solid var(--dark4)",
          }}
        >
          <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
            {DESC_CORTAS[item.name] ?? item.desc}
          </p>
        </div>
      )}

      {/* Botón de formas de ganar */}
      {!isPending && formas && (
        <button
          type="button"
          onClick={() => {
            setShowFormas(!showFormas);
            trackEvent("toggle_formas", { event_category: item.name, event_label: showFormas ? "cerrar" : "abrir" });
          }}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            fontSize: 12,
            fontWeight: 700,
            color: "var(--gold)",
            background: "rgba(247,196,73,0.06)",
            border: "none",
            borderBottom: "0.5px solid var(--dark4)",
            cursor: "pointer",
          }}
        >
          <span>💰 Ver {formas.length} formas de ganar con {item.name}</span>
          <span style={{ transform: showFormas ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▼</span>
        </button>
      )}

      {/* Lista desplegable de formas de ganar */}
      {!isPending && formas && showFormas && (
        <div style={{ padding: "12px 14px", background: "var(--dark3)", borderBottom: "0.5px solid var(--dark4)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {formas.map((f) => (
              <div
                key={f.name}
                style={{
                  background: "var(--dark2)",
                  border: "0.5px solid var(--dark4)",
                  borderRadius: 8,
                  padding: "10px 12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                    {f.emoji} {f.name}
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "var(--text-muted)", background: RIESGO[f.riesgo].chip, borderRadius: 999, padding: "3px 8px", whiteSpace: "nowrap" }}>
                    {RIESGO[f.riesgo].label}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5 }}>
                  🚀 <strong style={{ color: "var(--text)" }}>Empieza:</strong> {f.empezar}
                </p>
                {f.detalle && (
                  <p style={{ margin: 0, fontSize: 11, color: "var(--text-muted)", lineHeight: 1.6, background: "var(--dark3)", border: "0.5px solid var(--dark4)", borderRadius: 6, padding: "8px 10px" }}>
                    📖 {f.detalle}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => {
                    trackEvent("video_forma", { event_category: item.name, event_label: f.name });
                    setVideoForma(f);
                  }}
                  style={{
                    textAlign: "center",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--gold)",
                    background: "rgba(247,196,73,0.08)",
                    border: "0.5px solid var(--gold-dark)",
                    borderRadius: 6,
                    padding: "7px 10px",
                    cursor: "pointer",
                  }}
                >
                  🎬 Video instructivo
                </button>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 10, textAlign: "center", fontSize: 11, fontWeight: 700, color: "var(--gold)" }}>
            🥇 80% en 🟢 · 15% en 🟡 · 5% en 🔴
          </p>
        </div>
      )}

      {/* 🎬 VENTANA FLOTANTE (modal) con el video de la forma */}
      {videoForma && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Video instructivo: ${videoForma.name}`}
          onClick={() => setVideoForma(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "var(--dark2)",
              border: "0.5px solid var(--gold-dark)",
              borderRadius: 12,
              maxWidth: 720,
              width: "100%",
              padding: "1rem",
              position: "relative",
            }}
          >
            <button
              type="button"
              onClick={() => setVideoForma(null)}
              aria-label="Cerrar video"
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "var(--dark4)",
                border: "none",
                color: "var(--text)",
                borderRadius: 6,
                width: 28,
                height: 28,
                cursor: "pointer",
                fontWeight: 700,
              }}
            >
              ✕
            </button>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--gold)", marginBottom: 8, paddingRight: 32 }}>
              🎬 {videoForma.emoji} {videoForma.name} — Video instructivo
            </div>

            {embedUrl(videoForma.video) ? (
              <div style={{ position: "relative", paddingTop: "56.25%", borderRadius: 8, overflow: "hidden", background: "#000" }}>
                <iframe
                  src={embedUrl(videoForma.video)!}
                  title={`Video instructivo: ${videoForma.name}`}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div style={{ borderRadius: 8, border: "0.5px solid var(--dark4)", background: "var(--dark3)", padding: "2rem 1rem", textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>🎥</div>
                                   <p style={{ fontSize: 12, color: "var(--text-muted)", margin: "0 0 12px", lineHeight: 1.6 }}>
                  {videoForma.video
                    ? "Tu video está alojado fuera de YouTube (Terabox u otro). Ábrelo en pestaña nueva para verlo:"
                    : "Aún no tengo el video perfecto para esta forma, pero estoy trabajando en él. No quiero mostrarte cualquier cosa: quiero mostrarte lo que SÍ funciona. Mientras tanto: ve en YouTube:"}
                </p>
                <a
                  href={videoForma.video ?? videoDefault(item.name, videoForma.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#052e16",
                    background: "linear-gradient(90deg, #00e676, #69f0ae)",
                    borderRadius: 8,
                    padding: "9px 14px",
                    textDecoration: "none",
                  }}
                >
                  ▶ Abrir video ahora
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}