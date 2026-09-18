"use client";
import { trackEvent } from "@/lib/tracking";

type Riesgo = "BAJO" | "MEDIO" | "ALTO";

interface Forma {
  emoji: string;
  name: string;
  riesgo: Riesgo;
  empezar: string;
  ganas: string;
  video?: string; // ← pega aquí tu link propio (Terabox/YouTube) cuando lo tengas
}

const RIESGO: Record<Riesgo, { chip: string; label: string }> = {
  BAJO: { chip: "rgba(34,197,94,0.12)", label: "🟢 Riesgo bajo" },
  MEDIO: { chip: "rgba(247,196,73,0.12)", label: "🟡 Riesgo medio" },
  ALTO: { chip: "rgba(239,68,68,0.12)", label: "🔴 Riesgo alto" },
};

const FORMAS: Forma[] = [
  { emoji: "📚", name: "Learn & Earn", riesgo: "BAJO", empezar: "Learn → campaña activa → mira los videos y aprueba el quiz.", ganas: "Binance deposita tokens gratis ($5-$50) en tu wallet al aprobar." },
  { emoji: "🔗", name: "Referidos", riesgo: "BAJO", empezar: "Perfil → Referencia → copia tu link y compártelo en tus redes.", ganas: "Hasta 40% de las comisiones de tus invitados, de por vida." },
  { emoji: "🏦", name: "Earn Flexible", riesgo: "BAJO", empezar: "Earn → Simple Earn → suscribe USDT en 30 segundos.", ganas: "Interés diario de 2%-10% anual; retiras cuando quieras." },
  { emoji: "🔒", name: "Earn Bloqueado", riesgo: "BAJO", empezar: "Earn → Bloqueado → elige plazo de 30 a 120 días.", ganas: "Tasas de 5%-15% anual por no retirar durante el plazo." },
  { emoji: "🪂", name: "HODLer Airdrops", riesgo: "BAJO", empezar: "Solo mantén BNB en tu wallet Spot. No haces nada más.", ganas: "Tokens nuevos gratis por snapshots horarios: $10-$500 al listar." },
  { emoji: "🌾", name: "Launchpool", riesgo: "BAJO", empezar: "Earn → Launchpool → stakea BNB o FDUSD.", ganas: "Tokens nuevos cada hora durante 3-7 días; tu capital intacto." },
  { emoji: "⛏️", name: "Staking ETH / SOL", riesgo: "BAJO", empezar: "Earn → ETH o SOL staking → suscribir.", ganas: "2%-7% anual pagado en la misma moneda, con interés compuesto." },
  { emoji: "💳", name: "Binance Pay", riesgo: "BAJO", empezar: "Activa Binance Pay y paga en comercios afiliados.", ganas: "Cashback de 1%-5% por pago y sobres sorpresa con cripto." },
  { emoji: "🤝", name: "P2P Comerciante", riesgo: "MEDIO", empezar: "P2P → ser comerciante → publica tus anuncios de compra/venta.", ganas: "Spread de 0.5%-2% por operación: ~$10/día con $1,000 de volumen." },
  { emoji: "🐑", name: "Copy Trading", riesgo: "MEDIO", empezar: "Copy Trading → elige trader con +6 meses y drawdown <20%.", ganas: "Replicas sus ganancias en proporción a tu capital, automático." },
  { emoji: "🤖", name: "Bots Grid", riesgo: "MEDIO", empezar: "Trading Bots → Spot Grid → parámetros IA → crear.", ganas: "Compra barato y vende caro 24/7: 3%-15% mensual en mercado lateral." },
  { emoji: "⚖️", name: "Dual Investment", riesgo: "MEDIO", empezar: "Earn → Dual Investment → precio objetivo y fecha.", ganas: "APR 10%-60% en ambos escenarios: te quedas la moneda o te convierten mejor." },
  { emoji: "💧", name: "Liquidity Farming", riesgo: "MEDIO", empezar: "Earn → Liquidity Farming → pool USDT/USDC.", ganas: "Comisiones del pool: APR 5%-30%, menor riesgo en pools estables." },
  { emoji: "📈", name: "Trading Spot", riesgo: "ALTO", empezar: "Deposita USDT → compra con DCA semanal sin importar el precio.", ganas: "Compras barato y vendes caro; histórico BTC 50%+ anual en ciclos de 4 años." },
  { emoji: "⚡", name: "Futuros x5-x20", riesgo: "ALTO", empezar: "Cuenta Futuros → quiz → margen → stop-loss SIEMPRE.", ganas: "1% a favor con x10 = +10%; 1% en contra = -10%. Máximo 5% de tu capital." },
  { emoji: "🎰", name: "Tokens nuevos", riesgo: "ALTO", empezar: "Nuevos listados → investiga el proyecto → monto pequeño.", ganas: "x5-x10 en días… o -90%. Solo dinero que puedas perder completo." },
];

const videoDefault = (name: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent("cómo usar " + name + " en Binance paso a paso")}`;

export function FormasBinance() {
  return (
    <section aria-labelledby="formas-binance-title" style={{ padding: "1.5rem 0 0.5rem" }}>
      <span style={{ fontSize: 11, letterSpacing: 2, color: "var(--gold)", display: "block", marginBottom: "0.4rem" }}>
        GUÍA COMPLETA
      </span>
      <h3 id="formas-binance-title" style={{ fontSize: 20, fontWeight: 700, marginBottom: "0.4rem" }}>
        Formas de ganar con Binance — de menor a mayor riesgo
      </h3>
      <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: "1.25rem" }}>
        Elige tu forma, sigue los pasos y mira el video explicativo de cada una.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 12 }}>
        {FORMAS.map((f) => (
          <div key={f.name} style={{ background: "var(--dark2)", border: "0.5px solid var(--dark4)", borderRadius: 10, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>
                {f.emoji} {f.name}
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: "var(--text-muted)", background: RIESGO[f.riesgo].chip, borderRadius: 999, padding: "4px 10px", whiteSpace: "nowrap" }}>
                {RIESGO[f.riesgo].label}
              </span>
            </div>
            <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55 }}>
              🚀 <strong style={{ color: "var(--text)" }}>Empieza:</strong> {f.empezar}
            </p>
            <p style={{ margin: 0, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55 }}>
              💰 <strong style={{ color: "var(--green)" }}>Ganas:</strong> {f.ganas}
            </p>
            <a
              href={f.video ?? videoDefault(f.name)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("video_forma_binance", { event_category: "binance", event_label: f.name })}
              style={{ textAlign: "center", fontSize: 12, fontWeight: 600, color: "var(--gold)", background: "rgba(247,196,73,0.08)", border: "0.5px solid var(--gold-dark)", borderRadius: 8, padding: "9px 12px", textDecoration: "none", marginTop: "auto" }}
            >
              🎬 Video explicativo
            </a>
          </div>
        ))}
      </div>

      <p style={{ marginTop: "1.25rem", textAlign: "center", fontSize: 13, fontWeight: 700, color: "var(--gold)" }}>
        🥇 Regla de oro: 80% en 🟢 · 15% en 🟡 · 5% en 🔴 — así nunca quiebras y siempre creces.
      </p>
    </section>
  );
}

export default FormasBinance;