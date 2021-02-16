import React, { Component } from 'react';
import Eclair_web_logo from '../img/eclair_web_logo.png';
import { Container, Row, Col } from 'react-bootstrap';


class Acceuil extends Component {

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
      <div className="App-header">
        <Container>
          <Row>
            <Col><img src={Eclair_web_logo} className="img" /></Col>
          </Row>
          <Row className="Title">
            <Col><h2>Bienvenue sur mon Site Web</h2></Col>
          </Row>
          <Row className="Experience-Bloc">
            Ici vous trouverez toutes mes informations 
          </Row>
        </Container>        
      </div>   
    );
  }
}

export default Acceuil;
