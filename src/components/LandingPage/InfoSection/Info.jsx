import { NavLink } from "react-router-dom";
import "./Info.scss";

export default function Info(props) {
  return (
    <div className="infoContainer">
      <div className="infoLine">
        Grace in Every Step. Rhythm in Every Heart.
      </div>
      <div className="infoContent">
        Learn the classical art of Bharatanatyam from anywhere in the world.
      </div>
      <div className="infoButtonContainer">
        <button className="infoServicesButton" onClick={props.joinClassClick}>
          Join a class
        </button>
        <button className="infoContactButton" onClick={props.watchIntroClick}>
          Watch an intro video
        </button>
      </div>
    </div>
  );
}
