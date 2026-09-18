import { GUIAS_EXCHANGE, type Forma, type Riesgo } from "./formasExchange";
import { GUIAS_WALLETS } from "./formasWallets";
import { GUIAS_TRADING } from "./formasTrading";
import { GUIAS_APPS } from "./formasApps";
import { GUIAS_IA } from "./formasIA";
import { GUIAS_VIDEO } from "./formasVideo";

export type { Forma, Riesgo };

// Orden automático: 🟢 BAJO → 🟡 MEDIO → 🔴 ALTO en todas las guías
const ORDEN_RIESGO: Record<Riesgo, number> = { BAJO: 0, MEDIO: 1, ALTO: 2 };

const TODAS: Record<string, Forma[]> = {
  ...GUIAS_EXCHANGE,
  ...GUIAS_WALLETS,
  ...GUIAS_TRADING,
  ...GUIAS_APPS,
  ...GUIAS_IA,
  ...GUIAS_VIDEO,
};

export const GUIAS: Record<string, Forma[]> = Object.fromEntries(
  Object.entries(TODAS).map(([plataforma, formas]) => [
    plataforma,
    [...formas].sort((a, b) => ORDEN_RIESGO[a.riesgo] - ORDEN_RIESGO[b.riesgo]),
  ])
);