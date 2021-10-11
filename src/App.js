import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import ShopRoutes from "./shop";
import Navbar from "./components/Navbar";

const AppHome = (props) => {
  let name = "Wahab Awudu";

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/shop" component={ShopRoutes} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppHome;
