import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

function Nav() {
    const [mobile, setMobile] = useState(false);

    const handleClick = () => setMobile(!mobile)

    return (
        <nav className="navbar">
            <h1 className="text-light"> Andrés Ramírez</h1>
            <ul className={mobile ? "nav-links-mobile" : "nav-links"}
                onClick={() => 
                    setMobile(false)}
            >
                <Link to="/home" className={"/home" ? "nav-link active" : "nav-link"}>
                    <li className="list-link">Home</li>
                </Link>
                <Link to="/projects" className={"/projects" ? "nav-link active" : "nav-link"}>
                    <li className="list-link">Projects</li>
                </Link>
                <Link to="/contact" className={"/contact" ? "nav-link active" : "nav-link"}>
                    <li className="list-link">Contact</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon"
                aria-label={'open'}
                onClick={handleClick}
            >
                {mobile ? (
                    <i className="fas fa-times" style={{ "color": 'red' }}></i>
                ) : (
                    <i className="fas fa-bars" style={{ "color": 'blue' }}></i>
                )}
            </button>
        </nav>
    )
}

export default Nav;