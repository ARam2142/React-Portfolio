import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-light" style={{ backgroundColor : '#e3f2fd' }}>
            <span className="nav justify-content-start"><p className="h1 text-secondary"> Andrés Ramírez</p></span>
            <ul className="d-flex nav justify-content-end h4">
            <li className="nav-item">
                    <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;