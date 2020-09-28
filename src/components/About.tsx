import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function About() {
    return (
        <section id="about" className="content-section text-center">
            <Container>
                <Row>
                    <Col lg={8}>
                        <h2>About me</h2>
                        <p className="intro-text">I'm just a System's Engineer mainly playing with .NET (Desktop, Web and Mobile apps).</p>
                        <p>I also love to watch anime and read manga :D</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;