import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

//project pictures
import flickthedeck from "../../img/flick-the-deck.png";
import weather from "../../img/weather.png";
import quiz from "../../img/mainscreenquiz.png";
import empgen from "../../img/employeegen.png";
import burger from "../../img/burgerapp.png";
import cleanhackers from "../../img/cleanhackers.png";

//local css
import "./projects.css";
// import "../App.css"

class Projects extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <h2 className="text-center display-4 text-white bg-dark">Projects</h2>
                    <div className="row row-cols-1 row-cols-md-2 portfolio">
                        <div className="col mb-4">
                            <div className="card">
                                <img src={flickthedeck} height="250" width="250" className="card-img-top" alt="Flick-the-Deck" />
                                <div className="card-body" style={{ backgroundColor: "grey" }}>
                                    <h5 className="card-title text-center"><a href="https://mwoodervin.github.io/Flick-the-Deck/">Flick-the-Deck</a></h5>
                                    <p className="card-text text-center"><a href="https://github.com/ARam2142/Flick-the-Deck">View Code</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={weather} height="250" width="250" className="card-img-top" alt="Weather-DashBoard" />
                                <div className="card-body" style={{ backgroundColor: "grey"  }}>
                                    <h5 className="card-title text-center"><a href="https://aram2142.github.io/Weather-DashBoard/">Weather-Dashboard</a></h5>
                                    <p className="card-text text-center"><a href="https://github.com/ARam2142/Weather-DashBoard">View Code</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={quiz} height="250" width="250" className="card-img-top" alt="Javascript-Code-Quiz" />
                                <div className="card-body" style={{ backgroundColor: "grey"  }}>
                                    <h5 className="card-title text-center "><a href="https://aram2142.github.io/Javascript-Code-Quiz/">Code Quiz</a></h5>
                                    <p className="card-text text-center"><a href="https://github.com/ARam2142/Javascript-Code-Quiz">View Code</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={empgen} height="250" width="250" className="card-img-top" alt="employee-generator" />
                                <div className="card-body" style={{ backgroundColor: "grey"  }}>
                                    <h5 className="card-title text-center"><a href="https://github.com/ARam2142/Employee-Summary">Template Engine-Employee Profile Generator</a></h5>
                                    <p className="card-text text-center"><a href="https://github.com/ARam2142/Employee-Summary/blob/master/app.js">View Code</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={burger} height="250" width="250" className="card-img-top" alt="burger app" />
                                <div className="card-body" style={{ backgroundColor: "grey"  }}>
                                    <h5 className="card-title text-center"><a href="https://cryptic-shelf-77263.herokuapp.com/">Eat-Da-Burger-Node-Handlebars-Application</a></h5>
                                    <p className="card-text text-center"><a href="https://github.com/ARam2142/Eat-Da-Burger-Node-Handlebars-Application">View Code</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={cleanhackers} height="250" width="250" className="card-img-top" alt="burger app" />
                                <div className="card-body" style={{ backgroundColor: "grey"  }}>
                                    <h5 className="card-title text-center"><a href="https://whispering-castle-57159.herokuapp.com/">Outdoor Adventure Buddies</a></h5>
                                    <p className="card-text text-center"><a href="https://github.com/dylanbest15/Outdoor-Adventure-Buddies">View Code</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Projects;