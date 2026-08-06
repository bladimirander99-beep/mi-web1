import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "@/data/posts";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | Guías gratis para ganar dinero online",
  description:
    "Artículos y guías gratuitas sobre criptomonedas, wallets, inteligencia artificial y plataformas para generar ingresos desde Internet.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: "Blog | Guías gratis para ganar dinero online",
    description: "Cripto, wallets, IA y plataformas de ingresos: guías gratuitas actualizadas.",
    url: `${SITE.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <section style={{ maxWidth: 1060, margin: "0 auto", padding: "6rem 2rem 4rem" }}>
      <span style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", display: "block", marginBottom: "0.4rem" }}>
        BLOG · GUÍAS GRATUITAS
      </span>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: "0.5rem" }}>
        Aprende, aplica y genera ingresos
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: "2.5rem", maxWidth: 700 }}>
        Artículos prácticos y actualizados para que domines cada plataforma antes de registrarte. Sin costo, sin letra pequeña.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article
              style={{
                background: "var(--dark2)",
                border: "0.5px solid var(--dark4)",
                borderRadius: 12,
                padding: "1.5rem",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                transition: "border-color .2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 26 }} aria-hidden="true">{post.emoji}</span>
                <span style={{ fontSize: 10, padding: "3px 10px", borderRadius: 20, background: "rgba(0,198,255,0.12)", color: "var(--gold)", border: "0.5px solid var(--gold-dark)" }}>
                  {post.category}
                </span>
              </div>
              <h2 style={{ fontSize: 17, fontWeight: 600, color: "var(--text)", lineHeight: 1.35 }}>
                {post.title}
              </h2>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>
                {post.description}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-muted)" }}>
                <span>📖 {post.readTime} de lectura</span>
                <span style={{ color: "var(--gold)" }}>Leer más →</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}