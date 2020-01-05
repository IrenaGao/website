import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Content(props) {

    return(
        <Container fluid={true}>
            <Row className="ml-5">
                <Col className="d-inline" md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );

}

export default Content;
