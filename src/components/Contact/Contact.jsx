import React from "react";
import { useInView } from "react-intersection-observer";
// import EmailIcon from "../../assets/email-icon.png";
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
              <div className="contact-text">Every dancer....{`<`}3</div>
            </div>
            <div className="address-info">
              <div className="address-title">Address</div>
              <div className="address">Level 1....</div>
              {/* <img src={EmailIcon} alt="" /> */}
            </div>
            <div className="contact-info">
              <div className="contact-title">Contact</div>
              <div className="phone-no">+61 412....</div>
              <div className="email-address">info@....</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default Contact;
