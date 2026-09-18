import { GUIAS_EXCHANGE, type Forma, type Riesgo } from "./formasExchange";
import { GUIAS_WALLETS } from "./formasWallets";
import { GUIAS_TRADING } from "./formasTrading";

export type { Forma, Riesgo };

export const GUIAS: Record<string, Forma[]> = {
  ...GUIAS_EXCHANGE,
  ...GUIAS_WALLETS,
  ...GUIAS_TRADING,
};