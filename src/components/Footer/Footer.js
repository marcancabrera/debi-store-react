import React from "react";

import "./Footer.scss";

import Icon from "../Icon/Icon";

function Footer(props) {
  const content = props.content;
  const scssClass = "Footer";
  const iconWpp = "whatsapp";

  const Contact = () => {
    const { icon, numberPhone, availableDays } = content;

    return (
      <div className={`${scssClass}-contact`}>
        <h2>Debi</h2>
        {/* <Icon type="primary" icon={icon} /> */}
        <a href="" className={`${scssClass}-number-phone`}>
          <Icon type="secondary" icon={iconWpp} />
          <p>{numberPhone}</p>
        </a>
        <div className={`${scssClass}-in-box`}>
          <p>{availableDays}</p>
          <p>09:00 a.m. 18:00 p.m.</p>
        </div>
      </div>
    );
  };
  const OnlineStore = () => {
    return content.onlineStore.map((item, index) => {
      return (
        <li key={index} className={`${scssClass}-item`}>
          <a href={item.url}>{item.label}</a>
        </li>
      );
    });
  };

  const AboutMe = () => {
    return content.aboutMe.map((item, index) => {
      return (
        <li key={index} className={`${scssClass}-item`}>
          <a href={item.url}>{item.label}</a>
        </li>
      );
    });
  };

  return (
    <div className={scssClass}>
      <div className="grid-footer">
        {Contact()}
        <ul className={`${scssClass}-list`}>
          <h3>Sobre mí</h3>
          {AboutMe()}
        </ul>
        <ul className={`${scssClass}-list`}>
          <h3>Tienda Online</h3>
          {OnlineStore()}
        </ul>
        <ul className={`${scssClass}-list`}>
          <li className={`${scssClass}-item`}>
            <a href=""><Icon type="secondary" icon="facebook"/></a>
          </li>
          <li className={`${scssClass}-item`}>
            <a href=""><Icon type="secondary" icon="instagram"/></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
