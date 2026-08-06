"use client";
import { useState } from "react";
import { extractYouTubeId } from "@/lib/utils";

export function VideoPlayer() {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const load = () => {
    const id = extractYouTubeId(input.trim());
    if (!id) { alert("Link de YouTube no reconocido."); return; }
    setVideoId(id);
  };

  return (
    <div style={{ borderTop: "0.5px solid var(--dark4)" }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "7px 12px", background: "var(--dark3)", border: "none", cursor: "pointer", fontSize: 12, color: "var(--text-muted)", fontFamily: "inherit" }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span aria-hidden="true">{"▶"}</span> Video instructivo</span>
        <span style={{ fontSize: 10, transform: open ? "rotate(180deg)" : "none", transition: "transform .25s" }} aria-hidden="true">{"▼"}</span>
      </button>

      {open && (
        <div style={{ background: "var(--dark)" }}>
          {videoId ? (
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                title="Video instructivo de YouTube"
                allowFullScreen
                loading="lazy"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, padding: "1.25rem", textAlign: "center" }}>
              <div style={{ fontSize: 30, opacity: .4 }} aria-hidden="true">{"🎬"}</div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>Pega tu link de YouTube cuando tengas el video</div>
              <div style={{ display: "flex", gap: 6, width: "100%", maxWidth: 340 }}>
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && load()}
                  placeholder="https://youtube.com/watch?v=..."
                  aria-label="URL del video de YouTube"
                  style={{ flex: 1, background: "var(--dark3)", border: "0.5px solid var(--dark4)", color: "var(--text)", padding: "7px 10px", borderRadius: 6, fontSize: 12, fontFamily: "inherit" }}
                />
                <button onClick={load} style={{ background: "var(--gold)", color: "var(--dark)", border: "none", padding: "7px 12px", borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", whiteSpace: "nowrap" }}>Cargar</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}