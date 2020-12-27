
import Container from 'react-bootstrap/Container';
import CarouselComponent from '../page-components/HomePageComponent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from '../page-components/CardComponent';
import yearOne from '../Assets/Images/yearOne.jpg';
import { home } from '../CSS/home.css'
import logo from '../Assets/Images/logo.png';


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
                    
                    <Row>
                        <h1>Was 2020 really that bad?</h1>
                    </Row>
                    <Row>
                        <h3>People are evaluating this year as the worst one in history. Sure there was a beginning of pandemic and other stuff, but wasn't there nothing to like? </h3>
                    </Row>
                    </Col>
                    </Row>
                </Container>
              <CarouselComponent/>
              <Row className="card-row">
                  <Col>
                  <CardComponent image={yearOne} title="nosaukums"
                    text="Some quick example text to build on the card title and make up the bulk of
      the card's content."/>
                  </Col>
                  <Col>
                  <CardComponent image={yearOne} title="divi"
                    text="Some quick example text to build on the card title and make up the bulk of
      the card's content."/>
                  </Col>
                  <Col>
                  <CardComponent image={yearOne} title="tris"
                  text="Some quick example text to build on the card title and make up the bulk of
      the card's content."/>
                  </Col>
              </Row>
              
            </div>
    
     )
    
    
    };
    
   
   
    export default Home;