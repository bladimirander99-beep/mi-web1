import Link from "next/link";
import { POSTS } from "@/data/posts";

export function BlogTeaser() {
  const latest = POSTS.slice(0, 3);
  return (
    <section
      aria-labelledby="blog-teaser-title"
      style={{ background: "var(--dark3)", borderTop: "0.5px solid var(--dark4)", borderBottom: "0.5px solid var(--dark4)", padding: "3.5rem 2rem" }}
    >
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: "1.5rem" }}>
          <div>
            <span style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", display: "block", marginBottom: "0.4rem" }}>
              BLOG · GUÍAS GRATUITAS
            </span>
            <h2 id="blog-teaser-title" style={{ fontSize: 26, fontWeight: 600 }}>
              📝 Aprende antes de invertir
            </h2>
          </div>
          <Link
            href="/blog"
            style={{ fontSize: 13, color: "var(--gold)", textDecoration: "none", border: "0.5px solid var(--gold-dark)", borderRadius: 20, padding: "6px 16px" }}
          >
            Ver todos los artículos →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {latest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
              <article style={{ background: "var(--dark2)", border: "0.5px solid var(--dark4)", borderRadius: 10, padding: "1.25rem", height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontSize: 24 }} aria-hidden="true">{post.emoji}</span>
                  <span style={{ fontSize: 10, color: "var(--text-muted)" }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text)", lineHeight: 1.4, marginBottom: 8 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {post.description.slice(0, 110)}...
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}