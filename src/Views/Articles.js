import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import yearOne from '../Assets/Images/yearOne.jpg'
import { articles } from '../CSS/articles.css';
import vaccine from '../Assets/Images/vaccine.jpg';
import couple from '../Assets/Images/couple.jpg';
import nasa from '../Assets/Images/nasa.jpg';
import { NavLink } from 'react-router-dom';

function Articles() {
    return (
        <Container>
            <Row className="article-row">
                <Col sm={4}>
                    <img src={vaccine} alt="Article1" className="articles-image"></img>
                </Col>
                <Col sm={8}>
                <NavLink to="/article1" className="article-link">
                    <h3>Science</h3></NavLink>
                    <p>A terrible plague struck humankind, but scientists responded with unprecedented speed and common purpose; cooperating across national lines to decode the virus and then discover and manufacture vaccines that can prevent the disease.</p>
                </Col>
            </Row>
            <Row className="article-row">
                <Col sm={4}>
                    <img src={couple} alt="Article1" className="articles-image"></img>
                </Col>
                <Col sm={8}>
                <NavLink to="/article1" className="article-link">
                    <h3>Connections</h3></NavLink>
                    <p>We also connected and reconnected with friends, relatives, colleagues and therapists across great distances as we became accustomed to Zoom calls and FaceTime video chats. We wouldn’t suggest that in-person wedding celebrations are gone forever — but the advances we made in telehealth, remote work and virtual gatherings will outlast the pandemic.</p>
                </Col>
            </Row>
            <Row className="article-row">
                <Col sm={4}>
                    <img src={nasa} alt="Article1" className="articles-image"></img>
                </Col>
                <Col sm={8}>
                <NavLink to="/article1" className="article-link">
                    <h3>New heights</h3></NavLink>
                    <p>The United States launched astronauts to the International Space Station on a U.S.-made rocket, after years of dependence on Russian technology. The reusable booster did its job and then returned safely, potentially opening an era of more cost-efficient space travel.</p>
                </Col>
            </Row>
        </Container>
    )


};

export default Articles;