import { ICurrencies, IResponse } from "../../store/currencies";

export const convertObject = (obj: IResponse) => {
  let data: ICurrencies[] = [];

  for (let key in obj.Valute) {
    data.push({
      ...obj.Valute[key],
      eurValue: (
        obj.Valute[key].Value /
        // @ts-ignore
        obj.Valute["EUR"].Value
      ).toFixed(2),
      usdValue: (
        obj.Valute[key].Value /
        // @ts-ignore
        obj.Valute["USD"].Value
      ).toFixed(2),
      rubValue: obj.Valute[key].Value.toFixed(2),
      cnyValue: (
        obj.Valute[key].Value /
        // @ts-ignore
        obj.Valute["CNY"].Value
      ).toFixed(2),
    });
  }

  return data;
};
