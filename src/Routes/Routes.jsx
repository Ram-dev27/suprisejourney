import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../app/views/Home";
import EventListPage from "../app/views/EventListPage/EventListPage";
import EventDescriptionPage from "../app/views/EventDescriptionPage/EventDescriptionPage";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="eventList" element={<EventListPage />} />
        <Route path="eventDescription" element={<EventDescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
