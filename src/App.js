import React, { Component } from "react";

//components
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/index";
//import Contact from "./pages/contact/index";
//import About from "./pages/about/index";

class App extends Component {
  render() {
    return (
      <Router>
       
          <Route exact path="/" component={Home} />

          {/* Create a 404 Page If route not found,
            currently being Redirected to Home Page */}

      </Router>
    );
  }
}

export default App;
