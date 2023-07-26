import { Dispatch, SetStateAction, useState } from "react";
import { createPortal } from "react-dom";
import PopupBackground from "../../popups/PopupBackground";
import GrowingInput from "../../inputs/growing/Index";
import classes from "./PostCreator.module.scss";
import Button from "../../buttons/Button";
import ImagesGrid from "../../post/components/ImagesGrid";

const PostCreator = (props: {
  setDisplay: Dispatch<SetStateAction<boolean>>;
}) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    const imagesArray = Array.from(files);
    Promise.all(
      imagesArray.map((image) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(image);
        });
      })
    ).then((imagePreviews) => {
      setSelectedImages(imagePreviews);
    });
  };
  const htmlContent = (
    <PopupBackground setDisplay={props.setDisplay} heading="Post Creator">
      <form
        onSubmit={(event) => event.preventDefault()}
        className={classes.form}
      >
        <div className={classes.container}>
          <GrowingInput
            labelText="Description"
            placeholder="What's on your mind?"
            minHeight={100}
            maxHeight={150}
            inputID="growing-input"
          />
        </div>

        <div className={classes.images}>
          <ImagesGrid images={selectedImages} />
        </div>

        <input
          className={classes.files}
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />

        <div className={classes.buttons}>
          <Button
            isActive={false}
            type="button"
            link={false}
            text="Cancel"
            onClick={() => {
              props.setDisplay(false);
              document.body.style = "overflow-y: scroll";
            }}
          />
          <Button isActive={true} type="submit" link={false} text="Submit" />
        </div>
      </form>
    </PopupBackground>
  );
  return createPortal(htmlContent, document.getElementById("popups"));
};
export default PostCreator;
