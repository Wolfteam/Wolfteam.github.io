import React from 'react'
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import MiraiNotesPrivacy from './MiraiNotesPrivacy';
import MyExpensesPrivacy from './MyExpensesPrivacy';

function Privacies() {
    return <section id="privacy_policy" className="content-section text-center">
        <Container>
            <Row>
                <Col md={12}>
                    <h2>Privacy policy for the apps that require it</h2>
                </Col>
            </Row>
            <Accordion>
                <Row className="mb-3">
                    <Col md={12}>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="btn btn-default btn-lg">
                            Mirai Notes Privacy Policy
                        </Accordion.Toggle>
                        {' '}
                        <Accordion.Toggle as={Button} variant="link" eventKey="1" className="btn btn-default btn-lg">
                            My Expenses Policy
                        </Accordion.Toggle>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Accordion.Collapse eventKey="0">
                            <MiraiNotesPrivacy />
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1">
                            <MyExpensesPrivacy />
                        </Accordion.Collapse>
                    </Col>
                </Row>
            </Accordion>
        </Container>
    </section>
}

export default Privacies;