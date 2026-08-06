import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "@/data/posts";
import { SITE } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

/* ── SEO automático: cada artículo genera su título y descripción ── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${SITE.name}`,
    description: post.description,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${SITE.url}/blog/${post.slug}`,
      siteName: SITE.name,
    },
  };
}

/* ── Genera una página estática por artículo (SSG = rápido + SEO) ── */
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const fecha = new Date(post.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const otros = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: "es",
    author: { "@type": "Person", name: SITE.author },
    publisher: { "@type": "Organization", name: SITE.name },
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "6rem 2rem 4rem" }}>
        {/* Miga de pan (breadcrumb) */}
        <nav aria-label="Ruta de navegación" style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: "1.5rem" }}>
          <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Inicio</Link>
          {" / "}
          <Link href="/blog" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Blog</Link>
          {" / "}
          <span style={{ color: "var(--gold)" }}>{post.category}</span>
        </nav>

        <header style={{ marginBottom: "2.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 30 }} aria-hidden="true">{post.emoji}</span>
            <span style={{ fontSize: 11, padding: "3px 12px", borderRadius: 20, background: "rgba(0,198,255,0.12)", color: "var(--gold)", border: "0.5px solid var(--gold-dark)" }}>
              {post.category}
            </span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, lineHeight: 1.25, marginBottom: 12 }}>
            {post.title}
          </h1>
          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
            📅 {fecha} · 📖 {post.readTime} de lectura · ✍️ {SITE.author}
          </div>
        </header>

        {/* Cuerpo del artículo */}
        {post.sections.map((sec, i) => (
          <section key={i} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: "var(--gold-light)", marginBottom: 12 }}>
              {sec.h2}
            </h2>
            {sec.paragraphs.map((p, j) => (
              <p key={j} style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.8, marginBottom: 12 }}>
                {p}
              </p>
            ))}
            {sec.list && (
              <ul style={{ listStyle: "none", padding: 0, margin: "0.5rem 0", display: "flex", flexDirection: "column", gap: 8 }}>
                {sec.list.map((li, k) => (
                  <li key={k} style={{ background: "var(--dark2)", border: "0.5px solid var(--dark4)", borderRadius: 8, padding: "10px 14px", fontSize: 14, color: "var(--text)", lineHeight: 1.6 }}>
                    {li}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* CTA hacia las plataformas (conversión de afiliados) */}
        <div style={{ background: "linear-gradient(135deg, #0A1628 0%, #0F2040 100%)", border: "1px solid var(--gold-dark)", borderRadius: 12, padding: "1.5rem", textAlign: "center", margin: "2.5rem 0" }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "var(--gold)", marginBottom: 6 }}>
            🚀 ¿Listo para empezar?
          </div>
          <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 14 }}>
            Explora las plataformas verificadas de esta categoría y reclama tu bono de bienvenida.
          </p>
          <a
            href={`/#${post.relatedCategoryId}`}
            style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "12px 28px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: 14 }}
          >
            💰 Ver plataformas recomendadas
          </a>
        </div>

        {/* Otros artículos (enlazado interno = SEO) */}
        <aside style={{ borderTop: "0.5px solid var(--dark4)", paddingTop: "1.5rem" }}>
          <h3 style={{ fontSize: 14, letterSpacing: "1.5px", color: "var(--gold-dark)", marginBottom: 12 }}>
            SIGUE APRENDIENDO
          </h3>
          <div style={{ display: "grid", gap: 10 }}>
            {otros.map((o) => (
              <Link key={o.slug} href={`/blog/${o.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", background: "var(--dark2)", border: "0.5px solid var(--dark4)", borderRadius: 10, padding: "12px 14px" }}>
                  <span style={{ fontSize: 22 }} aria-hidden="true">{o.emoji}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text)" }}>{o.title}</div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{o.readTime} de lectura</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </article>
    </>
  );
}