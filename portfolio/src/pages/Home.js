 import React from "react";
import Nav from "../components/Nav/Nav.js";
import Footer from "../components/Footer/Footer.js";
import Container from "../components/Container/Container.js";
import portfoliopic from "../img/portfoliopic.jpeg";
import "../assets/home.css";
//import Helmet from "react-helmet";

function Home(props) {
    // useEffect(() => {
    //     document.querySelector('body').style.backgroundImage = '../img/sevillapic.jpeg';
    //  }, []);
     //console.log(document.querySelector('body'));

    return (
        <div>
            {/* <Fragment>
            <Helmet>
                    {`
                        <body style="background-image: linear-gradient(
                            rgba(71, 37, 20, 0.445),
                            rgba(8, 119, 58, 0.212)
                            
                            )"/>
                    `}
                        <style>
                    {`
                        body {
                            background-image: 
                            linear-gradient(
                                rgba(71, 37, 20, 0.445),
                                rgba(8, 119, 58, 0.212)
                                
                                ),
                               url('../img/sevillapic.jpeg');
                               background-repeat: no-repeat;
                               background-attachment: fixed;
                               background-size: cover;
                        }
                    `}
                </style>
            </Helmet>
            </Fragment> */}
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
                                <p className="card-text">Hola, My name is Andrés, I am a full stack web development student at the University of New Hampshire.
                                Since my early days at college, I have always had a high interest in tech or anything related to computers.
                                Aside from work and school, I love traveling, swimming, video games, baseball, and movies.
                                While you are on this page feel free to take a look at my projects that I have designed, they are awesome!
                                    My projects have been designed with HTML, CSS, Bootstrap, Javascript, and JQuery.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center icons">
                    <div className="col-sm-1">
                        <a href="https://github.com/ARam2142"><i target="_blank" className="fab fa-github-square" style={{ fontSize: "60px" }}></i></a>
                    </div>
                    <div className="col-sm-1">
                        <a href="https://www.linkedin.com/in/andres-ramirez-8b07487b/"><i target="_blank" className="fab fa-linkedin" style={{ fontSize: "60px" }}></i></a>
                    </div>
                    <div className="col-sm-1">
                        <a href="https://www.instagram.com/aramirez2142/"><i target="_blank" className="fab fa-instagram-square" style={{ fontSize: "60px" }}></i></a>
                    </div>
                </div>
            </Container>
            <Footer />

        </div>
    )
}

export default Home;