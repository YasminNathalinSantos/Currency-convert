import "./style.css";
import { rates } from "./data/rates";
import type { Moedas } from "./types";
import converter from "./counter";

const fromSelect = document.getElementById("from") as HTMLSelectElement;
const toSelect = document.getElementById("to") as HTMLSelectElement;

function populateSelect(select: HTMLSelectElement){
  Object.keys(rates).forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.textContent = currency;
    select.appendChild(option);
  });
}
populateSelect(fromSelect);
populateSelect(toSelect);
fromSelect.value = "USD";
toSelect.value = "BRL";


const amountInput = document.getElementById("amount") as HTMLInputElement;
const convertBtn = document.getElementById("convert") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLParagraphElement;

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const from = fromSelect.value as Moedas;
  const to = toSelect.value as Moedas;

  if (isNaN(amount) || amount <= 0) {
    result.textContent = "Por favor, insira um valor válido";
    return;
  }

  const converted = converter(amount, from, to);
  result.textContent = `${amount} ${from} = ${converted} ${to}`;
});