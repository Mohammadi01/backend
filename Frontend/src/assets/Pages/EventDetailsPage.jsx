import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EventDetailsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const getEvents = async () => {
    const res = await fetch(
      `https://eventservice3-aucbb5b8bze5cygv.swedencentral-01.azurewebsites.net/api/Events/${id}`
    );
    if (res.ok) {
      const response = await res.json();
      setEvent(response.result);
      console.log("Eventt fetched successfully:", response.result);
    } else {
      console.error("Failed to fetch the event");
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="event-details">
      <h1>{event.title}</h1>
      <Link to={`/events/booking/${event.id}`}>Book Event</Link>
    </div>
  );
};

export default EventDetailsPage;
