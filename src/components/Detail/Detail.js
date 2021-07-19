import React from "react";

import image from "../../images/test-product.png";
import Icon from "../Icon/Icon";

import "./Detail.scss";

function Detail(props) {
  const content = props.content;
  const scssClass = "Detail";
  const shoppingcartIcon = "shoppingcartwhite";
  const plusIcon = "plus";
  const minusIcon = "minus"

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

  const IncrementButton = () => {
    return (
      <div className={`${scssClass}-incremator-container`}>
        <button className={`${scssClass}-incremator-button`}><Icon type={"secondary"} icon={minusIcon} /></button>
        <input type="text" value="1" className={`${scssClass}-incremator-input`} disabled/>
        <button className={`${scssClass}-incremator-button`}><Icon type={"secondary"} icon={plusIcon} /></button>
      </div>
    );
  }

  const Buttons = () => {
    return (
      <div className={`${scssClass}-container-buttons`}>
        {IncrementButton()}
        <button className={`${scssClass}-button-add`}>
          <Icon type={"secondary"} icon={shoppingcartIcon} />
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
