import React from "react";
import LandingPage from "../LandingPage/LandingPage";
//import "./Home.scss";

export default function Home(props) {
  return (
    <div className="sree-home-page">
      <LandingPage
        calendlyRef={props.calendlyRef}
        sneakPeekRef={props.sneakPeekRef}
        joinClassClick={props.joinClassClick}
        watchIntroClick={props.watchIntroClick}
      />
    </div>
  );
}
