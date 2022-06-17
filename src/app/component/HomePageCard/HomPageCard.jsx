import React from "react";
import cabanaSetup from "../../assets/cabanaSetup.jpeg";
import styles from "../HomePageCard/homePageCard.module.css";

const HomPageCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageWrap}>
        <img src={cabanaSetup} alt="imageWrap" />
      </div>
      <div className={styles.heading}>Marriage Arrangements</div>
      <div className={styles.subText}>
        "Marriages are made in heaven 💕Marriage decorations are made by us🎉."
      </div>
      <div className={styles.button}>
        <button>Get in touch</button>
      </div>
    </div>
  );
};

export default HomPageCard;
