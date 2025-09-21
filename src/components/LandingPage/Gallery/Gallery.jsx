import { Container } from "react-bootstrap";
import "./Gallery.scss";
import GalleryCarousel from "./GalleryCarousel/GalleryCarousel";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <Container>
        <div className="gallery-wrapper">
          <h2>Dance in frames</h2>
          <GalleryCarousel />
        </div>
      </Container>
    </div>
  );
}
