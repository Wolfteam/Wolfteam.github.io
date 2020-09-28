import React from 'react';
import { Col, Row } from 'react-bootstrap';
import GithubApp from '../models/githubapp.model';

function Application(props: GithubApp): React.ReactElement {
    return <Col md={4} className="app-container" style={{ margin: '30px 0px' }}>
        <Row className="space-between-img">
            <Col md={12}>
                <img src={props.img} className="img-fluid" />
            </Col>
        </Row>
        <p>{props.description}</p>
        <div>
            <a href={props.link} className="btn btn-default btn-lg">{props.name}</a>
        </div>
    </Col>;
}

export default Application;