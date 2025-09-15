import { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./EmblaCarouselAutoplay";
import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import strengthsData from "../Gallery/GalleryCarousel/galleryCorouselData";
import "./Testimonials.scss";
import { Container } from "react-bootstrap";

const Testimonials = (props) => {
  const options = { loop: true, align: "start", slidesToScroll: 1 };
  const progressNode = useRef(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  useEffect(() => {
    toggleAutoplay();
  }, [emblaApi]);

  return (
    // <Container fluid="xl">
    <div className="testimonials-container ">
      <h4>Our testimonials</h4>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {strengthsData.map((item, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={() => onAutoplayButtonClick(onNextButtonClick)}
              disabled={nextBtnDisabled}
            />
          </div>

          {/* <div
            className={`embla__progress`.concat(
              showAutoplayProgress ? "" : " embla__progress--hidden"
            )}
          >
            <div className="embla__progress__bar" ref={progressNode} />
          </div> */}

          {/* <button
            className="embla__play"
            onClick={toggleAutoplay}
            type="button"
          >
            {autoplayIsPlaying ? "Stop" : "Start"}
          </button> */}
        </div>
      </div>
    </div>
    // </Container>
  );
};

export default Testimonials;
