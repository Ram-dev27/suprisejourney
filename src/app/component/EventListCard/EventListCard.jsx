import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./eventListCard.module.css";

const EventListCard = ({ data }) => {
  const navigate = useNavigate();
  const handleCardOnclick = () => {
    navigate(`/eventDescription?eventID=${data.EventId}`);
  };
  return (
    <div
      className={styles.eventCardContainer}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <img src={data.EventImage} alt="eventImage" onClick={handleCardOnclick} />
      <div onClick={handleCardOnclick}>{data.EventName}</div>
    </div>
  );
};

export default EventListCard;
