import classes from "./Select.module.scss";
import { ChangeEvent } from "react";
import { ICurrencies } from "../../../store/currencies";

type Props = {
  name: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  options: ICurrencies[];
};

export const Select = ({ name, onChange, value, options }: Props) => {
  return (
    <select
      name={name}
      className={classes.select}
      onChange={onChange}
      value={value}
    >
      {options.map((option) => (
        <option
          key={option.ID}
          className={classes.option}
          value={option.CharCode}
        >
          {option.CharCode} ({option.Name})
        </option>
      ))}
    </select>
  );
};
