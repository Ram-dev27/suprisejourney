import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./eventListCard.module.css";

const EventListCard = ({ data,categoryId }) => {
  const navigate = useNavigate();
  const handleCardOnclick = () => {
    navigate(`/eventDescription?categoryId=${categoryId}&&eventId=${data?.EventId}`);
  };
  console.log(data,"/..")
  return (
    <div
      key={data?.key}
      className={styles.eventCardContainer}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <img src={data?.EventImage} alt="eventImage" onClick={handleCardOnclick} />
      <div onClick={handleCardOnclick}>{data?.EventName}</div>
    </div>
  );
};

export default EventListCard;
