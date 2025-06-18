import React from "react";
import EventItem from "./EventItem.jsx";
import { useState, useEffect } from "react";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    const res = await fetch(
      "https://eventservice3-aucbb5b8bze5cygv.swedencentral-01.azurewebsites.net/api/Events"
    );
    if (res.ok) {
      console.log("Events fetched successfully");
      console.log(res);
      const response = await res.json();
      console.log(response);
      setEvents(response.result);
    } else {
      console.error("Failed to fetch events");
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <section id="events">
      {events.map((event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </section>
  );
};
export default EventList;
