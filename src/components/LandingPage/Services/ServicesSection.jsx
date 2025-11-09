import { Container } from "react-bootstrap";
import BharatanatyamImg from "../../../assets/bharatanatyam.svg";
import LearnImg from "../../../assets/learn-section-img.svg";
import servicesArr from "./servicesData";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
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
                <b>Grace</b> <br />• Bharatanatyam is known for its sculptural
                poses, fluid movements, and expressive gestures (mudras).
                <br /> • The dancer embodies elegance through controlled
                posture, body (anga and upaanga) movements, and subtle facial
                expressions. <br />
                <br />
                <b>Rhythm</b>
                <br /> • It is deeply rooted in rhythmic precision, with
                intricate footwork synchronized to Carnatic music and talam
                (beat cycles). <br />• Instruments like the mridangam,
                nattuvangam, flute, veena, violin, kanjeera etc enhance the
                rhythmic experience. <br /> <br />
                <b>Heritage</b> <br />• Bharatanatyam originated in Tamil Nadu
                and was traditionally performed in temples as a form of
                devotional offering. <br />• It carries centuries of spiritual,
                cultural, and artistic legacy, bridging the divine and the
                human, through expressive storytelling often depicting stories
                from Hindu mythology, especially through the symbolism of Lord
                Nataraja, the cosmic dancer.
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
                We are thrilled to have you join us on this exciting journey of
                rhythm, movement and expression. Whether you are a seasoned
                dancer or just starting out, our goal is to create a positive
                environment where you can explore the art of dance and find joy
                in every step. Aligning with Bharatanatyam’s core values, we
                also offer diverse dance genre disciplines for you to explore
                and discover your own unique style. <br />
                Remember, it’s not just a dance form; it’s a living tradition
                that teaches discipline, devotion, and storytelling through
                movement.
              </div>
              <button>
                <NavLink to="/about" className="link">
                  Learn more
                </NavLink>
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
