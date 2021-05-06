import React from 'react';
import Card from 'react-bootstrap/Card';
import PhoneEmail from './PhoneEmail';
import SocialMedia from './SocialMedia';

function CardSkeleton() {

    return (
        <Card bg="primary" style={{ 'maxWidth': '28rem', "margin": 'auto' }}>
            <Card.Header as="h5">Contact</Card.Header>
            <Card.Body>
                <PhoneEmail />
                <SocialMedia />
            </Card.Body>
        </Card>
    )

}
export default CardSkeleton;