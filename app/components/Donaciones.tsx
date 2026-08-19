"use client";
import { useState } from "react";
import { DONACIONES } from "@/data/donaciones";
import { trackEvent } from "@/lib/tracking";

const QR_MAP: Record<string, string> = {
  "Binance Pay": "/imagenes/binance-pay-qr.jpg",
  "USDT BEP20": "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=0x4e21d2edad7fcd85ca97ce1c6245194b4e97d613",
  "AirTM": "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://airtm.me/bladimir2025",
  "Peigo": "/imagenes/peigo-qr.jpg",
  "De Una App": "/imagenes/deuna-qr.jpg",
};

const COPY_MAP: Record<string, string> = {
  "Binance Pay": "1039618582",
  "USDT BEP20": "0x4e21d2edad7fcd85ca97ce1c6245194b4e97d613",
  "AirTM": "https://airtm.me/bladimir2025",
};

export function Donaciones() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (name: string) => {
    const text = COPY_MAP[name];
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    trackEvent("donation_copy", { event_category: "donaciones", event_label: name });
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="donaciones" style={{ padding: "70px 20px", background: "var(--dark)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", textAlign: "center" }}>
        <p style={{ color: "#00C6FF", letterSpacing: 2, fontSize: 12, fontWeight: 700, margin: 0 }}>APOYA ESTE PROYECTO</p>
        <h2 style={{ fontSize: 28, margin: "10px 0 12px", color: "var(--text)" }}>🍵 Apóyame con tu voluntad</h2>
        <p style={{ color: "var(--text-muted)", fontSize: 14, maxWidth: 640, margin: "0 auto 34px", lineHeight: 1.6 }}>
          Si este contenido te ha ayudado a dar el primer paso hacia tu libertad financiera, considera
          apoyarme con tan solo <strong style={{ color: "#00C6FF" }}>$1 dólar</strong>. Tu gesto me ayuda a seguir creando contenido gratuito para ti.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14, textAlign: "left" }}>
          {DONACIONES.map((d) => (
            <div key={d.name} style={{ background: "var(--dark2)", border: "1px solid rgba(0,198,255,0.35)", borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              {QR_MAP[d.name] && (
                <img
                  src={QR_MAP[d.name]}
                  alt={`Código QR de ${d.name} para donar`}
                  style={{ width: "100%", maxWidth: 170, height: "auto", margin: "0 auto", background: "#fff", padding: 6, borderRadius: 10, display: "block" }}
                />
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18 }} aria-hidden="true">{d.icon}</span>
                <strong style={{ color: "var(--text)", fontSize: 14 }}>{d.name}</strong>
              </div>
              {d.href.startsWith("http") ? (
                <a href={d.href} target="_blank" rel="noopener noreferrer" style={{ color: "#00C6FF", fontSize: 12, textDecoration: "none", wordBreak: "break-all" }}>
                  {d.detail}
                </a>
              ) : (
                <p style={{ margin: 0, color: "#00C6FF", fontSize: 12, wordBreak: "break-all" }}>{d.detail}</p>
              )}

              {COPY_MAP[d.name] ? (
                <button
                  onClick={() => copy(d.name)}
                  style={{ marginTop: "auto", padding: "9px 12px", borderRadius: 8, border: "1px solid rgba(0,198,255,0.5)", background: "rgba(0,198,255,0.08)", color: "#00C6FF", fontSize: 12, fontWeight: 700, cursor: "pointer" }}
                >
                  {copied === d.name ? "✅ ¡Copiado!" : "📋 Copiar número"}
                </button>
              ) : (
                <p style={{ margin: "auto 0 0", textAlign: "center", fontSize: 11, color: "var(--text-muted)", border: "1px dashed rgba(0,198,255,0.4)", borderRadius: 8, padding: "8px 10px" }}>
                  📲 Escanea el QR con la app {d.name}
                </p>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 26, background: "rgba(0,198,255,0.07)", border: "1px solid rgba(0,198,255,0.35)", borderRadius: 10, padding: "12px 16px", fontSize: 13, color: "var(--text-muted)" }}>
          💙 Cada aporte, por pequeño que sea, hace posible que este sitio siga siendo <strong style={{ color: "#00C6FF" }}>100% gratuito</strong> para todos. ¡Gracias por tu generosidad!
        </div>
      </div>
    </section>
  );
}

export default Donaciones;