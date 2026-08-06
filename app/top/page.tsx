import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { TOP_PLATFORMS, TOP_MONTH } from "@/data/top";
import { SITE } from "@/lib/constants";
import { TopCard } from "@/app/components/TopCard";
import type { RefItem } from "@/types";

export const metadata: Metadata = {
  title: `Top 5 plataformas para ganar dinero en ${TOP_MONTH} | ${SITE.name}`,
  description:
    "Ranking actualizado con las 5 mejores plataformas verificadas para generar ingresos online este mes: bonos de bienvenida, pros y contras, y cuál elegir según tu perfil.",
  alternates: { canonical: `${SITE.url}/top` },
  openGraph: {
    title: `Top 5 plataformas de ${TOP_MONTH}`,
    description: "El ranking mensual de plataformas verificadas para generar ingresos online.",
    url: `${SITE.url}/top`,
  },
};

/* Busca el link de afiliado real dentro de las categorías */
function findRefLink(name: string): RefItem | undefined {
  for (const cat of CATEGORIES) {
    const l = cat.links.find((x) => x.name === name);
    if (l) return l;
  }
  return undefined;
}

export default function TopPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Top 5 plataformas para ganar dinero en ${TOP_MONTH}`,
    itemListElement: TOP_PLATFORMS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      description: p.bestFor,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "6rem 2rem 4rem" }}>
        <span style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", display: "block", marginBottom: "0.4rem" }}>
          RANKING MENSUAL · {TOP_MONTH.toUpperCase()}
        </span>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "0.75rem" }}>
          Top 5 plataformas para ganar dinero online
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 700, marginBottom: "2.5rem", lineHeight: 1.7 }}>
          Probamos y verificamos cada plataforma antes de recomendarla. Este ranking se actualiza cada mes con los mejores bonos, comisiones y seguridad. Si solo vas a registrarte en una, elige la #1.
        </p>

        {TOP_PLATFORMS.map((p, i) => {
          const link = findRefLink(p.name);
          if (!link) return null;
          return <TopCard key={p.name} platform={p} link={link} rank={i + 1} />;
        })}

        {/* Nota de transparencia (confianza + compliance) */}
        <div style={{ background: "var(--dark2)", border: "0.5px solid var(--dark4)", borderRadius: 10, padding: "1.25rem", fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>
          <strong style={{ color: "var(--gold)" }}>🔍 Nuestra metodología:</strong> evaluamos seguridad, bonos reales, facilidad de uso y soporte en español. Algunos enlaces son de afiliado: si te registras a través de ellos, nosotros ganamos una comisión sin costo extra para ti. Eso mantiene esta guía 100% gratuita.
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/" style={{ color: "var(--gold)", textDecoration: "none", fontSize: 14 }}>
            ← Ver las 30+ plataformas y categorías
          </Link>
        </div>
      </section>
    </>
  );
}