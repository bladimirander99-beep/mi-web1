export function MisionVision() {
  return (
    <section
      id="historia"
      aria-labelledby="historia-title"
      style={{ padding: "4rem 2rem", background: "var(--dark2)", borderTop: "0.5px solid var(--dark4)", borderBottom: "0.5px solid var(--dark4)" }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <span style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", display: "block", marginBottom: "0.4rem" }}>
          NUESTRA HISTORIA
        </span>
        <h2 id="historia-title" style={{ fontSize: 26, fontWeight: 600, marginBottom: "1.5rem" }}>
          Por qué existe Dinero Abundante
        </h2>

        {/* Historia personal */}
        <div style={{ background: "var(--dark3)", border: "1px solid var(--gold-dark)", borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: "0 0 1rem", fontSize: 14, lineHeight: 1.7, color: "var(--text)" }}>
            Cuando más necesitaba ganar dinero y no tenía experiencia, <strong style={{ color: "var(--gold)" }}>me estafaron muchas veces</strong>: apps "milagro" que nunca pagaban, cursos que prometían fortunas de la noche a la mañana y pirámides disfrazadas de oportunidades.
          </p>
          <p style={{ margin: "0 0 1rem", fontSize: 14, lineHeight: 1.7, color: "var(--text)" }}>
            Perdí dinero, tiempo y confianza. Y ahí entendí algo importante: el problema no era yo — era que <strong style={{ color: "var(--gold)" }}>nadie enseñaba con la verdad</strong>. Por eso decidí crear tutoriales reales, probados con mi propio dinero y mi propio tiempo, para que tú puedas generar ingresos en línea sin pasar por lo que yo pasé.
          </p>
          <p style={{ margin: 0, fontSize: 13, color: "var(--text-muted)", fontStyle: "italic" }}>
            — Ander, fundador de Dinero Abundante 💛
          </p>
        </div>

        {/* Misión y Visión */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 14 }}>
          <div style={{ background: "var(--dark3)", border: "0.5px solid var(--dark4)", borderRadius: 10, padding: "1.5rem" }}>
            <div style={{ fontSize: 22, marginBottom: 8 }} aria-hidden="true">🎯</div>
            <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 600, color: "var(--gold)" }}>MISIÓN</h3>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: "var(--text-muted)" }}>
              Que cualquier persona de Latinoamérica, sin experiencia y sin capital, genere sus primeros ingresos en línea con guías paso a paso probadas en la vida real — sin caer en las estafas que yo sufrí.
            </p>
          </div>
          <div style={{ background: "var(--dark3)", border: "0.5px solid var(--dark4)", borderRadius: 10, padding: "1.5rem" }}>
            <div style={{ fontSize: 22, marginBottom: 8 }} aria-hidden="true">🔭</div>
            <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 600, color: "var(--gold)" }}>VISIÓN</h3>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: "var(--text-muted)" }}>
              Ser la comunidad en español más honesta sobre dinero en línea: millones de personas dando su primer paso hacia la libertad financiera con métodos reales, plataformas verificadas y cero promesas falsas.
            </p>
          </div>
        </div>

        {/* Compromisos */}
        <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {["✅ Pruebo cada plataforma con mi dinero", "✅ Solo publico lo que SÍ paga", "✅ Contenido 100% gratis, sin humo"].map((c) => (
            <span key={c} style={{ fontSize: 12, color: "var(--gold-light)", background: "rgba(0,198,255,0.07)", border: "0.5px solid var(--gold-dark)", borderRadius: 20, padding: "7px 14px" }}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MisionVision;