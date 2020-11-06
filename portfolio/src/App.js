import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
//import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <Router>
      <div>        
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
