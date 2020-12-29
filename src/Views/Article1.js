import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import yearOne from '../Assets/Images/yearOne.jpg';
import { article1 } from '../CSS/article1.css';
import ArticleImages from '../components/Lightbox.js';


function Article1() {
    return (
            <div>
        <h3>20 good things that happened in 2020 </h3>
        <Row>
                <Col sm={5}>
                <Row><img src={yearOne} className="main-image-article"/></Row>
                <Row className="images-below">
                        <Col><img src={yearOne} className="small-image-article"/></Col>
                        <Col><img src={yearOne} className="small-image-article"/></Col>
                        <Col><img src={yearOne} className="small-image-article"/></Col>

                </Row>
                <Row className="images-below">
                        <Col><img src={yearOne} className="small-image-article"/></Col>
                        <Col><img src={yearOne} className="small-image-article"/></Col>
                        <Col><img src={yearOne} className="small-image-article"/></Col>

                </Row>
                </Col>
                <Col sm={7}>
                <p>When we began listing good things that happened in the year to match the year’s number — 16 good things in 2016, 17 good things in 2017, and so on — we knew the exercise would grow more challenging as the century wore on. To be honest, though, we didn’t think it would get this hard, this fast. The year 2020 turned out to be a difficult one to love.

Still, good things did happen. Perhaps more than usual, our list this year includes silver linings — "Yes, a terrible plague struck humankind, but...” We don’t apologize for that; finding the silver linings is how we all make it through. And we’re sure this list is far from exhaustive; we’d love to hear from you. What good things happened in 2020 that we’ve omitted here?

More to the point — we’d like to wish everyone a safe and happy new year. May our common challenge a year from now be whittling the list down to 21!

Without further ado, then, 20 good things — starting with a few of those silver linings.


                </p>
                </Col>
        </Row>
            </div>
    
    )
    
    
    };
    
    export default Article1;