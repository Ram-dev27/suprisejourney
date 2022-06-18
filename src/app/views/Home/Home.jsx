import React from "react";
import Footer from "../Footer/Footer";
import HomPageCard from "../../component/HomePageCard/HomPageCard";
import { homeCard } from "../../../strings";

const Home = () => {
  return (
    <div>
      Home
      {homeCard.map((data) => (
        <HomPageCard data={data} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
