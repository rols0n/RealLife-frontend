import classes from "./UserStatus.module.scss";

const UserStatus = (props: {
  status: "online" | "offline";
  src: string;
  id: string | undefined;
  generateDot: boolean;
}) => {
  return (
    <div className={classes.status}>
      <img src={props.src} alt="User Icon" />
      {props.generateDot && <div />}
    </div>
  );
};
export default UserStatus;
