import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Header from "./components/Header/Header.js";
import Container from "./components/Container/Container.js"
import Footer from "./components/Footer/Footer.js";


function App() {
  return (
    <Router>
      <div>
        <Header>
          <Route exact path="/home" component={Home} />
        </Header>
        <Container/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
