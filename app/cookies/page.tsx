import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | Dinero Abundante",
  description: "Cómo utilizamos las cookies en Dinero Abundante.",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 2rem" }}>
      <h1 style={{ fontSize: 30, fontWeight: 700, color: "var(--gold)", marginBottom: 12 }}>Política de Cookies</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 13, marginBottom: 30 }}>Última actualización: agosto de 2026</p>

      <Section title="1. ¿Qué son las cookies?">
        <p>Las cookies son pequeños archivos de texto que se guardan en tu dispositivo cuando visitas un sitio web. Nos ayudan a mejorar tu experiencia y entender cómo usas nuestro contenido.</p>
      </Section>

      <Section title="2. Cookies que utilizamos">
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginTop: 10 }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--dark4)" }}>
              <th style={{ padding: "8px", textAlign: "left", color: "var(--gold)" }}>Tipo</th>
              <th style={{ padding: "8px", textAlign: "left", color: "var(--gold)" }}>Propósito</th>
              <th style={{ padding: "8px", textAlign: "left", color: "var(--gold)" }}>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid var(--dark4)" }}>
              <td style={{ padding: "8px", color: "var(--text)" }}>Técnicas</td>
              <td style={{ padding: "8px", color: "var(--text-muted)" }}>Recordar tus preferencias de cookies</td>
              <td style={{ padding: "8px", color: "var(--text-muted)" }}>1 año</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--dark4)" }}>
              <td style={{ padding: "8px", color: "var(--text)" }}>Analíticas (GA4)</td>
              <td style={{ padding: "8px", color: "var(--text-muted)" }}>Contar visitas y mejorar el sitio</td>
              <td style={{ padding: "8px", color: "var(--text-muted)" }}>2 años</td>
            </tr>
            <tr style={{ borderBottom: "1px solid var(--dark4)" }}>
              <td style={{ padding: "8px", color: "var(--text)" }}>Publicitarias (Adsterra)</td>
              <td style={{ padding: "8px", color: "var(--text-muted)" }}>Mostrar anuncios relevantes</td>
              <td style={{ padding: "8px", color: "var(--text-muted)" }}>Variable</td>
            </tr>
            <tr>
              <td style={{ padding: "8px", color: "var(--text)" }}>De afiliado</td>
              <td style={{ padding: "8px", color: "var(--text-muted)" }}>Atribuir registros a nuestros enlaces</td>
              <td style={{ padding: "8px", color: "var(--text-muted)" }}>30-90 días</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section title="3. Cómo gestionarlas">
        <p>Puedes aceptar o rechazar las cookies a través del banner que aparece al entrar. También puedes configurarlas desde tu navegador:</p>
        <ul>
          <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
          <li>Firefox: Opciones → Privacidad y seguridad</li>
          <li>Safari: Preferencias → Privacidad</li>
        </ul>
      </Section>

      <Section title="4. Consecuencias de desactivarlas">
        <p>Si desactivas todas las cookies, el sitio seguirá funcionando pero perderás algunas funciones, como recordar tus preferencias o ver contenido personalizado.</p>
      </Section>

      <Section title="5. Contacto">
        <p>¿Dudas sobre cookies? Escríbenos en <a href="/contacto" style={{ color: "var(--gold)" }}>nuestra página de contacto</a>.</p>
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