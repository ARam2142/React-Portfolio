/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Resume from "../../resume/webdev_resume.pdf";
import "./contact.css";

class Contact extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <h2 className="text-center">Get in touch with me</h2>
                    <br></br>
                    <div className="contactlist" >
                        <ul className="d-flex justify-content-center">
                            <li><i className="fas fa-phone-square" style={{ fontSize: "60px" }}></i><p>1-351-444-2871</p></li>
                            <li><i className="fas fa-envelope-open-text" style={{ fontSize: "60px" }}></i><p>andresaaramirez730@gmail.com</p></li>
                            <li><i className="far fa-file" style={{ fontSize: "60px" }}></i><p><a href={Resume}> Web Development Resume</a></p></li>
                        </ul>

                    </div>

                    <form action="MAILTO:andresaaramirez730@gmail.com" method="post" encType="text/plain">
                        <div className="form-row justify-content-center">
                            <div className="form-group col-md-7">
                                <label htmlFor="inputEmail4">Name</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-7">
                                <label htmlFor="inputPassword4">Email</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="email" />
                            </div>
                            <div className="form-group col-md-7">
                                <label htmlFor="exampleFormControlTextarea1">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="type your message"></textarea>
                            </div>
                            <div className="form-group col-md-7 d-flex justify-content-between">
                                {/* <Button variant="primary">Submit</Button> */}
                                <button className="btn btn-primary me-md-2" value="Submit" type="submit">Submit</button>
                                <div className="social-media">
                                    <ul>
                                        <li><a href="https://www.instagram.com/aramirez2142/" target="_blank" rel="noreferrer"><i className="fab fa-instagram-square" style={{ fontSize: "60px" }}></i></a></li>
                                        <li><a href="https://github.com/ARam2142" target="_blank" rel="noreferrer"><i className="fab fa-github-square" style={{ fontSize: "60px" }}></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/andres-ramirez-8b07487b/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" style={{ fontSize: "60px" }}></i></a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form>
                </Container>
            </div>
        );
    }
}

export default Contact;