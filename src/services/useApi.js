export async function getEvents() {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/vinitatest2010@gmail.com/events?key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return await response.json(); // return JSON
  } catch (error) {
    throw error; // rethrow so caller can handle
  }
}
