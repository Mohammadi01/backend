import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventList from "../components/EventList";

const EventPage = () => {
  return (
    <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>
        <p>hello</p>
        <EventList />
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;
