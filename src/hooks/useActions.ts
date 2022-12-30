import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { currenciesActions, getCurrencies } from "../store/currencies";

const allActions = {
  ...currenciesActions,
  getCurrencies,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
