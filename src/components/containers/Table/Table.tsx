import classes from "./Table.module.scss";
import { useTypedSelector } from "../../../hooks/useTypesSelector";
import { Row, HeadRow } from "../../ui";

export const Table = () => {
  const { currencies } = useTypedSelector((state) => state.currencies);
  return (
    <table className={classes.table}>
      <HeadRow />
      <tbody>
        {currencies.map((currency, index) => (
          <Row currency={currency} num={index + 1} />
        ))}
      </tbody>
    </table>
  );
};
