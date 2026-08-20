"use client";
import { trackEvent } from "@/lib/tracking";

const ADSTERRA_REF = "https://beta.publishers.adsterra.com/referral/Ftxatd3c21";

export function AdsterraRef() {
  return (
    <section style={{ padding: "50px 20px", background: "var(--dark)" }}>
      <a
        href={ADSTERRA_REF}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("adsterra_ref_click", { event_category: "afiliados" })}
        style={{ maxWidth: 720, margin: "0 auto", display: "block", background: "linear-gradient(135deg, #b31217, #e52d27)", borderRadius: 14, padding: "28px 24px", textAlign: "center", textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.35)" }}
      >
        <p style={{ margin: 0, color: "#fff", fontWeight: 800, letterSpacing: 1, fontSize: 14 }}>
          <span style={{ background: "#fff", color: "#e52d27", borderRadius: 6, padding: "2px 9px", fontWeight: 900 }}>A</span> ADSTERRA
        </p>
        <h3 style={{ color: "#fff", fontSize: 26, margin: "12px 0 6px", fontWeight: 900, textTransform: "uppercase" }}>
          Monetiza tu tráfico fácilmente
        </h3>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, margin: "0 0 16px" }}>
          Gana dinero con tu sitio web, blog o app con anuncios de alto pago. 💵
        </p>
        <span style={{ display: "inline-block", background: "#f7c948", color: "#1a1a1a", fontWeight: 800, fontSize: 14, padding: "10px 22px", borderRadius: 8 }}>
          Únete a Adsterra →
        </span>
      </a>
    </section>
  );
}

export default AdsterraRef;