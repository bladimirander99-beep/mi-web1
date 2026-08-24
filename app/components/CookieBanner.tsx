"use client";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setShow(true);
  }, []);

  const accept = (value: "all" | "essential") => {
    localStorage.setItem("cookie_consent", value);
    setShow(false);
    if (value === "all" && typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  if (!show) return null;

  return (
    <div style={{
      position: "fixed", bottom: 20, left: 20, right: 20, maxWidth: 600, margin: "0 auto",
      background: "var(--dark2)", border: "1px solid var(--gold-dark)", borderRadius: 12,
      padding: 18, zIndex: 999, boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
    }}>
      <p style={{ margin: "0 0 14px", fontSize: 13, color: "var(--text)", lineHeight: 1.6 }}>
        🍪 Usamos cookies para mejorar tu experiencia y mostrar contenido relevante.
        <a href="/cookies" style={{ color: "var(--gold)", marginLeft: 4 }}>Más información</a>.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => accept("all")} style={btnStyle(true)}>Aceptar todas</button>
        <button onClick={() => accept("essential")} style={btnStyle(false)}>Solo esenciales</button>
      </div>
    </div>
  );
}

const btnStyle = (primary: boolean): React.CSSProperties => ({
  padding: "9px 18px",
  borderRadius: 8,
  border: primary ? "none" : "1px solid var(--dark4)",
  background: primary ? "var(--gold)" : "transparent",
  color: primary ? "var(--dark)" : "var(--text)",
  fontSize: 13,
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: "inherit",
});