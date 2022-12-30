import React, { ChangeEvent } from "react";
import classes from "./Input.module.scss";

type Props = {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  name?: string;
};

export const Input = ({
  value = "",
  onChange,
  type = "text",
  placeholder = "",
  name,
}: Props) => {
  return (
    <input
      name={name}
      className={classes.input}
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
};
