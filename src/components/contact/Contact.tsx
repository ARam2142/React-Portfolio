import React from "react";
import Container from "react-bootstrap/Container";
import CardSkeleton from './CardSkeleton';
import "./contact.css";

const Contact = () => {
    return (
        <div>
            <Container>
                <h2 className="text-center display-4 text-white" style={{ paddingTop: "20px" }}>Get in touch with me</h2>
                    <CardSkeleton />
            </Container>
        </div>
    );
}

export default Contact;