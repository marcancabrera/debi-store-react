import React from "react";
import './Product.scss';

function Product(props) {
  const content = props.content;
  const scssClass = "Product";

  const Product = (info) => {
    return (
      <div className= {`${scssClass}-container`}>
        <img className= {`${scssClass}-image`}  />
        <p className={`${scssClass}-brand`}>{info.brand}</p>
        <h4 className={`${scssClass}-name`}>{info.name}</h4>
        <h5 className={`${scssClass}-price`}>{info.price}</h5>
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
