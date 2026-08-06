"use client";

interface Props {
  value: string;
  onChange: (valor: string) => void;
  resultsCount?: number | null;
}

export function SearchBar({ value, onChange, resultsCount = null }: Props) {
  return (
    <div style={{ maxWidth: 560, margin: "0 auto 2rem" }}>
      <div style={{ position: "relative" }}>
        <span
          style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16, opacity: 0.6 }}
          aria-hidden="true"
        >
          🔍
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar plataforma… ej: Binance, CapCut, bono, voz"
          aria-label="Buscar plataformas"
          style={{
            width: "100%",
            background: "var(--dark3)",
            border: "0.5px solid var(--dark4)",
            color: "var(--text)",
            padding: "12px 40px 12px 42px",
            borderRadius: 12,
            fontSize: 14,
            fontFamily: "inherit",
            outline: "none",
          }}
        />
        {value && (
          <button
            onClick={() => onChange("")}
            aria-label="Limpiar búsqueda"
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              cursor: "pointer",
              fontSize: 14,
              padding: 4,
            }}
          >
            ✕
          </button>
        )}
      </div>

      {/* Contador de resultados (anunciado a lectores de pantalla) */}
      {value.trim() && resultsCount !== null && (
        <p
          aria-live="polite"
          style={{ textAlign: "center", fontSize: 12, color: "var(--text-muted)", marginTop: 8, marginBottom: 0 }}
        >
          {resultsCount === 1
            ? "1 plataforma encontrada"
            : `${resultsCount} plataformas encontradas`}
        </p>
      )}
    </div>
  );
}