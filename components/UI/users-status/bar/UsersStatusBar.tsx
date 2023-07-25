import classes from "./UserStatusBar.module.scss";
import UserStatus from "../UserStatus";

const USERS: JSX.Element[] = [];
for (let index = 0; index < 20; index++) {
  USERS.push(
    <UserStatus
      status="offline"
      src="./icons/face.png"
      id="1"
      generateDot={false}
    />
  );
}

const UserStatusBar = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.carousel}>{USERS}</div>
      </div>
    </>
  );
};
export default UserStatusBar;
