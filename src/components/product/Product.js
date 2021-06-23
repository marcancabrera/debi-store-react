import React from "react";

import Icon from "../Icon/Icon";
import "./Product.scss";

function Product(props) {
  const content = props.content;
  const scssClass = "Product";
  const icon = "shoppingcartwhite";

  const Product = (info) => {
    return (
      <div className={`${scssClass}-container`}>
        <img className={`${scssClass}-image`} />
        <div className={`${scssClass}-text`}>
          <p className={`${scssClass}-brand`}>{info.brand}</p>
          <h5 className={`${scssClass}-name`}>{info.name}</h5>
          <h4 className={`${scssClass}-price`}>{info.price}</h4>
        </div>
        <button className={`${scssClass}-button`}>
          <Icon type={"secondary"} icon={icon} />
          <h5>AGREGAR</h5>
        </button>
      </div>
    );
  };

  const Products = () => {
    return content.map((product, index) => {
      return (
        <li key={index} className={`${scssClass}-item`}>
          {Product(product)}
        </li>
      );
    });
  };

  return (
    <div className={scssClass}>
      <ul className={`${scssClass}-products grid-product`}>{Products()}</ul>
    </div>
  );
}

export default Product;
