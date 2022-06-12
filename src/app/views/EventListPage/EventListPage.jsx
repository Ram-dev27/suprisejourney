import React from "react";
import EventListCard from "../../component/EventListCard/EventListCard";
import { suprise } from "../../../strings";
import styles from "../EventListPage/eventListPage.module.css";

const EventListPage = () => {
  return (
    <div className={styles.EventListContainer}>
      {suprise.map((data) => (
        <EventListCard data={data}/>
      ))}
    </div>
  );
};

export default EventListPage;
