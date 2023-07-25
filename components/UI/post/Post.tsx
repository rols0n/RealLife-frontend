import Button from "../buttons/Button";

import classes from "./Post.module.scss";
import ImagesGrid from "./components/ImagesGrid";

const defaultStngs = { isActive: false, type: "button", link: false };
const POST_TEXt = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, esse
similique tempore non dicta facere, vero necessitatibus minima odio \n\n\n
voluptate nemo ab saepe sed corrupti illo alias nesciunt quaerat
error!`;
const htmlTEXT = POST_TEXt.replace(/\n/g, "<br />");

const Post = () => {
  return (
    <div className={classes.post}>
      <nav className={classes.nav}>
        {/* group type */}
        {/* <div>
            <img />
            <img />
        </div> */}
        <img src="./icons/face.png" className={classes.avatar} />
        <div className={classes.content}>
          <h3 className={classes.postInfo}>Patryk Rolka</h3>
          <h3 className={classes.userName}>5m</h3>
        </div>
      </nav>

      <div className={classes.postText}>
        <p dangerouslySetInnerHTML={{ __html: htmlTEXT }}></p>
      </div>

      <ImagesGrid
        images={["./imgs/realLife-logo.png", "./imgs/realLife-logo.png"]}
      />

      <div className={classes.buttons}>
        <Button text="Like" {...defaultStngs} />
        <Button text="Comments" {...defaultStngs} class={classes.clicked} />
        <Button text="Dislike" {...defaultStngs} />
      </div>
    </div>
  );
};

export default Post;
