import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../app/views/Header/Header";
import Home from "../app/views/Home/Home";
import EventListPage from "../app/views/EventListPage/EventListPage";
import EventDescriptionPage from "../app/views/EventDescriptionPage/EventDescriptionPage";
import Footer from "../app/views/Footer/Footer";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="eventList" element={<EventListPage />} />
          <Route path="eventDescription" element={<EventDescriptionPage />} />
          {/* <Route path="/" element={<Footer />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default MainRoutes;
