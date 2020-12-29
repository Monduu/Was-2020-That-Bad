import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import yearOne from '../Assets/Images/yearOne.jpg'
import vaccine from '../Assets/Images/vaccine.jpg';
import couple from '../Assets/Images/couple.jpg';
import nasa from '../Assets/Images/nasa.jpg';


function AboutUs() {
  return (
    <div>
      <h3>About us</h3>
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="tab1" title="Tab 1">
            <Col sm={5}><img src={yearOne} alt='' className="tab-image" /></Col>
            <Col sm={7}></Col>
          </Tab>
          <Tab eventKey="tab2" title="Tab 2">
            <Col sm={5}><img src={nasa} alt='' className="tab-image" /></Col>
            <Col sm={7}></Col>
          </Tab>
          <Tab eventKey="tab3" title="Tab 3">
            <Col sm={5}><img src={couple} alt='' className="tab-image" /></Col>
            <Col sm={7}></Col>
          </Tab>
          <Tab eventKey="tab4" title="Tab 4">
            <Row>
              <Col sm={5}><img src={vaccine} alt='' className="tab-image" /></Col>
              <Col sm={7}></Col>
            </Row>
          </Tab>
        </Tabs>
        <Row>
          <Col sm={4}>
            <img src={yearOne}
              width="200"
              height="200" />
          </Col>
          <Col sm={8}>
            <p>Adress</p>
            <p>Mūkusalas iela 3,</p>
            <p>Zemgales priekšpilsēta,</p>
             Rīga, LV-1423
        </Col>
        </Row>
      </div>
    </div>
  )
};

export default AboutUs;