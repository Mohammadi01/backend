import React from "react";
import { useParams } from "react-router-dom";
const EventDetailsPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const getEvents = async () => {

    const res = await fetch(
      `https://eventservice3-aucbb5b8bze5cygv.swedencentral-01.azurewebsites.net/api/Events/${id}`
    );
    if (res.ok) {
      const response = await res.json();
      setEvents(response.result);
    } else {
      console.error("Failed to fetch events");
    }
  };
  useEffect(() => {
    getEvents();
  }, []);
  return <div>{id}</div>;
};

export default EventDetailsPage;
