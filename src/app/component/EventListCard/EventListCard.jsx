import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./eventListCard.module.css";

const EventListCard = ({ data, categoryId }) => {
  const navigate = useNavigate();
  const handleCardOnclick = () => {
    navigate(
      `/eventDescription?categoryId=${categoryId}&&eventId=${data?.EventId}`
    );
  };
  console.log(data, "/..");
  return (
    <div
      key={data?.key}
      className={styles.eventCardContainer}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <img
        src={data?.EventImage[0]}
        alt="eventImage"
      />
      <div>
        <div className={styles.eventName} >{data?.EventName}</div>
        <button className={styles.viewMore} onClick={handleCardOnclick} >View More</button>
      </div>
    </div>
  );
};

export default EventListCard;
