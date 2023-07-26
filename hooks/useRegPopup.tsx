import { Dispatch, SetStateAction, useState, useEffect } from "react";
import RegularPopup from "@/components/UI/popups/regular/Index";

const setDisplayer = (
  setDisplay: Dispatch<SetStateAction<boolean>>,
  setScrollHeight: Dispatch<SetStateAction<number>>
) => {
  // if opens

  // if closes scrolls
  setDisplay((prevState) => {
    return !prevState;
  });
  document.body.style.overflow = "hidden";
};

const useRegPopup = (props: {
  previews?: object[];
  heading: string;
  placeholder?: string;
  inputID?: string;
  children?: any;
}) => {
  const [display, setDisplay] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (display !== true) {
      setScrollHeight(window.scrollY);
    }
  }, [display]);
  const toggle = () => {
    if (display === false) {
      setScrollHeight(window.scrollY);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setDisplayer(setDisplay, setScrollHeight);
  };
  return {
    html: (
      <>
        {display && (
          <RegularPopup
            setDisplay={setDisplay}
            scrollHeight={scrollHeight}
            heading={props.heading}
            placeholder={props.placeholder}
            inputID={props.inputID}
            previews={props.previews}
            // eslint-disable-next-line react/no-children-prop
            children={props.children}
          />
        )}
      </>
    ),

    state: { display, setDisplay },
    toggle,
  };
};
export default useRegPopup;
