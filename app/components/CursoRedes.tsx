"use client";
import { MODULOS, PLATAFORMAS, PLAN_90, PLAT_TIPS } from "@/data/curso";
import { trackEvent } from "@/lib/tracking";

const videoLink = (name: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent("cómo monetizar " + name)}`;

export function CursoRedes() {
  return (
    <section id="redes" aria-labelledby="curso-title" style={{ background: "var(--dark3)", borderTop: "0.5px solid var(--dark4)", borderBottom: "0.5px solid var(--dark4)", padding: "3.5rem 2rem" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <span style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", marginBottom: "0.4rem", display: "block" }}>
          GUÍA GRATUITA
        </span>
        <h2 id="curso-title" style={{ fontSize: 26, fontWeight: 600, marginBottom: "0.4rem" }}>
          Monetización de Redes Sociales
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "2.5rem", fontSize: 15 }}>
          De cero seguidores a ingresos reales. Una guía completa y gratuita para ti, sin costo.
        </p>

        <div style={{ background: "var(--dark2)", border: "1px solid var(--gold-dark)", borderRadius: 10, overflow: "hidden" }}>
          {/* Header del curso */}
          <div style={{ background: "var(--dark3)", padding: "1.25rem 1.5rem", borderBottom: "0.5px solid var(--dark4)", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 22 }} aria-hidden="true">📲</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 600, color: "var(--gold)" }}>Guía: Gana dinero con tus redes sociales</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>8 secciones · 100% gratis · Aplica desde hoy</div>
            </div>
            <span style={{ background: "var(--gold)", color: "var(--dark)", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>GRATIS</span>
          </div>

          {/* Body con 2 columnas (responsive) */}
          <div className="curso-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            {/* Columna izquierda: módulos */}
            <div style={{ padding: "1.5rem", borderRight: "0.5px solid var(--dark4)" }}>
              <span style={{ fontSize: 11, letterSpacing: "1.5px", color: "var(--gold-dark)", marginBottom: "0.75rem", display: "block" }}>
                CONTENIDO DE LA GUÍA
              </span>
              {MODULOS.map((m, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: "1rem", paddingBottom: "1rem", borderBottom: i < MODULOS.length - 1 ? "0.5px solid var(--dark4)" : "none" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--dark4)", border: "0.5px solid var(--gold-dark)", color: "var(--gold)", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {m.n}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", marginBottom: 2 }}>{m.title}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>{m.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Columna derecha: plan 90 */}
            <div style={{ padding: "1.5rem" }}>
              <span style={{ fontSize: 11, letterSpacing: "1.5px", color: "var(--gold-dark)", marginBottom: "0.75rem", display: "block" }}>
                PLAN DE ACCIÓN: 90 DÍAS
              </span>
              {PLAN_90.map((s) => (
                <div key={s.n} style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--dark4)", border: "0.5px solid var(--gold-dark)", color: "var(--gold)", fontSize: 11, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {s.n}
                  </div>
                  <div>
                    <strong style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text)" }}>{s.t}</strong>
                    <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.d}</p>
                  </div>
                </div>
              ))}

              <div style={{ display: "flex", gap: 8, background: "rgba(0,198,255,0.07)", border: "0.5px solid var(--gold-dark)", borderRadius: 8, padding: "10px 12px", fontSize: 12, color: "var(--gold-light)" }}>
                <span style={{ color: "var(--gold)" }}>★</span>
                <span>Meta realista: $300 a $800/mes al día 90 combinando referidos + monetización + 1 brand deal.</span>
              </div>
            </div>
          </div>
        </div>

        {/* PLATAFORMAS: nombre + ganancia + instrucción + video debajo */}
        <div style={{ marginTop: "2.5rem" }}>
          <span style={{ fontSize: 11, letterSpacing: "1.5px", color: "var(--gold-dark)", marginBottom: "0.75rem", display: "block" }}>
            PLATAFORMAS Y SU POTENCIAL — ELIGE LA TUYA Y MIRA EL VIDEO
          </span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: 10 }}>
            {PLATAFORMAS.map((p, i) => (
              <div key={i} style={{ background: "var(--dark2)", border: "0.5px solid var(--dark4)", borderRadius: 10, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>Monetiza con {p.name}</div>
                  <div style={{ fontSize: 12, color: "var(--green)" }}>{p.earn}</div>
                </div>
                <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55 }}>
                  💡 {PLAT_TIPS[p.name]}
                </p>
                <a
                  href={videoLink(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("video_monetizar", { event_category: "curso", event_label: p.name })}
                  style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "var(--gold)", background: "rgba(247,196,73,0.08)", border: "0.5px solid var(--gold-dark)", borderRadius: 8, padding: "9px 12px", textDecoration: "none" }}
                >
                  🎬 Aprende a monetizar — mira el video
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}