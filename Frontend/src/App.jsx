import { Route, Routes } from "react-router-dom";
import "./App.css";
import EventPage from "./assets/Pages/EventPage";
import EventDetailsPage from "./assets/Pages/EventDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
