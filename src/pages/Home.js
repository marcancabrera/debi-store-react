import React, { Component } from "react";

import CoverPage from "../modules/CoverPage/CoverPage";
import Nav from "../components/Nav/Nav";

class Home extends Component {
  render() {
    const content = this.props.content;
    const scssClass = "Home";
    const uiConfig = {
      'nav': "light",
      'quote': "primary",
    };
    console.log('all good bro');

    return (
      <div className={scssClass}>
        <CoverPage content={content.coverPage} />
        <Nav content={content.nav} type={uiConfig.nav} />
      </div>
    );
  }
}

export default Home;
