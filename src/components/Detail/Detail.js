import React from "react";

import "./Detail.scss";

function Detail(props) {
  const content = props.content;
  const scssClass = "Detail";

  const Info = () => {
    return (
      <div className={`${scssClass}-info`}>
        <p>{content.name}</p>
        <p>{content.description}</p>
        <hr />
        <p>{content.price}</p>
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
      <div>
        <img className={`${scssClass}-image`} alt={content.name} />
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
