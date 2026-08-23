"use client";
import { useMemo, useState, useEffect } from "react";
import { CATEGORIES } from "@/data/categories";
import type { Category } from "@/types";
import { CategoryCard } from "./CategoryCard";
import { SearchBar } from "./SearchBar";
import { trackSearch } from "@/lib/tracking";

export function CategoriesSection() {
  const [categories] = useState<Category[]>(CATEGORIES);
  const [query, setQuery] = useState("");

  /* ── FILTRADO EN VIVO: busca en nombre + badge + descripción ── */
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories
      .map((cat) => ({
        ...cat,
        links: cat.links.filter(
          (l) =>
            l.name.toLowerCase().includes(q) ||
            l.badge.toLowerCase().includes(q) ||
            (l.desc ?? "").toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.links.length > 0);
  }, [categories, query]);

  const totalResults = useMemo(
    () => filtered.reduce((acc, cat) => acc + cat.links.length, 0),
    [filtered]
  );

  /* ── Trackear búsquedas (debounce 800ms, solo 2+ caracteres) ── */
  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) return;
    const t = setTimeout(() => trackSearch(q, totalResults), 800);
    return () => clearTimeout(t);
  }, [query, totalResults]);

  return (
    <section
      aria-labelledby="categorias-title"
      style={{ maxWidth: 1400, margin: "0 auto", padding: "3.5rem 2rem" }}
    >
      <span style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", marginBottom: "0.4rem", display: "block" }}>
        PLATAFORMAS Y MANUALES
      </span>
      <h2 id="categorias-title" style={{ fontSize: 26, fontWeight: 600, marginBottom: "0.4rem" }}>
        Todas las categorías
      </h2>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: 15 }}>
        💰 Cada plataforma es una oportunidad. Regístrate, reclama tu bono y activa tu fuente de ingresos.
      </p>

      {/* ── BUSCADOR ── */}
      <SearchBar
        value={query}
        onChange={setQuery}
        resultsCount={query.trim() ? totalResults : null}
      />

      {/* ── RESULTADOS ── */}
      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem 1rem",
            background: "var(--dark2)",
            border: "0.5px solid var(--dark4)",
            borderRadius: 10,
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 10 }} aria-hidden="true">🔎</div>
          <p style={{ color: "var(--text-muted)", fontSize: 14, marginBottom: 14 }}>
            No encontramos plataformas para{" "}
            <strong style={{ color: "var(--gold)" }}>"{query}"</strong>
          </p>
          <button
            onClick={() => setQuery("")}
            style={{
              background: "var(--gold)",
              color: "var(--dark)",
              border: "none",
              padding: "10px 20px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Ver todas las plataformas
          </button>
        </div>
      ) : (
        filtered.map((cat) => (
          <CategoryCard key={cat.id} cat={cat} />
        ))
      )}
    </section>
  );
}