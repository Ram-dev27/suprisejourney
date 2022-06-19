import React from "react";

import HomPageCard from "../../component/HomePageCard/HomPageCard";
import Header from "../Header/Header";
import suprise from "../../assets/Icons/suprise.png";
import { category } from "../../../strings";

import styles from "../Home/home.module.css";

const Home = () => {
  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Header />
      <div className={styles.homeMain}>
        <img className={styles.homeImage} src={suprise} alt="homepageImage" />
        <button onClick={() => handleClick()}>Contact Us</button>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          in laudantium laborum molestias error soluta atque nesciunt similique,
          dignissimos deleniti ut ullam nobis id officiis.
        </p>
      </div>
      <h4 className={styles.homeHeading}>What we do for you !</h4>
      <div className={styles.cardContainer}>
        {category.map((data) => (
          <HomPageCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
