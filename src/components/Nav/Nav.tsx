import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

function Nav() {
    const [isMobile, setMobile] = useState(false)
    return (
        <nav className="navbar">
            <h1 className="text-light"> Andrés Ramírez</h1>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={() => setMobile(false)}
            >
                <Link to="/home" className={"/home" ? "nav-link active" : "nav-link"}>
                    <li className="">Home</li>
                </Link>
                <Link to="/projects" className={"/projects" ? "nav-link active" : "nav-link"}>
                    <li className="">Projects</li>
                </Link>
                <Link to="/contact" className={"/contact" ? "nav-link active" : "nav-link"}>
                    <li className="">Contact</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon"
            onClick={()=> {setMobile(!isMobile)}}
            >

                {isMobile ? (
                    <i className="fas fa-times"></i>
                ) : (
                    <i className="fas fa-bars"></i>
                )}
            </button>
        </nav>
    )
}

export default Nav;