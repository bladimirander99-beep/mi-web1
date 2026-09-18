"use client";
import { useState } from "react";
import type { RefItem as RefItemType } from "@/types";
import { EARNING_TIPS } from "@/data/logos";
import { GUIAS, type Riesgo } from "@/data/formas";
import { getImageSlug, getLogoUrl, getFaviconUrl } from "@/lib/utils";
import { trackReferralClick, trackEvent } from "@/lib/tracking";
import { VideoPlayer } from "./VideoPlayer";

interface Props {
  item: RefItemType;
  categoryId: string;
}

const RIESGO: Record<Riesgo, { chip: string; label: string }> = {
  BAJO: { chip: "rgba(34,197,94,0.12)", label: "🟢 Riesgo bajo" },
  MEDIO: { chip: "rgba(247,196,73,0.12)", label: "🟡 Riesgo medio" },
  ALTO: { chip: "rgba(239,68,68,0.12)", label: "🔴 Riesgo alto" },
};

const videoDefault = (plat: string, name: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent("cómo usar " + name + " en " + plat + " paso a paso")}`;

export function RefItem({ item, categoryId }: Props) {
  const [imgFormat, setImgFormat] = useState<"jpg" | "remote" | "favicon" | "none">("jpg");
  const [showFormas, setShowFormas] = useState(false);
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

      {/* Descripción */}
      {!isPending && item.desc && (
        <div
          style={{
            padding: "10px 14px",
            background: "var(--dark2)",
            borderBottom: "0.5px solid var(--dark4)",
          }}
        >
          <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 8 }}>
            {item.desc}
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              color: "var(--gold)",
              background: "rgba(0,198,255,0.08)",
              border: "0.5px solid var(--gold-dark)",
              borderRadius: 20,
              padding: "3px 12px",
            }}
          >
            <span aria-hidden="true">🎬</span>
            <span>¡Aquí está el video instructivo! Ábrelo abajo 👇</span>
          </div>
        </div>
      )}

      {/* 🆕 BOTÓN de formas de ganar (solo si la plataforma tiene guía) */}
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

      {/* 🆕 LISTA desplegable de formas de ganar */}
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
                <p style={{ margin: 0, fontSize: 11, color: "var(--text-muted)", lineHeight: 1.5 }}>
                  💰 <strong style={{ color: "var(--green)" }}>Ganas:</strong> {f.ganas}
                </p>
                <a
                  href={f.video ?? videoDefault(item.name, f.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("video_forma", { event_category: item.name, event_label: f.name })}
                  style={{
                    textAlign: "center",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "var(--gold)",
                    background: "rgba(247,196,73,0.08)",
                    border: "0.5px solid var(--gold-dark)",
                    borderRadius: 6,
                    padding: "7px 10px",
                    textDecoration: "none",
                  }}
                >
                  🎬 Video explicativo
                </a>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 10, textAlign: "center", fontSize: 11, fontWeight: 700, color: "var(--gold)" }}>
            🥇 80% en 🟢 · 15% en 🟡 · 5% en 🔴
          </p>
        </div>
      )}

      {!isPending && <VideoPlayer />}
    </article>
  );
}