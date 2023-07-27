import Button from "@/components/UI/buttons/Button";
import TopNavbar from "@/components/UI/navbars/main/topNavbar";
import BottomNavbar from "@/components/UI/navbars/mobile-only/BottomNavbar";

import classes from "./index.module.scss";
const MainPage: React.FC = () => {
  return (
    <>
      <TopNavbar /> {/* PC - Post Creator */}
      <div className={classes.container}>
        <div className={classes.wide}>
          <Button
            isActive={true}
            type={false}
            text={"Profile Page"}
            link={"/profile"}
          >
            <img src="./icons/face.png" />
          </Button>
        </div>

        <div className={classes.normal}>
          <Button
            isActive={false}
            type={false}
            text={"Groups"}
            link={"/groups"}
          ></Button>
        </div>

        <div className={classes.normal}>
          <Button
            isActive={false}
            type={false}
            text={"Find Group"}
            link={"/friends"}
          ></Button>
        </div>

        <div className={classes.normal}>
          <Button
            isActive={false}
            type={false}
            text={"+ Create Group"}
            link={"/friends"}
          ></Button>
        </div>
        <div className={classes.normal}>
          <Button
            isActive={false}
            type={false}
            text={"Manage Groups"}
            link={"/friends"}
          ></Button>
        </div>
        <div className={classes.normal}>
          <Button
            isActive={false}
            type={false}
            text={"Friends"}
            link={"/friends"}
          ></Button>
        </div>
        <div className={classes.normal}>
          <Button
            isActive={false}
            type={false}
            text={"Manage Friends"}
            link={"/friends"}
          ></Button>
        </div>
        <div className={classes.normal}>
          <Button
            isActive={false}
            type={false}
            text={"People you may know"}
            link={"/friends"}
          ></Button>
        </div>

        <div className={classes.small}>
          <div>
            <Button
              isActive={false}
              type={false}
              text={"Images"}
              link={"/friends"}
            ></Button>
            <Button
              isActive={false}
              type={false}
              text={"Movies"}
              link={"/friends"}
            ></Button>
          </div>
        </div>
      </div>
      <BottomNavbar page="more" />
    </>
  );
};
export default MainPage;
