import classes from "./Converter.module.scss";
import { Input, Select } from "../../ui";
import { Convert } from "../../icons";
import { ChangeEvent, useEffect, useState } from "react";
import { getFromLocalStorage, writeToLocalStorage } from "../../../libs";
import { useTypedSelector } from "../../../hooks/useTypesSelector";
import { convert, replaceSeparator } from "../../../utils";
import { CODES } from "../../../config";

const reg = /^([0-9]+)([.,]?)([0-9]*)$/;

export const Converter = () => {
  const [selectedTop, setSelectedTop] = useState(CODES.USD);
  const [selectedBottom, setSelectedBottom] = useState(CODES.EUR);
  const [inputTop, setInputTop] = useState("");
  const [inputBottom, setInputBottom] = useState("");
  const { currencies } = useTypedSelector((state) => state.currencies);

  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === "selectTop") {
      setSelectedTop(e.target.value);
      writeToLocalStorage("selectedCurrencies", {
        first: e.target.value,
        second: selectedBottom,
      });
    } else {
      setSelectedBottom(e.target.value);
      writeToLocalStorage("selectedCurrencies", {
        first: selectedTop,
        second: e.target.value,
      });
    }
    convert(
      currencies,
      replaceSeparator(inputTop, true),
      e.target.value,
      selectedBottom,
      setInputBottom
    );
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (reg.test(e.target.value) || e.target.value === "") {
      if (e.target.name === "inputTop") {
        setInputTop(replaceSeparator(e.target.value, false));
        convert(
          currencies,
          replaceSeparator(e.target.value, true),
          selectedTop,
          selectedBottom,
          setInputBottom
        );
      } else {
        setInputBottom(replaceSeparator(e.target.value, false));
        convert(
          currencies,
          replaceSeparator(e.target.value, true),
          selectedBottom,
          selectedTop,
          setInputTop
        );
      }
    }
  };

  useEffect(() => {
    const data = { ...getFromLocalStorage("selectedCurrencies") };
    if (!data.first && !data.second) {
      writeToLocalStorage("selectedCurrencies", {
        first: CODES.USD,
        second: CODES.EUR,
      });
    } else {
      setSelectedTop(data.first);
      setSelectedBottom(data.second);
    }
  }, []);

  return (
    <section className={classes.converter}>
      <div className={classes.converter_block}>
        <Select
          options={currencies}
          name="selectTop"
          onChange={selectHandler}
          value={selectedTop}
        />
        <Input
          name={"inputTop"}
          value={inputTop}
          onChange={inputHandler}
          placeholder="0.00"
        />
      </div>
      <Convert />
      <div className={classes.converter_block}>
        <Select
          options={currencies}
          name="selectBottom"
          onChange={selectHandler}
          value={selectedBottom}
        />
        <Input
          name={"inputBottom"}
          value={inputBottom}
          onChange={inputHandler}
          placeholder="0.00"
        />
      </div>
    </section>
  );
};
