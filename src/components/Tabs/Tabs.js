import React from "react";

import "./Tabs.scss";

function Tabs(props) {
  const content = props;
  const scssClass = "Tabs";

  const TabList = () => {
    return content.tabs.map((tab, index) => {
      return (
        <li key={index} className={`${scssClass}-item`}>
          <a href={tab.url}>{tab.label}</a>
        </li>
      );
    });
  };

  return (
    <div className={`${scssClass}`}>
      <ul className={`${scssClass}-list`}>{TabList()}</ul>
    </div>
  );
}

export default Tabs;
