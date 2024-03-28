import React from "react";
import { Card } from "react-bootstrap";
import me from './me.jpg';

function GitHubCard() {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={me}/>
                <Card.Body>
                    <Card.Title>CoderMalayaiWilson</Card.Title>
                    <Card.Text>My GitHubCard</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard