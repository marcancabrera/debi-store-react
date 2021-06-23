import React, { Component } from "react";

import Carousel from "../modules/CoverPage/Carousel";
import Categories from "../modules/Categories/Categories";
import Nav from "../components/Nav/Nav";
import Product from "../components/product/Product";
import Footer from "../components/Footer/Footer";

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
        <Footer content={content.footer} />
      </div>
    );
  }
}

export default Home;
