import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookingEventPage = () => {
  const { navigate } = useNavigate();
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [formData, setFormData] = useState({
    eventId: id,
    firstName: "",
    lastName: "",
    email: "",
    streetName: "",
    postalCode: "",
    city: "",
  });
  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    const res = await fetch(
      `https://eventservice3-aucbb5b8bze5cygv.swedencentral-01.azurewebsites.net/api/Events/${id}`
    );
    if (res.ok) {
      const response = await res.json();
      setEvent(response.result);
      console.log("Evente fetched successfully:", response.result);
    } else {
      console.error("Failed to fetch event");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://bookingservice3-aucbb5b8bze5cygv.swedencentral-01.azurewebsites.net/api/bookings`,
        {
          method: "Post",
          headers: {
            "content-type": "appliation/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) {
        console.error("Booking failed");
      } else {
        console.log("Booking successful");
        navigate("/");
      }
    } catch (err) {
      console.error("Error submitting booking", err);
    }
  };

  return (
    <div>
      <h1>Book Event - {event.title}</h1>
      <div>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Street Name</label>
            <input
              type="text"
              name="streetName"
              value={formData.streetName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <button type="submit">Book Now!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingEventPage;
