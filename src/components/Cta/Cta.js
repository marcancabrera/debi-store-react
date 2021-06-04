import React from "react";

import Icon from "../Icon/Icon";
import "./Cta.scss";

function Cta(props) {
  const scssClass = "Cta";
  const content = props.icon ? (
    <Icon icon={props.icon} type={props.iconType} />
  ) : (
    props.label
  );

  return (
    <button className={`${scssClass} ${scssClass}--${props.type}`}>
      {content}
    </button>
  );
}

export default Cta;
