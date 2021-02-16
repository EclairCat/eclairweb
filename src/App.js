import { HashRouter, Route, Switch } from 'react-router-dom';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Alert, Row } from 'react-bootstrap';
import Eclair_web_band_logo from './img/eclair_web_logo_band.png';

import './App.css';
import React, { Component, Redirect } from 'react';

//Pages
const Acceuil = React.lazy(() => import('./pages/acceuil'));
const WIP = React.lazy(() => import('./pages/competences'));
const Realisation = React.lazy(() => import('./pages/realisation'));
const Experience = React.lazy(() => import('./pages/experience'));
const Contact = React.lazy(() => import('./pages/contact'));




const loading = () => <div className="App-header">Loading...</div>;


class App extends Component {

  constructor(props) {
    super(props);

    //State
    this.state = {
    };

    /*
    *    BINDING HTTP REQUEST
    */


    //Get


    //POST


  }


  render() {

    return (
      <div className="App">
        <Navbar expand="lg">
          <Navbar.Brand href="#"><img width="100" height="10%" src={Eclair_web_band_logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link class="na_color_white" href="#experience">Mes Experiences</Nav.Link>
              <Nav.Link href="#competence">Mes Compétences</Nav.Link> 
              <Nav.Link href="#realisation">Mes Réalisations</Nav.Link>
              <Nav.Link href="#contact">Me Contacter</Nav.Link>   
                         
            </Nav>            
          </Navbar.Collapse>
        </Navbar>
        <HashRouter>
        <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/competence" name="work in progress" render={props => <WIP {...props} />} />
              <Route exact path="/realisation" name="work in progress" render={props => <Realisation {...props} />} />
              <Route exact path="/experience" name="work in progress" render={props => <Experience {...props} />} />
              <Route exact path="/contact" name="work in progress" render={props => <Contact {...props} />} />
              <Route exact path="/" name="Acceuil" render={props => <Acceuil {...props} />} />
            </Switch>
        </React.Suspense>
        </HashRouter>
      </div>
    );
  }
}

export default App;
