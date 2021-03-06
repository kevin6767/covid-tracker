import React from "react";
import useCards from "../../services/Cards.services";
import Card from "react-bootstrap/Card";

export default function Cards() {
    const confirmed = useCards()


    return (
        <Card border="dark" style={{ width: '10rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>{confirmed}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
