import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail"
import AppContent from "./content/app-content";

const ROUTES = {
  home: "/",
};

class App extends Component {
  render() {
    const APP_CONTENT = AppContent;

    return (
      <Router>
        <Switch>
          <Route path={ROUTES.home} component={Home}>
            {/* <Home content={APP_CONTENT} /> */}
            <ProductDetail content={APP_CONTENT}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
