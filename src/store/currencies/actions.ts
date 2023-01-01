import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAxios } from "../../libs/axios/axios";
import { IResponse } from "./types";
import { API_DOMAIN, API_METHODS } from "../../config";
import { currenciesActions } from "./reducer";

const _axios = getAxios();

export const getCurrencies = createAsyncThunk(
  "currencies/getCurrencies",
  async (_, { dispatch }) => {
    try {
      dispatch(currenciesActions.toggleLoading(true));
      const response = await _axios.get<IResponse>(
        API_DOMAIN + API_METHODS.GET_VALUTE
      );

      dispatch(currenciesActions.setCurrencies(response.data));
      dispatch(currenciesActions.toggleLoading(false));
    } catch (error) {
      console.log(error);
    }
  }
);
