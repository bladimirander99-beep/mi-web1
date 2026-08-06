"use client";
import { useState } from "react";
import type { RefItem as RefItemType } from "@/types";
import { EARNING_TIPS } from "@/data/logos";
import { getImageSlug, getLogoUrl, getFaviconUrl } from "@/lib/utils";
import { trackReferralClick } from "@/lib/tracking";
import { VideoPlayer } from "./VideoPlayer";

interface Props {
  item: RefItemType;
  categoryId: string;
}

export function RefItem({ item, categoryId }: Props) {
  const [imgFormat, setImgFormat] = useState<"jpg" | "remote" | "favicon" | "none">("jpg");
  const logoUrl = getLogoUrl(item.name);
  const faviconUrl = getFaviconUrl(item.name);
  const isPending = item.href === "#";
  const slug = getImageSlug(item.name);

  // 🔑 CRÍTICO SEO: rel="sponsored" le dice a Google que es link de afiliado
  // Sin esto, Google podría penalizar tu sitio por links pagados.
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

      {!isPending && <VideoPlayer />}
    </article>
  );
}