import Link from "next/link";
import classes from "./TopNavbar.module.scss";
import MessagesPopup from "../../popups/regular/Index";
import button from "../../buttons/Button";
import { Dispatch, SetStateAction, useEffect } from "react";

// const btnStngs = { type: "submit", isActive: false, text: "", link: false };

const TopNavbar = (props: {
  setDisplayMsgs: Dispatch<SetStateAction<boolean>>;
  setDisplayNoti: Dispatch<SetStateAction<boolean>>;
  setDisplaySearch: Dispatch<SetStateAction<boolean>>;
}) => {
  const setDisplayer = (setDisplay: Dispatch<SetStateAction<boolean>>) => {
    setDisplay(true);
    document.body.style.overflow = "hidden";
    console.log("clicked");
  };

  const showNotifications = () => {
    setDisplayer(props.setDisplayNoti);
  };
  const showMessages = () => {
    setDisplayer(props.setDisplayMsgs);
  };

  const showSearch = () => {
    setDisplayer(props.setDisplaySearch);
  };

  return (
    <div className={classes.navbar}>
      <img src="./imgs/realLife-logo.png" className={classes.logo} />
      <button onClick={showSearch} className={classes.container}>
        <img src="./icons/Search.png" className={classes.searchIcon} />
      </button>

      <div className={classes.middle}>
        <img src="./icons/Home.png" />
        <img src="./icons/Home.png" />
        <img src="./icons/Home.png" />
      </div>

      <button
        onClick={showNotifications}
        className={classes.container + " " + classes["container-notifications"]}
      >
        <img src="./icons/Notification.png" />
        <div />
      </button>
      <button
        onClick={showMessages}
        className={classes.container + " " + classes["container-chats"]}
      >
        <img src="./icons/Chat.png" />
        <div />
      </button>
      <Link href="/profile" className={classes.profile}>
        <img src="./icons/face.png" />
      </Link>
    </div>
  );
};
export default TopNavbar;
