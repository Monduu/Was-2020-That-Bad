import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import yearOne from '../Assets/Images/yearOne.jpg'
import { articles } from '../CSS/articles.css';

function Articles() {
    return (
           <Container>
               <Row className="article-row">
                   <Col sm={4}>
                   <img src={yearOne} alt="Article1" className="articles-image"></img>
                   </Col>
                   <Col sm={8}>
                   <h3>Article 1 </h3>
                   <p>Lorem</p>
                   </Col>
               </Row>
               <Row className="article-row">
                   <Col sm={4}>
                   <img src={yearOne} alt="Article1" className="articles-image"></img>
                   </Col>
                   <Col sm={8}>
                   <h3>Article 1 </h3>
                   <p>Lorem</p>
                   </Col>
               </Row>
               <Row className="article-row">
                   <Col sm={4}>
                   <img src={yearOne} alt="Article1" className="articles-image"></img>
                   </Col>
                   <Col sm={8}>
                   <h3>Article 1 </h3>
                   <p>Lorem</p>
                   </Col>
               </Row>
           </Container>
    )
    
    
    };
    
    export default Articles;