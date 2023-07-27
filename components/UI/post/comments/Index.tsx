import Comment from "../components/Comment";
import CommentForm from "../components/CommentForm";
import classes from "./Index.module.scss";

const Comments = () => {
  console.log("ghb");
  return (
    <div className={classes.container}>
      <CommentForm />

      <Comment width={100}>
        <Comment width={100}>
          {" "}
          <Comment width={100}></Comment>
        </Comment>
      </Comment>
    </div>
  );
};
export default Comments;
