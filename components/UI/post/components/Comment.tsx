import Button from "../../buttons/Button";
import classes from "./Comment.module.scss";

import { useState } from "react";
import CommentForm from "./CommentForm";

const Comment = (props: { width: number; children?: any }) => {
  const [showChildren, setShowChildren] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    <div className={classes.container} style={{ width: `${props.width}%` }}>
      <div className={classes.content}>
        <img src="./icons/face.png" className={classes.avatar} />
        <div className={classes.comment}>
          <div className={classes.details}>
            <h4 className={classes.userName}>Patryk Roll</h4>
            <h5 className={classes.timePast}>5m </h5>
          </div>
          <div className={classes.textContainer}>
            <p className={classes.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quo molestias doloremque accusamus quia culpa esse iure voluptas
              adipisci repellendus perferendis vero, repellat veniam
              consequuntur suscipit ut quod quaerat sunt.
            </p>
          </div>
        </div>
      </div>

      <div className={classes.buttons}>
        <Button isActive={false} type="button" text="+" link={false} />
        <Button isActive={false} type="button" text="-" link={false} />
        <Button
          isActive={false}
          type="button"
          text="replies"
          link={false}
          onClick={() => setShowChildren((prevState) => !prevState)}
        />
        <Button
          isActive={false}
          type="button"
          text="reply"
          link={false}
          onClick={() => setShowForm((prevState) => !prevState)}
        />
      </div>
      <div
        className={classes.nestedSection}
        style={{ width: `${props.width - 10}%`, marginLeft: `${10}%` }}
      >
        {showForm && <CommentForm />}
        {showChildren && props.children}
      </div>
    </div>
  );
};
export default Comment;
