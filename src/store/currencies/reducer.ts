import { IInitialState, IResponse } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { convertObject } from "../../utils/convert-object/convert-object";

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
      state.currencies = convertObject(action.payload);
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
