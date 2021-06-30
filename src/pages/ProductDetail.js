import React, { Component } from "react";

import Detail from "../components/Detail/Detail"
import Nav from "../components/Nav/Nav";
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
