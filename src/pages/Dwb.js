import React from 'react';
import Hero from '../components/Hero';
import HeroProject from '../components/HeroProjectDwb';
import HeroHeading from '../components/HeroHeading';
import HeroContent from '../components/HeroContent';
import HeroSubHeading from '../components/HeroSubHeading';
import HeroSmallHeading from '../components/HeroSmallHeading';
import Text from '../components/Text';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DwbLogo from '../assets/dwblogo.png';
import Button from 'react-bootstrap/Button';
import Initial from '../assets/initialdesignbanner.png'
import Final from '../assets/finalbanner.png'

function Dwb(props){
    const btn ={backgroundColor: '#ffffff', color: '#000000'};
    return(
        <div>
            <HeroProject />
            <div className="text-center">
                <img className="img-fluid" alt="Responsive image"src={DwbLogo}/>
            </div>
            <HeroContent>
                Doctors Without Borders is a medical organization that runs humanitarian projects in conflict zones and countries affected by endemic diseases. The Cornell chapter volunteers at medical-related events and spreads awareness of illness abroad.
            </HeroContent>
            <div className="mt-5">
                <HeroHeading>Initial Design Sketches</HeroHeading>
                <div className="text-center">
                    <img className="img-fluid" alt="Responsive image"src={Initial}/>
                </div>
            </div>
            <div className="mt-5">
                <HeroHeading>Final Design Sketches</HeroHeading>
                <div className="text-center pt-5">
                    <img className="img-fluid" alt="Responsive image"src={Final}/>
                </div>
            </div>
            <div className="mt-5">
                <HeroHeading>Final Website</HeroHeading>
                <div className="ml-5 text-wrap">
                    <HeroContent>
                        After sketching and user testing, we coded up the website in HTML, CSS, PHP, and Javascript, and used SQLite for the database.
                    </HeroContent>
                </div>
            </div>
            <div className="mt-5 text-center">
                <Button type='button' href=' https://medium.com/@ijg24/client-description-4b020c2d0aee' target='_blank' style={btn} className="outline-success mt-5 p-4 pl-5 pr-5 text-center"> View Case Study </Button>
            </div>

        </div>

    );

}
export default Dwb;
