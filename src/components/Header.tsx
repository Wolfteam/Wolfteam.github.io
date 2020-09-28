import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Header() {
    return <header className="masthead">
        <div className="intro-body">
            <Container>
                <Row>
                    <h2>.Net apps made with love :)<FontAwesomeIcon icon={faHeart} size="2x" color="red" />
                    </h2>
                </Row>
            </Container>
        </div>
    </header>;
}

export default Header;