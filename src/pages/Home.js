import React, { Component } from "react";

import Carousel from "../modules/CoverPage/Carousel";
import Categories from "../modules/Categories/Categories";
import Nav from "../components/Nav/Nav";
import Product from "../components/product/Product";

class Home extends Component {
  render() {
    const content = this.props.content;
    const scssClass = "Home";
    const uiConfig = {
      nav: "light",
      quote: "primary",
    };

    return (
      <div className={scssClass}>
        <Nav content={content.nav} type={uiConfig.quote} />
        <Carousel content={content.coverPage} />
        <Categories content={content.categories} />
        <Product content={content.products} />
      </div>
    );
  }
}

export default Home;
