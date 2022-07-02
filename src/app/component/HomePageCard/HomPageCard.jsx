import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../HomePageCard/homePageCard.module.css";

const HomPageCard = ({ data }) => {
  const navigate = useNavigate();
  const handleCardOnclick = () => {
    navigate(`/eventList?categoryId=${data.categoryId}`);
  };
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrap}>
        <img src={data.homeImage} alt="imageWrap" />
      </div>
      <div className={styles.heading}>{data.homeHeading}</div>
      <div className={styles.subText}>{data.homeSubText}</div>
      <div className={styles.button}>
        <button onClick={handleCardOnclick}>Click here!</button>
      </div>
    </div>
  );
};

export default HomPageCard;
