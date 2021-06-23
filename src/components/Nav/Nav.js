import React from "react";

import Cta from "../Cta/Cta";
import "./Nav.scss";

function Nav(props) {
  const content = props.content;
  const scssClass = "Nav";
  const uiConfig = {
    ctaMenuButton: "nav-menu-button",
    ctaMenu: "nav-menu",
    ctaMenuLeft: "nav-menu-left",
    ctaLogo: "nav-logo",
    iconPrimary: "primary",
    iconSecondary: "secondary",
    iconTerciary: "terciary",
  };

  const Logo = () => {
    return (
      <div className={`${scssClass}-logo`}>
        <Cta type={uiConfig.ctaLogo} icon={content.logo} iconType={uiConfig.iconPrimary} />
      </div>
    );
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

  const Icons = () => {
    return content.icons.map((icon, index) => {
      return (
        <li key={index} className={`${scssClass}-item-left`}>
          <Cta
            type={uiConfig.ctaMenuLeft}
            icon={icon.icon}
            iconType={uiConfig.iconPrimary}
          />
        </li>
      );
    });
  };

  return (
    <div className={`${scssClass} ${scssClass}--${props.type}`}>
      <div className="grid-nav">
        <div className={`${scssClass}-button`}>
          <Cta
            type={uiConfig.ctaMenuButton}
            icon={content.icon}
            iconType={uiConfig.iconPrimary}
          />
        </div>
        {Logo()}
        <ul className={`${scssClass}-menu-list`}>{Tabs()}</ul>
        <ul className={`${scssClass}-menu-left`}>{Icons()}</ul>
      </div>
    </div>
  );
}

export default Nav;
