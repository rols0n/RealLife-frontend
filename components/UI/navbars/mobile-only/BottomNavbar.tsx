import Button from "../../buttons/Button";
import classes from "./BottomNavbar.module.scss";
import useNavPopups from "@/hooks/useNavPopups";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const BottomNavbar = (props: {
  page: "home" | "more";
  customMoreLink: string;
}) => {
  let homeSrc = "./icons/Home.png";

  let moreSrc = "./icons/More.png";
  if (props.page === "home") homeSrc = "./icons/HomeFill.png";
  if (props.page === "more") moreSrc = "./icons/MoreActive.png";
  const { popups, toggleSearch, toggleNoti, toggleMsg } = useNavPopups();

  return (
    <>
      {popups}
      <div className={classes.navbar}>
        <div className={classes.content}>
          <Button
            isActive={false}
            type="button"
            text=""
            link={false}
            onClick={toggleSearch}
          >
            <img src="./icons/Search.png" alt="Home page" />
          </Button>
          <Button
            isActive={false}
            type="button"
            text=""
            link={false}
            onClick={toggleNoti}
          >
            <img src="./icons/Notification.png" alt="Home page" />
          </Button>

          <Button
            isActive={false}
            type="button"
            text=""
            link={props.page === "home" ? false : "/"}
            class={props.page === "home" && classes.active}
            onClick={scrollToTop}
          >
            <img src={homeSrc} alt="Home page" />
          </Button>

          <Button
            isActive={false}
            type="button"
            text=""
            link={false}
            onClick={toggleMsg}
          >
            <img src="./icons/Chat.png" alt="Home page" />
          </Button>
          <Button
            isActive={false}
            type="button"
            text=""
            link={props.customMoreLink ? props.customMoreLink : "/more"}
            class={props.page === "more" && classes.active}
          >
            <img src={moreSrc} alt="Home page" />
          </Button>
        </div>
      </div>
    </>
  );
};
export default BottomNavbar;

//  | search | notifications | HomePage | messages | sections |
