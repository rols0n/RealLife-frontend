import Link from "next/link";
import classes from "./Button.module.scss";

const Button = (props: {
  isActive: boolean;
  type: "submit" | "reset" | "button" | false;
  text: string;
  link: string | boolean;
  class?: string;
  children?: any;
}) => {
  let btnClass = classes.button + " " + props?.class;
  if (props.isActive === true)
    btnClass = classes.button + " " + classes.activeButton;
  if (typeof props.link !== "boolean")
    return (
      <Link href={props.link} className={btnClass}>
        {props.text}
      </Link>
    );

  if (typeof props.type === "string")
    return (
      <button className={btnClass} type={props.type}>
        {props.children}
        {props.text}
      </button>
    );
};

export default Button;
