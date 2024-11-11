import React from "react";
import ProfilePicture from "../components/ProfilePicture";
import {Container, Row, Col} from 'react-bootstrap';
import './LandingPage.css'

export default function LandingPage() {
    return (
        <Container className=''>
            <Row>
                <Col sm={4}  className='d-flex align-items-center'>
                    <ProfilePicture />
                </Col>
                <Col sm={8} className='d-flex align-items-center'>
                    <p className="custom-font">
                        <h2>HELLO</h2>
                        <h1>I'm Andrew So</h1>
                        A driven and ambitious recent graduate of Bioinformatics and Biology from the University of Waterloo. 
                        I have a strong background in science but my true calling is as a software engineer.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}