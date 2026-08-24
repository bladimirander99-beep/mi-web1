import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Ander | Dinero Abundante",
  description: "Conoce a Ander, fundador de Dinero Abundante: su historia, misión y visión.",
};

export default function SobreMiPage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "4rem 2rem" }}>
      <h1 style={{ fontSize: 30, fontWeight: 700, color: "var(--gold)", marginBottom: 24 }}>Sobre Ander 💛</h1>

      <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap", marginBottom: 30 }}>
        <div style={{ flexShrink: 0 }}>
          <div style={{
            width: 140, height: 140, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--gold), var(--gold-dark))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 60, color: "var(--dark)", fontWeight: 800,
            boxShadow: "0 10px 30px rgba(247,196,73,0.3)",
          }}>
            A
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, color: "var(--text)", margin: "0 0 6px" }}>Anderson Bladimir</h2>
          <p style={{ fontSize: 14, color: "var(--gold)", margin: "0 0 14px", fontWeight: 600 }}>Fundador · Educador financiero · Creador de contenido</p>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)", margin: 0 }}>
            Desde los 7 años viví la escasez de cerca. Años después me estafaron varias veces cuando buscaba ganar dinero online. Ese dolor se convirtió en mi misión: enseñar con la verdad lo que a mí me hubiera gustado saber.
          </p>
        </div>
      </div>

      <Section title="🎯 Mi misión">
        <p>Que cualquier persona, sin experiencia y desde un celular antiguo, genere sus primeros ingresos en línea con guías paso a paso probadas en la vida real — y que nadie vuelva a caer en las estafas que yo sufrí.</p>
      </Section>

      <Section title="🔭 Mi visión">
        <p>Un mundo donde ninguna persona sufra de hambre ni de escasez: millones viviendo una vida extraordinaria y feliz gracias a la libertad financiera con métodos reales, plataformas verificadas y cero promesas falsas.</p>
      </Section>

      <Section title="🛠️ Lo que hago cada día">
        <ul>
          <li>Pruebo plataformas con mi propio tiempo y dinero antes de recomendarlas.</li>
          <li>Creo tutoriales honestos, sin humo, en video y texto.</li>
          <li>Verifico que cada link de referido realmente pague comisiones.</li>
          <li>Respondo personalmente los mensajes que me llegan.</li>
        </ul>
      </Section>

      <Section title="💬 Mis valores">
        <ul>
          <li><strong style={{ color: "var(--gold)" }}>Verdad antes que ventas.</strong> Prefiero decir "no sirve" que recomendar algo por comisión.</li>
          <li><strong style={{ color: "var(--gold)" }}>Fe y acción.</strong> Dios está conmigo en todo momento, y la constancia vence al talento.</li>
          <li><strong style={{ color: "var(--gold)" }}>Abundancia para todos.</strong> El éxito no es mío, es nuestro.</li>
        </ul>
      </Section>

      <div style={{ marginTop: 30, padding: 20, background: "var(--dark2)", borderRadius: 10, border: "0.5px solid var(--gold-dark)", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 15, color: "var(--gold)", fontWeight: 600 }}>
          🙏 DIOS ESTÁ CONTIGO EN TODO MOMENTO
        </p>
        <p style={{ margin: "8px 0 0", fontSize: 13, color: "var(--text-muted)" }}>
          Gracias por ser parte de esta comunidad. 💛
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