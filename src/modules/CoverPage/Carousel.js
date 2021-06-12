import React from "react";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "./Carousel.scss";

function Carousel(props) {
  const content = props.content;
  const scssClass = "Carousel";
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      className={`${scssClass}--img`}
      onDragStart={handleDragStart}
    />,
    <img
      className={`${scssClass}--img`}
      onDragStart={handleDragStart}
    />,
    <img
      className={`${scssClass}--img`}
      onDragStart={handleDragStart}
    />,
  ];

  return (
    <AliceCarousel
      animationDuration="1000"
      autoPlay
      autoPlayInterval="2000"
      disableButtonsControls
      infinite
      mouseTracking
      items={items}
    />
  );
}

export default Carousel;
