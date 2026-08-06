"use client";
import { useState } from "react";
import { DONACIONES } from "@/data/donaciones";
import { trackDonationCopy } from "@/lib/tracking";

export function Donaciones() {
  const [copied, setCopied] = useState("");

  const copy = (text: string, name: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(name);
      trackDonationCopy(name);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  return (
    <section aria-labelledby="donaciones-title" style={{ background: "var(--dark2)", borderTop: "0.5px solid var(--dark4)", borderBottom: "0.5px solid var(--dark4)", padding: "3.5rem 2rem" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", display: "block", marginBottom: "0.4rem" }}>
            APOYA ESTE PROYECTO
          </span>
          <h2 id="donaciones-title" style={{ fontSize: 26, fontWeight: 700, marginBottom: "0.75rem" }}>
            ☕ Apóyame con tu voluntad
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 600, margin: "0 auto" }}>
            Si este contenido te ha ayudado a dar el primer paso hacia tu libertad financiera, considera apoyarme con tan solo{" "}
            <strong style={{ color: "var(--gold)" }}>$1 dólar</strong>. Tu gesto me ayuda a seguir creando contenido gratuito para ti.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
          {DONACIONES.map((d, i) => {
            const isPending = d.detail === "Próximamente";
            return (
              <div key={i} style={{ background: "var(--dark3)", border: `0.5px solid ${isPending ? "var(--dark4)" : "var(--gold-dark)"}`, borderRadius: 10, padding: "1.25rem", opacity: isPending ? 0.55 : 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 22 }} aria-hidden="true">{d.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)" }}>{d.name}</div>
                    <div style={{ fontSize: 12, color: isPending ? "var(--text-muted)" : "var(--gold)", marginTop: 2 }}>
                      {d.detail}
                    </div>
                  </div>
                </div>
                {!isPending && (
                  <button
                    onClick={() => copy(d.detail.replace("Cuenta: ", ""), d.name)}
                    aria-label={`Copiar datos de ${d.name}`}
                    style={{
                      width: "100%",
                      marginTop: 6,
                      background: copied === d.name ? "var(--green)" : "rgba(0,198,255,0.12)",
                      border: `0.5px solid ${copied === d.name ? "var(--green)" : "var(--gold-dark)"}`,
                      color: copied === d.name ? "#000" : "var(--gold)",
                      borderRadius: 8,
                      padding: "8px 12px",
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "all .2s",
                    }}
                  >
                    {copied === d.name ? "✓ ¡Copiado!" : "Copiar número"}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem", padding: "1.25rem", background: "rgba(0,198,255,0.06)", border: "0.5px solid var(--gold-dark)", borderRadius: 12 }}>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
            💙 Cada aporte, por pequeño que sea, hace posible que este sitio siga siendo{" "}
            <strong style={{ color: "var(--gold)" }}>100% gratuito</strong> para todos. ¡Gracias por tu generosidad!
          </p>
        </div>
      </div>
    </section>
  );
}