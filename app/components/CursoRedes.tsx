"use client";
import { useState } from "react";
import { PLATAFORMAS, PLAT_TIPS, TERABOX_CURSOS } from "@/data/curso";
import { REQUISITOS_REDES, FORMAS_REDES, FACILIDAD_LABEL } from "@/data/requisitosRedes";
import { trackEvent } from "@/lib/tracking";

const videoLink = (name: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent("cómo monetizar " + name)}`;

export function CursoRedes() {
  const [openRequisitos, setOpenRequisitos] = useState<Record<string, boolean>>({});
  const [openFormas, setOpenFormas] = useState<Record<string, boolean>>({});

  const toggleRequisitos = (name: string) => {
    setOpenRequisitos((prev) => ({ ...prev, [name]: !prev[name] }));
    trackEvent("toggle_requisitos_redes", { event_category: "curso", event_label: name });
  };

  const toggleFormas = (name: string) => {
    setOpenFormas((prev) => ({ ...prev, [name]: !prev[name] }));
    trackEvent("toggle_formas_redes", { event_category: "curso", event_label: name });
  };

  return (
    <section id="redes" aria-labelledby="curso-title" style={{ background: "var(--dark3)", borderTop: "0.5px solid var(--dark4)", borderBottom: "0.5px solid var(--dark4)", padding: "3.5rem 2rem" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <span style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", marginBottom: "0.4rem", display: "block" }}>GUÍA GRATUITA</span>
        <h2 id="curso-title" style={{ fontSize: 26, fontWeight: 600, marginBottom: "0.4rem" }}>Monetización de Redes Sociales</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: 15 }}>De cero seguidores a ingresos reales. Elige tu plataforma, sigue la instrucción y mira el video.</p>

        <div>
          <span style={{ fontSize: 11, letterSpacing: "1.5px", color: "var(--gold-dark)", marginBottom: "0.75rem", display: "block" }}>PLATAFORMAS Y SU POTENCIAL — ELIGE LA TUYA Y MIRA EL VIDEO</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: 10 }}>
            {PLATAFORMAS.map((p, i) => {
              const requisitos = REQUISITOS_REDES[p.name];
              const formasRed = FORMAS_REDES[p.name];
              const isOpenReq = openRequisitos[p.name] || false;
              const isOpenForm = openFormas[p.name] || false;
              const mitad = requisitos ? Math.ceil(requisitos.length / 2) : 0;
              const col1 = requisitos ? requisitos.slice(0, mitad) : [];
              const col2 = requisitos ? requisitos.slice(mitad) : [];

              return (
                <div key={i} style={{ background: "var(--dark2)", border: "0.5px solid var(--dark4)", borderRadius: 10, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>Monetiza con {p.name}</div>
                    <div style={{ fontSize: 12, color: "var(--green)" }}>{p.earn}</div>
                  </div>
                  <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55 }}>💡 {PLAT_TIPS[p.name]}</p>

                  {requisitos && (
                    <button type="button" onClick={() => toggleRequisitos(p.name)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 12px", fontSize: 11, fontWeight: 700, color: "var(--gold)", background: "rgba(0,198,255,0.06)", border: "0.5px solid var(--gold-dark)", borderRadius: 8, cursor: "pointer" }}>
                      <span>📋 Ver requisitos para monetizar</span>
                      <span style={{ transform: isOpenReq ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▼</span>
                    </button>
                  )}

                  {requisitos && isOpenReq && (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {col1.map((r) => (
                          <div key={r.name} style={{ display: "flex", alignItems: "flex-start", gap: 6, background: "var(--dark3)", border: "0.5px solid var(--dark4)", borderRadius: 6, padding: "7px 8px" }}>
                            <span style={{ fontSize: 11, flexShrink: 0 }}>{r.icono}</span>
                            <div>
                              <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text)", marginBottom: 1 }}>{r.name}</div>
                              <div style={{ fontSize: 9, color: "var(--text-muted)", lineHeight: 1.35 }}>{r.detalle}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                        {col2.map((r) => (
                          <div key={r.name} style={{ display: "flex", alignItems: "flex-start", gap: 6, background: "var(--dark3)", border: "0.5px solid var(--dark4)", borderRadius: 6, padding: "7px 8px" }}>
                            <span style={{ fontSize: 11, flexShrink: 0 }}>{r.icono}</span>
                            <div>
                              <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text)", marginBottom: 1 }}>{r.name}</div>
                              <div style={{ fontSize: 9, color: "var(--text-muted)", lineHeight: 1.35 }}>{r.detalle}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {formasRed && (
                    <button type="button" onClick={() => toggleFormas(p.name)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 12px", fontSize: 11, fontWeight: 700, color: "var(--gold)", background: "rgba(247,196,73,0.06)", border: "0.5px solid var(--gold-dark)", borderRadius: 8, cursor: "pointer" }}>
                      <span>💰 Ver {formasRed.length} formas de ganar</span>
                      <span style={{ transform: isOpenForm ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>▼</span>
                    </button>
                  )}

                  {formasRed && isOpenForm && (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                      {formasRed.map((f) => (
                        <div key={f.name} style={{ background: "var(--dark3)", border: "0.5px solid var(--dark4)", borderRadius: 6, padding: "7px 8px", display: "flex", flexDirection: "column", gap: 3 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 4 }}>
                            <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text)" }}>{f.emoji} {f.name}</div>
                            <span style={{ fontSize: 8, fontWeight: 700, color: "var(--text-muted)", background: FACILIDAD_LABEL[f.facilidad].chip, borderRadius: 999, padding: "2px 5px", whiteSpace: "nowrap" }}>{FACILIDAD_LABEL[f.facilidad].label}</span>
                          </div>
                          <p style={{ margin: 0, fontSize: 9, color: "var(--text-muted)", lineHeight: 1.35 }}>💡 {f.comoFunciona}</p>
                          <p style={{ margin: 0, fontSize: 9, color: "var(--green)", lineHeight: 1.35 }}>💰 {f.potencial}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {!TERABOX_CURSOS[p.name] && (
                    <a href={videoLink(p.name)} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("video_monetizar", { event_category: "curso", event_label: p.name })} style={{ textAlign: "center", fontSize: 11, fontWeight: 600, color: "var(--text-muted)", background: "var(--dark3)", border: "0.5px solid var(--dark4)", borderRadius: 8, padding: "9px 12px", textDecoration: "none", lineHeight: 1.5 }}>
                      🎥 Aún no tengo el video perfecto para esta plataforma, pero estoy trabajando en él. No quiero mostrarte cualquier cosa: quiero mostrarte lo que SÍ funciona. Mientras tanto, busca en YouTube:
                    </a>
                  )}

                  {TERABOX_CURSOS[p.name] && (
                    <a href={TERABOX_CURSOS[p.name]} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("curso_terabox", { event_category: "curso", event_label: p.name })} style={{ textAlign: "center", fontSize: 12, fontWeight: 800, color: "#052e16", background: "linear-gradient(90deg, #00e676, #69f0ae)", borderRadius: 8, padding: "10px 12px", textDecoration: "none", boxShadow: "0 4px 18px rgba(0,230,118,0.45)" }}>
                      📂 CURSO GRATIS en Terabox — yo lo pagué por ti 💚
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}