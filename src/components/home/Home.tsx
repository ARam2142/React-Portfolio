import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import portfoliopic from "../../img/portfoliopic.jpeg";
import "./home.css";


const Home = () => {
        return (
            <div>
                <Nav />
                <Container>
                    <div className="row">
                        <div className="col-sm-7">
                            <img src={portfoliopic} className="rounded mx-auto d-block" width="300" height="320" alt="img-thumbnail" />
                        </div>

                        <div className="col-sm-5">
                            <div className="card w-80 mx-auto"
                                style={{
                                    backgroundColor: "rgba(29, 26, 218, 0.801)",
                                    color: 'white'
                                }}
                            >
                                <div className="card-body">
                                    <h5 className="card-title text-center">Web Developer</h5>
                                    <p className="card-text">Hola, My name is Andrés, I am graduate from the University of New Hampshire Full Stack Coding Boot Camp.
                                    I have acquired skills in HTML, CSS, Javascript, JQuery, Bootstrap, Node.js, Express, Express Handlebars, MySQL, sequelize, MongoDB, Mongoose, Typescript and React.
                                    When I am not coding, I like to travel, play video games, and watch movies. While you are here, take a look at my awesome applications that I have created.
                                    If you would like to get to know me more feel free to reach out to me.
                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center icons-menu">
                        {/* <ul>
                            <li><a href="https://github.com/ARam2142"><i ref={goToLinks} className="fab fa-github-square" style={{ fontSize: "60px" }}></i></a></li>
                            <li><a href="https://www.linkedin.com/in/andres-ramirez-8b07487b/"><i ref={goToLinks} className="fab fa-linkedin" style={{ fontSize: "60px" }}></i></a></li>
                            <li><a href="https://www.instagram.com/aramirez2142/"><i ref={goToLinks} className="fab fa-instagram-square" style={{ fontSize: "60px" }}></i></a></li>
                        </ul> */}

                    </div>
                </Container>
            </div>
        )
    }


export default Home;