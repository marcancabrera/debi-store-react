import React from "react";

import image from "../../images/profile.png"
import "./Detail.scss";

function Detail(props) {
  const content = props.content;
  const scssClass = "Detail";

  const Info = () => {
    return (
      <div className={`${scssClass}-info`}>
        <h3>{content.name}</h3>
        <h5>{content.description}</h5>
        <hr />
        <h3>{content.price}</h3>
      </div>
    );
  };

  const Buttons = () => {
    return (
      <div className={`${scssClass}-buttons`}>
        <button>1</button>
        <button>Agregar producto</button>
        <hr />
        <button>Zonas y costo por delivery</button>
      </div>
    );
  };

  const LeftSide = () => {
    return (
      <div>
        {Info()}
        {Buttons()}
      </div>
    );
  };

  const RightSide = () => {
    return (
      <div className={`${scssClass}-container-image`}>
        <img className={`${scssClass}-image`} src={image} alt={content.name} />
      </div>
    );
  };

  return (
    <div className="grid-detail">
      {RightSide()}
      {LeftSide()}
    </div>
  );
}

export default Detail;
