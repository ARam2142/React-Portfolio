import React from "react";
import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer.js";
import flickthedeck from "../img/flick-the-deck.png";
import weather from "../img/weather.png";
import quiz from "../img/mainscreenquiz.png";
import empgen from "../img/employeegen.png";
import burger from "../img/burgerapp.png";
import cleanhackers from "../img/cleanhackers.png";
import "../assets/portfolio.css";

function Portfolio() {
    return (
        <div>
            <Nav />
            <div class="background container">
                <h2 class="text-center display-4 text-white bg-dark">Portfolio</h2>

                <div class="row row-cols-1 row-cols-md-2 portfolio">
                    <div class="col mb-3">
                        <div class="card">
                            <img src={ flickthedeck } height="200" width="250" class="card-img-top" alt="Flick-the-Deck" />
                            <div class="card-body" style={{"backgroundColor" : "black"}}>
                                <h5 class="card-title text-center"><a href="https://mwoodervin.github.io/Flick-the-Deck/">Flick-the-Deck</a></h5>
                                <a href="https://github.com/ARam2142/Flick-the-Deck"><p class="card-text text-center">View Code</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                            <img src={ weather } height="200" width="250" class="card-img-top" alt="Weather-DashBoard" />
                            <div class="card-body" style={{"backgroundColor" : "black"}}>
                                <h5 class="card-title text-center"><a href="https://aram2142.github.io/Weather-DashBoard/">Weather-Dashboard</a></h5>
                                <a href="https://github.com/ARam2142/Weather-DashBoard"><p class="card-text text-center">View Code</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                            <img src={ quiz } height="200" width="250" class="card-img-top" alt="Javascript-Code-Quiz" />
                            <div class="card-body" style={{"backgroundColor": "black"}}>
                                <h5 class="card-title text-center "><a href="https://aram2142.github.io/Javascript-Code-Quiz/">Code Quiz</a></h5>
                                <a href="https://github.com/ARam2142/Javascript-Code-Quiz"><p class="card-text text-center">View Code</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                            <img src={ empgen } height="200" width="250" class="card-img-top" alt="employee-generator" />
                            <div class="card-body" style={{"backgroundColor" : "black"}}>
                                <h5 class="card-title text-center"><a href="https://github.com/ARam2142/Employee-Summary">Template Engine-Employee Profile Generator</a></h5>
                                <a href="https://github.com/ARam2142/Employee-Summary/blob/master/app.js"><p class="card-text text-center">View Code</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                            <img src={ burger } height="200" width="250" class="card-img-top" alt="burger app" />
                            <div class="card-body" style={{"backgroundColor": "black"}}>
                                <h5 class="card-title text-center"><a href="https://cryptic-shelf-77263.herokuapp.com/">Eat-Da-Burger-Node-Handlebars-Application</a></h5>
                                <a href="https://github.com/ARam2142/Eat-Da-Burger-Node-Handlebars-Application"><p class="card-text text-center">View Code</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card">
                            <img src={ cleanhackers } height="200" width="250" class="card-img-top" alt="burger app" />
                            <div class="card-body" style={{"backgroundColor": "black"}}>
                                <h5 class="card-title text-center"><a href="https://whispering-castle-57159.herokuapp.com/">Outdoor Adventure Buddies</a></h5>
                                <a href="https://github.com/dylanbest15/Outdoor-Adventure-Buddies"><p class="card-text text-center">View Code</p></a>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;