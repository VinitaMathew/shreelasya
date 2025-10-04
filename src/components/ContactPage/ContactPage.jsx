import { Container } from "react-bootstrap";
import AddressIcon from "../../assets/address-icon.svg";
import ContactIcon from "../../assets/contact-icon.svg";
import "./ContactPage.scss";

export default function ContactPage() {
  return (
    <Container>
      <div className="contact-page-container">
        <div className="content">
          <div style={{ fontSize: "64px", fontFamily: "Lora" }}>
            Get in touch
          </div>
          <div className="desc">
            We’d love to hear from you! Whether you have a question, feedback,
            or just want to say hello, reach out to us.
          </div>
          <div className="contact-section">
            <div className="address-wrapper">
              <img src={AddressIcon} alt="" />
              <div>
                <div style={{ fontSize: "24px", fontWeight: "700" }}>
                  Address
                </div>
                <div style={{ fontSize: "20px", width: "250px" }}>
                  Level 1, 123 Flinders Lane Melbourne VIC 3000 Australia
                </div>
              </div>
            </div>
            <div class="divider"></div>
            <div className="contact-wrapper">
              <img src={ContactIcon} alt="" />
              <div>
                <div style={{ fontSize: "24px", fontWeight: "700" }}>
                  Contact
                </div>
                <div style={{ fontSize: "20px" }}>
                  <div>info.shreelasya@gmail.com</div>
                  <div>+61 412 345 678</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ maxWidth: "360px", textAlign: "center" }}>
            For more queries please fill out the Google form and we’ll get back
            to you :)
          </div>
          <button
            className="form-button"
            onClick={() => window.open("http://www.google.com/", "_blank")}
          >
            Open form
          </button>
        </div>
      </div>
    </Container>
  );
}
