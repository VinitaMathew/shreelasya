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
    <Container>
      <div className="sneakpeek-container" ref={sneakPeekRef}>
        <div
          style={{ paddingTop: "30px" }}
          ref={ref}
          className={inView ? "slide-up" : "hidden"}
        >
          <h2>A sneak peek into our classes</h2>
          <div className="video-wrapper">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/HB6a0AM5Zhk?si=bru6LOR5rwAn8ajQ"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default SneakPeek;
