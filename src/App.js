import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Upgrade from "./Components/Upgrade";
import Redirect from "./Components/Redirect";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/upgrade" component={Upgrade} />
          <Route component={Redirect} />
        </Switch>
      </Router>
    );
  }
}

export default App;
