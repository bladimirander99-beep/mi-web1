import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Dinero Abundante",
  description: "Términos y condiciones de uso de Dinero Abundante.",
  robots: { index: false, follow: false },
};

export default function TerminosPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 2rem" }}>
      <h1 style={{ fontSize: 30, fontWeight: 700, color: "var(--gold)", marginBottom: 12 }}>Términos y Condiciones</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 30 }}>Última actualización: agosto de 2026</p>

      <Section title="1. Aceptación">
        <p>Al acceder y utilizar este sitio web, aceptas cumplir estos términos. Si no estás de acuerdo, por favor no utilices el sitio.</p>
      </Section>

      <Section title="2. Naturaleza del contenido">
        <p>El contenido de Dinero Abundante tiene fines <strong style={{ color: "var(--gold)" }}>educativos e informativos</strong>. No constituye asesoría financiera, legal ni de inversión. Todas las decisiones que tomes son de tu exclusiva responsabilidad.</p>
      </Section>

      <Section title="3. Sin garantía de resultados">
        <p>Los ingresos mencionados (como "hasta $2,000/mes") son estimados basados en la experiencia del equipo y de la comunidad. <strong>No garantizamos resultados específicos.</strong> Tus ganancias dependerán de tu dedicación, estrategia y factores del mercado.</p>
      </Section>

      <Section title="4. Enlaces de afiliado">
        <p>Algunos enlaces del sitio son de afiliado. Al registrarte o comprar a través de ellos, podemos recibir una comisión sin costo adicional para ti. Esto nos ayuda a mantener el contenido gratuito.</p>
      </Section>

      <Section title="5. Uso responsable">
        <p>Te comprometes a:</p>
        <ul>
          <li>Usar la información de manera legal y ética.</li>
          <li>No copiar ni redistribuir el contenido sin autorización.</li>
          <li>No utilizar bots, scrapers ni herramientas automatizadas en el sitio.</li>
          <li>Verificar por tu cuenta la veracidad de cada plataforma antes de invertir.</li>
        </ul>
      </Section>

      <Section title="6. Riesgos">
        <p>Operar con criptomonedas, trading, apuestas y plataformas de inversión conlleva <strong style={{ color: "var(--gold)" }}>riesgos inherentes</strong>, incluida la pérdida de capital. Nunca inviertas dinero que no puedas permitirte perder.</p>
      </Section>

      <Section title="7. Modificaciones">
        <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente tras su publicación en esta página.</p>
      </Section>

      <Section title="8. Contacto">
        <p>Para consultas sobre estos términos, visítanos en <a href="/contacto" style={{ color: "var(--gold)" }}>nuestra página de contacto</a>.</p>
      </Section>
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