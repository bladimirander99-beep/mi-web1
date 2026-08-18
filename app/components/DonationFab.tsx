"use client";
import { useState } from "react";
import type { CSSProperties } from "react";
import { trackEvent } from "@/lib/tracking";

const USDT_ADDRESS = "0x4e21d2edad7fcd85ca97ce1c6245194b4e97d613";
const BINANCE_PAY_ID = "1039618582";
const BINANCE_ALIAS = "Deivid1000";
const AIRTM_LINK = "https://airtm.me/bladimir2025";
const PRESETS = [1, 2, 3, 5, 10, 20];
const COINS = ["USDT", "USDC", "BNB", "BTC", "ETH"];

type Method = "binance" | "usdt" | "airtm";

export function DonationFab() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(1);
  const [custom, setCustom] = useState("");
  const [method, setMethod] = useState<Method>("binance");
  const [coin, setCoin] = useState("USDT");
  const [copied, setCopied] = useState<string | null>(null);

  const finalAmount = custom !== "" ? Math.max(1, Math.floor(Number(custom) || 1)) : amount;

  const copy = async (text: string, key: string) => {
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
    trackEvent("donation_copy", { event_category: "donaciones", event_label: key, value: finalAmount });
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const openFab = () => {
    trackEvent("fab_open", { event_category: "donaciones" });
    setOpen(true);
  };

  const chip = (active: boolean): CSSProperties => ({
    padding: "8px 14px",
    borderRadius: 10,
    border: active ? "1px solid var(--gold)" : "1px solid var(--dark4)",
    background: active ? "var(--gold)" : "var(--dark)",
    color: active ? "#12212e" : "var(--text)",
    fontWeight: active ? 700 : 500,
    fontSize: 14,
    cursor: "pointer",
  });

  const coinChip = (active: boolean): CSSProperties => ({
    padding: "6px 10px",
    borderRadius: 8,
    border: active ? "1px solid var(--gold)" : "1px solid var(--dark4)",
    background: active ? "rgba(247,196,73,0.15)" : "var(--dark)",
    color: active ? "var(--gold)" : "var(--text-muted)",
    fontWeight: active ? 700 : 500,
    fontSize: 12,
    cursor: "pointer",
  });

  const tab = (active: boolean): CSSProperties => ({
    flex: 1,
    padding: "10px 6px",
    borderRadius: 10,
    border: "none",
    background: active ? "var(--gold)" : "var(--dark)",
    color: active ? "#12212e" : "var(--text)",
    fontWeight: 700,
    fontSize: 13,
    cursor: "pointer",
  });

  return (
    <>
      <button
        onClick={openFab}
        aria-label="Apoyar con una donación"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 900,
          padding: "14px 18px",
          borderRadius: 30,
          border: "none",
          background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
          color: "#12212e",
          fontWeight: 800,
          fontSize: 14,
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
        }}
      >
        💛 Apoyar
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", zIndex: 998, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", maxWidth: 400, background: "var(--dark2)", border: "1px solid var(--dark4)", borderRadius: 18, padding: 22, position: "relative", maxHeight: "85vh", overflowY: "auto" }}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              style={{ position: "absolute", top: 12, right: 14, background: "none", border: "none", color: "var(--text-muted)", fontSize: 18, cursor: "pointer" }}
            >
              ✕
            </button>

            <h3 style={{ margin: 0, fontSize: 20, color: "var(--gold)" }}>💛 Apoya a Dinero Abundante</h3>
            <p style={{ margin: "6px 0 16px", fontSize: 13, color: "var(--text-muted)" }}>
              Tu apoyo mantiene las guías gratis. Dona desde <strong style={{ color: "var(--text)" }}>$1</strong>.
            </p>

            {/* MONTO */}
            <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 700 }}>Elige tu monto:</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
              {PRESETS.map((p) => (
                <button key={p} onClick={() => { setAmount(p); setCustom(""); }} style={chip(amount === p && custom === "")}>
                  ${p}
                </button>
              ))}
            </div>
            <input
              type="number"
              min={1}
              placeholder="Otro monto ($)"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              style={{ width: "100%", padding: "10px 12px", borderRadius: 10, border: "1px solid var(--dark4)", background: "var(--dark)", color: "var(--text)", fontSize: 14, marginBottom: 16 }}
            />

            {/* MÉTODO */}
            <p style={{ margin: "0 0 8px", fontSize: 13, fontWeight: 700 }}>Elige tu método:</p>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              <button onClick={() => setMethod("binance")} style={tab(method === "binance")}>🟡 Binance</button>
              <button onClick={() => setMethod("usdt")} style={tab(method === "usdt")}>📱 USDT</button>
              <button onClick={() => setMethod("airtm")} style={tab(method === "airtm")}>🌐 AirTM</button>
            </div>

            {method === "binance" && (
              <div style={{ background: "var(--dark)", borderRadius: 12, padding: 14, textAlign: "center" }}>
                <img
                  src="/binance-pay-qr.png"
                  alt="QR de Binance Pay: escanea con la app de Binance para enviar"
                  width={180}
                  height={180}
                  style={{ borderRadius: 12, background: "#fff", padding: 8, margin: "0 auto 10px", display: "block" }}
                />
                <p style={{ margin: "0 0 8px", fontSize: 12, color: "var(--text-muted)" }}>
                  Escanea con la app de Binance, o envía manual al alias <strong style={{ color: "var(--text)" }}>{BINANCE_ALIAS}</strong>
                </p>
                <p style={{ margin: "0 0 8px", fontSize: 13 }}>Elige la moneda:</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center", marginBottom: 12 }}>
                  {COINS.map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCoin(c);
                        trackEvent("donation_coin", { event_category: "donaciones", event_label: c, value: finalAmount });
                      }}
                      style={coinChip(coin === c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <p style={{ margin: "0 0 8px", fontSize: 13 }}>
                  Envía <strong style={{ color: "var(--gold)" }}>${finalAmount}</strong> en <strong style={{ color: "var(--gold)" }}>{coin}</strong> al ID:
                </p>
                <p style={{ margin: "0 0 10px", fontFamily: "monospace", fontSize: 16, fontWeight: 700, color: "var(--text)" }}>{BINANCE_PAY_ID}</p>
                <button onClick={() => copy(BINANCE_PAY_ID, "binance_pay")} style={chip(copied === "binance_pay")}>
                  {copied === "binance_pay" ? "✅ ¡ID copiado!" : "📋 Copiar ID"}
                </button>
              </div>
            )}

            {method === "usdt" && (
              <div style={{ background: "var(--dark)", borderRadius: 12, padding: 14, textAlign: "center" }}>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${USDT_ADDRESS}`}
                  alt="Código QR de dirección USDT BEP20"
                  width={170}
                  height={170}
                  style={{ borderRadius: 10, background: "#fff", padding: 8, margin: "0 auto 10px", display: "block" }}
                />
                <p style={{ margin: "0 0 4px", fontFamily: "monospace", fontSize: 11, wordBreak: "break-all", color: "var(--text-muted)" }}>
                  {USDT_ADDRESS.slice(0, 10)}...{USDT_ADDRESS.slice(-8)}
                </p>
                <p style={{ margin: "0 0 10px", fontSize: 12, color: "#ff9d5c" }}>⚠️ Envía solo por red <strong>BEP20</strong> (BNB Smart Chain)</p>
                <button onClick={() => copy(USDT_ADDRESS, "usdt")} style={chip(copied === "usdt")}>
                  {copied === "usdt" ? "✅ ¡Dirección copiada!" : "📋 Copiar dirección"}
                </button>
              </div>
            )}

            {method === "airtm" && (
              <div style={{ background: "var(--dark)", borderRadius: 12, padding: 14, textAlign: "center" }}>
                <p style={{ margin: "0 0 10px", fontSize: 13 }}>
                  Envía <strong style={{ color: "var(--gold)" }}>${finalAmount}</strong> con tarjeta, banco o cripto:
                </p>
                <a
                  href={AIRTM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("donation_click", { event_category: "donaciones", event_label: "airtm", value: finalAmount })}
                  style={{ display: "block", padding: "12px", borderRadius: 12, background: "var(--gold)", color: "#12212e", fontWeight: 800, textDecoration: "none", marginBottom: 10 }}
                >
                  Donar ${finalAmount} con AirTM →
                </a>
                <p style={{ margin: 0, fontSize: 11, color: "var(--text-muted)" }}>
                  Usuario: <strong style={{ color: "var(--text)" }}>bladimir2025</strong> · El donante no necesita cuenta AirTM.
                </p>
              </div>
            )}

            <p style={{ margin: "14px 0 0", fontSize: 11, color: "var(--text-muted)", textAlign: "center" }}>
              Gracias por mantener vivo este proyecto 🙏 — Ander
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default DonationFab;