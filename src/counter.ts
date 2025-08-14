import type { Moedas } from "./types";
import { rates } from "./data/rates";

export default function converter(
  amount: number,
  from: Moedas,
  to: Moedas
): number {
  const converterRate = rates[from][to];

  const converterDinheiro = amount * converterRate;
  return +converterDinheiro.toFixed(2);
}
