import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Container from 'react-bootstrap/Container';
import ProfilePic from '../assets/irenaresize.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//<img className="float:left" src={ProfilePic}/>
function AboutPage(props){
    return(
        <div>
            <Hero title={props.title} />
            <Container fluid={true}>
                <Row className="offset-md-2">
                    <div className="col-md-3">
                        <img className="img-responsive" alt="Responsive image"src={ProfilePic}/>
                    </div>
                    <div class="col-md-9">
                        <Content className="col-md-4">
                            <p>Hi! My name is Irena and I'm a junior at Cornell studying Information Science hoping to concentrate in behavioral science and data science.</p>
                            <p>I am deeply interested in applying these fields to the environmental or healthcare sector and am flexible in exploring marketing, product design, or front-end development.</p>
                            <p>My main goal is to work in a field with social impact, and I've previously interned @MicroDot and <a href="https://www.dynalec.com/" class="none">@Dynalec Corp</a>.</p>

                            <p>Outside of my work, I love socializing with others and exploring Ithaca, especially the beautiful waterfalls and gorges.</p>

                            <p>Feel free to reach out to me anytime about my interests at my <a href="mailto:ijg24@cornell.edu" class="none">email</a> or <a href="https://www.linkedin.com/in/irenagao/" class="none">linkedin</a>, I look forward to connecting with you!</p>
                        </Content>
                    </div>
                </Row>
            </Container>
        </div>

    );
}
export default AboutPage;
