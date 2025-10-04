export function getUpcomingEvents(events, count = 100) {
  const now = new Date();

  return events
    ?.filter((event) => new Date(event.start.dateTime) > now) // only future events
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

export function formatEventDateTime(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day}${getDaySuffix(day)} ${month} ${year}`;
  };

  const formatTime = (date) =>
    date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const sameDay =
    startDate.getFullYear() === endDate.getFullYear() &&
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getDate() === endDate.getDate();

  if (sameDay) {
    return `${formatDate(startDate)}, ${formatTime(startDate)} – ${formatTime(
      endDate
    )}`;
  } else {
    return `${formatDate(startDate)}, ${formatTime(startDate)} – ${formatDate(
      endDate
    )}, ${formatTime(endDate)}`;
  }
}
