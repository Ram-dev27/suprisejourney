import React from "react";
import HomPageCard from "../../component/HomePageCard/HomPageCard";
import Header from "../Header/Header";
import { category } from "../../../strings";

const Home = () => {
  return (
    <div>
      <Header />
      {category.map((data) => (
        <HomPageCard data={data} />
      ))}
    </div>
  );
};

export default Home;
