import React, { Component } from "react";

import Carousel from "../modules/CoverPage/Carousel";
import Nav from "../components/Nav/Nav";

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
      </div>
    );
  }
}

export default Home;
