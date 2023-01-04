import classes from "./Table.module.scss";
import { useTypedSelector } from "../../../hooks/useTypesSelector";
import { Row, HeadRow, Button, Input } from "../../ui";
import { TABLE_HEADER, TABLE_LIMIT } from "../../../config";
import { ICurrencies } from "../../../store/currencies";
import { Blocks } from "react-loader-spinner";
import { useState } from "react";
import { tableFilterByCode } from "../../../utils/table-filter/table-filter";

export const Table = () => {
  const [limiter, setLimiter] = useState(true);
  const [search, setSearch] = useState("");
  const { currencies, isLoading } = useTypedSelector(
    (state) => state.currencies
  );

  return (
    <section className={classes.table_wrapper}>
      {isLoading && (
        <Blocks
          visible={true}
          height="150"
          width="150"
          ariaLabel="blocks-loading"
          wrapperClass="blocks-wrapper"
        />
      )}
      {!isLoading && (
        <>
          <table className={classes.table}>
            <HeadRow heads={TABLE_HEADER} />
            <tbody>
              {tableFilterByCode(currencies, search).map(
                (currency: ICurrencies, index) => {
                  if (index >= TABLE_LIMIT && limiter) {
                    return null;
                  }
                  return (
                    <Row key={index} currency={currency} num={index + 1} />
                  );
                }
              )}
            </tbody>
          </table>
          <Input
            value={search}
            placeholder={"Currency search by code..."}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            text={limiter ? "show" : "hide"}
            onClick={() => setLimiter(!limiter)}
          />
        </>
      )}
    </section>
  );
};
