"use client";
import type { Category } from "@/types";
import { RefItem } from "./RefItem";

interface Props {
  cat: Category;
  onAddLink: (id: string) => void;
}

export function CategoryCard({ cat, onAddLink }: Props) {
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

      {/* Cuerpo con 2 columnas */}
      <div className="cat-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* Columna izquierda: lista de plataformas */}
        <div
          className="cat-left-col"
          style={{ padding: "1.5rem", borderRight: "0.5px solid var(--dark4)" }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: "1.5px",
              color: "var(--gold-dark)",
              marginBottom: "0.6rem",
              display: "block",
            }}
          >
            🚀 ACCEDE · REGÍSTRATE · GANA
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {cat.links.map((lnk, i) => (
              <RefItem
                key={`${cat.id}-${lnk.name}-${i}`}
                item={lnk}
                categoryId={cat.id}
              />
            ))}
            <button
              onClick={() => onAddLink(cat.id)}
              aria-label={`Agregar plataforma a ${cat.title}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                background: "transparent",
                border: "0.5px dashed var(--dark4)",
                borderRadius: 6,
                padding: "8px 12px",
                color: "var(--text-muted)",
                fontSize: 13,
                cursor: "pointer",
                width: "100%",
                fontFamily: "inherit",
                marginTop: 2,
              }}
            >
              + Agregar plataforma
            </button>
          </div>
        </div>

        {/* Columna derecha: manual + pasos + tip */}
        <aside style={{ padding: "1.5rem" }}>
          <span
            style={{
              fontSize: 11,
              letterSpacing: "1.5px",
              color: "var(--gold-dark)",
              marginBottom: "0.75rem",
              display: "block",
            }}
          >
            {cat.manualLabel}
          </span>
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {cat.steps.map((s, i) => (
              <li key={i} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "var(--dark4)",
                    border: "0.5px solid var(--gold-dark)",
                    color: "var(--gold)",
                    fontSize: 11,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                <div>
                  <strong
                    style={{
                      display: "block",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--text)",
                      marginBottom: 1,
                    }}
                  >
                    {s.title}
                  </strong>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55, margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div
            role="note"
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              background: "rgba(0,198,255,0.07)",
              border: "0.5px solid var(--gold-dark)",
              borderRadius: 8,
              padding: "10px 12px",
              marginTop: 10,
              fontSize: 12,
              color: "var(--gold-light)",
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: "var(--gold)", flexShrink: 0 }} aria-hidden="true">★</span>
            <span>{cat.tip}</span>
          </div>
        </aside>
      </div>
    </article>
  );
}