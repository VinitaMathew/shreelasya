import React from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import InstaIcon from "../../../assets/instagramIcon.svg";
import { InlineWidget } from "react-calendly";
import "./KnowMore.scss";

const KnowMore = React.forwardRef((props, calendlyRef) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div className="know-more-container">
      <div className="whatsapp-section">
        <Container>
          <div
            ref={ref}
            className={
              inView ? "slide-up inner-wrapper" : "hidden inner-wrapper"
            }
          >
            <h2>Where dancers belong</h2>
            <div className="content">
              Connect with fellow dancers, celebrate progress, ask questions,
              and grow together. Enjoy monthly meetups, group practice sessions,
              and stay in touch via our WhatsApp group.
            </div>
            <button
              onClick={() => window.open("http://www.google.com/", "_blank")}
            >
              Join our whatsapp community
            </button>
          </div>
        </Container>
      </div>
      <div
        ref={ref2}
        className={inView2 ? "slide-up insta-section" : "hidden insta-section"}
      >
        <button onClick={() => window.open("http://www.google.com/", "_blank")}>
          <img src={InstaIcon} alt="" />
        </button>
      </div>
      <div className="calendly-section" ref={calendlyRef}>
        <div ref={ref3} className={inView3 ? "slide-up" : "hidden"}>
          <div
            style={{
              width: "100%",
              maxWidth: "1200px", // ensure desktop view
              minWidth: "1010px", // force horizontal layout
              margin: "0 auto", // center on page
            }}
          >
            <InlineWidget url="https://calendly.com/vinitatest2010/30min" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default KnowMore;
