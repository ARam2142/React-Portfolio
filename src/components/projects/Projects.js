import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

//project pictures
import flickthedeck from "../../img/flick-the-deck.png";
import weather from "../../img/weather.png";
import quiz from "../../img/mainscreenquiz.png";
import empgen from "../../img/employeegen.png";
import burger from "../../img/brown burger.png";
import cleanhackers from "../../img/cleanhackers.png";
import ConnectChore from "../../img/connectchore.png"

//local css
import "./projects.css";
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
                                    <p className="card-text text-center">This application will give the user the option to pick a movie of their choice. If you're not satisfied with the option given, shuffle the deck and pick again.</p>
                                    <p className="card-text text-center">Made with HTML, CSS, Materialize, Javascript and jQuery</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={weather} height="250" width="250" className="card-img-top" alt="Weather-DashBoard" />
                                <div className="card-body" style={{ backgroundColor: "grey"  }}>
                                    <h5 className="card-title text-center"><a href="https://aram2142.github.io/Weather-DashBoard/">Weather-Dashboard</a></h5>
                                    <p className="card-text text-center"><a href="https://github.com/ARam2142/Weather-DashBoard">View Code</a></p>
                                    <p className="card-text text-center">The Weather Dashboard provides the current weather and 5 day forcast where ever you are in the world.</p>
                                    <p className="card-text text-center">Made with HTML, CSS, Bootstrap, Javascript, jQuery, and Openweather API</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={quiz} height="250" width="250" className="card-img-top" alt="Javascript-Code-Quiz" />
                                <div className="card-body" style={{ backgroundColor: "grey"  }}>
                                    <h5 className="card-title text-center "><a href="https://aram2142.github.io/Javascript-Code-Quiz/">Code Quiz</a></h5>
                                    <p className="card-text text-center"><a href="https://github.com/ARam2142/Javascript-Code-Quiz">View Code</a></p>
                                    <p className="card-text text-center" >This mock Quiz application features 5 questions about Javascript. It is designed to test your knowledge.</p>
                                    <p className="card-text text-center">Made with HTML, CSS, Bootstrap, and Javascript </p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={empgen} height="250" width="250" className="card-img-top" alt="employee-generator" />
                                <div className="card-body" style={{ backgroundColor: "grey"  }}>
                                    <h5 className="card-title text-center"><a href="https://github.com/ARam2142/Employee-Summary">Employee Profile Generator</a></h5>
                                    <p className="card-text text-center"><a href="https://github.com/ARam2142/Employee-Summary/blob/master/app.js">View Code</a></p>
                                    <p className="card-text text-center">The Employee Profile Generator is an app that will dynamically create a software engineering team.</p>
                                    <p className="card-text text-center">Made with HTML, CSS, Javascript, Node.js, Bootstrap, npm inquirer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={burger} height="250" width="250" className="card-img-top" alt="burger app" />
                                <div className="card-body" style={{ backgroundColor: "grey"  }}>
                                    <h5 className="card-title text-center"><a href="https://cryptic-shelf-77263.herokuapp.com/">Eat-Da-Burger</a></h5>
                                    <p className="card-text text-center"><a href="https://github.com/ARam2142/Eat-Da-Burger-Node-Handlebars-Application">View Code</a></p>
                                    <p className="card-text text-center">Eat-Da-Burger is a mock restaruant menu where users make their own burgers and eat them for dinner.</p>
                                    <p className="card-text text-center">Made with HTML, CSS, Javascript, jQuery, Node Express, Express-Handlebars and MySql</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={cleanhackers} height="250" width="250" className="card-img-top" alt="burger app" />
                                <div className="card-body" style={{ backgroundColor: "grey"  }}>
                                    <h5 className="card-title text-center"><a href="https://whispering-castle-57159.herokuapp.com/">Outdoor Adventure Buddies</a></h5>
                                    <p className="card-text text-center"><a href="https://github.com/dylanbest15/Outdoor-Adventure-Buddies">View Code</a></p>
                                    <p className="card-text text-center">Outdoor Adventure Buddies is a mock travel app that allows users to find friends anywhere in the world.</p>
                                    <p className="card-text text-center">Made with HTML, CSS, Javascript, Bootstrap, Node.js, Express.js, Sequelize, Express-Handlebars, and nodemon</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src={ConnectChore} height="250" width="250" className="card-img-top" alt="connectchore" />
                                <div className="card-body" style={{ backgroundColor: "grey"  }}>
                                    <h5 className="card-title text-center"><a href="https://connectchore.herokuapp.com">ConnectChore</a></h5>
                                    <p className="card-text text-center"><a href="https://github.com/ARam2142/ConnectChore">View Code</a></p>
                                    <p className="card-text text-center">ConnectChore is an app that provides incentives to kids (and adults) for getting chores done by pairing task lists with rewards and includes an integrated game for family members to compete for special prizes.</p>
                                    <p className="card-text text-center">HTML, CSS, Javascript, React, Redux, Mongoose, Express.js, Nodemon, React-Bootstrap, and MongoDB Atlas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            <br></br>
            <br></br>
            <br></br>
            </div>
        )
    }
}

export default Projects;