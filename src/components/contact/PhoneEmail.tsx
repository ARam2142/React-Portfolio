import * as React from "react";
import Card from 'react-bootstrap/Card';
import ContactData from '../../utils/ContactData';
import "./contact.css";

export default function ContactCard() {
    return (
        <div>
            <Card.Text>
                Phone: <span>{ContactData[0].phone}</span>
            </Card.Text>
            <Card.Text>
                Email: <span>{ContactData[0].email}</span>
            </Card.Text>
        </div>

    )
}