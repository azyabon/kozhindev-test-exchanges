import { ICurrencies } from "../../store/currencies";

export const convert = (
  currencies: ICurrencies[],
  value: string,
  from: string,
  to: string,
  convertTarget: (value: ((prevState: string) => string) | string) => void
) => {
  if (!value) {
    convertTarget("");
    return;
  }

  let fromValue = 1;
  let toValue = 1;
  for (let i = 0; i < currencies.length; i++) {
    if (currencies[i].CharCode === from.substring(0, 3)) {
      fromValue = +currencies[i].rubValue;
    }

    if (currencies[i].CharCode === to.substring(0, 3)) {
      toValue = +currencies[i].rubValue;
    }
  }
  convertTarget(((fromValue / toValue) * +value).toFixed(2).replace(".", ","));
};
