import { Route, Routes } from "react-router-dom";
import "./App.css";
import EventPage from "./assets/Pages/EventPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EventPage />} />
      </Routes>
    </>
  );
}
