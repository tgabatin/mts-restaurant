import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
    return (
        <Container>
            <Row>
                <Col>
                    <h5>Address</h5>
                    <p>123 Main Street, Anytown USA</p>
                </Col>
                <Col>
                    <h5>Contact</h5>
                    <p>Phone: 123-456-7890</p>
                </Col>
                <Col>
                    <h5>Hours</h5>
                    <p>Monday - Friday: 9AM - 5PM</p>
                    <p>Saturday: 10AM to 2PM</p>
                    <p>Sunday: Closed</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;