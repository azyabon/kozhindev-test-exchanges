import React, { useEffect } from "react";
import { Converter, CurrencyTable } from "../../containers";
import { useActions } from "../../../hooks/useActions";

const Main = () => {
  const { getCurrencies } = useActions();

  useEffect(() => {
    getCurrencies();
  });

  return (
    <>
      <Converter />
      <CurrencyTable />
    </>
  );
};

export default Main;
