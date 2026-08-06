"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  adCode: string;
}

export function AdsterraBanner({ adCode }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Solo carga el anuncio cuando el usuario hace scroll cerca de él
    // Esto evita que el script de Adsterra compita con tu contenido inicial
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // empieza a cargar 200px antes de entrar en pantalla
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
      {visible ? (
        <div dangerouslySetInnerHTML={{ __html: adCode }} />
      ) : (
        // Reserva de espacio → CLS = 0 (no saltos de layout)
        <div
          style={{
            height: 250,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-muted)",
            fontSize: 12,
          }}
          aria-hidden="true"
        >
          Cargando anuncio...
        </div>
      )}
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