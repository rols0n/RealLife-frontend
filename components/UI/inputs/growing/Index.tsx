import { MutableRefObject } from "react";
import classes from "./Index.module.scss";
import { useState } from "react";
const GrowingInput = (props: {
  labelText?: string;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
  inputID: string;

  labelClass?: string;
  inputClass?: string;
}) => {
  const [textareaHeight, setTextareaHeight] = useState(props.minHeight);
  const handleOverflow = (input) => {
    const { scrollHeight, clientHeight, value } = input.target;
    if (props.maxHeight) if (clientHeight > props.maxHeight) return;
    console.log(value.length);
    if (value.length < 20) {
      setTextareaHeight(props.minHeight);
      return;
    }

    if (scrollHeight > clientHeight) {
      setTextareaHeight(scrollHeight);
    }
  };
  return (
    <>
      {props.labelText && (
        <label
          className={classes.label + " " + props.inputClass}
          htmlFor={props.inputID}
        >
          {props.labelText}
        </label>
      )}

      <textarea
        className={classes.textarea + " " + props.inputClass}
        style={{ height: textareaHeight, resize: "none" }}
        onChange={handleOverflow}
        placeholder={props.placeholder}
        id={props.inputID}
      />
    </>
  );
};
export default GrowingInput;
