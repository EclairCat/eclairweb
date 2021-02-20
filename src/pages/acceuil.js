import React, { Component } from 'react';
import Eclair_web_logo from '../img/eclair_web_logo.png';
import rb_photo from '../img/BOUGEDRAWI_Rabie.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import Linkdin_logo from "../img/linkdin.png";


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
      <div className="App-Bg">
        <Container>
          <Row className="Acceuil_cellule1">
            <Col ><img src={rb_photo} className="img_Acceuil" /></Col>
            <Col xs="4" sm="6" xl="7" className="legende_acceuil">
              <Row>
                <Col><h1>Bienvenue!</h1></Col>
              </Row>
              <Row>
                <Col><h1>Je suis <b> Bougedrawi Rabie</b></h1></Col>
              </Row>
              <Row className="add_line">
                <Col><h4><i> Développeur Informatique </i></h4></Col>
              </Row>              
              <Row>
                <Col> <b>Age : </b> 23 ans</Col>
              </Row>
              <Row>
                <Col> <b>Adresse : </b>  67540 Ostwald</Col>
              </Row>
              <Row>
                <Col> <b>Email : </b> Bougedrawi.rabie@gmail.com</Col>
              </Row>
              <Row>
                <Col> <b>Téléphone :</b> +33 7 60 06 41 68</Col>
              </Row>
            </Col>
          </Row>          
          <Row className="cellule_bas_acceuil">
              <Col> <a  href="https://www.linkedin.com/in/rabie-bougedrawi-679354185"> <img className="linked_in_acceuil" src={Linkdin_logo} width="40"/> </a></Col>
          </Row>          
        </Container>
      </div>
    );
  }
}

export default Acceuil;
