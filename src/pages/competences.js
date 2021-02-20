import {Button, Alert, Row, Col, Container, Badge} from 'react-bootstrap';
import React, { Component, Redirect } from 'react';

import logo_code from '../img/logo_code.png';
import logo_mobile from '../img/mobile_logo.png';
import logo_web from '../img/web_logo.png';
import logo_bdd from '../img/bdd_logo.png';

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
        <Container fluid className="Competence_bloc">
        <Row className="Title">
          <Col>
            <h1>Mes Compétences</h1>
          </Col>   
        </Row>

        <Row className="competence_ligne">

          <Col>
          <img className="logo" src={logo_code}/>
          <h4>Programmation / Structuration De Données</h4>
          <h5><Badge variant="secondary">SQL</Badge><Badge variant="secondary">.NET</Badge><Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">C</Badge><Badge variant="secondary">C#</Badge><Badge variant="secondary">C++</Badge><Badge variant="secondary">Shell</Badge>
          <Badge variant="secondary">JAVA</Badge></h5>
          
          </Col>

          <Col>
          <img className="logo" src={logo_mobile}/>
          <h4>Développement Mobile</h4>
          <h4><Badge variant="secondary">Ionic</Badge><Badge variant="secondary">React Native</Badge></h4>
          </Col>
        
          <Col>
          <img className="logo" src={logo_web}/>
          <h4>Développement Web</h4>
          <h5><Badge variant="secondary">HTML</Badge><Badge variant="secondary">CSS</Badge><Badge variant="secondary">JS</Badge><Badge variant="secondary">PHP</Badge> <br/>
         </h5> 
         <h4>Framework Web</h4>
          <h5><Badge variant="secondary">NodeJS</Badge><Badge variant="secondary">ReactJS</Badge><Badge variant="secondary">Angular</Badge><Badge variant="secondary">AngularJS</Badge>
          </h5></Col>
        </Row>

        <Row>

          <Col>
          <img className="logo" src={logo_bdd}/>
          <h4>Base De Données</h4>
          <h5><Badge variant="secondary">SQL Server</Badge><Badge variant="secondary">MySQL</Badge><Badge variant="secondary">Oracle</Badge>
          <Badge variant="secondary">MongoDB</Badge><Badge variant="secondary">PHPMYADMIN</Badge></h5>
          </Col>  
        </Row>

        
        </Container>      
              
        
      
    </div>
    );
  }
}

export default WIP;
