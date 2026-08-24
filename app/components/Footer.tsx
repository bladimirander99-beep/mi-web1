import Link from "next/link";

const COL1 = [
  { label: "Exchange", href: "#exchange" },
  { label: "Wallets", href: "#wallets" },
  { label: "Trading", href: "#trading" },
  { label: "Apps", href: "#apps" },
];

const COL2 = [
  { label: "IA", href: "#ia" },
  { label: "Video", href: "#video" },
  { label: "Juegos", href: "#juegos" },
  { label: "VPN", href: "#vpn" },
];

const COL3 = [
  { label: "Curso de Redes", href: "#redes" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre Ander", href: "/sobre-mi" },
  { label: "Contacto", href: "/contacto" },
];

const LEGAL = [
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos", href: "/terminos" },
  { label: "Cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--dark2)", borderTop: "0.5px solid var(--dark4)", padding: "3rem 2rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 30, marginBottom: 30 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "var(--gold)", marginBottom: 10 }}>
              Dinero<span style={{ color: "var(--text)", fontWeight: 400 }}> Abundante</span>
            </div>
            <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
              Guías reales para generar ingresos en línea. Probadas con tiempo y dinero real. 💛
            </p>
          </div>

          <FooterCol title="Plataformas" links={COL1} />
          <FooterCol title="Herramientas" links={COL2} />
          <FooterCol title="Aprender" links={COL3} />
        </div>

        <div style={{ borderTop: "0.5px solid var(--dark4)", paddingTop: 20, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Dinero Abundante · Hecho con 💛 por Ander
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: 12, color: "var(--text-muted)", textDecoration: "none" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p style={{ fontSize: 11, letterSpacing: 1.5, color: "var(--gold)", fontWeight: 700, marginBottom: 12 }}>{title.toUpperCase()}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none" }}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}