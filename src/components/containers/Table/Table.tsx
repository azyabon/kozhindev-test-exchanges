import classes from "./Table.module.scss";
import { useTypedSelector } from "../../../hooks/useTypesSelector";
import { Row, HeadRow, Button } from "../../ui";
import { TABLE_HEADER, TABLE_LIMIT } from "../../../config/table";
import { ICurrencies } from "../../../store/currencies";
import { Blocks } from "react-loader-spinner";
import { useState } from "react";

export const Table = () => {
  const [limiter, setLimiter] = useState(true);
  const { currencies, isLoading } = useTypedSelector(
    (state) => state.currencies
  );
  return (
    <section className={classes.table_wrapper}>
      {isLoading && (
        //Loader
        <Blocks
          visible={true}
          height="150"
          width="150"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      )}
      {!isLoading && (
        <>
          <table className={classes.table}>
            <HeadRow heads={TABLE_HEADER} />
            <tbody>
              {currencies.map((currency: ICurrencies, index) => {
                if (index >= TABLE_LIMIT && limiter) {
                  return null;
                }
                return <Row key={index} currency={currency} num={index + 1} />;
              })}
            </tbody>
          </table>
          <Button text={"Show/Close"} onClick={() => setLimiter(!limiter)} />
        </>
      )}
    </section>
  );
};
