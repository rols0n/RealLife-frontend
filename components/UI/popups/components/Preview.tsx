import classes from "./Preview.module.scss";

const PopupPreview = (props: {
  image: string;
  heading: string;
  description: string;
}) => {
  return (
    <div className={classes.container}>
      <img src={props.image} />
      <div className={classes.content}>
        <h4 className={classes.heading}>{props.heading}</h4>
        <h3 className={classes.description}>{props.description}</h3>
      </div>
    </div>
  );
};
export default PopupPreview;
