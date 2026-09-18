export type Riesgo = "BAJO" | "MEDIO" | "ALTO";

export interface Forma {
  emoji: string;
  name: string;
  riesgo: Riesgo;
  empezar: string;
  ganas: string;
  detalle?: string; // explicación profunda de cómo funciona
  video?: string; // ← tu link propio (Terabox/YouTube) cuando lo tengas
}

export const GUIAS: Record<string, Forma[]> = {
  Binance: [
    {
      emoji: "📚", name: "Learn & Earn", riesgo: "BAJO",
      empezar: "Learn → campaña activa → mira los videos y aprueba el quiz.",
      ganas: "Binance deposita tokens gratis ($5-$50) en tu wallet al aprobar.",
      detalle: "Binance lanza campañas cada pocas semanas: miras 3-5 videos cortos de su Academia, presentas un quiz de 3-4 preguntas y, si apruebas, recibes tokens gratis en tu wallet Spot al instante. El truco es entrar el mismo día que sale la campaña: los cupos se agotan en horas. Hay usuarios que suman $200+ al año solo con esto, sin arriesgar un centavo.",
    },
    {
      emoji: "🔗", name: "Referidos", riesgo: "BAJO",
      empezar: "Perfil → Referencia → copia tu link y compártelo en tus redes.",
      ganas: "Hasta 40% de las comisiones de tus invitados, de por vida.",
      detalle: "Cada persona que se registra con tu link queda ligada a tu cuenta para siempre: cada vez que ella paga comisiones (spot, futuros, convert), Binance te devuelve hasta el 40%. No necesitas que depositen ni que ganen: solo que operen. Con 10 invitados activos puedes generar $100-$3,000/mes sin volver a tocar nada. Es el ingreso más pasivo que existe en cripto.",
    },
    {
      emoji: "🏦", name: "Earn Flexible", riesgo: "BAJO",
      empezar: "Earn → Simple Earn → suscribe USDT en 30 segundos.",
      ganas: "Interés diario de 2%-10% anual; retiras cuando quieras.",
      detalle: "Es la cuenta de ahorros de Binance: depositas USDT u otra moneda y Binance la presta al mercado; el interés (2%-10% anual, promos hasta 20% en tus primeros $500) se acredita solo cada día a las 00:00 UTC. Puedes retirar o agregar fondos cuando quieras, sin penalización. Ejemplo real: $1,000 al 7% = ~$70/año sin mover un dedo.",
    },
    {
      emoji: "🔒", name: "Earn Bloqueado", riesgo: "BAJO",
      empezar: "Earn → Bloqueado → elige plazo de 30 a 120 días.",
      ganas: "Tasas de 5%-15% anual por no retirar durante el plazo.",
      detalle: "Igual que Flexible, pero aceptas no tocar el dinero por 30, 60, 90 o 120 días; a cambio la tasa sube (5%-15% anual). El interés se acumula a diario y al vencer recibes capital + ganancias automáticamente. Ideal para BTC o ETH que de todos modos pensabas guardar a largo plazo: tu dinero trabaja doble (subida del activo + interés).",
    },
    {
      emoji: "🪂", name: "HODLer Airdrops", riesgo: "BAJO",
      empezar: "Solo mantén BNB en tu wallet Spot. No haces nada más.",
      ganas: "Tokens nuevos gratis por snapshots horarios: $10-$500 al listar.",
      detalle: "Binance toma 'fotos' horarias de tu BNB en Spot o Simple Earn y, con ese promedio, te asigna tokens de proyectos nuevos antes de listarlos. No haces nada: solo mantener. Cada airdrop ha repartido entre $10 y $500 por usuario según tu cantidad de BNB. El día del listado decides: vendes y aseguras ganancia, o holdeas si crees en el proyecto.",
    },
    {
      emoji: "🌾", name: "Launchpool", riesgo: "BAJO",
      empezar: "Earn → Launchpool → stakea BNB o FDUSD.",
      ganas: "Tokens nuevos cada hora durante 3-7 días; tu capital intacto.",
      detalle: "Cuando Binance va a listar un proyecto, abre una piscina: stakeas BNB o FDUSD y recibes el token nuevo cada hora durante 3-7 días. Al terminar, te devuelven el 100% de lo stakeado más todo lo cosechado. Históricamente cada proyecto ha dejado entre $20 y $1,000 según tu monto. Si stakeas FDUSD (dólar digital), tu riesgo de precio es casi nulo.",
    },
    {
      emoji: "⛏️", name: "Staking ETH / SOL", riesgo: "BAJO",
      empezar: "Earn → ETH o SOL staking → suscribir.",
      ganas: "2%-7% anual pagado en la misma moneda, con interés compuesto.",
      detalle: "Tu ETH o SOL participa en validar la blockchain y la red te paga recompensas de 2%-7% anual en la misma moneda. En Binance es con un clic (WBETH para ETH): no arriesgas el capital en trading, solo el vaivén normal del precio. Si reinviertes las recompensas cada mes, activas interés compuesto: tu interés empieza a generar interés.",
    },
    {
      emoji: "💳", name: "Binance Pay", riesgo: "BAJO",
      empezar: "Activa Binance Pay y paga en comercios afiliados.",
      ganas: "Cashback de 1%-5% por pago y sobres sorpresa con cripto.",
      detalle: "Actívalo en la app y paga en tiendas online, recarga celular o envía dinero a contactos sin comisiones. Binance lanza campañas de cashback de 1%-5% y 'Red Packets' (sobres con cripto aleatoria) por pagar. Es la forma más simple de recuperar dinero de gastos que ya ibas a hacer: tu café de $3 te devuelve cripto.",
    },
    {
      emoji: "🤝", name: "P2P Comerciante", riesgo: "MEDIO",
      empezar: "P2P → ser comerciante → publica tus anuncios de compra/venta.",
      ganas: "Spread de 0.5%-2% por operación: ~$10/día con $1,000 de volumen.",
      detalle: "Te verificas como comerciante, dejas un depósito de garantía y publicas anuncios con tu propio precio. Compras USDT a un precio y lo vendes 0.5%-2% más caro: ese spread es tu ganancia, repetible decenas de veces al día. Con $1,000 de volumen diario al 1% son ~$10/día. Regla de oro: opera solo con métodos de pago verificados para evitar contracargos.",
    },
    {
      emoji: "🐑", name: "Copy Trading", riesgo: "MEDIO",
      empezar: "Copy Trading → elige trader con +6 meses y drawdown <20%.",
      ganas: "Replicas sus ganancias en proporción a tu capital, automático.",
      detalle: "Entras a Copy Trading, filtras líderes por ROI de 90 días, drawdown menor a 20% y más de 6 meses de historial, y asignas cuánto copiar. Desde ahí, cada operación del líder se replica en tu cuenta en proporción a tu capital. El líder solo cobra 10-20% de tu ganancia SI ganas; si pierdes, no cobra nada. Truco pro: copia 2-3 traders distintos para diversificar.",
    },
    {
      emoji: "🤖", name: "Bots Grid", riesgo: "MEDIO",
      empezar: "Trading Bots → Spot Grid → parámetros IA → crear.",
      ganas: "Compra barato y vende caro 24/7: 3%-15% mensual en mercado lateral.",
      detalle: "Creas un robot que coloca una escalera de órdenes: compras escalonadas por debajo del precio actual y ventas escalonadas por encima. Cada vez que el mercado oscila (y oscila todo el día), el bot cierra micro-ganancias decenas de veces mientras duermes. Usa los parámetros que sugiere la IA de Binance al crearlo. Si el precio sale del rango, el bot se pausa sin perder de más.",
    },
    {
      emoji: "⚖️", name: "Dual Investment", riesgo: "MEDIO",
      empezar: "Earn → Dual Investment → precio objetivo y fecha.",
      ganas: "APR 10%-60% en ambos escenarios: te quedas la moneda o te convierten mejor.",
      detalle: "Eliges un precio objetivo y una fecha: por ejemplo 'vender mi BTC a $X el viernes'. Mientras esperas, tu dinero genera APR altísimo (10%-60% anualizado). Al vencimiento, si el precio NO llegó a tu objetivo te quedas tu moneda + intereses; si SÍ llegó, se convierte a ese precio mejor que el mercado + intereses. Ganas en los dos escenarios; el único costo es perderte una subida explosiva.",
    },
    {
      emoji: "💧", name: "Liquidity Farming", riesgo: "MEDIO",
      empezar: "Earn → Liquidity Farming → pool USDT/USDC.",
      ganas: "Comisiones del pool: APR 5%-30%, menor riesgo en pools estables.",
      detalle: "Aportas un par de monedas (ej. USDT+USDC) a un pool que Binance usa para facilitar intercambios. A cambio recibes parte de las comisiones que paga el mercado: APR de 5%-30%, a veces más tokens extra. El riesgo se llama 'pérdida impermanente': si una moneda sube mucho más que la otra, tu par se desbalancea. Por eso los pools estables-estables son los recomendados para empezar.",
    },
    {
      emoji: "📈", name: "Trading Spot", riesgo: "ALTO",
      empezar: "Deposita USDT → compra con DCA semanal sin importar el precio.",
      ganas: "Compras barato y vendes caro; histórico BTC 50%+ anual en ciclos de 4 años.",
      detalle: "Compras la cripto real (sin apalancamiento) y la vendes más cara. La estrategia que mejor funciona a principiantes es DCA: comprar un monto fijo cada semana sin importar el precio, para promediar tu entrada y eliminar el error de timing. Históricamente BTC ha dado 50%+ anual en ciclos de 4 años, pero con caídas del 50% en el camino: horizonte de años, no de días.",
    },
    {
      emoji: "⚡", name: "Futuros x5-x20", riesgo: "ALTO",
      empezar: "Cuenta Futuros → quiz → margen → stop-loss SIEMPRE.",
      ganas: "1% a favor con x10 = +10%; 1% en contra = -10%. Máximo 5% de tu capital.",
      detalle: "Apostar a si el precio sube (Long) o baja (Short) con apalancamiento: con x10, un 1% a tu favor multiplica tu margen +10%, pero un 1% en contra te resta -10%, y si el precio toca tu liquidación pierdes el 100% del margen. Reglas de supervivencia: 3 meses en modo demo primero, stop-loss en CADA operación y máximo 5% de tu capital por posición. Aquí quiebra el 90%: entra solo cuando domines el spot.",
    },
    {
      emoji: "🎰", name: "Tokens nuevos", riesgo: "ALTO",
      empezar: "Nuevos listados → investiga el proyecto → monto pequeño.",
      ganas: "x5-x10 en días… o -90%. Solo dinero que puedas perder completo.",
      detalle: "Binance lista tokens nuevos casi a diario y algunos hacen x5-x10 en sus primeras semanas (especialmente los que vienen de Launchpool o airdrops). Pero la mayoría corrige -50% o más cuando pasa el hype. Estrategia: entra con montos pequeños (1-2% del capital), vende ganancias por partes durante la subida y nunca conviertas una apuesta en 'inversión a largo plazo' por enamoramiento.",
    },
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