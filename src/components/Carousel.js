import React from 'react';

import Card from '../components/Card';

import microdot from '../assets/microdotlogo.png';
import dynalec from '../assets/dynalec.png';
import dwb from '../assets/dwblogo.png';
import snapchat from '../assets/snapchat.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MicrodotPage from '../pages/Microdot';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Microdot',
                    subTitle: 'StartUp',
                    imgSrc: microdot,
                    link: '/microdot',
                    selected: false
                },
                {
                    id: 1,
                    title: 'SnapChat Case Study',
                    subTitle: 'Personal Project',
                    imgSrc: snapchat,
                    link: 'https://paper.dropbox.com/doc/Snapchat-Case-Study--AoI7HM9Zs9xXS9SkNheGGyxVAQ-kXklYQeqbnZvI3arlVpZf',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Doctor Without Border Cornell Chapter',
                    subTitle: 'Personal Project',
                    imgSrc: dwb,
                    link: '/Dwb',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    handleCardHover = (id, card) => {
        //Detect Hover Gesture
        //Iterate Through Card List and map Overlay to each card
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} />
        })
    }


    render() {
        return(

            <Container fluid={true} >
                <Row className="justify-content-around ">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
