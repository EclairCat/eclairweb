import eclair from '../img/yuy.png';
import {Button, Alert, Row, Col, Container} from 'react-bootstrap';
import React, { Component, Redirect } from 'react';

//Import LOGO
import sql_logo from '../img/Tech/Sql_logo.png';
import bash_logo from '../img/Tech/bash_logo.png';
import c_logo from '../img/Tech/C_logo.png';
import c_sharp_logo from '../img/Tech/C_sharp.png';
import c_plus_plus_logo from '../img/Tech/c++.png';
import python_logo from '../img/Tech/python_logo.png';
import visual_studio_logo from '../img/Tech/visual_studio.png';
import java_logo from '../img/Tech/java_logo.png';

//Import Logo Mobile
import ionic_logo from "../img/framework/ionic_logo.png";
import react_native_logo from '../img/framework/react_native_logo.png';

//Logo Web
import html_logo from '../img/framework/html_logo.png';
import css_logo from '../img/framework/CSS_logo.png';
import js_logo from '../img/framework/js_logo.png';
import php_logo from '../img/framework/PHP_logo.png';

//Framework web
import nodejs_logo from '../img/framework/nodejs_logo.png';
import angular_logo from '../img/framework/Angular_logo.png';
import angularjs_logo from '../img/framework/Angularjs_logo.png';
import bootstrap_logo from '../img/framework/bootstrap_logo.png';
import react_logo from '../img/framework/React_logo.png';

//BDD
import my_sql_logo from '../img/framework/my_sql_logo.png';
import oracle_logo from '../img/framework/oracle_logo.png';
import mongodb_logo from '../img/framework/mongodb_logo.png';
import sql_server_logo from '../img/framework/SQL_server_logo.png';
import php_my_admin_logo from '../img/framework/PhpMyAdmin_logo.png';


class WIP extends Component {

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

  //Functions


  render() {
    if (this.state.redirection) {
      //Affichage de la redirection
      return <Redirect to='/google.com'/>;
    }

    return (
      <div className="App-Bg">
        <Container className="">
        <Row>
          <Col>
            <h1 className="Title">Mes Compétences</h1>
          </Col>   
        </Row>


        <Container className="Experience-Bloc">
        <Row>
          <Col>
            <h3 className="little_title">Programmation / Structuration De Données</h3>
          </Col>   
        </Row> 
        <Row>
          <Col>
              <img className="logo" src={sql_logo}/>
          </Col>
          <Col>
            <img className="logo" src={visual_studio_logo}/>
          </Col>          
          <Col>
            <img className="logo" src={python_logo}/>
          </Col>
          <Col>
            <img className="logo" src={c_logo}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <img className="logo" src={c_sharp_logo}/>
          </Col>
          <Col>
            <img className="logo" src={c_plus_plus_logo}/>
          </Col>          
          <Col>
            <img className="logo" src={bash_logo}/>
          </Col>
          <Col>
            <img className="logo" src={java_logo}/>
          </Col>        
        </Row>
        </Container>
        <Container className="Experience-Bloc">
        <Row>
          <Col>
            <h3 className="little_title">Développement Mobile</h3>
          </Col>   
        </Row>
        <Row>          
          <Col>
            <img className="logo" src={ionic_logo}/>
          </Col>          
          <Col>
            <img className="logo" src={react_native_logo}/>
          </Col>
          <Col>
            
          </Col>
          <Col>
            
          </Col>     
        </Row>
        </Container>
        <Container className="Experience-Bloc">
        <Row>
          <Col>
            <h3 className="little_title">Développement Web</h3>
          </Col>   
        </Row>
        <Row>
          <Col>
              <img className="logo" src={html_logo}/>
          </Col>
          <Col>
            <img className="logo" src={css_logo}/>
          </Col>          
          <Col>
            <img className="logo" src={js_logo}/>
          </Col>
          <Col>
            <img className="logo" src={php_logo}/>
          </Col>
        </Row>
        </Container>


        <Container className="Experience-Bloc">
        <Row>
          <Col>
            <h3 className="little_title">Framework Web</h3>
          </Col>   
        </Row>
        <Row>
          <Col>
              <img className="logo" src={nodejs_logo}/>
          </Col>
          <Col>
            <img className="logo" src={angular_logo}/>
          </Col>          
          <Col>
            <img className="logo" src={angularjs_logo}/>
          </Col>
          <Col>
            <img className="logo" src={react_logo}/>
          </Col>
        </Row>
        <Row>
          <Col>
              <img className="logo" src={bootstrap_logo}/>
          </Col>
          <Col>
            
          </Col>          
          <Col>
            
          </Col>
          <Col>
            
          </Col>
        </Row>
        </Container>


        <Container className="Experience-Bloc">
        <Row>
          <Col>
            <h3 className="little_title">Base De Données</h3>
          </Col>   
        </Row>

        <Row>
          <Col>
              <img className="logo" src={sql_server_logo}/>
          </Col>
          <Col>
            <img className="logo" src={my_sql_logo}/>
          </Col>          
          <Col>
            <img className="logo" src={oracle_logo}/>
          </Col>
          <Col>
            <img className="logo" src={mongodb_logo}/>
          </Col>
        </Row>
        <Row>
          <Col>
              <img className="logo" src={php_my_admin_logo}/>
          </Col>
          <Col>
            
          </Col>          
          <Col>
            
          </Col>
          <Col>
            
          </Col>
        </Row>
        </Container>

        
        
        </Container>      
              
        
      
    </div>
    );
  }
}

export default WIP;
