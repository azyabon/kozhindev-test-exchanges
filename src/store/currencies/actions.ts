import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAxios } from "../../libs/axios/axios";
import { IResponse } from "./types";
import { API_DOMAIN, API_METHODS } from "../../config/api";
import { currenciesActions } from "./reducer";

const _axios = getAxios();

export const getCurrencies = createAsyncThunk(
  "currencies/getCurrencies",
  async (_, { dispatch }) => {
    try {
      const response = await _axios.get<IResponse>(
        API_DOMAIN + API_METHODS.GET_VALUTE
      );

      dispatch(currenciesActions.setCurrencies(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);
