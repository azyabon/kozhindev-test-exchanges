import classes from "./Header.module.scss";
import logo from "../../../assets/img/logo.png";
import { Button } from "../Button/Button";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <div className={classes.header_content__logo}>
          <img src={logo} alt="logo" />
          <div className={classes.header_content_title}>KozhinConvert</div>
        </div>
        <div className={classes.header_content__update}>
          <Button text="UPDATE" />
          <div className={classes.last_update}>last update: 3 minutes ago</div>
        </div>
      </div>
    </header>
  );
};
