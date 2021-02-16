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
                <Container>
                    <Row className="Title">
                        <Col><h2>Mes Expériences Profesionelles</h2></Col>
                    </Row>
                    <Container className="Experience-Bloc">
                        <Row>

                            <Col><h2>Février à Aout 2020</h2></Col>

                        </Row>
                        <Row>
                            <Col> Stage de 6 mois</Col>

                        </Row>
                        <Row>
                            <Col><h5>6Solution</h5></Col>

                        </Row>
                        <Row>
                            <Col><img src={Six_solution} width="20%"/></Col>
                        </Row>
                        <Row>
                            <Col> Meknes - Maroc</Col>

                        </Row>
                        <Row>
                            <Col><h2>Era-Auto</h2></Col>
                        </Row>
                        <Row>
                            <Col><img src={Era_auto} width="20%"/></Col>
                        </Row>
                        <Row>
                            <Col>
                            Era-auto est une chaine de magasin en ligne qui vend des pièces détacher d'automobile de toute marque. elle est en relations avec plusieurs fournisseurs, distributeurs. elle a pour projet de créer une nouvelle plateforme de magasin en ligne. Conception et développement d’une plateforme web multilangue de vente de pièce détachée d’automobile basée sur des API.
                            </Col>
                        </Row>
                        <Container>
                            <Row>
                                <Col><h2>Taches Réalisé</h2></Col>
                            </Row>
                            <Row>
                                <Col>
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
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col><h2>Technologie</h2></Col>
                            </Row>
                            <Row>
                                <Col>                              
                                    ReactJs, NextJs, NodeJs, ExpressJs, MySQL, AWS (Amazon Web Service), Bootstrap,Github                                    
                                </Col>
                            </Row>
                        </Container>

                    </Container>

                    <Container className="Experience-Bloc">
                        <Row>

                            <Col><h2>Janvier à Février 2020</h2></Col>

                        </Row>
                        
                        <Row>
                            <Col><h5>UHA 4.0</h5></Col>

                        </Row>
                        <Row>
                            <Col>Mulhouse - France</Col>

                        </Row>
                        <Row>
                            <Col><h2>EdCampus</h2></Col>
                        </Row>                       
                        <Row>
                            <Col>
                            Projet en groupe. Amélioration d’une plateforme web de gestion de projet.
                            </Col>
                        </Row>
                        <Container>
                            <Row>
                                <Col><h2>Taches Réalisé</h2></Col>
                            </Row>
                            <Row>
                                <Col>
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
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col><h2>Technologie</h2></Col>
                            </Row>
                            <Row>
                                <Col>                              
                                    AngularJs, PhP, Docker, Gitlab, MongoDB
                                </Col>
                            </Row>
                        </Container>
                    </Container>



                    <Container className="Experience-Bloc">
                        <Row>

                            <Col><h2>Novembre à Décembre 2019</h2></Col>

                        </Row>
                        
                        <Row>
                            <Col><h5>UHA 4.0</h5></Col>

                        </Row>
                        <Row>
                            <Col>Mulhouse - France</Col>

                        </Row>
                        <Row>
                            <Col><h2>Badgeuse</h2></Col>
                        </Row>                       
                        <Row>
                            <Col>
                            Projet en groupe. Amélioration d’une plateforme web de la gestion de la présence des étudiants.
                            </Col>
                        </Row>
                        <Container>
                            <Row>
                                <Col><h2>Taches Réalisé</h2></Col>
                            </Row>
                            <Row>
                                <Col>
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
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col><h2>Technologie</h2></Col>
                            </Row>
                            <Row>
                                <Col>                              
                                    Angular, NodeJs, ExpressJs, Gitlab, MySql
                                </Col>
                            </Row>
                        </Container>
                    </Container>

                    <Container className="Experience-Bloc">
                        <Row>

                            <Col><h2>Mars à Septembre 2019</h2></Col>

                        </Row>                        
                        <Row>
                            <Col> Stage de 6 mois</Col>

                        </Row>
                        <Row>
                            <Col><h5>6Solution</h5></Col>

                        </Row>
                        <Row>
                            <Col><img src={Six_solution} width="20%"/></Col>
                        </Row>
                        <Row>
                            <Col> Meknes - Maroc</Col>

                        </Row>
                        <Row>
                            <Col><h2>SoluDoc</h2></Col>
                        </Row>                       
                        <Row>
                            <Col>
                                Projet d’une plateforme web de gestion de rendezvous médicaux.
                            </Col>
                        </Row>
                        <Container>
                            <Row>
                                <Col><h2>Taches Réalisé</h2></Col>
                            </Row>
                            <Row>
                                <Col>
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
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col><h2>Technologie</h2></Col>
                            </Row>
                            <Row>
                                <Col>                              
                                    Angular, NodeJs, ExpressJs, Gitlab, MySql
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Experience;
