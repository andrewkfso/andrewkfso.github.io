import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ProjectCard.css"; // Import the CSS file

export default function ProjectCard({ cardTitle, cardImage, bodyText, buttonText, href }) {
    return (
        <Card className="project-card card-font">
            <Card.Img variant="top" src={cardImage} className="card-image" />
            <Card.Body className="card-body">
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text className="card-text">
                    {bodyText}
                </Card.Text>
                <Button variant="primary" className="card-button" href={href}>{buttonText}</Button>
            </Card.Body>
        </Card>
    );
}