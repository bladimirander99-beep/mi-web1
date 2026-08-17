"use client";
import { useState } from "react";
import { CONTACT } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";

export function ContactBar() {
  const [copied, setCopied] = useState(false);

  const copySession = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.sessionId);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = CONTACT.sessionId;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    trackEvent("session_copy", { event_category: "contact", event_label: "session" });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btnStyle: React.CSSProperties = {
    fontSize: 12,
    padding: "8px 16px",
    borderRadius: 20,
    textDecoration: "none",
    border: "0.5px solid var(--dark4)",
    background: "var(--dark2)",
    color: "var(--text)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", margin: "1rem 0" }}>
      <a
        href={CONTACT.telegram}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("telegram_click", { event_category: "contact", event_label: "telegram" })}
        style={{ ...btnStyle, color: "var(--gold)", borderColor: "var(--gold-dark)" }}
      >
        📢 {CONTACT.telegramLabel}
      </a>
      <button onClick={copySession} style={btnStyle}>
        🔒 {copied ? "✅ ¡ID copiado!" : "Copiar ID de Session"}
      </button>
    </div>
  );
}