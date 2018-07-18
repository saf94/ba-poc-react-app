import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Upgrade from "./Components/Upgrade";
import ErrorPage from "./Components/ErrorPage";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/upgrade">
                    Upgrade
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/redirect">
                    404 test
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/upgrade" component={Upgrade} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
