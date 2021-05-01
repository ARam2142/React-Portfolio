/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import contactPic from "../../img/portfoliopic.jpeg";
import Card from 'react-bootstrap/Card';
import "./contact.css";

function Contact() {
    return (
        <div>
            <Nav />
            <Container>
                <h2 className="text-center display-4 text-white" style={{paddingTop: "20px"}}>Get in touch with me</h2>

                <Card bg="primary" style={{'maxWidth': '28rem', "margin" : 'auto'}}>
                    <Card.Header as="h5">Contact</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Phone: <span>1-351-444-2871</span>
                        </Card.Text>
                        <Card.Text>
                            Email: <span>andresaaramirez730@gmail.com</span>
                        </Card.Text>
                        <div className="social-media">
                                <ul>
                                    <li>
                                        <a href="https://github.com/ARam2142" target="_blank" rel="noreferrer">
                                            <i className="fab fa-github-square" style={{ fontSize: "40px" }}></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/andres-ramirez-8b07487b/" target="_blank" rel="noreferrer">
                                            <i className="fab fa-linkedin" style={{ fontSize: "40px" }}></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noneferrer" href="https://drive.google.com/file/d/15hVj2gc-AJNOtA-CBQc3mfzmhTghBUr2/view?usp=sharing">
                                            <i className="far fa-file" style={{ fontSize: "40px" }}></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Contact;