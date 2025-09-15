export function getUpcomingEvents(events, count = 2) {
  const now = new Date();

  return events
    .filter((event) => new Date(event.start.dateTime) > now) // only future events
    .sort((a, b) => new Date(a.start.dateTime) - new Date(b.start.dateTime)) // sort by start date
    .slice(0, count); // get first N (default 2)
}

export function formatEventDate(dateTime) {
  const date = new Date(dateTime);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${day} ${month} ${year} · ${time}`;
}

export function getDayOfWeek(dateTime, timeZone) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long", // "Monday", "Tuesday", etc.
    timeZone,
  }).format(new Date(dateTime));
}

export function getEventDetails(desc) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(desc, "text/html");

  const a = doc.querySelector("a");
  const link = a?.getAttribute("href");
  const description = doc.body.textContent.replace(link, "").trim();

  return [description, link];
}
