import React, { useRef } from "react";
import { BrowserRouter as Route, Routes, HashRouter } from "react-router-dom";
import Home from "../HomePage/Home";
import Menu from "../Menu/Menu";
import AboutPage from "../AboutPage/AboutPage";
import Contact from "../Contact/Contact";
import "./Routing.scss";
import EventsPage from "../EventsPage/EventsPage";
import ContactPage from "../ContactPage/ContactPage";

export default function Routing() {
  const contactRef = useRef(null);
  const calendlyRef = useRef(null);
  const sneakPeekRef = useRef(null);
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCalendly = () => {
    calendlyRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSneakPeek = () => {
    sneakPeekRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="routingContainer">
      <HashRouter>
        <div className="menu-container">
          <Menu joinClassClick={scrollToCalendly} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                joinClassClick={scrollToCalendly}
                watchIntroClick={scrollToSneakPeek}
                calendlyRef={calendlyRef}
                sneakPeekRef={sneakPeekRef}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Contact ref={contactRef} homeClick={scrollToHome} />
      </HashRouter>
    </div>
  );
}
