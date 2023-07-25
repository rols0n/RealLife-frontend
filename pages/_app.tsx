import { AppProps } from "next/app";
import React from "react";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import "../styles/globals.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const state = localStorage.getItem("isLoggedIn") === "true" ? true : false;
    setIsLoggedIn(state);
  }, []);

  return (
    <>
      <div id="popups"></div>
      <Component {...pageProps} isLoggedIn={isloggedIn}></Component>
    </>
  );
};
export default App;
