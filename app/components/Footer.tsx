import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "var(--dark2)", borderTop: "0.5px solid var(--dark4)", padding: "2rem", textAlign: "center", color: "var(--text-muted)", fontSize: 13 }}>
      <div style={{ fontSize: 20, fontWeight: 700, color: "var(--gold)", marginBottom: "0.5rem" }}>
        Dinero<span style={{ color: "var(--text)", fontWeight: 400 }}> Abundante</span>
      </div>

      <nav aria-label="Enlaces del pie" style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", margin: "1rem 0" }}>
        <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Inicio</Link>
        <Link href="/#exchange" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Plataformas</Link>
        <Link href="/blog" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Blog</Link>
        <Link href="/#redes" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Guía gratis</Link>
      </nav>

      <p>De la escasez a la abundancia — cada plataforma que activas es un paso hacia tu libertad financiera. Juntos construimos riqueza real.</p>
      <p style={{ marginTop: "0.4rem", fontSize: 12, color: "#1e3a52" }}>
        Las ganancias mostradas son estimadas y no garantizadas. Invierte solo lo que puedas permitirte perder.
      </p>
      <p style={{ marginTop: "1rem", fontSize: 11, color: "var(--text-muted)" }}>
        © {new Date().getFullYear()} Dinero Abundante · Todos los derechos reservados
      </p>
    </footer>
  );
}