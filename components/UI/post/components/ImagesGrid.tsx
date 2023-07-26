import {
  useRef,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";
import classes from "./ImagesGrid.module.scss";

// ImagesGrid generator alghoritm:
const generateGrid = (images: string[], input?: any) => {
  let output = <img src={images[0]} />;
  let layout = "layout1";
  let count = images.length;
  if (input) count++;
  console.log("hey");

  // If theres only one image - display layout1
  if (count === 1) return output;

  // If there're two images - display layout2 or layout3
  if (count === 2) {
    // If both of the images are in formats 1:1 - 6:4, then display layout2

    output = (
      <>
        <img src={images[0]} />
        <img src={images[1]} />
      </>
    );
    layout = "layout2";
  }

  //  If there are  three images - display layout4 or layout5 or layout6
  if (count === 3) {
    output = (
      <>
        <img src={images[0]} />
        <img src={images[1]} />
        <img src={images[2]} />
      </>
    );
    layout = "layout4";
  }
  // if there are at least four images - display layout7 or layout8 or layout9

  if (count >= 4) {
    output = (
      <>
        <img src={images[0]} />
        <img src={images[1]} />
        <img src={images[2]} />
        <img src={images[3]} />
      </>
    );
    layout = "layout7";
  }

  return { output, layout };
};

const ImagesGrid = (props: { images?: string[] }) => {
  let gridClass = classes.images + " " + classes.layout1;
  let outputHtml = undefined;
  if (props.images) {
    const { output, layout } = generateGrid(props.images);
    gridClass = classes.images + " " + classes[layout];
    outputHtml = output;
  }

  return <div className={gridClass}>{outputHtml}</div>;
};
export default ImagesGrid;
