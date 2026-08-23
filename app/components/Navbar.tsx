"use client";
import { useState } from "react";
import { FraseSemanal } from "./FraseSemanal";

const NAV_LINKS = [
  { label: "Exchange",  href: "#exchange" },
  { label: "Wallets",   href: "#wallets"  },
  { label: "Trading",   href: "#trading"  },
  { label: "Apps",      href: "#apps"     },
  { label: "IA",        href: "#ia"       },
  { label: "Video",     href: "#video"    },
  { label: "Juegos",    href: "#juegos"   },
  { label: "Curso",     href: "#redes"    },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      background: "var(--dark2)",
      borderBottom: "0.5px solid var(--gold-dark)",
      padding: "0 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 60,
      position: "sticky",
      top: 0,
      zIndex: 100,
      gap: "1rem",
    }}>
      {/* LOGO */}
      <a href="#" style={{ textDecoration: "none", flexShrink: 0 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: "var(--gold)", whiteSpace: "nowrap" }}>
          Dinero<span style={{ color: "var(--text)", fontWeight: 400 }}> Abundante</span>
        </div>
      </a>

      {/* FRASE CENTRAL (se oculta sola en celu por el CSS interno) */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center", minWidth: 0 }}>
        <FraseSemanal />
      </div>

      {/* DESKTOP MENU */}
      <ul className="desktop-menu" style={{
        display: "flex", gap: "1.2rem", listStyle: "none", flexWrap: "wrap", flexShrink: 0,
      }}>
        {NAV_LINKS.map(link => (
          <li key={link.href}>
            <a href={link.href} style={{
              color: "var(--text-muted)", textDecoration: "none", fontSize: 13,
              transition: "color .2s", whiteSpace: "nowrap",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* MOBILE BUTTON */}
      <button
        className="mobile-button"
        onClick={() => setOpen(o => !o)}
        style={{
          display: "none",
          background: "none", border: "none",
          color: "white", fontSize: 28, cursor: "pointer", flexShrink: 0,
        }}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div style={{
          position: "absolute", top: 60, left: 0, right: 0,
          background: "var(--dark2)",
          borderBottom: "0.5px solid var(--gold-dark)",
          zIndex: 99, padding: "1rem 2rem",
          display: "flex", flexDirection: "column", gap: "0.75rem",
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: "var(--text-muted)", textDecoration: "none",
                fontSize: 15, padding: "6px 0",
                borderBottom: "0.5px solid var(--dark4)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}