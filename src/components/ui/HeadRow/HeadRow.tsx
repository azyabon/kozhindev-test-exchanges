import classes from "./HeadRow.module.scss";
import { TABLE_HEADER } from "../../../config/table";

export const HeadRow = () => {
  return (
    <tr className={classes.head}>
      {TABLE_HEADER.map((head) => (
        <th>{head}</th>
      ))}
    </tr>
  );
};
