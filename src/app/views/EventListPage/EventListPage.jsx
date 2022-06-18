import React, { useEffect, useState } from "react";
import EventListCard from "../../component/EventListCard/EventListCard";
import { category } from "../../../strings";
import styles from "../EventListPage/eventListPage.module.css";

const EventListPage = () => {
  const params = new URLSearchParams(window.location.search);
  const categoryId = params.get("categoryId");
  const [eventsData, setEventsData] = useState([1]);

  useEffect(() => {
    const singleEvent = category.filter(
      (data) => data.categoryId === Number(categoryId)
    );
    setEventsData(singleEvent);
  }, []);

  console.log(eventsData[0].events , "..")

  return (
    <div className={styles.EventListContainer}>
      {eventsData[0]?.events?.map((data, i) => (
        <EventListCard key={i} data={data} categoryId={categoryId}/>
      ))}
    </div>
  );
};

export default EventListPage;
