import React from "react";

import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import nav from "../../images/nav.svg";
import search from "../../images/search.svg";
import shoppingcart from "../../images/shoppingcart.svg";
import shoppingcartwhite from "../../images/shoppingcartwhite.svg";
import debi from "../../images/debi.svg";
import whatsapp from "../../images/whatsapp.svg";

import "./Icon.scss";

function Icon(props) {
  const scssClass = "Icon";
  const icons = {
    'instagram': instagram,
    'facebook': facebook,
    'nav': nav,
    'search': search,
    'shoppingcart': shoppingcart,
    'shoppingcartwhite': shoppingcartwhite,
    'debi': debi,
    'whatsapp': whatsapp,
  };

  return (
    <img
      className={`${scssClass} ${scssClass}--${props.type}`}
      src={icons[props.icon]} alt={props.icon}
    />
  );
}

export default Icon;
