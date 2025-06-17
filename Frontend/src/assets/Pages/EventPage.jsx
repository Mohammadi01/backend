import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventPage = () => {
  return (
    <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>
        <EventList></EventList>
      </main>
      <Footer />
    </div>
  );
};

export default EventPage;
