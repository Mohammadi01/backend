import React from "react";

export const EventItem = ({ item }) => {
  return (
    <div className="event-card">
      <div>{item.tile}</div>
    </div>
  );
};
