"use client";
import { useEffect, useRef, useState } from "react";

// Unidad "Banner nativo" ACTIVA en Adsterra
const AD_SRC = "https://pl30536518.profitableratecpmnetwork.com/fe9f35b08c7eabbb25d9376616ddb51c/invoke.js";
const AD_CONTAINER_ID = "contenedor-fe9f35b08c7eabbb25d9376616ddb51c";

interface Props {
  adCode?: string;
}

export function AdsterraBanner(_props: Props = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Lazy load: solo carga el anuncio cuando el usuario se acerca haciendo scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Inyecta el script como elemento REAL (innerHTML no ejecuta scripts)
  useEffect(() => {
    if (!visible) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = AD_SRC;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      aria-label="Publicidad"
      style={{
        margin: "2rem auto",
        textAlign: "center",
        padding: "1rem",
        background: "var(--dark3)",
        borderRadius: 8,
        border: "0.5px solid var(--dark4)",
        maxWidth: 1060,
      }}
    >
      <div
        id={AD_CONTAINER_ID}
        style={{
          minHeight: 250,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!visible && (
          <span style={{ color: "var(--text-muted)", fontSize: 12 }} aria-hidden="true">
            Cargando anuncio...
          </span>
        )}
      </div>
      <p
        style={{
          fontSize: 10,
          color: "var(--text-muted)",
          marginTop: 8,
          marginBottom: 0,
        }}
      >
        Publicidad
      </p>
    </div>
  );
}

export default AdsterraBanner;