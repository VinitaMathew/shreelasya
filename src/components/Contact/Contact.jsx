import React from "react";
import { useInView } from "react-intersection-observer";
import InstaIcon from "../../assets/instagramIcon.svg";
import FbIcon from "../../assets/fbIcon.svg";
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
                Every dancer's journey begins with a single step - begin yours
                today
              </div>
            </div>
            <div className="address-info">
              <div className="address-title">Address</div>
              <div className="address">
                U2, 39 Holywood Gr, Carnegie, Melbourne, Victoria, Australia-
                3163
              </div>
              <div className="button-wrapper">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/artiste_subhashreethyagarajan/",
                      "_blank"
                    )
                  }
                >
                  <img src={InstaIcon} alt="" />
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/ShreeLasyaPerformingArts?mibextid=LQQJ4d",
                      "_blank"
                    )
                  }
                >
                  <img src={FbIcon} alt="" />
                </button>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-title">Contact</div>
              <div className="phone-no">+61 470 567 495</div>
              <div className="email-address">info@sreelasya.com</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
});

export default Contact;
