import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Dinero Abundante",
  description: "Política de privacidad de Dinero Abundante. Cómo protegemos y tratamos tus datos.",
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 2rem" }}>
      <h1 style={{ fontSize: 30, fontWeight: 700, color: "var(--gold)", marginBottom: 12 }}>Política de Privacidad</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 30 }}>Última actualización: agosto de 2026</p>

      <Section title="1. Quiénes somos">
        <p>Dinero Abundante es un proyecto educativo independiente creado por Anderson Bladimir ("Ander") con el objetivo de compartir información verificada sobre formas reales de generar ingresos en línea.</p>
      </Section>

      <Section title="2. Qué datos recopilamos">
        <p>No recopilamos datos personales a través de formularios en este sitio. Sin embargo, utilizamos servicios de terceros que pueden recopilar información básica de navegación:</p>
        <ul>
          <li><strong>Google Analytics:</strong> datos anónimos de navegación (páginas vistas, país, dispositivo).</li>
          <li><strong>Adsterra:</strong> datos técnicos para mostrar anuncios relevantes.</li>
          <li><strong>Plataformas afiliadas:</strong> al hacer clic en un enlace de referido, eres redirigido a su sitio, donde aplican sus propias políticas.</li>
        </ul>
      </Section>

      <Section title="3. Cookies">
        <p>Utilizamos cookies técnicas y analíticas. Puedes aceptarlas o rechazarlas a través del banner que aparece al entrar al sitio. Consulta nuestra <a href="/cookies" style={{ color: "var(--gold)" }}>Política de Cookies</a>.</p>
      </Section>

      <Section title="4. Enlaces a terceros">
        <p>Este sitio contiene enlaces a plataformas externas (Binance, Bybit, AirTM, etc.). No somos responsables del contenido ni del tratamiento de datos en dichos sitios. Te recomendamos leer sus políticas antes de registrarte.</p>
      </Section>

      <Section title="5. Publicidad y afiliados">
        <p>Algunos enlaces de este sitio son de afiliado. Esto significa que podemos recibir una comisión si te registras o realizas una compra a través de ellos, <strong style={{ color: "var(--gold)" }}>sin costo adicional para ti</strong>. Esto nos permite mantener el sitio 100% gratuito.</p>
      </Section>

      <Section title="6. Tus derechos">
        <p>De acuerdo con el RGPD, tienes derecho a acceder, rectificar o eliminar tus datos. Para ejercerlo, escríbenos a través de nuestra <a href="/contacto" style={{ color: "var(--gold)" }}>página de contacto</a>.</p>
      </Section>

      <Section title="7. Contacto">
        <p>Si tienes preguntas sobre esta política, contáctanos en <a href="/contacto" style={{ color: "var(--gold)" }}>nuestra página de contacto</a>.</p>
      </Section>

      <div style={{ marginTop: 40, padding: 20, background: "var(--dark2)", borderRadius: 10, border: "0.5px solid var(--gold-dark)" }}>
        <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>
          🙏 Gracias por confiar en nosotros. Trabajamos cada día para ofrecerte información honesta y útil.
        </p>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>{title}</h2>
      <div style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7 }}>{children}</div>
    </section>
  );
}