"use client";
import type { Category } from "@/types";
import { RefItem } from "./RefItem";

interface Props {
  cat: Category;
}

export function CategoryCard({ cat }: Props) {
  return (
    <article
      id={cat.id}
      style={{
        background: "var(--dark2)",
        border: "0.5px solid var(--dark4)",
        borderRadius: 10,
        marginBottom: "2rem",
        overflow: "hidden",
        scrollMarginTop: "5rem",
      }}
      aria-labelledby={`cat-title-${cat.id}`}
    >
      {/* Header de la categoría */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "1rem 1.5rem",
          borderBottom: "0.5px solid var(--dark4)",
          background: "var(--dark3)",
        }}
      >
        <span style={{ fontSize: 22 }} aria-hidden="true">{cat.icon}</span>
        <div>
          <h3
            id={`cat-title-${cat.id}`}
            style={{ fontSize: 16, fontWeight: 600, color: "var(--gold)", margin: 0 }}
          >
            {cat.title}
          </h3>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{cat.subtitle}</div>
        </div>
        {cat.hot && (
          <span
            style={{
              marginLeft: "auto",
              fontSize: 11,
              padding: "2px 10px",
              borderRadius: 20,
              background: "rgba(0,198,255,0.15)",
              color: "var(--gold-light)",
              border: "0.5px solid var(--gold)",
              whiteSpace: "nowrap",
            }}
          >
            {cat.id === "ia" ? "Tendencia 2026" : "Más popular"}
          </span>
        )}
      </header>

      {/* Cuerpo: plataformas en 2 columnas */}
      <div style={{ padding: "1.5rem" }}>
        <span
          style={{
            fontSize: 11,
            letterSpacing: "1.5px",
            color: "var(--gold-dark)",
            marginBottom: "0.75rem",
            display: "block",
          }}
        >
          🚀 ACCEDE · REGÍSTRATE · GANA
        </span>

        <div className="cat-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {cat.links.map((lnk, i) => (
            <RefItem
              key={`${cat.id}-${lnk.name}-${i}`}
              item={lnk}
              categoryId={cat.id}
            />
          ))}
        </div>
      </div>
    </article>
  );
}