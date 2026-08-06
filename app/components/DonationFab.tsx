"use client";
import { useState, useEffect } from "react";
import { DONACIONES } from "@/data/donaciones";
import { trackDonationCopy, trackEvent } from "@/lib/tracking";

export function DonationFab() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState("");
  const [mounted, setMounted] = useState(false);

  // Evita problemas de hidratación en SSR
  useEffect(() => setMounted(true), []);

  // Cierra con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const copy = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopied(name);
    trackDonationCopy(name);
    setTimeout(() => setCopied(""), 2000);
  };

  if (!mounted) return null;

  // Solo opciones activas (no "Próximamente")
  const active = DONACIONES.filter((d) => d.detail !== "Próximamente");

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 100, fontFamily: "inherit" }}>
      {/* ── MENÚ DESPLEGABLE (aparece arriba del botón principal) ── */}
      {open && (
        <div
          role="dialog"
          aria-label="Opciones de donación"
          style={{
            position: "absolute",
            bottom: 70,
            right: 0,
            width: 280,
            background: "var(--dark2)",
            border: "1px solid var(--gold-dark)",
            borderRadius: 12,
            padding: 16,
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            animation: "fabFadeUp 0.25s ease-out",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--gold)" }}>
              ☕ Apóyame con $1
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú de donación"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                fontSize: 18,
                padding: "0 4px",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>

          <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 14, lineHeight: 1.5 }}>
            Tu apoyo mantiene esta guía <strong style={{ color: "var(--gold)" }}>100% gratuita</strong>.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {/* PayPal: link directo */}
            <a
              href="https://www.paypal.me/BladimirSantacruz"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("donation_click", "paypal")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                background: "#003087",
                color: "white",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: 18 }}>💳</span>
              <span>PayPal (desde $1)</span>
            </a>

            {/* Banco Pichincha: botón copiar */}
            <button
              onClick={() => copy("2212006044", "Banco Pichincha")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                background: copied === "Banco Pichincha" ? "var(--green)" : "var(--dark3)",
                border: "0.5px solid var(--dark4)",
                color: copied === "Banco Pichincha" ? "#000" : "var(--text)",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "inherit",
                textAlign: "left",
                transition: "all 0.2s",
              }}
            >
              <span style={{ fontSize: 18 }}>🏦</span>
              <span style={{ flex: 1 }}>
                {copied === "Banco Pichincha" ? "✓ Número copiado" : "Banco Pichincha · 2212006044"}
              </span>
            </button>

            {/* Ir a la sección de donaciones completa */}
            <a
              href="#donaciones-title"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                setTimeout(() => {
                  document.getElementById("donaciones-title")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                padding: "10px 12px",
                background: "transparent",
                border: "1px solid var(--gold-dark)",
                color: "var(--gold)",
                borderRadius: 8,
                textDecoration: "none",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Ver todas las opciones →
            </a>
          </div>
        </div>
      )}

      {/* ── BOTÓN PRINCIPAL (el círculo dorado) ── */}
      <button
        onClick={() => {
          setOpen(!open);
          if (!open) trackEvent("fab_open", "donaciones");
        }}
        aria-label={open ? "Cerrar menú de donación" : "Apoyar el proyecto"}
        aria-expanded={open}
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #00C6FF 0%, #0077AA 100%)",
          border: "none",
          cursor: "pointer",
          color: "white",
          fontSize: 26,
          boxShadow: open
            ? "0 4px 16px rgba(0, 198, 255, 0.5)"
            : "0 6px 24px rgba(0, 198, 255, 0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.25s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        {open ? "✕" : "☕"}
      </button>

      {/* Tooltip cuando está cerrado */}
      {!open && (
        <div
          style={{
            position: "absolute",
            bottom: 70,
            right: 10,
            background: "var(--dark2)",
            color: "var(--gold)",
            padding: "6px 12px",
            borderRadius: 8,
            fontSize: 11,
            fontWeight: 600,
            border: "0.5px solid var(--gold-dark)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            opacity: 0,
            animation: "fabTooltip 4s ease-in-out 3s infinite",
          }}
        >
          ¿Te sirvió? Apóyame ☕
        </div>
      )}

      {/* Animación inline */}
      <style>{`
        @keyframes fabFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fabTooltip {
          0%   { opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}