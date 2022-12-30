import classes from "./Row.module.scss";
import { ICurrencies } from "../../../store/currencies";

type Props = {
  currency: ICurrencies;
  num: number;
};

export const Row = ({ currency, num }: Props) => {
  return (
    <tr className={classes.row}>
      <td>{num}</td>
      <td>{currency.charCode}</td>
      <td>{currency.name}</td>
      <td>{currency.rubValue}</td>
      <td>{currency.usdValue}</td>
      <td>{currency.eurValue}</td>
      <td>{currency.cnyValue}</td>
    </tr>
  );
};
