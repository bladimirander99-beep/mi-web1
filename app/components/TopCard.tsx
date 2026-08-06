"use client";
import { useState } from "react";
import type { RefItem, TopPlatform } from "@/types";
import { getImageSlug, getLogoUrl } from "@/lib/utils";
import { trackReferralClick } from "@/lib/tracking";

interface Props {
  platform: TopPlatform;
  link: RefItem;
  rank: number;
}

export function TopCard({ platform, link, rank }: Props) {
  const [imgOk, setImgOk] = useState(true);
  const slug = getImageSlug(platform.name);
  const logoUrl = getLogoUrl(platform.name);

  return (
    <article
      style={{
        background: "var(--dark2)",
        border: rank === 1 ? "1px solid var(--gold)" : "0.5px solid var(--dark4)",
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: "1.25rem",
      }}
    >
      {rank === 1 && (
        <div style={{ background: "linear-gradient(90deg, var(--gold), var(--gold-dark))", color: "#000", fontSize: 11, fontWeight: 800, textAlign: "center", padding: 6, letterSpacing: 1 }}>
          🏆 LA FAVORITA DE LA COMUNIDAD ESTE MES
        </div>
      )}

      <div style={{ padding: "1.5rem" }}>
        {/* Cabecera: rank + logo + nombre + score */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
          <div style={{ fontSize: 26, fontWeight: 800, color: rank === 1 ? "var(--gold)" : "var(--text-muted)", minWidth: 44 }}>
            #{rank}
          </div>
          {imgOk ? (
            <img
              src={`/imagenes/${slug}.jpg`}
              alt={`Logo de ${platform.name}`}
              width={44}
              height={44}
              loading="lazy"
              onError={(e) => { if (logoUrl) e.currentTarget.src = logoUrl; else setImgOk(false); }}
              style={{ borderRadius: 8, background: "white", padding: 4, objectFit: "contain" }}
            />
          ) : (
            <div style={{ width: 44, height: 44, borderRadius: 8, background: "var(--dark4)" }} />
          )}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text)" }}>{platform.name}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Ideal para: {platform.bestFor}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: "var(--green)" }}>{platform.score}</div>
            <div style={{ fontSize: 10, color: "var(--text-muted)" }}>/10</div>
          </div>
        </div>

        {/* Barra de puntuación */}
        <div style={{ height: 6, background: "var(--dark4)", borderRadius: 3, marginBottom: 14, overflow: "hidden" }} aria-hidden="true">
          <div style={{ width: `${platform.score * 10}%`, height: "100%", background: "linear-gradient(90deg, var(--gold), var(--green))" }} />
        </div>

        <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.7, marginBottom: 14 }}>
          {platform.why}
        </p>

        {/* Pros y contras */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--green)", letterSpacing: 1, marginBottom: 6 }}>✅ LO BUENO</div>
            {platform.pros.map((p, i) => (
              <div key={i} style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4, lineHeight: 1.5 }}>• {p}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#FFB74D", letterSpacing: 1, marginBottom: 6 }}>⚠️ A CONSIDERAR</div>
            {platform.cons.map((c, i) => (
              <div key={i} style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4, lineHeight: 1.5 }}>• {c}</div>
            ))}
          </div>
        </div>

        {/* CTA de afiliado */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <a
            href={link.href}
            target="_blank"
            rel="sponsored noopener noreferrer"
            onClick={() => trackReferralClick(platform.name, "top")}
            style={{ flex: 1, minWidth: 200, textAlign: "center", background: "var(--gold)", color: "#000", padding: "12px 20px", borderRadius: 10, fontWeight: 800, textDecoration: "none", fontSize: 14 }}
          >
            🚀 Reclamar bono en {platform.name} →
          </a>
          <span style={{ fontSize: 12, color: "var(--gold)", border: "0.5px solid var(--gold-dark)", borderRadius: 20, padding: "4px 12px", background: "rgba(0,198,255,0.08)", whiteSpace: "nowrap" }}>
            🎁 {platform.bonus}
          </span>
        </div>
      </div>
    </article>
  );
}