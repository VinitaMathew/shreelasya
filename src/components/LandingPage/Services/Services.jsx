import { Container } from "react-bootstrap";
import "./Services.scss";

export default function Services(props) {
  return (
    <Container>
      <div className="services-container">
        <div className="bharatanatyam-section">
          <h4>Why Bharatanatyam?</h4>
        </div>
        <div className="learn-section">
          <h4>Why Learn With Sree Laysa?</h4>
          <button onClick={props.joinClassClick}>Book a free session</button>
        </div>
        <div className="services-section">
          <h4>Services Gallery Section</h4>
        </div>
      </div>
    </Container>
  );
}
