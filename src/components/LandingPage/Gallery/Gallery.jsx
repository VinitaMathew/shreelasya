import { Container } from "react-bootstrap";
import "./Gallery.scss";
import { useInView } from "react-intersection-observer";
import GalleryCarousel from "./GalleryCarousel/GalleryCarousel";

export default function Gallery() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={
        inView ? "slide-up gallery-container" : "hidden gallery-container"
      }
    >
      <Container>
        <div className="gallery-wrapper">
          <h2>Dance in frames</h2>
          <GalleryCarousel />
        </div>
      </Container>
    </div>
  );
}
