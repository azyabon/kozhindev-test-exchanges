import { ICurrencies, IInitialState, IResponse } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IInitialState = {
  lastUpdate: Date.now(),
  currencies: [],
  isLoading: false,
};

export const currencies = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    setCurrencies: (state, action: PayloadAction<IResponse>) => {
      const data: ICurrencies[] = [];

      //данные приходят в ужасном нейминге, пришлось перебрать и сразу конвертировать валюты под таблицу (eur, usd)
      for (let key in action.payload.Valute) {
        data.push({
          id: action.payload.Valute[key].ID,
          charCode: action.payload.Valute[key].CharCode,
          numCode: action.payload.Valute[key].NumCode,
          nominal: action.payload.Valute[key].Nominal,
          eurValue: (
            action.payload.Valute[key].Value /
            // @ts-ignore
            action.payload.Valute["EUR"].Value
          ).toFixed(2),
          usdValue: (
            action.payload.Valute[key].Value /
            // @ts-ignore
            action.payload.Valute["USD"].Value
          ).toFixed(2),
          rubValue: action.payload.Valute[key].Value.toFixed(2),
          cnyValue: (
            action.payload.Valute[key].Value /
            // @ts-ignore
            action.payload.Valute["CNY"].Value
          ).toFixed(2),
          name: action.payload.Valute[key].Name,
        });
      }

      state.currencies = data;
    },
    setLastUpdate: (state) => {
      state.lastUpdate = Date.now();
    },
    toggleLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const currenciesActions = currencies.actions;
