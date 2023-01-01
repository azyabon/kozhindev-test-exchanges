import classes from "./Header.module.scss";
import logo from "../../../assets/img/logo.png";
import { Button } from "../../ui";
import { useTypedSelector } from "../../../hooks/useTypesSelector";
import { useActions } from "../../../hooks/useActions";
import { useEffect, useState } from "react";
import { dateDistance } from "../../../utils";

const MINUTE = 60000;

export const Header = () => {
  const { lastUpdate } = useTypedSelector((state) => state.currencies);
  const { getCurrencies, setLastUpdate } = useActions();
  const [date, setDate] = useState<any>();

  useEffect(() => {
    setDate(dateDistance(lastUpdate));
    const interval = setInterval(() => {
      setDate(dateDistance(lastUpdate));
    }, MINUTE);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <div className={classes.header_content__logo}>
          <img src={logo} alt="logo" />
          <div className={classes.header_content_title}>KozhinConvert</div>
        </div>
        <div className={classes.header_content__update}>
          <Button
            text="UPDATE"
            onClick={() => {
              getCurrencies();
              setLastUpdate();
            }}
          />
          <div className={classes.last_update}>last update: {date}</div>
        </div>
      </div>
    </header>
  );
};
