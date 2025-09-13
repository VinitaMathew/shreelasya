import React from "react";
import { useInView } from "react-intersection-observer";
import { Container } from "react-bootstrap";
import "./SneakPeek.scss";

const SneakPeek = React.forwardRef((props, sneakPeekRef) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div className="sneakpeek-container" ref={sneakPeekRef}>
      <Container>
        <div
          style={{ paddingTop: "30px" }}
          ref={ref}
          className={inView ? "slide-up" : "hidden"}
        >
          <h4>A sneak peak into our classes</h4>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/qAy3Shv5EgI?si=AHcQBTftFYeiS3wP"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
});

export default SneakPeek;
