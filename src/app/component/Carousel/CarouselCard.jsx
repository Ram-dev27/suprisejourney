/* eslint-disable react/jsx-no-undef */
import React from "react";
import Carousel from "react-elastic-carousel";

import Item from "./Item";

import './carousel.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarouselCard = ({ items }) => {
  console.log(items, "items");
  return (
    <div className="carouselMain">
      <Carousel showArrows={false} breakPoints={breakPoints}>
        {items.map((item, i) => (
          <Item key={i}>
            <img src={item} alt="EventImage" style={{ width: "100%" }} />
          </Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCard;
