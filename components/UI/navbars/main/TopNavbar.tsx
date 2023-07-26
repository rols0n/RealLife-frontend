import Link from "next/link";
import classes from "./TopNavbar.module.scss";

import useNavPopups from "@/hooks/useNavPopups";

const TopNavbar = () => {
  const { popups, toggleSearch, toggleNoti, toggleMsg } = useNavPopups();

  return (
    <div className={classes.navbar}>
      {popups}
      <img src="./imgs/realLife-logo.png" className={classes.logo} />
      <button onClick={toggleSearch} className={classes.container}>
        <img src="./icons/Search.png" className={classes.searchIcon} />
      </button>

      <div className={classes.middle}>
        <img src="./icons/Home.png" />
        <img src="./icons/Home.png" />
        <img src="./icons/Home.png" />
      </div>

      <button
        onClick={toggleNoti}
        className={classes.container + " " + classes["container-notifications"]}
      >
        <img src="./icons/Notification.png" />
        <div />
      </button>
      <button
        onClick={toggleMsg}
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

// 105 = 46
