import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useEventsStore } from "../../store";
import {
  getEventDetails,
  formatEventDateTime,
  getUpcomingEvents,
} from "../../services/utils";
import CalendarIcon from "../../assets/calendar-icon.svg";
import "./EventsPage.scss";

export default function EventsPage() {
  let store = useEventsStore();
  let { events, isLoading } = store;
  const [upcomingEvents, setUpcomingEvents] = useState(null);

  useEffect(() => {
    let upcomingEvents = getUpcomingEvents(events);
    upcomingEvents = upcomingEvents?.map((item) => {
      const [description, link] = getEventDetails(item.description);
      return { ...item, desc: description, navLink: link };
    });
    setUpcomingEvents(upcomingEvents);
  }, [events]);

  return (
    <Container>
      <div className="events-page-container">
        <div className="title">Upcoming events</div>
        {isLoading ? (
          <div>Loading...</div>
        ) : upcomingEvents?.length > 0 ? (
          <ul className="events-list">
            {upcomingEvents.map((event, index) => {
              return (
                <li className="events-list-item" key={index}>
                  <div className="left-container">
                    <div style={{ fontSize: "24px", fontWeight: 700 }}>
                      {event.summary}
                    </div>
                    <div style={{ fontSize: "18px" }}>{event.desc}</div>
                    <div>
                      <div style={{ fontSize: "18px", fontWeight: 700 }}>
                        {formatEventDateTime(
                          event.start.dateTime,
                          event.end.dateTime
                        )}
                      </div>
                      <div style={{ fontSize: "18px", fontWeight: 700 }}>
                        {event?.location}
                      </div>
                    </div>
                    {event.navLink?.length > 1 && (
                      <button
                        onClick={() => window.open(event.navLink, "_blank")}
                      >
                        I'm interested
                      </button>
                    )}
                  </div>
                  <img src={CalendarIcon} alt=""></img>
                </li>
              );
            })}
          </ul>
        ) : (
          <div>No events to show</div>
        )}
      </div>
    </Container>
  );
}
