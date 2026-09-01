"use client";
import { PLATAFORMAS, PLAT_TIPS, TERABOX_CURSOS } from "@/data/curso";
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
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: 15 }}>
          De cero seguidores a ingresos reales. Elige tu plataforma, sigue la instrucción y mira el video.
        </p>

        {/* PLATAFORMAS: nombre + ganancia + instrucción + video o curso Terabox */}
        <div>
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

                {/* Botón de video: SOLO si NO tiene curso Terabox */}
                {!TERABOX_CURSOS[p.name] && (
                  <a
                    href={videoLink(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("video_monetizar", { event_category: "curso", event_label: p.name })}
                    style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "var(--gold)", background: "rgba(247,196,73,0.08)", border: "0.5px solid var(--gold-dark)", borderRadius: 8, padding: "9px 12px", textDecoration: "none" }}
                  >
                    🎬 Aprende a monetizar — mira el video
                  </a>
                )}

                {/* Botón Terabox: SOLO en TikTok, YouTube y Facebook */}
                {TERABOX_CURSOS[p.name] && (
                  <a
                    href={TERABOX_CURSOS[p.name]}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("curso_terabox", { event_category: "curso", event_label: p.name })}
                    style={{ textAlign: "center", fontSize: 12, fontWeight: 700, color: "var(--dark)", background: "var(--green)", borderRadius: 8, padding: "10px 12px", textDecoration: "none", boxShadow: "0 4px 14px rgba(34,197,94,0.25)" }}
                  >
                    📂 CURSO GRATIS en Terabox — yo lo pagué por ti 💛
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}