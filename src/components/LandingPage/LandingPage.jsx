import Info from "./InfoSection/Info";
// import BorderImage1 from "../../assets/border-img1.svg";
import InfoImage from "../../assets/info-image.png";
import "./LandingPage.scss";
import ServicesSection from "./Services/ServicesSection";
import SneakPeek from "./SneakPeek/SneakPeek";
import Testimonials from "./Testimonials/Testimonials";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import Gallery from "./Gallery/Gallery";
import KnowMore from "./KnowMore/KnowMore";
import { Container } from "react-bootstrap";

export default function LandingPage(props) {
  return (
    <div className="sree-landing-page">
      {/* <img className="sree-border-image1" src={BorderImage1} alt="" /> */}
      <div className="intro-wrapper">
        <Container>
          <div className="sree-info-container">
            <Info
              joinClassClick={props.joinClassClick}
              watchIntroClick={props.watchIntroClick}
            />
            <img className="sree-info-image" src={InfoImage} alt="" />
          </div>
        </Container>
        <UpcomingEvents />
      </div>
      <ServicesSection joinClassClick={props.joinClassClick} />
      <SneakPeek ref={props.sneakPeekRef} />
      <Testimonials />
      <Gallery />
      <KnowMore ref={props.calendlyRef} />
    </div>
  );
}
