import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer.js";
import Container from "./components/Container/Container.js";
import Nav from "./components/Nav/Nav.js";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Container/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
