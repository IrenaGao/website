import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HeroProject(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        <h2 className="display-5 font-weight-semibold justift-content-center">A digital currency that decays over time aiming to incentivize lagging economies</h2> 
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
export default HeroProject
