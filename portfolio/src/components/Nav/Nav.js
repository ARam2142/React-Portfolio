import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav class="navbar navbar-light" style={{ 'background-color': '#e3f2fd' }}>
            <span class="nav justify-content-start"><p class="h1 text-secondary"> Andrés Ramírez</p></span>
            <ul class="d-flex nav justify-content-end h4">
                <li class="nav-item">
                    <Link to="/home" className={window.location.pathname === "home" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                        Portfolio
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;