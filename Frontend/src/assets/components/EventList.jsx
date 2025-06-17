import React from "react";
import { EventItem } from "./EventItem";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    const res = await fetch("");
    if (res.ok) {
      const response = await res.json();
      setEvents(response);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <section className="events">
      {events.map((event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </section>
  );
};
export default EventList;
