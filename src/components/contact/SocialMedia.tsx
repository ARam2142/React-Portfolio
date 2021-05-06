import React from 'react';
import ContactData from '../../utils/ContactData';
import "./contact.css";

export default function SocialMedia() {
    return (
        <div className="social-media">
            <ul>
                <li>
                    <a href={ContactData[0].website} target="_blank" rel="noreferrer">
                        <i className="fab fa-github-square" style={{ fontSize: "40px" }}></i>
                    </a>
                </li>
                <li>
                    <a href={ContactData[0].linkedin} target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin" style={{ fontSize: "40px" }}></i>
                    </a>
                </li>
                <li>
                    <a href={ContactData[0].resume} target="_blank" rel="noreferrer">
                        <i className="far fa-file" style={{ fontSize: "40px" }}></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}