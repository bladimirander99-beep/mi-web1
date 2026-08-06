export function Hero() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "7rem 2rem", textAlign: "center", background: "linear-gradient(135deg,#050D18 0%,#081729 40%,#102B4A 100%)" }}>
        <div style={{ position: "absolute", width: 500, height: 500, background: "#00C6FF22", borderRadius: "50%", filter: "blur(140px)", top: -180, right: -150 }} aria-hidden="true" />
        <div style={{ position: "absolute", width: 350, height: 350, background: "#00E67622", borderRadius: "50%", filter: "blur(130px)", bottom: -150, left: -100 }} aria-hidden="true" />
        <div style={{ position: "relative", maxWidth: 1100, margin: "auto", zIndex: 2 }}>
          <div style={{ display: "inline-block", padding: "8px 18px", borderRadius: 40, background: "rgba(0,198,255,.15)", color: "#00C6FF", border: "1px solid #00C6FF", fontWeight: 600, marginBottom: 25 }}>
            {"🚀 Más de 30 plataformas para ganar dinero online"}
          </div>
          <h1 style={{ fontSize: "clamp(2.7rem,7vw,5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 25 }}>
            {"Construye múltiples"}<br /><span style={{ color: "#00C6FF" }}>{"fuentes de ingresos"}</span>
          </h1>
          <p style={{ maxWidth: 780, margin: "auto", fontSize: 20, color: "#B8D5EA", lineHeight: 1.8 }}>
            {"Aprende criptomonedas, trading, inteligencia artificial, billeteras digitales, creación de contenido y herramientas para generar ingresos desde Internet."}
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginTop: 45 }}>
            <a href="#exchange" style={{ background: "#00C6FF", color: "#000", padding: "16px 35px", borderRadius: 12, fontWeight: 700, textDecoration: "none" }}>{"💰 Ver Plataformas"}</a>
            <a href="#redes" style={{ border: "1px solid #00C6FF", color: "#00C6FF", padding: "16px 35px", borderRadius: 12, textDecoration: "none", fontWeight: 700 }}>{"🎓 Guía Gratis"}</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 25, marginTop: 70 }}>
            {[["30+", "Plataformas"], ["8", "Categorías"], ["100%", "Gratis"], ["24/7", "Disponible"]].map(([n, t]) => (
              <div key={t} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", padding: 25, borderRadius: 15 }}>
                <h2 style={{ color: "#00C6FF", fontSize: 34, marginBottom: 8 }}>{n}</h2>
                <p style={{ color: "#A5C4DA", fontSize: 15 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 1, background: "var(--dark4)" }}>
        {[["8", "Categorías"], ["30+", "Plataformas"], ["$0", "Para empezar"], ["1", "Guía incluida"], ["24/7", "Ingresos pasivos"]].map(([n, l]) => (
          <div key={l} style={{ background: "var(--dark2)", padding: "1.5rem", textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: "var(--gold)" }}>{n}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>
    </>
  );
}