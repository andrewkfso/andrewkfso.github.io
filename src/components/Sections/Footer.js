import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container className="text-center">
        <Row>
          <Col>
            <h4>Send me a message!</h4>
            <p>
              I enjoy getting to know new people and having a cup of coffee. I'm constantly searching for exciting opportunities. Please find my resume attached below. I look forward to hearing from you!
            </p>
            <p>
              You can reach me at <a href="mailto:so.kf.andrew@gmail.com" className="text-white">so.kf.andrew@gmail.com</a> or <a href="tel:+14168239788" className="text-white">416-823-9788</a>.
            </p>
            <Button href="" target="_blank" className="btn-primary">View Resume</Button>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col>
            <p className="mb-0">Made with HTML, CSS, JavaScript and Bootstrap.</p>
            <p className="mb-0">Developed by Andrew So ©2022.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
