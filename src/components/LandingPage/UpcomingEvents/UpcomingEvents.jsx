import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./UpcomingEvents.scss";

export default function UpcomingEvents() {
  return (
    <div className="upcoming-events-wrapper">
      <Container>
        <div className="inner-wrapper">
          <div>
            <div>Upcoming Events</div>
            <button>
              <NavLink to="/events" className="link">
                View all events
              </NavLink>
            </button>
          </div>
          <div>Events</div>
        </div>
      </Container>
    </div>
  );
}
