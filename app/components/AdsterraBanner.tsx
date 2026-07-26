"use client";

interface AdsterraBannerProps {
  adCode: string;
}

export default function AdsterraBanner({ adCode }: AdsterraBannerProps) {
  return (
    <div style={{ 
      margin: "2rem auto", 
      textAlign: "center",
      padding: "1rem",
      background: "var(--dark3)",
      borderRadius: 8,
      border: "0.5px solid var(--dark4)",
      maxWidth: 1060
    }}>
      <div dangerouslySetInnerHTML={{ __html: adCode }} />
      <p style={{ fontSize: 10, color: "var(--text-muted)", marginTop: 8, marginBottom: 0 }}>
        Publicidad
      </p>
    </div>
  );
}