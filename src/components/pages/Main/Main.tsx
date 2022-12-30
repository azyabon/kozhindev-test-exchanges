import React, { useEffect } from "react";
import { Converter, Table } from "../../containers";
import { useActions } from "../../../hooks/useActions";

const Main = () => {
  const { getCurrencies } = useActions();

  useEffect(() => {
    getCurrencies();
  }, []);
  return (
    <>
      <Converter />
      <Table />
    </>
  );
};

export default Main;
