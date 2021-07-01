import React from "react";

import image from "../../images/profile.png";
import Icon from "../Icon/Icon";

import "./Detail.scss";

function Detail(props) {
  const content = props.content;
  const scssClass = "Detail";
  const icon = "shoppingcartwhite";

  const Info = () => {
    return (
      <div className={`${scssClass}-info`}>
        <h3>{content.name}</h3>
        <h5>{content.description}</h5>
        <hr />
        <p className="price">{content.price}</p>
      </div>
    );
  };

  const Buttons = () => {
    return (
      <div className={`${scssClass}-container-buttons`}>
        <button>1</button>
        <button className={`${scssClass}-button-add`}>
          <Icon type={"secondary"} icon={icon} />
          <h5>AGREGAR</h5>
        </button>
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
    <div className={`${scssClass}`}>
      <div className="grid-detail">
        {RightSide()}
        {LeftSide()}
      </div>
    </div>
  );
}

export default Detail;
