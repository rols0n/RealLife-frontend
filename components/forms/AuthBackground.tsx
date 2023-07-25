import { ReactNode } from "react";
import classes from "./AuthBackground.module.scss";

// content
const AuthBackground = (props: { children: ReactNode }) => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <img src={props.logoSrc} alt="RealLife's Logo" />

        {props.children}
      </div>
    </div>
  );
};

export default AuthBackground;
