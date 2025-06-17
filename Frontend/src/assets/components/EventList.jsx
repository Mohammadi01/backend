import React from "react";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    const res = await fetch("");
    if (res.ok) {
      const response = await res.json();
      setEvents(response);
    }
  };
  useEffect(() => {}, []);

  return <section className="event-list"></section>;
};
export default EventList;
