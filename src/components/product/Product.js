import React from "react";
import './Product.scss';

function Product(props) {
  const content = props.content;
  const scssClass = "Product";

  const Product = (info) => {
    return (
      <div className= {`${scssClass}-content`}>
        <h4 className={`${scssClass}-title h4--dark`}>{info.title}</h4>
        <p className={`${scssClass}-description`}>{info.subtitle}</p>
      </div>
    );
  };

  const Products = () => {
    return content.map((product, index) => {
      return (
        <li key={index} className={`${scssClass}-product`}>
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
