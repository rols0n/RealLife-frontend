import Button from "../../buttons/Button";
import classes from "./PCredirector.module.scss";

const PCredirector = () => {
  return (
    <div className={classes.container}>
      <Button
        isActive={true}
        type="button"
        text="+ New Post"
        link={false}
      ></Button>
    </div>
  );
};
export default PCredirector;
