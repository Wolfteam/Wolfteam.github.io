import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub, faPaypal, faDiscord } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Contact() {
    return <section id="contact" className="content-section text-center">
        <Container>
            <Row>
                <Col md={12} className="mx-auto">
                    <h2>Contact</h2>
                    <p>Feel free to contact me</p>
                    <ul className="list-inline banner-social-buttons">
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/efrain-bastidas-ba40aa133/"
                                className="btn btn-default btn-lg">
                                <FontAwesomeIcon icon={faLinkedin} fixedWidth/>
                                <span className="network-name">Linked.in</span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/Wolfteam" className="btn btn-default btn-lg">
                                <FontAwesomeIcon icon={faGithub} fixedWidth/>
                                <span className="network-name">Github</span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="mailto:miraisoft20@gmail.com" className="btn btn-default btn-lg">
                                <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                                <span className="network-name">Mail</span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://paypal.me/wolfteam20" className="btn btn-default btn-lg">
                                <FontAwesomeIcon icon={faPaypal} fixedWidth />
                                <span className="network-name">Paypal</span>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </section>;
}

export default Contact;