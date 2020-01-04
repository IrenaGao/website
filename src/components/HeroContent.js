import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeroContent(props){
    return(
        <Jumbotron className="bg-transparent ml-5 p-0">
            <Container fluid={true}>
                <Row className="justify-content-center ml-5">
                    <Col md={8} sm={12}>
                        <h4 className="display-5 font-weight-light justift-content-center text-wrap">{props.children}</h4>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
export default HeroContent
