import Link from "next/link";
import classes from "./Button.module.scss";

const Button = (props: {
  isActive: boolean;
  type: "submit" | "reset" | "button" | false;
  text: string;
  link: string | boolean;
  class?: string;
  children?: any;
  onClick?: any;
}) => {
  let btnClass = classes.button + " " + props?.class;
  if (props.isActive === true)
    btnClass = classes.button + " " + classes.activeButton;
  if (typeof props.link !== "boolean")
    return (
      <Link href={props.link} onClick={props.onClick} className={btnClass}>
        {props.children}
        {props.text}
      </Link>
    );

  if (typeof props.type === "string")
    return (
      <button className={btnClass} onClick={props.onClick} type={props.type}>
        {props.children}
        {props.text}
      </button>
    );
};

export default Button;
