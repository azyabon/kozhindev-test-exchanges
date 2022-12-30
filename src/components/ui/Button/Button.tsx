import classes from "./Button.module.scss";

type Props = {
  isDisabled?: boolean;
  text: string;
  onClick?: () => void;
};

export const Button = ({ isDisabled = false, text, onClick }: Props) => {
  return (
    <button onClick={onClick} className={classes.button} disabled={isDisabled}>
      {text}
    </button>
  );
};
