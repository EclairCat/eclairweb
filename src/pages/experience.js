import React, { Component } from 'react';
import { Row, Col, Container, List } from 'react-bootstrap';
import Era_auto from '../img/era-auto.png';
import Six_solution from '../img/6solution.png';


class Experience extends Component {

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
                <Container fluid className="Experience-Bloc1">
                    <Row className="Title">
                        <Col><h1>Mes Expériences Profesionelles</h1></Col>
                    </Row>



                    <Container fluid>
                        <Row>
                            <Col>
                                <img src={Six_solution} width="50%" />
                            </Col>
                            <Col>
                                Stage de 6 mois de  <b>Février à Aout 2020</b> <br/>
                                <i>Meknes - Maroc</i>

                            </Col>
                        </Row>
                    </Container>



                    <Container fluid className="Experience-Bloc1">
                        <Row>
                            <Col>
                                <img src={Era_auto} width="50%" />
                            </Col>
                            <Col>
                                Era-auto est une chaine russe de magasin en ligne qui vend des pièces détachées d'automobiles de toute marque en Russie. son objectif est de conquérir le marché international. Dans ce but, notre équipe lui a conçu une plateforme moderne.

                               
                                    <h3>Taches Réalisées :</h3>
                                
                                
                                    <list>
                                        <li>Analyse et Conception des besoins
                                        fonctionnels et techniques
                                        </li>
                                        <li>
                                            Choix des outils de développement
                                        </li>
                                        <li>
                                            Développement Full Stack de la plateforme
                                            administrateur.
                                        </li>
                                    </list>
                                
                                
                                    <h3>Technologie</h3>
                                
                                                                   
                                    ReactJs, NextJs, NodeJs, ExpressJs, MySQL, AWS (Amazon Web Service), Bootstrap, Github                               
                                
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="Experience-Bloc1">
                        <Row>
                            <Col>
                                <h2>Tache en Cours :  </h2>
                                <img src={Era_auto} width="50%" />
                            </Col>
                            <Col>
                                À la fin de mon stage, la société <b>6solution </b>  m’a contacté pour aouter la fonctionnalité multi-langue à la plateforme russe Era - auto . Je suis très honoré de leur confiance.
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="Experience-Bloc1">
                        <Row>
                            <Col>
                                <h1>UHA 4.0</h1>
                                <h2>Edcampus</h2>
                                Janvier à Février 2020              
                            </Col>
                            <Col>
                                Projet en groupe. Amélioration d’une plateforme web de gestion de projet. <br/>
                                <i>Mulhouse - France</i>
                                
                                <h3>Taches Réalisé</h3>

                                <list>
                                        <li>Participation à l’analyse des besoins
                                        </li>
                                        <li>
                                            Détection et résolutions des problèmes techniques
                                        </li>
                                        <li>
                                            Méthodologie SCRUM
                                        </li>
                                        <li>
                                            Chef SCRUM
                                        </li>
                                        <li>
                                            Suivi de l’équipe du bon déroulement et de l’avancement du projet.
                                        </li>
                                </list>

                                <h3>Technologie</h3>

                                AngularJs, PhP, Docker, Gitlab, MongoDB
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="Experience-Bloc1">
                        <Row>
                            <Col>
                                <h1>UHA 4.0</h1>
                                <h2>Badgeuse</h2>
                                Novembre à Décembre 2019             
                            </Col>
                            <Col>
                                Projet en groupe. Amélioration d’une plateforme web de la gestion de la présence des étudiants. <br/>
                                <i>Mulhouse - France</i>
                                
                                <h3>Taches Réalisé</h3>

                                <list>
                                        <li>Participation à l’analyse des besoins
                                        </li>
                                        <li>
                                            Détection et résolutions des problèmes techniques
                                        </li>
                                        <li>
                                            Ajout de nouvelle fonctionalités
                                        </li>
                                        <li>
                                            Participation à la Méthodologie SCRUM
                                        </li>
                                    </list>

                                <h3>Technologie</h3>

                                Angular, NodeJs, ExpressJs, Gitlab, MySql
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="Experience-Bloc1">
                        <Row>
                            <Col>
                                <img src={Six_solution} width="50%" />
                            </Col>
                            <Col>
                                Stage de 6 mois de  <b>Mars à Septembre 2019</b> <br/>
                                <i>Meknes - Maroc</i>

                                Projet d’une plateforme web de gestion de rendezvous médicaux.

                                <h3>Taches Réalisé</h3>

                                <list>
                                        <li>Analyse des besoins fonctionnels et technique
                                        </li>
                                        <li>
                                            Choix des outils de développement
                                        </li>
                                        <li>
                                            Conception et Développement de la plateforme Web
                                        </li>
                                </list>


                                <h3>Technologie</h3>

                                Angular, NodeJs, ExpressJs, Gitlab, MySql
                            </Col>
                        </Row>
                    </Container>

                    
                </Container>
            </div>
        );
    }
}

export default Experience;
