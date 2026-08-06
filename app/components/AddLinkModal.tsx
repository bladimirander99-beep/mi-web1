"use client";
import { useState, useEffect, useRef } from "react";
import type { RefItem } from "@/types";

interface Props {
  catId: string;
  onClose: () => void;
  onSave: (catId: string, item: RefItem) => void;
}

export function AddLinkModal({ catId, onClose, onSave }: Props) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [badge, setBadge] = useState("");
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus y cerrar con ESC
  useEffect(() => {
    nameInputRef.current?.focus();
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const save = () => {
    if (!name.trim() || !url.trim()) {
      alert("Nombre y URL son requeridos.");
      return;
    }
    onSave(catId, {
      name: name.trim(),
      href: url.trim(),
      badge: badge.trim() || "Nuevo",
    });
    onClose();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--dark3)",
    border: "0.5px solid var(--dark4)",
    color: "var(--text)",
    padding: "10px 14px",
    borderRadius: 8,
    fontSize: 14,
    marginBottom: 10,
    fontFamily: "inherit",
    outline: "none",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-link-title"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--dark2)",
          border: "0.5px solid var(--gold-dark)",
          borderRadius: 10,
          padding: "2rem",
          width: "90%",
          maxWidth: 400,
        }}
      >
        <h3 id="add-link-title" style={{ color: "var(--gold)", marginBottom: "1rem", fontSize: 16, margin: "0 0 1rem 0" }}>
          Agregar plataforma
        </h3>
        <label style={{ display: "block", fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>
          Nombre
        </label>
        <input
          ref={nameInputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej: Binance"
          aria-label="Nombre de la plataforma"
          style={inputStyle}
        />
        <label style={{ display: "block", fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>
          URL de referido
        </label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://tu-link.com"
          aria-label="URL de la plataforma"
          style={inputStyle}
        />
        <label style={{ display: "block", fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>
          Badge (opcional)
        </label>
        <input
          value={badge}
          onChange={(e) => setBadge(e.target.value)}
          placeholder="Ej: Bono $50"
          aria-label="Badge de la plataforma"
          style={inputStyle}
        />
        <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
          <button
            onClick={save}
            style={{
              background: "var(--gold)",
              color: "var(--dark)",
              border: "none",
              padding: "10px 18px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              flex: 1,
            }}
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              color: "var(--gold)",
              border: "1px solid var(--gold-dark)",
              padding: "10px 18px",
              borderRadius: 8,
              fontSize: 14,
              cursor: "pointer",
              fontFamily: "inherit",
              flex: 1,
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}