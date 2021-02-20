import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Linkdin_logo from "../img/linkdin.png";


class Contact extends Component {

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
          <Row className="Title">
                        <Col><h2>Me Contacter</h2></Col>
          </Row>
          <Row>
            <Col className="Experience-Bloc">
              <Row>
                <Col> <div className="little_title"> Email </div> </Col>
              </Row>
              <Row>
                <Col> Bougedrawi.rabie@gmail.com </Col>
              </Row>               
            </Col>
            <Col className="Experience-Bloc">

            <Row> <Col><div className="little_title"> Telephone  </div> </Col></Row>
            <Row> <Col> +33 (0) 7 60 06 41 68</Col></Row>
               
            </Col>            
          </Row>
          <Row className="RS_links">
            <img src={Linkdin_logo} width="80"/> <a className="link_left_margin" href="https://www.linkedin.com/in/rabie-bougedrawi-679354185">  Mon profil LinkedIn</a>
          </Row>
        </Container>
        
      </div>   
    );
  }
}

export default Contact;
