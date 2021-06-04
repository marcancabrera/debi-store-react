import React from "react";

import Cta from "../Cta/Cta";
import "./Nav.scss";

function Nav(props) {
  const content = props.content;
  const scssClass = "Nav";
  const uiConfig = {
    cta: "cuaternary",
    icon: "secondary",
  };

  const Tabs = () => {
    return content.items.map((item, index) => {
      return (
        <li key={index} className={`${scssClass}-item`}>
          <a href={item.url}>{item.label}</a>
        </li>
      );
    });
  };

  return (
    <div className={`${scssClass} ${scssClass}--${props.type}`}>
      <div className="grid">
        <div className={`${scssClass}-button`}>
          <Cta
            type={uiConfig.cta}
            icon={content.icon}
            iconType={uiConfig.icon}
          />
        </div>
        <ul className={`${scssClass}-list`}>{Tabs()}</ul>
      </div>
    </div>
  );
}

export default Nav;
