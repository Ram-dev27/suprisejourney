import React from "react";
import HomPageCard from "../../component/HomePageCard/HomPageCard";
import { category } from "../../../strings";

const Home = () => {
  return (
    <div>
      {category.map((data) => (
        <HomPageCard data={data} />
      ))}
    </div>
  );
};

export default Home;
