import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./UpcomingEvents.scss";
import { getEvents } from "../../../services/useApi";
import {
  getUpcomingEvents,
  formatEventDate,
  getDayOfWeek,
  getEventDetails,
} from "../../../services/utils";
import { useEffect, useState } from "react";

export default function UpcomingEvents() {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const json = await getEvents(); // call the fetch function
        setEvents(getUpcomingEvents(json?.items));
        setLoading(false);
        console.log(getUpcomingEvents(json?.items));
      } catch (error) {
        console.error("Error loading data:", error);
        setLoading(false);
      }
    }

    loadData();
  }, []);

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
          {loading && <div>Loading...</div>}
          {events && events?.length > 0 ? (
            <ul className="events-list">
              {events.map((event, index) => {
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
            !loading && <div>No events to show</div>
          )}
        </div>
      </Container>
    </div>
  );
}
