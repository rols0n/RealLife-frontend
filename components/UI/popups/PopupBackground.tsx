import classes from "./PopupBackground.module.scss";
import { Dispatch, SetStateAction } from "react";
const PopupBackground = (props: {
  setDisplay: Dispatch<SetStateAction<boolean>>;
  heading: string;
  scrollHeight: any;
}) => {
  const closePopup = () => {
    props.setDisplay(false);
    document.body.style = "overflow-y: scroll";

    window.scrollTo({
      top: props.scrollHeight,
      behavior: "smooth",
    });
  };

  const handlePopupClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };
  return (
    <div className={classes.background} onClick={closePopup}>
      <div className={classes.content} onClick={handlePopupClick}>
        <nav className={classes.navbar}>
          <h3>{props.heading}</h3>
          <button onClick={closePopup}>
            <img alt="Close messages" src="./icons/Close.png" />
          </button>
        </nav>
        {props.children}
      </div>
    </div>
  );
};
export default PopupBackground;
