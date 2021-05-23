import React from "react";
import Container from "react-bootstrap/Container";
import ProfilePic from './ProfilePic';
import AboutMe from './AboutMe'
import "./home.css";

//const ProfilePic = lazy(() => import('./ProfilePic'))

const Home = () => {
        return (
            <div>
                <Container>
                    <div className="row">
                        <ProfilePic />
                        <AboutMe />
                    </div>
                    {/* <div className="row justify-content-center icons-menu">
                        <ul>
                            <li><a href="https://github.com/ARam2142"><i ref={goToLinks} className="fab fa-github-square" style={{ fontSize: "60px" }}></i></a></li>
                            <li><a href="https://www.linkedin.com/in/andres-ramirez-8b07487b/"><i ref={goToLinks} className="fab fa-linkedin" style={{ fontSize: "60px" }}></i></a></li>
                            <li><a href="https://www.instagram.com/aramirez2142/"><i ref={goToLinks} className="fab fa-instagram-square" style={{ fontSize: "60px" }}></i></a></li>
                        </ul>

                    </div> */}
                </Container>
            </div>
        )
    }


export default Home;