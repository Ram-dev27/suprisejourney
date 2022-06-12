import React, { useEffect, useState } from "react";
import { suprise } from "../../../strings";
import styles from "../EventDescriptionPage/eventDescriptionPage.module.css";

const EventDescriptionPage = () => {
  const params = new URLSearchParams(window.location.search);
  const EventId = params.get("eventID");
  const [data, setData] = useState(null);

  useEffect(() => {
    const singleEvent = suprise.filter(
      (data) => data.EventId === Number(EventId)
    );
    setData(singleEvent);
  }, []);

  return (
    <>
      {data?.map((data) => {
        return (
          <div key={data.EventId} className={styles.descriptionContainer}>
            <div className={styles.descriptionHeading}>{data.EventName}</div>
            <div className={styles.descriptionView}>
              <div><img src={data?.EventImage} alt="EventImage"className={styles.descriptionImage}/></div>
              <div>
                <div className={styles.description} >{`"${data.EventDescription}"`}</div>
                {data.supriseInclusion.map(data=><div className={styles.supriseInclusion}>{data}</div>)}
                <div className={styles.descriptionPrice}><span>Price Amount ₹</span> {data.packageAmount} </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EventDescriptionPage;
