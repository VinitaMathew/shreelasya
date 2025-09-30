import { Container } from "react-bootstrap";
import { useEventsStore } from "../../store";

export default function EventsPage() {
  let store = useEventsStore();
  let { events, isLoading, error } = store;

  if (isLoading) return <div>Loading...</div>;
  return (
    <Container>
      <div
        className="events-page-container"
        style={{ minHeight: "500px", paddingTop: "150px" }}
      >
        {events?.length > 0 ? (
          <ul>
            {events.map((events, index) => {
              return <li>{events.summary}</li>;
            })}
          </ul>
        ) : (
          (!isLoading || error) && <div>No events to show</div>
        )}
      </div>
    </Container>
  );
}
