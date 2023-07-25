import { Fragment } from "react";
import classes from "./Input.module.scss";

const Input = (props: {
  placeholder: string;
  labelText: string;

  inputType: string;
  inputID: string;
}) => {
  return (
    <>
      {props.labelText && (
        <label htmlFor={props.inputID} className={classes.descrription}>
          {props.labelText}
        </label>
      )}
      <input
        id={props.inputID}
        placeholder={props.placeholder}
        type={props.inputType}
        className={classes.input}
        // className={classes.input}
      />
    </>
  );
};

export default Input;
