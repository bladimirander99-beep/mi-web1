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
            Desde los <strong style={{ color: "var(--gold)" }}>7 años</strong> viví la escasez muy de cerca: pasar hambre, usar ropa rota y sentir la angustia de que el dinero no alcanzara. Ese dolor me marcó para siempre… pero también me dio un propósito.
          </p>
          <p style={{ margin: "0 0 1rem", fontSize: 14, lineHeight: 1.7, color: "var(--text)" }}>
            Años después, cuando más necesitaba ganar, sin experiencia y sin mucho capital —empecé con apenas <strong style={{ color: "var(--gold)" }}>$10</strong>—, me estafaron muchas veces. Me prometieron <strong style={{ color: "var(--gold)" }}>"ganancias fáciles"</strong>: "invierte tanto y recibirás tanto". Nada era verdad: apps milagro que nunca pagaban, cursos de humo y pirámides disfrazadas de oportunidad.
          </p>
          <p style={{ margin: "0 0 1rem", fontSize: 14, lineHeight: 1.7, color: "var(--text)" }}>
            Perdí dinero, tiempo y confianza. Pero ahí entendí algo importante: el problema no era yo — era que <strong style={{ color: "var(--gold)" }}>nadie enseñaba con la verdad</strong>. Por eso decidí crear tutoriales reales para que tú puedas generar ingresos en línea sin pasar por lo que yo pasé.
          </p>
          <p style={{ margin: "0 0 1rem", fontSize: 14, lineHeight: 1.7, color: "var(--text)" }}>
            Aquí puedes generar dinero <strong style={{ color: "var(--gold)" }}>con dinero o sin dinero</strong>. Todo lo que publico nace de mi experiencia real: lo probé con <strong style={{ color: "var(--gold)" }}>mi tiempo y mi dinero</strong> antes de compartirlo. Puedes comenzar con un <strong style={{ color: "var(--gold)" }}>celular antiguo</strong> y sin capital — porque no importa cómo empiezas, sino <strong style={{ color: "var(--gold)" }}>a dónde quieres llegar</strong>.
          </p>
          <p style={{ margin: "0 0 1rem", fontSize: 14, lineHeight: 1.7, color: "var(--text)" }}>
            Hoy deseo para ti y para <strong style={{ color: "var(--gold)" }}>todas las personas del mundo</strong> un abundante dinero. Nadie merece sufrir por qué comer, por ropa rota o por falta de dinero. Todos merecen vivir una vida <strong style={{ color: "var(--gold)" }}>extraordinaria y feliz</strong>. Y te prometo algo: <strong style={{ color: "var(--gold)" }}>todo esfuerzo valdrá la pena</strong>. 💛
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
              Con dinero o sin dinero: que cualquier persona, sin experiencia y desde un celular antiguo, genere sus primeros ingresos en línea con guías paso a paso probadas en la vida real — y que nadie vuelva a caer en las estafas que yo sufrí.
            </p>
          </div>
          <div style={{ background: "var(--dark3)", border: "0.5px solid var(--dark4)", borderRadius: 10, padding: "1.5rem" }}>
            <div style={{ fontSize: 22, marginBottom: 8 }} aria-hidden="true">🔭</div>
            <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 600, color: "var(--gold)" }}>VISIÓN</h3>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.65, color: "var(--text-muted)" }}>
              Un mundo donde ninguna persona sufra de hambre ni de escasez: millones viviendo una vida extraordinaria y feliz gracias a la libertad financiera con métodos reales, plataformas verificadas y cero promesas falsas.
            </p>
          </div>
        </div>

        {/* Compromisos */}
        <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {["✅ Pruebo todo con mi tiempo y mi dinero", "✅ Solo publico lo que SÍ paga", "✅ Con dinero o sin dinero", "✅ Funciona con un celu antiguo", "✅ 100% gratis, sin humo"].map((c) => (
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