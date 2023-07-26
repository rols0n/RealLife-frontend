import { useState } from "react";
import Button from "../../buttons/Button";
import classes from "./PCredirector.module.scss";
import PostCreator from "./PostCreator";

const PCredirector = () => {
  const [showPostCreator, setShowPostCreator] = useState(false);
  const togglePostCreator = () => {
    setShowPostCreator((ex) => !ex);
    document.body.style = "overflow: hidden";
  };

  return (
    <>
      {showPostCreator && <PostCreator setDisplay={setShowPostCreator} />}
      <div className={classes.container}>
        <Button
          isActive={true}
          type="button"
          text="+ New Post"
          link={false}
          onClick={togglePostCreator}
        ></Button>
      </div>
    </>
  );
};
export default PCredirector;
