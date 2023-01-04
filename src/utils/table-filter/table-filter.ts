import { ICurrencies } from "../../store/currencies";

export const tableFilterByCode = (array: ICurrencies[], value: string) => {
  return array.filter((currency: ICurrencies) =>
    currency.CharCode.includes(value.toUpperCase())
  );
};
