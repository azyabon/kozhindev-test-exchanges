import classes from "./HeadRow.module.scss";

type Props = {
  heads: String[];
};

export const HeadRow = ({ heads }: Props) => {
  return (
    <tr className={classes.head}>
      {heads.map((head, index) => (
        <th key={index}>{head}</th>
      ))}
    </tr>
  );
};
