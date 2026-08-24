import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Dinero Abundante",
  description: "Contacta con el equipo de Dinero Abundante. Responderemos lo antes posible.",
};

export default function ContactoPage() {
  return (
    <main style={{ maxWidth: 700, margin: "0 auto", padding: "4rem 2rem" }}>
      <h1 style={{ fontSize: 30, fontWeight: 700, color: "var(--gold)", marginBottom: 12 }}>📬 Contacto</h1>
      <p style={{ color: "var(--text-muted)", fontSize: 15, marginBottom: 30, lineHeight: 1.7 }}>
        ¿Tienes una duda, sugerencia o quieres colaborar? Escríbenos y te responderemos lo antes posible. 💛
      </p>

      <div style={{ background: "var(--dark2)", border: "1px solid var(--gold-dark)", borderRadius: 12, padding: 28 }}>
        <form
          action="mailto:contacto@dineroundante.com"
          method="POST"
          encType="text/plain"
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <Field label="Tu nombre">
            <input name="nombre" required placeholder="Ej: María Pérez" style={inputStyle} />
          </Field>
          <Field label="Tu email">
            <input name="email" type="email" required placeholder="tu@email.com" style={inputStyle} />
          </Field>
          <Field label="Asunto">
            <input name="asunto" required placeholder="¿Sobre qué nos quieres escribir?" style={inputStyle} />
          </Field>
          <Field label="Mensaje">
            <textarea name="mensaje" required rows={5} placeholder="Escribe tu mensaje aquí..." style={{ ...inputStyle, resize: "vertical" }} />
          </Field>
          <button
            type="submit"
            style={{
              marginTop: 8,
              padding: "12px 24px",
              background: "var(--gold)",
              color: "var(--dark)",
              border: "none",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            ✉️ Enviar mensaje
          </button>
        </form>
      </div>

      <div style={{ marginTop: 30, display: "grid", gap: 14 }}>
        <ContactCard icon="⏱️" title="Tiempo de respuesta" desc="Respondemos en 24-48 horas hábiles." />
        <ContactCard icon="🛡️" title="Privacidad garantizada" desc="Tus datos no serán compartidos con terceros." />
        <ContactCard icon="🤝" title="Colaboraciones" desc="Si eres creador, marca o plataforma, hablemos." />
      </div>

      <p style={{ marginTop: 30, fontSize: 12, color: "var(--text-muted)", textAlign: "center" }}>
        🙏 También puedes contactarnos a través de nuestras redes sociales.
      </p>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  background: "var(--dark)",
  border: "0.5px solid var(--dark4)",
  borderRadius: 8,
  color: "var(--text)",
  fontSize: 14,
  fontFamily: "inherit",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 6 }}>{label}</label>
      {children}
    </div>
  );
}

function ContactCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div style={{ background: "var(--dark2)", border: "0.5px solid var(--dark4)", borderRadius: 10, padding: "14px 16px", display: "flex", gap: 12, alignItems: "center" }}>
      <span style={{ fontSize: 22 }}>{icon}</span>
      <div>
        <strong style={{ display: "block", fontSize: 13, color: "var(--gold)", marginBottom: 2 }}>{title}</strong>
        <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{desc}</span>
      </div>
    </div>
  );
}