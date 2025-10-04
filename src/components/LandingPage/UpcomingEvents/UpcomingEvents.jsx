import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./UpcomingEvents.scss";
import {
  getUpcomingEvents,
  formatEventDate,
  getDayOfWeek,
  getEventDetails,
} from "../../../services/utils";
import { useEffect, useState } from "react";
import { useEventsStore } from "../../../store";

export default function UpcomingEvents() {
  let store = useEventsStore();
  let { events, isLoading } = store;
  const [upcomingEvents, setUpcomingEvents] = useState(null);

  useEffect(() => {
    setUpcomingEvents(getUpcomingEvents(events, 2));
  }, [events]);

  const handleEventClick = (desc) => {
    const [description, link] = getEventDetails(desc);
    window.open(link, "_blank");
  };
  return (
    <div className="upcoming-events-wrapper">
      <Container>
        <div className="inner-wrapper">
          <div className="button-section">
            <div className="title">Upcoming Events</div>

            <NavLink to="/events" className="link">
              <button>View all events</button>
            </NavLink>
          </div>
          {isLoading && <div>Loading...</div>}
          {upcomingEvents && upcomingEvents?.length > 0 ? (
            <ul className="events-list">
              {upcomingEvents.map((event, index) => {
                return (
                  <li
                    key={index}
                    className="list-item"
                    onClick={() => handleEventClick(event?.description)}
                  >
                    <div className="day-section">
                      <div style={{ fontSize: "24px", fontWeight: "600" }}>
                        {new Date(event.start.dateTime).getDate()}
                      </div>
                      <div style={{ fontSize: "14px" }}>
                        {getDayOfWeek(event.start.dateTime)}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: "14px" }}>
                        {formatEventDate(event.start.dateTime)}
                        {event?.location ? ` · ${event?.location}` : ""}
                      </div>
                      <div style={{ fontSize: "20px", fontWeight: "600" }}>
                        {event.summary}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div>No events to show</div>
          )}
        </div>
      </Container>
    </div>
  );
}
