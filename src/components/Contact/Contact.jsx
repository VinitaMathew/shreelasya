import React from "react";
import { useInView } from "react-intersection-observer";
import InstaIcon from "../../assets/instagramIcon.svg";
import { Container } from "react-bootstrap";
import "./Contact.scss";

const Contact = React.forwardRef((props, contactRef) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <Container>
      <div ref={contactRef} className="contact-contanier">
        <div ref={ref} className={inView ? "slide-up" : "hidden"}>
          <div className="contact-info-wrapper">
            <div className="contact-desc">
              <div className="contact-text">
                Every dancer starts with a single step. Start yours today —
                online {`<`}3
              </div>
            </div>
            <div className="address-info">
              <div className="address-title">Address</div>
              <div className="address">
                Level 1, 123 Flinders Lane Melbourne VIC 3000 Australia
              </div>
              <button
                onClick={() => window.open("http://www.google.com/", "_blank")}
              >
                <img src={InstaIcon} alt="" />
              </button>
            </div>
            <div className="contact-info">
              <div className="contact-title">Contact</div>
              <div className="phone-no">+61 412 345 678</div>
              <div className="email-address">info@sreelasya.com</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default Contact;
