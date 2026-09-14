const COMPROMISOS = [
  "✅ Pruebo todo con mi tiempo y mi dinero",
  "✅ Solo publico lo que SÍ paga",
  "✅ Con dinero o sin dinero",
  "✅ Funciona con un celu antiguo",
  "✅ 100% gratis, sin humo",
];

export function MisionVision() {
  return (
    <section style={{ padding: "3.5rem 2rem" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <span style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", display: "block", marginBottom: "0.4rem" }}>
          NUESTRA HISTORIA
        </span>
        <h2 style={{ fontSize: 26, fontWeight: 600, marginBottom: "1.5rem" }}>
          Por qué existe Dinero Abundante
        </h2>

        {/* Historia */}
        <div style={{ background: "var(--dark2)", border: "0.5px solid var(--gold-dark)", borderRadius: 12, padding: "2rem 2.25rem", marginBottom: "1.5rem" }}>
          <p style={{ marginBottom: "1.1rem", lineHeight: 1.8, fontSize: 15, color: "var(--text-muted)" }}>
            Desde los <strong style={{ color: "var(--gold)" }}>7 años</strong> viví la escasez muy de cerca: pasar hambre, usar ropa rota y sentir la angustia de que el dinero no alcanzara. Ese dolor me marcó para siempre… pero también me dio un propósito.
          </p>
          <p style={{ marginBottom: "1.1rem", lineHeight: 1.8, fontSize: 15, color: "var(--text-muted)" }}>
            Años después, cuando más necesitaba ganar, sin experiencia y sin mucho capital —empecé con apenas <strong style={{ color: "var(--gold)" }}>$10</strong>—, me estafaron muchas veces. Me prometieron <strong style={{ color: "var(--gold)" }}>"ganancias fáciles"</strong>: "invierte tanto y recibirás tanto". Nada era verdad: apps milagro que nunca pagaban, cursos de humo y pirámides disfrazadas de oportunidad.
          </p>
          <p style={{ marginBottom: "1.1rem", lineHeight: 1.8, fontSize: 15, color: "var(--text-muted)" }}>
            Perdí dinero, tiempo y confianza. Pero ahí entendí algo importante: el problema no era yo — era que <strong style={{ color: "var(--gold)" }}>nadie enseñaba con la verdad</strong>. Por eso decidí crear tutoriales reales para que tú puedas generar ingresos en línea sin pasar por lo que yo pasé.
          </p>
          <p style={{ marginBottom: "1.1rem", lineHeight: 1.8, fontSize: 15, color: "var(--text-muted)" }}>
            Aquí puedes generar dinero <strong style={{ color: "var(--gold)" }}>con dinero o sin dinero</strong>. Todo lo que publico nace de mi experiencia real: lo probé con <strong style={{ color: "var(--gold)" }}>mi tiempo y mi dinero</strong> antes de compartirlo. Puedes comenzar con un <strong style={{ color: "var(--gold)" }}>celular antiguo</strong> y sin capital — porque no importa cómo empiezas, sino <strong style={{ color: "var(--gold)" }}>a dónde quieres llegar</strong>.
          </p>
          <p style={{ marginBottom: "1.1rem", lineHeight: 1.8, fontSize: 15, color: "var(--text-muted)" }}>
            Además, <strong style={{ color: "var(--gold)" }}>compré cursos premium</strong> con dinero que me costó sudor y lágrimas, los apliqué y con ellos generé ingresos reales… y hoy <strong style={{ color: "var(--gold)" }}>los dejo GRATIS aquí para ti</strong>, porque yo sé lo que es no tener ni para empezar. Si tienes ganas de ganar dinero, este sitio que creé es para ayudarte a salir adelante en la etapa financiera de tu vida. 🙏
          </p>
          <p style={{ marginBottom: "1.1rem", lineHeight: 1.8, fontSize: 15, color: "var(--text-muted)" }}>
            Hoy deseo para ti y para <strong style={{ color: "var(--gold)" }}>todas las personas del mundo</strong> un abundante dinero. Nadie merece sufrir por qué comer, por ropa rota o por falta de dinero. Todos merecen vivir una vida <strong style={{ color: "var(--gold)" }}>extraordinaria y feliz</strong>. Y te prometo algo: <strong style={{ color: "var(--gold)" }}>todo esfuerzo valdrá la pena</strong>. 💛
          </p>
          <p style={{ margin: 0, fontSize: 14, fontStyle: "italic", color: "var(--text-muted)" }}>
            — Ander, fundador de Dinero Abundante 💛
          </p>
        </div>

        {/* Misión y Visión */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 16, marginBottom: "1.5rem" }}>
          <div style={{ background: "var(--dark2)", border: "0.5px solid var(--dark4)", borderRadius: 12, padding: "1.75rem" }}>
            <div style={{ fontSize: 26, marginBottom: "0.75rem" }}>🎯</div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--gold)", letterSpacing: 1, marginBottom: "0.6rem" }}>MISIÓN</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)" }}>
              Con dinero o sin dinero: que cualquier persona, sin experiencia y desde un celular antiguo, genere sus primeros ingresos en línea con guías paso a paso probadas en la vida real — y que nadie vuelva a caer en las estafas que yo sufrí.
            </p>
          </div>
          <div style={{ background: "var(--dark2)", border: "0.5px solid var(--dark4)", borderRadius: 12, padding: "1.75rem" }}>
            <div style={{ fontSize: 26, marginBottom: "0.75rem" }}>🔭</div>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--gold)", letterSpacing: 1, marginBottom: "0.6rem" }}>VISIÓN</h3>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)" }}>
              Un mundo donde ninguna persona sufra de hambre ni de escasez: millones viviendo una vida extraordinaria y feliz gracias a la libertad financiera con métodos reales, plataformas verificadas y cero promesas falsas.
            </p>
          </div>
        </div>

        {/* Compromisos */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {COMPROMISOS.map((c) => (
            <span key={c} style={{ fontSize: 12, fontWeight: 600, color: "var(--text)", background: "var(--dark2)", border: "0.5px solid var(--gold-dark)", borderRadius: 999, padding: "8px 14px" }}>
              {c}
            </span>
          ))}
        </div>

        <p style={{ margin: "1.75rem 0 0", textAlign: "center", fontSize: 15, fontWeight: 700, color: "var(--gold)", letterSpacing: 1 }}>
          🙏 DIOS ESTÁ CONTIGO EN TODO MOMENTO
        </p>
      </div>
    </section>
  );
}

export default MisionVision;