import React from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "./KnowMore.scss";

const KnowMore = React.forwardRef((props, calendlyRef) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div className="know-more-container">
      <Container>
        <div className="whatsapp-section">
          <h4>Where dancers belong</h4>
          <button>Join our whatsapp community</button>
        </div>
        <div className="insta-section">
          <h4>Instagram section</h4>
          <button style={{ borderRadius: "50%" }}>I</button>
        </div>
        <div className="calendly-section" ref={calendlyRef}>
          <div ref={ref} className={inView ? "slide-up" : "hidden"}>
            <h4>Calendly section</h4>
          </div>
        </div>
      </Container>
    </div>
  );
});

export default KnowMore;
