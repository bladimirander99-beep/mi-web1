export type Riesgo = "BAJO" | "MEDIO" | "ALTO";

export interface Forma {
  emoji: string;
  name: string;
  riesgo: Riesgo;
  empezar: string;
  ganas: string;
  video?: string; // ← tu link propio (Terabox/YouTube) cuando lo tengas
}

export const GUIAS: Record<string, Forma[]> = {
  Binance: [
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
  ],
  Bybit: [
    { emoji: "🏦", name: "Bybit Earn", riesgo: "BAJO", empezar: "Earn → Ahorro → deposita USDT flexible o bloqueado.", ganas: "Interés diario 2%-10%; promos de bloqueado hasta 15%." },
    { emoji: "🔗", name: "Referidos y Afiliado", riesgo: "BAJO", empezar: "Perfil → Referencia → copia tu link o hazte afiliado.", ganas: "Comisión de las comisiones de tus invitados (hasta 50% como afiliado)." },
    { emoji: "🌾", name: "Launchpad", riesgo: "BAJO", empezar: "Earn → Launchpad → stakea USDT o BIT en el proyecto activo.", ganas: "Tokens nuevos a precio de lanzamiento; vendes en el listing." },
    { emoji: "⛏️", name: "Staking on-chain", riesgo: "BAJO", empezar: "Earn → staking de ETH, SOL o DOT → suscribir.", ganas: "Recompensas de red de 3%-8% anual sin operar." },
    { emoji: "🎁", name: "Eventos y Airdrops", riesgo: "BAJO", empezar: "Rewards Hub → misiones de depósito, trading o quiz.", ganas: "Cupones, fee discounts y airdrops de $5-$300 por campaña." },
    { emoji: "🐑", name: "Copy Trading", riesgo: "MEDIO", empezar: "Copy Trading → filtra master traders por ROI 90d y drawdown.", ganas: "Tu capital replica sus operaciones; solo pagan comisión si ganas." },
    { emoji: "🤖", name: "Bots Grid", riesgo: "MEDIO", empezar: "Trading Bots → grid spot o futuros → parámetros IA.", ganas: "Decenas de compras/ventas diarias en el rango: 3%-15% mensual." },
    { emoji: "🤝", name: "P2P Comerciante", riesgo: "MEDIO", empezar: "P2P → verifícate como comerciante → publica anuncios.", ganas: "Spread de 0.5%-2% por operación con comisiones cero." },
    { emoji: "💧", name: "Dual Asset", riesgo: "MEDIO", empezar: "Earn → Dual Asset → precio objetivo y fecha.", ganas: "APR alto toque o no toque el precio que elegiste." },
    { emoji: "⚡", name: "Futuros perpetuos", riesgo: "ALTO", empezar: "Derivados → perpetuos USDT → x5-x25 con stop-loss.", ganas: "Long o short apalancado; 3 meses de demo antes y máximo 5% del capital." },
    { emoji: "🎰", name: "Pre-Market y tokens nuevos", riesgo: "ALTO", empezar: "Sección Pre-Market → opera tokens antes de su listing.", ganas: "Compras barato antes del listado… volatilidad extrema: solo dinero de riesgo." },
  ],
};