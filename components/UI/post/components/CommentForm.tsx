// Thaht component is used for creating and uploading comments

import { useState } from "react";
import classes from "./CommentForm.module.scss";

import GrowingInput from "../../inputs/growing/Index";
import Button from "../../buttons/Button";

const CommentForm = () => {
  const [showButtons, setShowButtons] = useState(false);
  const toggleButtons = () => setShowButtons((prevState) => !prevState);
  return (
    <form className={classes.form}>
      <div className={classes.content}>
        <img src="./icons/face.png" className={classes.avatar} />

        <GrowingInput
          placeholder="Whats on your mind?"
          minHeight={50}
          maxHeight={500}
          inputID="root-comment"
          onClick={toggleButtons}
        />
      </div>

      {showButtons && (
        <div className={classes.buttons}>
          <Button
            isActive={false}
            type="button"
            text="Cancel"
            link={false}
            onClick={toggleButtons}
          />
          <Button isActive={true} type="submit" text="Submit" link={false} />
        </div>
      )}
    </form>
  );
};
export default CommentForm;
