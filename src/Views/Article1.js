import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { articles1 } from '../CSS/article1.css';
import yearOne from '../Assets/Images/yearOne.jpg';
import { SRLWrapper } from "simple-react-lightbox";
import vaccine from '../Assets/Images/vaccine.jpg';
import couple from '../Assets/Images/couple.jpg';
import nasa from '../Assets/Images/nasa.jpg';

function Article1() {
  return (
    <div>
      <h3>20 good things that happened in 2020 </h3>
      <SRLWrapper>
        <Row>
          <Col sm={5}>
            <Row>
              <a href={yearOne} data-attribute="SRL">
                <img className="main-image-article" src={yearOne} />
              </a>
            </Row>
            <Row className="images-below">
              <Col><a href={vaccine} data-attribute="SRL"><img className="small-image-article" src={vaccine} /></a></Col>
              <Col><a href={couple} data-attribute="SRL"><img className="small-image-article" src={couple} /></a></Col>
              <Col><a href={nasa} data-attribute="SRL"><img className="small-image-article" src={nasa} /></a></Col>
            </Row>
            <Row className="images-below">
              <Col><a href={vaccine} data-attribute="SRL"><img className="small-image-article" src={vaccine} /></a></Col>
              <Col><a href={couple} data-attribute="SRL"><img className="small-image-article" src={couple} /></a></Col>
              <Col><a href={nasa} data-attribute="SRL"><img className="small-image-article" src={nasa} /></a></Col>
            </Row>
          </Col>
          <Col sm={7}>
            <p>
              When we began listing good things that happened in the year to match the year’s number — 16 good things in 2016, 17 good things in 2017, and so on — we knew the exercise would grow more challenging as the century wore on. To be honest, though, we didn’t think it would get this hard, this fast. The year 2020 turned out to be a difficult one to love.
              Still, good things did happen. Perhaps more than usual, our list this year includes silver linings — "Yes, a terrible plague struck humankind, but...” We don’t apologize for that; finding the silver linings is how we all make it through. And we’re sure this list is far from exhaustive; we’d love to hear from you. What good things happened in 2020 that we’ve omitted here?
              More to the point — we’d like to wish everyone a safe and happy new year. May our common challenge a year from now be whittling the list down to 21!
              Without further ado, then, 20 good things — starting with a few of those silver linings.
            </p>
          </Col>
        </Row>
      </SRLWrapper>
    </div>
  )
};
 
export default Article1;