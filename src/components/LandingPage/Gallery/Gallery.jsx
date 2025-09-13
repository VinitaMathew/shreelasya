import "./Gallery.scss";
import GalleryCarousel from "./GalleryCarousel/GalleryCarousel";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div>
        <h4>Dance in frames</h4>
        <GalleryCarousel />
      </div>
    </div>
  );
}
