import { EARNINGS } from "@/data/earnings";

export function EarningsSection() {
  return (
    <section aria-labelledby="ganancias-title" style={{ maxWidth: 1060, margin: "0 auto", padding: "3.5rem 2rem" }}>
      <span style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", marginBottom: "0.4rem", display: "block" }}>
        POTENCIAL DE INGRESOS
      </span>
      <h2 id="ganancias-title" style={{ fontSize: 26, fontWeight: 600, marginBottom: "0.4rem" }}>
        ¿Cuánto puedes ganar?
      </h2>
      <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: 15 }}>
        Estimados reales de la comunidad. Resultados varían según dedicación y estrategia.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "0.75rem" }}>
        {EARNINGS.map((e, i) => (
          <div key={i} style={{ background: "var(--dark2)", border: "0.5px solid var(--dark4)", borderRadius: 10, padding: "1rem" }}>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 4 }}>{e.source}</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: "var(--green)" }}>{e.amount}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{e.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}