/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer.js";
//import Navigation from "../components/Navigation/nav.js";

function Contact() {
    return (
        <div>
            <Nav />
            <div class="background container">
                <h2 class="text-center">Get in touch with me</h2>
                <h3 class="text-center">Phone-Number: <span>1-978-526-4851</span></h3>
                <h3 class="text-center">Email: <span>andresaaramirez730@gmail.com</span></h3>
                <h4 class="text-center">Resume:<a href="file:///Users/andresramirez/Downloads/webdev%20resume%20.pdf"></a><span>Web Development Resume</span></h4>

                <form action="MAILTO:andresaaramirez730@gmail.com" method="post" enctype="text/plain">
                    <div class="form-row justify-content-center">
                        <div class="form-group col-md-7">
                            <label for="inputEmail4">Name</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Name" />
                        </div>
                        <div class="form-group col-md-7">
                            <label for="inputPassword4">Email</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="email" />
                        </div>
                        <div class="form-group col-md-7">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="type your message"></textarea>
                        </div>
                        <div class="form-group col-md-7 d-flex justify-content-between">
                            <button class="btn btn-primary" type="submit">Submit</button>
                            <div class="form">
                                <a href="https://www.instagram.com/aramirez2142/" target="_blank" rel="noreferrer"><i class="fab fa-instagram-square" style={{"font-size" : "60px"}}></i></a>
                                <a href="https://github.com/ARam2142" target="_blank" rel="noreferrer"><i class="fab fa-github-square" style={{"font-size" : "60px"}}></i></a>
                                <a href="https://www.linkedin.com/in/andres-ramirez-8b07487b/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin" style={{"font-size" : "60px"}}></i></a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;