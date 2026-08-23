"use client";
import { useEffect, useState } from "react";
import { FRASES } from "@/data/frases";

export function FraseSemanal() {
  const [frase, setFrase] = useState(FRASES[0]);

  useEffect(() => {
    const dia = Math.floor(Date.now() / 86400000); // cambia CADA DÍA, solo
    setFrase(FRASES[dia % FRASES.length]);
  }, []);

  return (
    <>
      <style>{`@media (max-width: 1000px){ .frase-semanal{ display:none !important; } }`}</style>
      <span
        className="frase-semanal"
        style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, color: "var(--gold)", textAlign: "center", whiteSpace: "nowrap", maxWidth: "38vw", overflow: "hidden", textOverflow: "ellipsis" }}
      >
        {frase}
      </span>
    </>
  );
}

export default FraseSemanal;