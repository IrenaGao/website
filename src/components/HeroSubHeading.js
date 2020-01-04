import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeroSubHeading(props){
    return(
        <Jumbotron className="bg-transparent ml-5 mt-5 p-0">
            <Container fluid={true}>
                <Row className="justify-content-center ml-5">
                    <Col md={8} sm={12}>
                        <h4 style={{ color: '#00A3FF' }} className="display-5 font-weight-semibold justift-content-center">{props.children}</h4>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
export default HeroSubHeading
