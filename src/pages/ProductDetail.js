import React, { Component } from "react";

import Carousel from "../modules/CoverPage/Carousel";
import Categories from "../modules/Categories/Categories";
import Detail from "../components/Detail/Detail"
import Nav from "../components/Nav/Nav";
import Product from "../components/product/Product";
import Footer from "../components/Footer/Footer";

class ProductDetail extends Component {
  render() {
    const content = this.props.content;
    const scssClass = "ProductDetail";
    const uiConfig = {
      nav: "light",
      quote: "primary",
    };

    return (
      <div className={scssClass}>
        <Nav content={content.nav} type={uiConfig.quote} />
        <Detail content={content.details} />
        <Footer content={content.footer} />
      </div>
    );
  }
}

export default ProductDetail;
