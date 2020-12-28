import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import yearOne from '../Assets/Images/yearOne.jpg'


function AboutUs() {
  return (
    <div>
      <h3>About us</h3>
      <div>

        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="tab1" title="Tab 1">
            something
  </Tab>
          <Tab eventKey="tab2" title="Tab 2">
            something
  </Tab>
          <Tab eventKey="tab3" title="Tab 3">
            something
  </Tab>
          <Tab eventKey="tab4" title="Tab 4">
            something
  </Tab>
        </Tabs>
        <Row>
          <Col sm={4}>
            <img src={yearOne}
              width="200"
              height="200" />
          </Col>
          <Col sm={8}>
            Adress
        </Col>
        </Row>
      </div>
    </div>

  )


};

export default AboutUs;