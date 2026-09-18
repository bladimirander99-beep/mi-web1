import { GUIAS_EXCHANGE, type Forma, type Riesgo } from "./formasExchange";
import { GUIAS_WALLETS } from "./formasWallets";

export type { Forma, Riesgo };

export const GUIAS: Record<string, Forma[]> = {
  ...GUIAS_EXCHANGE,
  ...GUIAS_WALLETS,
};