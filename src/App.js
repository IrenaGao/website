import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Microdot from './pages/Microdot';
import Dwb from './pages/Dwb';
import ResumePage from './pages/ResumePage';
import Resume from './assets/mainresume.pdf';

import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faGithub, faCoffee, faEnvelope, faLinkedin)


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Irena Gao',
            headerLinks:
            [
                    { title: 'Work', path: "/" },
                    { title: 'Resume', path: '/resume' },
                    { title: 'Me', path: '/me'}
            ],
            home:{
                title: "Hi I'm Irena!",
                subTitle: 'I am a product designer, marketer, and front-end developer who creates technology for communities',
                text: 'Check out my work below!'
            },
            resume:{
                title: "Resume",
            },
            me:{
                title: "About Me",
            }
        }
    }

    render(){
        return(
            <HashRouter basename='/'>
                <Router>
                    <Container fluid={true}>
                        <Navbar bg="transparent" expand="lg">
                            <h2> <Navbar.Brand className="display-2 font-weight-bolder"> Irena Gao </Navbar.Brand> </h2>

                            <Navbar.Toggle aria-controls="navbar-toggle"/>
                            <Navbar.Collapse id="navbar-toggle">
                                <Nav className="ml-auto">
                                    <h5> <Link className="nav-link display-5 font-weight-semibold" to="/">Work</Link></h5>
                                    <h5> <Link className="nav-link display-5 font-weight-semibold" to="/me">Me</Link></h5>
                                    <h5> <a className="nav-link display-5 font-weight-semibold" href={Resume} target="_blank">Resume</a></h5>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Route path="/" exact render={() => <HomePage title={this.state.home.title}  subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                        <Route path="/me" render={() => <AboutPage title={this.state.me.title} />} />
                        <Route path="/Microdot" component={Microdot} />
                        <Route path="/Dwb" component={Dwb} />
                    <Footer />
                    </Container>
                </Router>
            </HashRouter>
        );
    }
}
export default App;
