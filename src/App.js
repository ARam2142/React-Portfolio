//react and redux components
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//components
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
//import Container from "./components/container/Container";

class App extends Component {
  render() {
    return (
      <Router basename="/react-portfolio">
        <div>
          <Nav />
          <Switch >
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
