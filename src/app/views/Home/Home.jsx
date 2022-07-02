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
        <p className={styles.subtext}>
          Surprisingly surprising some one is the best surprise you can give to
          that someone.This is the right place for you to make your imagination
          come to life. The amount of happiness they express will be more than
          or equal to the efforts you have taken. So why wait come surprise with
          us !
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
