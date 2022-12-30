import classes from "./Wrapper.module.scss";

interface Props {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.app}>{children}</div>
    </div>
  );
};
