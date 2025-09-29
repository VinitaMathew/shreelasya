import { Container } from "react-bootstrap";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <div className="about-page-container">
      <div className="landing-wrapper">
        <Container>
          <div className="section">
            <div className="content">
              <div style={{ fontSize: "64px" }}>Subhashree Thyagarajan</div>
              <div style={{ fontSize: "18px" }}>
                A torchbearer of Bharatanatyam’s timeless grace, Subhashree
                weaves rhythm, expression, and devotion into every step she
                takes — and every dancer she mentors.
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
