import React, { Component } from "react";
import About from "./About";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Home from "./Home";

import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <Router>
        <div className="main">
          <Route
            render={({ location }) => {
              return (
                <div>
                  <Navbar />
                  <TransitionGroup component={null}>
                    <CSSTransition
                    // key={location.key}
                    // classNames="animation"
                    // timeout={1000}
                    >
                      <Switch>
                        <Route
                          exact
                          path={["/", "/home"]}
                          render={props => <Home />}
                        />
                        <Route path="/about" render={props => <About />} />
                        <Route path="/contact" render={props => <Contact />} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </div>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
