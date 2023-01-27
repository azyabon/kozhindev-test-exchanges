import { ICurrencies, IResponse } from "../../store/currencies";
import { CODES, ROUNDING } from "../../config";

export const convertObject = (obj: IResponse) => {
  let data: ICurrencies[] = [];

  for (let key in obj.Valute) {
    data.push({
      ...obj.Valute[key],
      eurValue: (obj.Valute[key].Value / obj.Valute[CODES.EUR].Value).toFixed(
        ROUNDING
      ),
      usdValue: (obj.Valute[key].Value / obj.Valute[CODES.USD].Value).toFixed(
        ROUNDING
      ),
      rubValue: obj.Valute[key].Value.toFixed(2),
      cnyValue: (obj.Valute[key].Value / obj.Valute[CODES.CNY].Value).toFixed(
        ROUNDING
      ),
    });
  }

  return data;
};
