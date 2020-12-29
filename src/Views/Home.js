
import Container from 'react-bootstrap/Container';
import CarouselComponent from '../components/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../components/CardComponent';
import yearOne from '../Assets/Images/yearOne.jpg';
import { home } from '../CSS/home.css'
import logo from '../Assets/Images/logo.png';
import vaccine from '../Assets/Images/vaccine.jpg';
import couple from '../Assets/Images/couple.jpg';
import nasa from '../Assets/Images/nasa.jpg';
import { Link } from 'react-router';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={4}>

                        <img
                            src={logo}
                            width="200"
                            height="200"
                            className="d-inline-block align-top"
                        />
                    </Col>
                    <Col sm={8}>

                        <Row className="heading-row">
                            <h1>Was it really that bad?</h1>
                        </Row>
                        <Row>
                            <h3>The year 2020 turned out to be a difficult one to love.

                                Still, good things did happen.</h3>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <CarouselComponent />
            <Row className="card-row">

                    <NavLink to="/article1" className="nav-link">
                        <CardComponent image={vaccine} title="Science" href="/article1"
                            text="A terrible plague struck humankind, but scientists responded with unprecedented speed and common purpose." />
                    </NavLink>
               
                    <NavLink to="/article1" className="nav-link">
                        <CardComponent image={couple} title="Connection"
                            text="We also connected and reconnected with friends, relatives, colleagues and therapists across great distances." />
                    </NavLink>
            
                    <NavLink to="/article1" className="nav-link">
                    <CardComponent image={nasa} title="New heights"
                        text="The United States launched astronauts to the International Space Station on a U.S.-made rocket." />
                    </NavLink>
              
            </Row>

        </div >

    )


};



export default Home;