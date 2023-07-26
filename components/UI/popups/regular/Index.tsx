/* eslint-disable react/jsx-key */
import { Dispatch, SetStateAction } from "react";
import PopupBackground from "../PopupBackground";
import { createPortal } from "react-dom";
import Input from "@/components/forms/input/Input";
import classes from "./Index.module.scss";
import PopupPreview from "../components/Preview";
const RegularPopup = (props: {
  setDisplay: Dispatch<SetStateAction<boolean>>;
  scrollHeight: any;
  heading: string;
  placeholder?: string;
  inputID?: string;
  previews?: any[];
  children?: any;
}) => {
  const htmlContent = (
    <PopupBackground
      heading={props.heading}
      setDisplay={props.setDisplay}
      scrollHeight={props.scrollHeight}
    >
      {props.placeholder && (
        <div className={classes.container}>
          <Input
            placeholder={props.placeholder}
            labelText=""
            inputType="text"
            inputID={props.inputID}
          />
        </div>
      )}

      <div className={classes.previews}>
        {props.previews?.map(({ image, heading, description }, index) => {
          return (
            <PopupPreview
              image={image}
              heading={heading}
              description={description}
              key={index}
            />
          );
        })}
      </div>
    </PopupBackground>
  );
  return createPortal(htmlContent, document.getElementById("popups"));
};

export default RegularPopup;
