import { Container } from "react-bootstrap";
import BharatanatyamImg from "../../../assets/bharatanatyam.svg";
import LearnImg from "../../../assets/learn-section-img.svg";
import servicesArr from "./servicesData";
import { useInView } from "react-intersection-observer";
import "./ServicesSection.scss";

export default function ServicesSection(props) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="services-container">
      <div className="bharatanatyam-section">
        <Container>
          <div
            ref={ref}
            className={inView ? "slide-up section" : "hidden section"}
          >
            <img src={BharatanatyamImg}></img>
            <section>
              <h2>Why Bharatanatyam?</h2>
              <div className="content">
                More than just a dance - Bharatanatyam is path to
                self-discovery, discipline, and expression. It connects the
                body, mind, and soul through storytelling, rhythm, and grace.
              </div>
            </section>
          </div>
        </Container>
      </div>
      <div className="learn-section">
        <Container>
          <div
            ref={ref2}
            className={inView2 ? "slide-up section" : "hidden section"}
          >
            <div className="content-wrapper">
              <h2>Why Learn With Sree Laysa?</h2>
              <div className="content">
                Learn Bharatanatyam under Guru Shubhalakshmi, who brings 18
                years of experience in teaching and performing. Classes are
                rooted in tradition, focusing on technique, expression, and
                rhythm, with a warm and structured approach.
              </div>
              <button onClick={props.joinClassClick}>
                Book a free session
              </button>
            </div>
            <img src={LearnImg}></img>
          </div>
        </Container>
      </div>
      <div className="services-section">
        <Container>
          <ul ref={ref3} className={inView3 ? "slide-up" : "hidden"}>
            {servicesArr.map((service, index) => {
              return (
                <li key={index}>
                  <img src={service.image}></img>
                  <div className="label">{service.label}</div>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </div>
  );
}
